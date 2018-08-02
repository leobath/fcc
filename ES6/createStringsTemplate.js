const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
  
    // change code below this line
    const resultDisplayArray = [];
        
    resultDisplayArray[0] = `<li class="text-warning">${arr[0]}</li>`;
    resultDisplayArray[1] = `<li class="text-warning">${arr[1]}</li>`;
    resultDisplayArray[2] = `<li class="text-warning">${arr[2]}</li>`;
    // change code above this line
  
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`, 
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);
  console.log(resultDisplayArray);