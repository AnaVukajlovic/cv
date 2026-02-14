<script>
  // Hamburger menu
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Scroll-to-top button
  const toTopBtn = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>
