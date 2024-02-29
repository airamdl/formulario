const imageContainer = document.getElementById('image-container');
const prevButton = document.querySelector('button:nth-of-type(1)');
const nextButton = document.querySelector('button:nth-of-type(2)');

const images = ['fondo1.jpg', 'fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg', 'fondo5.jpg'];

let currentIndex = 0;

// Funciones flecha para cambiar la imagen actual
const prevImage = () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
};

const nextImage = () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateGallery();
  }
};

// Función flecha para actualizar la galería con el índice actual
const updateGallery = () => {
  const translateValue = -currentIndex * 100 + '%';
  imageContainer.style.transform = `translateX(${translateValue})`;

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === images.length - 1;
};

updateGallery();


document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerMenu.addEventListener("click", function () {
      mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
  });
});
