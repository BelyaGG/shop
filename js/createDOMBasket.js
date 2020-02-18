import { BASKET_ARRAY } from './basketArra.js';
import { createFooterDOM } from './dom/DOMfooter.js';

const ROOT = document.getElementById('root');

export const createDOMBasket = () => {
    
    ROOT.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'container';
    
    const row = document.createElement('div');
    row.className = 'row';

    const col = document.createElement('div');
    col.className = 'col-md-4 order-md-2 mb-4';
    col.innerHTML = `
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Товары в корзины:</span>
            <span class="badge badge-secondary badge-pill">${BASKET_ARRAY.length}</span>
        </h4>
        <ul class="list-group mb-3">

            <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong class="totalSum"></strong>
            </li>
        </ul>
    `

    const colTwo = document.createElement('div');
    colTwo.className = 'col-md-8 order-md-1';
    colTwo.innerHTML = `
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" novalidate="">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                    <div class="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                    <div class="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="email">Email <span class="text-muted">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com">
                <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div class="mb-3">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
                <div class="invalid-feedback">
                    Please enter your shipping address.
                </div>
            </div>

            <div class="mb-3">
                <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
            </div>

            <div class="row">
                <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select class="custom-select d-block w-100" id="country" required="">
                        <option value="">Choose...</option>
                        <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid country.
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select class="custom-select d-block w-100" id="state" required="">
                        <option value="">Choose...</option>
                        <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                        Please provide a valid state.
                    </div>
                </div>
            </div>
            <hr class="mb-4">
            <hr class="mb-4">

            <h4 class="mb-3">Payment</h4>
            <div class="d-block my-3">
                <div class="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                    <label class="custom-control-label" for="credit">Credit card</label>
                </div>
                <div class="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                    <label class="custom-control-label" for="debit">Debit card</label>
                </div>
                <div class="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">
                    <label class="custom-control-label" for="paypal">PayPal</label>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                    <small class="text-muted">Full name as displayed on card</small>
                    <div class="invalid-feedback">
                        Name on card is required
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                    <div class="invalid-feedback">
                        Credit card number is required
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                    <div class="invalid-feedback">
                        Expiration date required
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="cc-cvv">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                    <div class="invalid-feedback">
                        Security code required
                    </div>
                </div>
            </div>
            <hr class="mb-4">
            <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
        </form>
    `

    row.appendChild(col);
    row.appendChild(colTwo);
    container.appendChild(row);
    ROOT.appendChild(container);

    mapBasketArray();
    mapSizeArr();
    totalSum();
}

const mapBasketArray = () => {
    BASKET_ARRAY.map(productInBasket)
}

const productInBasket = ({ title,brend,money,chosenSize,size },index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between lh-condensed';
    li.innerHTML = `
        <div class="allInform">
            <h6 class="my-0">${title}  <span class="lengthChosenSize">x${chosenSize.length}</span></h6>
            <small class="text-muted">${brend}</small>
            <div class="chosenSize_basket" data-id-div-size="${index+1}">Size: ${chosenSize}</div> 
            <div class="noSizeDiv" style="color: red;">Размер не выбран</div>
        </div>
        <div class="container_money">
            <span class="text-muted moneyProduct">$${money*chosenSize.length}</span>
            <span class="text-money">For one $${money} </span>
        </div>
    `




    document.querySelector('.list-group').append(li);

    noSelectedSize(chosenSize,size,index);

}

const noSelectedSize = (chosenSize,size,index) => {
    if (chosenSize.length == 0) {
        const sizeBasket = document.querySelectorAll('.chosenSize_basket')[index];
        const formSize = document.createElement('form');
        formSize.className = "sizeFromBasker";
        formSize.dataset.idFormSize = index+1;
        size.map( (el) => {
            const inputSize = document.createElement('input');
            inputSize.type = 'checkbox';
            inputSize.className = 'checkInputSize'
            inputSize.name = 'size';
            inputSize.value = `${el}`;
    
            const labelSize = document.createElement('label');
            labelSize.for = `${el}`;
            labelSize.innerHTML = `${el}`;
    
            formSize.appendChild(inputSize);
            formSize.appendChild(labelSize);
        })
        sizeBasket.appendChild(formSize)
    }
    
}


const mapSizeArr = () => {
    const allDivSize = document.getElementsByClassName('chosenSize_basket');
    const arr = [...allDivSize];
    arr.map((el,index) => {
        el.addEventListener('click', () => clickSizeActive(index));
    })
}

const clickSizeActive = (index) => {
    if (document.querySelectorAll('.noSizeDiv')[index]) {
        document.querySelectorAll('.noSizeDiv')[index].style.display = "none";
    }
    if (event.target.tagName == 'DIV') {
        if (event.target.childNodes.length > 1){
            const allInputForm = event.target.getElementsByClassName("checkInputSize");
            let arr = [...allInputForm];
            let arrCheckSize = []
            arr.map( (el) => {
                if (el.checked){
                    arrCheckSize.unshift(el.value)
                }
            })
            if(arrCheckSize.length == 0){
                document.querySelectorAll('.noSizeDiv')[index].style.display = "block";
            }else {
                BASKET_ARRAY[event.target.dataset.idDivSize-1].chosenSize = arrCheckSize;
                event.target.innerHTML = `Size: ${BASKET_ARRAY[event.target.dataset.idDivSize-1].chosenSize}`;
                console.log(document.querySelectorAll('.moneyProduct'));
                console.log (BASKET_ARRAY[index].money);
                console.log(BASKET_ARRAY[index].chosenSize);

                document.querySelectorAll('.moneyProduct')[index].innerHTML = `$${BASKET_ARRAY[index].money * BASKET_ARRAY[index].chosenSize.length}`
                document.querySelectorAll('.lengthChosenSize')[index].innerHTML = `x${BASKET_ARRAY[index].chosenSize.length}`;

            }
        }else {
            console.log('Размер выбран')
            const sizeBasket = document.querySelectorAll('.chosenSize_basket')[index];
            sizeBasket.innerHTML = 'Size: ';
            const formSize = document.createElement('form');
            formSize.className = "sizeFromBasker";
            formSize.dataset.idFormSize = index+1;
            BASKET_ARRAY[index].size.map( (el) => {
                const inputSize = document.createElement('input');
                inputSize.type = 'checkbox';
                inputSize.className = 'checkInputSize'
                inputSize.name = 'size';
                inputSize.value = `${el}`;
        
                const labelSize = document.createElement('label');
                labelSize.for = `${el}`;
                labelSize.innerHTML = `${el}`;
        
                formSize.appendChild(inputSize);
                formSize.appendChild(labelSize);
            })
            sizeBasket.appendChild(formSize)
        }
    }

}

const totalSum = () => {

    const liTotalSum = document.createElement('li');
    liTotalSum.className = "list-group-item d-flex justify-content-between";
    liTotalSum.innerHTML = `
        <span>Total (USD)</span>
        <strong class="totalSum"></strong>
    `;
    document.querySelector('.list-group').appendChild(liTotalSum);

    const all = document.querySelectorAll('.moneyProduct')
    let arr = [...all]
    arr.map( (el) => {
        console.log( parseInt(el.innerHTML))
    })
    document.querySelectorAll('.totalSum').innerHTML = ``
}
  
