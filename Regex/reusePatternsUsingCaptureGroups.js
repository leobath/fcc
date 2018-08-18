let repeatNum = "42 42 42";
let reRegex = /(\d\d)\s(\d\d)\s(\d\d)/; // Change this line
let result = reRegex.test(repeatNum);
let result2 = repeatNum.match(reRegex);
console.log(result);
console.log(result2);