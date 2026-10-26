import { readdir, readFile, access, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const files=(await readdir(root)).filter(file=>file.endsWith('.html'));
const titles=new Set(),descriptions=new Set(),issues=[],results=[];
const contents=Object.fromEntries(await Promise.all(files.map(async file=>[file,await readFile(path.join(root,file),'utf8')])));
for(const file of files){
  const html=contents[file], pageIssues=[];
  const title=html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description=html.match(/<meta name="description" content="([^"]+)"/s)?.[1];
  if(!title||titles.has(title))pageIssues.push('Missing or duplicated title');
  if(!description||descriptions.has(description))pageIssues.push('Missing or duplicated description');
  titles.add(title);descriptions.add(description);
  if((html.match(/<h1[\s>]/g)||[]).length!==1)pageIssues.push('Expected one H1');
  if(!html.includes('lang="en-SG"'))pageIssues.push('Missing document language');
  for(const image of html.matchAll(/<img\b([^>]+)>/g)){if(!/\balt="[^"]*"/.test(image[1]))pageIssues.push('Image without alt text');if(!/\bwidth="\d+"/.test(image[1])||!/\bheight="\d+"/.test(image[1]))pageIssues.push('Image without size attributes');}
  for(const sourceSet of html.matchAll(/\bsrcset="([^"]+)"/g)){
    for(const candidate of sourceSet[1].split(',')){
      const source=candidate.trim().split(/\s+/)[0];
      if(!/^(https?:|data:)/.test(source)){try{await access(path.join(root,source));}catch{pageIssues.push(`Missing responsive image: ${source}`);}}
    }
  }
  for(const control of html.matchAll(/\baria-controls="([^"]+)"/g)){
    for(const targetId of control[1].split(/\s+/))if(!html.includes(`id="${targetId}"`))pageIssues.push(`Missing control target: ${targetId}`);
  }
  for(const match of html.matchAll(/\b(href|src)="([^"]+)"/g)){
    const value=match[2]; if(/^(https?:|mailto:|data:)/.test(value))continue;
    const [raw,fragment]=value.split('#');
    const target=raw||file;
    try{await access(path.join(root,decodeURIComponent(target)));}catch{pageIssues.push(`Missing local target: ${value}`);continue;}
    if(fragment&&contents[target]&&!new RegExp(`id="${fragment.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}"`).test(contents[target]))pageIssues.push(`Missing anchor: ${value}`);
  }
  results.push({file,title,descriptionLength:description?.length,issues:pageIssues});issues.push(...pageIssues.map(issue=>`${file}: ${issue}`));
}
const mainCount=files.filter(file=>!['privacy.html','accessibility.html'].includes(file)).length;
if(mainCount<9)issues.push('Fewer than nine main pages');
const js=await readFile(path.join(root,'assets/site.js'),'utf8');
if(/\b(?:fetch|XMLHttpRequest|sendBeacon|localStorage|sessionStorage)\b|document\.cookie/.test(js))issues.push('Unexpected transmission or persistence in site JS');
const report={checkedAt:new Date().toISOString(),pages:files.length,mainPages:mainCount,issues,results};
await mkdir(path.join(root,'reports'),{recursive:true});
await writeFile(path.join(root,'reports/structure-check.json'),JSON.stringify(report,null,2));
console.log(`${files.length} pages checked; ${mainCount} main pages; ${issues.length} issues.`);
if(issues.length){console.log(issues.join('\n'));process.exitCode=1;}
