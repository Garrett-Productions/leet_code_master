function removeDupees(nums){
    counter = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i]!= nums[i+1]){
            nums[counter] = nums[i]
            console.log('Counter is' + counter + ' this is array ' + nums)
            counter++
        }
        console.log(counter)
    }
    return counter
}
removeDupees(nums = [0,0,1,1,1,2,2,3,3,4])