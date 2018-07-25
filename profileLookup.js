//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
// var objName = name+"";

contacts.forEach(function(elem, pos, ele){
  if (ele[pos]["firstName"] === name && ele[pos][prop]){
console.log(ele[pos][prop]);
// console.log(objName);

    return ele[pos][prop];
  }else if(ele[pos]["firstName"] == name && ele[pos][prop] === undefined){
    console.log("No such property");
    return "No such property";
} else if (ele[pos]["firstName"] !== name) {
    console.log("No such contact");
    return "No such contact";
}
      
   
});
// Only change code above this line
}

// Change these values to test your function
// lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName");
// lookUpProfile("Sherlock", "likes");
// lookUpProfile("Akira", "address");