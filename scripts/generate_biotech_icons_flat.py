from pathlib import Path
from PIL import Image, ImageDraw


SIZE = 1024
OUT_DIR = Path(r"D:\git\xactus_renew\output\pdf_extracted_icons_transparent")

NAVY = (45, 71, 130, 255)
BLUE = (61, 133, 245, 255)
LIGHT_BLUE = (191, 225, 255, 255)
TEAL = (79, 204, 199, 255)
ORANGE = (255, 150, 61, 255)
RED = (239, 102, 88, 255)
PURPLE = (147, 112, 219, 255)
GRAY = (190, 198, 214, 255)
DARK = (41, 52, 73, 255)
WHITE = (255, 255, 255, 255)
TRANSPARENT = (0, 0, 0, 0)


def canvas():
    return Image.new("RGBA", (SIZE, SIZE), TRANSPARENT)


def rounded_box(draw, box, radius, fill, outline=None, width=0):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def line(draw, pts, fill, width):
    draw.line(pts, fill=fill, width=width, joint="curve")


def circle(draw, center, radius, fill, outline=None, width=0):
    x, y = center
    draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=fill, outline=outline, width=width)


def terminal_wnt_control():
    img = canvas()
    d = ImageDraw.Draw(img)
    rounded_box(d, (110, 385, 914, 640), 70, fill=PURPLE, outline=NAVY, width=10)
    for x in range(140, 900, 46):
        circle(d, (x, 385), 22, fill=LIGHT_BLUE)
        circle(d, (x, 640), 22, fill=LIGHT_BLUE)
    for x in range(142, 880, 46):
        line(d, [(x, 412), (x, 612)], fill=(160, 144, 220, 255), width=8)
    rounded_box(d, (380, 300, 644, 728), 100, fill=(171, 133, 232, 255), outline=NAVY, width=12)
    helix_a = [(482, 318), (564, 390), (456, 514), (566, 640), (488, 716)]
    helix_b = [(540, 318), (458, 390), (566, 514), (456, 640), (534, 716)]
    line(d, helix_a, fill=BLUE, width=18)
    line(d, helix_b, fill=TEAL, width=18)
    for y in (364, 432, 500, 568, 636, 692):
        line(d, [(478, y), (546, y + 8)], fill=LIGHT_BLUE, width=8)
    for x, y in ((448, 250), (512, 220), (576, 250)):
        circle(d, (x, y), 24, fill=BLUE, outline=NAVY, width=6)
    line(d, [(512, 242), (512, 300)], fill=TEAL, width=16)
    img.save(OUT_DIR / "technology_xo001_terminal_wnt_control_icon.png")


def enhanced_selectivity():
    img = canvas()
    d = ImageDraw.Draw(img)
    circle(d, (270, 512), 140, fill=(241, 247, 255, 255), outline=GRAY, width=8)
    circle(d, (270, 512), 62, fill=(157, 179, 227, 255))
    circle(d, (780, 512), 150, fill=ORANGE, outline=RED, width=10)
    circle(d, (780, 512), 66, fill=(255, 193, 90, 255))
    for p in ((668, 402), (638, 470), (638, 554), (668, 622)):
        circle(d, p, 14, fill=BLUE)
    shield = [(468, 332), (604, 412), (604, 590), (468, 700), (332, 590), (332, 412)]
    d.polygon(shield, fill=(215, 227, 247, 255), outline=NAVY)
    line(d, [(332, 512), (450, 512)], fill=BLUE, width=20)
    line(d, [(486, 512), (630, 512)], fill=ORANGE, width=20)
    line(d, [(452, 482), (518, 512), (452, 542)], fill=TEAL, width=14)
    img.save(OUT_DIR / "technology_xo001_enhanced_selectivity_icon.png")


