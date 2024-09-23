//funcion devolver los nombres de la tabla
function nombres(){
    let table= new Array();
    tabla=['marc','david','bernat','gerard'];
    return(tabla);
}
console.log(nombres());

//Crea una funcion con nombre sin return
let booleanValue = false;
function nombre(boolean) {
    console.log(boolean); 
}
nombre(booleanValue);

//Crea una funcion con parametros infinitos
function infinitos(...numeros) { //parametros infinitos con el ...
    numeros.forEach((numeros, index) => { // ponemos los numeros y el index por cada uno, el index empieza en 0.
        console.log(`Valor: ${numeros}`); //nos muestra por consola
    });
}
infinitos(1, 2, 3, 4, 5);