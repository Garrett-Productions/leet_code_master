// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// binary search, with two pointers, making comparisons
//The Math.floor() method rounds a number DOWN to the nearest integer.

var searchInsert = function(nums, target){
    let left = 0;;
    let right = nums.length - 1;

    while(left <= right){
        let mid = left + Math.floor((right-left)/2);// mid = 0 + (3-0)/2 which = 1 so 0 + 1
        console.log("mid is here ", mid)

        if(nums[mid] === target){ //if 1 = 5 return 1
            return mid;
        }
        if(nums[mid] > target){ // if 1 is greater than 5 then reset right to be 0 or 1 in this situation
            right = mid -1;
            console.log("right is here",right)
        } else { // else if 1 is equal to or less than 5 then set left equal to 2 or 1 + 1
            left = mid +1;
            console.log("left is here",left)
        }
        console.log(left)
    }
    return left;
}

console.log(searchInsert(nums = [1,3,5,6], target = 5))
console.log(searchInsert(nums = [1,3,5,6], target = 2))


// Given an array and a value
// return the index of the array if the value is found
// if not return the index of where it'd be in sorted order]
function searchInsertPosition(array, value){

    let leftPoint = 0 
    let rightPoint = array.length - 1

    while (leftPoint <= rightPoint ){
        let mid = leftPoint + Math.floor((rightPoint-leftPoint)/2); // 1
        // 1st iteration, leftPoint = 0, rightPoint = 3, mid = 1, when mid = value return mid
        // after 1st iteration, going back through, while 2 <= 3 set mid = 2 + 0 = 2, now mid is 0
        console.log("Mid is here: ", mid)
        //if checks
        if(array[mid] === value){
            return mid
        }
        if (array[mid] > value){
            rightPoint = mid - 1
            console.log("Right is here:", rightPoint)
        } else {
            leftPoint = mid +1 // left point will be 2 on 1st iteration, because its 1 + 1
            console.log("left is here", leftPoint)
        }
        console.log("inserting", value,  "at position", leftPoint)
    }
    return leftPoint;
}
console.log(searchInsertPosition(array = [1,3,5,6], value = 2))