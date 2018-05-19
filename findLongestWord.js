function findLongestWord(str) {
    var word = "";
    var max = 0;
    var arr = [];
    arr = str.split(" ");
    for (var i=0 in arr){
        
        word = arr[i];
        if(word.length > max){max = word.length;}
    }
    return max;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");
  