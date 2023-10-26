// Given an array, index, and additional value, 
// ​insert the value into the array a​t the given index. 
// Do this without using built-in array methods. 
// You can think of ​PushFront(arr,val)​ as equivalent to InsertAt(arr,0,val)​.

function insertAt(arr, index, val) {
    // Shift elements to the right to make space for the new value
    for (let i = arr.length-1; i >= index; i--) { //  let i have a starting value of the # of vals in our array & subtract if true
        console.log(i) 
        arr[i + 1] = arr[i]; // 1st iteration, at the starting position + 1 equal the 
    }
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





