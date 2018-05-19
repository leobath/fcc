
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr = arr.sort(function(a,b){
        return a - b;
    });
    var pos = 0;

    console.log(arr);

    if(arr[arr.length-1] < num ){ 
        pos = arr.length;
        console.log("if running...");
    } else if(arr[0] > num){
        console.log("im first else-if");
        pos =  0;
    }
    else{
console.log ("else running...");
    for(var i=1; i< arr.length; ++i){
        if(arr[i-1] < num ){
             pos = i;
        }
    }
}
    
    console.log(pos);
    return pos;
  }
  
  getIndexToIns([5, 3, 20, 3], 5);