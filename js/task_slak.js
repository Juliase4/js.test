'use strict';

// Що буде виведено у консоль?
let a = 6;
let b = false;
let c = '12';
let d = 1;
let result = a + d + c + b;
console.log(result);

// Рішення:
// Спочатку виконається звичайна операція додавання - 6+1 =7. Потім потім два рази відбудеться конкатенація - 7 + “12” = “712" i
// “712” + false = “712false”

// Що буде виведено в консоль?
console.log(0 || ('0' && {}));

// Правильна відповідь - {}. Спочатку розрахується вираз у дужках - оператор && поверне {}, тому що два операнда приведеться до true. Потім розрахується вираз 0 || {} і оператор || поверне перше true, а це у нас обʼєкт. Важливо памʼятати, що логічні оператори повертають не буль (true або false), а значення операндів.
