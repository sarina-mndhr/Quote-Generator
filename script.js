const quotes = {
  science: ["Everything is theoretically imposssible until it is done.", "The science of today is the technology of tomorrow.", "The distance between insanity and genius is measured only by success.", "Science never solves a problem without creating ten more.", "Research is what I am doing when I do not know what I am doing."],
  inspiration: ["When you have a dream, you have got to grab it and never leave it.", "Nothing is impossible. The word itself says 'I'm possible!'", "Life has got all those twists and turns. You've got to hold on tight and off you go.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "You define your own life. Don't let other people write your script."],
  gratitude: ["Live a life full of humility, gratitude, intellectual curiosity, and never stop learning.", "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.'", "Gratitude is riches. Complaint is poverty.", "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.", "No duty is more urgent than giving thanks."],
};

let currentCategory = "";
let currentQuoteIndex = 0;
let darkMode = false;
let fontSize = 16;

const quoteElement = document.getElementById("quote");
const categoryElement = document.getElementById("category");
const themeSwitchElement = document.getElementById("theme-switch");
const prevButton = document.querySelector(".controls button:nth-child(1)");
const nextButton = document.querySelector(".controls button:nth-child(2)");
const randomButton = document.querySelector(".controls button:nth-child(3)");

function updateQuote() {
  if (currentCategory && quotes[currentCategory]) {
    quoteElement.innerText = quotes[currentCategory][currentQuoteIndex];
  } else {
    quoteElement.innerText = "Loading...";
  }
}

function changeCategory() {
  currentCategory = categoryElement.value;
  currentQuoteIndex = 0;
  updateQuote();
  // Disable navigation buttons when "Select Category" is chosen
  updateButtonStatus();
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
  updateQuote();
}

function prevQuote() {
  currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
  updateQuote();
}

function randomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  updateQuote();
}

function increaseFontSize() {
  fontSize += 2;
  quoteElement.style.fontSize = `${fontSize}px`;
}

function decreaseFontSize() {
  fontSize = Math.max(10, fontSize - 2);
  quoteElement.style.fontSize = `${fontSize}px`;
}

function updateButtonStatus() {
  // Disable/enable navigation buttons based on category selection
  const isSelectCategory = currentCategory === "";
  prevButton.disabled = isSelectCategory;
  nextButton.disabled = isSelectCategory;
  randomButton.disabled = isSelectCategory;
}

// Initial setup
updateQuote();
updateButtonStatus();
