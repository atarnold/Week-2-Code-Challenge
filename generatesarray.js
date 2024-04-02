//Define a function called acceptNumbers which takes two parameters.
function acceptNumbers(number1, number2) {
    //Initialize an empty array called result to store the accepted numbers.
    const result = [];
    //Loop from number1 to number2
    for (let i = number1; i <= number2; i++){
        //Push each numbers to the result array.
        result.push(i);
    };
    //Loop from number1 to number2 in reverse.
    for (let i = number1; i >= number2; i--){
        //Push each numbers to the result array.
        result.push(i);
    }
    // Return the array containing the accepted numbers.
    return result;
}
// Prints the result of calling acceptNumbers with arguments 4 and 7.
console.log(acceptNumbers(4, 7))
// Print the result of calling acceptNumbers with arguments -4 and 7.
console.log(acceptNumbers(-4, 7))