$(document).ready(function(){

  var cashAmount = 100;
  
  $('form').submit(function(event){
      
    var betAmount = $('#amount').val();
    var guess = $('#guess_number').val();
    var answer = Math.floor(Math.random() * 10 + 1);

    if (answer == guess){
      cashAmount += parseInt(betAmount);
      $('#correct_or_incorrect').text("correct");
    } else if (answer != guess + 1 && answer != guess - 1){
      cashAmount -= betAmount;
      $('#correct_or_incorrect').text("incorrect");
    } else {
      $('#correct_or_incorrect').text("close but not the right answer");
    }

    $('#winning').text(cashAmount);
    $('#correct_answer').text(answer);

    // document.getElementById('winning').innerHTML = cashAmount;
    // document.getElementById('tomato').innerHTML = guess;
    //prevents page from doing default action: refresh
    if (event){
      event.preventDefault();
    }


    if (cashAmount < 0){
      alert("You lose-ha!");
      location.reload();
    };

  });


});





        // alert("You are one off from the answer, so you won't lose any money You have: $" + cashAmount);
        // alert("You win, you now have: $" + cashAmount);
    // console.log("You lost");
// //check if cashAmount is less than 0

// function checkCash(cashAmount){
//   if (cashAmount <= 0){
//     return false;
//     console.log("Sorry you lost, better luck next time!")
//   };
// };

// function bet(){
//   while(cashAmount > 0){
//     var betAmount = prompt ("How much do you want to bet?");
//     var guess = prompt("Guess what the number is.");
//   }
// }


// bet(); 