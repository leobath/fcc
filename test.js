//Used for testing...

let someText = "Tokyo";

var aVar = Math.floor(someText.length/2);

console.log(aVar + " -->  "+ someText[aVar]);

let splited = someText.slice(aVar);

console.log(`${splited}`);  //ES6 command result-> 'kyo'

const aMatrix = [3, 6, 8, 2, 4];

// delete elements of a matrix with filter()
let res = aMatrix.filter(
    (a) => { if (a == 3) {
        return a !=3;
    } else if(a == 4 ) {
        return a !=4;
    } else return a;
    }
);
console.log(res);