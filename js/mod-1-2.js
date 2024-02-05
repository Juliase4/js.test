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

// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} г. ${minutes} хв.`;
// } else {
//   timestring = `${hours} г.`;
// }
// console.log(timestring);

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

// Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

let linkB = 'https://somesite.com/about';
// linkB.includes('my-site') && !linkB.endsWith('/') ? (linkB += '/') : linkB;
linkB += linkB.includes('my-site') && !linkB.endsWith('/') ? '/' : '';
console.log(linkB);

// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"

const hours = 20;

if (hours < 17) {
  console.log('Pending');
} else if (hours >= 17 && hours <= 24) {
  console.log('Expires');
} else {
  console.log('Overdue');
}

// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

// const daysUntilDeadline = 5;
// // Пиши код нижче за цей рядок

// if (daysUntilDeadline === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому');
// }

// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

const daysUntilDeadline = -5;

let text;

if (daysUntilDeadline >= 0) {
  switch (daysUntilDeadline) {
    case 0:
      text = 'Сьогодні';
      break;

    case 1:
      text = 'Завтра';
      break;

    case 2:
      text = 'Післязавтра';
      break;

    default:
      text = 'Дата у майбутньому';
      break;
  }

  console.log(text);
} else {
  console.log('Друже, ти проспав :(');
}

// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

const max = 100;
const min = 20;

for (let i = min; i >= min && i <= max; i += 1) {
  if (!(i % 5)) {
    console.log(i);
  }
}

// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Вітаю!"
// Інакше виводити рядок "Невірний пароль"

const login = prompt('Введіть логін');

if (!login) {
  console.log('Скасовано');
} else if (login === 'Адмін') {
  const password = prompt('Тут має бути пароль');
  console.log(password === 'Я адмін' ? 'Вітаю!' : 'Невірний пароль');
} else {
  console.log('Я вас не знаю');
}
