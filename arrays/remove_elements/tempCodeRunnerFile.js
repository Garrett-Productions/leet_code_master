var removeElement = function(nums, val) {
    let valsToReturn = 0
    for (let i = 0; i< nums.length; i++){
        if(nums[i] !== val){ // if the current position does not equal value then increase our index
            nums[valsToReturn] = nums[i];
            valsToReturn++
        }
    }
    return valsToReturn
};
console.log(removeElement(nums = [0,1,2,2,3,0,4,2], val = 2))