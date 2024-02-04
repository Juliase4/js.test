// Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const userAnswer = prompt('Яка офіційна назва JavaScript?');

// if (userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase()) {
//   alert('Правильно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

// console.log(
//   userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase()
//     ? alert('Правильно!')
//     : alert('Не знаєте? ECMAScript!')
// );

// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

const hours = 14;
const minutes = 26;
let timestring;

if (minutes > 0) {
  timestring = `${hours} г. ${minutes} хв.`;
} else {
  timestring = `${hours} г.`;
}
console.log(timestring);

// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = Number(prompt('Введіть число'));
// console.log(typeof userInput);
// if (userInput > 0) {
//   console.log('Це позитивне число');
// } else if (userInput < 0) {
//   console.log('Це негативне число');
// } else {
//   console.log('Це нуль');
// }

// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

const a = 120;
const b = 180;

if (a > 100 && b > 100) {
  let res;
  if (a > b) {
    res = a;
  } else {
    res = b;
  }
  console.log(res);
} else {
  console.log(b + 512);
}

// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

let link = 'https://my-site.com/about';
// Пиши код нижче за цей рядок
if (!link.endsWith('/')) {
  link += '/';
}
// Пиши код вище за цей рядок
console.log(link);

// Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт, який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.

let link1 = 'https://somesite.com/about';
// Пиши код нижче за цей рядок
if (!link1.endsWith('/') && link1.includes('my-site')) {
  link1 += '/';
}
// Пиши код вище за цей рядок
console.log(link1);
