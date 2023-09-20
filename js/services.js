// Smooth scrolling for anchor links and Back to Top button
const navLinks = document.querySelectorAll('nav ul li a');
const backToTopButton = document.getElementById('back-to-top');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (!targetId.startsWith('#')) {
      return; // Allow default link behavior
    }
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  // You can customize the form submission handling here (e.g., send the form data to a server, display a success message, etc.)

  // Clear the form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});