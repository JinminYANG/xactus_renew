from pathlib import Path
from PIL import Image, ImageDraw


SIZE = 1024
OUT_DIR = Path(r"D:\git\xactus_renew\output\pdf_extracted_icons_transparent")

NAVY = (41, 67, 122, 255)
BLUE = (69, 132, 255, 255)
BLUE_DARK = (49, 99, 214, 255)
BLUE_LIGHT = (198, 225, 255, 255)
SKY = (115, 210, 228, 255)
TEAL = (82, 203, 189, 255)
MINT = (183, 243, 231, 255)
ORANGE = (255, 159, 67, 255)
GOLD = (255, 196, 87, 255)
CORAL = (239, 111, 89, 255)
ROSE = (228, 112, 134, 255)
PURPLE = (156, 124, 226, 255)
LAVENDER = (206, 188, 244, 255)
GRAY = (190, 198, 214, 255)
LIGHT = (245, 249, 255, 255)
WHITE = (255, 255, 255, 255)
TRANSPARENT = (0, 0, 0, 0)


def canvas():
    return Image.new("RGBA", (SIZE, SIZE), TRANSPARENT)


def rounded(draw, box, radius, fill, outline=NAVY, width=8):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def circle(draw, center, radius, fill, outline=NAVY, width=6):
    x, y = center
    draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=fill, outline=outline, width=width)


def line(draw, pts, fill, width):
    draw.line(pts, fill=fill, width=width, joint="curve")


def dot_chain(draw, x1, x2, y, r, fill):
    step = r * 2 + 4
    x = x1
    while x <= x2:
        circle(draw, (x, y), r, fill=fill, outline=fill, width=0)
        x += step


def soft_ring(draw, center, radius, fill, inner):
    circle(draw, center, radius, fill=fill, outline=NAVY, width=6)
    circle(draw, center, int(radius * 0.42), fill=inner, outline=None, width=0)


def terminal_wnt_control():
    img = canvas()
    d = ImageDraw.Draw(img)
    rounded(d, (92, 390, 932, 634), 72, fill=PURPLE)
    rounded(d, (108, 410, 916, 614), 58, fill=(139, 104, 213, 255), outline=None, width=0)
    dot_chain(d, 126, 900, 390, 20, BLUE_LIGHT)
    dot_chain(d, 126, 900, 634, 20, BLUE_LIGHT)
    for x in range(138, 894, 40):
        line(d, [(x, 412), (x, 610)], fill=(176, 152, 233, 255), width=8)
    rounded(d, (380, 274, 644, 754), 108, fill=LAVENDER, width=10)
    rounded(d, (400, 298, 624, 730), 92, fill=PURPLE, outline=None, width=0)
    helix_l = [(468, 320), (566, 392), (448, 510), (572, 642), (474, 714)]
    helix_r = [(548, 320), (450, 392), (568, 510), (444, 642), (542, 714)]
    line(d, helix_l, fill=BLUE, width=20)
    line(d, helix_r, fill=TEAL, width=20)
    for y in (364, 430, 496, 562, 628, 694):
        line(d, [(482, y), (542, y + 8)], fill=BLUE_LIGHT, width=8)
    line(d, [(512, 216), (512, 274)], fill=SKY, width=16)
    for cx in (446, 512, 578):
        circle(d, (cx, 214), 24, fill=BLUE)
    img.save(OUT_DIR / "technology_xo001_terminal_wnt_control_semiflat.png")


def enhanced_selectivity():
    img = canvas()
    d = ImageDraw.Draw(img)
    soft_ring(d, (236, 512), 126, fill=LIGHT, inner=(165, 184, 225, 255))
    circle(d, (790, 512), 136, fill=ORANGE, outline=CORAL, width=8)
    circle(d, (790, 512), 58, fill=GOLD, outline=None, width=0)
    for p in ((688, 406), (650, 472), (650, 550), (688, 618)):
        circle(d, p, 14, fill=BLUE, outline=None, width=0)
    shield = [(484, 330), (624, 416), (624, 594), (484, 700), (344, 594), (344, 416)]
    d.polygon(shield, fill=(218, 229, 248, 255), outline=NAVY)
    d.polygon([(484, 364), (592, 432), (592, 576), (484, 658), (376, 576), (376, 432)], fill=(196, 214, 242, 255))
    line(d, [(360, 512), (448, 512)], fill=BLUE, width=20)
    line(d, [(520, 512), (642, 512)], fill=ORANGE, width=20)
    line(d, [(448, 480), (506, 512), (448, 544)], fill=TEAL, width=14)
    img.save(OUT_DIR / "technology_xo001_enhanced_selectivity_semiflat.png")


