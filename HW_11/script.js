const data = JSON.parse(dataProduct);
const contentProduct = document.querySelector('.content__product');
const button = document.createElement('div');
button.classList.add('button');
const buttonProduct = document.createElement('a');
buttonProduct.classList.add('button__product');
buttonProduct.href = "#";
buttonProduct.textContent = "Browse All Product";
contentProduct.appendChild(button);
button.appendChild(buttonProduct);

data.forEach(el => {
    const productFeatured = document.createElement('figure');
    productFeatured.classList.add('product__featured');
    const productFeaturedItem = document.createElement('div');
    productFeaturedItem.classList.add('product__featured__item');
    const featuredItemImg = document.createElement('img');
    featuredItemImg.classList.add('featured__item__img');
    const featuredItemHover = document.createElement('div');
    featuredItemHover.classList.add('featured__item__hover');
    const itemHoverButton = document.createElement('button');
    itemHoverButton.classList.add('item__hover__button');
    const hoverButtonSvg = document.createElement('img');
    hoverButtonSvg.classList.add('hover__button__svg');
    hoverButtonSvg.setAttribute("width", "32");
    hoverButtonSvg.setAttribute("height", "29");
    hoverButtonSvg.setAttribute("viewBox", "0 0 32 29");
    const hoverButtonText = document.createElement('span')
    hoverButtonText.classList.add('hover__button__text');
    const featuredLink = document.createElement('figcaption');
    featuredLink.classList.add('featured__link');
    const featuredLinkItem = document.createElement('a');
    featuredLinkItem.classList.add('featured__link__item');
    const linkItemName = document.createElement('h5');
    const linkItemDesription = document.createElement('p');
    linkItemDesription.classList.add('product__text');
    const linkItemPrice = document.createElement('p');
    linkItemPrice.classList.add('product__price');



    featuredItemImg.src = el.image;
    featuredItemImg.alt = "img";
    hoverButtonSvg.src = "image/Forma_4.svg"
    hoverButtonText.textContent = "Add to Cart"
    featuredLinkItem.href = "#";
    linkItemName.textContent = el.name;
    linkItemDesription.textContent = el.description;
    linkItemPrice.textContent = el.price;
    buttonProduct.href = "#";
    buttonProduct.textContent = "Browse All Product";


    contentProduct.appendChild(productFeatured);
    contentProduct.appendChild(button);
    button.appendChild(buttonProduct);
    productFeatured.appendChild(productFeaturedItem);
    productFeatured.appendChild(featuredLink);
    productFeaturedItem.appendChild(featuredItemImg);
    productFeaturedItem.appendChild(featuredItemHover);
    featuredItemHover.appendChild(itemHoverButton);
    itemHoverButton.appendChild(hoverButtonSvg);
    itemHoverButton.appendChild(hoverButtonText);
    featuredLink.appendChild(featuredLinkItem);
    featuredLinkItem.appendChild(linkItemName);
    featuredLinkItem.appendChild(linkItemDesription);
    featuredLinkItem.appendChild(linkItemPrice);
});