function gameSite() {
   let monthNumber = Number(prompt('Введите номер месяца в году'));

   if ((monthNumber === 12) || (monthNumber >= 1 && monthNumber <= 2)) {
      alert('Зима');
   } else if (monthNumber >= 3 && monthNumber <= 5) {
      alert('Весна');
   } else if (monthNumber >= 6 && monthNumber <= 8) {
      alert('Лето');
   } else if (monthNumber >= 9 && monthNumber <= 11) {
      alert('Осень');
   } else {
      alert('Не верный номер!!!');
   }
}

function seasonsBtn() {
   let words = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];
   words = words.sort(() => Math.random() - 0.5);

   alert(words);

   let wordsfirst = prompt(`Назовите первое слово`);
   wordsfirst = wordsfirst.toLowerCase();
   let wordsLast = prompt(`Назовите последнее слово`);
   wordsLast = wordsLast.toLowerCase();
   
   if (wordsfirst === words[0] && wordsLast === words[words.length - 1]) {
      alert`Это правильный ответ!`;
   } else if (wordsfirst === words[0] || wordsLast === words[words.length - 1]) {
      alert`Вы были близки к победе!`;
   }
   else {
      alert`Вы не угадали!`;
   }
}