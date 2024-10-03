
const sonidos ={
sonido1 : new Audio('sonidos\Darbuka_06_76_SP.mp3'),
sonido2 : new Audio('sonidos\Darbuka_18_76_SP.mp3'),
sonido3 : new Audio('sonidos\Darbuka_42_76_SP.mp3'),
sonido4 : new Audio('sonidos\Darbuka_48_76_SP.mp3'),
sonido5 : new Audio('sonidos\Darbuka_66_76_SP.mp3')
};// iba a hacer un const por cada sonido pero he visto que se puede hacer una lista de const
// Creamos un objeto sonidos que contiene todas las instancias de Audio. Esto nos permite gestionar todos los sonidos en un solo lugar.
function reproducirSonido(event) {
    const sonidoId = event.target.getAttribute('data-sound'); // Obtener el id del sonido
    if (sonidoId && sonidos[sonidoId]) {
        sonidos[sonidoId].currentTime = 0; // Reiniciar el sonido si ya se ha reproducido
        sonidos[sonidoId].play(); // Reproducir sonido
    }
}
const keyToSound = {
    '1': 'sonido1',
    '2': 'sonido2',
    '3': 'sonido3',
    '4': 'sonido4',
    '5': 'sonido5'
};

// Agregar un detector de eventos de teclado
document.addEventListener('keydown', (event) => {
    const sonidoId = keyToSound[event.key]; // Obtener el sonido asociado a la tecla presionada
    reproducirSonido(sonidoId); // Reproducir el sonido
});