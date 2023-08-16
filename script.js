"use strict"
//Завдання 1. Підрахуйте суму всіх чисел у заданому користувачем діапазоні.

let firstNumber = parseInt(prompt("Вкажіть перше число..."));
let secondNumber = parseInt(prompt("Вкажіть друге число..."));
if (firstNumber > secondNumber) {
  secondNumber = firstNumber + (firstNumber = secondNumber) - secondNumber;
}
let iter = firstNumber;
let sum = 0;
while (iter <= secondNumber) {
  sum += iter++;
}
alert(`Сума цілих чисел у діпазоні [${firstNumber}; ${secondNumber}] дорівнює ${sum},
а у діапазоні (${firstNumber}; ${secondNumber}) буде ${
  firstNumber !== secondNumber ? sum - firstNumber - secondNumber : 0
}.`);


//Завдання 2. Запросіть 2 числа і знайдіть тільки найбільший спільний дільник.

let num1 = parseInt(prompt("Введіть перше число:"));
let num2 = parseInt(prompt("Введіть друге число:"));

let smallerNumber = (num1 < num2) ? num1 : num2;
let gsd = 1;
for (let i = 1; i <= smallerNumber; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        gsd = i;
    }
}
alert("Найбільший спільний дільник чисел " + num1 + " і " + num2 + " дорівнює " + gsd);

//Завдання 4. Визначте кількість цифр у введеному числі.

let numer = Math.abs(+prompt("Введіть число:"));
let num = numer;
let numberLength = 0;
if (num === 0) {
    numberLength = 1;
}
else {
    if (num < 1){
        let smallerOne = 1;
    }
    while(num-Math.trunc(num)!==0){
      num*=10;
    }
    while (num !== 0) {
        numberLength++;
        num = Math.floor(num / 10);
    }
}
alert(`У цьому числі цифр: ${numer<1?numberLength+1:numberLength} `);

//Завдання 5. Запросіть у користувача 10 чисел і підрахуйте, скільки він ввів додатних чисел, від’ємних та нулів. При цьому підрахуйте також кількість парних і непарних чисел. Виведіть статистику на екран. Враховуйте те, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let valZero = 0;
let valPos = 0;
let valNeg = 0;
let valEven = 0;
let valOdd = 0;

for (let i = 0; i < 10; i++) {
  let number = +prompt("Введіть число " + (i + 1) + ":");

  if (isNaN(number)) {
    alert("Введено некоректне число. Будь ласка, спробуйте ще раз.");
    i--;
    continue;
  }
  if (number > 0) {
    valPos++;
  } else if (number < 0) {
    valNeg++;
  } else {
    valZero++;
  }
  if (number % 2 === 0) {
    valEven++;
  } else {
    valOdd++;
  }
  console.log(number, valZero);
}
alert(
  `З 10 чисел Ви ввели:\n нулів -  ${valZero},\n додатних чисел - ${valPos}, \n відє'мних чисел - ${valNeg},\n парних чисел - ${valEven},\n непарних чисел - ${valOdd}.`
);

//Завдання 6. Зацикліть калькулятор. Запросіть у користувача 2 числа і знак, розв’яжіть приклад, виведіть результат і запитайте, чи хоче він розв’язати ще один приклад. І так триватиме доти, доки користувач не відмовиться.

var userConfirm = true;
while(userConfirm){
let firstNumber = +prompt("Введіть, будь ласка, перше число...");
let secondNumber = +prompt("Введіть, будь ласка, друге число...");
let signAction = prompt("Введіть, будь ласка, знак дії (+, –, *, /)..."); 
switch(signAction){
case '+':
  alert (`${firstNumber} ${signAction} ${secondNumber} = ${firstNumber + secondNumber}`);
   break;
case '-':
  alert (`${firstNumber} ${signAction} ${secondNumber} = ${firstNumber - secondNumber}`);
   break;
case '*':
  alert (`${firstNumber} ${signAction} ${secondNumber} = ${firstNumber * secondNumber}`);
  break;
case '/':
  alert (`${firstNumber} ${signAction} ${secondNumber} = ${firstNumber / secondNumber}`);
   break;
}
userConfirm = confirm("Бажаєте розв'язати ще один приклад?");  

if (userConfirm === false){
    break;
}}

//Завдання 9. Виведіть таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

let str='';
for (let i = 2; i <= 9; i++) {
    str+= '<ul style="list-style: none;"><h3>Таблиця множення для ' + i + ':</h3>';
    for (let j = 1; j <= 10; j++) {
   str+='<li>'+i+' × '+j+' = '+i*j+'</li>';
    }
    str+= '</ul>';
  }
  document.write(str);
