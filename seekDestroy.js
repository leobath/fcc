
function destroyer(arr) {
    // Remove all the values
    var arr1 = arguments[0];
    console.log(arr1);
    var arr2 = [];
    var arr3 = [];
    var res;
    
    for(var i=1; i<arguments.length; ++i){
        arr2.push(arguments[i]);
    }
    //console.log(arr2);
    var out = [];
    function filtTheNum(val){
        for (var j=0; j<arr1.length; ++j){

                if(val !== arr2[j]){
                    console.log (val);
            //return  val !== 3;
                }else {
                    return val;
                }

            }
    }   

    
    res = arr1.filter(filtTheNum);
    for (var x =0; x <arr1.length; ++x){
       for(var y =0; y< res.length; ++y){
            if(arr1[x] != res[y]){

                }else {
             delete arr1[x];
                }
            }      
        }

res = arr1.filter(function(n){return n != undefined;});

    console.log(res);
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);