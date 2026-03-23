# 🎬 North Roads Media - Portfolio Web Profesional

Portfolio profesional para Samuel - North Roads Media, especialista en producción audiovisual con **13 años de experiencia**.

---

## ✨ Características

- **Diseño cinematográfico moderno** con animaciones suaves
- **100% Responsive** - móvil, tablet y desktop
- **Carrusel de videos** con últimos trabajos de YouTube
- **Modal de video** fullscreen con autoplay
- **Imagen de fondo** profesional en hero con overlay
- **Portfolio filtrable** por categoría
- **Tabla de precios** profesional
- **Formulario de contacto** funcional

### Secciones Incluidas:

1. **Hero** - Imagen de fondo + llamada a la acción
2. **Carrusel Videos** - Últimos 6 trabajos de YouTube
3. **Portfolio** - Filtrable (Automoción, Deportes, Eventos, Promo)
4. **Servicios** - 4 servicios principales
5. **Precios** - Tabla completa con tarifas
6. **Sobre Mí** - Biografía + estadísticas
7. **Contacto** - Info + formulario + redes sociales
8. **Footer** - Enlaces rápidos

---

## 📁 Estructura de Archivos

```
northroads-portfolio/
├── index.html                      # Página principal
├── assets/
│   ├── css/
│   │   └── style.css              # Estilos CSS
│   ├── js/
│   │   └── main.js                # JavaScript con carrusel
│   └── images/
│       └── samu-profile.png       # ✅ Tu foto ya configurada
├── README.md                       # Este archivo
├── CONFIGURAR_VIDEOS.md           # ⭐ Guía para configurar videos
├── INSTRUCCIONES_RAPIDAS.md       # Guía rápida anterior
└── configurar_videos.py           # 🐍 Script para automatizar videos
```

---

## 🚀 CONFIGURACIÓN RÁPIDA

### ✅ PASO 1: Configura los Videos del Carrusel

Tienes **3 formas** de hacerlo:

#### **Método A: Script Automático (Más Fácil) 🐍**
```bash
cd ~/northroads-portfolio
python3 configurar_videos.py
```
1. Elige opción `2` (Modo interactivo)
2. Pega las URLs de tus 6 últimos videos de YouTube
3. Introduce título, categoría y duración
4. El script genera el HTML automáticamente
5. Copia y pega en `index.html`

#### **Método B: Manual Guiada 📖**
Lee el archivo **`CONFIGURAR_VIDEOS.md`** - tiene instrucciones paso a paso con ejemplos.

#### **Método C: Edición Directa ✏️**
Abre `index.html`, busca la sección "Videos Section" y para cada video cambia:

```html
<div class="video-card" data-video-id="TU_ID_AQUI">
    <div class="video-thumbnail">
        <img src="https://img.youtube.com/vi/TU_ID_AQUI/maxresdefault.jpg" alt="Tu título">
        ...
        <div class="video-duration">5:30</div>  <!-- Duración real -->
    </div>
    <div class="video-info">
        <h3>Tu Título del Video</h3>
        <p>Automoción</p>  <!-- o Deportes, Eventos, Promo -->
    </div>
</div>
```

**¿Cómo obtener el ID de YouTube?**
- URL: `https://www.youtube.com/watch?v=ABC123XYZ`
- ID: `ABC123XYZ` (la parte después de `v=`)

---

### ✅ PASO 2: Foto de Perfil (YA CONFIGURADA)

Tu foto de perfil ya está instalada en:
- **Ubicación**: `assets/images/samu-profile.png`
- **Usado en**: Sección "Sobre Mí"
- ✅ **No necesitas hacer nada**

---

### ⚙️ PASO 3: Imagen de Fondo del Hero (Opcional)

La imagen actual es profesional de producción audiovisual.

**Para cambiarla:**

Abre `index.html`, línea ~36:
```html
<div class="hero-background" style="background-image: url('assets/images/mi-foto.jpg');"></div>
```

**Recomendaciones:**
- Resolución mínima: 1920x1080px
- Formato: JPG o PNG
- La imagen se oscurecerá automáticamente para legibilidad del texto

---

## 🎨 Personalización Adicional

### Cambiar Colores

En `assets/css/style.css`, líneas 7-14:

```css
:root {
    --primary-color: #d4af37;    /* Dorado principal */
    --secondary-color: #1a1a1a;  /* Fondo oscuro */
    --accent-color: #c9a961;     /* Dorado claro */
    --text-color: #ffffff;        /* Blanco */
    --bg-dark: #0a0a0a;          /* Negro profundo */
}
```

### Modificar Textos

Todos los textos se editan en `index.html`:
- Hero title
- Descripciones de servicios
- Biografía
- Precios
- Información de contacto

---

## 📞 Contacto Actual Configurado

