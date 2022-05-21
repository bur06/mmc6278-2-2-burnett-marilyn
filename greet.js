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
    var nowYr = parseInt(today.getFullYear());

    console.log(nowYr);

    //var yrBorn = (nowYr - ageNum);
    //console.log(yrBorn);
    //alert("You were born in " + yrBorn + "!");
}

greeting();
