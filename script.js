//dom elements
const display = document.getElementById("display");
const equalBtn =  document.getElementById('equalsBtn');
const btns = document.querySelectorAll(".btns");
const deleteBtn = document.getElementById('deleteBtn');
const clearBtn = document.getElementById('clearBtn');

//Event listeners;
deleteBtn.addEventListener('click', (e) =>{
  display.value = display.value.slice(0, -1);
})

btns.forEach(e => {
    e.addEventListener('click', (e) => {
        display.value += e.target.innerText
    })
 })

 clearBtn.onclick = (e) => display.value = '';


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