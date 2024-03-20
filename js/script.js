// Select all sections
const sections = document.querySelectorAll('section');

// Function to animate opacity
function animateOpacity(section) {
  section.style.opacity = 0; // Start hidden
  section.style.transition = 'opacity 1s ease-in-out'; // Set animation properties

  setTimeout(() => {
    section.style.opacity = 1; // Animate to full opacity after a delay
  }, 100); // Set delay in milliseconds (adjust as desired)
}

// Loop through sections and animate
sections.forEach(animateOpacity);
