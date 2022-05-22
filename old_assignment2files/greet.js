function greeting() {
    var userName = prompt("Hello! What is your name?");
    var inputAge =  (" What is your age?");

    if (userName) {
        prompt("Hi, " + userName + "! " + inputAge);
    } else {
        prompt("Hi!" + inputAge);
    }

    if(!inputAge) return; //cancels without input
    var ageNum = parseInt(inputAge); //turns string into integer
    var today = new Date();
    var year = parseInt(today.getFullYear());
    var nowYr = parseInt(year);
    let yrBorn = nowYr - ageNum;

    alert("You were born in " + yrBorn + "!");
}

greeting();