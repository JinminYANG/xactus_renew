from pathlib import Path
from PIL import Image, ImageDraw


SIZE = 1024
STROKE = 46
COLOR = (73, 81, 170, 255)
OUT_DIR = Path(r"D:\git\xactus_renew\output\pdf_extracted_icons_transparent")


def canvas():
    return Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))


def draw_arc(draw, box, start, end, width=STROKE):
    draw.arc(box, start=start, end=end, fill=COLOR, width=width)


def draw_circle(draw, center, radius, width=STROKE):
    x, y = center
    draw.ellipse((x - radius, y - radius, x + radius, y + radius), outline=COLOR, width=width)


def draw_line(draw, pts, width=STROKE):
    draw.line(pts, fill=COLOR, width=width, joint="curve")


def terminal_wnt_control():
    img = canvas()
    d = ImageDraw.Draw(img)
    center = (430, 560)
    for r in (90, 190, 300):
        draw_arc(d, (center[0] - r, center[1] - r, center[0] + r, center[1] + r), 30, 330)
    draw_line(d, [(430, 560), (720, 270)], width=STROKE)
    draw_line(d, [(720, 270), (818, 190), (792, 308), (905, 334), (818, 408), (720, 270)], width=STROKE)
    img.save(OUT_DIR / "technology_xo001_terminal_wnt_control_refined.png")


def enhanced_selectivity():
    img = canvas()
    d = ImageDraw.Draw(img)
    left = [(180, 760), (260, 690), (340, 600), (430, 512), (520, 420), (610, 332), (690, 250), (770, 180)]
    right = [(260, 844), (340, 774), (420, 684), (510, 594), (600, 502), (690, 414), (770, 324), (844, 248)]
    draw_line(d, left)
    draw_line(d, right)
    for a, b in zip(left[1:-1], right[1:-1]):
        draw_line(d, [a, b], width=36)
    draw_circle(d, (560, 510), 86, width=34)
    img.save(OUT_DIR / "technology_xo001_enhanced_selectivity_refined.png")


def durable_disease_control():
    img = canvas()
    d = ImageDraw.Draw(img)
    shield = [(512, 132), (778, 238), (778, 512), (720, 716), (512, 892), (304, 716), (246, 512), (246, 238)]
    draw_line(d, [shield[0], shield[1], shield[2], shield[3], shield[4], shield[5], shield[6], shield[7], shield[0]])
    draw_arc(d, (320, 320, 704, 704), 35, 250)
    draw_arc(d, (360, 360, 744, 744), 210, 20)
    draw_line(d, [(333, 455), (292, 372), (387, 386)], width=34)
    draw_line(d, [(703, 600), (784, 642), (731, 724)], width=34)
    img.save(OUT_DIR / "technology_xo001_durable_disease_control_refined.png")


def master_regulator_targeting():
    img = canvas()
    d = ImageDraw.Draw(img)
    hub = (520, 540)
    draw_circle(d, hub, 108)
    for pt in [(260, 280), (768, 264), (796, 732), (348, 812), (166, 520)]:
        draw_line(d, [hub, pt])
        draw_circle(d, pt, 62 if pt != (166, 520) else 40)
    draw_arc(d, (412, 432, 628, 648), 15, 345, width=26)
    draw_line(d, [(745, 212), (866, 132)], width=32)
    draw_line(d, [(866, 132), (862, 234), (954, 210)], width=32)
    img.save(OUT_DIR / "technology_xo003_master_regulator_targeting_refined.png")


def multi_pathway_suppression():
    img = canvas()
    d = ImageDraw.Draw(img)
    top = (512, 188)
    mids = [(320, 394), (512, 394), (704, 394)]
    bottoms = [(248, 714), (512, 714), (776, 714)]
    for m in mids:
        draw_line(d, [top, m])
    for m, b in zip(mids, bottoms):
        draw_line(d, [m, b])
        draw_line(d, [(b[0] - 86, b[1]), (b[0] + 86, b[1])], width=34)
    draw_circle(d, top, 44, width=30)
    img.save(OUT_DIR / "technology_xo003_multi_pathway_suppression_refined.png")


def combination_therapy_potential():
    img = canvas()
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((218, 338, 470, 566), radius=114, outline=COLOR, width=STROKE)
    d.rounded_rectangle((554, 458, 806, 686), radius=114, outline=COLOR, width=STROKE)
    draw_line(d, [(468, 566), (556, 458)], width=30)
    draw_line(d, [(512, 300), (512, 432)], width=STROKE)
    draw_line(d, [(446, 366), (578, 366)], width=STROKE)
    img.save(OUT_DIR / "technology_xo003_combination_therapy_potential_refined.png")


def iron_dependency():
    img = canvas()
    d = ImageDraw.Draw(img)
    draw_line(d, [(308, 226), (308, 570), (512, 770), (716, 570), (716, 226)], width=STROKE)
    draw_line(d, [(308, 226), (420, 226)], width=STROKE)
    draw_line(d, [(604, 226), (716, 226)], width=STROKE)
    draw_line(d, [(308, 556), (404, 556)], width=STROKE)
    draw_line(d, [(620, 556), (716, 556)], width=STROKE)
    draw_circle(d, (512, 458), 82)
    draw_line(d, [(512, 376), (512, 540)], width=34)
    draw_line(d, [(430, 458), (594, 458)], width=34)
    img.save(OUT_DIR / "technology_xo004_iron_dependency_refined.png")


def cancer_selectivity():
    img = canvas()
    d = ImageDraw.Draw(img)
    shield = [(512, 148), (756, 240), (756, 478), (700, 676), (512, 842), (324, 676), (268, 478), (268, 240)]
    draw_line(d, [shield[0], shield[1], shield[2], shield[3], shield[4], shield[5], shield[6], shield[7], shield[0]])
    draw_circle(d, (512, 486), 136)
    for pt in [(512, 312), (652, 376), (692, 522), (606, 650), (418, 650), (332, 522), (372, 376)]:
        draw_line(d, [(512, 486), pt], width=24)
        draw_circle(d, pt, 16, width=20)
    img.save(OUT_DIR / "technology_xo004_cancer_selectivity_refined.png")


def drug_resistant_tumors():
    img = canvas()
    d = ImageDraw.Draw(img)
    draw_circle(d, (360, 490), 138)
    for pt in [(360, 322), (492, 392), (504, 546), (422, 640), (280, 644), (216, 520), (242, 382)]:
        draw_line(d, [(360, 490), pt], width=24)
        draw_circle(d, pt, 16, width=20)
    d.rounded_rectangle((592, 368, 820, 492), radius=62, outline=COLOR, width=STROKE)
    draw_line(d, [(692, 492), (786, 650)], width=STROKE)
    draw_line(d, [(786, 650), (734, 620)], width=34)
    draw_line(d, [(786, 650), (802, 592)], width=34)
    draw_line(d, [(580, 294), (886, 700)], width=30)
    img.save(OUT_DIR / "technology_xo004_drug_resistant_tumors_refined.png")


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
