let numero=1;
let i=0;
do{
    if( i===0 ){
        i++;
        numero--;
        console.log(numero);
    }else{
        numero++;
        console.log(numero);
    }
}
while(numero<5);
//cuando es un do while primero se ejecuta una vez y a partir de la segunda tiene la condicion del while.
// esto quedaria de la siguiente manera: entraria la primera vez numero pasaria de 1 a 0 porque i=0;
//en loa segunda entraria en elwhile porque numero<5 i en el else porque i=1 por lo tanto numero++ 0 a 1 y asi hasta 5;