var bombillaoff1 = "images/boff.jpg"; // bombilla apagada
var bombillaon1 = "images/bon.jpg"; // bombilla encendida
var interruptoroff1 = "images/off.jpg"; // interruptor apagado
var interruptoron1 = "images/on.jpg"; // interruptor encendido
var interruptorON = false;
// Asignar el elemento con id "bombilla y interruptor"
var bombillaoff2 = document.getElementById("bombillaoff");
var interruptoroff2 = document.getElementById("interruptoroff");
function apagaroencender(interruptor, bombilla, imagenSrc, imagenSrc1) {
    interruptor.src = imagenSrc;
    bombilla.src = imagenSrc1;
}
function boton() {
    if (interruptorON) {
        apagaroencender(interruptoroff2, bombillaoff2, bombillaon1, interruptoron1);
    }
    else {
        apagaroencender(interruptoroff2, bombillaoff2, bombillaoff1, interruptoroff1);
    }
    interruptorON = !interruptorON;
}
