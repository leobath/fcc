function copyMachine(arr, num) {
  let newArr = [...arr];
  console.log(newArr);
  while (num >= 1) {
    // change code below this line
    let arr2 =  [];

    arr2.push(arr);
    newArr = arr2;
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));