# North Roads Media - Portfolio Web

Portfolio profesional para Samuel - North Roads Media, especialista en producción audiovisual con 13 años de experiencia.

## Características

- **Diseño moderno y cinematográfico** con animaciones suaves
- **Totalmente responsive** - se adapta a móviles, tablets y desktop
- **Secciones incluidas**:
  - Hero con llamada a la acción
  - Showreel destacado
  - Portfolio filtrable (Automoción, Deportes, Eventos, Promo)
  - Servicios detallados
  - Tabla de precios profesional
  - Biografía e historia
  - Formulario de contacto
  - Enlaces a redes sociales

## Estructura de Archivos

```
northroads-portfolio/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── style.css      # Estilos CSS
│   ├── js/
│   │   └── main.js        # JavaScript
│   └── images/            # Carpeta para imágenes
└── README.md
```

## Personalización

### 1. Agregar tu Showreel
En `assets/js/main.js`, busca la línea 12 y reemplaza el ID del video:

```javascript
const youtubeVideoId = 'TU_VIDEO_ID_AQUI'; // Cambiar por tu video real
```

Por ejemplo, si tu video es `https://www.youtube.com/watch?v=ABC123`, usa solo `ABC123`.

### 2. Cambiar imagen de fondo del Hero
En `index.html`, línea ~36, puedes cambiar la imagen de fondo:

```html
<div class="hero-background" style="background-image: url('TU_IMAGEN_AQUI');"></div>
```

Opciones:
- Usar una imagen de Unsplash (gratuito)
- Subir tu propia imagen a `assets/images/` y usar: `url('assets/images/tu-foto.jpg')`

### 3. Cambiar thumbnail del video
En `index.html`, línea ~59, cambia la imagen del thumbnail:

```html
<img src="TU_IMAGEN_THUMBNAIL" alt="North Roads Media Showreel">
```

### 4. Agregar imágenes personales
- Guarda tus fotos en la carpeta `assets/images/`
- Actualiza las rutas en el HTML:
  - Foto de perfil: `assets/images/samu-profile.jpg`
  - Imágenes de proyectos: Ya están usando imágenes de Unsplash como placeholder

### 5. Modificar colores
En `assets/css/style.css`, modifica las variables CSS (líneas 7-14):

```css
:root {
    --primary-color: #d4af37;    /* Color dorado principal */
    --secondary-color: #1a1a1a;  /* Fondo oscuro */
    --accent-color: #c9a961;     /* Color acento */
}
```

### 6. Actualizar contenido
Todos los textos están en `index.html` y pueden editarse directamente:
- Título hero
- Descripciones de servicios
- Biografía
- Precios
- Información de contacto

## Contacto Actual

- **Email**: Karpernorthcoast@gmail.com
- **Teléfono**: +34 687 771 686
- **YouTube**: [@northroadsmedia7195](https://www.youtube.com/@northroadsmedia7195)
- **Facebook**: [northroadsgz](https://www.facebook.com/northroadsgz)
- **Instagram**: [@northroads_club](https://www.instagram.com/northroads_club/)

## Precios Actuales

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

## Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y animaciones)
- JavaScript Vanilla (sin dependencias)
- Google Fonts (Montserrat)
- SVG para iconos

## Cómo Usar

1. **Desarrollo local**:
   - Abre `index.html` directamente en tu navegador
   - O usa un servidor local como Live Server en VS Code

2. **Publicación**:
   - Sube los archivos a tu hosting (todo el contenido de la carpeta)
   - También puedes usar servicios gratuitos como:
     - GitHub Pages
     - Netlify
     - Vercel

## Próximos Pasos

- [ ] **IMPORTANTE**: Cambiar el ID del video en `assets/js/main.js` línea 12
- [ ] Añadir tu propia imagen de fondo del hero (o mantener la actual)
- [ ] Subir foto de perfil real en `assets/images/samu-profile.jpg`
- [ ] Añadir thumbnail personalizado del video (captura de tu showreel)
- [ ] Añadir más proyectos al portfolio con imágenes reales
- [ ] Configurar formulario de contacto con backend (opcional)
- [ ] Añadir Google Analytics (opcional)
- [ ] Optimizar imágenes para web
- [ ] Configurar dominio personalizado

## Características Técnicas

- **Imagen de fondo Hero** cinematográfica con overlay oscurecido
- **Video showreel con thumbnail** y botón de play personalizado
- **Carga lazy del video** (solo se carga al hacer clic)
- **Animaciones suaves** con CSS3
- **Scroll suave** entre secciones
- **Filtros de portfolio** interactivos
- **Cursor personalizado** (desktop)
- **Navegación sticky** con efecto de scroll
- **Burger menu** responsive para móviles
- **Formulario de contacto** con validación
- **SEO-friendly** con estructura semántica
- **Efectos hover** premium en todos los elementos

---

**Desarrollado para North Roads Media**
*13 años creando sueños*