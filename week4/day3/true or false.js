function allTruthy(...args) {
    return args.every(element => Boolean(element));
}

// Testing the examples:
console.log(allTruthy(true, true, true));      // ➞ true
console.log(allTruthy(true, false, true));     // ➞ false
console.log(allTruthy(5, 4, 3, 2, 1, 0));      // ➞ false
const allTruthy = (...args) => args.every(Boolean);