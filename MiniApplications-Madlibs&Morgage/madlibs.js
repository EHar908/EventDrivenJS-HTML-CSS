const madButton = document.getElementById("mad-button");
const output = document.getElementById("madlib-story");

madButton.addEventListener("click", () => {
    const input1 = document.getElementById("name");
    const input2 = document.getElementById("verb1");
    const input3 = document.getElementById("verb2");
    const input4 = document.getElementById("adj");
    const input5 = document.getElementById("madObj");
    let text = madStory(input1.value, input2.value, input3.value, input4.value, input5.value); 
    output.innerHTML = text; 
});

function madStory(noun, verb1, verb2, adj, obj) {
    if (noun === ""){
        return "You must provide a name!";
    }
    else if (verb1 === ""){
        return "You must provide the first verb!";
    
    }
    else if(verb2 === ""){
        return "You must provide the second verb!";
    
    }
    else if (obj === ""){
        return "You must provide an object!";
    }
    else if(adj === ""){
        return "You must provide an adjective!";
    
    }
    else{
        return ("This is an apology from " + noun + ". They wanted to let you know that they " + verb1 + 
        " and " + verb2 + " the " + obj + ". They didn't mean to leave it all " + adj + 
        ", but things happen when it's morbin' time.");
    }
 };







