let total = 0;

function handleClickCard(target) {
    const cardItemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = cardItemName;
    const selectedItem = document.getElementById('selected-item');
    selectedItem.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(price);
    const totalPrice = total.toFixed(2);
    document.getElementById('total').innerText = totalPrice;

    // purchase button

    const btn = document.getElementById('total').innerText;
    const disableBtn = document.getElementById('make-purchase');
    if (btn > 0) {
        disableBtn.removeAttribute('disabled');
    }
    else {
        disableBtn.setAttribute('disabled', true);
    }

    // apply button

    const btnApply = document.getElementById('total').innerText;
    const disableApplyBtn = document.getElementById('disable-apply-btn');
    if (btnApply >= 200) {
        disableApplyBtn.removeAttribute('disabled');
    }
    else {
        disableApplyBtn.setAttribute('disabled', true);
    }
}


// promo code

document.getElementById('disable-apply-btn').addEventListener('click', function () {
    const promoId = document.getElementById('promo-id').value
    if (promoId !== 'SELL200') {
        alert('Promo id is not valid')
        return;
    }
    const discountPrice = document.getElementById('total');
    const totalPrice = discountPrice.innerText
    const price = totalPrice * 0.2;
    const discount = document.getElementById('discount');
    discount.innerText = price.toFixed(2);
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = (totalPrice - price).toFixed(2);
})

// go to home

document.getElementById('home-btn').addEventListener('click', function () {

    const discountPrice = document.getElementById('total');
    discountPrice.innerText = 0;


    const discount = document.getElementById('discount');
    discount.innerText = 0;

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = 0;

    const li = document.getElementById('selected-item');
    li.innerText = '';

    document.getElementById('promo-id').value = ''

    document.getElementById('disable-apply-btn').setAttribute('disabled', true);

    document.getElementById('make-purchase').setAttribute('disabled', true);

    total = 0;

})