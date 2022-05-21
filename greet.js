function greeting() {
    var userName = prompt("Hello! What is your name?");
    var inputAge =  (" What is your age?");

    if (userName) {
        prompt("Hi, " + userName + "! " + inputAge);
    } else {
        prompt("Hi!" + inputAge);
    }

    if(!inputAge) return; //cancels without input
    var ageNum = parseInt(inputAge);
    console.log(typeof ageNum);
//    var today = new Date();
  //  var nowYr = (today.getFullYear());

    //var yrBorn = nowYr - ageInt;
    //console.log(yrBorn);
    //alert("You were born in " + yrBorn + "!");
}

greeting();
