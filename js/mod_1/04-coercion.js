'use strict';

// Перетворення типів: рядки
// - Явне перетворення;
// - Неявне перетворення;

// Явне перетворення

// console.log(String(5)); /* 5 */
// console.log(String(true)); /* true */
// console.log(String(false)); /* false */
// console.log(String(null)); /* null */
// console.log(String(undefined)); /* undefined */

// console.log('5' + 3); /* 53 */
// console.log('5' + true); /* 5true */
// console.log('5' + false); /* 5false */
// console.log('5' + null); /* 5null */
// console.log('5' + undefined); /* 5undefined */

// НЕявне перетворення типів:
// let a = '5';
// let b = 23;
// console.log(a + b); /* 523 */

// let a = 5;
// let b = '23';
// console.log(typeof (a + b));
/* в js перетворення числа в трочку, тому що це більш безпечніше, щоб не виникало помилок */

let a = '5';
let b = '4';

const aa = Number(a);
const bb = Number(b);

console.log(aa + bb);
// вже буде number, а не string
