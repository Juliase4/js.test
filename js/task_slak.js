// 'use strict';

// Що буде виведено у консоль?
// let a = 6;
// let b = false;
// let c = '12';
// let d = 1;
// let result = a + d + c + b;
// console.log(result);

// Рішення:
// Спочатку виконається звичайна операція додавання - 6+1 =7. Потім потім два рази відбудеться конкатенація - 7 + “12” = “712" i
// “712” + false = “712false”

// Що буде виведено в консоль?
// console.log(0 || ('0' && {}));

// Правильна відповідь - {}. Спочатку розрахується вираз у дужках - оператор && поверне {}, тому що два операнда приведеться до true. Потім розрахується вираз 0 || {} і оператор || поверне перше true, а це у нас обʼєкт. Важливо памʼятати, що логічні оператори повертають не буль (true або false), а значення операндів.

// =======================================================

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: 'Mango',
//   room: 27,
// };

// const poly = {
//   username: 'Poly',
//   room: 191,
// };

// greet.call(mango, 'Welcome'); // "Welcome, Mango, your room is 27!"
// greet.call(poly, 'Aloha'); // "Aloha, Poly, your room is 191!"

// =========================================================

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = 'John';
// const context = {
//   person: 'Alice',
// };

// greet.call(context, 'Bob');

// =========================================================

// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: 'Alice',
// };

// const greet = sayHello.bind(user);

// greet('Hello');

// const a = () => {
//   console.log(this);
// };

// function b() {
//   a();
// }

// b.call({ user: 'Mango' });

// class Car {
//   #brand;
//   model;
//   price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car({ brand: 'bmw', model: 'X5', price: 58900 }));

// class Car {
//   #price;

//   static maxPrice = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice <= maxPrice) {
//     this.#price = newPrice;
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// =============================================================

// const user = {
//   tag: 'Mango',

//   showTag() {
//     console.log('showTag', this);
//   },
// };

// user.showTag();

// =============================================================

// function showTag() {
//   console.log('showTag', this);
//   console.log('showTag -> this.tag', this.tag);
// }

// // showTag();

// const mango = {
//   tag: 'Mango',
// };

// mango.showUserTag = showTag;
// console.log('mango', mango);

// mango.showUserTag();

// =============================================================

// const poly = {
//   tag: 'Poly',
//   showTag() {
//     console.log('showTag', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// // poly.showTag();

// const outerShowTag = poly.showTag;

// outerShowTag(); /* undefined */

// =============================================================

// const jacob = {
//   tag: 'Jacob',
//   showTag() {
//     console.log('showTag', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// function invokeAction(action) {
//   console.log(action);
//   action();
// }

// invokeAction(jacob.showTag); /* undefined */
