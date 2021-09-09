
let quote = document.getElementById('quote')
function getQuote() {
    fetch('https://mitch-hedberg-api.herokuapp.com')
    .then(res => res.json())
    .then(data => {quote.innerHTML = data.quote.quote});
}
getQuote()
document.getElementById('refresh').addEventListener('click', () => getQuote())