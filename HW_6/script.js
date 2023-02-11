// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data - number со значением 50 и вывести его в консоль.
// 5. Выведите содержимое тега title в консоль.
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// 7. Создайте тег'p', запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// 8. Удалите тег h6 на странице.

//--1--
const element1 = document.querySelector('#super_link');
console.log(element1);

//--2--
const element2 = document.querySelectorAll('.card-link');
element2.forEach(link => {
    link.textContent = 'ссылка';
});

//--3--
const element3 = document.querySelectorAll('.card-body .card-link');
element3.forEach(element => {
    console.log(element);
});

//--4--
const element4 = document.querySelector('[data-number="50"]')
console.log(element4);

//--5--
const element5 = document.querySelector('title');
console.log(element5.textContent);

//--6--
const element6 = document.querySelector('.card-title');
console.log(element6.parentNode);

//--7--
const pElement = document.createElement('p');
pElement.textContent = 'Привет';
const element7 = document.querySelector('.card');
element7.prepend(pElement);

//--8--
const element8 = document.querySelector('h6');
element8.remove();