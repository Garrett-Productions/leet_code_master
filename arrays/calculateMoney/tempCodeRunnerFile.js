function totalMoney(n){
    let sum = 0
    let deposit = 1
    let mondayDeposit = 1
    
    for (let i = 1; i <= n; i++){
        sum+=deposit 
        deposit++
        if (i % 7 === 0){
            mondayDeposit++;
            deposit = mondayDeposit
        }
    }
    console.log("My sum of money at the end of", n, "day is", sum)
    return sum;
}

totalMoney(n=10)