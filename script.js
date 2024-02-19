/*Задание 1*/

// const arr = [1, 5, 4, 10, 0, 3];

// for (let item = 0; item < arr.length; item++) {
//    console.log(arr[item]);
//    if (arr[item] === 10) break;
// }

/*Задание 2*/

// console.log(arr.indexOf(4));

/*Задание 3*/

// let arrNumber = [1, 3, 5, 10, 20];

// arrNumber = arrNumber.join(' ');

// console.log(arrNumber);

/*Задание 4*/

// let multArr = [];

// for (let i = 0; i < 3; i++) {
//    multArr[i] = [];

//    for (let j = 0; j < 3; j++) {
//       multArr[i].push(1);
//    }
// }

// console.log(multArr);

/*Задание 5*/

// const arr = [1, 1, 1];

// arr.push(2, 2, 2);

// console.log(arr);

/*Задание 6*/

// let arr = [9, 8, 7, 'a', 6, 5].sort();

// arrDelEl = arr.pop();

// console.log(arr);

/*Задание 7*/

// arr = arr.reverse();

// let answer = +prompt('Угадай число в массиве');
// if (arr.includes(answer)) {
//    alert('Угадал');
// } else {
//    alert('Не угадал');
// }

/*Задание 8*/

// const text = 'abcdef'.split('').reverse().join('');

// console.log(text);

/*Задание 9*/

// const multArr = [[1, 2, 3,], [4, 5, 6]];

// console.log(multArr.reduce(function (a, b) {
//    return a.concat(b);
// }))

// const res = [].concat(...multArr);

// console.log(res);


/*Слизал из интернета, только поставил свои значения;)*/
// function simpleArr(a) {
//    let res = [];

//    for (let i = 0; i < a.length; i++)
//       if (!Array.isArray(a[i]))
//          res.push(a[i]);

//       else
//          res = res.concat(simpleArr(a[i]));
//    return res;
// }

// console.log(simpleArr(multArr));

/*Задание 10*/

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//    console.log(result += array[i]);
// }

/*Задание 11*/

// function square(numbers) {
//    return numbers.map((num) => num ** 2);
// }
// console.log(square([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*Задание 12*/

// const getLengthWords = source => source.map(str => str.length);

// console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

/*Задание 13*/

// function filterPositive(array) {
//    return array.filter(item => item < 0);
// }
// console.log(filterPositive([-1, 0, 5, -10, 56]));
// console.log(filterPositive([-25, 25, 0, -1000, -2]));
