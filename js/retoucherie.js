// Animer la page index.html

// Fonction pour faire apparaitre la nav bar
function animerNavbar() {
  const navBar = document.querySelector('header nav');
  navBar.classList.add('animated', 'fadeInDown');
  setTimeout(() => {
    navBar.classList.remove('animated', 'fadeInDown');
  }, 1000);
}

// Fonction pour faire apparaitre la section de présentation
function animerPresentation() {
  const presentation = document.querySelector('.presentation');
  presentation.classList.add('animated', 'fadeInUp');
  setTimeout(() => {
    presentation.classList.remove('animated', 'fadeInUp');
  }, 1000);
}

// Fonction pour faire apparaitre les sections suivantes
function animerSectionsSuivantes() {
  const sections = document.querySelectorAll('.services, .tarifs, .contact');
  sections.forEach((section) => {
    section.classList.add('animated', 'fadeInUp');
    setTimeout(() => {
      section.classList.remove('animated', 'fadeInUp');
    }, 1000);
  });
}

// Fonction pour faire apparaitre le footer
function animerFooter() {
  const footer = document.querySelector('footer');
  footer.classList.add('animated', 'fadeInUp');
  setTimeout(() => {
    footer.classList.remove('animated', 'fadeInUp');
  }, 1000);
}

// Appeler les fonctions d'animation
animerNavbar();
animerPresentation();
animerSectionsSuivantes();
animerFooter();

// Animer d'autres éléments de la page (optionnel)
// ...

const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.slider-arrow.prev');
const nextBtn = document.querySelector('.slider-arrow.next');
const images = sliderContainer.querySelectorAll('img');

const slideWidth = document.querySelector('.slider-container img').offsetWidth;

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
