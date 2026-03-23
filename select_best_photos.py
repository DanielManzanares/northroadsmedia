#!/usr/bin/env python3
"""
Script para seleccionar fotos distribuidas uniformemente y copiarlas
"""
import os
import shutil
from pathlib import Path

# Directorios
source_automocion = Path.home() / 'portfolio_fotos_temp' / 'automocion'
source_eventos = Path.home() / 'portfolio_fotos_temp' / 'eventos'

dest_base = Path.home() / 'northroads-portfolio' / 'assets' / 'gallery'
dest_automocion = dest_base / 'automocion'
dest_eventos = dest_eventos = dest_base / 'eventos'

# Crear directorios destino
dest_automocion.mkdir(parents=True, exist_ok=True)
dest_eventos.mkdir(parents=True, exist_ok=True)

def get_images(directory):
    """Obtener todas las imágenes de un directorio"""
    extensions = ('.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG')
    images = []
    for ext in extensions:
        images.extend(directory.rglob(f'*{ext}'))
    return sorted(images)

def select_distributed(images, count):
    """Seleccionar imágenes distribuidas uniformemente"""
    if len(images) <= count:
        return images

    step = len(images) / count
    selected = []
    for i in range(count):
        index = int(i * step)
        selected.append(images[index])
    return selected

# Obtener imágenes
print("📸 Buscando imágenes...")
automocion_images = get_images(source_automocion)
eventos_images = get_images(source_eventos)

print(f"  🚗 Automoción: {len(automocion_images)} encontradas")
print(f"  🎉 Eventos: {len(eventos_images)} encontradas")

# Seleccionar 20 automoción, 15 eventos
selected_auto = select_distributed(automocion_images, 20)
selected_eventos = select_distributed(eventos_images, 15)

print(f"\n✅ Seleccionadas:")
print(f"  🚗 Automoción: {len(selected_auto)}")
print(f"  🎉 Eventos: {len(selected_eventos)}")

# Copiar automoción
print(f"\n📋 Copiando automoción...")
for i, img_path in enumerate(selected_auto, 1):
    ext = img_path.suffix.lower()
    dest_path = dest_automocion / f'auto_{i:02d}{ext}'
    shutil.copy2(img_path, dest_path)
    print(f"  ✅ {dest_path.name}")

# Copiar eventos
print(f"\n📋 Copiando eventos...")
for i, img_path in enumerate(selected_eventos, 1):
    ext = img_path.suffix.lower()
    dest_path = dest_eventos / f'evento_{i:02d}{ext}'
    shutil.copy2(img_path, dest_path)
    print(f"  ✅ {dest_path.name}")

print(f"\n✅ ¡Listo! Fotos copiadas al proyecto")
print(f"📁 Ubicación: {dest_base}")
