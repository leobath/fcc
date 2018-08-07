function checkCashRegister(price, cash, cid) {
  var change;

  var initDrawler = cid;

  var valueOfChangeAfter = 0;

  console.log(initDrawler);

  var statusOpen = false;

  //result object
  var changeToGive = {
    status: "",
    change: []
  }

  var cashDrawler =[[]];
  var coinDrawler = [];
  cashDrawler = cid.reverse(); //give first bigger coins for change
  var sumOfMoney = 0;
  cashDrawler.forEach((slot, amm) => {
    // console.log(slot);
    // console.log(amm);
    // coinDrawler.push(slot[1]);
    sumOfMoney += slot[1];
  });
  
  console.log("initial drawler changes " +sumOfMoney);
  console.log(cashDrawler + " --Change Drawler--");

  

  //We will work with coins
  coinDrawler.push(Math.round(cashDrawler[0][1]/100));
  coinDrawler.push(Math.round(cashDrawler[1][1]/20));  
  coinDrawler.push(Math.round(cashDrawler[2][1]/10)); 
  coinDrawler.push(Math.round(cashDrawler[3][1]/5)); 
  coinDrawler.push(Math.round(cashDrawler[4][1]/1)); //LOL
  coinDrawler.push(Math.round(cashDrawler[5][1]/0.25));
  coinDrawler.push(Math.round(cashDrawler[6][1]/0.1));
  coinDrawler.push(Math.round(cashDrawler[7][1]/0.05));  
  coinDrawler.push(Math.round(cashDrawler[8][1]/0.01));
  
  console.log(coinDrawler);
  // console.log(cashDrawler[0][0]);

  var valueOfChange = cash - price;
  // var valueOfChange = 163.42;
  var intPart = parseInt(valueOfChange); 
  var floatPart = Math.round((valueOfChange - intPart) * 100);

  // console.log(Math.round(floatPart)); //Math.round() to solve the decimal problem.

 

  
// console.log(givenChange);
  
  console.log(valueOfChange + " --Change to give--");

  var divByHundrend = 0, divByTwenty = 0, divByTen = 0, divByFive = 0, divByOne = 0, divByQuarter = 0, divByDime = 0, divByNickel = 0, divByPenny = 0;

  console.log("sumOfMoney: " + sumOfMoney);
  console.log("valueOfChange: "+ valueOfChange);

  if(sumOfMoney < valueOfChange) {
    changeToGive.status = "INSUFFICIENT_FUNDS";
    // console.log(JSON.stringify(changeToGive)+" first if running...");
    change = JSON.stringify(changeToGive);
    console.log(change);
    return change;
  }

  if(sumOfMoney.toFixed(2) === valueOfChange.toFixed(2)){
    changeToGive.status = "CLOSED";
    changeToGive.change = initDrawler.reverse();    
    change = JSON.stringify(changeToGive);
    console.log(change);
    return change;
  }
  var givenChange = cashDrawler;
  givenChange.forEach(position => {
    position[1] = 0;
    console.log(position);
  });
  

  while(valueOfChange > 0){

    // if(valueOfChange < 0.01){return 0;}

    divByHundrend = parseInt(valueOfChange / 100);
    if(divByHundrend > 0 && coinDrawler[0] > 0) {
      coinDrawler[0]--;
      valueOfChange -= 100;
      givenChange[0][1] += 100;
      //console.log(givenChange[0]);
      console.log("hundrend If...");
      valueOfChange = valueOfChange.toFixed(2);
      console.log(valueOfChange);
      continue;
    }

    

    

    divByTwenty = parseInt(valueOfChange / 20);

    if(divByTwenty > 0 && coinDrawler[1] > 0) {
      coinDrawler[1]--;
      valueOfChange -= 20;
      givenChange[1][1] += 20;
      console.log("twenty If...");
      valueOfChange = valueOfChange.toFixed(2);
      console.log(valueOfChange);
      continue;
    }

    divByTen = parseInt(valueOfChange / 10);

    if(divByTen > 0 && coinDrawler[2] > 0) {
      coinDrawler[2]--;
      valueOfChange -= 10;
      givenChange[2][1] += 10;
      console.log("ten If...");
      valueOfChange = valueOfChange.toFixed(2);
      console.log(valueOfChange);
      continue;
    }

    divByFive = parseInt(valueOfChange / 5);
    if(divByFive > 0 && coinDrawler[3] > 0) {
      coinDrawler[3]--;
      valueOfChange -= 5;
      cashDrawler[3][1] += 5;
      console.log("five If...");
      valueOfChange = valueOfChange.toFixed(2);
      console.log(valueOfChange);
      continue;
    }

    divByOne = parseInt(valueOfChange / 1);
    if(divByOne > 0 && coinDrawler[4] > 0) {
      coinDrawler[4]--;
      valueOfChange -= 1;
      cashDrawler[4][1] += 1;
      console.log("one If...");
      valueOfChange = valueOfChange.toFixed(2);
      console.log(valueOfChange);
      continue;
    }

    divByQuarter = parseInt(valueOfChange / 0.25);
    if(divByQuarter > 0 && coinDrawler[5] > 0) {
      coinDrawler[5]--;
      valueOfChange -= 0.25;
      cashDrawler[5][1] += 0.25;
      console.log("quarter If...");
      valueOfChange = valueOfChange.toFixed(2);
      console.log(valueOfChange);
      continue;
    }

    divByDime = parseInt(valueOfChange / 0.1);
    if(divByDime > 0 && coinDrawler[6] > 0) {
      coinDrawler[6]--;
      valueOfChange -= 0.1;
      cashDrawler[6][1] += 0.1;
      console.log("dime If...");
      valueOfChange = valueOfChange.toFixed(2);
      console.log(valueOfChange);
      continue;
    }

    divByNickel = parseInt(valueOfChange / 0.05);
    if(divByNickel > 0 && coinDrawler[7] > 0) {
      coinDrawler[7]--;
      valueOfChange -= 0.05;
      cashDrawler[7][1] += 0.05;
      console.log("nickel If...");
      valueOfChange = valueOfChange.toFixed(2);
      console.log(valueOfChange);
      continue;
    }

    divByPenny = parseInt(valueOfChange / 0.01);
    if(divByPenny > 0 && coinDrawler[8] > 0) {
      coinDrawler[8]--;
      valueOfChange -= 0.01;
      cashDrawler[8][1] += 0.01;
      console.log("penny If...");
      valueOfChange = valueOfChange.toFixed(2); //fix decimal
      console.log(valueOfChange);
      statusOpen = true;
      continue;
    }

    
statusOpen = false;

valueOfChangeAfter = valueOfChange;
    console.log(valueOfChange);
    valueOfChange = 0;
    
    
    
  }

  // add the positive change arrays in the object
  if(givenChange[0][1] > 0){ changeToGive.change.push(givenChange[0]);}
  if(givenChange[1][1] > 0){ changeToGive.change.push(givenChange[1]);}
  if(givenChange[2][1] > 0){ changeToGive.change.push(givenChange[2]);}
  if(givenChange[3][1] > 0){ changeToGive.change.push(givenChange[3]);}
  if(givenChange[4][1] > 0){ changeToGive.change.push(givenChange[4]);}
  if(givenChange[5][1] > 0){ changeToGive.change.push(givenChange[5]);}
  if(givenChange[6][1] > 0){ changeToGive.change.push(givenChange[6]);}
  if(givenChange[7][1] > 0){ changeToGive.change.push(givenChange[7]);}
  if(givenChange[8][1] > 0){ changeToGive.change.push(givenChange[8]);}
  console.log(coinDrawler);
  

  


  

  console.log(intPart + "." + floatPart);

  
  
  sumOfMoney = 0;
  cashDrawler.forEach((slot, amm) => {
    // console.log(slot);
    // console.log(amm);
    sumOfMoney += slot[1];
  });
  console.log('final change drawler '+sumOfMoney);
  if(statusOpen){
    changeToGive.status = "OPEN";
  }

  if(valueOfChangeAfter === 0){
    changeToGive.status = "OPEN";
  }

  if(valueOfChangeAfter > 0) {
    changeToGive.status = "INSUFFICIENT_FUNDS";
    changeToGive.change = [];
    console.log(JSON.stringify(changeToGive)+ "last if running");
    change = JSON.stringify(changeToGive);
    console.log(change);
    return change;
  }

  console.log(JSON.stringify(changeToGive) + " --Change Drawler--");

  console.log(valueOfChangeAfter);
  change = JSON.stringify(changeToGive);
  console.log(change);
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

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.