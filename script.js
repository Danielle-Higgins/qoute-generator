const quoteElement = document.querySelector(".quote")
const personElement = document.querySelector(".person")
const newQuote = document.querySelector("button")

const generator = [
    {
        qoute: "\"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\"",
        person: "oprah winfrey"
    },
    {
        qoute: "\"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.\"",
        person: "maya angelou"
    },
    {
        qoute: "\"Remember that no matter how cool you think you may be, you're not cool enough to look down on anyone...ever.\"",
        person: "paul walker"
    },
    {
        qoute: "\"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.\"",
        person: "nelson mandela"
    },
    {
        qoute: "\"Our lives begin to end the day we become silent about things that matter.\"",
        person: "martin luther king"
    },
    {
        qoute: "\"It's not the years in your life that count. It's the life in your years.\"",
        person: "abraham lincoln"
    },
    {
        qoute: "\"If you hear a voice within you say \"you cannot paint,\" then by all means paint and that voice will be silenced.\"",
        person: "vincent van gogh"
    },
    {
        qoute: "\"Everyone thinks of changing the world, but no one thinks of changing himself.\"",
        person: "lev tolstoy"
    },
    {
        qoute: "\"Strive not to be a success, but rather to be of value.\"",
        person: "albert einstein"
    },
    {
        qoute: "\"Keep your face always torward the sunshine - and shadows will fall behind you.\"",
        person: "walt whitman"
    }
]

newQuote.addEventListener("click", () => {
    // randomly generate the index of a quote and a person (object)
    let random = Math.floor(Math.random() * generator.length)
    //console.log(random)

    // assign the text content of the quote element to be that random quote
    quoteElement.textContent = generator[random].qoute

    // assign the text content of the person element to be that random person
    personElement.textContent = generator[random].person
})