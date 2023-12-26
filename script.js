//declaring and initializing variables
let toDisplay = '0';
let memory = [];
let op= null;
let resultor= null;
let i=1;

// math functions:
let add = (var1, var2) => var1+var2;
let subtract = (var1, var2) => var1-var2;
let multiply = (var1, var2) => var1*var2;
let divide = (var1, var2) => var1/var2;

// operator functions:
let operate = (var1,var2,op) => {
    if      (op==='+')   return add(var1,var2);
    else if (op==='-')   return subtract(var1,var2);
    else if (op==='*')   return multiply(var1,var2);
    else if (op==='/')   return divide(var1,var2);
}







// clicking on number buttons
const numbersClicked = document.querySelector(".numberButtons");
numbersClicked.addEventListener("click", event=>{
    const displayedNb= event.target.closest("button");
    toDisplay += displayedNb.textContent;
    updateDisplay(toDisplay,i);
});


//clicking on operator buttons
const operatorsClicked = document.querySelector(".opButtons")
operatorsClicked.addEventListener("click", event=>{
    op = event.target.closest("button").textContent; 
    memory[i]=parseFloat(toDisplay);//storing the value of a number
    updateDisplay(op,i);
    toDisplay='';
});

//clicking on resultors
const resultorsClicked = document.querySelector(".resultors")
resultorsClicked.addEventListener("click", event => {
    resultor = event.target.closest("button").textContent;
    if(resultor==="="){
        memory[++i]= parseFloat(toDisplay);
        toDisplay=operate(memory[i-1],memory[i],op).toString();
    }
    else return updateDisplay(toDisplay='0',i=0); //clear display and reset variables
    updateDisplay(toDisplay,i);
});


//displaying function
let updateDisplay = (toDisplay,i) => {
    document.getElementById("display").innerText=toDisplay;   
    };
