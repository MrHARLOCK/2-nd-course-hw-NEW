// /*Задание 1*/

// let text = 'js';
// console.log(text.toUpperCase());

// /*Задание 2*/

// const searchStart = (arr, str) => {
//   return arr.filter(el => el.toLowerCase().startsWith(str.toLowerCase()));
// }

// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// /*Задание 3*/

// let num = 32.58884

// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// /*Задание 4*/

// const arrNum = [52, 53, 49, 77, 21, 32];

// function getMaxOfArray(arrNum) {
//   return Math.max.apply(null, arrNum);
// }
// function getMinOfArray(arrNum) {
//   return Math.min.apply(null, arrNum);
// }

// console.log(getMaxOfArray(arrNum));
// console.log(getMinOfArray(arrNum));

// /*Задание 5*/

// function getRandomInt() {
//   return Math.floor(Math.random() * 10);
// }

// console.log(getRandomInt());

// /*Задание 6*/

// function numRandom(num) {
//   const arr = [];
//   const n = Math.floor(num / 2);

//   for (let i = 0; i < n; i++) {
//     arr.push(Math.floor(Math.random() * num + 1));
//   }

//   return arr;
// }

// console.log(numRandom(15));

// /*Задание 7*/

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(getRandomIntInclusive(5, 9));

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// console.log(getRandomArbitrary(5, 9));

// /*Задание 8*/

// let currentDate = new Date();

// console.log(currentDate);