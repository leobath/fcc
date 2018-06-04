
function uniteUnique(arr) {
    var array1 = Array.from(arguments);
    var arrLength = array1.length;
    //console.log(arrLength);
    //console.log(array1);       
    
    var flattened = array1.reduce(
        function(accumulator, currentValue) {
          return accumulator.concat(currentValue);
        },
        []
      );

    //remove the duplicates  
    var newflattened = flattened.filter(function(item, pos) {
        return flattened.indexOf(item) == pos;
    });
    console.log(newflattened);
    return newflattened;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
  uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
  
  uniteUnique([1, 2, 3], [5, 2, 1]);
  
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8], [2, 3], [5, 8, 8]);
  