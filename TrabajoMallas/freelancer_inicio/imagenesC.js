const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-item');

let index = 0;

nextBtn.addEventListener('click', () => {
    // Avanzar a la siguiente imagen
    index = (index + 1) % images.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    // Retroceder a la imagen anterior
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

function updateCarousel() {
    // Cambiar la posición del contenedor para mostrar la imagen correspondiente
    const offset = -index * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}