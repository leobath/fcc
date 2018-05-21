function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.   
   if (typeof(bool) === 'boolean') {     
     return true;
   } else {
     return false;
   }    
  }
  
  console.log("1: "+booWho([1,2,3]));
  console.log("2: "+booWho(NaN));
  console.log("3: "+booWho(true));
  console.log("4: "+booWho(false));
  console.log("5: "+booWho(1));
