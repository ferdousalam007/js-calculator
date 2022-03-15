// create function for get id
function getId(getids) {
    return document.querySelectorAll(getids);
}
// create function for get class
function getClass(getClasses) {
    return document.querySelectorAll(getClasses);
}
//set all id
const output = getId('#output');
const allClear = getId('#all-clear');
const deleting = getId('#delete');
const equals = getId('#equals');

//set all class
const currentOperantElements = document.querySelector('.current_operant');
const previousOperantElements = document.querySelector('.previous_operant');
const number = getClass('.number');
const operator = getClass('.operator');

//global varible declare
let previousOperant = '';
let currentOperant = '';
let operateText = '';
let previousOprate='';
//01 func value change operator for global variable declare
function valueChange(value) {
    currentOperant += value;
}
//02 func value change operator for global variable declare
function operatorChange(value) {
    if(previousOperant){
        previousOperant= calculation();
    }else{
        previousOperant = currentOperant;
    }
    
    operateText=value;
    currentOperant='';
 
}

//calculate function
function calculation(){
    switch (operateText) {
        case '+':
         return Number(previousOperant) + Number(currentOperant);
            break;
        case '-':
         return Number(previousOperant) - Number(currentOperant);
            break;
        case '*':
         return Number(previousOperant) * Number(currentOperant);
            break;
        case '÷':
         return Number(previousOperant) / Number(currentOperant);
            break;
    
        default:
            break;
    }
}



//show UI
function showUi() {
    currentOperantElements.innerHTML = currentOperant;
    previousOperantElements.innerHTML = previousOperant+' '+operateText;

}

// 01 function for get number event
number.forEach(num => {
    num.addEventListener('click', function () {
        const numText = num.textContent;
        if(numText==='.' && currentOperant.includes('.'))return;
        valueChange(numText);
        showUi();

    })
})
// 02 function for get operator event
operator.forEach(operate => {
    operate.addEventListener('click', function () {
        const operateTextOne = operate.textContent;
        if(!currentOperant)return;
        operatorChange(operateTextOne);
        showUi();
    })
})
