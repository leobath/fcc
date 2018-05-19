
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    function allowValues(value){
        if(value !== false || value !== null || value !== 0 || value !== "" || value !== undefined || value !== NaN){
            return value;
        }
    }
    var res = arr.filter(allowValues);
    console.log(res);
    return res;
  }
  
  bouncer([7, "ate", "", false, 9]);
  