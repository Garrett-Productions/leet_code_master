// Given an integer array nums and an integer val, 
// remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, 
// to get accepted, you need to do the following things:

// easy algo, if the value being passed in doesnt equal the value at the arrays index, then increase our counter, else do nothing, return counter
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
// console.log(removeElement(nums = [0,1,2,2,3,0,4,2], val = 2))
// console.log(removeElement(nums = [7,8,7,9,9,9,], val = 9))
// console.log(removeElement(nums = [7,8,7,9,9,9,], val = 9))
//
// Given an integer array nums and an integer val, 
// remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.

var removeVal = function(array,val){
    uniqueVals = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] !== val){
            array[uniqueVals]= array[i];// we replace it if they arent the same
            uniqueVals++
        }
    }
    return uniqueVals
};

console.log(removeVal(nums = [7,8,7,9,9,9,], val = 9))

var removeCertainVal = function(arr,value){
    let firstCounter = 0 
    for (let secondCounter = firstCounter; secondCounter < arr.length; secondCounter++){
        if(nums[secondCounter] != value){ //if they're different
            nums[firstCounter] = nums[secondCounter] // set the position of firstCounter in the array, equal to the value of the nums[secondCounter]
            firstCounter++ //then increase our let variables
        }
    }
    return firstCounter
}
console.log(removeCertainVal(nums = [7,8,7,9,9,9,], val = 9))
console.log(removeCertainVal(nums = [0,1,2,2,3,0,4,2], val = 2))


// Given an integer array nums and an integer val, 
// remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.


function remove(numsArray, value){
    // if value !== the value in the array increase counter
    //what do we need to return, num of elements in numsArray that arent equal to value
    // vars needed = counter, increasing every time the value in ther array doesnt equal the value in comparison
    counter = 0
    for(let i = 0; i <= numsArray.length-1; i++){
        // console.log(i)
        if(numsArray[i]!== value)
        counter++
    
    }
    console.log(counter)
    return counter
}

remove(nums = [0,1,2,2,3,0,4,2], val = 2)


// Given an integer array nums and an integer val, 
// remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.

remove(nums = [0,1,2,2,3,0,4,2], val = 2)