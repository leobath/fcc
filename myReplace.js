
function myReplace(str, before, after) {
    
    console.log(before);
    console.log(after);
    var newstr2 = str.split(' ');

    var newstr3 = after.split('');
    for (i in newstr2){
        console.log(newstr2[i]);

        if(newstr2[i] === before){
            if((before.charCodeAt(0) >= 65 ) && (before.charCodeAt(0) <= 90 )){
                var dummy = after[0].toUpperCase();
                newstr3[0] = newstr3[0].toUpperCase(); 
                newstr3 = newstr3.join('');
                after[0] = after[0].toUpperCase();  //ATTENTION Doesn't work. Must be splited.             
                
                console.log("Hi I'am the 2nd if: "+after);
    
                newstr2[i] = newstr3;
            } else {
                newstr2[i] = after;
            }



        }
    }
    

    var newstr = newstr2.join(' ');

    console.log(newstr);
 
    return newstr;
  }
  
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting");