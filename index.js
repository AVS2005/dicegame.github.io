var RandomNo1 = Math.floor(Math.random() * 6) + 1;
var RandomDiceImage = "dice" + RandomNo1 + ".png";
var RandomImageSource = "images/" + RandomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", RandomImageSource);

var RandomNo2 = Math.floor(Math.random() * 6) + 1;
var RandomImageSource2 = "images/dice" + RandomNo2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", RandomImageSource2);

if (RandomNo1 > RandomNo2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (RandomNo2 > RandomNo1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
