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

//Type writer effect
const aboutHeader = document.querySelector('.about-text h3');
const aboutText = document.querySelector('.about-text p');

function typeWriterEffect(element, text) {
  let index = 0;
  const speed = 50; // Adjust the typing speed here (in milliseconds)

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

window.addEventListener('load', () => {
  typeWriterEffect(aboutHeader, 'Welcome!');
  typeWriterEffect(aboutText, "I am a passionate web developer with expertise in HTML, CSS, and JavaScript. I love creating beautiful and functional websites that leave a lasting impression. Let's work together to bring your ideas to life!");
});

const projectDescriptions = document.querySelectorAll('.project-description');

function toggleVisibility(index) {
  projectDescriptions.forEach((description, i) => {
    if (i === index) {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  });

  projectDescriptions.forEach((description) => {
    description.style.display = 'none';
  });
}

projectDescriptions.forEach((description, index) => {
  description.addEventListener('click', () => {
    projectDescriptions.forEach((description) => {
      description.style.display = 'none';
    });
  });
});