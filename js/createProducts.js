import { createDescriptionProduct } from './utils/createDescriptionProduct.js';
import { PRODUCTS_ARRAY } from './productsArray.js';
import { BASKET_ARRAY } from './basketArra.js';

export const createProducts = ({img:{xs},title,money},index) => {
    const product = document.createElement('div');
    product.className = 'section-product';
    product.dataset.productID = index + 1;
    product.innerHTML = `
        <div class="section-product-img">
            <img src="${xs}" alt="">
        </div>
        <div class="section-product-title">
            ${title}
        </div>
        <div class="section-product-sale">
            <div class="section-product-sale-price">
                $${money}
            </div>
            <div class="section-product-sale-button">
                <button class="addBasket">BUY NOW</button>
            </div>
        </div>
    `

    document.querySelector('.section-main-products-wrapper').appendChild(product);

    product.onclick = () => {
        if (event.target.className === 'section-product'){
            let arr = [];
            arr = PRODUCTS_ARRAY[index];
            createDescriptionProduct(arr,index);
        }else if (event.target.className === 'addBasket'){
            BASKET_ARRAY.unshift(PRODUCTS_ARRAY[index]);
            document.querySelector('.basket-length').innerHTML = `${BASKET_ARRAY.length}`
        }
    };

    
}

