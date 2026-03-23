// ===========================
// GALLERY SYSTEM - SIMPLIFIED
// ===========================

let galleryImages = [];
let currentImageIndex = 0;
let currentFilter = 'automocion';
let currentPage = 1;
const imagesPerPage = 20;

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const galleryLoading = document.getElementById('galleryLoading');
const filterBtns = document.querySelectorAll('.gallery-filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxOverlay = document.getElementById('lightboxOverlay');

console.log('📸 Gallery JS loaded');

// ===========================
// LOAD GALLERY IMAGES
// ===========================
function loadGalleryImages() {
    console.log('📂 Loading gallery data...');

    fetch('assets/gallery/gallery-data.json')
        .then(response => {
            console.log('✅ Response received:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('✅ Data parsed:', data.length, 'images');
            galleryImages = data;
            renderGallery();
            if (galleryLoading) {
                galleryLoading.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('❌ Error loading gallery:', error);
            if (galleryLoading) {
                galleryLoading.innerHTML = '<p style="color: #ff4444;">Error al cargar la galería. Revisa la consola.</p>';
            }
        });
}

// ===========================
// RENDER GALLERY
// ===========================
function renderGallery(filter = 'automocion', page = 1) {
    if (!galleryGrid) {
        console.error('❌ galleryGrid element not found');
        return;
    }

    console.log(`🎨 Rendering gallery: filter=${filter}, page=${page}`);
    galleryGrid.innerHTML = '';

    const filteredImages = galleryImages.filter(img => img.category === filter);

    console.log(`📊 Filtered images: ${filteredImages.length}`);

    // Paginación
    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const imagesToShow = filteredImages.slice(startIndex, endIndex);

    console.log(`📄 Showing images ${startIndex}-${endIndex}`);

    imagesToShow.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item visible';
        item.setAttribute('data-category', image.category);
        item.setAttribute('data-index', startIndex + index);

        item.innerHTML = `
            <img src="${image.thumb || image.src}"
                 alt="${image.alt || image.title}">
            <div class="gallery-item-overlay">
                <div class="gallery-item-category">${getCategoryName(image.category)}</div>
                <div class="gallery-item-title">${image.title}</div>
            </div>
        `;

        item.addEventListener('click', () => {
            console.log('🖱️ Clicked image:', startIndex + index);
            openLightbox(startIndex + index);
        });

        galleryGrid.appendChild(item);
    });

    console.log(`✅ Rendered ${imagesToShow.length} images`);

    // Paginación
    if (filteredImages.length > imagesPerPage) {
        addPaginationControls(filteredImages.length, page);
    }
}

// ===========================
// CATEGORY NAME
// ===========================
function getCategoryName(category) {
    const names = {
        'automocion': 'AUTOMOCIÓN',
        'deportes': 'DEPORTES',
        'eventos': 'EVENTOS',
        'promo': 'PROMO'
    };
    return names[category] || category.toUpperCase();
}

// ===========================
// PAGINATION
// ===========================
function addPaginationControls(totalImages, currentPage) {
    const totalPages = Math.ceil(totalImages / imagesPerPage);

    let paginationDiv = document.getElementById('galleryPagination');
    if (!paginationDiv) {
        paginationDiv = document.createElement('div');
        paginationDiv.id = 'galleryPagination';
        paginationDiv.className = 'gallery-pagination';
        galleryGrid.parentElement.appendChild(paginationDiv);
    }

    paginationDiv.innerHTML = '';

    // Botón anterior
    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.textContent = '← Anterior';
        prevBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            renderGallery(currentFilter, currentPage - 1);
        });
        paginationDiv.appendChild(prevBtn);
    }

    // Info
    const pageInfo = document.createElement('span');
    pageInfo.className = 'pagination-info';
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
    paginationDiv.appendChild(pageInfo);

    // Botón siguiente
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.textContent = 'Siguiente →';
        nextBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            renderGallery(currentFilter, currentPage + 1);
        });
        paginationDiv.appendChild(nextBtn);
    }
}

// ===========================
// FILTERS
// ===========================
if (filterBtns) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('🔍 Filter clicked:', this.getAttribute('data-filter'));

            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            currentPage = 1;
            renderGallery(filter, 1);
        });
    });
}

// ===========================
// LIGHTBOX
// ===========================
function openLightbox(index) {
    console.log('🖼️ Opening lightbox:', index);
    currentImageIndex = index;
    const image = galleryImages[index];

    if (lightboxImage && lightboxCaption && lightbox) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt || image.title;
        lightboxCaption.textContent = image.title;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    console.log('❌ Closing lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    const image = galleryImages[currentImageIndex];
    if (lightboxImage && lightboxCaption) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt || image.title;
        lightboxCaption.textContent = image.title;
    }
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    const image = galleryImages[currentImageIndex];
    if (lightboxImage && lightboxCaption) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt || image.title;
        lightboxCaption.textContent = image.title;
    }
}

// Event Listeners
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevImage);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextImage);
}

// Keyboard
document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

// ===========================
// INITIALIZE
// ===========================
if (galleryGrid) {
    console.log('🚀 Initializing gallery...');
    loadGalleryImages();
} else {
    console.error('❌ Gallery grid not found!');
}

console.log('✅ Gallery system ready');
