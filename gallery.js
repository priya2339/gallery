document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const description = document.getElementById('description');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex = 0;

    
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentIndex = index;
            openLightbox(thumbnail.src, thumbnail.dataset.description);
        });
    });

    function openLightbox(src, desc) {
        lightboxImage.src = src;
        description.textContent = desc;
        lightbox.style.display = 'flex';
    }

    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });


    next.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        openLightbox(thumbnails[currentIndex].src, thumbnails[currentIndex].dataset.description);
    });

    prev.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        openLightbox(thumbnails[currentIndex].src, thumbnails[currentIndex].dataset.description);
    });


    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
