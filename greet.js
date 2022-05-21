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
    // var nowYr = Number(year);

    var yrBorn = year - ageNum;

    //console.log(typeof yrBorn);
    //var yrBorn = Math.floor(nowYr - ageNum) + 1;
    //alert("You were born in " + yrBorn + "!");
}

greeting();
