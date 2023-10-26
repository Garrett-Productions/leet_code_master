function insertionValue(array, indexToInsert, value){
    // shift values 
    for(i = array.length - 1;i >= indexToInsert; i--){
        console.log(i)
        array[i+1]= array[i]
    }
    array[indexToInsert] = value;
    return array;
}

console.log(insertionValue([1,2,10,4,82,2], 4, 11))