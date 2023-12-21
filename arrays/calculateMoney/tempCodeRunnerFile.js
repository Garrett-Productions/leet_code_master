function totalMoney(n){
    let totalAmount = 0
    let deposit = 1
    let mondayDeposit = 1
    for (let i = 1; i <= n; i++){
        console.log(i)
        totalAmount+=deposit 
        console.log("first deposit",deposit)
        deposit++
        if (i % 7 === 0){
            mondayDeposit++;
            deposit = mondayDeposit
            console.log("after 2nd monday deposit", deposit)
        }
    }
    console.log("My total amount of money at the end of", n, "day is", totalAmount)
    return totalAmount;
}
totalMoney(n=10)