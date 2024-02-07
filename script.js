/*Задание 1*/

let password = 'пароль';

let check = prompt('Введите пароль');

if (check === password) {
   alert("Пароль введен верно");
} else {
   alert("Пароль введен неправильно");
}
/*
let answer;

answer = (check === password) ? 'Пароль введен верно' : 'Пароль введен неправильно';

alert(answer);*/

/*Задание 2*/

let c = 8;
// c = 0;
// c = 10;
// c = -2;
// c = 2;
if (c > 0 && c < 10) {
   console.log('Верно');
} else {
   console.log('Неверно');
}

