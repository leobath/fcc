
function rot13(str) { // LBH QVQ VG! [A - Z] = [65 - 90]

var asciPos = 65;
var x = 0;
var result =[];
var finRes = "";
var test = [];
var pin1 = [];

    var arr = "A-Z".charCodeAt(1);
    str[0] = 70;

    console.log(str.charCodeAt(0)-13);
    console.log(String.fromCodePoint(32));
    console.log(arr);

    for (var x in str){
    test.push(str.charCodeAt(x));
    }
    console.log(test);

    for(var y in test){
        if(test[y] <= 90 && test[y] >=65 ){
            if(test[y]+13 > 90){
                pin1.push(test[y]-13);
            } else if (test[y]-13 < 65){
                pin1.push(test[y]+13);
            }
        } else {
            pin1.push(test[y]);
        }
    }
console.log(pin1);

var text = "";

for(var z in pin1){
    text += String.fromCodePoint(pin1[z]);
}
console.log(text);

/* 
    
for(var i in str){
    if(str.charCodeAt(i) < 65 || str.charCodeAt(i) >90){result.push(String.fromCodePoint(str.charCodeAt(i)));}
    if (str.charCodeAt(i)+13 > 90 && (str.charCodeAt() >= 65 || str.charCodeAt() <= 90)){
        console.log(" -13 for running...."); 
        //x= i-13;
        console.log(String.fromCodePoint(str.charCodeAt(i)-13));

result.push(String.fromCodePoint(str.charCodeAt(i)-13));
        
    } else if(str.charCodeAt(i)-13 < 65 && (str.charCodeAt() >= 65 && str.charCodeAt() <= 90)) {
        console.log(" +13 else running...")
        result.push(String.fromCodePoint(str.charCodeAt(i)+13));
    }
}
 */
  /*   return str;
  }
  if(asciPos+13 > 90){
      return asciPos - 13;
  }else {
      return asciPos + 13;
    }

    if(asciPos< 65 || asciPos > 90){
        console.log("ignore");
     */
    finRes = result.join('');
    console.log(result);
    console.log(finRes);
    }
    
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
  