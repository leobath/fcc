
function convertToRoman(num){

var mon = {
    "0":"",
    "1":"I",
    "2":"II",
    "3":"III",
    "4":"IV",
    "5":"V",
    "6":"VI",
    "7":"VII",
    "8":"VIII",
    "9":"IX"
};

var dec = {
    "0":"",
    "1":"X",
    "2":"XX",
    "3":"XXX",
    "4":"XL",
    "5":"L",
    "6":"LX",
    "7":"LXX",
    "8":"LXXX",
    "9":"XC"
};

var cent = {
    "0":"",
    "1":"C",
    "2":"CC",
    "3":"CCC",
    "4":"CD",
    "5":"D",
    "6":"DC",
    "7":"DCC",
    "8":"DCCC",
    "9":"CM"
};

var mill = {
    "0":"",
    "1":"M",
    "2":"MM",
    "3":"MMM"
};

var numberIn = (""+num).split("");
console.log(numberIn);
console.log(numberIn.length);

if (numberIn.length === 1){
    console.log(mon[numberIn[0]]);
} else if (numberIn.length === 2){
    console.log(dec[numberIn[0]] + mon[numberIn[1]]);
} else if (numberIn.length === 3){
    console.log(cent[numberIn[0]] + dec[numberIn[1]] + mon[numberIn[2]]);
} else if (numberIn.length === 4){
    console.log(mill[numberIn[0]] + cent[numberIn[1]] + dec[numberIn[2]] + mon[numberIn[3]]);
} else { 
    return "";
}

//console.log(cent["3"]); //test values

}

var result = convertToRoman(501);

console.log("The result is: " + result);
