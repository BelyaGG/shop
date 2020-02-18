import { productsArrayMap } from '../utils/productsArrayMap.js';

const WRAPPER = document.getElementById('wrapper');


export const createProductsDOM = () => {
    const sectionMain = document.createElement('section');
    sectionMain.className = 'section-main'

    const sectionMainTitle = document.createElement('div');
    sectionMainTitle.className = 'section-main-title';
    sectionMainTitle.innerHTML = `
        <div class="section-inner">
            <div class="section-main-title-wrapper">FEATURED PRODUCTS</div>
        </div>
    `;

    const sectionMainProducts = document.createElement('div');
    sectionMainProducts.className = 'section-main-products';
    const sectionInner = document.createElement('div');
    sectionInner.className = 'section-inner';
    const sectionMainProductsWrapper = document.createElement('div');
    sectionMainProductsWrapper.className = 'section-main-products-wrapper';




    sectionMain.appendChild(sectionMainTitle);
    sectionMain.appendChild(sectionMainProducts)
    sectionInner.appendChild(sectionMainProductsWrapper)
    sectionMainProducts.appendChild(sectionInner);


    WRAPPER.appendChild(sectionMain);
    productsArrayMap();

}



