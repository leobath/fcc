function fearNotLetter(str) {
var splitString = []; 
var matchArray = [];
var finalArr = [];
var i = 0;
while(i<str.length){
  splitString[i] = str.charCodeAt(i);
  i++;
}

console.log(splitString);
for(var j = splitString[0]; j<=splitString[splitString.length-1]; j++){
  matchArray.push(j);
}
console.log(matchArray);
console.log(splitString[splitString.length-1]);

if (splitString.length === matchArray.length){
  console.log(undefined);
  return undefined;
} else {
  var x = 0;
  for (var y=0; y<matchArray.length; y++){
    if(matchArray[y] !== splitString[y + x]){
      finalArr.push(matchArray[y]);
      x--;
    }
  }
}
console.log(String.fromCharCode(finalArr));
return String.fromCharCode(finalArr);

}
  
fearNotLetter("abce");
  