'use strict';

// * - Конкатенація (склеювання) рядків
// * — Шаблонні рядки
// * - Довжина рядка
// * - Індексація елементів
// * - Незмінність рядків

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// const quantity = 15;
// const orderMsg = `You order ${quantity} bots`;
// console.log(orderMsg);

// const message = 'This string is 28 chars long';
// console.log(message.length);
// /* щоб поміряти довжину строчки, додаємо до змінної .length */

// Задача: склади фразу за допомогою шаблонних рядків
// A has B bots in stock, де А, В - змінні вставленні в рядок.

const companyName = 'Cyberdyne System';
const repairBots = 150;
const defaceBots = 50;
const msg = `${companyName} has ${repairBots + defaceBots} bots in stock`;

console.log(msg);
