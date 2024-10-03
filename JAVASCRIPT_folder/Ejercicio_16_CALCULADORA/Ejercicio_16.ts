/*como hacer la logica de una calculadora:
empezamos a 0 o sin nada

entonces clickamos un boton este puede ser un numero o un signo
si es un numero bien si es un signo error

en el siguiente click podemos poner numero o signo 
si es numero bien si es signo bien

si en el siguiente click ponemos un numero bien pero si ponemos un signo mal solo si antes habia un numero es bien
*/
let lista: (string | number)[] = [];//lista que puede ser string o numero

function actualizarInput(): void {
    const inputElement = document.getElementById('numeroinput') as HTMLInputElement; //estamos seleccionando un elemento del DOM con el ID numeroinput
    if (lista.length > 0) { //lista es mayor que 0. Si es así, significa que hay elementos en la lista.
        inputElement.value = lista.join(''); //unimos todos los elementos de la lista en una cadena (sin espacios entre ellos) y actualizamos el valor del campo de entrada
    } else {
        inputElement.value = '0'; //Establecemos el valor del campo de entrada a '0' si no hay elementos en la lista.
    }
}

// Función para manejar la entrada de números
function numero(num: number): void {
    // Verifica si el último elemento es un operador porque daria fallo de sintaxis por ejemplo 5 + =
    if (typeof lista[lista.length - 1] === 'string') {  
        lista.push(num); // Agrega el nuevo número
    } else {
        // Si el último elemento es un número, concatenar
        const lastElement = lista.pop();//Este método elimina el último elemento del arreglo y lo devuelve. Guardamos ese elemento en lastElement.
        if (typeof lastElement === 'number') { //Comprobamos si lastElement es un número.
            lista.push(parseInt(lastElement.toString() + num.toString(), 10)); 
            //Si el último elemento es un número, concatenamos el último número y el nuevo número en una sola cadena
            // y lo convertimos nuevamente a un número usando parseInt. Luego, agregamos el resultado a la lista.
        } else {
            lista.push(lastElement as string, num); // Agregar número a la lista
        }
    }
    actualizarInput();
}
// Función para manejar la entrada de signos
function signo(signo: string): void {
    const inputElement = document.getElementById('numeroinput') as HTMLInputElement;
    if (typeof lista[lista.length - 1] === 'number') {
        lista.push(signo);
        actualizarInput();
    }
}

function del(): void {
    if (lista.length > 0) {
        lista.pop();
        actualizarInput();
    }
}

function igual(): void {
    let resultado: number = 0; // Inicializa el resultado
    let operador: string = '+'; // Inicializa el operador

    for (let i = 0; i < lista.length; i++) {
        if (typeof lista[i] === 'number') { // Verificamos que sea un número
            if (operador === '+') {
                resultado += lista[i] as number; // Sumar
            } else if (operador === '-') {
                resultado -= lista[i] as number; // Restar
            } else if (operador === 'x') {
                resultado *= lista[i] as number; // Multiplicar
            } else if (operador === '/') {
                if (lista[i] === 0) {
                    console.error("Error: División por cero.");
                    return; // Salimos de la función en caso de error
                }
                resultado /= lista[i] as number; // Dividir
            }
        } else if (typeof lista[i] === 'string') {
            operador = lista[i] as string; // Actualizamos el operador
        }
    }

    // Guardamos solo el resultado final
    lista = [resultado]; // Aseguramos que resultado es un número
    actualizarInput(); // Actualiza el input con el nuevo resultado
}

function reset(): void {
    lista = []; // Limpiar la lista
    actualizarInput(); // Restablecer el input
}
