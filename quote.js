let btn = document.querySelector('#new_quote'); 
let quote = document.querySelector('.quote');
let person = document.querySelector('.author');

const quotes = [
    { quote: `"I think therefore I am."`, author: `Rene Descartes` },
    { quote: `"If at first you don’t succeed, try, try again."`, author: `W. E. Hickson` },
    { quote: `"If you want something done right, do it yourself."`, author: `Charles-Guillaume Étienne` },
    { quote: `"Knowledge is power."`, author: `Sir Francis Bacon` }
];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].author;
});
