// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("document").ready(function(){
  $("#shoot").click(function() {
    let userInput =  $("#input").val();
    let choices = ["rock","paper","scissors"];
    let computerInput = choices[Math.floor(Math.random()*3)];
    // let computerInput = choices[1];
    //let winnerInput = 
    $("#userChoice").text(`${userInput}`);
    $("#computerChoice").text(`${computerInput}`);
//Need to determine the winning cases + display who the winner is. 
//Also need to personalize in CSS
    if (userInput === computerInput) { 
        $("#result").text("It's a tie! Play Again");
    } else if () {

    } else {

    }

  });  
});


