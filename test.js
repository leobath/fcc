  
function uniteUnique(arr) {
    var array1 = [];
    for (var i in arr){
       // array1.push(arguments[i]);
    array1[i] = arguments[i];
    
    }
    var flattened = array1.reduce(
        function(accumulator, currentValue) {
          return accumulator.concat(currentValue);
        },
        []
      );
    
      console.log(flattened);
    

    return arr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);