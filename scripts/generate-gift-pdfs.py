"""Create Aureveil's three complimentary print resources. Requires reportlab, Pillow and fontTools."""
from pathlib import Path
from html import escape
from io import BytesIO
import json
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.utils import ImageReader
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets' / 'downloads'
WORK = ROOT / 'reports' / 'pdf-work'
OUT.mkdir(parents=True, exist_ok=True)
WORK.mkdir(parents=True, exist_ok=True)
BASE = 'https://jo3lbenjamin.github.io/cs2024-final-project/'
AAD_USE = 'https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-apply-sunscreen'
AAD_TEST = 'https://www.aad.org/public/everyday-care/skin-care-secrets/prevent-skin-problems/test-skin-care-products/'
FDA = 'https://www.fda.gov/drugs/understanding-over-counter-medicines/sunscreen-how-help-protect-your-skin-sun'
INK, MUTED, GOLD, PAPER, BLUE, LINE = [colors.HexColor(v) for v in ['#17364c','#435f71','#8b682d','#faf9f5','#eaf3f8','#cbdce6']]

def font(name, file):
    pdfmetrics.registerFont(TTFont(name, str(file)))

font('Body', Path('C:/Windows/Fonts/arial.ttf'))
font('BodyBold', Path('C:/Windows/Fonts/arialbd.ttf'))
try:
    from fontTools.ttLib import TTFont as WebFont
    web = WebFont(str(ROOT/'assets/fonts/cormorant-garamond.woff2'))
    web.flavor = None
    web.save(str(WORK/'brand-serif.ttf'))
    font('Brand', WORK/'brand-serif.ttf')
except Exception:
    font('Brand', Path('C:/Windows/Fonts/georgia.ttf'))

W, H = 420, 595
C = None

def start(file, size, title):
    global C, W, H
    W,H=size
    C=canvas.Canvas(str(OUT/file), pagesize=size, pageCompression=1)
    C.setTitle(title)
    C.setAuthor('Aureveil')
    C.setSubject('Complimentary practical skincare ritual resource')

def page(number, total, section):
    C.setPageSize((W,H))
    C.setFillColor(PAPER); C.rect(0,0,W,H,fill=1,stroke=0)
    C.setFillColor(INK); C.setFont('Brand',24 if W<500 else 29); C.drawString(34,H-46,'aureveil')
    C.setStrokeColor(LINE); C.setLineWidth(.6); C.line(34,H-62,W-34,H-62)
    C.setFillColor(MUTED); C.setFont('Body',7.5); C.drawString(34,24,section)
    C.drawRightString(W-34,24,f'{number:02d} / {total:02d}')
    C.linkURL(BASE+'welcome-kit.html',(34,17,W-34,35),relative=0)

def text(value, x, top, width, size=11, leading=16, color=MUTED, face='Body', gap=12, minimum=45):
    style=ParagraphStyle('copy',fontName=face,fontSize=size,leading=leading,textColor=color,spaceAfter=0)
    p=Paragraph(value,style)
    _,height=p.wrap(width,H)
    if top-height < minimum:
        raise ValueError(f'Text overflows page: {value[:70]} at {top-height}')
    p.drawOn(C,x,top-height)
    return top-height-gap

def title(value, top=None, size=34):
    return text(value,34,top or H-95,W-68,size,size*1.02,INK,'Brand',18)

def image(file,x,top,width,height):
    im=Image.open(ROOT/'assets/images'/file).convert('RGB')
    im.thumbnail((1200,900))
    stream=BytesIO();im.save(stream,format='JPEG',quality=83,optimize=True);stream.seek(0)
    C.drawImage(ImageReader(stream),x,top-height,width,height,mask='auto',preserveAspectRatio=True,anchor='c')

def rule(top):
    C.setStrokeColor(LINE);C.setLineWidth(.6);C.line(34,top,W-34,top)

def step(number, label, copy, top, width=None):
    width=width or W-68
    C.setFillColor(GOLD);C.setFont('Brand',24);C.drawString(34,top-22,f'{number:02d}')
    y=text(label,72,top,width-38,19,21,INK,'Brand',7)
    y=text(copy,72,y,width-38,10.5,15,gap=15)
    return y

def resource(label,url,top):
    y=text(label,34,top,W-68,12,16,INK,'BodyBold',5)
    y=text(escape(url),34,y,W-68,8,11,MUTED,'Body',16)
    C.linkURL(url,(34,y+10,W-34,top),relative=0)
    return y

