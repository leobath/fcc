function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var arr1 = target.split(' ');
    var word = "";
    var num = 0; 
    var pos = arr1.length;
    
    //console.log(pos);
    //word = arr1[pos-1];
    //console.log(arr1);
    //console.log(word);
    //console.log (str.substring(1, -1));
    if (str.substring(str.length - word.length) === word){
        console.log(true);
        return true;}
    else{
        return false;}
}
  
  confirmEnding("Bastian", "pn");


