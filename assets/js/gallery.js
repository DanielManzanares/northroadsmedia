// ===========================
// VIDEO GALLERY SYSTEM
// ===========================

let galleryVideos = [];
let currentVideoIndex = 0;
let currentFilter = 'automocion';
let currentSubfilter = 'produccion'; // Default subcategory
let currentPage = 1;
const videosPerPage = 12;

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const galleryLoading = document.getElementById('galleryLoading');
const filterBtns = document.querySelectorAll('.gallery-filter-btn');
const subfiltersContainer = document.getElementById('gallerySubfilters');
const lightbox = document.getElementById('lightbox');
const lightboxVideoContainer = document.getElementById('lightboxVideoContainer');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxOverlay = document.getElementById('lightboxOverlay');

console.log('🎬 Video Gallery JS loaded');

// ===========================
// SUBCATEGORY CONFIGURATION
// ===========================
const subcategoryConfig = {
    'automocion': [
        { value: 'produccion', label: 'PRODUCCIÓN/TALLER' },
        { value: 'sesiones', label: 'SESIONES/PROFILES' }
    ],
    'deportes': [
        { value: 'deportes', label: 'DEPORTES' },
        { value: 'motorsport', label: 'MOTORSPORT' }
    ],
    'eventos': [
        { value: 'eventos', label: 'EVENTOS' }
    ]
};

// ===========================
// LOAD GALLERY VIDEOS
// ===========================
function loadGalleryVideos() {
    console.log('📂 Loading video gallery data...');

    fetch('assets/gallery/gallery-data.json')
        .then(response => {
            console.log('✅ Response received:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('✅ Data parsed:', data.length, 'videos');
            galleryVideos = data;
            renderSubfilters(currentFilter);
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
// RENDER SUBFILTERS
// ===========================
function renderSubfilters(category) {
    if (!subfiltersContainer) return;

    const subfilters = subcategoryConfig[category] || [];

    if (subfilters.length === 0) {
        subfiltersContainer.innerHTML = '';
        return;
    }

    subfiltersContainer.innerHTML = subfilters.map((subfilter, index) => `
        <button class="gallery-subfilter-btn ${index === 0 ? 'active' : ''}"
                data-subfilter="${subfilter.value}">
            ${subfilter.label}
        </button>
    `).join('');

    // Set default subfilter
    if (subfilters.length > 0) {
        currentSubfilter = subfilters[0].value;
    }

    // Add event listeners to subfilter buttons
    const subfilterBtns = document.querySelectorAll('.gallery-subfilter-btn');
    subfilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            subfilterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentSubfilter = this.getAttribute('data-subfilter');
            currentPage = 1;
            renderGallery();
        });
    });
}

// ===========================
// RENDER GALLERY
// ===========================
function renderGallery(filter = currentFilter, subfilter = currentSubfilter, page = 1) {
    if (!galleryGrid) {
        console.error('❌ galleryGrid element not found');
        return;
    }

    console.log(`🎨 Rendering gallery: filter=${filter}, subfilter=${subfilter}, page=${page}`);
    galleryGrid.innerHTML = '';

    // Filter by category and subcategory
    const filteredVideos = galleryVideos.filter(video =>
        video.category === filter && video.subcategory === subfilter
    );

    console.log(`📊 Filtered videos: ${filteredVideos.length}`);

    // Pagination
    const startIndex = (page - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    const videosToShow = filteredVideos.slice(startIndex, endIndex);

    console.log(`📄 Showing videos ${startIndex}-${endIndex}`);

    videosToShow.forEach((video, index) => {
        const globalIndex = galleryVideos.findIndex(v => v.id === video.id);
        const item = document.createElement('div');
        item.className = 'gallery-item visible';
        item.setAttribute('data-category', video.category);
        item.setAttribute('data-subcategory', video.subcategory);
        item.setAttribute('data-index', globalIndex);

        item.innerHTML = `
            <img src="${video.thumbnail}"
                 alt="${video.title}">
            <div class="gallery-item-overlay">
                <div class="gallery-item-category">${getCategoryName(video.category)}</div>
                <div class="gallery-item-title">${video.platform.toUpperCase()}</div>
            </div>
        `;

        item.addEventListener('click', () => {
            console.log('🖱️ Clicked video:', globalIndex);
            openLightbox(globalIndex);
        });

        galleryGrid.appendChild(item);
    });

    console.log(`✅ Rendered ${videosToShow.length} videos`);

    // Pagination
    if (filteredVideos.length > videosPerPage) {
        addPaginationControls(filteredVideos.length, page);
    } else {
        removePaginationControls();
    }
}

// ===========================
// CATEGORY NAME
// ===========================
function getCategoryName(category) {
    const names = {
        'automocion': 'AUTOMOCIÓN',
        'deportes': 'DEPORTES',
        'eventos': 'EVENTOS'
    };
    return names[category] || category.toUpperCase();
}

// ===========================
// PAGINATION
// ===========================
function addPaginationControls(totalVideos, currentPage) {
    const totalPages = Math.ceil(totalVideos / videosPerPage);

    let paginationDiv = document.getElementById('galleryPagination');
    if (!paginationDiv) {
        paginationDiv = document.createElement('div');
        paginationDiv.id = 'galleryPagination';
        paginationDiv.className = 'gallery-pagination';
        galleryGrid.parentElement.appendChild(paginationDiv);
    }

    paginationDiv.innerHTML = '';

    // Previous button
    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.textContent = '← Anterior';
        prevBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            renderGallery(currentFilter, currentSubfilter, currentPage - 1);
        });
        paginationDiv.appendChild(prevBtn);
    }

    // Page info
    const pageInfo = document.createElement('span');
    pageInfo.className = 'pagination-info';
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
    paginationDiv.appendChild(pageInfo);

    // Next button
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.textContent = 'Siguiente →';
        nextBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            renderGallery(currentFilter, currentSubfilter, currentPage + 1);
        });
        paginationDiv.appendChild(nextBtn);
    }
}

