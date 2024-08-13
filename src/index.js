function generateFuture(event) {
    event.preventDefault();

    new Typewriter ("#love", {
        strings: ["Love horoscope"],
        autoStart: true,
        delay: 2,
        cursor: "",
        loop: false,
        deleteSpeed: Infinity,
    });

     new Typewriter ("#money", {
        strings: ["Money horoscope"],
        autoStart: true,
        delay: 2,
        cursor: "",
        loop: false,
        deleteSpeed: Infinity,
    });

     new Typewriter ("#health", {
        strings: ["Health horoscope"],
        autoStart: true,
        delay: 2,
        cursor: "",
        loop: false,
        deleteSpeed: Infinity,
    });

     new Typewriter ("#destiny", {
        strings: ["Destiny horoscope"],
        autoStart: true,
        delay: 2,
        cursor: "",
        loop: false,
        deleteSpeed: Infinity,
    });

}


    let loveElement = document.querySelector("#love");
    loveElement.innerHTML = `Open your heart; love is just around the corner!`;
    let moneyElement = document.querySelector("#money");
    moneyElement.innerHTML = `Fortune favors the bold—seize your opportunity!`;
        let healthElement = document.querySelector("#health");
    healthElement.innerHTML = `Rejuvenation is on the horizon!`;
        let destinyElement = document.querySelector("#destiny");
    destinyElement.innerHTML = `Your path is unfolding; trust the signs ahead!`;

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateFuture);

