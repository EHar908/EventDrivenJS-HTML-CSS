document.getElementById("nav-button").addEventListener("click", () => {
    console.log("I'm being clicked!"); 
    document.getElementsById("nav-drawer").classList.toggle("open"); 
});