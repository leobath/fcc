
function repeatStringNumTimes(str, num) {
    // repeat after me
    var strin = "";
    if(num>=0){
        strin = str.repeat(num);

    }else {
        strin = str.slice(Math.abs(num)+1);
    }
    
   
    console.log(strin);
  }
  
  repeatStringNumTimes("abc", -2);