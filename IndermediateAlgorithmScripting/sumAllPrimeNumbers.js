function sumPrimes(num) {
    let sum = 0;
    if (num===2) {
        sum += num;
    }
    if(num===3){sum += numl;}
    if(num % 2 === 0 || num % 3 === 0) { 
        console.log(`the ${num} is not a prime`);
    }
    let i = 5;
    let w = 2;

    while(i * i <= num){
        if(num % i === 0){
            console.log(`the ${num} is not a prime`);
            break;
        }
        i += w;
        w = 6 - w;
    }
    sum +=num;
    console.log(`the sum of primes is ${sum}`);
    return num;
  }
  
  sumPrimes(10);