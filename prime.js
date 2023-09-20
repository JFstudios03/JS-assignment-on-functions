function loadprime() {
    function getPrimesInRange(start, end) {
        const primes = [];
      
        for (let number = start; number <= end; number++) {
          if (isPrime(number)) {
            primes.push(number);
          }
        }
      
        return primes;
      }
      
      function isPrime(number) {
        if (number <= 1) {
          return false;
        }
      
        if (number === 2) {
          return true;
        }
      
        if (number % 2 === 0) {
          return false;
        }
      
        for (let i = 3; i <= Math.sqrt(number); i += 2) {
          if (number % i === 0) {
            return false;
          }
        }
      
        return true;
    }
      
    // Find prime numbers between 1 and 100
    let a = parseInt(prompt("Input starting number"));
    let b = parseInt(prompt("Input ending number"));
    const primeNumbers = getPrimesInRange(a, b);
    alert("The prime numbers between " + `${a}` + " and " + `${b}` + " are:\n " + primeNumbers);
}  
