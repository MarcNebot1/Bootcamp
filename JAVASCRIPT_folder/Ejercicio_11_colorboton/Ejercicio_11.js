
$().ready(() => { //se ejecuta cuando el documento ya esta cargado
$('#bttnrojo').click(function(){ // Esto le dice al navegador que cuando el elemento con el boton sea clicado, debe ejecutar la función que está dentro del click().
$('#texto').toggleClass('rojo'); //toggleclass() añade la clase rojo si no está presente, y la elimina si ya está aplicada.
});
});
function blue(){
    let elemento = document.getElementById("texto");
    let colorActual = window.getComputedStyle(elemento).color; //queria obtener el color de la fuente par poder volver al color original
if (colorActual ==='rgb(0, 0, 255)') { // tenemos que poner el azul en rgb porque sino no entra al if 
    elemento.style.color = ''; // volver al color original
} else {
    elemento.style.color = 'blue';  // Cambiar a azul
}
}