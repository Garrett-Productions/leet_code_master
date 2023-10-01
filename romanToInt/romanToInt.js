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

var romeToInt = function(string) {
    const romanMap = {
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
        if(romanMap[num] < romanMap[string[i+1]]) result -= romanMap[num];
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
