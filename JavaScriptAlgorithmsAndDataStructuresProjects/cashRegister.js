function checkCashRegister(price, cash, cid) {
  var change;

  var cashDrawler =[[]];
  cashDrawler = cid.reverse(); //give first bigger coins for change
  var sumOfMoney = 0;
  cashDrawler.forEach((slot, amm) => {
    // console.log(slot);
    // console.log(amm);
    sumOfMoney += slot[1];
  });
  console.log("initial drawler changes " +sumOfMoney);
  console.log(cashDrawler + " --Change Drawler--");

  //We will work with coins
  cashDrawler[0][1] = Math.round(cashDrawler[0][1]/100);
  cashDrawler[1][1] = Math.round(cashDrawler[1][1]/20);
  cashDrawler[2][1] = Math.round(cashDrawler[2][1]/10);
  cashDrawler[3][1] = Math.round(cashDrawler[3][1]/5);
  cashDrawler[4][1] = Math.round(cashDrawler[4][1]/1);
  cashDrawler[5][1] = Math.round(cashDrawler[5][1]/0.25);
  cashDrawler[6][1] = Math.round(cashDrawler[6][1]/0.1);
  cashDrawler[7][1] = Math.round(cashDrawler[7][1]/0.05);
  cashDrawler[8][1] = Math.round(cashDrawler[8][1]/0.01);

  // console.log(cashDrawler[0][0]);

  var valueOfChange = cash - price;
  // var valueOfChange = 163.42;
  var intPart = parseInt(valueOfChange); 
  var floatPart = Math.round((valueOfChange - intPart) * 100);

  // console.log(Math.round(floatPart)); //Math.round() to solve the decimal problem.

  
  console.log(valueOfChange + " --Change to give--");

  
  


  

  console.log(intPart + "." + floatPart);

  
  console.log(cashDrawler + " --Change Drawler--");
  sumOfMoney = 0;
  cashDrawler.forEach((slot, amm) => {
    // console.log(slot);
    // console.log(amm);
    sumOfMoney += slot[1];
  });
  console.log('final change drawler '+sumOfMoney);
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]


// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return an object.

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 335, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.