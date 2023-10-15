// next up is Valid Parenthesis..

// As if you were a senior software engineer in Javascript at Apple, solve this algorithm with best case time complexity in mind..

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// with Built ins 
// function isValid(s) {
//     const stack = [];
//     const openBrackets = '({[';
//     const closeBrackets = ')}]';
//     const bracketMap = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };

//     for (let i = 0; i < s.length; i++) {
//         const currentBracket = s[i];
//         if (openBrackets.includes(currentBracket)) {
//             stack.push(currentBracket);
//         } else if (closeBrackets.includes(currentBracket)) {
//             const topOfStack = stack.pop();
//             if (topOfStack !== bracketMap[currentBracket]) {
//                 return false; // Invalid, mismatched brackets
//             }
//         } else {
//             return false; // Invalid character in the input
//         }
//     }

//     return stack.length === 0; // If stack is empty, all brackets are matched
// }

// // Example usage
// const inputString = '({[]})';
// const isValidString = isValid(inputString);
// console.log(isValidString); // Output: true

// without built ins

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(string) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i < string.length; i++) {
        const currentBracket = string[i]; // equals to each char in our string being passed in
        if (currentBracket === '(' || currentBracket === '{' || currentBracket === '[') {
            stack.push(currentBracket); // we use stack to store open values if we see them first
        } else {
            const topOfStack = stack.pop();
             if (topOfStack !== bracketMap[currentBracket]) { // compare it, the closing bracket, to the respective key in bracketMap
                return false; // if the closing bracket doesnt equal one of the keys(which are all closing..) in bracketMap then return false
            }
        }
    }

    return stack.length === 0; // If stack is empty, all brackets are matched
}
// Example usage
const inputString = '({[]})';
const thisString = "()[]{}"
const thatString = "(]"
const isValidString = isValid(inputString);
// const isValidString = isValid(thisString);
// const isValidString = isValid(thatString);
console.log(isValidString); // Output: true