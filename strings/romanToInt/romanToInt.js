// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Roman numerals are usually written largest to smallest from left to right. 
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:


// Day 1 
var romeToInt = function(string) {
    const romanMap = { // we are comparing the romanmap values against our string, if the left value is less than the right value then subtract, else add
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let result = 0;
    string.split('').forEach((num,i) => {
        // if the first num is less than the 2nd num then subtract it
        if(romanMap[num] < romanMap[string[i+1]]) 
            result -= romanMap[num];
        else result += romanMap[num];
    });
    return result
}
console.log(romeToInt("MCMXCIV"))
console.log(romeToInt("III"))
console.log(romeToInt("LVIII"))


// Example 1

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 2


// Input: s = "III"
// Output: 3
// Explanation: III = 3.



// leet code version 
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    romanMap = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let result = 0;
    s.split('').forEach((num,i) => {
        if (romanMap[num] < romanMap[s[i+1]])
            result -= romanMap[num];
        else result += romanMap[num]
    });
    return result
};

console.log(romanToInt('III'))

//Roman to Int warmup
var romanNumToInt = function(string){
    romanMap = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let result = 0
    string.split('').forEach((number,i) => {
        if (romanMap[number] < romanMap[string[i+1]])
            result -= romanMap[number];
        else result += romanMap[number]
    });
    return result
}
console.log(romeToInt("MCMXCIV"))
console.log(romeToInt("III"))
console.log(romeToInt("LVIII"))