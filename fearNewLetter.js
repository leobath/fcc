function fearNotLetter(str) {
var splitString = []; 
var matchArray = [];
var i = 0;
while(i<str.length){
  splitString[i] = str.charCodeAt(i);
  i++;
}

//console.log(splitString[0]);
for(var j = splitString[0]; j<=splitString[splitString.length-1]; j++){
  matchArray.push(j);
}
console.log(matchArray);

console.log(splitString[splitString.length-1]);
return str;
}


  
fearNotLetter("abce");
  