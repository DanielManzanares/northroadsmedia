# 🎬 Cómo Configurar los Videos de YouTube

## ⚡ Guía Rápida

El carrusel de videos está listo para mostrar tus últimos 6 trabajos de YouTube. Solo necesitas actualizar los IDs y la información de cada video.

---

## 📝 PASO 1: Obtener los IDs de tus Videos

1. Ve a tu canal de YouTube: https://www.youtube.com/@northroadsmedia7195/videos
2. Haz clic en uno de tus videos
3. En la URL verás algo como: `https://www.youtube.com/watch?v=ABC123XYZ`
4. El ID es la parte después de `v=` → **ABC123XYZ**

**Ejemplo real:**
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ`

---

## 🔧 PASO 2: Editar el HTML

Abre el archivo: **`index.html`**

Busca la sección "Videos Section" (aproximadamente línea 53)

### Para cada video, cambia:

#### Video 1
```html
<div class="video-card" data-video-id="VIDEO_ID_1">
    <div class="video-thumbnail">
        <img src="https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg" alt="Video 1">
        ...
        <div class="video-duration">5:30</div>  <!-- Duración real -->
    </div>
    <div class="video-info">
        <h3>Título del Video 1</h3>  <!-- Título real -->
        <p>Automoción</p>  <!-- Categoría: Automoción, Deportes, Eventos, Promo -->
    </div>
</div>
```

**CAMBIAR A:**
```html
<div class="video-card" data-video-id="TU_ID_REAL">
    <div class="video-thumbnail">
        <img src="https://img.youtube.com/vi/TU_ID_REAL/maxresdefault.jpg" alt="Tu título">
        ...
        <div class="video-duration">3:45</div>
    </div>
    <div class="video-info">
        <h3>Ford Mustang 2024 - Review Completo</h3>
        <p>Automoción</p>
    </div>
</div>
```

---

## 📋 EJEMPLO COMPLETO DE CONFIGURACIÓN

Supongamos que tus últimos 6 videos son:

1. **Ford Mustang Review** - ID: `ABC123` - 5:30 - Automoción
2. **Partido de Fútbol Final** - ID: `DEF456` - 8:15 - Deportes
3. **Boda María y Juan** - ID: `GHI789` - 4:30 - Eventos
4. **Promo Nike Running** - ID: `JKL012` - 2:45 - Promo
5. **Drift Competition** - ID: `MNO345` - 6:20 - Deportes
6. **BMW M3 Launch** - ID: `PQR678` - 5:00 - Automoción

### Así quedaría Video 1:
```html
<div class="video-card" data-video-id="ABC123">
    <div class="video-thumbnail">
        <img src="https://img.youtube.com/vi/ABC123/maxresdefault.jpg" alt="Ford Mustang Review">
        <div class="video-play-overlay">
            <div class="play-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
            </div>
        </div>
        <div class="video-duration">5:30</div>
    </div>
    <div class="video-info">
        <h3>Ford Mustang Review</h3>
        <p>Automoción</p>
    </div>
</div>
```

---

## 🎯 Qué Reemplazar Exactamente

Para cada uno de los 6 videos, busca y reemplaza:

1. **`data-video-id="VIDEO_ID_X"`** → Tu ID real
2. **`src="https://img.youtube.com/vi/VIDEO_ID_X/maxresdefault.jpg"`** → Tu ID real
3. **`<div class="video-duration">X:XX</div>`** → Duración real
4. **`<h3>Título del Video X</h3>`** → Título real
5. **`<p>Categoría</p>`** → Automoción, Deportes, Eventos o Promo

---

## 🖼️ Sobre las Thumbnails

Las imágenes se cargan automáticamente de YouTube usando:
```
https://img.youtube.com/vi/TU_ID/maxresdefault.jpg
```

YouTube genera automáticamente las miniaturas, así que no necesitas subirlas manualmente.

---

## ✅ Checklist de Configuración

- [ ] Video 1: ID, duración, título, categoría
- [ ] Video 2: ID, duración, título, categoría
- [ ] Video 3: ID, duración, título, categoría
- [ ] Video 4: ID, duración, título, categoría
- [ ] Video 5: ID, duración, título, categoría
- [ ] Video 6: ID, duración, título, categoría

---

## 🚀 Funcionalidades del Carrusel

✅ **Responsive**: En móvil se ve 1 video, en tablet 2, en desktop 3
✅ **Modal**: Al hacer clic, el video se abre en pantalla completa
✅ **Autoplay**: El video empieza automáticamente en el modal
✅ **Thumbnails automáticas**: Se cargan directo de YouTube
✅ **Botones navegación**: Flechas para navegar (desktop)
✅ **Duración visible**: Se muestra en cada thumbnail
✅ **Categorías**: Identifica rápidamente el tipo de contenido

---

## 🎨 Personalización Opcional

### Cambiar número de videos mostrados (desktop)

En **`assets/css/style.css`**, busca (línea ~426):
```css
.videos-carousel {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* Cambiar a 2 o 4 */
    gap: 30px;
}
```

### Añadir más de 6 videos

Simplemente copia y pega uno de los bloques `<div class="video-card">` completos y actualiza su información.

---

## 📞 ¿Necesitas ayuda?

Si no sabes cómo obtener los IDs o tienes problemas:
1. Envíame los enlaces de los 6 videos que quieres mostrar
2. Te los configuro directamente

---

**¡Listo! Una vez configurados los videos, guarda el archivo y recarga la página. Deberías ver tu carrusel funcionando perfectamente. 🎬✨**