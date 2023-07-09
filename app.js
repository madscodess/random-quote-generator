
//Pick out HTML elements 
const button = document.querySelector('button');
const quote = document.querySelector('#quote');
const authorName = document.querySelector('#authorName');


//on click get quotes from API
button.addEventListener('click', async function(e) {
    e.preventDefault();
    //get quotes from API
    const res =  await axios.get('https://api.quotable.io/quotes/random');

    //create new p element and add the quote from API in there
    quote.innerHTML = (` " ${res.data[0].content} " `);
    quote.style.display = 'flex';

     //update author name to be visible with API value
    authorName.innerHTML = (`- ${res.data[0].author}`);
    authorName.style.display = 'flex';
})

