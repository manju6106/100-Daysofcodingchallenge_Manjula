const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input1, input2, operation;

readline.question('Enter the first number: ', (num1) => {
    input1 = parseFloat(num1);
    readline.question('Enter the second number: ', (num2) => {
        input2 = parseFloat(num2);
        readline.question('Enter the operation (add, subtract, multiply, divide): ', (op) => {
            operation = op;

            // Declare the functions
            function add(num1, num2) {
                return num1 + num2;
            }

            function subtract(num1, num2) {
                return num1 - num2;
            }

            function multiply(num1, num2) {
                return num1 * num2;
            }

            function divide(num1, num2) {
                if(num2 != 0) {
                    return num1 / num2;
                } else {
                    return "Error! Division by zero is not allowed.";
                }
            }

            // Perform the operation
            let result;
            switch(operation) {
                case "add":
                    result = add(input1, input2);
                    break;
                case "subtract":
                    result = subtract(input1, input2);
                    break;
                case "multiply":
                    result = multiply(input1, input2);
                    break;
                case "divide":
                    result = divide(input1, input2);
                    break;
                default:
                    result = "Error! Invalid operation.";
            }

            // Output the result
            console.log(`The result is: ${result}`);
            readline.close();
        });
    });
});