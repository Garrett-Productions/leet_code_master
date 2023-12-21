// Variables needed: 
// --output variable, or total amount, wwhich is what we need to return
// --deposit variable for incrementing during a loop
// --ifMonday variable

// N is our amount of days 

// -----Ways to solve:
// loop through n, or the amount of days.
// during our loop add the deposit to our total amount var
// conditional, if it's monday,(modulus?), incrememnt ifMonday var by 1

// also if its monday, set the deposit amount to newMon

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
