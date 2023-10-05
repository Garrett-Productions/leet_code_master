// Given an integer array nums and an integer val, 
// remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, 
// to get accepted, you need to do the following things:

var removeElement = function(nums, val) {
    let uniqueVals = 0
    for (let i = 0; i< nums.length; i++){
        if(nums[i] !== val){ // if the current position does not equal value then increase our index
            nums[uniqueVals] = nums[i];
            uniqueVals++
        }
    }
    return uniqueVals
};
console.log(removeElement(nums = [0,1,2,2,3,0,4,2], val = 2))
console.log(removeElement(nums = [7,8,7,9,9,9,], val = 9))
console.log(removeElement(nums = [7,8,7,9,9,9,], val = 9))