def durable_disease_control():
    img = canvas()
    d = ImageDraw.Draw(img)
    shield = [(250, 170), (512, 256), (512, 786), (250, 872), (84, 700), (84, 338)]
    mirror = [(1024 - x, y) for x, y in shield]
    poly = shield[:3] + mirror[::-1][:3]
    d.polygon(poly, fill=BLUE, outline=NAVY)
    d.polygon([(512, 170), (740, 244), (740, 704), (512, 838), (284, 704), (284, 244)], fill=(53, 104, 214, 255), outline=WHITE)
    line(d, [(420, 504), (490, 582), (630, 418)], fill=WHITE, width=34)
    for cx, cy, r in ((764, 586, 98), (868, 532, 74)):
        circle(d, (cx, cy), r, fill=(233, 111, 128, 255), outline=(188, 73, 95, 255), width=8)
        circle(d, (cx, cy), int(r * 0.35), fill=(165, 40, 54, 255))
    img.save(OUT_DIR / "technology_xo001_durable_disease_control_icon.png")


def master_regulator_targeting():
    img = canvas()
    d = ImageDraw.Draw(img)
    center = (512, 544)
    nodes = [
        (512, 208, ORANGE), (296, 312, TEAL), (730, 312, TEAL),
        (250, 566, BLUE), (774, 566, BLUE), (344, 784, TEAL),
        (680, 784, BLUE), (512, 864, ORANGE)
    ]
    for x, y, col in nodes:
        line(d, [center, (x, y)], fill=NAVY, width=16)
        circle(d, (x, y), 42, fill=col, outline=NAVY, width=6)
    circle(d, center, 122, fill=BLUE, outline=NAVY, width=10)
    rounded_box(d, (474, 486, 550, 602), 28, fill=LIGHT_BLUE)
    line(d, [(512, 448), (512, 638)], fill=LIGHT_BLUE, width=12)
    line(d, [(462, 494), (562, 594)], fill=LIGHT_BLUE, width=10)
    line(d, [(462, 594), (562, 494)], fill=LIGHT_BLUE, width=10)
    img.save(OUT_DIR / "technology_xo003_master_regulator_targeting_icon.png")


def multi_pathway_suppression():
    img = canvas()
    d = ImageDraw.Draw(img)
    shield = [(512, 330), (648, 414), (648, 572), (512, 676), (376, 572), (376, 414)]
    d.polygon(shield, fill=(90, 126, 208, 255), outline=NAVY)
    line(d, [(440, 450), (584, 596)], fill=WHITE, width=28)
    line(d, [(584, 450), (440, 596)], fill=WHITE, width=28)
    entries = [
        ((236, 350), (394, 450), PURPLE), ((236, 510), (368, 510), GRAY),
        ((236, 674), (394, 574), BLUE), ((788, 350), (630, 450), ORANGE),
        ((788, 510), (656, 510), GRAY), ((788, 674), (630, 574), TEAL),
        ((512, 208), (512, 378), BLUE), ((512, 816), (512, 628), TEAL)
    ]
    for start, end, col in entries:
        line(d, [start, end], fill=col, width=18)
        circle(d, start, 22, fill=col)
        midx = end[0] + (16 if end[0] < start[0] else -16 if end[0] > start[0] else 0)
        midy = end[1] + (16 if end[1] < start[1] else -16 if end[1] > start[1] else 0)
        line(d, [end, (midx, midy)], fill=col, width=18)
    img.save(OUT_DIR / "technology_xo003_multi_pathway_suppression_icon.png")


def combination_therapy_potential():
    img = canvas()
    d = ImageDraw.Draw(img)
    rounded_box(d, (204, 258, 374, 700), 32, fill=(218, 236, 255, 255), outline=NAVY, width=8)
    rounded_box(d, (212, 258, 366, 330), 18, fill=(205, 218, 240, 255), outline=NAVY, width=6)
    rounded_box(d, (654, 276, 818, 690), 28, fill=(198, 240, 236, 255), outline=(34, 137, 144, 255), width=8)
    rounded_box(d, (662, 276, 810, 338), 16, fill=TEAL, outline=(34, 137, 144, 255), width=6)
    rounded_box(d, (258, 702, 384, 790), 44, fill=BLUE, outline=NAVY, width=6)
    rounded_box(d, (384, 702, 510, 790), 44, fill=WHITE, outline=GRAY, width=6)
    circle(d, (472, 748), 40, fill=WHITE, outline=GRAY, width=6)
    line(d, [(510, 484), (610, 484)], fill=BLUE, width=36)
    line(d, [(560, 434), (560, 534)], fill=BLUE, width=36)
    img.save(OUT_DIR / "technology_xo003_combination_therapy_potential_icon.png")


