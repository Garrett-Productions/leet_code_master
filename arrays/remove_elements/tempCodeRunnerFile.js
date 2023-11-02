function removeNums(nums, val){

    counterToReturn = 0
    for(let i = 0;i <=nums.length;i++){
        if(nums[i] !== val)
        console.log(i)
        counterToReturn++
    }
    // console.log(counterToReturn)
}
removeNums(nums = [0,1,2,2,3,0,4,2], val = 2)