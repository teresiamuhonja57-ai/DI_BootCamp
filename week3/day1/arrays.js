let people = ["Greg", "Mary", "Devon", "James"];

// Remove Greg
people.shift();

// Replace James with Jason
people[people.indexOf("James")] = "Jason";

// Add your name to the end
people.push("Teresia");

// Log Mary's index
console.log(people.indexOf("Mary"));

// Copy array without Mary and your name
let copy = people.slice(1, 3);
console.log(copy);

// Index of Foo
console.log(people.indexOf("Foo")); // -1 because Foo is not in the array

// Last element
let last = people[people.length - 1];
console.log(last);

// 1. Iterate and log all
for (let person of people) {
    console.log(person);
}

// 2. Exit after "Devon"
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}

exercise2
const colors = ["Blue", "Red", "Green", "Purple", "Black"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    let suffix = suffixes[i] || "th";
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}

exercise3
let num;
do {
    num = prompt("Please enter a number:");
    num = Number(num); // Convert string to number
} while (isNaN(num) || num < 10);
 
exercise4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: { firstFloor: 3, secondFloor: 4, thirdFloor: 9, fourthFloor: 2 },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];

if (sarahRent + davidRent > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

exercise5
const family = { father: "John", mother: "Jane", son: "Jack" };

for (let key in family) {
    console.log(key); // keys
}

for (let key in family) {
    console.log(family[key]); // values
}

exercise6
const details = { my: 'name', is: 'Rudolf', the: 'reindeer' };
let sentence = "";

for (let key in details) {
    sentence += `${key} ${details[key]} `;
}
console.log(sentence.trim());

exercise7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let acronym = "";

// Get first letters
for (let name of names) {
    acronym += name[0];
}

// Sort alphabetically and log
console.log(acronym.split("").sort().join("")); // "ABJKPS"



