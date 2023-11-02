// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. 
// Then return the number of unique elements in nums.

//Example 1 

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function(nums){
    let uniqueNums = 1 // we know the first number will be unqiue because of no comparisons
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] !== nums[i+1]){ // if theese numbers arent the same..
            // uniqueNums = nums[i+1] // // this handles removing indices in place, by replacing the value in the position of i with the value in the position of i + 1, so it moves value down an indice in the array, keeping it in place
            uniqueNums++
        }
    }
    return uniqueNums
};
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
console.log("Unique nums are:", removeDuplicates(nums = [0,0,1,1,1,2,2,3,3,4]))

var removeDupe = function(arr){
    let counter = 0 
    for (let i = 0; i < arr.length; i++){
        if(arr[i] != arr[i+1]) { // if the numbers are different
            arr[counter] = arr[i] // set the value of of counter equal to the value at that indice
            console.log('Counter is' + counter + ' this is array ' + arr)
            counter++ // and increase counter
        }
    }
    return counter
}
console.log(removeDupe(nums = [0,0,1,1,1,2,2,3,3,4]))



// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. 
// Then return the number of unique elements in nums.





console.log(removeDupees(nums = [0,0,1,1,1,2,2,3,3,4]))