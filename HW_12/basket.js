"use strict";

const basket = {};
const products = JSON.parse(dataProduct).reduce((acc, product) => {
    return { ...acc, [product.id]: product };
}, {});

const basketEl = document.querySelector(".basket");
const basketListEl = document.querySelector(".basketList");
const basketCounterEl = document.querySelector(".header___menu span");
const basketTotalValueEl = document.querySelector(".basketTotalValue");

document.querySelector(".link3__counter").addEventListener("click", () => {
    basketEl.classList.toggle("hidden");
});
document.querySelector(".link3").addEventListener("click", () => {
    basketEl.classList.toggle("hidden");
});

document.querySelector(".content__product").addEventListener("click", (event) => {
    const addToCartEl = event.target.closest(".item__hover__button");
    if (!addToCartEl) {
        return;
    }
    addToBasket(addToCartEl.dataset.id);
    renderBasketContent();
});

basketEl.addEventListener("click", (event) => {
    if (!event.target.classList.contains("productAdd")) {
        return;
    }
    addToBasket(event.target.closest(".basketRow").dataset.id);
    renderBasketContent();
});


basketEl.addEventListener("click", (event) => {
    if (!event.target.classList.contains("productRemove")) {
        return;
    }
    removeFromBasket(event.target.closest(".basketRow").dataset.id);
    renderBasketContent();
});

function addToBasket(id) {
    if (!(id in basket)) {
        basket[id] = {
            id: id,
            name: products[id].name,
            price: products[id].price,
            count: 0,
        };
    }
    basket[id].count++;
}

function removeFromBasket(id) {
    if (basket[id].count <= 1) {
        delete basket[id];
    } else {
        basket[id].count--;
    }
}

function renderBasketContent() {
    basketListEl.innerHTML = Object.values(basket).reduce(
        (acc, product) => acc + getBasketProductMarkup(product),
        ""
    );
    basketCounterEl.textContent = getTotalBasketCount().toString();
    basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
}

function getTotalBasketCount() {
    return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}

function getTotalBasketPrice() {
    return Object.values(basket).reduce((acc, product) => acc + product.price * product.count, 0);
}
function getBasketProductMarkup(product) {
    return `
    <div class="basketRow" data-id="${product.id}">
        <div>${product.name}</div>
        <div>
            <span class="productCount">${product.count}</span> шт.
        </div>
        <div>${product.price} руб.</div>
        <div>
            <span class="productTotalRow">
                ${(product.price * product.count).toFixed(2)} руб.
            </span>
        </div>
        <div><button class="productRemove">-</button></div>
        <div><button class="productAdd">+</button></div>
    </div>`;
}