function greeting() {
    var userName = prompt("Hello! What is your name?");
    var inputAge =  (" What is your age?");

    if (userName) {
        prompt("Hi, " + userName + "! " + inputAge);
    } else {
        prompt("Hi!" + inputAge);
    }

    var ageInt = parseInt(inputAge);
    if(!inputAge) return; //cancels without input
    var yrBorn = Math.floor(2022 - ageInt);
    alert("You were born in " + yrBorn + "!");
}

greeting()


function rollDice() {
    var inputString = prompt("How many sides does the dice have?");
    var inputNum = parseInt(inputString);
    if(!inputNum) return;
    var rollNum = Math.floor(Math.random() * inputNum) + 1;
    alert("Your roll is " + rollNum);
    var rollAgain = confirm("Would like to roll again?");

    if (rollAgain) {
        return rollDice();
    }
}