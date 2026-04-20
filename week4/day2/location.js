function displayStudentInfo({first, last}){
    return `Your full name is ${first} ${last}`;
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

//exercise3
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1: Convert to array
const usersArray = Object.entries(users);
// Output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Part 2: Multiply ID by 2
const modifiedUsers = usersArray.map(([user, id]) => [user, id * 2]);
// Output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

//exercise6 part2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;

console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

//part3
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(noise) {
    return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo')); 
// Output: Moooo I'm a cow, named Lily and I'm brown and white
