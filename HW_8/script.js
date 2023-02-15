// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик.
// - Необходимо использовать делегирование.
// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

//--1--
document.addEventListener('DOMContentLoaded', function (e) {
    console.log('Все теги прогрузились');
});


//--2--
window.addEventListener('load', function (e) {
    console.log('Страница загрузилась');
});


//--3--
document.addEventListener('click', function (e) {
    if (e.target.className == 'super_element') {
        console.log(`Класс "super_element" присутствует в элементе <${e.target.tagName.toLowerCase()}>.`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе <${e.target.tagName.toLowerCase()}>.`);
    }
});


//--4--
const textarea = document.querySelector('textarea');
textarea.addEventListener('mouseover', function (e) {
    console.log('Вы навели на textarea.');
});


//--5--
const list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if (e.target.tagName !== 'BUTTON') {
        return;
    }
    console.log(e.target.textContent);
});


//--6--
// После клика скрипт сначала отрабатывает <тег>, а потом атрибут.


//--7--
const list1 = document.querySelectorAll('li:nth-child(2n)');
list1.forEach(element => {
    element.style.backgroundColor = 'red'
});