function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let newArr = [];
    let dumpArr = [];
    
    dumpArr = arr2.slice(0, n);

    dumpArr.forEach(element => {
        newArr.push(element);
    });
    
    dumpArr = [];

    arr1.forEach(element => {
        newArr.push(element);
    });

    dumpArr = arr2.slice(-n);

    dumpArr.forEach(element => {
        newArr.push(element);
    });

    

    console.log(arr2);
    console.log(newArr);
  return newArr;
    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)