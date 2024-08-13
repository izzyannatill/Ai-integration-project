function getHoroscope(response) {

    new Typewriter ("#see-future", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
        loop: false,
        deleteSpeed: Infinity,
    });
}

function generateFuture (event) {
event.preventDefault();
let changeClass = document.querySelector(".main");
        changeClass.classList.add("main-edit");
let userInput = document.querySelector("#future-form");
let apiKey = "35f5fdatd61eb8d900b80389439e49o7";
let context = "You are a psychic and can read a person's fortune! You focus on positives and avoid anything morbid or scary. You use mystical and enchanting words, keeping your fortunes only a couple sentences long at most."
let prompt = `please provide a horoscope to describe the readers love, money, destiny, and health fortune based on their birthdate, (${userInput.value}) and star sign. Use the <h2>s of 🖤 Love 🖤, 💰 Money 💰, 🍎 Health 🍎, and ✨ Destiny ✨, with a couple sentences underneath each <h2> element relating to the relevant fortune. Make the answer mystical but not over the top. It needs to be easily understandable and applicable to life and their star sign.`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(getHoroscope);
}


let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateFuture);

