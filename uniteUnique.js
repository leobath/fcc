
function uniteUnique(arr) {
    var array1 = [];
    for (var i in arr){
       // array1.push(arguments[i]);
    array1[i] = arguments[i];
    
    }

    var array2 = array1[0];
    //console.log(array2);
    var mainArray = [];
    var secondArray = [];

    var arrLen = array1.length;
    console.log(arrLen);

    for(var i =0; i< arrLen; i++){
        mainArray = array1[i];

        for(var j=0; j<3; j++){
            
            
                secondArray.push(mainArray[j]);
               // console.log(secondArray.length);
            }
        
    

    }
    console.log(mainArray);
    // var x=0;
    // var count=0;

    // while(x<array1.length){
    //     mainArray = array1[x];
    //    for(var z=0; z<secondArray.length; z++){
    //     for(var y=0; y<mainArray.length; y++){
    //             if(mainArray[y] === secondArray[z]){
    //                 count++;
    //                 console.log("run if "+ count +" times");
    //             }
    //     }
    //    }

    //     x++;
    // }
    var newArray = [];
    newArray.push(secondArray[0]);
    var lengthOfNewArray = -1;
    var count=0;
    for(var x in secondArray){
        lengthOfNewArray++;
        for(var y=0; y<lengthOfNewArray; y++){
            if(secondArray[x] === newArray[y] ){
                count++;
                if(count>1){
                    //console.log("found");
                secondArray[x] = undefined;
                break;
                }
                
            }else {
                newArray.push(secondArray[x]);
            }
        }

    }
    secondArray = secondArray.filter(function(n){
        return n !== undefined;
    });
    //console.log(mainArray);
    console.log(secondArray);
    //console.log(array1[1]);
    //console.log(newArray);

    return secondArray;
  }
  
  uniteUnique([1, 2, 3], [5, 2, 1]);
  