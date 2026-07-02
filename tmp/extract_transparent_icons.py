from __future__ import annotations

from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageOps


ROOT = Path(r"D:/git/xactus_renew")
OUTPUT_DIR = ROOT / "output" / "pdf_extracted_icons_transparent"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
RENDER_DIR = ROOT / "tmp" / "pdf_render"
RAW_DIR = ROOT / "tmp" / "pdf_extract"

CANVAS_SIZE = 512
PADDING = 36
THRESHOLD = 34.0
MIN_COMPONENT_AREA = 80

SOURCES = [
    ("about_first_in_class.png", ("crop", RENDER_DIR / "page-2.png", (50, 2050, 790, 2790))),
    ("about_clinical_intelligence.png", ("crop", RENDER_DIR / "page-2.png", (740, 2050, 1500, 2790))),
    ("about_integrated_research_platform.png", ("crop", RENDER_DIR / "page-2.png", (1430, 2030, 2200, 2790))),
    ("about_patient_impact.png", ("crop", RENDER_DIR / "page-2.png", (2120, 2030, 2890, 2790))),
    ("technology_xo001_terminal_wnt_control.png", ("crop", RENDER_DIR / "page-3.png", (120, 6800, 900, 7580))),
    ("technology_xo001_enhanced_selectivity.png", ("crop", RENDER_DIR / "page-3.png", (1050, 6800, 1830, 7580))),
    ("technology_xo001_durable_disease_control.png", ("file", RAW_DIR / "page3_img11_X37.png")),
    ("technology_xo003_master_regulator_targeting.png", ("crop", RENDER_DIR / "page-3.png", (120, 10470, 900, 11250))),
    ("technology_xo003_multi_pathway_suppression.png", ("crop", RENDER_DIR / "page-3.png", (1050, 10470, 1830, 11250))),
    ("technology_xo003_combination_therapy_potential.png", ("crop", RENDER_DIR / "page-3.png", (1980, 10470, 2760, 11250))),
    ("technology_xo004_iron_dependency.png", ("crop", RENDER_DIR / "page-4.png", (220, 1970, 820, 2500))),
    ("technology_xo004_cancer_selectivity.png", ("crop", RENDER_DIR / "page-4.png", (1150, 1970, 1750, 2500))),
    ("technology_xo004_drug_resistant_tumors.png", ("crop", RENDER_DIR / "page-4.png", (2080, 1900, 2680, 2660))),
    ("technology_xoa001_enhanced_internalization.png", ("file", RAW_DIR / "page4_img12_X32.png")),
    ("technology_xoa001_stable_linker_design.png", ("file", RAW_DIR / "page4_img14_X36.png")),
    ("technology_xoa001_potent_payload.png", ("file", RAW_DIR / "page4_img13_X34.png")),
    ("technology_xoa001_bystander_effect.png", ("file", RAW_DIR / "page4_img15_X38.png")),
]


def quantize_border_colors(arr: np.ndarray) -> np.ndarray:
    h, w, _ = arr.shape
    border = np.concatenate(
        [
            arr[0, :, :],
            arr[h - 1, :, :],
            arr[:, 0, :],
            arr[:, w - 1, :],
        ],
        axis=0,
    )
    quantized = (border // 16) * 16
    unique = np.unique(quantized, axis=0)
    return unique.astype(np.float32)


def build_foreground_mask(arr: np.ndarray) -> np.ndarray:
    border_colors = quantize_border_colors(arr)
    pixels = arr.astype(np.float32).reshape(-1, 1, 3)
    palette = border_colors.reshape(1, -1, 3)
    distances = np.sqrt(((pixels - palette) ** 2).sum(axis=2))
    min_distance = distances.min(axis=1).reshape(arr.shape[:2])
    return min_distance > THRESHOLD


def collect_non_border_components(mask: np.ndarray) -> np.ndarray:
    h, w = mask.shape
    visited = np.zeros_like(mask, dtype=bool)
    result = np.zeros_like(mask, dtype=bool)

    for y in range(h):
        for x in range(w):
            if not mask[y, x] or visited[y, x]:
                continue

            queue = deque([(y, x)])
            visited[y, x] = True
            component: list[tuple[int, int]] = []
            touches_border = False

            while queue:
                cy, cx = queue.popleft()
                component.append((cy, cx))
                if cy == 0 or cx == 0 or cy == h - 1 or cx == w - 1:
                    touches_border = True

                for ny, nx in (
                    (cy - 1, cx),
                    (cy + 1, cx),
                    (cy, cx - 1),
                    (cy, cx + 1),
                ):
                    if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not visited[ny, nx]:
                        visited[ny, nx] = True
                        queue.append((ny, nx))

            if touches_border or len(component) < MIN_COMPONENT_AREA:
                continue

            for cy, cx in component:
                result[cy, cx] = True
    return result


def crop_to_mask(image: Image.Image, mask: np.ndarray) -> Image.Image:
    ys, xs = np.where(mask)
    if len(xs) == 0 or len(ys) == 0:
        return image

    left, right = xs.min(), xs.max() + 1
    top, bottom = ys.min(), ys.max() + 1
    padded = image.crop((left, top, right, bottom))
    return padded


def load_source(source: tuple) -> Image.Image:
    kind = source[0]
    if kind == "crop":
        _, path, box = source
        return Image.open(path).convert("RGBA").crop(box)
    _, path = source
    return Image.open(path).convert("RGBA")


def normalize_icon(name: str, source: tuple) -> Path:
    image = load_source(source)
    arr = np.array(image)[..., :3]

    if image.getbbox() and np.array(image.getchannel("A")).min() < 255:
        mask = np.array(image.getchannel("A")) > 0
    else:
        raw_mask = build_foreground_mask(arr)
        mask = collect_non_border_components(raw_mask)

    rgba = np.array(image)
    rgba[..., 3] = np.where(mask, 255, 0).astype(np.uint8)
    transparent = Image.fromarray(rgba, mode="RGBA")
    cropped = crop_to_mask(transparent, mask)

    content_box = ImageOps.contain(
        cropped,
        (CANVAS_SIZE - PADDING * 2, CANVAS_SIZE - PADDING * 2),
        method=Image.Resampling.LANCZOS,
    )
    canvas = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    offset = ((CANVAS_SIZE - content_box.width) // 2, (CANVAS_SIZE - content_box.height) // 2)
    canvas.paste(content_box, offset, content_box)

    out_path = OUTPUT_DIR / name
    canvas.save(out_path)
    return out_path


def build_contact_sheet(paths: list[Path]) -> None:
    thumbs = []
    for path in paths:
        icon = Image.open(path).convert("RGBA")
        bg = Image.new("RGBA", icon.size, (245, 245, 245, 255))
        comp = Image.alpha_composite(bg, icon)
        thumb = ImageOps.contain(comp.convert("RGB"), (220, 220))
        canvas = Image.new("RGB", (260, 280), "white")
        canvas.paste(thumb, ((260 - thumb.width) // 2, 10))
        draw = ImageDraw.Draw(canvas)
        draw.text((10, 242), path.stem[:28], fill="black")
        thumbs.append(canvas)

    cols = 3
    rows = (len(thumbs) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * 260, rows * 280), (236, 236, 236))
    for idx, thumb in enumerate(thumbs):
        sheet.paste(thumb, ((idx % cols) * 260, (idx // cols) * 280))
    sheet.save(OUTPUT_DIR / "_contact_sheet.png")


def main() -> None:
    outputs = [normalize_icon(name, source) for name, source in SOURCES]
    build_contact_sheet(outputs)
    for out in outputs:
        print(out.name)


if __name__ == "__main__":
    main()
