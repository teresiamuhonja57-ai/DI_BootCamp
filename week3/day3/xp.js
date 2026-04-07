const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays

// 1. Remove "Greg"
people.shift();

// 2. Replace "James" with "Jason"
// After shift, James is at index 2 (Mary is 0, Devon is 1)
people[2] = "Jason";

// 3. Add your name to the end
people.push("Gemini");

// 4. Console.log Mary's index
console.log(people.indexOf("Mary")); // Output: 0

// 5. Copy using slice (Excluding "Mary" and "Gemini")
// Current array: ["Mary", "Devon", "Jason", "Gemini"]
// We want ["Devon", "Jason"]
const newPeople = people.slice(1, 3);

// 6. Index of "Foo"
console.log(people.indexOf("Foo")); 
// It returns -1 because "Foo" does not exist in the array.

// 7. Variable 'last'
let last = people[people.length - 1];

// Part II - Loops

// 1. Iterate through the array
for (let person of people) {
    console.log(person);
}

// 2. Iterate and exit after "Devon"
for (let person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}
const colors = ["blue", "green", "purple", "black", "silver"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}
let number;

// A 'do...while' loop is perfect here because we want to ask at least once.
do {
    let userInput = prompt("Please enter a number:");
    number = Number(userInput); // Convert string to number
} while (isNaN(number) || number < 10);

console.log("Success! Your number is 10 or greater.");

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 2. Number of floors
console.log(building.numberOfFloors);

// 3. Apartments on floor 1 and 3
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// 4. Second tenant (Dan) and his rooms
const secondTenant = building.nameOfTenants[1];
console.log(`${secondTenant} has ${building.numberOfRoomsAndRent.dan[0]} rooms.`);

// 5. Rent Check
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if ((sarahRent + davidRent) > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

const family = {
    lastName: "Smith",
    members: 4,
    location: "New York"
};

// Log Keys
for (let key in family) {
    console.log(key);
}

// Log Values
for (let key in family) {
    console.log(family[key]);
}
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

let sentence = "";
for (let key in details) {
    sentence += `${key} ${details[key]} `;
}
console.log(sentence.trim());

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1. Get first letters, 2. Sort them, 3. Join into a string
const acronym = names
    .map(name => name[0])
    .sort()
    .join("");

console.log(acronym); // Output: "ABJKPS"


