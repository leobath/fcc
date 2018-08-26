function splitify(str) {
    // Add your code below this line
    return str.replace(/[,-.]/g, " ").split(" ");
    
    // Add your code above this line
  }
  console.log(splitify("Hello World,I-am code"));