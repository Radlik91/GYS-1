window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  // Esperamos 3 segundos para mantener el logo visible con estilo
  setTimeout(() => {
    preloader.classList.add('fade-out');

    // Luego lo ocultamos completamente
    setTimeout(() => {
      preloader.style.display = 'none';
      mainContent.classList.remove('hidden');
    }, 1500); // tiempo del fade-out
  }, 3000); // tiempo visible antes de desaparecer
});

