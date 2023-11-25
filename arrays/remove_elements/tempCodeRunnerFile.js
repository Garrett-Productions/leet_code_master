function removeTheVal(array, val){
    counter = 0
    for(let i=0; i <= array.length-1; i++){
        if(array[i]!= val){
            counter++
        }
        console.log(counter)
    }
}
removeTheVal(nums = [0,1,2,2,3,0,4,2], val = 2)