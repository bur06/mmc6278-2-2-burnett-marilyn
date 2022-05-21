function greeting() {
    var userName = prompt("Hello! What is your name?");
    var inputAge =  (" What is your age?");

    if (userName) {
        prompt("Hi, " + userName + "! " + inputAge);
    } else {
        prompt("Hi!" + inputAge);
    }
    if(!inputAge) return;
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