import { createHeader } from './DOMheader.js';
import { createSliderDOM } from './DOMslider.js';
import { createProductsDOM } from './DOMproducts.js';
import { createFooterDOM } from './DOMfooter.js';

export const mainDOM = () => {
    createHeader();
    createSliderDOM();
    createProductsDOM();
    createFooterDOM();
}

