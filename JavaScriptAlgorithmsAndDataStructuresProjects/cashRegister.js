function checkCashRegister(price, cash, cid) {
  var change;

  var valueOfChange = cash - price;
  // var valueOfChange = 163.42;
  var intPart = parseInt(valueOfChange);
  var floatPart = Math.round((valueOfChange - intPart) * 100);

  console.log(Math.round(floatPart));

  
  console.log(valueOfChange + " --Change to give--");

  if(floatPart !== 0){
    while(floatPart > 0){    
          
      if(floatPart % 25 === 0) {console.log("quarter"); floatPart -= 25;continue;} 
    
      if(floatPart % 10 === 0) {console.log("dime"); floatPart -= 10; continue;}
    
      if(floatPart % 5 === 0) {console.log("nickel"); floatPart -= 5; continue;}
    
      if(floatPart % 1 === 0) {console.log("penny"); floatPart -= 1;continue;}  
    
      else console.log("bullshit"); floatPart = 0; continue;
    
      }

  }


  if(intPart !==0){
    while(intPart > 0){    

      if(intPart % 100 === 0) {console.log("one hundrend"); intPart -= 100; continue;}
    
      if(intPart % 20 === 0) {console.log("twenty"); intPart -= 20;continue;} 
    
      if(intPart % 10 === 0) {console.log("ten"); intPart -= 10; continue;}
    
      if(intPart % 5 === 0) {console.log("five"); intPart -= 5; continue;}
    
      if(intPart % 1 === 0) {console.log("dollar"); intPart -= 1;continue;}
    
      // else console.log("bullshit"); intPart = 0; continue;
    
      }

  }

  

  console.log(intPart + "." + floatPart);

  var cashDrawler =[[]];
  cashDrawler = cid.reverse(); //give first bigger coins for change
  // console.log(cashDrawler + " --Change Drawler--");
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