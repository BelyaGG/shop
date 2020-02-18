import { createDOMBasket } from '../createDOMBasket.js';

const WRAPPER = document.getElementById('wrapper');


export const createHeader = () => { 
    const sectionHeader = document.createElement('section');
    sectionHeader.className = 'section-header'
    sectionHeader.id = 'section'
    
    const headerTop = document.createElement('div');
    headerTop.className = 'section-header-top ';
    headerTop.innerHTML = `
        <div class="section-inner">
            <div class="section-top-wrapper">
                <div class="section-top-logo">Aditi</div>
                <div class="section-top-imgs">
                    <div class="section-top-imgs-wrapper">
                        <img class="section-top-img-basket" src="img/basket.png" alt="">
                        <div class="basket-length"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    sectionHeader.appendChild(headerTop);


    const headerBottom = document.createElement('div');
    headerBottom.className = 'section-header-bottom';
    headerBottom.innerHTML = `  
        <div class="section-inner">
            <div class="section-header-bottom-wrapper">
                <nav>
                    <ul class="section-header-bottom-nav">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">SALE</a></li>
                        <li><a href="#">SHOES</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    `;

    sectionHeader.appendChild(headerBottom);
    WRAPPER.appendChild(sectionHeader);

    const basket = document.querySelector('.section-top-img-basket')
    basket.addEventListener('click', createDOMBasket);

}