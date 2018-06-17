let someText = "Tokyo";

var aVar = Math.floor(someText.length/2);

console.log(aVar + " -->  "+ someText[aVar]);

let splited = someText.slice(aVar);

console.log(`${splited}`);  //ES6 command