function romanToInt(string){
    romanMap = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let result = 0
    string.split('').forEach((num, i)=> {
        console.log(num)
        if(romanMap[num] < romanMap[string[i+1]]) // if current position is less than next subtract it
            result -= romanMap[num];
        else result += romanMap[num]
    });
    return result
}

console.log(romanToInt("MCMXCIV"))