- **Email**: Karpernorthcoast@gmail.com
- **Teléfono**: +34 687 771 686
- **Instagram**: [@m.b.c.productions](https://www.instagram.com/m.b.c.productions/)
- **YouTube**: [@northroadsmedia7195](https://www.youtube.com/@northroadsmedia7195)
- **Facebook**: [northroadsgz](https://www.facebook.com/northroadsgz)

---

## 💰 Precios Configurados

### Video
- REEL: 100€/día
- VIDEO CORTO: 300€/día
- VIDEO LARGO: 450€/día

### Evento
- CÁMARA VIDEO: 350€/día
- CAMERACAR: 450€/día
- DRONE: 450€/día
- FOTOGRAFÍA: 300€/día
- AYUDANTE: 150€/día

### Edición
- REEL: 50€
- PROMO: 150€
- VIDEO CORTO: 200€
- VIDEO LARGO: 350€

---

## 🌐 Cómo Ver la Web

### Desarrollo Local
```bash
cd ~/northroads-portfolio
firefox index.html
# o
xdg-open index.html
```

### Publicación Online (Opciones Gratuitas)

#### **GitHub Pages (Recomendado)**
1. Crea repo en GitHub
2. Sube todos los archivos
3. Activa GitHub Pages en Settings
4. Tu web estará en: `tunombre.github.io/northroads-portfolio`

#### **Netlify**
1. Arrastra la carpeta completa a netlify.com
2. Listo - te da una URL automática

#### **Vercel**
1. Conecta con GitHub
2. Deploy automático

---

## 🎯 Características Técnicas del Carrusel

✅ **Responsive**
- Desktop: 3 videos visibles
- Tablet: 2 videos visibles
- Móvil: 1 video visible

✅ **Modal Fullscreen**
- Click en video → Se abre en pantalla completa
- Autoplay automático
- Cerrar con X o tecla ESC o click fuera

✅ **Thumbnails Automáticas**
- Se cargan directo de YouTube
- Formato: `https://img.youtube.com/vi/ID/maxresdefault.jpg`

✅ **Navegación**
- Botones prev/next en desktop
- Scroll horizontal en móvil

✅ **Efectos Premium**
- Hover con zoom en thumbnail
- Play button animado
- Duración visible en esquina

---

## 📋 Checklist de Implementación

- [ ] **Videos**: Configurar 6 videos del carrusel (IDs, títulos, duraciones)
- [ ] **Foto perfil**: ✅ Ya configurada (samu-profile.png)
- [ ] **Imagen hero**: Opcional - cambiar si quieres una tuya
- [ ] **Textos**: Revisar y ajustar si es necesario
- [ ] **Precios**: Confirmar que son correctos
- [ ] **Contacto**: Verificar email y teléfono
- [ ] **Redes sociales**: Links funcionando
- [ ] **Prueba responsive**: Ver en móvil
- [ ] **Prueba videos**: Click en cada uno para verificar

---

## 🐛 Solución de Problemas

### "Los videos no se cargan"
→ Verifica que los IDs sean correctos en `data-video-id="TU_ID"`

### "Las thumbnails no se ven"
→ Asegúrate de usar el mismo ID en la URL de la imagen:
```html
<img src="https://img.youtube.com/vi/TU_ID_AQUI/maxresdefault.jpg">
```

### "El modal no se cierra"
→ Presiona ESC o haz click fuera del video

### "La foto de perfil no aparece"
→ Verifica que exista: `assets/images/samu-profile.png`

### "La imagen de fondo no se ve"
→ Verifica la ruta en el HTML, línea 36

---

## 🔄 Actualizar Videos Periódicamente

Cuando subas nuevos videos a YouTube:

1. **Opción fácil**: Ejecuta `python3 configurar_videos.py` de nuevo
2. **Opción manual**: Edita solo los primeros videos en `index.html`

**Tip**: Ordena los videos del más reciente al más antiguo para mostrar siempre lo último.

---

## 📚 Archivos de Ayuda

- **`CONFIGURAR_VIDEOS.md`** → Guía completa para configurar videos
- **`configurar_videos.py`** → Script automático
- **`INSTRUCCIONES_RAPIDAS.md`** → Guía rápida anterior (showreel antiguo)

---

## 🎨 Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Variables CSS, Animations)
- JavaScript Vanilla (sin dependencias)
- Google Fonts (Montserrat)
- SVG Icons
- YouTube IFrame API

---

## 📈 Próximos Pasos Sugeridos

1. Configura los 6 videos con tus últimos trabajos
2. Revisa todos los textos y ajusta si es necesario
3. Prueba la web en móvil
4. Optimiza las imágenes si cargan lento
5. Publica en GitHub Pages o Netlify
6. Configura un dominio personalizado (opcional)
7. Añade Google Analytics (opcional)

---

## 💡 Consejos Profesionales

### Para los Videos:
- Elige tus **mejores** trabajos, no los más recientes necesariamente
- Mezcla categorías: 2 automoción, 2 deportes, 1 evento, 1 promo
- Mantén duración similar (3-7 minutos ideal)
- Actualiza cada 1-2 meses con nuevos trabajos

### Para las Imágenes:
- Usa imágenes de **alta calidad** (mínimo 1920px de ancho)
- Comprímelas antes de subirlas (usa TinyPNG o similar)
- Nombra archivos descriptivamente: `automocion-porsche-2024.jpg`

### Para el Contenido:
- Mantén textos **concisos** y directos
- Destaca tus **especialidades** (automoción + deportes)
- Actualiza precios regularmente
- Añade testimonios de clientes (opcional futuro)

---

## ✉️ Soporte

Si necesitas ayuda con:
- Configuración de videos
- Problemas técnicos
- Personalización adicional
- Publicación online

**Contacto**: Las herramientas usadas para crear este portfolio pueden ayudarte a resolverlo.

---

**🎬 ¡Listo para impresionar! Tu portfolio profesional está a solo unos pasos de estar online.**

**Desarrollado para North Roads Media - 13 años creando sueños ✨**