function removePaginationControls() {
    const paginationDiv = document.getElementById('galleryPagination');
    if (paginationDiv) {
        paginationDiv.remove();
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

            // Update subfilters and render
            renderSubfilters(filter);
            renderGallery();
        });
    });
}

// ===========================
// LIGHTBOX - VIDEO MODAL
// ===========================
function openLightbox(index) {
    console.log('🎬 Opening video modal:', index);
    currentVideoIndex = index;
    const video = galleryVideos[index];

    if (lightboxVideoContainer && lightbox) {
        // Clear previous content
        lightboxVideoContainer.innerHTML = '';

        // Remove previous platform classes
        lightboxVideoContainer.classList.remove('platform-youtube', 'platform-instagram');

        // Add platform-specific class for aspect ratio
        lightboxVideoContainer.classList.add(`platform-${video.platform}`);

        // Create iframe for video
        const iframe = document.createElement('iframe');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

        if (video.platform === 'youtube') {
            // YouTube embed
            iframe.src = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`;
        } else if (video.platform === 'instagram') {
            // Instagram embed
            iframe.src = `https://www.instagram.com/reel/${video.videoId}/embed`;
        }

        lightboxVideoContainer.appendChild(iframe);

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    console.log('❌ Closing video modal');
    if (lightbox && lightboxVideoContainer) {
        lightbox.classList.remove('active');
        lightboxVideoContainer.innerHTML = ''; // Stop video
        document.body.style.overflow = 'auto';
    }
}

function showPrevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + galleryVideos.length) % galleryVideos.length;
    openLightbox(currentVideoIndex);
}

function showNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % galleryVideos.length;
    openLightbox(currentVideoIndex);
}

// Event Listeners
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevVideo);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextVideo);
}

// Keyboard
document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevVideo();
        } else if (e.key === 'ArrowRight') {
            showNextVideo();
        }
    }
});

// ===========================
// INITIALIZE
// ===========================
if (galleryGrid) {
    console.log('🚀 Initializing video gallery...');
    loadGalleryVideos();
} else {
    console.error('❌ Gallery grid not found!');
}

console.log('✅ Video gallery system ready');

// ===========================
// HASH NAVIGATION
// ===========================
function loadFromHash() {
    const hash = window.location.hash.substring(1); // Remove #
    if (!hash) return;

    console.log('🔗 Loading from hash:', hash);

    // Parse hash: format is "category-subcategory" or just "category"
    const parts = hash.split('-');
    const category = parts[0];
    const subcategory = parts[1] || null;

    if (category && ['automocion', 'deportes', 'eventos'].includes(category)) {
        currentFilter = category;

        // Activate category button
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === category) {
                btn.classList.add('active');
            }
        });

        // Render subfilters
        renderSubfilters(category);

        // If subcategory specified, activate it
        if (subcategory) {
            currentSubfilter = subcategory;
            setTimeout(() => {
                const subfilterBtns = document.querySelectorAll('.gallery-subfilter-btn');
                subfilterBtns.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-subfilter') === subcategory) {
                        btn.classList.add('active');
                    }
                });
            }, 100);
        }

        // Render gallery
        renderGallery();
    }
}

// Call on load if hash exists
if (window.location.hash) {
    window.addEventListener('DOMContentLoaded', loadFromHash);
}

