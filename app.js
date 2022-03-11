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
const deleteOne=selectId('delete');
const equals=selectId('equals');

// get class
const previousOperant = getClass('.previous_operant');
const currentOperant = getClass('.current_operant');
const operator = getClass('.operator');
const number = getClass('.number');

//common display on UI function
function displayUI(){

}

//01 number button event
number.forEach(numBtn=>{
numBtn.addEventListener('click',function(){
    console.log(numBtn.textContent);
})
})
