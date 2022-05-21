function greeting() {
    var userName = prompt("Hello! What is your name?");
    var ageStr =  (" What is your age?");
    var userAge = parseInt(ageStr);

    if (userName) {
        prompt("Hi, " + userName + "!  " + ageStr);
    } else {
        prompt("Hi!" + ageStr);
    }
    if(!ageStr) return;
}

//greeting()