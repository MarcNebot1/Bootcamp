/*class Pregunta {
    pregunta: string;
    opciones: string[];
    respuestacorrecta: number;
    constructor(pregunta: string, opciones: string[], respuestacorrecta: number) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuestacorrecta = respuestacorrecta;
    }

    mostrar(): void {

        const preguntaContainer = document.getElementById('pregunta-container') as HTMLElement;
        preguntaContainer.innerHTML = this.pregunta; // Limpiar opciones previas
    }
    mostrarOpciones(): void {

        const opcionesContainer = document.getElementById('opciones-container') as HTMLElement;
        opcionesContainer.innerHTML = ''; // Limpiar opciones previas

        this.opciones.forEach((opcion, index) => {
            const button = document.createElement('button');
            button.innerText = opcion;
            button.onclick = () => this.verificarRespuesta(index);
            opcionesContainer.appendChild(button); // Agrega cada opción como botón
        });
    }
    verificarRespuesta(respuesta: number): void {
        const opcionesContainer = document.getElementById('opciones-container') as HTMLElement;
    
        // Deshabilitar todos los botones después de hacer clic en uno
        const botones = opcionesContainer.querySelectorAll('button');
        botones.forEach(boton => {
            boton.disabled = true; // Deshabilita los botones de opciones
        });
    
        // Verificar la respuesta seleccionada y cambiar el color del botón seleccionado
        const botonSeleccionado = botones[respuesta];
        if (respuesta === this.respuestacorrecta) {
            botonSeleccionado.style.backgroundColor = 'green'; // Respuesta correcta
            cuestionario.sumarPuntaje();
        } else {
            botonSeleccionado.style.backgroundColor = 'red'; // Respuesta incorrecta
            // Mostrar la opción correcta en verde
            botones[this.respuestacorrecta].style.backgroundColor = 'green';
        }
        
        // Habilitar el botón "Siguiente"
        const botonSiguiente = document.getElementById('siguiente-btn') as HTMLButtonElement;
        botonSiguiente.disabled = false; // Habilita el botón "Siguiente" después de seleccionar una opción
    
    // Evento de click para el botón "Siguiente"
    botonSiguiente.onclick = () => {
        // Avanzar a la siguiente pregunta cuando se presiona "Siguiente"
        cuestionario.siguientePregunta();
    
        // Deshabilitar nuevamente el botón "Siguiente" para la próxima pregunta
        botonSiguiente.disabled = true;
    };
}
}
// Clase Cuestionario
class Cuestionario {
    preguntas: Pregunta[];
    puntuaje: number;
    preguntaActual: number;

    constructor() {
        this.preguntas = [];
        this.puntuaje = 0;
        this.preguntaActual = 0;
    }

    agregarPregunta(pregunta: Pregunta): void {
        this.preguntas.push(pregunta);
    }

    mostrarinicio(): void{
        const botonSiguiente = document.getElementById('siguiente-btn') as HTMLButtonElement;
        botonSiguiente.onclick = () => { // Avanzar a la siguiente pregunta cuando se presiona "Siguiente"
        this.iniciar();
        }; 
    }
    iniciar(): void {

        this.preguntaActual = 0;
        this.mostrarPregunta(); // Muestra la primera pregunta
    }
    

    mostrarPregunta(): void {
        const pregunta = this.preguntas[this.preguntaActual];
        pregunta.mostrar();
        pregunta.mostrarOpciones();
    }

    sumarPuntaje(): void {
        this.puntuaje++;
    }

    siguientePregunta(): void {
        this.preguntaActual++;
        if (this.preguntaActual < this.preguntas.length) {
            this.mostrarPregunta();
        } else {
            this.mostrarResultado();
        }
    }

    mostrarResultado(): void {
        const resultadoContainer = document.getElementById('resultado-container') as HTMLElement;
        resultadoContainer.innerHTML = `Tu puntaje final es: ${this.puntuaje} de ${this.preguntas.length}`;
        document.getElementById('pregunta-container')!.style.display = 'none'; // Oculta la pregunta
        document.getElementById('opciones-container')!.style.display = 'none'; // Oculta las opciones
        document.getElementById('siguiente-btn')!.style.display = 'none'; // Oculta el botón
    }
}

// Crear el cuestionario
const cuestionario = new Cuestionario();

// Agregar preguntas al cuestionario
cuestionario.agregarPregunta(new Pregunta(
    "¿Como asignarias una tecla a un elemento?",
    [
        "Usando addEventListener('keyup') y verificando el código de la tecla.",
        "Usando setTimeout() para detectar la tecla.",
        "Usando una propiedad onClick directamente en el HTML.",
        "Usando innerHTML para verificar el valor de la tecla presionada."
    ],
    0
));

cuestionario.agregarPregunta(new Pregunta(
    "¿Para qué se utiliza el método toggle() en JavaScript?",
    [
        "Para cambiar el valor de una variable booleana a true.",
        "Para alternar entre dos clases CSS en un elemento DOM.",
        "Para agregar una nueva clase a un elemento, sin eliminar las clases existentes.",
        "Para eliminar un elemento del DOM."
    ],
    1
));

cuestionario.agregarPregunta(new Pregunta(
    "¿Qué significa la propiedad z-index en CSS?",
    [
        "Controla la posición de un elemento en el flujo del documento.",
        "Determina la opacidad de un elemento.",
        "Controla la superposición de elementos en el eje z.",
        "Define el tamaño del borde de un elemento."
    ],
    2
));

cuestionario.agregarPregunta(new Pregunta(
    "¿Cómo manejarías errores de compilación relacionados con los tipos en TypeScript?",
    [
        "Ignorar los errores.",
        "Cambiar el tipo a any.",
        "Revisar el código para coincidir con los tipos esperados.",
        "Usar console.log() para ver que sale y ir haciendo pruebas."
    ],
    2
));
cuestionario.agregarPregunta(new Pregunta(
    "¿Cómo se pueden definir tipos genéricos en TypeScript?",
    [
        "Usando la palabra clave 'generic'.",
        "Usando la sintaxis '<T>'.",
        "Usando la sintaxis 'type T = <tipo>'.",
        "No es posible definir tipos genéricos en TypeScript."
    ],
    1
));
cuestionario.agregarPregunta(new Pregunta(
    "¿Qué significa el modificador 'readonly' en TypeScript?",
    [
        "El valor puede ser cambiado solo una vez.",
        "La propiedad no puede ser cambiada después de su inicializacion",
        "El valor es solo de lectura y no se puede inicializar.",
        "La propiedad puede ser cambiada en una subclase."
    ],
    1 // Respuesta correcta: 1
));

cuestionario.agregarPregunta(new Pregunta(
    "¿Qué hace el operador 'as' en TypeScript?",
    [
        "Convierte un valor a un tipo específico.",
        "Verifica si un valor es de un tipo específico.",
        "Clona un objeto.",
        "Crea un nuevo tipo."
    ],
    0
));
cuestionario.agregarPregunta(new Pregunta(
    "¿Qué es un type assertion en TypeScript?",
    [
        "Es una forma de especificar un tipo para una variable en el momento de la declaración.",
        "Es un tipo que se utiliza para verificar errores en tiempo de compilación.",
        "Es un mecanismo para convertir un tipo en otro sin realizar una verificación de tipo.",
        "Es una forma de extender las interfaces en TypeScript."
    ],
    2
));
cuestionario.agregarPregunta(new Pregunta(
    "¿Qué sucede si intentas acceder a una propiedad que no existe en un objeto en TypeScript?",
    [
        "Se produce un error en tiempo de ejecución.",
        "TypeScript generará un error en tiempo de compilación.",
        "Se lanzará una excepción.",
        "Se devolverá undefined."
    ],
    3
));
cuestionario.agregarPregunta(new Pregunta(
    "¿Cómo se puede evitar que un elemento afecte el diseño de otros elementos?",
    [
        "Usando display: none;",
        "Usando visibility: hidden;",
        "Usando overflow: hidden;",
        "Usando position: absolute;"
    ],
    3
));

cuestionario.agregarPregunta(new Pregunta(
    "¿Qué propiedad se utiliza para aplicar un efecto de transición en CSS?",
    [
        "transition-effect: fade;",
        "transition-duration: 2s;",
        "transition: property duration timing-function;",
        "animation: name duration;"
    ],
    2
));
cuestionario.agregarPregunta(new Pregunta(
    "¿Qué es el modelo de caja (box model) en CSS?",
    [
        "Un modelo que define el tamaño y el espacio de un elemento.",
        "Un modelo que solo considera el padding de un elemento.",
        "Un modelo que aplica estilos solo a elementos de bloque.",
        "Un modelo que se utiliza exclusivamente para flexbox."
    ],
    0
));
cuestionario.agregarPregunta(new Pregunta(
    "¿Cómo se puede centrar verticalmente un elemento utilizando Flexbox?",
    [
        "align-items: center;",
        "justify-content: center;",
        "text-align: center;",
        "margin: auto;"
    ],
    1
));
cuestionario.agregarPregunta(new Pregunta(
    "¿Cuál es la función de la propiedad position: sticky; en CSS?",
    [
        "Permite que un elemento permanezca fijo en la pantalla al desplazarse.",
        "Permite que un elemento se mantenga en su posición original en la página.",
        "Combina el comportamiento de relative y fixed al mismo tiempo.",
        "Fija un elemento en una posición específica en la página."
    ],
    2
));
cuestionario.agregarPregunta(new Pregunta(
    "¿Cuál es la diferencia entre margin y padding en CSS?",
    [
        "margin es el espacio interno y padding el espacio externo",
        "margin es el espacio externo y padding el espacio interno",
        " No hay diferencia; ambos se utilizan para espacios",
        "margin se aplica a elementos de bloque, y padding solo a elementos en línea."
    ],
    1
));
// Iniciar el cuestionario
    cuestionario.mostrarinicio();

*/