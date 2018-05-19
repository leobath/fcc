function translatePigLatin(str) {
    
    var arr = str.split('');
    var indexArr = [];
    
    
    if (arr[0] === 'a' || arr[0] === 'e' || arr[0] === 'i' || arr[0] === 'o'  || arr[0] === 'u'){
      str = arr.join('') + "way";
      console.log(str);
      return str;
    
    }

    else {
        for (i in arr){

        if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o'  || arr[i] === 'u')
           // arr.shift();

           indexArr[i] = i;     
          
          console.log(str);
          
        }
    }
    indexArr = indexArr.filter(function(n){
        return n != undefined;
    });
    console.log(parseInt(indexArr[0]));
    console.log(str.slice(parseInt(indexArr[0]),str.length) + str.slice(0, parseInt(indexArr[0])) + "ay");
    console.log(arr.join('') + str[0] + "ay");
    return str;
  }

  translatePigLatin("glove");