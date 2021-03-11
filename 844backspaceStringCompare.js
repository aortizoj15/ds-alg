// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example 1
// Input: S = "ab#c", T = "ad#c"
// Output: true

// Example 2
// Input: S = "ab##", T = "c#d#"
// Output: true

// Example 3
// Input: S = "a##c", T = "#a#c"
// Output: true

// Example 4
// Input: S = "a#c", T = "b"
// Output: false

// Brute Force Solution
const backspaceStringCompare = (S, T) => {
  const sArr = [];
  const tArr = [];
  for (let sPointer = 0; sPointer < S.length; sPointer++) {
    if (S[sPointer] === "#") {
      sArr.pop();
    } else {
      sArr.push(S[sPointer]);
    }
  }
  for (let tPointer = 0; tPointer < T.length; tPointer++) {
    if (T[tPointer] === "#") {
      tArr.pop();
    } else {
      tArr.push(T[tPointer]);
    }
  }
  if (sArr.toString() === tArr.toString()) {
    return true;
  } else {
    return false;
  }
};

// Checking Examples
console.log(
  "backspaceStringCompare('ab#c', 'ad#c') should be true, result is: ",
  backspaceStringCompare("ab#c", "ad#c")
); // true

console.log(
  "backspaceStringCompare('ab##', 'c#d#') should be true, result is: ",
  backspaceStringCompare("ab##", "c#d#")
); // true

console.log(
  "backspaceStringCompare('a##c', '#a#c') should be true, result is: ",
  backspaceStringCompare("a##c", "#a#c")
); // true

console.log(
  "backspaceStringCompare('a#c', 'b') should be false, result is: ",
  backspaceStringCompare("a#c", "b")
); // false
