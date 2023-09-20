const menuLinks = document.querySelectorAll('.desktop-menu a[href^="#"]');

function smoothScroll(e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  const topOffset = target.offsetTop;

  window.scrollTo({
    top: topOffset,
    behavior: 'smooth'
  });
}

menuLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});