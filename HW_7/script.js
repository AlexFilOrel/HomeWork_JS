//1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// 4. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// 5. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// 6. Удалите атрибут type у элемента с классом "dropdown-toggle".

//--1--
const element1 = document.querySelectorAll('.dropdown-item');
element1.forEach(element => {
    element.classList.add('super-dropdown');
});


//--2--
const element2 = document.querySelector('.btn');
element2.classList.toggle('btn-secondary');


//--3--
const element3 = document.querySelector('.menu');
element3.classList.remove('dropdown-menu');


//--4--
const element4 = document.querySelector('#dropdownMenuButton');
element4.id = 'superDropdown';

//--5--
const element5 = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
element5.dataset.dd = '3';


//--6--
const element6 = document.querySelector('.dropdown-toggle');
element6.removeAttribute('type');