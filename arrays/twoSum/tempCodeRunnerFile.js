function twoNumbers(nums, target){
    let map = new Map();
    for(let i = 0;i <nums.length; i++){
        let num1 = nums[i];
        let num2 = target - num1;
        if (map.has(num2)){
            console.log(map.get(num2))
            return [i, map.get(num2)];
        }
        map.set(num1, i)
    }
}
console.log(twoNumbers(nums=[4,6,10,54,77], target = 60))