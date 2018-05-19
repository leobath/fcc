var numbers = [4, 27, 5, 1, 3];

numbers.sort(function(a, b) {
    console.log(a + " " + b);
    console.log(a - b);
  return a - b;
});
console.log(numbers);