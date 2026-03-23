#!/usr/bin/env python3
"""
Script para descargar selectivamente imágenes de Google Drive
"""
import os
import subprocess
import random

# IDs de las carpetas de Google Drive
folders = {
    'drive1': '1idsDWr0f188lqsbBchGtiyDeuMK1tV6M',
    'drive2': '1HiTlRPXg9DQBNxGmNGzc8qm1wkRQVVpT',
    'mundoswap': '1iU9bdmINYjNRmCR4MA7D9N5BqiDdWtff',
    'drive4': '1MJJb9714IcJG2j8LTUX-7fetdA5ZjDhh'
}

# Directorio de destino
base_dir = '/home/danielmanzanares/northroads-portfolio/assets/gallery'
temp_dir = os.path.join(base_dir, 'temp_downloads')

# Crear directorio temporal
os.makedirs(temp_dir, exist_ok=True)

print("🎯 Descargando selectivamente imágenes de Google Drive...")
print(f"📁 Objetivo: ~100 imágenes distribuidas")
print()

total_downloaded = 0
images_per_folder = 25  # 25 por carpeta = 100 total

for name, folder_id in folders.items():
    if total_downloaded >= 100:
        break

    print(f"\n📂 Procesando {name}...")
    folder_path = os.path.join(temp_dir, name)
    os.makedirs(folder_path, exist_ok=True)

    # Intentar descargar la carpeta con límite
    try:
        cmd = [
            'gdown',
            '--folder',
            folder_id,
            '-O', folder_path,
            '--quiet',
            '--no-check-certificate'
        ]

        # Ejecutar con timeout
        result = subprocess.run(cmd, timeout=120, capture_output=True, text=True)

        # Contar imágenes descargadas
        image_extensions = ('.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG')
        images = [f for f in os.listdir(folder_path) if f.lower().endswith(image_extensions)]

        # Si descargó demasiadas, eliminar algunas aleatoriamente
        if len(images) > images_per_folder:
            random.shuffle(images)
            for img in images[images_per_folder:]:
                os.remove(os.path.join(folder_path, img))
            images = images[:images_per_folder]

        downloaded_count = len(images)
        total_downloaded += downloaded_count

        print(f"   ✅ {downloaded_count} imágenes de {name}")

    except subprocess.TimeoutExpired:
        print(f"   ⏱️ Timeout en {name}, continuando...")
    except Exception as e:
        print(f"   ❌ Error en {name}: {e}")

print(f"\n✅ Total descargado: {total_downloaded} imágenes")
print(f"📁 Ubicación: {temp_dir}")
