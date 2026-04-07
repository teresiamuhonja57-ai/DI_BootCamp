// 1. Create the sentence variable
let sentence = "The movie is not that bad, I like it";

// 2. Find the position of the word "not"
let wordNot = sentence.indexOf("not");

// 3. Find the position of the word "bad"
let wordBad = sentence.indexOf("bad");

// 4. Check the positions and replace if necessary
// We check if "not" exists ( > -1), if "bad" exists ( > -1),
// and if "bad" comes after "not" (wordBad > wordNot)
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    
    // We want to replace everything from the start of "not" 
    // to the end of "bad" (wordBad + 3 because "bad" is 3 letters long)
    const beforeNot = sentence.slice(0, wordNot);
    const afterBad = sentence.slice(wordBad + 3);
    
    console.log(beforeNot + "good" + afterBad);
    
} else {
    // If the conditions aren't met, log the original sentence
    console.log(sentence);
}