

document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el navegador admite JavaScript
    if (typeof window === 'undefined') {
        alert('Su navegador no admite JavaScript. Por favor, habilite JavaScript para una experiencia completa.');
    }
});

//contacto
(function ($) {
    'use strict';
    $(function () {
      var contactBox = $('.contact-box');
      contactBox.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        contactBox.removeClass('animated fadeOutDownBig');
      });
      $('.close').click(function(event) {
        event.preventDefault();
        contactBox.addClass('animated fadeOutDownBig');
      });
      $('#contact-form').validate({
        errorElement: 'div',
        messages: {
          name: 'Introduce tu nombre',
          email: {
            required: 'Por favor introduzca un correo para que le podamos contestar',
            email: 'No parece que sea un email válido'
          },
          message: 'Escribe algo no seas timido'
        },
        submitHandler: function(form) {
        }
      });
    });
  })(jQuery);

  
  document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburgerMenu.addEventListener("click", function () {
        mobileMenu.style.display = (mobileMenu.style.display === "block") ? "none" : "block";
    });
});
