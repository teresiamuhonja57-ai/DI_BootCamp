function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is less than or equal to 10`);
        } else {
            reject(`${num} is greater than 10`);
        }
    });
}

// Test cases
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error)); // Output: 15 is greater than 10

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error)); // Output: 8 is less than or equal to 10
  //exercise2
  const promiseInFourSeconds = new Promise((resolve) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

// To test it:
promiseInFourSeconds.then(console.log);
//exercise3// Promise that resolves with value 3
const resolvePromise = Promise.resolve(3);
resolvePromise.then(console.log);

// Promise that rejects with "Boo!"
const rejectPromise = Promise.reject("Boo!");
rejectPromise.catch(console.log);

