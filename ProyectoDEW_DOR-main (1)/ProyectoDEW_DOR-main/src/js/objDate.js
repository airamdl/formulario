objetoFecha = new Date();

alert(objetoFecha);



document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburgerMenu.addEventListener("click", function () {
        mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
    });
});
