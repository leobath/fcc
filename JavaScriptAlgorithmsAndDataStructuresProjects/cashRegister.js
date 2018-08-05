function checkCashRegister(price, cash, cid) {
  var change;

  // var valueOfChange = cash - price;
  var valueOfChange = parseFloat(163);
  

  if (valueOfChange % (0.1) == 0){console.log(true);} else console.log(false);
  console.log(valueOfChange + " --Change to give--");

  while(valueOfChange > 0){

    

  if(valueOfChange % 100 === 0) {console.log("one hundrend"); valueOfChange -= 100; continue;}

  if(valueOfChange % 20 === 0) {console.log("twenty"); valueOfChange -= 20;continue;} 

  if(valueOfChange % 10 === 0) {console.log("ten"); valueOfChange -= 10; continue;}

  if(valueOfChange % 5 === 0) {console.log("five"); valueOfChange -= 5; continue;}

  if(valueOfChange % 1 === 0) {console.log("dollar"); valueOfChange -= 1;continue;}

  if(valueOfChange % 0.25 === 0) {console.log("quarter (cash " + valueOfChange+")"); valueOfChange -= 0.25; continue;}

  if(valueOfChange % 0.1 === 0) {console.log("dime"); valueOfChange -= 0.1; continue;}

  if(valueOfChange % 0.05 === 0) {console.log("nickel"); valueOfChange -= 0.05; continue;}

  if(valueOfChange % (0.01 || 0.02 || 0.03 || 0.04) === 0) {console.log("penny"); valueOfChange -= 0.01;continue;}

  else console.log("bullshit"); valueOfChange = 0;

  }

  var cashDrawler =[[]];
  cashDrawler = cid.reverse(); //give first bigger coins for change
  console.log(cashDrawler + " --Change Drawler--");
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

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.