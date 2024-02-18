/*Задание 1*/
/*
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
/*
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

/*Задание 3*/
/*
let d = 500;

let e = 60;

if (d > 100 || e > 100) {
   console.log('Верно');
} else {
   console.log('Неверно');
}

/*Задание 4*/
/*
let a = '2';

let b = '3';

alert(Number(a) + Number(b));

/* Задание 5*/
/*
let monthNumber = Number(prompt('Введите номер месяца в году'));

switch (monthNumber) {
   case 1:
   case 2:
   case 12:
      alert('Зима');
      break;
   case 3:
   case 4:
   case 5:
      alert('Весна');
      break;
   case 6:
   case 7:
   case 8:
      alert('Лето');
      break;
   case 9:
   case 10:
   case 11:
      alert('Осень');
      break;
   default: alert('Не верный номер!!!')
      break;
}

/*Задание 7*/
/*
let num = Number(prompt('Пожалуйста, введите любое число'));

if (!num) {
   alert('ЧТО ТО ПОШЛО НЕ ТАК!!!)')
} else if (isNaN(num)) {
   alert('НЕ ЧИСЛО!!!!');
} else if (num % 2) {
   alert('ЧИСЛО НЕЧЕТНОЕ');
} else if (num !== (num % 2)) {
   alert('ЧИСЛО ЧЕТНОЕ');
}

/*Задание 8*/

let clientOS = Number(prompt('Для установки приложения укажите какой ОС Вы пользуетесь? Если iOS, то введите "0". Если Android, то введите "1".'));



if (clientOS === false) {
   alert('Вы ввели не верное значение!')
} else if (clientOS === 0) {
   alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
   alert('Установите версию приложения для Android по ссылке');
} else {
   alert('Вы ввели не верное значение!')
}


/*Задание 9*/
/*
let clientOS = Number(prompt('Для установки приложения укажите какой ОС Вы пользуетесь? Если iOS, то введите "0". Если Android, то введите "1".'));

let clientDeviceYear = Number(prompt('Укажите год выпуска телефона'));

if (clientOS === 0) {
   if (clientDeviceYear >= 2015) {
      alert('Установите версию приложения для iOS по ссылке');
   } else if (clientDeviceYear <= 2015) {
      alert('Установите облегченную версию приложения для iOS по ссылке');
   } else {
      alert('Вы ввели не верное значение!');
   }
} else if (clientOS === 1) {
   if (clientDeviceYear >= 2015) {
      alert('Установите версию приложения для Android по ссылке');
   } else if (clientDeviceYear <= 2015) {
      alert('Установите облегченную версию приложения для Android по ссылке');
   } else {
      alert('Вы ввели не верное значение!');
   }
} else {
   alert('Вы ввели не верное значение!');
}*/