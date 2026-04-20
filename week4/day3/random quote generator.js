let quotes = [
    { id: 0, author: "Franklin D. Roosevelt", quote: "The only limit to our realization of tomorrow is our doubts of today.", likes: 0 },
    { id: 1, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
    { id: 2, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", likes: 0 }
];

let lastQuoteIndex = null; // To prevent showing the same quote twice
function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex && quotes.length > 1);
    
    lastQuoteIndex = randomIndex;
    displayQuote(quotes[randomIndex]);
}
function addQuote(author, text) {
    const newQuote = {
        id: quotes.length, // Simple ID assignment
        author: author,
        quote: text,
        likes: 0
    };
    quotes.push(newQuote);
}
let filteredQuotes = [];
let filteredIndex = 0;

function filterByAuthor(authorName) {
    filteredQuotes = quotes.filter(q => q.author.toLowerCase() === authorName.toLowerCase());
    filteredIndex = 0;
    if (filteredQuotes.length > 0) displayQuote(filteredQuotes[0]);
}

// Logic for Previous/Next buttons
function navigate(direction) {
    filteredIndex += direction;
    // Add bounds checking to keep index within filteredQuotes.length
    displayQuote(filteredQuotes[filteredIndex]);
}
