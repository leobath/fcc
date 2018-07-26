function telephoneCheck(str) {
    // Good luck!
    var newstring = str.replace(/[-," "]/g, '');
    var newstring2 = str.replace(/[" ",(,),-]/g, '');
    var newstring3 = str.replace(/[(,),-]/g, '');
    var newstring4 = str.replace(/[" ",),-]/g, '');
  
     console.log(newstring);
  
     var strtoint = parseInt(newstring);
     var strtoint2 = parseInt(newstring2);
     var strtoint3 = parseInt(newstring3);
     var strtoint4 = parseInt(newstring4);
     
     var restring = strtoint+'';
     var restring2 = strtoint2+"";
     var restring3 = strtoint3+"";
     var restring4 = strtoint4+"";
  
     console.log(strtoint);
      if(restring.length === 10){
          console.log("if 1");
          return true;
      } else if (restring.length === 11 && str[0] === "1"  ){
        console.log("if 2");
        return true;
      } else if (restring2.length === 11 && str[0] === "1" && str[1] === "(" ){
        console.log("if 3");
        return true;
      }   
      
      else if (restring.length === 11 && str[0] === "(" && str[2] === ")") {
        console.log("if 4");
        return true;
      } else if (restring3.length === 10 && str[4] === ")" && str[0] === "(") {
        console.log("if 5");
        return true;
      } else if (restring4.length === 11 && str[5] === ")" && str[1] === " " ) {
        console.log("if 6");
        return false;
      } else if (str[0] === "1" && str[2] === "(" && str[6] === ")" && str.length === 16){
          return true;
      }
      
      else {
        console.log("else");
          return false;
      }
  }
  
//   console.log(telephoneCheck("1 555)555-5555"));
  console.log(telephoneCheck("1 (555) 555-5555"));
  