// Your code here
function greet() {
    var userName = prompt("What is your name?");
    alert("Hello, " + userName + "!");
    var userAge = prompt("How old are you?");

    var ageNum = parseInt(userAge); //turns string into integer
    confirm("Have you had a birthday yet this year?");

    var today = new Date().getFullYear();
    var birthYr = Math.floor(today - ageNum);
    var nextYr = birthYr + 1;

    if (confirm) {
        alert("You were born in " + birthYr + "!");
    } else {
        alert("You were born in " + nextYr + "!");
    }
}

greet();