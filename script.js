class DisplayManaging {
    constructor() {
        this.displayElement = document.getElementById('display');
        this.resultDisplay = document.getElementById('resultDisplay');
    }

    clear() {
        this.displayElement.innerText = '';
        this.resultDisplay.innerText = '';
    }

    update(value) {
        if (this.displayElement.innerText == '0') {
            this.displayElement.innerText = value;

        } else {
            this.displayElement.innerText += value;
        }
    }

    updateOperator(e) {
        if (this.displayElement.innerText !== '0') {
            this.displayElement.innerText += `  ${e} `;
        }
    }

    deleteLastCharacter() {
        const text = this.displayElement.innerText;
        this.displayElement.innerText = text.slice(0, -1);
    }
    updateResutlDisply(e) {
        this.resultDisplay.innerText = ` = ${e}`;
    }
}

class Calculator {
    constructor(operation) {
        this.operattions = operation;
        this.display = new DisplayManaging();
        this.firstNum = '';
        this.secondNum = '';
        this.operator = '';
        this.operatorCount = 0;
    }

    handleClear() {
        this.firstNum = '';
        this.secondNum = '';
        this.operator = '';
        this.display.clear();
    }

    handleDelete() {
        this.display.deleteLastCharacter();
    }

    handleNumber(number) {
        if (this.operator === '') {
            this.firstNum += number;
        } else {
            this.secondNum += number;
        }
        this.display.update(number);
    }

    calculate() {
        if (this.operator !== '' && this.secondNum !== '') {
            let num1 = parseInt(this.firstNum);
            let num2 = parseInt(this.secondNum);
            let Currentoperator = this.operator;
            let result = this.operattions[Currentoperator](num1, num2)
            this.display.updateResutlDisply(result);
            this.firstNum = result;
            this.secondNum = '';
        }
    }

    handleOperatorBtn(e) {
        const operatorMapping = {
            '+': 'add',
            '-': 'subtraction',
            'x': 'multiplication',
            '÷': 'division'
        };
        const operatorName = operatorMapping[e]
        this.operator = operatorName;
        this.display.updateOperator(e)
        this.calculate();
    }

    handleEqualBtn() {
        this.calculate();
    }
}

class Operations {
    add(num1, num2) {
        return num1 + num2;
    }

    division(num1, num2) {
        return num1 / num2;
    }

    subtraction(num1, num2) {
        return num1 - num2;
    }

    multiplication(num1, num2) {
        return num1 * num2;
    }
}


class CalculatorUI {
    constructor(calculator) {
        this.calculator = calculator;
        this.numberButtons = document.querySelectorAll('.btns');
        this.operatorButtons = document.querySelectorAll('.operator');
        this.deleteButton = document.getElementById('deleteBtn');
        this.clearButton = document.getElementById('clearBtn');
        this.equalButton = document.getElementById('equalsBtn');

        this.attachEventListeners();
    }

    attachEventListeners() {
        this.numberButtons.forEach(btn => btn.onclick = (e) => this.calculator.handleNumber(e.target.innerText));
        this.operatorButtons.forEach(operatorBtn => operatorBtn.onclick = (e) => this.calculator.handleOperatorBtn(e.target.innerText));
        this.equalButton.onclick = (e) => this.calculator.handleEqualBtn();
        this.clearButton.onclick = (e) => this.calculator.handleClear();
        this.deleteButton.onclick = (e) => this.calculator.handleDelete();
    }
}
const calculator = new Calculator(new Operations);
const calculatorUI = new CalculatorUI(calculator);