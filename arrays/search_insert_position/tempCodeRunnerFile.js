function searchInsertPosition(array, value){

    let leftPoint = 0 
    let rightPoint = array.length - 1

    while (leftPoint <= rightPoint ){
        let mid = leftPoint + Math.floor((rightPoint-leftPoint)/2); // 1
        console.log("Mid is here: ", mid)
        //if checks
        if(array[mid] === value){
            return mid
        }
        if (array[mid] > value){
            rightPoint = mid - 1
            console.log("Right is here:", rightPoint)
        } else {
            leftPoint = mid +1
            console.log("left is here", leftPoint)
        }
        console.log("inserting", value,  "at position", leftPoint)
    }
    return leftPoint;
}
console.log(searchInsertPosition(array = [1,3,5,6], value = 2))