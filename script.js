var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

setGradient()

function setGradient(c1, c2){
    console.log(c1, c2);
    var col1 = c1 ? c1 : color1.value;
    console.log(col1);
    var col2 = c2 ? c2 : color2.value;
    body.style.background = "linear-gradient(to right, " + col1 + ", " + col2 + ")";

    css.textContent = body.style.background + ";";
}

function rndColorGenerate(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function rndColor() {
    c1 = getRandomColor();
    c2 = getRandomColor();
    setGradient(c1, c2);
    color1.value = c1;
    color2.value = c2;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

color1.addEventListener("input", () => setGradient());

color2.addEventListener("input", () => setGradient());

btn.addEventListener("click", rndColor);
