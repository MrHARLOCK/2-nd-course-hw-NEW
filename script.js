/*Задание 1*/

function returnsLess(numOne, numTwo) {
   if (numOne < numTwo) {
      return numOne;
   } else {
      return numTwo;
   }
}

console.log(returnsLess(8, 4));
console.log(returnsLess(6, 6));
console.log(returnsLess(2, 6));

/*Задание 2*/

function oddEven(numOne) {
   if (numOne % 2 == 0) {
      return ('Число четное');
   } else {
      return ('Число нечетное');
   }
}

console.log(oddEven(22));
console.log(oddEven(99));

/*Задание 3*/

function squareNum(numOne) {
   console.log(numOne ** 2);
}

squareNum(5);
squareNum(9);
squareNum(256);

function returnSquareOfNumb(numOne) {
   return (numOne ** 2);
}

console.log(returnSquareOfNumb(51));
console.log(returnSquareOfNumb(94));
console.log(returnSquareOfNumb(2563));

/*Задание 4*/


function howOld() {
   let answer = Number(prompt('Введите ваш возраст'));

   if (!answer) {
      alert('НЕ ЗАДУРЯЙСЯ ;)');
   } else if (answer < 0) {
      alert('Вы ввели неправильное значение');
   } else if (answer <= 12) {
      alert('Привет, друг!');
   } else {
      alert('Добро пожаловать!');
   }
}

howOld();

/*Задание 5*/

function checkingNumbers(numOne, numTwo) {
   if ((isNaN(numOne)) || (isNaN(numTwo))) {
      return ('Одно или оба значения не являются числом');
   } else {
      return (numOne * numTwo);
   }
}

console.log(checkingNumbers(2, 'ДВА'));
console.log(checkingNumbers(2, 2));
console.log(checkingNumbers('2', 2));
console.log(checkingNumbers('2', '2'));

/*Задание 6*/

function countingNumbers() {
   const userAnswer = Number(prompt('Введите число.'));

   if ((isNaN(userAnswer))) {
      return ('Переданный параметр не является числом');
   } else if (!userAnswer) {
      alert('НЕ ЗАДУРЯЙСЯ ;)');
   } else {
      return (`${userAnswer} в кубе равняется ${userAnswer ** 3}`);
   }
}

console.log(countingNumbers());

/*Задание 7*/

function getRectangleArea() {
   return (this.radius ** 2) * Math.PI;
}

function getRectanglePerimeter() {
   return (this.radius * 2) * Math.PI;
}

const circle1 = {
   radius: 5,

   getArea: getRectangleArea,
   getPerimeter: getRectanglePerimeter,
}

const circle2 = {
   radius: 8,

   getArea: getRectangleArea,
   getPerimeter: getRectanglePerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

/*Задание 8*/

/* Находится в файле index.js*/