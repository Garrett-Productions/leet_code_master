var twoSum =  function(array, target) {
    let map = new Map();
    // we use a hashmap to store what we've seen so far and later recall if we've seen that number
    for (let i = 0; i <array.length; i++){
        let num1 = array[i]; // 1st iteration: let num1 equal 3
        let num2 = target - num1; // 1st iteration: let num2 equal 6(target) minus 3(num1)
        if (map.has(num2)) { //if map has 3, 1st iteration it doesnt
            return [i, map.get(num2)]; // return indice of i, and 3, within an array
        }
        map.set(num1, i) //  if not, set map to (3, 0 )
    }
};
console.log(twoSum(nums = [3,4,2], target = 6))