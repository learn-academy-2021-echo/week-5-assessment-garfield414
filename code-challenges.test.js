// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals");

// const { expect } = require("@jest/globals");

//const { expect } = require("@jest/globals");
//const { describe } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe('convert()', () => {
    it('should return a secret message', () => {
     expect(convert(secretCodeWord1)).toEqual('L4ck4d41s1c4l');
     expect(convert(secretCodeWord2)).toEqual('G0bbl3dyg00k');
     expect(convert(secretCodeWord3)).toEqual('3cc3ntr1c');
   });
});
  

// b) Create the function that makes the test pass.

/**
* Create a key/value pair that correlates a letter to a number
* Normalize the string to be all lowercase so that we can compare it consistently
* Append a character if it's seen within the key/value pair if not, default to the character in the array
* Return the appended secret
*/
const convert = (msg) => {
    const mappings = {'a': '4', 'e': '3', 'i': '1', 'o': '0'};
    const normalized = msg.toLowerCase();
   
    let secret = '';
    for (let i = 0; i < msg.length; i++) {
     secret += mappings[normalized[i]] || msg[i];
    }
   
    return secret;
};

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe('convert()', () => {
    it('should return an array of matches', () => {
     expect(contains(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"]);
     expect(contains(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"]);
   });
});

// b) Create the function that makes the test pass.

/**
* Perform a filter on the array (e.g., haystack)
* If the needle, in this case, character is found within haystack we want to append this to the new array
* Also, account for lowercase and uppercase needles (e.g., "a", "A" should return true when checking the string "Apple")
*/

const contains = (haystack, needle) => {
    return haystack.filter(word => word.includes(needle) || word.includes(needle.toUpperCase()));
};

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe('isFlush()', () => {
    it('should return when given a "winning" hand', () => {
     expect(isFlush(hand1)).toEqual(true);
     expect(isFlush([1, 5, 1, 1, 5])).toEqual(true);
   });

   it('should return false when given a "losing" hand', () => {
     expect(isFlush(hand2)).toEqual(false);
     expect(isFlush(hand3)).toEqual(false);
     expect(isFlush([])).toEqual(false);
   });
});

/**
 * Make an array and collect all the duplicate values
 * If we can capture every number that is a duplicate we can compare it at the end
 * by making sure the count is exactly equal to five, and the values are not equal
 * e.g. ("[3, 4]")
 *
 */
const isFlush = (arr) => {
    const dupes = [];
    let flag = false;

    if (arr.length === 0) return flag;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
          if (arr[i] === arr[j]) {
            dupes.push(arr[i]);
            break;
          }
        }
      }
    }
  
    if (dupes.length === 5) {
      if (new Set(dupes).size === 2) {
        flag = true;
      }
    }
    return flag;
  }

// b) Create the function that makes the test pass.