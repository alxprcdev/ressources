const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.slider-arrow.prev');
const nextBtn = document.querySelector('.slider-arrow.next');
const images = sliderContainer.querySelectorAll('img');

const slideWidth = images[0].offsetWidth; // Largeur d'une image

let currentSlide = 0;

function moveToSlide(slideIndex) {
    if (slideIndex < 0 || slideIndex >= images.length) {
        return; // Empêche de défiler au-delà des limites
    }

    const offset = slideIndex * slideWidth;
    sliderContainer.style.transform = `translateX(-${offset}px)`;
    currentSlide = slideIndex;
}

prevBtn.addEventListener('click', () => {
    moveToSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    moveToSlide(currentSlide + 1);
});

moveToSlide(0);
