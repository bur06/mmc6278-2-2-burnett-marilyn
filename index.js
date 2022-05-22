// Your code here
function greet() {
    var userName = prompt("What is your name?");
    alert("Hello, " + userName + "!");
    var userAge = prompt("How old are you?");

    var ageNum = parseInt(userAge); //turns string into integer
    confirm("Have you had a birthday yet this year?");

    var today = parseInt(new Date().getFullYear());
    var nowYr = Math.floor(today - userAge);

    if (confirm) {
        alert("You were born in " + nowYr + "!");
    } else {
        alert("You were born in " + (nowYr + 1) + "!");
    }

}

greet();