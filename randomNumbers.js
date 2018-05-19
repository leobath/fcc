function returnRandom(myMin, myMax){

let isFound = false;

let anArray = [];

for(let i=0; i<50; ++i){

    anArray.push(Math.floor(Math.random() * myMax) +1);
}

for(let j in anArray){
    if (anArray[j] === 15){console.log("Found on position " + j ); isFound = true;}
    
}
if(!isFound){console.log("Not found.");}

}
returnRandom(5, 15);