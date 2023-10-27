// Given an array, index, and additional value, 
// ​insert the value into the array a​t the given index. 
// Do this without using built-in array methods. 
// You can think of ​PushFront(arr,val)​ as equivalent to InsertAt(arr,0,val)​.

function insertAt(arr, index, val) {
    // Shift elements to the right to make space for the new value
    for (let i = arr.length-1; i >= index; i--) { //  let i have a starting value of the # of vals in our array & subtract if true
        console.log(i) 
        arr[i + 1] = arr[i]; // when true, shift values, or replace values, with making the next value equal to the current position
    } //[0,1,2,3]
    //     in   i
    //When i is not less than, Insert the val being passed in at the specified index, at the place its suppose to be
    arr[index] = val;
    
    // Return the modified array
    return arr;
}
// Example usage
let originalArray = [1, 2, 3, 4, 5];
let insertIndex = 2;
let insertValue = 10;
let modifiedArray = insertAt(originalArray, insertIndex, insertValue);
console.log(modifiedArray);
// In this solution, the insertAt function takes an array (arr), an index (index), and a value (val) as parameters. 
// It loops through the array from right to left, shifting elements to the right starting from the specified index. 
// This creates space for the new value. Then, it inserts the new value at the specified index. 
// The time complexity of this solution is O(n) because in the worst case, it needs to shift n elements to the right. 
// The space complexity is O(1) because the operation is performed in-place, without using additional data structures that grow with the input size.

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



// Given an array, index, and additional value, 
// ​insert the value into the array a​t the given index. 
// Do this without using built-in array methods. 
// You can think of ​PushFront(arr,val)​ as equivalent to InsertAt(arr,0,val)​.
function insertVal(array, index, value){
    for(let i = array.length - 1; i >= index; i--){
        console.log(1)
        //when this is true, i being greater than index, shift values in array
        array[i+1]= array[i] // set the next position equal to the current position
    }// when this isnt true, when i is less than the index, well insert the value into the array
    array[index] = value;
    return array;
}

console.log(insertVal([1,2,5,6,10], 4, 11)) // 11 needs to go between 6 & 10 in ther 4th index, because as long as 5 is greater than 4, we run the code
// we can start at the last position of the array, and loop backward, 
//as long as i is greater than the index then shift my indixes, else, set the index of the array equal to the value