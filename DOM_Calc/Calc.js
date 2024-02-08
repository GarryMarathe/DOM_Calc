// The variable lastButtonIsOperator is used to keep track of whether the last pressed button was an operator.
var lastButtonIsOperator = false;

function appendToDisplay(value) {
    var display = document.getElementById('display');

    // Check if the last pressed button is an operator
    if (lastButtonIsOperator && ['-', '*', '+', '/'].includes(value)) {
        // Do not allow consecutive operator presses
        return;
    }

    if (display.value === '' && value === '00') {
        display.value = '0';
    } else {
        display.value += value;
    }

    lastButtonIsOperator = ['-', '*', '+', '/'].includes(value);
}

// var display = document.getElementById('display');: This line retrieves the HTML element with the ID 'display'. This element is assumed to be the input field where the calculator's display is shown.

// if (lastButtonIsOperator && ['-', '*', '+', '/'].includes(value)) {: This condition checks if the last pressed button was an operator (lastButtonIsOperator is true) and if the current button being pressed is also an operator (specified in the array ['-', '*', '+', '/']). If both conditions are true, it means there's an attempt to press consecutive operators.

// return;: If the condition in the if statement is true, the function exits early using return, preventing the rest of the code from executing. This ensures that consecutive operator presses are not allowed.

// display.value += value;: If the condition is false (meaning it's not a consecutive operator press), this line appends the value of the pressed button to the display.

// lastButtonIsOperator = ['-', '*', '+', '/'].includes(value);: Finally, this line updates the lastButtonIsOperator variable to indicate whether the current button is an operator. This information is used for the next button press to determine if it's an operator or not.




function clearDisplay() {
    document.getElementById('display').value = '';
    lastButtonIsOperator = false;
}

function calculateResult() {
    var display = document.getElementById('display');
    var result = eval(display.value);

    display.value = result;
    lastButtonIsOperator = false;
}
function clearLastDigit() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
    lastButtonIsOperator = false;
}