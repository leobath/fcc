const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
//  console.log(arr);

 arr = arr.filter((element)=>{
     if (element === parseInt(element)){
        // console.log(element);
    return element;
     }    
});
arr = arr.map(elements=>{
    return elements*elements;
})
// console.log(arr);
const squaredIntegers = arr;
  
  
  
  // change code above this line
  return squaredIntegers;
  };
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);