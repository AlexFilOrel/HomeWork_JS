// Task 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени.

// function cubing(num) {
//     return Math.pow(num, 3);
// }
// console.log(cubing(Number(prompt('Введите первое число:', 2))) + cubing(Number(prompt('Введите второе число:', 3))));



// Task 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно. Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен (значение)".

// function salaryNetOfTax(money) {
//     if (isNaN(money)) {
//         alert('Введено некорректное значение.');
//         salaryNetOfTax(Number(prompt('Введите сумму оклада:')));
//     } else {
//         moneyFact = money * 0.87;
//         return moneyFact;
//     }
// }
// salaryNetOfTax(Number(prompt('Введите сумму оклада:')));
// console.log(`Размер заработной платы за вычетом налогов равен ${moneyFact}.`);



// Task 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел.

// function getMaximalNumber(num1, num2, num3) {
//     max = Math.max(num1, num2, num3);
//     return max;
// }
// alert(`${getMaximalNumber(Number(prompt('Введите первое число:')), Number(prompt('Введите второе число:')), Number(prompt('Введите третье число:')))} максимальное значение.`);


// Task 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// function summation(num1, num2) {
//     sum = num1 + num2;
//     return sum;
// }

// function difference(num1, num2) {
//     if (num1 > num2) {
//         diff = num1 - num2;
//     } else if (num1 < num2) {
//         diff = num2 - num1;
//     } else {
//         diff = 0
//     }
//     return diff;
// }

// function multiplication(num1, num2) {
//     multш = num1 * num2;
//     return multш;
// }

// function dividing(num1, num2) {
//     div = num1 / num2;
//     return div;
// }
// let num1 = Number(prompt('Введите первое число:'));
// let num2 = Number(prompt('Введите второе число:'))
// console.log(summation(num1, num2));
// console.log(difference(num1, num2));
// console.log(multiplication(num1, num2));
// console.log(dividing(num1, num2));