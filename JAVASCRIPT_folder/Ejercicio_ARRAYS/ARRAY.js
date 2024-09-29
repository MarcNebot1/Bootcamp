function sumar(inputid){
    let numero = parseInt(document.getElementById(inputid).value);// esto nos permite coger el numero que hay en el input 
    numero=numero+1;
    if(numero<0){
        numero=0;
    }
    document.getElementById(inputid).value = numero; //y despues de sumarle uno devolverlo al input donde lo queremos
}
function restar(inputid){
    let numero = parseInt(document.getElementById(inputid).value);// esto nos permite coger el numero que hay en el input 
    numero=numero-1;
    if(numero<0){
        numero=0;
    }
    document.getElementById(inputid).value = numero; //y despues de sumarle uno devolverlo al input donde lo queremos
}

const elementos = [];// vamos a crear un array con el cual trabajaremos los botones
let elemento='🍕'; //creamos un elemento del que llenaremos el array
//declaramos el array fuera de las funciones para que sea global y se mantenga en memoria con las diferentes funciones

/*Método sumar(): Modifica algo que ya está en el DOM (el valor de un input), por lo que no necesitas crear 
ni insertar elementos nuevos en el DOM.

Método push(): Trabaja con un array en memoria, y si quieres que los cambios sean visibles para el usuario 
(como mostrar el array actualizado en la pantalla), necesitas modificar el DOM para reflejar esos cambios. 
Sin el DOM, solo verías los cambios en la consola o internamente en el código, pero no en la página web.*/

function actualizarListaEnDOM() { //esta funcion se utiliza con el DOM porque necesitamos actualizar la array
                                  // cada vez que hagamos alguna funcion

    //Esta línea utiliza el DOM para obtener el elemento HTML con el id listaElementos.
    const listaElementos = document.getElementById('listaElementos');
    //Esta línea limpia pero no afecta al array, sino al elemento HTML(visual) que contiene la lista de los elementos del array.
    listaElementos.innerHTML = '';
    //tods los elementos son mostrados con el each
    elementos.forEach(function(elemento) { 
        // es una función que crea un nuevo elemento HTML con el nombre de la etiqueta que proporcionas
        let li = document.createElement('li');
        //Esta línea asigna el contenido de texto del elemento <li>
        li.textContent = elemento;
        //appendChild() es un método que inserta el nodo (<li>) como el último hijo del nodo padre (listaElementos).
        //esta línea coloca el nuevo elemento de lista (<li>) en el DOM, dentro del contenedor listaElementos. 
        //Esto es lo que realmente hace que los elementos sean visibles en la página. 
        listaElementos.appendChild(li);
    });
}

function push(inputid){
    let numero = parseInt(document.getElementById(inputid).value);
    for (let i = 0; i < numero; i++) { // añadimos el elemento tantas veces 
        elementos.push(elemento);
    } 
    actualizarListaEnDOM();
}
function unshift(inputid){
    let numero = parseInt(document.getElementById(inputid).value);
    for (let i = 0; i < numero; i++) { // añadimos el elemento tantas veces pero al principio del array
        elementos.unshift(elemento);
}
    actualizarListaEnDOM();
}
function insertat(inputid){ //tenemos que pasar por parametro el index porque sino    
                            //no sabemos en que posicion queremos los nuevos elementos dentro del array
    let numero = parseInt(document.getElementById(inputid).value);
    let index = parseInt(prompt("Introduce la posición:"));
    if (isNaN(index) || index < 0 || index > elementos.length) { //si es indefinido, o menor que 0, o no es un indice dentro del array
        alert("Índice inválido. Debe estar entre 0 y " + elementos.length);
        return;
    }
    for (let i = 0; i < numero; i++) { // añadimos el elemento tantas veces pero ahora en el index del array
        elementos.splice(index,0,elemento);
}
    actualizarListaEnDOM();
}
function pop(inputid){
    let numero = parseInt(document.getElementById(inputid).value);
    for (let i = 0; i < numero; i++) { // eliminamos el ultimo elemento del array
        elementos.pop(elemento);
}
    actualizarListaEnDOM();
}
function shift(inputid){
    let numero = parseInt(document.getElementById(inputid).value);
    for (let i = 0; i < numero; i++) { // eliminamos el primer elemento pero al principio del array
        elementos.shift(elemento);
}
    actualizarListaEnDOM();
}
function removeat(inputid){ //tenemos que pasar por parametro el index porque sino    
    //no sabemos en que posicion queremos los nuevos elementos dentro del array
let numero = parseInt(document.getElementById(inputid).value);
let index = parseInt(prompt("Introduce la posición:"));
if (isNaN(index) || index < 0 || index > elementos.length) { //si es indefinido, o menor que 0, o no es un indice dentro del array
alert("Índice inválido. Debe estar entre 0 y " + elementos.length);
return;
}
for (let i = 0; i < numero; i++) { // eliminamos el elemento tantas veces como pasamos por parametro y en el index del prompt
    elementos.splice(index, 1);
}
actualizarListaEnDOM();
}

