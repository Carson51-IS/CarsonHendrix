document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = document.querySelectorAll('.section');

  function setActiveNav(sectionId) {
    navLinks.forEach(function (link) {
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function updateActiveOnScroll() {
    const scrollY = window.scrollY;
    let activeSection = 'home';

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop) {
        activeSection = sectionId === 'about' ? 'home' : sectionId;
      }
    });

    setActiveNav(activeSection);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = link.getAttribute('data-section');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveNav(targetId);
      }
    });
  });

  window.addEventListener('scroll', updateActiveOnScroll);
  window.addEventListener('load', updateActiveOnScroll);
});
