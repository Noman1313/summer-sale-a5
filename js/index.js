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


