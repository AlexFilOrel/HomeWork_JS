const data = JSON.parse(dataInfo);
const content = document.querySelector('.box__card');

data.forEach(el => {
    const div = document.createElement('div');
    div.classList.add('card')
    const image = document.createElement('img');
    image.classList.add('card__image')
    const setup = document.createElement('p');
    setup.classList.add('card__setup')
    const punch = document.createElement('p');
    punch.classList.add('card__punch')
    const id = document.createElement('h3');
    id.classList.add('card__title')
    image.src = el.image;
    setup.textContent = el.setup;
    punch.textContent = el.punchline;
    id.textContent = el.id;
    content.appendChild(div);
    div.appendChild(id);
    div.appendChild(image);
    div.appendChild(setup);
    div.appendChild(punch);
});
