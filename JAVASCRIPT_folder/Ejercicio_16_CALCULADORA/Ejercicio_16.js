/*como hacer la logica de una calculadora:
empezamos a 0 o sin nada

entonces clickamos un boton este puede ser un numero o un signo
si es un numero bien si es un signo error

en el siguiente click podemos poner numero o signo
si es numero bien si es signo bien

si en el siguiente click ponemos un numero bien pero si ponemos un signo mal solo si antes habia un numero es bien
*/
var lista = [];
function actualizarInput() {
    var inputElement = document.getElementById('numeroinput');
    if (lista.length > 0) {
        inputElement.value = lista.join('');
    }
    else {
        inputElement.value = '0';
    }
}
// Función para manejar la entrada de números
function numero(num) {
    // Verifica si el último elemento es un operador
    if (typeof lista[lista.length - 1] === 'string') {
        // Si es un operador, resetea la lista
        lista.push(num); // Agrega el nuevo número
    }
    else {
        // Si el último elemento es un número, concatenar
        var lastElement = lista.pop();
        if (typeof lastElement === 'number') {
            lista.push(parseInt(lastElement.toString() + num.toString(), 10)); // Concatenar números
        }
        else {
            lista.push(lastElement, num); // Agregar número a la lista
        }
    }
    actualizarInput();
}
// Función para manejar la entrada de signos
function signo(signo) {
    var inputElement = document.getElementById('numeroinput');
    if (typeof lista[lista.length - 1] === 'number') {
        lista.push(signo);
        actualizarInput();
    }
}
function del() {
    if (lista.length > 0) {
        lista.pop();
        actualizarInput();
    }
}
function igual() {
    var resultado = 0; // Inicializa el resultado
    var operador = '+'; // Inicializa el operador
    for (var i = 0; i < lista.length; i++) {
        if (typeof lista[i] === 'number') { // Verificamos que sea un número
            if (operador === '+') {
                resultado += lista[i]; // Sumar
            }
            else if (operador === '-') {
                resultado -= lista[i]; // Restar
            }
            else if (operador === 'x') {
                resultado *= lista[i]; // Multiplicar
            }
            else if (operador === '/') {
                if (lista[i] === 0) {
                    console.error("Error: División por cero.");
                    return; // Salimos de la función en caso de error
                }
                resultado /= lista[i]; // Dividir
            }
        }
        else if (typeof lista[i] === 'string') {
            operador = lista[i]; // Actualizamos el operador
        }
    }
    // Guardamos solo el resultado final
    lista = [resultado]; // Aseguramos que resultado es un número
    actualizarInput(); // Actualiza el input con el nuevo resultado
}
function reset() {
    lista = []; // Limpiar la lista
    actualizarInput(); // Restablecer el input
}
