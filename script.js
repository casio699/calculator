//declaring and initializing variables
let toDisplay = 0;
let memory1 = 0;
//math functions:
let add = (var1, var2) => var1+var2;
let subtract = (var1, var2) => var1-var2;
let multiply = (var1, var2) => var1*var2;
let divide = (var1, var2) => var1/var2;

// operate function:
let operate = (var1,var2,op) => {
    if      (op==='+')   {add(var1,var2)}
    else if (op==='-')   {subtract(var1,var2)}
    else if (op==='*')   {multiply(var1,var2)}
    else if (op==='/')   {divide(var1,var2)}
}

// cicking on number buttons
const numberButtonClicked = document.querySelector(".numberButtons");
numberButtonClicked.addEventListener("click", event=>{
    const displayedNb= event.target.closest("button");
    toDisplay=displayedNb.textContent;
    console.log("toDisplay: "+toDisplay);
    const changedisplay=document.getElementById("display");
    changedisplay.innerText+=toDisplay;
    memory1=parseFloat(changedisplay.innerText);//storing the value
    console.log("memory1: "+memory1);
});


//clicking on operator buttons
const operatorButtonClicked = document.querySelector(".opButtons")