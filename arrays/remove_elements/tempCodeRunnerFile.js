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