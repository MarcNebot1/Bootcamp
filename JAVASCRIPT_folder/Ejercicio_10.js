//cambia a partr de pizza todos los emotes a cerveza
const array = ['🍔', '🌮', '🍣', '🍕', '🍜', '🐟', '🍙', '🍚', '🥑'];

for (let i = 0; i < array.length; i++) {
    if (array[i] === '🍕') {
        array.fill('🍺', i, array.length);
    }
}
console.log(array);

//enocntrar el elemento piña en el array

const array1=[ '🍕', '🍕','🍍', '🍕', '🍕'];
const tienepiña = array1.some(element => element === '🍍');
console.log(tienepiña);
    
// quita la piña del siguiente array
//lo iba a hacer con splice pero veia mas complicado elimiar el index y el elemento
const array2 = ['🍕', '🍕', '🍍', '🍕', '🍕'];
const newArray = array2.filter(element => element !== '🍍');
console.log(newArray);
//A partir del siguiente array convierte todas las fresas en setas
const array3 = ['🍓', '🍋', '🍓', '🍋', '🍓'];

let esfresa=0;

while (esfresa !== -1) {
esfresa = array3.indexOf('🍓');
const substituirfresa= array3.splice(esfresa,1,'🍄');

}

console.log(array3);

//Añade icono 😰 despues de cada pimiento
const array4 = ['🌶️', '🥤', '🌶️', '🥤', '🌶️','🥤'];

for (let i = 0; i < array4.length; i++) {
    if (array4[i] === '🌶️') {
    array4.splice(i+1,0,'😰');
    }
}
console.log(array4);
// añade una 🃏 en medio de las 🎴.
const array5 = ['🎴','🎴','🎴','🃏','🎴','🎴','🎴'];
for (let i = 0; i < array5.length; i++) {
    if (array5[i] === '🎴' && (array5[i+1] !== '🃏')) {
    array5.splice(i+1,0,'🃏');
    }
}
console.log(array5);