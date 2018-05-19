
function diffArray(arr1, arr2) {
    var newArr = [];
    var maxArr = [];
    var minArr = [];
    // Same, same; but different.
    if (arr1 < arr2){
        minArr = arr1;
        maxArr = arr2;
    } else {
        minArr = arr2;
        maxArr = arr1;
    }
    console.log("minArr->" + minArr);
    console.log(arr1);
    console.log();
    console.log();

    for (var i= 0; i<minArr.length; ++i){
      for(var j = 0; j<maxArr.length; ++j){
        if (minArr[i] === maxArr[j]){
          delete maxArr[j];
          delete minArr[i];
        }
      }
    }
    console.log(maxArr);
    maxArr = maxArr.filter(function(n){
        return n !== undefined;
    });
    console.log(maxArr);
    minArr = minArr.filter(function(ns){
        return ns !== undefined;
    });
    console.log(minArr);
    newArr = minArr.concat(maxArr);
    console.log(newArr);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);