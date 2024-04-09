function promptUserForInput(message) { // prompt user for input
    return prompt(message).split(' ').map(Number);  // chnages an array of string to numbers
}

const ArrayNumbers = promptUserForInput("Enter Array Numbers: ");

function filterPrimes(arr) { // filter primes
    return arr.filter(num => {
        for (let i = 2; i <= Math.sqrt(num); i++) { //loops through the numbers ensuring it is only divided by one and itself
            if (num % i === 0) return false;
        }
        return num > 1; //returns numbers greater than 1
    });
}

const primeNumbers = filterPrimes(ArrayNumbers); // filter primes

window.alert(primeNumbers); // displays the prime numbers
