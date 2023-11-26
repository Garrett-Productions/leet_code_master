// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

//How to solve 
// 1. if its an array of ints and we need to increase the number, we can turn the array into an int,
//  add 1, turn it back into an array and return it.
//Example

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

// simply apply the toString() method on the given array
// To convert a string to an integer parseInt(), 

function plusOne(digits){
    intOfArray = digits.toString()
    console.log(intOfArray)
}

plusOne([1,2,3])
//Output: [1,2,4]