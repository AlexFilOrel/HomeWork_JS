// Task 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let num = 0; num <= 10; num++) {
//     if (num === 0) {
//         console.log(`${num} - это ноль.`);
//     } else if (num % 2 === 0) {
//         console.log(`${num} - это четное число.`);
//     } else {
//         console.log(`${num} - это нечетное число.`);
//     }
// }


// Task 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7];
// array.splice(3, 2);
// console.log(array);


// Task 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const array = [];
// for (let i = 0; i < 5; i++) {
//     array.push(Math.round(Math.random() * 9));
// }
// console.log(array); // Контрольный вывод массива.
// let sumNum = 0;
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//     sumNum += array[i]
//     if (array[i] === 3) {
//         count++;
//     }
// }
// console.log(`Сумма эементов массива ${sumNum}.`);
// let minNum = Math.min(...array)
// console.log(`Минимальное число в массиве ${minNum}.`);
// if (count > 0) {
//     console.log('В этом массиве есть число 3.');
// } else {
//     console.log('В этом массиве нет числа 3.');
// }


// Task 4
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

// let x = 'x'
// let xSum = ''
// // console.log(x);
// for (let str = 1; str <= 20; str++) {
//     console.log(xSum += x);
// }