// JavaScript code for Chef Lorenzo website

// Smooth scrolling to section when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  
  // Toggle mobile menu
  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    menuIcon.addEventListener('click', function() {
      mobileMenu.classList.toggle('show');
    });
  });
  
  // Scroll to top button
  document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTopButton');
  
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });