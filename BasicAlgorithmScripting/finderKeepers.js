function findElement(arr, func) {
    let num = 0;
    let found = false;
    for(let element in arr){
        found = false;
        console.log(arr[element]);
        console.log(func(arr[element]));
        if(func(arr[element])){
            
            num = arr[element];
            found = true;
        }
        if(found){
            console.log(found + " " + arr[element]);
            return num;
        }
         
    }
  }
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  console.log(findElement);