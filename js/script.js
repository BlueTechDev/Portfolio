const menuToggle = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".menu");

        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

         // Smooth scroll effect for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop,
            });
        });
    });

    // Parallax effect for the hero section
    window.addEventListener('scroll', function () {
        const hero = document.getElementById('hero');
        const scrollValue = window.scrollY;

        hero.style.backgroundPositionY = -scrollValue * 0.5 + 'px';
    });

    // Typing animation for "Welcome to My Portfolio"
    const text = "Welcome to My Portfolio";
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            document.getElementById('hero').innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            const newText = text.substring(0, charIndex - 1);
            document.getElementById('hero').innerHTML = newText;
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            charIndex = 0;
            type();
        }
    }

    type();