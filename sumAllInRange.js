function sumAll(arr) {

    var result = 0;
    let minVal = arr.reduce(function(a,b){return Math.min(a,b);});

    console.log(minVal);
    let maxVal = arr.reduce(function(a,b){return Math.max(a,b);})
    console.log(maxVal);
    for(var i=minVal; i<=maxVal; ++i){
      result += i;
    }

    //result += minVal;
    //result += maxVal;
    console.log(result);
    return result;
  }
  
  sumAll([1, 4]);