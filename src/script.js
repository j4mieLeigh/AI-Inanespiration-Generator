function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer.toUpperCase(),
    autoStart: true,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "5do93bc0b836c98t67cd86dfeaa4ff3f";
  let context =
    "You are an AI assistant with an extensive catalog of motivational quotes.";
  let prompt = `Please provide a short, cliche motivational quote (no more than 25 words) about ${userInput.value}. Do not include quotation marks.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.innerHTML = `<div class = "blink">Generating an inane-spirational quote about ${userInput.value}...</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let formElement = document.querySelector("#quote-generator-form");
formElement.addEventListener("submit", generateQuote);
