// lo primero que he hecho es saber si puedo usar una imagen como una variable y luego ver la nomenclatura en typescript
//despues he querido obtener la imagen desde su ruta en vez de poniendola en html.
let backImageSrc: string = "images/card-back.png"; // Parte trasera de la carta
let frontImageSrc: string = "images/card-front.png"; // Parte frontal de la carta

// Asignar el elemento con id "carta1"
let carta1 = document.getElementById("carta1") as HTMLImageElement;
let carta2 = document.getElementById("carta2") as HTMLImageElement;

// Verificar si el elemento existe y asignar los eventos para pasar el cursor
if (carta1) {
    carta1.onmouseover = () => girarCarta(carta1, frontImageSrc);
    carta1.onmouseout = () => girarCarta(carta1, backImageSrc);
}

if (carta2) {
    carta2.onmouseover = () => girarCarta(carta2, frontImageSrc);
    carta2.onmouseout = () => girarCarta(carta2, backImageSrc);
}

// Función para cambiar la imagen cuando se pasa el cursor
function girarCarta(carta: HTMLImageElement, imagenSrc: string): void {
    carta.src = imagenSrc;
}