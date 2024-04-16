document.getElementById("custom-button").addEventListener("click", () => {
    console.log("Clicked!") 
}); 
document.getElementById("custom-button").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        console.log("Enter!"); 
    }
}); 

// Will have to add animation for when you press "Enter"