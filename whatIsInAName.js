function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line  
    var sourcePropertiesLength = Object.getOwnPropertyNames(source).length;         
    var sourcePropertiesName = "";  

    for (var i = 0; i <  collection.length; ++i){
           for(var j=0; j< sourcePropertiesLength; ++j){ 
               sourcePropertiesName =  Object.keys(source)[j]; //will asign each key of the source object.
               if(collection[i][sourcePropertiesName] === source[sourcePropertiesName] ){
                   arr[i ] = collection[i];  
                 } else {
                   arr.pop(); //else means that a property of source[] is missing in collection[i] position
                                //and have to delete the list{} added in  if statement.
                }
            }
       }
   arr = arr.filter(function(n){   //Remove the undefined values of an array.
    return n !== undefined;
});
console.log(arr);
return  arr;

  }
  
  whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });