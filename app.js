
const kanyeQuote = document.querySelector("#quote");
const button = document.querySelector("#quoteButton");

const getKanyeQuote = async () => {
    const res = await axios.get("https://api.kanye.rest");
    const newQuote = res.data.quote;
    return newQuote;
}

const changeQuote = async () => {
    const quoteText = await getKanyeQuote();
    kanyeQuote.textContent = `"${quoteText}"`;
}

button.addEventListener("click", changeQuote);


// button.addEventListener("mousedown", function () {
//     button.classList.toggle("buttonClick")
// })