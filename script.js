class Display {
    constructor() {
        this.displayElement = document.getElementById('display');
        this.resultDisplay = document.getElementById('resultDisplay');
        console.log(this.resultDisplay);
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

    updateOperator (e) {
        if(this.displayElement.innerText !== '0'){
            this.displayElement.innerText += ` ${e} `
        }
    }

    deleteLastCharacter() {
        const text = this.displayElement.innerText;
        this.displayElement.innerText = text.slice(0, -1);
    }
}


class Calculator extends Display {
    constructor(operation) {
        super();
        this.operattions = operation;
        this.firstNum = '';
        this.secondNum = '';
        this.operator = '';
    }

    handleClear() {
        this.firstNum = '';
        this.secondNum = '';
        this.operator = '';
        this.clear();
    }

    handleDelete() {
        this.deleteLastCharacter();
    }

    handleNumber(number) {
        this.update(number);

        if (this.operator === '') {
            this.firstNum += number;
        } else if (this.operator !== ''){
            this.secondNum += number;
            this.resultDisplay.innerText = this.operattions[this.operator](Number(this.firstNum),Number(this.secondNum));
            this.firstNum = this.resultDisplay.innerText;
            this.operator = '';
            this.secondNum = ''; 
        }

    }

    handleOperatorBtn(e) {
        this.updateOperator(e)
        switch (e) {
            case '+':
                this.operator = 'add';
                break; ``
            case '-':
                this.operator = 'subtraction';
                break;
            case 'x':
                this.operator = 'multiplication';
                break;
            case '÷':
                this.operator = 'division';
            break;
        }
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

        this.attachEventListeners();
    }

    attachEventListeners() {
        this.NumberButtonClicks();
        this.OperatorButtonClicks();
        this.ClearButtonClick();
        this.DeleteButtonClick();
    }

    NumberButtonClicks() {
        this.numberButtons.forEach(btn => {
            btn.onclick = (e) => this.calculator.handleNumber(e.target.innerText);
        })
    }

    OperatorButtonClicks() {
        this.operatorButtons.forEach(operatorBtn => {
        operatorBtn.onclick = (e) = this.calculator.handleOperatorBtn(e.target);
    })
    
}
    ClearButtonClick() {
        this.clearButton.addEventListener('click', () => {
            this.calculator.handleClear();
        });
    }

    DeleteButtonClick() {
        this.deleteButton.addEventListener('click', () => {
            this.calculator.handleDelete();
        });
    }
}


const calculator = new Calculator(new Operations);
const calculatorUI = new CalculatorUI(calculator);