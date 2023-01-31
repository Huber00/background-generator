var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradient(gradient1, gradient2) {
    body.style.background =
    "linear-gradient(to right, "
    + gradient1
    + ", "
    + gradient2
    + ")";
    css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.addEventListener("input", function(){
    var color1Value = color1.value;
    var color2Value = color2.value;
    setGradient(color1Value, color2Value);
});

color2.addEventListener("input", function(){
    var color1Value = color1.value;
    var color2Value = color2.value;
    setGradient(color1Value, color2Value);
});

random.addEventListener("click", function() {
    randomColor1 = getRandomColor();
    randomColor2 = getRandomColor();
    color1.value = randomColor1;
    color2.value = randomColor2;
    setGradient(randomColor1, randomColor2);
});