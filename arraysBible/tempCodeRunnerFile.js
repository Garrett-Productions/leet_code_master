function insertValue(array, index, value){
// we need to compare the length of the array with index,  
// if i is > index, set the next position equal to the current position
// and take in the param index as an arguyement to my array and set it = to the value 
        for(let i = array.length-1; i >= index; i--){ // starting we have i as 4
            console.log("array is", array,"iterator is", i)
            // when i becomes equal to or greater than the index, we need to set the next position of i equal to the current one
            array[i+1] =array[i]
    }// when its less than, we ll set the value
    array[index] = value
    return array
}

// at the 4th index of this array insert the value 11
console.log(insertValue([1,2,5,6,10], 4, 11))