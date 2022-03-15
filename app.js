//select id funftion
function selectId(id) {
    return document.getElementById(id);
}
//select id funftion
function getClass(classname) {
    return document.querySelectorAll(classname);
}

// get Id 
const allClear = selectId('all-clear');
const deleteOne = selectId('delete');
const equals = selectId('equals');

// get class
const previousOperantElement = document.querySelector('.previous_operant');
const currentOperantElement = document.querySelector(".current_operant");
const operator = getClass('.operator');
const number = getClass('.number');

//global varible declare
let previousOperant = '';
let currentOperant = '';
let operatorchange = '';
let newoper="";

//01 func value change operator for global variable declare
function valueChange(value) {
    currentOperant += value;
}

//02 func value change operator for global variable declare
function operatorChange(operator) { 
    if (currentOperant === "") return;
   
    previousOperant = currentOperant;
    newoper = operator;
    
    operatorchange = previousOperant;
    currentOperant = '';
  
    
}


//func common display on UI function
function displayUI() {
    currentOperantElement.innerHTML = currentOperant;
    previousOperantElement.innerHTML = ` ${operatorchange} ${newoper}`;
}

//01 number button event
number.forEach(numBtn => {
    numBtn.addEventListener('click', function () {
        //check for reapeat num value "."
        if (numBtn.textContent === "." & currentOperant.includes(".")) return;
        //
        valueChange(numBtn.textContent);
        displayUI();
       
        
    })
})
//02 operator button event
operator.forEach(operatorbtn => {
    operatorbtn.addEventListener('click', function () {
        operatorChange(operatorbtn.textContent);
        displayUI();
    })
})