// Your code here
function greet() {
    var userName = prompt("What is your name?");
    alert("Hello, " + userName + "!");
    var userAge = prompt("How old are you?");

    var ageNum = parseInt(userAge); //turns string into integer
    confirm("Have you had a birthday yet this year?");

    var nowYr = parseInt(new Date().getFullYear());

    if (confirm) {
        alert(nowYr - ageNum);
    } else {
        alert(nowYr - ageNum) + 1;
    }

}

greeting();