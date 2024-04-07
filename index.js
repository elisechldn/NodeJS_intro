const userInformation = require('./userInformation');
console.log(`Hi, my name is ${userInformation.name} and I'm ${userInformation.age} years old`);
userInformation.displayPassions();

const cowsay = require("cowsay");

const information = require('./information');
console.log(cowsay.say({
    text: "Hello I have studied at " +
information.school + " and I was studying " + information.campus,
    e : "oO",
    T : "U "}));