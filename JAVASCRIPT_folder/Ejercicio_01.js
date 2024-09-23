let nombre= 'Jaime';
let numero= 4;
let numero1= 4;
let boolean=false;
let nulo= null;
let undefinido;
const puntero= Symbol("something");
let tabla=[0,1,2];

function suma(){
    let sumar=0; //esto seria una variable con scop local porque solo pertenece a la funcion
    sumar=numero1+numero;
    return(sumar);
}
console.log(numero);// esto seria a nivel global
console.log(typeof numero);
console.log(suma());

