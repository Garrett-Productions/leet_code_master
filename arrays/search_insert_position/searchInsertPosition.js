// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// binary search, with two pointers, making comparisons
//The Math.floor() method rounds a number DOWN to the nearest integer.

var searchInsert = function(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mid = left + Math.floor((right-left)/2);

        if(nums[mid] === target){
            return mid;
        }
        if(nums[mid] > target){
            right = mid -1;
        } else {
            left = mid +1;
        }
    }
    return left;
}

console.log(searchInsert(nums = [1,3,5,6], target = 5))
console.log(searchInsert(nums = [1,3,5,6], target = 2))
// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Example 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1