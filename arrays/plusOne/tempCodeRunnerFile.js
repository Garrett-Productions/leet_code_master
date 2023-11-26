function increaseOne(digits){
    for(let i = digits.length -1; i>= 0; i--){
        console.log(digits.length)
        console.log(i)
        if(digits[i]!== 9){
            digits[i]++
            return digits
        } else {
            digits[i]= 0 
        }
    }
    digits.unshift(1)
    return digits
}
increaseOne([1,2,3])