document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        const offsetTop = targetSection.getBoundingClientRect().top;
        window.scrollBy({
          top: offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });