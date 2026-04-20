const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === 'string')) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject("Error: Not all items are strings.");
    }
  });
};

const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Error: Array length is not greater than 4.");
    }
  });
};

// Test 1: ["1", "pear", "banana"] -> Fails sorting (length <= 4)
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Test 2: ["apple", "pear", "banana"] -> Fails sorting (length <= 4)
makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Test 3: Success
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

  //challenge2
  const morse = `{...}`; // Insert the provided JSON string here

const toJs = () => {
    return new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse);
        if (Object.keys(morseJS).length === 0) {
            reject("Error: The object is empty.");
        } else {
            resolve(morseJS);
        }
    });
};

const toMorse = (morseJS) => {
    return new Promise((resolve, reject) => {
        const userInput = prompt("Enter a word or sentence:");
        const chars = userInput.toLowerCase().split("");
        const translation = [];

        for (let char of chars) {
            if (morseJS.hasOwnProperty(char)) {
                translation.push(morseJS[char]);
            } else {
                reject(`Error: Character '${char}' does not exist in Morse database.`);
                return;
            }
        }
        resolve(translation);
    });
};

const joinWords = (morseTranslation) => {
    const result = morseTranslation.join("\n");
    const div = document.createElement("div");
    div.textContent = result;
    document.body.appendChild(div);
};

// Chain the functions
toJs()
    .then(morseJS => toMorse(morseJS))
    .then(translation => joinWords(translation))
    .catch(error => console.error(error));