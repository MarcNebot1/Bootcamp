//sumar 3 cifras
function sumar(a,b,c){
    total=a+b+c;
    return(total);
}
console.log(sumar(1,6,3));
console.log(sumar(2,4,9));


function sumarnombres(a,b,c){
    console.log(""+a+" "+b+" "+c+".");
}
//pon el nombre completo
sumarnombres('Marc','Nebot','Muro');

function numayor(a,b){
    if(a==b){
        return("son iguales");
    }else if(a>b){
        return(a);
    }else {
        return(b);
    } }
console.log(numayor(6,5));