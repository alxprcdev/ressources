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

// Remplacer "YOUR_API_KEY" par votre clé API Google Maps
const apiKey = "AIzaSyBiyf0K2SL3k9iXh7cKB4mB7eo3g4jd39k";

// Fonction pour initialiser la carte Google Maps
function initMap() {
  // Créer une instance de la carte Google Maps
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.91114150015425, lng: 2.523721396133323},
    zoom: 14,
  });

  // Ajouter un marqueur à la carte
  const marker = new google.maps.Marker({
    position: {lat: 48.91114150015425, lng: 2.523721396133323},
    map: map,
  });

  // Afficher l'infobulle du marqueur
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

// Charger la bibliothèque Google Maps
const googleMapsScript = document.createElement('script');
googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
document.body.appendChild(googleMapsScript);
