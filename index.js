// Your code here
function greet() {
    var userName = prompt("What is your name?");
    alert("Hello, " + userName + "!");
    var userAge = prompt("How old are you?");

    var ageNum = parseInt(userAge); //turns string into integer
    confirm("Have you had a birthday yet this year?");

    var today = parseInt(new Date().getFullYear());
    var nowYr = Math.floor(today - userAge);
    var nextYr = Math.round((today - userAge) + 1);

    if (confirm) {
        alert("You were born in " + nowYr + "!");
    } else {
        alert("You were born in " + nextYr + "!");
    }

}

greeting();


var rollNum = Math.floor(Math.random() * inputNum) + 1;
alert("Your roll is " + rollNum);