// Variables needed: 
// --output variable, or sum, which is total amount of $
// --deposit variable for incrementing during a loop
// --ifMonday variable

// N is our amount of days 

// -----Ways to solve:
// loop through n, or the amount of days.
// during our loop add the deposit to our total amount var
// conditional, if it's monday,(modulus?), incrememnt ifMonday var by 1
// also if its monday, set the deposit amount to newMon

function totalMoney(n){
    let sum = 0
    let deposit = 1
    let ifMonday = 1
    
    for (let i = 1; i <= n; i++){
        sum+=deposit 
        deposit++
        if (i % 7 === 0){
            ifMonday++;
            deposit = ifMonday
        }
    }
    return output;
}

