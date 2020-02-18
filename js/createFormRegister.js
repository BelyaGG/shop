import {createInput} from './utils/createInput.js'
import {isUserRegistered} from './utils/isUserRegistered.js'

const ROOT = document.getElementById('root')

export const createForm = () => {

    const form = document.createElement('form');
    form.className = 'form-signin';

    const logo = document.createElement('div');
    logo.className = 'section-top-logo';
    logo.innerHTML = 'Aditii';

    const h1 = document.createElement('h1');
    h1.className = 'h3 mb-3 font-weight-normal';
    h1.innerHTML = isUserRegistered() ? "Please sign in" : "Please register";

    const emailInput = createInput({
        type: "email",
        id: "inputEmail",
        className: "form-control",
        placeholder: "Email address"
    });


    const passwordInput = createInput({
        type: "password",
        id: "inputPassword",
        className: "form-control",
        placeholder: "Password"
    })

    const div = document.createElement('div');
    div.className = 'checkbox mb-3';
    div.innerHTML = `   
        <label>
            <input type="checkbox" value="remember-me"> Remember me
        </label>
        <div id="notification"> </div>
    `

    const button = document.createElement('button');
    button.className = 'btn btn-lg btn-primary btn-block';
    button.type = 'submit';
    button.innerHTML = 'submit';

    form.appendChild(logo);
    form.appendChild(h1);
    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    form.appendChild(div);
    form.appendChild(button);

    ROOT.appendChild(form)
}