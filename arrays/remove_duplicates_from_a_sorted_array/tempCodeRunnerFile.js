function removeDuplicados(nums){
    counter = 0; // to return, we can incrase every time a num is unique
    for(i = 0; i < nums.length; i++){ // i = 0, if 0 < 10 increase i to 1 and so on
        if(nums[i] == nums[i+1]){
            console.log("this is my counter", counter, "this is i ", i, "this is my array ", nums)
            nums[counter] = nums[i] // set my counter to i, i is 0 so counter is 0
            counter++
            console.log(counter)
        }
    }
    return counter
}
removeDuplicados(nums = [0,0,1,1,1,2,2,3,3,4])