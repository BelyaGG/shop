import { SLIDER_ARRAY } from '../sliderArray.js';
import { showFirstSlider } from '../utils/showFirstSlide.js';

const WRAPPER = document.getElementById('wrapper');

export const createSliderDOM = () => {
    const sectionSlider = document.createElement('section');
    sectionSlider.className = 'section-slider-top';
    const sectionInner = document.createElement('div');
    sectionInner.className = 'section-inner slide';
    sectionSlider.appendChild(sectionInner);
    WRAPPER.appendChild(sectionSlider);
    mapArray();
    createEllipseWrapper();
    showFirstSlider();
    showNextSlide();
}

const mapArray = () => {
    SLIDER_ARRAY.map(createSlider);
}


const createSlider = ({ img , title , des, button }, index ) => {
    const sectionWrapper = document.createElement('div');
    sectionWrapper.className = 'section-slider-top-wraper';
    sectionWrapper.style.display = 'none';
    sectionWrapper.dataset.sliderName = index + 1;
    sectionWrapper.innerHTML = `
        <div class="section-slider-top-img">
            <img src="${img}" alt="">
        </div>
        <div class="section-slider-top-titles">
            <div class="section-slider-top-titles-title">${title}</div>
            <div class="section-slider-top-titles-des">${des}</div>
            <div class="section-slider-top-titles-button"> 
                <button>${button}</button>
            </div>
        </div>
    `;




    document.querySelector('.slide').appendChild(sectionWrapper);
}

const createEllipseWrapper = () => {
    const sliderEllipse = document.createElement('div');
    sliderEllipse.className = 'section-slider-top-ellipse';
    document.querySelector('.slide').appendChild(sliderEllipse);
    SLIDER_ARRAY.map(createEllipse)

}

const createEllipse = (none,index) => {
    const img = document.createElement('img');
    img.className = 'eclipseImg';
    img.dataset.id = index + 1;
    img.src = "https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse.png";
    document.querySelector('.section-slider-top-ellipse').appendChild(img)
}

const showNextSlide = () => { 
        let index = 1;
        setInterval(function nextSl() {
            if(index < SLIDER_ARRAY.length){
                document.querySelector(`.section-slider-top-wraper[data-slider-name='${index}']`).style.display = 'none';
                document.querySelector(`.eclipseImg[data-id='${index}']`)
                    .src = 'https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse.png'
                index++;
                document.querySelector(`.section-slider-top-wraper[data-slider-name='${index}']`).style.display = 'flex';
                document.querySelector(`.eclipseImg[data-id='${index}']`)
                    .src = 'https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse1.png'

            } else {
                document.querySelector(`.section-slider-top-wraper[data-slider-name='${index}']`).style.display = 'none';
                document.querySelector(`.eclipseImg[data-id='${index}']`)
                    .src = 'https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse.png'
                index = 1;
                document.querySelector(`.section-slider-top-wraper[data-slider-name='${index}']`).style.display = 'flex';
                document.querySelector(`.eclipseImg[data-id='${index}']`)
                    .src = 'https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse1.png'
            }
        }, 3000);
}