start('aureveil-daily-skin-guide.pdf',(420,595),'Aureveil Daily Skin Guide')
page(1,6,'THE DAILY SKIN GUIDE')
y=title('A little care.<br/>Your daily ritual.',size=38)
y=text('A practical guide to protection, hydration and making room for yourself.',34,y,W-68,12,17,gap=20)
image('aureveil-welcome-kit.webp',34,y,W-68,(W-68)*.75)
C.showPage()

page(2,6,'YOUR MORNING')
y=title('Your morning,<br/>made simple.')
y=step(1,'Begin with your usual care.','Cleanse and keep the moisturiser that feels comfortable for your skin.',y)
y=step(2,'Make room for hydration.','Cloud Mist is optional. Hold 20-30cm away, close your eyes and spray once or twice, following the label.',y)
y=step(3,'Finish skincare with sunscreen.','Cover exposed skin evenly. General AAD guidance recommends at least a teaspoon for the face. Follow the product directions.',y)
y=step(4,'Let it settle.','Apply makeup gently afterwards. Give sunscreen about 15 minutes before going outside.',y)
text('Application guidance: American Academy of Dermatology. Full links on page 6.',34,y,W-68,8,11,gap=0)
C.showPage()

page(3,6,'YOUR WORKDAY')
y=title('Care between<br/>the meetings.')
for label,copy in [
 ('When your plans take you outdoors.','Reapply sunscreen at least every two hours outdoors and after swimming or sweating. Use shade and protective clothing too.'),
 ('When skin feels dry.','An optional mist can provide a refreshing, dewy feel. It does not replace sunscreen or sunscreen reapplication.'),
 ('When makeup is part of your day.','Think about texture and layering. A facial mist is not a makeup-fixing spray and does not promise longer wear.'),
 ('When less feels better.','You do not need both essentials. Begin with daily protection and keep the rest of your routine comfortable.')]:
    y=text(label,34,y,W-68,23,25,INK,'Brand',9)
    y=text(copy,34,y,W-68,11,16,gap=23)
C.showPage()

page(4,6,'DISCOVER AT YOUR OWN PACE')
y=title('Meet the texture.<br/>Keep your own pace.')
image('aureveil-discovery-samples.webp',225,y,161,121)
left=text('Your complimentary sachets contain Daily Sun Serum. Try its feel before deciding whether to open the full-size tube.',34,y,170,11,16,gap=12)
left=text('A small sample does not guarantee that a product will suit your skin.',34,left,170,10.5,15,gap=0)
y=min(left,y-121)-25
y=text('Introducing something new.',34,y,W-68,24,26,INK,'Brand',10)
y=text('AAD guidance recommends a small-area test twice daily for 7-10 days, following the usual product directions. Stop using a product if it causes a reaction. Seek medical advice for a severe or persistent reaction.',34,y,W-68,11,16,gap=22)
y=text('Before opening the full-size product.',34,y,W-68,24,26,INK,'Brand',10)
text('Read the ingredients, expiry and product directions. Our sample-first policy covers an unopened, sealed full-size item requested within 14 days of delivery. Read the complete conditions before returning anything.',34,y,W-68,10.5,15,gap=0)
C.linkURL(BASE+'returns.html#sample-first',(34,42,W-34,120),relative=0)
C.showPage()

page(5,6,'NOTICE YOUR ROUTINE')
y=title('A little awareness.<br/>A simpler routine.')
y=text('Use your complimentary seven-day tracker to notice habits and comfort. It is not a seven-day results promise.',34,y,W-68,11.5,17,gap=20)
for label,copy in [
 ('Your finish.','Do you enjoy a dewy feel, or prefer a matte finish?'),
 ('Your comfort.','How does the product feel alongside the steps you already use?'),
 ('Your day.','When are you outdoors, and when do you need to remember reapplication?'),
 ('Your ingredients.','Check the full label for ingredients you already know you avoid.'),
 ('Your product care.','Follow storage directions. Keep sunscreen away from excessive heat and direct sun.')]:
    C.setStrokeColor(GOLD);C.rect(35,y-14,9,9,stroke=1,fill=0)
    y=text('<b>'+label+'</b> '+copy,55,y,W-89,11,16,gap=18)
text('Your optional calendar file adds a daily routine prompt. It does not replace the application and reapplication directions on your products.',34,y-3,W-68,10,14,gap=0)
C.showPage()

