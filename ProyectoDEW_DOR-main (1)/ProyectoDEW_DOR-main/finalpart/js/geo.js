document.addEventListener("DOMContentLoaded", function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;

            document.getElementById("ubicacion").innerText = "Latitud: " + latitud + ", Longitud: " + longitud;
        });
    } else {
        document.getElementById("ubicacion").innerText = "La geolocalización no está disponible en este navegador.";
    }
});
