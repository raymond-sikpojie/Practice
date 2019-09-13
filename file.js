const lastLine = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");

function colorChange(e) {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    lastLine.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);
    