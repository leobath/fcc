var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var dum = 'A';

var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);