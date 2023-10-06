// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]


// Day 1

var twoSum =  function(array, target) {
    let map = new Map();
    // we use a hashmap to store what we've seen so far and later recall if we've seen that number
    for (let i = 0; i <array.length; i++){
        let num1 = array[i]; // 1st iteration: let num1 equal 3
        let num2 = target - num1; // 1st iteration: let num2 equal 6(target) minus 3(num1)
        if (map.has(num2)) { //if map has 3, 1st iteration it doesnt
            return [i, map.get(num2)]; // return indice of i, and 3, within an array
        }
        map.set(num1, i) //  if not, set map to (3, 0 )
    }
};
console.log(twoSum(nums = [3,2,4], target = 6))



// Day 2 
var two = function(nums, target) {
    let hMap = new Map();
    for (let i = 0; i <nums.length; i++){
        let firstNum = nums[i];
        let secondNum = target - firstNum;
        if (hMap.has(secondNum)){
            return [i, hMap.get(secondNum)];
        }
        hMap.set(firstNum,i)
    }
};
console.log(two(nums=[4,2,3], target = 6))

var two_sum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i <nums.length; i++){
        let num_one = nums[i]; // num 1 = 4 on first iteration
        let num_two = target - num_one; // num 2 = 6 -4 = 2 // we find the num we need straight away and keep looping until we find that num in our array
        if (map.has(num_two)){ // if our map has seen the number 2.. if it has the num we are looking for
            return [i, map.get(num_two)]; // then return the position its at, i, and the number itself
        }
        map.set(num_one,i) // else if it doesnt, set our map = to the num one variable at the position so it can look again
    }
};
console.log(two(nums=[4,6,10,47,50,90], target = 60))










//what I did on LeetCode
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = new Map();
    for (let i = 0; i <nums.length; i++){
        let num1 = nums[i];
        let num2 = target - num1;
        if (hashMap.has(num2)){
            return [i, hashMap.get(num2)];
        }
        // if we havent seen it then we can just set it equal the current number that we are at and the index of that num
        hashMap.set(num1, i)
    }
};

//let hashMap = new Map()
//takes in 2 params
// map.has, map.get, map.set