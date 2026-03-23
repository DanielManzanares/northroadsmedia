#!/usr/bin/env python3
"""
Script para configurar automáticamente los videos del carrusel
North Roads Media Portfolio

Uso:
    python3 configurar_videos.py

O edita directamente las URLs en la sección VIDEOS más abajo
"""

import re
import sys

# ==========================================
# CONFIGURACIÓN: Añade aquí tus videos
# ==========================================

VIDEOS = [
    {
        'url': 'https://www.youtube.com/watch?v=VIDEO_ID_1',  # ← Cambia esto
        'titulo': 'Título del Video 1',  # ← Cambia esto
        'categoria': 'Automoción',  # ← Automoción, Deportes, Eventos o Promo
        'duracion': '5:30'  # ← Duración del video
    },
    {
        'url': 'https://www.youtube.com/watch?v=VIDEO_ID_2',
        'titulo': 'Título del Video 2',
        'categoria': 'Deportes',
        'duracion': '3:45'
    },
    {
        'url': 'https://www.youtube.com/watch?v=VIDEO_ID_3',
        'titulo': 'Título del Video 3',
        'categoria': 'Eventos',
        'duracion': '7:20'
    },
    {
        'url': 'https://www.youtube.com/watch?v=VIDEO_ID_4',
        'titulo': 'Título del Video 4',
        'categoria': 'Promo',
        'duracion': '4:15'
    },
    {
        'url': 'https://www.youtube.com/watch?v=VIDEO_ID_5',
        'titulo': 'Título del Video 5',
        'categoria': 'Automoción',
        'duracion': '6:00'
    },
    {
        'url': 'https://www.youtube.com/watch?v=VIDEO_ID_6',
        'titulo': 'Título del Video 6',
        'categoria': 'Deportes',
        'duracion': '5:45'
    }
]

# ==========================================
# FUNCIONES
# ==========================================

def extraer_video_id(url):
    """Extrae el ID de video de una URL de YouTube"""
    patterns = [
        r'(?:v=|\/)([0-9A-Za-z_-]{11}).*',
        r'(?:embed\/)([0-9A-Za-z_-]{11})',
        r'(?:watch\?v=)([0-9A-Za-z_-]{11})'
    ]

    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    return None

def generar_html_video(video_data, numero):
    """Genera el HTML para un video del carrusel"""
    video_id = extraer_video_id(video_data['url'])

    if not video_id:
        print(f"⚠️  ERROR: No se pudo extraer el ID del video {numero}")
        return None

    html = f'''                <!-- Video {numero} -->
                <div class="video-card" data-video-id="{video_id}">
                    <div class="video-thumbnail">
                        <img src="https://img.youtube.com/vi/{video_id}/maxresdefault.jpg" alt="{video_data['titulo']}">
                        <div class="video-play-overlay">
                            <div class="play-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </div>
                        </div>
                        <div class="video-duration">{video_data['duracion']}</div>
                    </div>
                    <div class="video-info">
                        <h3>{video_data['titulo']}</h3>
                        <p>{video_data['categoria']}</p>
                    </div>
                </div>
'''
    return html

def generar_todos_los_videos():
    """Genera el HTML completo del carrusel"""
    print("\n" + "="*60)
    print("📹 GENERADOR DE CARRUSEL DE VIDEOS")
    print("   North Roads Media Portfolio")
    print("="*60 + "\n")

    html_completo = []

    for i, video in enumerate(VIDEOS, 1):
        video_id = extraer_video_id(video['url'])

        if video_id and video_id != 'VIDEO_ID_1':  # Verificar que no sea el placeholder
            print(f"✅ Video {i}: {video['titulo']}")
            print(f"   ID: {video_id}")
            print(f"   Categoría: {video['categoria']}")
            print(f"   Duración: {video['duracion']}\n")

            html = generar_html_video(video, i)
            if html:
                html_completo.append(html)
        else:
            print(f"⚠️  Video {i}: Placeholder detectado - necesita configuración")
            print(f"   URL actual: {video['url']}\n")

    if html_completo:
        print("\n" + "="*60)
        print("📋 HTML GENERADO (Copiar al index.html)")
        print("="*60 + "\n")
        print("\n".join(html_completo))
        print("\n" + "="*60)
        print("✅ Copia este código y pégalo en index.html")
        print("   Reemplaza desde '<!-- Video 1 -->' hasta '<!-- Video 6 -->'")
        print("="*60 + "\n")

        # Guardar a archivo
        with open('videos_generados.html', 'w', encoding='utf-8') as f:
            f.write('\n'.join(html_completo))
        print("💾 También guardado en: videos_generados.html\n")
    else:
        print("\n⚠️  No hay videos configurados. Edita el diccionario VIDEOS en este script.\n")

def modo_interactivo():
    """Modo interactivo para configurar videos"""
    print("\n" + "="*60)
    print("🎬 MODO INTERACTIVO - Configurador de Videos")
    print("="*60 + "\n")

    videos_configurados = []

    for i in range(1, 7):
        print(f"\n--- Video {i} ---")
        url = input(f"URL del video {i}: ").strip()

        if not url or url == '':
            print("❌ URL vacía, saltando...")
            continue

        titulo = input("Título: ").strip()
        categoria = input("Categoría (Automoción/Deportes/Eventos/Promo): ").strip()
        duracion = input("Duración (ej: 5:30): ").strip()

        videos_configurados.append({
            'url': url,
            'titulo': titulo,
            'categoria': categoria,
            'duracion': duracion
        })

    if videos_configurados:
        print("\n✅ Generando HTML...\n")
        html_completo = []
        for i, video in enumerate(videos_configurados, 1):
            html = generar_html_video(video, i)
            if html:
                html_completo.append(html)

        if html_completo:
            with open('videos_generados.html', 'w', encoding='utf-8') as f:
                f.write('\n'.join(html_completo))
            print("\n💾 HTML generado y guardado en: videos_generados.html")
            print("✅ Copia el contenido al index.html\n")

# ==========================================
# MAIN
# ==========================================

if __name__ == "__main__":
    print("\n🎬 North Roads Media - Configurador de Videos\n")
    print("Opciones:")
    print("1. Generar HTML desde el diccionario VIDEOS (editar script)")
    print("2. Modo interactivo (introducir videos uno por uno)")
    print("3. Salir")

    opcion = input("\nElige una opción (1-3): ").strip()

    if opcion == '1':
        generar_todos_los_videos()
    elif opcion == '2':
        modo_interactivo()
    else:
        print("\n👋 ¡Hasta luego!\n")
        sys.exit(0)