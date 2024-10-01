let bombillaoff1: string = "images/boff.jpg"; // bombilla apagada
let bombillaon1: string = "images/bon.jpg"; // bombilla encendida
let interruptoroff1: string = "images/off.jpg"; // interruptor apagado
let interruptoron1: string = "images/on.jpg"; // interruptor encendido

let interruptorON=false;
// Asignar el elemento con id "bombilla y interruptor"
let bombillaoff2 = document.getElementById("bombillaoff") as HTMLImageElement;
let interruptoroff2 = document.getElementById("interruptoroff") as HTMLImageElement;

function apagaroencender(interruptor: HTMLImageElement,bombilla: HTMLImageElement, imagenSrc: string, imagenSrc1: string): void {
    interruptor.src = imagenSrc;
    bombilla.src=imagenSrc1;
}

function boton(){
if(interruptorON){   
apagaroencender(interruptoroff2,bombillaoff2,bombillaon1,interruptoron1);
}else{
apagaroencender(interruptoroff2,bombillaoff2,bombillaoff1,interruptoroff1);
}
interruptorON = !interruptorON; // meter el boolean es lo qe mas me ha costado entender
}
