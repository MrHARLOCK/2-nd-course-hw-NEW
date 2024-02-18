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

