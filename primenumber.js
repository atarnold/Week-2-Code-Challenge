// prompt user for input
function promptUserForInput(message) { 
    // chnages an array of string to numbers
    return prompt(message).split(' ').map(Number);  
}

const ArrayNumbers = promptUserForInput("Enter Array Numbers: ");

// filter primes
function filterPrimes(arr) {
    return arr.filter(num => {
        //loops through the numbers ensuring it is only divided by one and itself
        for (let i = 2; i <= Math.sqrt(num); i++) { 
            if (num % i === 0) return false;
        }
        //returns numbers greater than 1
        return num > 1; 
    });
}

// filter primes
const primeNumbers = filterPrimes(ArrayNumbers); 

// displays the prime numbers
window.alert(primeNumbers); 