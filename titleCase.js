
function titleCase(str) {
  var arr1 = str.toLowerCase().split(' ');
  var arr2 = [];
 // var calLeng = 0;
  var joinedText = "";  

   /* str = arr.join(' ');
    console.log(str);

arr1 = arr;
console.log(str);
for (i in arr1){
  console.log(arr1[i]);
}*/
var dumb;

for(let j in arr1){
  dumb = arr1[j];
  for(let jj in dumb){
    arr2 = dumb.split('');
    arr2[0] = arr2[0].toUpperCase();
    
  }
  joinedText += arr2.join("") + " ";

  arr1[j] = dumb.toUpperCase();
}
/*
for (i in arr1){
  console.log(arr1[i]);
}
for (i in arr2){
  console.log(arr2[i]);
}
*/
console.log(joinedText);

  return joinedText.slice(0, -1);
}

titleCase("I'm a little teA pot");