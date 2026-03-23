#!/usr/bin/env python3
"""
Script para comprimir imágenes de galería para web
"""
from PIL import Image
import os
from pathlib import Path

# Configuración
MAX_WIDTH = 1920
MAX_HEIGHT = 1080
QUALITY = 85
THUMB_SIZE = 800

gallery_path = Path("assets/gallery")
categories = ["automocion", "eventos"]

print("🖼️  COMPRIMIENDO FOTOS DE GALERÍA\n")

total_before = 0
total_after = 0
count = 0

for category in categories:
    cat_path = gallery_path / category
    if not cat_path.exists():
        continue

    print(f"📁 {category.upper()}:")

    for img_file in cat_path.glob("*"):
        if img_file.suffix.lower() not in ['.jpg', '.jpeg', '.png']:
            continue

        try:
            # Tamaño original
            size_before = img_file.stat().st_size
            total_before += size_before

            # Abrir imagen
            img = Image.open(img_file)

            # Convertir a RGB si es necesario
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')

            # Redimensionar si es muy grande
            width, height = img.size
            if width > MAX_WIDTH or height > MAX_HEIGHT:
                ratio = min(MAX_WIDTH/width, MAX_HEIGHT/height)
                new_size = (int(width * ratio), int(height * ratio))
                img = img.resize(new_size, Image.Resampling.LANCZOS)

            # Guardar comprimido
            img.save(img_file, "JPEG", quality=QUALITY, optimize=True)

            # Tamaño nuevo
            size_after = img_file.stat().st_size
            total_after += size_after
            count += 1

            reduction = ((size_before - size_after) / size_before) * 100
            print(f"  ✅ {img_file.name}: {size_before//1024}KB → {size_after//1024}KB ({reduction:.1f}% reducción)")

        except Exception as e:
            print(f"  ❌ Error con {img_file.name}: {e}")

print(f"\n📊 RESUMEN:")
print(f"  Imágenes procesadas: {count}")
print(f"  Tamaño antes: {total_before/1024/1024:.1f}MB")
print(f"  Tamaño después: {total_after/1024/1024:.1f}MB")
print(f"  Ahorro total: {(total_before-total_after)/1024/1024:.1f}MB ({((total_before-total_after)/total_before)*100:.1f}%)")
print(f"\n✅ Compresión completada!")