def durable_disease_control():
    img = canvas()
    d = ImageDraw.Draw(img)
    shield = [(512, 158), (760, 244), (760, 674), (512, 846), (264, 674), (264, 244)]
    d.polygon(shield, fill=BLUE, outline=NAVY)
    d.polygon([(512, 196), (720, 266), (720, 646), (512, 800), (304, 646), (304, 266)], fill=BLUE_DARK, outline=WHITE)
    line(d, [(418, 488), (494, 572), (634, 418)], fill=WHITE, width=32)
    for cx, cy, r in ((748, 612, 94), (844, 554, 72)):
        circle(d, (cx, cy), r, fill=ROSE, outline=(196, 86, 110, 255), width=8)
        circle(d, (cx, cy), int(r * 0.34), fill=(167, 42, 58, 255), outline=None, width=0)
    img.save(OUT_DIR / "technology_xo001_durable_disease_control_semiflat.png")


def master_regulator_targeting():
    img = canvas()
    d = ImageDraw.Draw(img)
    center = (512, 540)
    nodes = [
        (512, 204, ORANGE), (292, 320, TEAL), (732, 320, TEAL),
        (232, 566, BLUE), (792, 566, BLUE), (352, 788, TEAL),
        (672, 788, BLUE), (512, 872, ORANGE)
    ]
    for x, y, c in nodes:
        line(d, [center, (x, y)], fill=NAVY, width=16)
        circle(d, (x, y), 40, fill=c)
    circle(d, center, 122, fill=BLUE, width=10)
    circle(d, center, 88, fill=BLUE_DARK, outline=None, width=0)
    rounded(d, (478, 466, 546, 614), 26, fill=BLUE_LIGHT, outline=None, width=0)
    line(d, [(512, 448), (512, 632)], fill=BLUE_LIGHT, width=10)
    line(d, [(468, 490), (556, 578)], fill=BLUE_LIGHT, width=8)
    line(d, [(468, 578), (556, 490)], fill=BLUE_LIGHT, width=8)
    img.save(OUT_DIR / "technology_xo003_master_regulator_targeting_semiflat.png")


def multi_pathway_suppression():
    img = canvas()
    d = ImageDraw.Draw(img)
    shield = [(512, 324), (650, 410), (650, 584), (512, 684), (374, 584), (374, 410)]
    d.polygon(shield, fill=(98, 127, 205, 255), outline=NAVY)
    d.polygon([(512, 360), (614, 430), (614, 564), (512, 644), (410, 564), (410, 430)], fill=BLUE_DARK)
    line(d, [(442, 446), (582, 586)], fill=WHITE, width=26)
    line(d, [(582, 446), (442, 586)], fill=WHITE, width=26)
    paths = [
        ((230, 356), (394, 454), PURPLE), ((230, 512), (366, 512), GRAY),
        ((230, 674), (394, 574), BLUE), ((794, 356), (630, 454), ORANGE),
        ((794, 512), (658, 512), GRAY), ((794, 674), (630, 574), TEAL),
        ((512, 210), (512, 378), BLUE), ((512, 816), (512, 630), TEAL)
    ]
    for start, end, col in paths:
        line(d, [start, end], fill=col, width=18)
        circle(d, start, 20, fill=col)
    img.save(OUT_DIR / "technology_xo003_multi_pathway_suppression_semiflat.png")


