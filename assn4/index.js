function addElement1(){
    const el = document.getElementById("input1");
    const div = document.createElement("div"); 

    div.addEventListener("click", () => {
        div.remove(); 
    }); 
    div.addEventListener("keypress", (e) => {
        if (e.key === " ") {
            div.remove(); 
        } 
    }); 
    div.innerHTML = el.value; 
    div.classList.add("ingredient");
    div.setAttribute("aria-labelledby", "ingredient-object")
    div.setAttribute("aria-roledescription", "Click or press space to remove the ingredient.") 
    div.tabIndex = 0; 
    document.getElementById("inputResults1").appendChild(div); 
    document.getElementById("input1").value = '';
}

document.getElementById("button1").addEventListener("click", addElement1); 
document.getElementById("button1").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addElement1(); 
    }
}); 

document.getElementById("input1").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addElement1(); 
    }
})

function addElement2(){
    const el = document.getElementById("input2");
    const div = document.createElement("div"); 
    div.addEventListener("click", () => {
        div.remove(); 
    }); 
    div.addEventListener("keypress", (e) => {
        if (e.key === " ") {
            div.remove(); 
        } 
    }); 
    div.innerHTML = el.value; 
    div.classList.add("instruction");
    div.tabIndex = 0; 
    document.getElementById("inputResults2").appendChild(div); 
    document.getElementById("input2").value = '';
}

document.getElementById("button2").addEventListener("click", addElement2); 
document.getElementById("button2").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addElement2(); 
    }
    
}); 

document.getElementById("input2").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addElement2(); 
    }
});

document.getElementById("reset").addEventListener("click", resetAll); 
document.getElementById("reset").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        resetAll(); 
    }
    
});

function resetAll() {
    const parent = document.getElementById("inputResults1"); 
    const parent2 = document.getElementById("inputResults2");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    while (parent2.firstChild) {
        parent2.removeChild(parent2.firstChild);
    }
    document.getElementById("input0").value = ''; 
    document.getElementById("input1").value = ''; 
    document.getElementById("input2").value = '';
}

document.getElementById("save").addEventListener("click", saveRecipe); 
document.getElementById("save").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        saveRecipe(); 
    }
});

function saveRecipe() {
    const recipeName = document.getElementById("input0").value;  
    const recipeIngredients = document.getElementById("inputResults1").childNodes;  
    const recipeInstructions = document.getElementById("inputResults2").childNodes; 
    let recipe1 = []; 
    let recipe2 = []; 
    for (const node of recipeIngredients) {
        recipe1.push(node.innerHTML); 
    }
    for (const node of recipeInstructions){
        recipe2.push(node.innerHTML); 
    } 
    const completeRecipe = {
        title : recipeName, 
        ingredients : recipe1, 
        instructions : recipe2
    }
    writeRecipeToFile(completeRecipe); 
    
}

function displayError(error) {
    const el = document.getElementById("error-message"); 
    el.innerHTML = error; 
    el.dataset.open = "true"; 
    setTimeout(() => {
        el.dataset.open = false; 
        el.innerHTML = "";
    }, 5000); 
}


