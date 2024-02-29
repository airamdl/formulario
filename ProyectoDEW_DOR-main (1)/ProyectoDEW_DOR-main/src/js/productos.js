
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburgerMenu.addEventListener("click", function () {
        mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
    });
});

function animateText() {
    const bannerText = document.getElementById('bannerText');
    bannerText.classList.add('animate');
  }

  window.onload = function() {
    animateText();
  };