def combination_therapy_potential():
    img = canvas()
    d = ImageDraw.Draw(img)
    rounded(d, (196, 246, 384, 704), 34, fill=(221, 235, 254, 255))
    rounded(d, (210, 246, 370, 320), 18, fill=(201, 216, 243, 255), outline=NAVY, width=6)
    rounded(d, (650, 272, 832, 694), 30, fill=(191, 230, 228, 255), outline=(31, 136, 141, 255), width=8)
    rounded(d, (664, 272, 818, 336), 16, fill=TEAL, outline=(31, 136, 141, 255), width=6)
    rounded(d, (252, 720, 392, 806), 44, fill=BLUE, outline=NAVY, width=6)
    rounded(d, (392, 720, 520, 806), 44, fill=WHITE, outline=GRAY, width=6)
    circle(d, (464, 762), 36, fill=WHITE, outline=GRAY, width=6)
    line(d, [(512, 478), (610, 478)], fill=BLUE, width=34)
    line(d, [(561, 429), (561, 527)], fill=BLUE, width=34)
    img.save(OUT_DIR / "technology_xo003_combination_therapy_potential_semiflat.png")


def iron_dependency():
    img = canvas()
    d = ImageDraw.Draw(img)
    circle(d, (512, 526), 170, fill=ORANGE, outline=(204, 110, 36, 255), width=10)
    circle(d, (512, 526), 94, fill=GOLD, outline=None, width=0)
    for box in ((260, 290, 764, 764), (302, 250, 722, 802), (236, 362, 788, 690)):
        d.arc(box, start=0, end=360, fill=NAVY, width=8)
    for p in ((512, 242), (694, 324), (776, 526), (694, 728), (512, 810), (330, 728), (248, 526), (330, 324)):
        circle(d, p, 16, fill=ORANGE, outline=None, width=0)
    line(d, [(450, 408), (574, 408)], fill=NAVY, width=14)
    line(d, [(512, 344), (512, 468)], fill=NAVY, width=14)
    img.save(OUT_DIR / "technology_xo004_iron_dependency_semiflat.png")


def cancer_selectivity():
    img = canvas()
    d = ImageDraw.Draw(img)
    soft_ring(d, (232, 512), 120, fill=LIGHT, inner=(170, 186, 221, 255))
    line(d, [(368, 512), (614, 512)], fill=BLUE, width=14)
    circle(d, (492, 512), 88, fill=TRANSPARENT, outline=BLUE, width=10)
    line(d, [(412, 512), (572, 512)], fill=BLUE, width=8)
    line(d, [(492, 432), (492, 592)], fill=BLUE, width=8)
    circle(d, (790, 512), 124, fill=ROSE, outline=(190, 82, 101, 255), width=8)
    circle(d, (790, 512), 50, fill=(161, 44, 59, 255), outline=None, width=0)
    for a, b in [((710, 430), (734, 452)), ((864, 428), (844, 452)), ((718, 608), (742, 590))]:
        line(d, [a, b], fill=(236, 173, 186, 255), width=8)
    img.save(OUT_DIR / "technology_xo004_cancer_selectivity_semiflat.png")


def drug_resistant_tumors():
    img = canvas()
    d = ImageDraw.Draw(img)
    shield = [(312, 166), (550, 252), (550, 646), (312, 804), (98, 646), (98, 252)]
    d.polygon(shield, fill=BLUE, outline=NAVY)
    d.polygon([(312, 208), (512, 280), (512, 624), (312, 744), (136, 624), (136, 280)], fill=BLUE_DARK, outline=WHITE)
    circle(d, (770, 502), 140, fill=(203, 203, 208, 255), outline=(131, 132, 140, 255), width=8)
    circle(d, (770, 502), 54, fill=(140, 39, 48, 255), outline=None, width=0)
    line(d, [(548, 652), (692, 520)], fill=GRAY, width=18)
    line(d, [(692, 520), (742, 560)], fill=GRAY, width=18)
    rounded(d, (812, 646, 936, 728), 40, fill=PURPLE, width=6)
    rounded(d, (936, 646, 1012, 728), 40, fill=WHITE, outline=GRAY, width=6)
    img.save(OUT_DIR / "technology_xo004_drug_resistant_tumors_semiflat.png")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    terminal_wnt_control()
    enhanced_selectivity()
    durable_disease_control()
    master_regulator_targeting()
    multi_pathway_suppression()
    combination_therapy_potential()
    iron_dependency()
    cancer_selectivity()
    drug_resistant_tumors()


if __name__ == "__main__":
    main()
