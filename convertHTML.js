function convertHTML(str) {
    // &colon;&rpar;
    // var regex = /[&]/i;

    // var newstr = str.replace(regex, '&amp;');


    var symbolsToChange = {
        '&': '&amp;',
        '>': '&gt;',
        '<': '&lt;',
        '\"': '&quot;',
        '\'': '&apos;'
    }; 


    String.prototype.allReplace = function(obj) {
        var retStr = this;
        for (var x in obj) {
            retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
        }
        return retStr;
    };

    var newstr = str.allReplace(symbolsToChange);

console.log (newstr);
    return newstr;
  }
  
  convertHTML("Dolce \" Gabbana");
  