def iron_dependency():
    img = canvas()
    d = ImageDraw.Draw(img)
    circle(d, (512, 528), 170, fill=(255, 183, 66, 255), outline=(209, 111, 32, 255), width=10)
    circle(d, (512, 528), 96, fill=(255, 215, 97, 255))
    for ang, pos in enumerate([(512, 246), (690, 318), (770, 512), (690, 706), (512, 780), (334, 706), (254, 512), (334, 318)]):
        circle(d, pos, 18, fill=ORANGE)
    orbit_boxes = [(260, 280, 764, 776), (302, 248, 722, 808), (238, 360, 786, 696)]
    for box in orbit_boxes:
        d.arc(box, start=0, end=360, fill=NAVY, width=8)
    line(d, [(450, 408), (574, 408)], fill=DARK, width=16)
    line(d, [(512, 348), (512, 470)], fill=DARK, width=16)
    img.save(OUT_DIR / "technology_xo004_iron_dependency_icon.png")


def cancer_selectivity():
    img = canvas()
    d = ImageDraw.Draw(img)
    circle(d, (248, 512), 122, fill=(241, 247, 255, 255), outline=GRAY, width=8)
    circle(d, (248, 512), 52, fill=(163, 182, 224, 255))
    line(d, [(394, 512), (614, 512)], fill=BLUE, width=16)
    circle(d, (502, 512), 88, fill=TRANSPARENT, outline=BLUE, width=12)
    line(d, [(414, 512), (590, 512)], fill=BLUE, width=8)
    line(d, [(502, 424), (502, 600)], fill=BLUE, width=8)
    circle(d, (788, 512), 126, fill=(204, 88, 94, 255), outline=(154, 50, 58, 255), width=8)
    circle(d, (788, 512), 52, fill=(132, 32, 40, 255))
    line(d, [(694, 418), (716, 440)], fill=(232, 164, 180, 255), width=8)
    line(d, [(860, 414), (842, 440)], fill=(232, 164, 180, 255), width=8)
    line(d, [(704, 610), (728, 590)], fill=(232, 164, 180, 255), width=8)
    img.save(OUT_DIR / "technology_xo004_cancer_selectivity_icon.png")


def drug_resistant_tumors():
    img = canvas()
    d = ImageDraw.Draw(img)
    shield = [(324, 216), (504, 282), (504, 648), (324, 728), (164, 604), (164, 342)]
    mirror = [(648 - (x - 164), y) for x, y in shield]
    poly = [(324, 170), (560, 256), (560, 648), (324, 792), (88, 648), (88, 256)]
    d.polygon(poly, fill=BLUE, outline=NAVY)
    d.polygon([(324, 214), (506, 280), (506, 628), (324, 740), (142, 628), (142, 280)], fill=(60, 112, 220, 255), outline=WHITE)
    circle(d, (770, 500), 140, fill=(181, 177, 184, 255), outline=(120, 121, 128, 255), width=8)
    circle(d, (770, 500), 56, fill=(143, 35, 47, 255))
    line(d, [(548, 640), (688, 516)], fill=GRAY, width=20)
    line(d, [(688, 516), (746, 560)], fill=GRAY, width=20)
    rounded_box(d, (802, 638, 930, 724), 42, fill=PURPLE, outline=NAVY, width=6)
    rounded_box(d, (930, 638, 1010, 724), 42, fill=WHITE, outline=GRAY, width=6)
    img.save(OUT_DIR / "technology_xo004_drug_resistant_tumors_icon.png")


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
