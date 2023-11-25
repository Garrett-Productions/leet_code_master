function twoNums(array, target){
    let map = new Map();
    for(i = 0; i < array.length; i++){ 
        let numOne = array[i];
        let numTwo = target - numOne
        if(map.has(numTwo)){
            console.log("This is i, and numOne:", i, "-", numOne, "This is numTwo:", numTwo, "this is the target", target)
            return [i, map.get(numTwo)]
        }
        map.set(numOne,i)
    }
}
console.log(twoNums(array=[4,6,10,54,77], target = 60))