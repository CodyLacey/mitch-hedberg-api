
let quote = document.getElementById('quote')
function getQuote() {
    fetch('https://mitch-hedberg-api.herokuapp.com')
    .then(res => res.json())
    .then(data => {quote.innerHTML = data.quote.quote});
}
getQuote()
document.getElementById('refresh').addEventListener('click', () => getQuote())

let codeBlock = {

    'javascript' : `fetch('https://mitch-hedberg-api.herokuapp.com')<br/>
                    .then(res => res.json())<br/>
                    .then(data => console.log(data.quote.quote);`
}

document.getElementById('code').innerHTML = codeBlock.javascript

faqStatus = false;
document.getElementById('faq').addEventListener('click', () => {
    let faqSection = document.getElementById('faqSection');
    if (!faqStatus) {
        faqSection.style.height = '300px';
        faqStatus = true;
    } else {
        faqSection.style.height = '0px';
        faqStatus = false;
    }
});