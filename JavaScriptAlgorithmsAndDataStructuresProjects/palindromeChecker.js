
function palindrome(str) {
    // Good luck!
    var arr = [];
    var str2 = str.toLowerCase();
    var str3 = "";
    console.log(str2); 
    str3 = str2.replace(/[#, \-, (, ),_, \,, .]/gi, '');
    
    arr = str3.split('').reverse();
    
    str2 = arr.join('');
    console.log(str2 + " " + str +" "+ str3);
   
    if(str3 === str2){
            console.log("equal");
            return true;
        }
        else {
        console.log("not equal");
    
    
    return false;
  }}
  
  
  
  console.log(palindrome("#-)_,.eye"));
