


const table=['✂️','🪨','📰'];
let ganarplayer=0;
let ganarcomputadora=0;

document.write("Que comience el juego.<br>"); 

function randomcomputadora() {
    const randomIndex = Math.floor(Math.random() * table.length);  
    document.write("computadora:" + table[randomIndex] + "<br>"); // nos devuelve un item aleatorio de los posibles.
    return(table[randomIndex]);
}

function promptplayer(){
    let item = (prompt("Introduce 🪨, 📰 o ✂️"));
    if ('🪨' || '📰' || '✂️') { //solo entra si es uno de los 3 emotes 
    document.write("player:" + item + "<br>"); //escribimos directamente en html  
    return(item);  
    }else{
    alert("Debe ser uno de los tres emotes");
    return null;
    }
}

function resolve(randomcomputadora,promptplayer){
    if(randomcomputadora===promptplayer){
        document.write("PLAYER=" + ganarplayer + "/COMPUTADORA=" + ganarcomputadora + "<br><br>"); 
    }else if((randomcomputadora==='✂️' && promptplayer==='📰') 
        || (randomcomputadora==='🪨' && promptplayer==='✂️') 
        || (randomcomputadora==='📰' && promptplayer==='🪨')){
            ganarcomputadora=ganarcomputadora+1;
            document.write("PLAYER=" + ganarplayer + " COMPUTADORA=" + ganarcomputadora + "<br><br>"); 
        }else if((promptplayer==='✂️' && randomcomputadora==='📰') 
        || (promptplayer==='🪨' && randomcomputadora==='✂️') 
        || (promptplayer==='📰' && randomcomputadorar==='🪨')){
            ganarplayer=ganarplayer+1; 
            document.write("PLAYER=" + ganarplayer + " COMPUTADORA=" + ganarcomputadora + "<br><br>"); 
        }    
    }
    let veces=cuantasveces(); 
    let i=0;
    while(i<veces){
    const item=randomcomputadora();
    const item2=promptplayer();
    if(item2){
        resolve(item,item2);
    }
    i++;
    }
    if(ganarplayer>ganarcomputadora){
        document.write("<br>PLAYER GANA!!!"); 
        }else if(ganarplayer<ganarcomputadora){
        document.write("<br>COMPUTADORA GANA!!!"); 
        }else{ 
        document.write("<br>EMPATE..."); 
        }

function cuantasveces() {
    let veces= prompt("Cuantas veces quieres jugar?");
    return parseInt(veces);
}

