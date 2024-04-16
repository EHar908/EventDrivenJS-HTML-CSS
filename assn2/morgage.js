let field1 = document.getElementById("loan"); 
let field2 = document.getElementById("interest");
let field3 = document.getElementById("years"); 
const output2 = document.getElementById("mort-result");
let result = payment(parseFloat(field1.value), parseFloat(field2.value), parseFloat(field3.value)); 
output2.innerHTML = result; 

field1.addEventListener("blur", () => {
    if(!field1.value){
        field1.value = "340000"; 
        result = payment(parseFloat(field1.value), parseFloat(field2.value), parseFloat(field3.value)); 
        output2.innerHTML = result; 
    }
    else{
        result = payment(parseFloat(field1.value), parseFloat(field2.value), parseFloat(field3.value)); 
        output2.innerHTML = result; 
    }

})

field2.addEventListener("blur", () => {
    if(!field2.value){
        field2.value = "5.5"; 
        result = payment(parseFloat(field1.value), parseFloat(field2.value), parseFloat(field3.value)); 
        output2.innerHTML = result; 
    }
    else{
        result = payment(parseFloat(field1.value), parseFloat(field2.value), parseFloat(field3.value)); 
        output2.innerHTML = result; 
    }
})

field3.addEventListener("blur", () => {
    if(!field3.value){
        field3.value = "30"; 
        result = payment(parseFloat(field1.value), parseFloat(field2.value), parseFloat(field3.value)); 
        output2.innerHTML = result; 
    }
    else{
        result = payment(parseFloat(field1.value), parseFloat(field2.value), parseFloat(field3.value)); 
        output2.innerHTML = result; 
    }
})

function payment(loan, interest, years) {
    if(Number.isNaN(loan)){
        return "The loan must only be in numbers."
    }
    else if (Number.isNaN(interest)){
        return "The annual interest must only be in numbers."
    }
    else if (Number.isNaN(years)){
        return "The years must only be in numbers."
    }
    else{
        let p = loan; 
        let r = interest / 1200; 
        let n = years * 12; 
        return (p * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))).toFixed(2); 
        
        
    }
    
};