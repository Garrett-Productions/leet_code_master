function insertVal(array, index, value){
    for(let i = array.length - 1; i >= index; i--){
        console.log(1)
        //when this is true, i being greater than index, shift values in array
        array[i+1]= array[i] // set the next position equal to the current position
    }// when this isnt true, when i is less than the index, well insert the value into the array
    array[index] = value;
    return array;
}

console.log(insertVal([1,2,5,6,10], 4, 11))