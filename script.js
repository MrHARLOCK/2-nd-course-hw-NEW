const salary = [45000, 39000, 105000, 76000, 77000];

const tax = salary.map(el => (el - el * 0.13));

console.log(tax);