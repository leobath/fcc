
function largestOfFour(arr) {
    // You can do this!
    var arr1 = [];
    
    for (var i in arr){
        var max = arr[i][0];
        //console.log(max);
      for (var j in arr ){
        if (max <= arr[i][j]){
          max = arr[i][j];
          arr1[i] = max; 
        }
      }
    }
    
    console.log(arr1);
    //return arr1;
  }
  
  largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
  