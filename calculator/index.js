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