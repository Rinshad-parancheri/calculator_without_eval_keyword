function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '/':
            multiply(num1, num2);
            break;
        case '*':
            division(num1, num2);
            break;
    }
}

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}