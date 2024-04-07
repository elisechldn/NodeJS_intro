const name = "Lilith";
const age = 27;
const passions = ['yoga', 'cuisine', 'lecture'];

function displayPassions() {
    console.log(`My passions are :`);
    for (let i = 0; i < passions.length; i += 1) {
      console.log(`- ${passions[i]}`);
    }
}

module.exports = {
    name: name,
    age: age,
    displayPassions: displayPassions,
};