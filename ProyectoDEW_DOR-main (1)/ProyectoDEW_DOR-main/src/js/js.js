document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el navegador admite JavaScript
    if (typeof window === 'undefined') {
        alert('Su navegador no admite JavaScript. Por favor, habilite JavaScript para una experiencia completa.');
    }
});







//Scroll imagenes zelda
window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

 
    document.addEventListener("DOMContentLoaded", function () {
        const hamburgerMenu = document.querySelector(".hamburger-menu");
        const mobileMenu = document.querySelector(".mobile-menu");

        hamburgerMenu.addEventListener("click", function () {
            mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
        });
    });


  
  let ejecucion= new Date();
  console.log(ejecucion);

  //Modificacion de contenido DOM

  let heading =document.querySelector('h1');
  heading.textContent = 'Nuevo head';