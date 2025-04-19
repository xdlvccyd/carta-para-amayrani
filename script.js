document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");
  const container = document.querySelector(".container");

  setTimeout(() => {
    overlay.style.opacity = 0;
    container.style.opacity = 1;
  }, 6000); // Espera 6 segundos antes de revelar el contenido
});
