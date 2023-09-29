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

var twoSum =  function(nums, target) {
    let map = new Map();
    for (let i = 0; i <nums.length; i++){
        let num1 = nums[i];
        let num2 = target - num1;
        if (map.has(num2)) {
            return [i, map.get(num2)];
        }
        map.set(num1, i)
    }
};

console.log(twoSum(nums = [3,2,4], target = 6))

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
        hashMap.set(num1, i)
    }
};