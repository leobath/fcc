
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var arrLength = arr.length;
    console.log(arrLength);
    var dump1 = [];
    var dump2 = [];

    for(var i = 0; i < arrLength;  i += size ){
        dump1 = arr.slice(i, size+i);
        dump2.push(dump1);

    }
    //console.log(dumpArr1);
    console.log(dump2);
    return dump2;

  }
  
  
  chunkArrayInGroups(["a", "b", "c", "d"], 3);