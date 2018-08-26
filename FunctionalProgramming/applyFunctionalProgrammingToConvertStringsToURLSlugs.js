// the global variable
var globalTitle = " Winter Is  Coming";

// Add your code below this line
function urlSlug(title) {
  let arr1 = [];  
  arr1 = title.split(/[ ]+/gi);
  title = arr1.join("-");
  if(title[0] === "-"){
    title = title.substring(1, title.length);
    console.log("if running...");
    console.log(title);
  }
  
  return title.toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

console.log(winterComing);
console.log(globalTitle);