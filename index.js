// Timer

function autoCountdown () {
    const autoDate = new Date("October 9, 2022, 00:00");
    const now = new Date();
    const diff = autoDate - now; 
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60*60*1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;
    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;
    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;
    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;
    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        newCar();
    }
}

let timerID = setInterval(autoCountdown, 1000);

function newCar() {
    const heading = document.querySelector("h1");
    heading.textContent = "It's time for a new car!"
    heading.classList.add("red");
}

const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
})
// Slide

const items = document.querySelectorAll('.itemss');
items.forEach(itemss => {
    itemss.addEventListener('mouseover', () => {
        removeFocus ()
        itemss.classList.add('selected');
    })
})
removeFocus = () => {
    items.forEach(itemss => {
        itemss.classList.remove('selected')
    })
}

