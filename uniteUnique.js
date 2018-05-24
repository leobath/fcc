
function uniteUnique(arr) {
    var array1 = [];
    for (var i in arr){
       // array1.push(arguments[i]);
    array1[i] = arguments[i];
    array1 = array1.filter(function(n){
        return n !== undefined;
    });
    
    }
    
    
    console.log(array1);
    var flattened = array1.reduce(
        function(accumulator, currentValue) {
          return accumulator.concat(currentValue);
        },
        []
      );
    
    console.log(flattened);

    ///write your code under this line.

    

  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
  //uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
  
  //uniteUnique([1, 2, 3], [5, 2, 1]);
  
  //uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
  