page(6,6,'YOUR NEXT STEP')
y=title('Keep the useful<br/>things close.')
y=resource('Aureveil guides, printable cards and calendar',BASE+'welcome-kit.html#digital-library',y)
y=resource('Application guidance - American Academy of Dermatology',AAD_USE,y)
y=resource('Introducing skincare - American Academy of Dermatology',AAD_TEST,y)
y=resource('Sunscreen storage - US Food and Drug Administration',FDA,y)
text('Read your current packaging for the directions, formula and expiry of the version you purchase. This guide supports a simple routine; it does not diagnose a skin condition or promise a particular result.',34,y,W-68,10,14,gap=0)
C.showPage();C.save()

start('aureveil-ritual-card.pdf',(298,420),'Aureveil Quick-Start Ritual Card')
page(1,1,'YOUR DAILY RITUAL')
y=title('A little care.<br/>Every morning.',top=H-87,size=29)
for number,label,copy in [
 (1,'Cleanse.','Begin with your usual skincare.'),
 (2,'Hydrate.','Mist and moisturise as preferred.'),
 (3,'Protect.','Apply sunscreen evenly as directed.'),
 (4,'Get ready.','Let sunscreen settle before makeup.')]:
    C.setFillColor(GOLD);C.setFont('Brand',20);C.drawString(34,y-17,f'{number:02d}')
    y=text('<b>'+label+'</b> '+copy,65,y,W-99,9.5,13,gap=15)
y=text('Outdoors? Keep reapplication in your day. Cloud Mist adds hydration; it has no stated SPF.',34,y,W-68,8.5,12,gap=12)
text('Full directions: Aureveil How to Use guide.',34,y,W-68,8,11,gap=0)
C.linkURL(BASE+'how-to-use.html',(34,42,W-34,90),relative=0)
C.showPage();C.save()

start('aureveil-seven-day-tracker.pdf',(595,842),'Aureveil Seven-Day Routine Tracker')
page(1,1,'SEVEN DAYS OF NOTICING')
y=title('Your routine.<br/>A little more intention.',size=38)
y=text('Track comfort and habits at your own pace. Seven days is a routine check-in, not a promise of visible results.',34,y,W-68,12,17,gap=25)
top=y; row_h=64; header_h=43
widths=[42,92,92,90,W-68-42-92-92-90]
positions=[34]
for width in widths:positions.append(positions[-1]+width)
C.setFillColor(BLUE);C.rect(34,top-header_h,W-68,header_h,fill=1,stroke=0)
labels=['Day','Morning<br/>care','SPF outdoors<br/>as directed','Comfort<br/>check-in','Notes for yourself']
for i,label in enumerate(labels):text(label,positions[i]+8,top-10,widths[i]-16,9,12,INK,'BodyBold',0)
bottom=top-header_h-7*row_h
C.setStrokeColor(LINE);C.setLineWidth(.7)
for x in positions:C.line(x,bottom,x,top)
for row in range(9):
    line_y=top if row==0 else top-header_h-(row-1)*row_h
    C.line(34,line_y,W-34,line_y)
for row in range(7):
    row_top=top-header_h-row*row_h
    C.setFillColor(INK);C.setFont('Brand',21);C.drawString(positions[0]+9,row_top-27,str(row+1))
    for col in [1,2]:C.setStrokeColor(GOLD);C.rect(positions[col]+13,row_top-30,11,11,stroke=1,fill=0)
    C.setStrokeColor(LINE);C.line(positions[4]+10,row_top-31,positions[5]-10,row_top-31)
    C.line(positions[4]+10,row_top-50,positions[5]-10,row_top-50)
text('Notice comfort, texture and how your routine fits your day. Stop using a product that irritates your skin. Follow the product directions for sunscreen application and reapplication.',34,bottom-22,W-68,10,14,gap=0)
C.showPage();C.save()

manifest=[]
for file,expected in [('aureveil-daily-skin-guide.pdf',6),('aureveil-ritual-card.pdf',1),('aureveil-seven-day-tracker.pdf',1)]:
    from pypdf import PdfReader
    reader=PdfReader(str(OUT/file))
    assert len(reader.pages)==expected,(file,len(reader.pages))
    content='\n'.join(page.extract_text() or '' for page in reader.pages)
    assert 'aureveil' in content.lower()
    assert 'skin1004' not in content.lower()
    manifest.append({'file':'assets/downloads/'+file,'pages':expected,'bytes':(OUT/file).stat().st_size})
(ROOT/'reports/gift-pdf-manifest.json').write_text(json.dumps(manifest,indent=2),encoding='utf8')
print(json.dumps(manifest,indent=2))
