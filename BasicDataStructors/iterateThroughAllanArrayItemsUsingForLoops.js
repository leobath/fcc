function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    let elementNotExists = false;
    for (let i = 0; i < arr.length; i++){
      elementNotExists = false;
      for(let j = 0; j < arr[i].length; j++){
          if(elem === arr[i][j]){
              elementNotExists = true;
              break;
          }
      }
      if(!elementNotExists) {
          newArr.push(arr[i]);
      }    
  }
    // change code above this line
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
//   console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));