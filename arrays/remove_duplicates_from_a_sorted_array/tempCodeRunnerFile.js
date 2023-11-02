function removeDupees(nums){
    counter = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i]!= nums[i+1]){
            nums[counter] = nums[i]
            counter++
            console.log(counter)
            // if(i==='undefined'){
            //     break
            // }
        }
    }
    return counter
}

console.log(removeDupees(nums = [0,0,1,1,1,2,2,3,3,4]))