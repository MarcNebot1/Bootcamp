// lo primero que he hecho es saber si puedo usar una imagen como una variable y luego ver la nomenclatura en typescript
//despues he querido obtener la imagen desde su ruta en vez de poniendola en html.
var backImageSrc = "images/card-back.png"; // Parte trasera de la carta
var frontImageSrc = "images/card-front.png"; // Parte frontal de la carta
// Asignar el elemento con id "carta1"
var carta1 = document.getElementById("carta1");
var carta2 = document.getElementById("carta2");
// Verificar si el elemento existe y asignar los eventos para pasar el cursor
if (carta1) {
    carta1.onmouseover = function () { return girarCarta(carta1, frontImageSrc); };
    carta1.onmouseout = function () { return girarCarta(carta1, backImageSrc); };
}
if (carta2) {
    carta2.onmouseover = function () { return girarCarta(carta2, frontImageSrc); };
    carta2.onmouseout = function () { return girarCarta(carta2, backImageSrc); };
}
// Función para cambiar la imagen cuando se pasa el cursor
function girarCarta(carta, imagenSrc) {
    carta.src = imagenSrc;
}
