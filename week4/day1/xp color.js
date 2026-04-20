constcolors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Display choice
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// 2. Check for Violet
const isVioletPresent = colors.some((color) => color === "Violet");
console.log(isVioletPresent ? "Yeah" : "No...");

//exersice2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, i) => {
    let increment = i + 1;
    // Using ternary: if increment is 1, 2, or 3 use specific ordinal, else use "th"
    let suffix = (increment >= 1 && increment <= 3) ? ordinal[increment] : ordinal[0];
    console.log(`${increment}${suffix} choice is ${color}.`);
});
//exercise4
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// 1. Welcome message
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);

// 2. Filter Full Stack Residents
const residents = users.filter(user => user.role === 'Full Stack Resident');

// 3. Bonus: Chain filter and map
const residentLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);

    //exercise5
    const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, currentValue) => {
    return `${accumulator} ${currentValue}`;
});

console.log(combinedString); 
// Output: "a long time ago in a galaxy far far away"

//exercise6
const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];

// 1. Filter passed students
const passedStudents = students.filter(student => student.isPassed);

// 2. Bonus: Chain filter and forEach
students
    .filter(student => student.isPassed)
    .forEach(student => {
        console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
    });

    //exercise7
