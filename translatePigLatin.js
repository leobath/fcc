function translatePigLatin(str) {
    var vowel = ['a','e','i','o','u'];
    var arr = str.split('');
    for (var i in vowel){
    if (arr[0] === vowel[i]){
      str = arr.join('') + "way";
      console.log(str);
      return str;
    
    }
    var nonVowel ="";
    for (var j in arr){
      for (var x in vowel){
        if(arr[0] !== vowel[x]){
            arr.shift();
          nonVowel += ""+arr[j];
          console.log(nonVowel);
          
        }
    }
    
    console.log(nonVowel + str[0] + "ay");
    return str;
  }
}}
  translatePigLatin("paragraphs");