var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generates random number from 1 to 6 for left dice
var randomImageForLeftDice = "images/dice" + randomNumber1 + ".png"; // this generates the img src file path for the random number for left dice
document.querySelector(".img1").setAttribute("src", randomImageForLeftDice); //this uses the query selectpr for img1 class sets the attribute for src to the random number image depending on the random number generated above for left dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // generates random number from 1 to 6 for right dice
var randomImageForRightDice = "images/dice" + randomNumber2 + ".png"; // this generates the img src file path for the random number for right dice
document.querySelector(".img2").setAttribute("src", randomImageForRightDice); //this uses the query selectpr for img1 class sets the attribute for src to the random number image depending on the random number generated above for right dice

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
}

else {
  document.querySelector("h1").innerHTML = "Its a Draw!!!";
}
