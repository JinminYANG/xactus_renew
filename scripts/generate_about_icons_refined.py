from pathlib import Path
from PIL import Image, ImageDraw


SIZE = 1024
OUT_DIR = Path(r"D:\git\xactus_renew\output\pdf_extracted_icons_transparent")

LINE = (214, 218, 224, 255)
OUTLINE = (233, 236, 240, 255)
BLUE = (83, 144, 255, 255)
TEAL = (88, 201, 186, 255)
PURPLE = (155, 130, 224, 255)
SOFT = (203, 214, 231, 70)
TRANSPARENT = (0, 0, 0, 0)


def canvas():
    return Image.new("RGBA", (SIZE, SIZE), TRANSPARENT)


def line(draw, pts, fill=LINE, width=18):
    draw.line(pts, fill=fill, width=width, joint="curve")


def circle(draw, center, radius, outline=LINE, width=18, fill=None):
    x, y = center
    draw.ellipse((x - radius, y - radius, x + radius, y + radius), outline=outline, width=width, fill=fill)


def rounded(draw, box, radius, outline=LINE, width=18, fill=None):
    draw.rounded_rectangle(box, radius=radius, outline=outline, width=width, fill=fill)


def clinical_intelligence():
    img = canvas()
    d = ImageDraw.Draw(img)
    line_w = 18
    # head
    head = [(300, 252), (250, 316), (232, 414), (232, 560), (194, 612), (236, 644), (262, 724), (284, 826), (574, 826), (548, 736), (588, 650), (610, 510), (584, 382), (520, 286), (430, 246), (300, 252)]
    line(d, head, width=line_w)
    # brain
    line(d, [(336, 382), (370, 338), (432, 326), (476, 344), (524, 334), (564, 366), (574, 420), (556, 462), (524, 486), (488, 482), (462, 444), (422, 434), (388, 454), (350, 442), (332, 406)], width=line_w)
    line(d, [(432, 404), (468, 382), (500, 390)], fill=BLUE, width=14)
    line(d, [(408, 448), (440, 430), (474, 438)], fill=TEAL, width=14)
    # speech bubbles
    rounded(d, (118, 96, 418, 292), 26, width=line_w, fill=(240, 243, 247, 18))
    line(d, [(240, 292), (300, 360), (292, 292)], width=line_w)
    line(d, [(166, 176), (350, 176)], width=22)
    line(d, [(252, 232), (350, 232)], width=22)
    rounded(d, (606, 96, 906, 292), 26, width=line_w, fill=(240, 243, 247, 18))
    line(d, [(720, 292), (690, 356), (690, 292)], width=line_w)
    line(d, [(654, 176), (838, 176)], width=22)
    line(d, [(654, 232), (752, 232)], width=22)
    img.save(OUT_DIR / "about_clinical_intelligence_refined.png")


def first_in_class():
    img = canvas()
    d = ImageDraw.Draw(img)
    line_w = 20
    # bulb silhouette
    line(d, [(512, 176), (414, 188), (334, 244), (288, 338), (292, 450), (344, 546), (420, 620), (420, 688)], width=line_w)
    line(d, [(512, 176), (610, 188), (690, 244), (736, 338), (732, 450), (680, 546), (604, 620), (604, 688)], width=line_w)
    line(d, [(420, 688), (604, 688)], width=line_w)
    line(d, [(446, 740), (578, 740)], width=line_w)
    line(d, [(458, 790), (566, 790)], width=line_w)
    line(d, [(478, 838), (546, 838)], width=line_w)
    line(d, [(496, 344), (496, 626)], fill=BLUE, width=16)
    line(d, [(528, 344), (528, 626)], fill=TEAL, width=16)
    line(d, [(496, 344), (440, 416), (512, 492), (584, 416), (528, 344)], fill=PURPLE, width=14)
    # rays
    rays = [
        ((326, 196), (278, 142)), ((512, 138), (512, 76)), ((698, 196), (746, 142)),
        ((774, 356), (838, 334)), ((248, 356), (184, 334)), ((704, 524), (756, 564)), ((320, 524), (268, 564))
    ]
    for a, b in rays:
        line(d, [a, b], width=18)
    img.save(OUT_DIR / "about_first_in_class_refined.png")


def patient_impact():
    img = canvas()
    d = ImageDraw.Draw(img)
    line_w = 18
    circle(d, (512, 162), 74, width=line_w)
    line(d, [(356, 322), (270, 398), (224, 520), (242, 676)], width=line_w)
    line(d, [(668, 322), (754, 398), (800, 520), (782, 676)], width=line_w)
    line(d, [(356, 322), (430, 396), (512, 430), (594, 396), (668, 322)], width=line_w)
    # hands
    line(d, [(186, 706), (186, 470), (230, 432), (266, 470), (266, 634), (384, 540)], width=line_w)
    line(d, [(838, 706), (838, 470), (794, 432), (758, 470), (758, 634), (640, 540)], width=line_w)
    line(d, [(186, 706), (294, 706)], width=line_w)
    line(d, [(730, 706), (838, 706)], width=line_w)
    # heart
    heart = [(512, 590), (430, 520), (420, 450), (470, 406), (512, 434), (554, 406), (604, 450), (594, 520), (512, 590)]
    line(d, heart, width=20)
    line(d, [(480, 498), (544, 498)], fill=BLUE, width=18)
    line(d, [(512, 466), (512, 530)], fill=BLUE, width=18)
    img.save(OUT_DIR / "about_patient_impact_refined.png")


def integrated_research_platform():
    img = canvas()
    d = ImageDraw.Draw(img)
    line_w = 18
    rounded(d, (128, 110, 896, 658), 16, width=line_w)
    line(d, [(268, 742), (756, 742)], width=line_w)
    line(d, [(322, 658), (322, 742)], width=line_w)
    line(d, [(702, 658), (702, 742)], width=line_w)
    rounded(d, (196, 742, 828, 868), 34, width=line_w, fill=(240, 243, 247, 10))
    center = (512, 382)
    circle(d, center, 58, width=line_w, fill=(240, 243, 247, 10))
    nodes = [
        ((350, 374), 34, BLUE), ((446, 236), 28, TEAL), ((668, 244), 28, BLUE),
        ((744, 388), 30, TEAL), ((590, 536), 28, PURPLE), ((426, 544), 28, BLUE)
    ]
    for (x, y), r, col in nodes:
        line(d, [center, (x, y)], width=14)
        circle(d, (x, y), r, width=12)
        circle(d, (x, y), r - 10, outline=None, width=0, fill=col)
    circle(d, center, 20, outline=None, width=0, fill=BLUE)
    img.save(OUT_DIR / "about_integrated_research_platform_refined.png")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    clinical_intelligence()
    first_in_class()
    patient_impact()
    integrated_research_platform()


if __name__ == "__main__":
    main()
