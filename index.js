// Your code here
function greet() {
    var userName = prompt("What is your name?");
    alert("Hello, " + userName + "!");
    var userAge = prompt("How old are you?");

    var ageNum = parseInt(userAge); //turns string into integer
    confirm("Have you had a birthday yet this year?");

    var today = new Date();
    var nowYr = parseInt(today.getFullYear());

}