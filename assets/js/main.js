// ===========================
// NAVIGATION
// ===========================
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Burger Animation
    burger.classList.toggle('toggle');
});

// Close menu when clicking on a link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    }

    lastScroll = currentScroll;
});

// ===========================
// VIDEO MODAL - YouTube Embeds + HTML5 Local Videos
// ===========================
const videoThumbnails = document.querySelectorAll('.video-thumbnail-link');
const videoModal = document.getElementById('videoModal');
const videoModalOverlay = document.getElementById('videoModalOverlay');
const videoModalPlayer = document.getElementById('videoModalPlayer');
const modalCloseBtn = document.getElementById('modalCloseBtn');

if (videoThumbnails && videoModal) {
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function(e) {
            e.preventDefault();
            const youtubeId = this.getAttribute('data-youtube-id');
            const videoSrc = this.getAttribute('data-video-src');

            if (youtubeId) {
                openVideoModal(youtubeId, 'youtube');
            } else if (videoSrc) {
                openVideoModal(videoSrc, 'local');
            }
        });
    });
}

function openVideoModal(videoSource, type) {
    if (type === 'youtube') {
        console.log('Abriendo video de YouTube:', videoSource);

        // Crear iframe de YouTube
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoSource}?autoplay=1&rel=0`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';

        // Limpiar y añadir iframe
        videoModalPlayer.innerHTML = '';
        videoModalPlayer.appendChild(iframe);

    } else if (type === 'local') {
        console.log('Abriendo video local:', videoSource);

        // Crear elemento video HTML5
        const video = document.createElement('video');
        video.setAttribute('controls', '');
        video.setAttribute('autoplay', '');
        video.setAttribute('preload', 'metadata');
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.position = 'absolute';
        video.style.top = '0';
        video.style.left = '0';
        video.style.objectFit = 'contain';
        video.style.backgroundColor = '#000';

        // Crear source
        const source = document.createElement('source');
        source.setAttribute('src', videoSource);
        source.setAttribute('type', 'video/mp4');

        video.appendChild(source);

        // Limpiar y añadir video
        videoModalPlayer.innerHTML = '';
        videoModalPlayer.appendChild(video);

        // Intentar reproducir
        video.play().catch(err => {
            console.error('Error al reproducir:', err);
            video.controls = true;
        });
    }

    // Mostrar modal
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    console.log('Modal abierto');
}

function closeVideoModal() {
    console.log('Cerrando modal');

    // Detener y eliminar video/iframe
    const video = videoModalPlayer.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
    videoModalPlayer.innerHTML = '';

    // Cerrar modal
    videoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal con botón X
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeVideoModal);
}

// Cerrar modal clickeando fuera
if (videoModalOverlay) {
    videoModalOverlay.addEventListener('click', closeVideoModal);
}

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
        closeVideoModal();
    }
});

// ===========================
// PORTFOLIO FILTERS
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                if (item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// Inicializar filtro por defecto (automocion)
document.addEventListener('DOMContentLoaded', () => {
    portfolioItems.forEach(item => {
        if (item.getAttribute('data-category') === 'automocion') {
            item.style.display = 'block';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        } else {
            item.style.display = 'none';
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
        }
    });
});

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');

        // Ignorar si es solo "#"
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            // Calcular altura del navbar (80px aprox)
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - navbarHeight - 20; // 20px extra de margen

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Cerrar menú móvil si está abierto
            const navLinks = document.querySelector('.nav-links');
            const burger = document.querySelector('.burger');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
            }
        }
    });
});

// ===========================
// INTERSECTION OBSERVER (Animations on Scroll)
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease-out';
    observer.observe(item);
});

// Observe service cards
document.querySelectorAll('.servicio-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// ===========================
// COUNTER ANIMATION
// ===========================
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // Lower is faster

const countUp = (counter) => {
    const target = +counter.innerText.replace('+', '');
    const increment = target / speed;
    let count = 0;

    const updateCount = () => {
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count) + '+';
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target + '+';
        }
    };

    updateCount();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counters.forEach(counter => countUp(counter));
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about-section');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// ===========================
// CURSOR EFFECT (Optional - Premium feel)
// ===========================
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.classList.add('cursor-follower');
document.body.appendChild(cursorFollower);

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Smooth follower animation
function animateFollower() {
    const distX = mouseX - followerX;
    const distY = mouseY - followerY;

    followerX += distX / 10;
    followerY += distY / 10;

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateFollower);
}

animateFollower();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .filter-btn');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });

    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

console.log('North Roads Media - Portfolio loaded successfully!');