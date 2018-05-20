var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var dum = 'A';

var regexp = /[dum-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);