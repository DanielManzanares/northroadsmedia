# 🚀 Instrucciones Rápidas - North Roads Portfolio

## ⚡ Para ver la web AHORA

1. Abre el archivo `index.html` en tu navegador
2. O desde terminal: `firefox index.html` o `xdg-open index.html`

---

## 🎬 CAMBIOS IMPORTANTES A HACER

### 1️⃣ Cambiar Video del Showreel (URGENTE)
📁 Archivo: `assets/js/main.js`
📍 Línea: 12

```javascript
// CAMBIAR ESTO:
const youtubeVideoId = 'dQw4w9WgXcQ';

// POR ESTO (ejemplo):
const youtubeVideoId = 'ABC123XYZ';
```

**¿Cómo obtener el ID?**
- Si tu video es: `https://www.youtube.com/watch?v=ABC123XYZ`
- El ID es: `ABC123XYZ`

---

### 2️⃣ Cambiar Imagen de Fondo del Hero (Opcional)
📁 Archivo: `index.html`
📍 Línea: 36

**Opción A: Usar tu propia imagen**
```html
<div class="hero-background" style="background-image: url('assets/images/mi-foto.jpg');"></div>
```

**Opción B: Buscar otra en Unsplash**
1. Ve a https://unsplash.com
2. Busca "videography" o "camera production"
3. Copia el link de la imagen
4. Añade `?w=1920&h=1080&fit=crop&q=80` al final

---

### 3️⃣ Cambiar Thumbnail del Video (Opcional)
📁 Archivo: `index.html`
📍 Línea: 59

```html
<!-- Cambia esta URL por una captura de tu video -->
<img src="assets/images/mi-thumbnail.jpg" alt="...">
```

**Tip**: Haz una captura del mejor momento de tu showreel y súbela a `assets/images/`

---

## 🎨 Mejoras Visuales Implementadas

✅ **Hero Section**
- Imagen de fondo impactante de videografía profesional
- Oscurecida con overlay dorado/negro
- Texto destacado por encima

✅ **Showreel**
- Thumbnail con imagen cinematográfica
- Botón de PLAY grande y llamativo (dorado)
- El video solo se carga al hacer clic (más rápido)
- Efecto hover premium

✅ **Colorimetría**
- Toda la web con paleta dorado/negro/gris
- Imagen de fondo integrada en el diseño
- Overlay gradiente para legibilidad perfecta

---

## 📱 Prueba tu Web

1. **Desktop**: Abre en navegador normal
2. **Móvil**: Abre Chrome DevTools (F12) → Toggle device toolbar
3. **Verifica**:
   - ✅ Imagen de fondo se ve oscura pero visible
   - ✅ Texto se lee perfectamente
   - ✅ Video muestra thumbnail y botón PLAY
   - ✅ Al hacer clic en PLAY → video de YouTube se carga

---

## ❓ Problemas Comunes

**"El video no cambia"**
→ Edita `assets/js/main.js` línea 12

**"La imagen de fondo no se ve"**
→ Verifica la URL en `index.html` línea 36

**"El texto no se lee"**
→ Está bien así, la imagen está oscurecida a propósito

---

## 📞 Contacto Configurado

- Email: Karpernorthcoast@gmail.com
- Teléfono: 687 771 686
- Redes: YouTube, Facebook, Instagram

---

**¡Listo! Tu web está preparada para impresionar 🎬✨**