document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('promo-video');
    const videoContainer = document.getElementById('image-grid');

    // Función para manejar la intersección
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play().then(() => {
                    video.currentTime = 0; // Reinicia el video
                }).catch((error) => {
                    console.error('Error al intentar reproducir el video:', error);
                });
            } else {
                video.pause();
            }
        });
    }

    // Configuración del observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5 // Se ejecutará cuando al menos el 50% del video esté en vista
    });

    // Observa el contenedor del video
    observer.observe(videoContainer);
});



document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.contenedor_nav2 ul.item li');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    document.querySelectorAll('.animate').forEach(section => {
        observer.observe(section);
    });
});