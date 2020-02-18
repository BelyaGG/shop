import { mainDOM } from './dom/mainDOM.js';
import {isUserRegistered} from './utils/isUserRegistered.js'


export const addFormSubmitEvent = () => {
    const form = document.forms[0];
    form.addEventListener("submit", function(e){
        e.preventDefault()
        const [inputEmail, inputPassword, checkbox] = form.elements;


        if (isUserRegistered()){
            const registeredEmail = localStorage.getItem('email');
            const registeredPassword = localStorage.getItem('password');
            if ( 
                registeredEmail === inputEmail.value && 
                registeredPassword === inputPassword.value
            ) {
                alert ("Успешно вошли");
                document.querySelector('.form-signin').style.display = 'none';
                mainDOM();
            } else {
                const notification = document.querySelector('#notification');
                notification.innerHTML = 'Не верный логин или пароль';
                notification.style.color = 'red';
            }



        }else {
            localStorage.setItem("email", inputEmail.value);
            localStorage.setItem("password", inputPassword.value);
            if (checkbox.checked){
                localStorage.setItem("isValidationRequired", false);
            }
            alert ( 'ПОЗДРАВЛЯЕМ! ВЫ УСПЕШНО ЗАРЕГИСТРИРОВАНЫ В СИСТЕМЕ!') ;
            document.querySelector('.form-signin').style.display = 'none';
            mainDOM();
        }
    });
};