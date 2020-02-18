import { PRODUCTS_ARRAY } from '../productsArray.js'
import { createProducts } from '../createProducts.js'

export const productsArrayMap = () => {
    PRODUCTS_ARRAY.map(createProducts);
}