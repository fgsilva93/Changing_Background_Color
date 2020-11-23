document.addEventListener("DOMContentLoaded", function() {

let btn = document.querySelector('button');
let body = document.querySelector('body');
let colors = ["red", "green", "blue", "yellow", "orange", "purple", "brown", "grey", "pink", "cyan", "black", "white"];

body.style.backgroundColor = "teal";

btn.addEventListener("click", function() {
    let selectColor = getRandomColor();
    body.style.backgroundColor = selectColor
});

function getRandomColor() {
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    return randomColor;
}

});