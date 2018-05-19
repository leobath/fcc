
function mutation(arr) {
    var word1 = arr[0].toLowerCase();
    var word2 = arr[1].toLowerCase();
    var leng  = arr[1].length;
    var flag  = true;

    for (var i=0; i<leng; ++i){

        if(word1.indexOf(word2[i]) !== -1){
      
            console.log(word1 + " " + word2);
              
      
          }else {
              flag = false;
        }

          

    }
    console.log(flag);
    return flag;
    
    
  }
  
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);