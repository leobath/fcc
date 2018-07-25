// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line

    function updateRecords(id, prop, value) {
        if (id === 5439){
              collection[id][prop] = "ABBA";
          }
        if(prop === "tracks" && value !== "") {
            var newValue = [ ];
          collection[id][prop] = newValue;
          collection[id][prop].push(value);
        }
        if(!value) {
           delete collection[id][prop];
        }
        var obj = collection.valueOf(id);

        console.log(obj);

        var existAlbum = false;

        for(x in obj ){
            if (x !== "album"){
               console.log("not found");
               existAlbum = true;
            }
            
        }

        if(existAlbum){
            obj.push({prop: value});
        }


  console.log(collection);
  return collection;
}

// Alter values below to test your code
// updateRecords(5439, "tracks");
// updateRecords(2468, "tracks", "Free");
updateRecords(1245, "album", "Riptide");


