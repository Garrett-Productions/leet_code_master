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

var twoSum = function(array, target){
    //lets use map fucntion to store our seen ints and then make comparison checks to our map
    let map = new Map();
    for (let i = 0; i <= array.length; i++){
        num1 = array[i]; //first iteration let num1 equal the first value in our array
        num2 = target - num1; //  now lets find our missing num by doing some easy logic
        //lets use built in map functions to see what has been stored. such as .has, .get, and .set
        if(map.has(num2)) {
            return [i, map.get(num2)];
        }
        map.set(num1, i ) //set map to 1st iteration
    }
};
console.log(twoSum(array = [3,2,4], target = 6))