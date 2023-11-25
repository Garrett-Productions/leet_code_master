function insertAt(array, index, value){
    for (let i = array.length - 1; i >= index; i--){ // i is 5, as long as i greaterthan or = to 4, run the code and subtract i by 1
    // when this is true, we set the next position equal to the current position, aka, shift values
        array[i+1] = array[i] //shift
        console.log(array[i])
    }
    //when i less than index, use index as a param of array 
    array[index] = value // 4 
    console.log("array", array, "value is: ", value)
    return array
}
console.log(insertAt([1,2,5,6,10], 4, 11))