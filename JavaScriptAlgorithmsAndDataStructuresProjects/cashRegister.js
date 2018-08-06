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
  console.log("initial ammount " +sumOfMoney);
  console.log(cashDrawler + " --Change Drawler--");

  // console.log(cashDrawler[0][0]);

  var valueOfChange = cash - price;
  // var valueOfChange = 163.42;
  var intPart = parseInt(valueOfChange); 
  var floatPart = Math.round((valueOfChange - intPart) * 100);

  // console.log(Math.round(floatPart)); //Math.round() to solve the decimal problem.

  
  console.log(valueOfChange + " --Change to give--");

  


  if(intPart !==0){
    while(intPart > 0){    

      if(intPart % 100 === 0) {
        console.log("one hundrend"); 
        
        if(cashDrawler[0][1] > 0){
          intPart -= 100; 
          cashDrawler[0][1] -= 100;         
          continue;
        } 
        else break;
      }
    
      if(intPart % 20 === 0) {
        console.log("twenty"); 
        if(cashDrawler[1][1] > 0){
          intPart -= 20;
          cashDrawler[1][1] -= 20;
          continue;
        }
        else break;
        
      } 
    
      if(intPart % 10 === 0) {
        console.log("ten"); 
        if(cashDrawler[2][1] > 0){
          intPart -= 10; 
          cashDrawler[2][1] -= 10;
          continue;
        }
        else break;
      }
    
      if(intPart % 5 === 0) {
        console.log("five"); 
        if(cashDrawler[3][1] > 0){
          intPart -= 5;
          cashDrawler[3][1] -= 5; 
          continue;
        }
        else break;
      }
    
      if(intPart % 1 === 0) {
        console.log("dollar");
        if(cashDrawler[4][1] > 0){
          intPart -= 1;
          cashDrawler[4][1] -= 1;
          continue;
        }
        else floatPart += (intPart * 100); //Here will pass the int part of number to decimal

        console.log(floatPart);
        continue;
      }
    
      // else console.log("bullshit"); intPart = 0; continue;
    
      }

  }

  if(floatPart !== 0){
    while(floatPart > 0){    
          
      if(floatPart % 25 === 0) {
        console.log("quarter"); 
        floatPart -= 25;
        cashDrawler[5][1] -= 0.25;
        continue;
      } 
    
      if(floatPart % 10 === 0) {
        console.log("dime"); 
        floatPart -= 10; 
        cashDrawler[6][1] -= 0.1;
        continue;
      }
    
      if(floatPart % 5 === 0) {
        console.log("nickel"); 
        floatPart -= 5;
        cashDrawler[7][1] -= 0.05; 
        continue;
      }
    
      if(floatPart % 1 === 0) {
        console.log("penny");
        cashDrawler[8][1] -= 0.01; 
        floatPart -= 1;        
        continue;
      }  
    
      else console.log("bullshit"); floatPart = 0; continue;
    
      }

  }

  

  console.log(intPart + "." + floatPart);

  
  console.log(cashDrawler + " --Change Drawler--");
  sumOfMoney = 0;
  cashDrawler.forEach((slot, amm) => {
    // console.log(slot);
    // console.log(amm);
    sumOfMoney += slot[1];
  });
  console.log('final amount '+sumOfMoney);
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

checkCashRegister(3.26, 390, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.