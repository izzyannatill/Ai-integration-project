function getHoroscope(response) {

    new Typewriter ("#see-future", {
        strings: response.data.answer,
        autoStart: true,
        delay: 0.5,
        cursor: "",
        loop: false,
        deleteSpeed: Infinity,
    });
}

function generateFuture (event) {
event.preventDefault();
let changeClass = document.querySelector(".main");
        changeClass.classList.add("main-edit");
let seeFuture = document.querySelector("#see-future");
seeFuture.innerHTML = `<div class="generating"><strong>🔮Oracle Ai🔮 is looking into her crystal ball - your future is becoming clear...</strong></div>`
let userInput = document.querySelector("#future-form");
let apiKey = "35f5fdatd61eb8d900b80389439e49o7";
let context = "You are a psychic and can read a person's fortune! You focus on positives and avoid anything morbid or scary. You use mystical and enchanting words, keeping your fortunes only a couple sentences long at most."
let prompt = `Generate a mystical yet grounded horoscope based on the birthdate of ${userInput.value}. The horoscope should be divided into four <h2> elements (🖤 Love 🖤, 💰 Money 💰, 🍎 Health 🍎, and ✨ Destiny ✨) with <p> content of three concise sentences below each heading. Mention the user's star sign based on the birthdate entered, ensuring that each section is relevant to its heading. The tone should be similar to the following example: "Between now and August 28, you might rethink your wellness regimen or revisit a project that’s been languishing on the shelf. Be patient with crossed wires on the job and give coworkers the benefit of the doubt for now. With proactive Mars enjoying a rare meetup with enthused Jupiter in Gemini and your domestic quarters today, you might be excited to tackle a household project, but only proceed if there’s an airtight plan in place."`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(getHoroscope);
}


let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateFuture);

