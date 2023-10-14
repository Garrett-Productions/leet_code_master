// next up is Valid Parenthesis..

// As if you were a senior software engineer in Javascript at Apple, solve this algorithm with best case time complexity in mind..

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s) {
    const stack = [];
    const openBrackets = '({[';
    const closeBrackets = ')}]';
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i];
        if (openBrackets.includes(currentBracket)) {
            stack.push(currentBracket);
        } else if (closeBrackets.includes(currentBracket)) {
            const topOfStack = stack.pop();
            if (topOfStack !== bracketMap[currentBracket]) {
                return false; // Invalid, mismatched brackets
            }
        } else {
            return false; // Invalid character in the input
        }
    }

    return stack.length === 0; // If stack is empty, all brackets are matched
}

// Example usage
const inputString = '({[]})';
const isValidString = isValid(inputString);
console.log(isValidString); // Output: true