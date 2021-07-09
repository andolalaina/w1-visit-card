var card = document.querySelector("div.card");
var clickTip = document.querySelector("div.tip");

function flipCard() {
    card.classList.toggle('flipped');
    clearTimeout(showTipProcess);
}

function showTip() {
    showTipProcess = setTimeout(handler => {
        clickTip.classList.toggle('show')
    }, 2000);
}

card.addEventListener('click', event => flipCard());
window.addEventListener('load', event => showTip());