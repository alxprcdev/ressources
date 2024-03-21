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
