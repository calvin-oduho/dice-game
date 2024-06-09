var button = document.querySelector(".btn");
button.addEventListener("click", rollDice);


/* 
A function that simulates the rolling of two dice It gives an outcome based on the 
score of both players. Incase they have a similar score, it gives a draw outcome. 
*/
function rollDice() {
    randomNumber1 = Math.floor( Math.random() * 5 );
    var images = [
      "./images/dice1.png",
      "./images/dice2.png",
      "./images/dice3.png",
      "./images/dice4.png",
      "./images/dice5.png",
      "./images/dice6.png",
    ];
    document.querySelector(".img1").setAttribute( "src", images[randomNumber1] );

    randomNumber2 = Math.floor(Math.random() * 5);
    var images = [
      "./images/dice1.png",
      "./images/dice2.png",
      "./images/dice3.png",
      "./images/dice4.png",
      "./images/dice5.png",
      "./images/dice6.png",
    ];
    document.querySelector(".img2").setAttribute( "src", images[randomNumber2] );

    if ( randomNumber1 < randomNumber2 ) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
    } 
    else if ( randomNumber1 > randomNumber2 ) {
      document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
    } 
    else {
      document.querySelector("h1").innerHTML = "&#128681 Draw! &#128681";
    }
}// End of rollDice