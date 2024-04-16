async function setUpApp() {
    const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
    const body = await result.json(); 
    printQuote(body); 
}

async function getQuote(){
    document.getElementById("body").classList.add("moveUp");
    if (document.getElementById("searchBar").value === ""){
        document.getElementById("notPinned").innerHTML = ""; 
        const div = document.createElement("div"); 
        div.classList.add("quoteBox"); 

        div.innerHTML = `
        <div tabindex="0" aria-labelledby="error" aria-roledescription="Indicates an error has occurred.">Error: 
        Empty searchbar submitted. 
        Please submit a name.</div>
        `;

        document.getElementById("notPinned").appendChild(div); 
        div.classList.add("error"); 
    }
    else {
        document.getElementById("notPinned").innerHTML = ""; 

        const result = await fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${document.getElementById("searchBar").value}`);
        const body = await result.json(); 
        for (list of body.results) {
            printQuote(list); 
        }
    }
}

async function printQuote(quote){
    const div = document.createElement("div"); 
    div.setAttribute("tabindex", "0"); 
    div.setAttribute("aria-labelledby", "quote"); 
    div.setAttribute("aria-roledescription", "Click or press Enter to pin or unpin this quote.")
    div.classList.add("quoteBox"); 

    div.innerHTML = `
    <div class="quote""></div>
    <div class="author"></div>
    `; 

    div.querySelector(".quote").innerText = quote.content; 
    div.querySelector(".author").innerText = "- " + quote.author;

    let pin = false; 

    div.addEventListener("click", () => {
        div.remove(); 
        if (pin) {
            document.getElementById("notPinned").prepend(div); 
            div.classList.remove("pinnedBox"); 
            pin = false; 
        }
        else {
            document.getElementById("pinned").appendChild(div); 
            div.classList.add("pinnedBox"); 
            pin = true; 
        }
    })

    div.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            console.log("sup"); 
            div.remove(); 
            if (pin) {
                document.getElementById("notPinned").prepend(div); 
                div.classList.remove("pinnedBox"); 
                pin = false; 
            }
            else {
                document.getElementById("pinned").appendChild(div); 
                div.classList.add("pinnedBox"); 
                pin = true; 
            }
        }
    })

    document.getElementById("notPinned").appendChild(div); 

}


setUpApp();

document.getElementById("searchBar").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getQuote(); 
    }
}); 

document.getElementById("searchButton").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.target.click(); 
    }
}); 

document.getElementById("searchButton").addEventListener("click", () => {
    getQuote();
}); 
