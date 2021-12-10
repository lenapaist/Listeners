const inputText = document.querySelector("#text");
const button = document.querySelector("#btn");
const square = document.querySelector("#square");
const eBtn = document.querySelector("#e_btn");
const range = document.querySelector("#range");
const circle = document.querySelector("#circle");
const rangeSpan = document.querySelector("#range-span");

button.onclick = function () {
    square.style.backgroundColor = inputText.value;
};

eBtn.style.display = "none";

const eventRange = function (event) {
    circle.setAttribute(
        "style",
        `height: ${event.currentTarget.value}%; width: ${event.currentTarget.value}%`,
    );
    rangeSpan.textContent = event.currentTarget.value;
};

range.addEventListener("input", eventRange);
range.addEventListener("change", eventRange);
