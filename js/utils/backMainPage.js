const WRAPPER = document.getElementById('wrapper');

export const backMainPage = () => {
    document.querySelector('.product_wrapper').remove();
    WRAPPER.style.display = 'block';
}