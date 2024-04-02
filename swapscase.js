// Define a function called swappingCharacterString that takes a string parameter 'str'.
function swappingCharacterString(str) {
    // Initialize an empty string called swappedString to store the swapped characters.
    let swappedString = '';
    // Iterate through each character in the input string.
    for (const char of str) {
        // Check if the character is uppercase.
        if (char === char.toUpperCase()) {
            // If it's uppercase, convert it to lowercase and append to swappedString.
            swappedString += char.toLowerCase();
        } else {
            // If it's not uppercase, convert it uppercase and append to swappedString.
            swappedString += char.toUpperCase();
        }
    }
     // Return the swapped string. This return statement is placed within the loop, causing the function to return 
    // after processing the first character. It should be moved outside the loop to return the fully swapped string.
    return swappedString;

}
// Call the acceptString function with the input string "The Quick Brown Fox" and log the result to the console.
console.log(swappingCharacterString("The Quick Brown Fox"))

