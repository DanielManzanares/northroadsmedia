# 📸 PLAN DE GALERÍAS PROFESIONALES

## 🎯 OBJETIVO

Crear galerías visuales profesionales organizadas por categoría con las fotos/recursos de los drives de Samu.

---

## 📂 ESTRUCTURA DE RECURSOS

```
assets/gallery/
├── automocion/     ← Fotos de coches, vehículos
├── deportes/       ← Fotos deportivas, competiciones
├── eventos/        ← Eventos, bodas, corporativos
├── promo/          ← Material promocional
└── temp_*          ← Descargas de Google Drive (temporal)
```

---

## 🎨 DISEÑO DE GALERÍAS

### 1. Grid Masonry Responsive
- Desktop: 3-4 columnas
- Tablet: 2 columnas
- Móvil: 1 columna

### 2. Lightbox Modal
- Click en imagen → Abre fullscreen
- Navegación prev/next
- Cerrar con X o ESC

### 3. Filtros por Categoría
- Botones: TODOS | AUTOMOCIÓN | DEPORTES | EVENTOS | PROMO
- Animación smooth al filtrar

---

## 🎬 VIDEO SHOWREEL

### Principal
- **Driftmasters** (en Descargas - descargando)
- Posición: CABECERA del showreel
- Reproductor HTML5 local

### Secundarios
- video2.mp4 (✅ descargado - 31MB)
- video4.mp4 (✅ descargado - 14MB)
- Otros videos cuando estén disponibles

---

## 📥 DESCARGAS EN PROGRESO

1. ✅ Drive 1: `1idsDWr0f188lqsbBchGtiyDeuMK1tV6M`
2. ✅ Drive 2: `1HiTlRPXg9DQBNxGmNGzc8qm1wkRQVVpT`
3. ✅ Mundoswap: `1iU9bdmINYjNRmCR4MA7D9N5BqiDdWtff`
4. ✅ Drive 4: `1MJJb9714IcJG2j8LTUX-7fetdA5ZjDhh`

---

## 🔄 PROCESO DE ORGANIZACIÓN

1. **Descargar** todas las carpetas de drives
2. **Clasificar** imágenes por tipo:
   - Coches/vehículos → automocion/
   - Deportes/competiciones → deportes/
   - Eventos/bodas → eventos/
   - Promocional → promo/
3. **Optimizar** imágenes (resize si son muy grandes)
4. **Integrar** en HTML con galerías

---

## 💻 CÓDIGO A IMPLEMENTAR

### HTML
```html
<section id="galeria-automocion">
    <h2>AUTOMOCIÓN</h2>
    <div class="gallery-grid">
        <div class="gallery-item" data-src="ruta-imagen-grande">
            <img src="ruta-thumbnail" alt="Descripción">
        </div>
        <!-- Más items -->
    </div>
</section>
```

### CSS
- Grid responsivo
- Hover effects
- Lightbox modal
- Animaciones

### JavaScript
- Filtrado dinámico
- Lightbox funcional
- Lazy loading de imágenes

---

## 📊 ESTADO ACTUAL

- [ ] Descargas de drives (en progreso)
- [ ] Clasificación de imágenes
- [ ] Optimización de tamaños
- [ ] Código HTML galerías
- [ ] CSS galerías
- [ ] JavaScript lightbox
- [ ] Integración video driftmasters
- [ ] Testing responsive

---

**🚀 En progreso... Las descargas tomarán unos minutos.**