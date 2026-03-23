#!/usr/bin/env python3
"""
Script para generar imágenes placeholder SVG ligeras
"""
import os

# Categorías y sus colores
categories = {
    'automocion': {'color': '#d4af37', 'icon': '🚗', 'count': 8},
    'deportes': {'color': '#c9a961', 'icon': '⚽', 'count': 5},
    'eventos': {'color': '#b8965f', 'icon': '🎉', 'count': 4},
    'promo': {'color': '#a8855d', 'icon': '🎬', 'count': 3}
}

base_dir = '/home/danielmanzanares/northroads-portfolio/assets/gallery/placeholders'
os.makedirs(base_dir, exist_ok=True)

def create_svg_placeholder(category, number, width=800, height=600):
    """Crea un SVG placeholder simple y ligero"""
    cat_info = categories[category]
    color = cat_info['color']
    icon = cat_info['icon']

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}">
  <defs>
    <linearGradient id="grad{category}{number}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2a2a2a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad{category}{number})"/>
  <text x="50%" y="45%" text-anchor="middle" font-size="120" fill="{color}" font-family="Arial, sans-serif" opacity="0.3">{icon}</text>
  <text x="50%" y="60%" text-anchor="middle" font-size="32" fill="{color}" font-family="Arial, sans-serif" font-weight="bold" letter-spacing="3">{category.upper()}</text>
  <text x="50%" y="68%" text-anchor="middle" font-size="24" fill="#888" font-family="Arial, sans-serif">Imagen {number}</text>
</svg>'''

    return svg_content

print("🎨 Generando placeholders SVG locales...")

# Generar placeholders para cada categoría
for category, info in categories.items():
    for i in range(1, info['count'] + 1):
        # Imagen normal (800x600)
        svg_normal = create_svg_placeholder(category, i, 800, 600)
        filename_normal = f"{category}_{i}.svg"
        with open(os.path.join(base_dir, filename_normal), 'w') as f:
            f.write(svg_normal)

        # Thumbnail (300x225)
        svg_thumb = create_svg_placeholder(category, i, 300, 225)
        filename_thumb = f"{category}_{i}_thumb.svg"
        with open(os.path.join(base_dir, filename_thumb), 'w') as f:
            f.write(svg_thumb)

        print(f"  ✅ {category} #{i}")

print(f"\n✅ Generadas {sum(c['count'] for c in categories.values())} imágenes placeholder")
print(f"📁 Ubicación: {base_dir}")
