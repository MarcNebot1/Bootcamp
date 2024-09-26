// cambiar a por o
function convers(string){
    let nuevapalabra= "";
    for(let i=0; i<string.length; i++){
    
        if(string.charAt(i)==='a'){
        nuevapalabra +='o';
        }else{ 
        nuevapalabra +=string.charAt(i);

    }
    }
    return(nuevapalabra);
}
console.log(convers('abanico'));

//palabra empieza por aca
function empiezapor(string){
    posicion=0;
        if(string.charAt(posicion)==='a'){
            if(string.charAt(++posicion)==='c'){
                if(string.charAt(++posicion)==='a'){
                    return("Si que empieza por aca");  
                }
            }
        }
        return("No empieza por aca"); 
}
console.log(empiezapor('academia'));
console.log(empiezapor('escuela'));

//otra manera de hacerlo
string1='academia';
string2='escuela';
console.log(string1.startsWith('aca'));
console.log(string2.startsWith('aca'));

console.log('hola '.repeat(3));