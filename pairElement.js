function pairElement(str) {
  
    var nestedArr = [];
    var pairArr = [];
    var strSplit = [];
    strSplit = str.split('');
    for (var i in strSplit){
        if(strSplit[i] === 'G'){
            pairArr = ['G' , 'C'];                        
            nestedArr[i] = pairArr                    
        }else if  (strSplit[i] === 'C'){
            pairArr = ['C' , 'G'];
            nestedArr[i] = pairArr;           
        }else if  (strSplit[i] === 'A'){
            pairArr = ['A' , 'T'];
            nestedArr[i] = pairArr;            
        }else if  (strSplit[i] === 'T'){
            pairArr = ['T' , 'A'];
            nestedArr[i] = pairArr;            
        }        
    }
    console.log(nestedArr);
    return nestedArr;
  }
  
  pairElement("ATCGA");