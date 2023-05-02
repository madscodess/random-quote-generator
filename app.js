//create an array with quotes
const quoteItems = [
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt", 
    "There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning. — Jiddu Krishnamurti.",
    "One learns from books and example only that certain things can be done. Actual learning requires that you do those things. — Frank Herbert",
    "Tell me and I forget, teach me and I may remember, involve me and I learn. — Benjamin Franklin",
    "Spoon feeding in the long run teaches us nothing but the shape of the spoon. — E. M. Forster",
    "The beautiful thing about learning is nobody can take it away from you.s — B.B. King",
    "If knowledge is power, then learning is a superpower. — Jim Kwik",

];

//Pick out HTML elements 
const button = document.querySelector('button');
let quote = document.querySelector('p');


function newQuote () {
    updatedQuote = quoteItems[Math.floor(Math.random()*quoteItems.length)];
    quote.innerHTML = updatedQuote;
};

button.addEventListener('click', function() {
    newQuote();
})


