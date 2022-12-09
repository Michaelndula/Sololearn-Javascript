const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit){
    const { displayValue, waitingForSecondOperand } = calculator;

    if(waitingForSecondOperand === true){
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    }else{
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimal(dot){
    //if the displayValue does not contain a decimal point
    if(!calculator.displayValue.includes(dot)){
        //append the decimal point
        calculator.displayValue += dot;
    }
};

function handleOperator(nextOperator){
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseInt(displayValue);

    if(operator && calculator.waitingForSecondOperand){
        calculator.operator = nextOperator;
        return;
    }

    if(firstOperand == null){
        calculator.firstOperand = inputValue;
    }else if(operator){
        const currentValue = firstOperand || 0;
        const result = performCalculation[operator](currentValue, inputValue)

        calculator.displayValue = string(result);
        calculator.operator = nextOperator;
    }

    const perfomCalculation = {
        '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
        '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
        '=': (firstOperand, secondOperand) => secondOperand
    }
};

function resetCalculator(){
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

function updateDisplay(){
    const display = document.querySelector('.calculator-screenshot');
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event.target;
    if(!target.matches('button')){
        return;
    }

    if(target.classList.contains('operator')){
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if(target.classList.contains('decimal')){
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if(target.classList.contains('all-clear')){
        resetCalculator();
        updateDisplay();
        return;
    }

    inputDigit(targe.value)
    updateDisplay();
})