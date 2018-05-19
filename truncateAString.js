
function truncateString(str, num) {
    // Clear out that junk in your trunk
    
    var strin = "";
    var arr1 = str.split('');
    var arr2 = [];

    for (var i=0; i<num-3; ++i){
        arr2[i] = arr1[i];
    }

    console.log(arr1);
    
    console.log(arr2);
    str = arr2.join('');

    console.log(str + "...");

   


    //console.log(str.substring(str.length - num+3));
    /*
    if (num<=3 && str.length !== num){
      strin = str.substring(43);
      console.log(strin);
    return strin + "...";
    }else if(num===3 && str.length === num){
      strin = str.substring(43);
    return strin;
    }  else if(str.length +2 ){
      strin = str.substring(0, num);
      console.log(strin);
    return strin;
    }
    
    else {
    strin = str.substring(num-3);
    console.log(strin);
    return strin + "...";
  }  
  */  
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 11);
  
//var sent1 = "A-tisket a-tasket A green and yellow basket".length;
//var sent2 = "Peter Piper...".length;

//console.log(sent1 + " " + sent2);