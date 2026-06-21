from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

OUTPUT_DIR = Path(__file__).resolve().parent.parent / "public"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

GRADIENT_STOPS = [
    (124, 58, 237),
    (88, 121, 255),
    (236, 72, 153),
]

BACKGROUND = (9, 12, 32)


def make_gradient(size):
    width, height = size, size
    gradient = Image.new("RGBA", (width, height))
    draw = ImageDraw.Draw(gradient)
    for y in range(height):
        t = y / float(height - 1)
        if t < 0.5:
            t2 = t * 2
            r1, g1, b1 = GRADIENT_STOPS[0]
            r2, g2, b2 = GRADIENT_STOPS[1]
        else:
            t2 = (t - 0.5) * 2
            r1, g1, b1 = GRADIENT_STOPS[1]
            r2, g2, b2 = GRADIENT_STOPS[2]
        r = int(r1 + (r2 - r1) * t2)
        g = int(g1 + (g2 - g1) * t2)
        b = int(b1 + (b2 - b1) * t2)
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))
    return gradient


def draw_n_mask(size):
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    thickness = int(size * 0.18)
    x0 = int(size * 0.18)
    x1 = int(size * 0.82)
    y0 = int(size * 0.18)
    y1 = int(size * 0.82)
    draw.rectangle([x0, y0, x0 + thickness, y1], fill=255)
    draw.rectangle([x1 - thickness, y0, x1, y1], fill=255)
    diag = [
        (x0 + thickness, y0),
        (x0 + thickness + int(thickness * 0.35), y0),
        (x1, y1),
        (x1 - thickness, y1),
    ]
    draw.polygon(diag, fill=255)
    return mask


def build_icon(size):
    base = Image.new("RGBA", (size, size), BACKGROUND + (255,))
    gradient = make_gradient(size)
    mask = draw_n_mask(size)
    glow = mask.filter(ImageFilter.GaussianBlur(radius=size * 0.04))
    glow_layer = Image.new("RGBA", (size, size), (138, 43, 226, 70))
    base.paste(glow_layer, (0, 0), glow)
    base.paste(gradient, (0, 0), mask)
    inner_glow = mask.filter(ImageFilter.GaussianBlur(radius=size * 0.01))
    inner_layer = Image.new("RGBA", (size, size), (255, 255, 255, 40))
    base.paste(inner_layer, (0, 0), inner_glow)
    return base


def main():
    png_path = OUTPUT_DIR / "icon.png"
    ico_path = OUTPUT_DIR / "favicon.ico"

    icon_512 = build_icon(512)
    icon_512.save(png_path, optimize=True)

    icon_192 = build_icon(192)
    icon_192.save(OUTPUT_DIR / "icon-192.png", optimize=True)
    icon_512.save(OUTPUT_DIR / "icon-512.png", optimize=True)

    sizes = [(64, 64), (48, 48), (32, 32), (16, 16)]
    icon_variants = [build_icon(size) for size, _ in sizes]
    icon_variants[0].save(ico_path, format="ICO", sizes=sizes)

    print(f"Saved: {png_path}")
    print(f"Saved: {OUTPUT_DIR / 'icon-192.png'}")
    print(f"Saved: {OUTPUT_DIR / 'icon-512.png'}")
    print(f"Saved: {ico_path}")


if __name__ == "__main__":
    main()
