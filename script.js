/*Задание 1*/

// let text = 'js';
// console.log(text.toUpperCase());

/*Задание 2*/

const searchStart = (arr, str) => {
  return arr.filter(el => el.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

/*Задание 3*/

