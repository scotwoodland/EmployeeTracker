//randomly selects facts from facts.js
let h1Quotes = $("#h1Quotes");

function getRandomFacts() {
    h1Quotes.empty();
    let randomChoices = [];
    for(i = 0; i < 5; i++) {
        let randomChoice = Math.floor(Math.random() * disneyQuotes.length);
        while(randomChoices.includes(randomChoice)) {

            randomChoice = Math.floor(Math.random() * disneyQuotes.length);
        }
        randomChoices.push(randomChoice);
        h1Quotes.append($(disneyQuotes[randomChoice]));
    }
    console.log(h1Quotes);
    h1Quotes.append(h1Quotes);
};