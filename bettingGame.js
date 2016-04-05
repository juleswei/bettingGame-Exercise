var cashAmount = 10;

//check if cashAmount is less than 0

function checkCash(cashAmount){
  if (cashAmount <= 0){
    return false;
    console.log("Sorry you lost, better luck next time!")
  };
};




function bet(){
  while(cashAmount > 0){
    var betAmount = prompt ("How much do you want to bet?");
    var guess = prompt("Guess what the number is.");
    var answer = Math.floor(Math.random() * 10 + 1);

    if (answer == guess){
      cashAmount += betAmount;
      alert("You win, you now have: $" + cashAmount);
    } else if (answer != guess + 1 && answer != guess - 1){
      cashAmount -= betAmount;
      alert( "You lost, you now have: $" + cashAmount);
    } else {
      alert("You are one off from the answer, so you won't lose any money You have: $" + cashAmount);
    }
  }
    console.log("You lost");
}


bet(); 