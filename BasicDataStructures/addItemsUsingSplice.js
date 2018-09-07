function htmlColorNames(arr) {
    // change code below this line
    let newArr =arr;

    newArr = arr.splice(2,1,"BlanchedAlmond");
    
    
    arr = newArr;
    // change code above this line
  
    return arr
  } 
   
  // do not change code below this line
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));