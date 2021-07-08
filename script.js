var card = document.querySelector("div.card");

function flipCard() {
    card.classList.toggle('flipped');
}

card.addEventListener('click', event => flipCard());