// Image Carousel Code

function intervalAnimation(slider) {
    if (slider.children.length === 1) {
        slider.appendChild(slider.firstElementChild.cloneNode(true)); 
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    }
    else if(slider.children.length === 2) { 
        slider.appendChild(slider.children[0].cloneNode(true)); 
        slider.appendChild(slider.children[1].cloneNode(true)); 
    }
    else if(slider.children.length === 3) {
        slider.appendChild(slider.children[0].cloneNode(true)); 
        slider.appendChild(slider.children[1].cloneNode(true)); 
        slider.appendChild(slider.children[2].cloneNode(true)); 
    }


    setInterval(() => {
        slider.animate([{
            transform: 'translateX(-400px)'
        }], {
            duration: 200, 
            easing: "ease",
        }).onfinish = () => { 
            const firstChild = slider.firstElementChild;
            firstChild.remove(); 
            slider.appendChild(firstChild.cloneNode(true));
        }
    }, 2500);  
}

const carouselSlider = document.getElementById("carousel-slider"); 
intervalAnimation(carouselSlider); 



// Navdrawer Code
document.getElementById("nav-button").addEventListener("click", () => {
    document.getElementById("nav-drawer").classList.toggle("open"); 
});


//
// Example Code Section
//

//Navbar
document.getElementById("navbar-html").innerText = `<nav class="navbar">
<section class="navbar-title-section">
    <button class="navbar-menu-button" id="navbar-menu-button">
        <span class="material-symbols-outlined">menu</span>
    </button>
    Website Title
</section>
<section class="navbar-link-section">
    //To insert a link, type <a href="the link">
    <a>Link 1</a>
    <a>Link 2</a>
    <a>Link 3</a>
</section>
</nav>
`;
document.getElementById("navbar-css").innerText = `.navbar {
    display: flex; 
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    padding: 16px; 
    background-color: var(--secondary-color);
    color: var(--color-on-secondary); 
    justify-content: space-between; 
    z-index: 999; 
    border-bottom: 16px; 
}

.navbar .navbar-title-section {
    font-weight: bold; 
    display: flex; 
    align-items: center; 
    gap: 8px; 
}

.navbar .navbar-title-section .navbar-menu-button {
    border: none; 
    background: none; 
    margin: 0; 
    padding: 0; 
    cursor: pointer; 
    padding-left: 8px; 
}

.navbar .navbar-link-section {
    display: flex; 
    align-items: center;
    gap: 32px; 
    cursor: pointer; 
    padding-right: 8px; 
}`; 
document.getElementById("navbar-js").innerText = `document.getElementById("navbar-menu-button").addEventListener("click", () => {
    console.log("The navbar menu button was clicked!")
})`; 


//Navigation Drawer

document.getElementById("navdrawer-html").innerText = `<button class="nav-button" id="nav-button">
    <span class="material-symbols-outlined">menu</span>
</button>
<nav class="nav-drawer" id="nav-drawer">
    <a>Home</a>
    <a>Dashboard</a>
    <a>Profile</a>
    <a>Settings</a>

    //Note: Like with the navigation bar, if you'd like to add links to the items 
    //in the drawer, type the following to the a tags: 
    //<a href="a link">
</nav>`;

document.getElementById("navdrawer-css").innerText = `.nav-drawer {
    display: flex; 
    flex-direction: column; 
    box-sizing: border-box; 
    position: relative; 
    top: 0px; 
    left: -200px; 
    width: 200px; 
    bottom: 0px; 
    background-color: var(--box-color);
    color: var(--text-color);
    transition: all .3s ease; 
    padding: 16px; 
    gap: 8px; 

    //If you want the drawer to be at the top of the screen, type:
    // position: absolute
    // top: 55px; 
}

#drawer-section { 
    background-color: var(--box-color); 
}

.nav-button {
    border: none; 
    margin-left: 8px; 
    margin-top: 8px; 
    padding: 0px; 
    cursor: pointer; 
    background-color: var(--box-color);
    color: var(--text-color);
}

.open {
    left: 0px; 
}

#nav-drawer-border{
    overflow: hidden; 

    //If you'd like a border like in this example, type: 
    //border: 1px solid var(--box-color); 

}`; 

document.getElementById("navdrawer-js").innerText = `document.getElementById("nav-button").addEventListener("click", () => {
    document.getElementById("nav-drawer").classList.toggle("open"); 
})`;

//Buttons

document.getElementById("buttons-html").innerText = `<span id="buttons">
<button class="material-symbols-outlined custom-button" id="custom-button">menu</button>
<button class="material-symbols-outlined floating-action-button" 
    id="floating-action-button">add</button>
</span>`;

document.getElementById("buttons-css").innerText = `/* Button 1: Custom Button */
//Note: If you'd like to make both buttons larger or smaller, you can specify the 
//width and height of each like so: 
// width: 64px; 
// height: 64px; 
// //And then make your border-radius half of the size: 
// border-radius: 32px; 

.custom-button {
    display: flex; 
    border-radius: 16px; 
    transition: all .2s ease; 
    cursor: pointer; 
    font-size: 24px; 
    align-items: center; 
    text-transform: uppercase;
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 16px; 
}

.custom-button:hover{
    background-color: var(--background-color-2);
    color: var(--text-color-2); 
}

.custom-button:active{
    transition: all; 
    background-color: var(--text-color-3); ; 
}

/* Button 2: Floating Action Button */
.floating-action-button {
    display: flex; 
    border-radius: 16px; 
    box-shadow: 0 7px #999;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: all .3s ease; 
    cursor: pointer; 
    font-size: 24px; 
    align-items: center; 
    text-transform: uppercase;
}

.floating-action-button:hover{
    background-color: var(--background-color-2);
    color: var(--text-color-2); 
}

.floating-action-button:active{
    transition: all; 
    background-color: var(--text-color-3); 
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}`;

document.getElementById("buttons.js").innerText = `document.getElementById("custom-button").addEventListener("click", () => {
    console.log("Clicked!")
}); 
document.getElementById("custom-button").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        console.log("Enter!"); 
    }
});`;


//Image Carousel

document.getElementById("image-html").innerText =
`<div class="carousel">
    <div class="carousel-slider" id="carousel-slider">
        <img src="" alt="" width="400px">
        <img src="" alt="" width="400px">
        <img src="" alt="" width="400px">

        //To specify the images in the carousel, 
        //write the name of the file along with the extension.
        //For example, src="picture.jpg" would work. 
    </div>
</div>
`;

document.getElementById("image-css").innerText = `.carousel {
    overflow: hidden; 
    width: 100%
}

.carousel .carousel-slider {
    display: flex; 
}
`;

document.getElementById("image-js").innerText = `function intervalAnimation(slider) {
    if (slider.children.length === 1) {
        slider.appendChild(slider.firstElementChild.cloneNode(true)); 
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    }
    else if(slider.children.length === 2) { 
        slider.appendChild(slider.children[0].cloneNode(true)); 
        slider.appendChild(slider.children[1].cloneNode(true)); 
    }
    else if(slider.children.length === 3) {
        slider.appendChild(slider.children[0].cloneNode(true)); 
        slider.appendChild(slider.children[1].cloneNode(true)); 
        slider.appendChild(slider.children[2].cloneNode(true)); 
    }
    //Note: Depending on how big you want the carousel to be, 
    //you may have to either enlarge the pictures width OR 
    //copy and past a repeat of the slider.appendChild code. 
    //For instance, you could have it look like the following: 
    // else if(slider.children.length === 3) {
    //     slider.appendChild(slider.children[0].cloneNode(true)); 
    //     slider.appendChild(slider.children[1].cloneNode(true)); 
    //     slider.appendChild(slider.children[2].cloneNode(true)); 
    //     slider.appendChild(slider.children[0].cloneNode(true)); 
    //     slider.appendChild(slider.children[1].cloneNode(true)); 
    //     slider.appendChild(slider.children[2].cloneNode(true)); 
    // }

    setInterval(() => {
        slider.animate([{
            transform: 'translateX(-400px)'
        }], {
            duration: 200, 
            easing: "ease",
        }).onfinish = () => { 
            const firstChild = slider.firstElementChild;
            firstChild.remove(); 
            slider.appendChild(firstChild.cloneNode(true));
        }
    }, 2500);  
}

const carouselSlider = document.getElementById("carousel-slider"); 
intervalAnimation(carouselSlider); `;


// Loading Spinners

document.getElementById("loader-html").innerText = 
`//Note: Loader 1 represents a normal loader,
//Loader 2 represents an interactable loader,
//and Loader 3 shows a loader in letters. 

<div class="loader-1">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
</div>
<div class="loader-2">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
</div>
<div class="loader-3">
    <div class="word">L</div>
    <div class="word">o</div>
    <div class="word">a</div>
    <div class="word">d</div>
    <div class="word">i</div>
    <div class="word">n</div>
    <div class="word">g</div>
    <div class="word">.</div>
    <div class="word">.</div>
    <div class="word">.</div>
</div>`;

document.getElementById("loader-css").innerText = `@keyframes dots {
    50% {
        transform: translateY(-12px);
    }
    100% {
        transform: translateY(0px); 
    }
}

.loader-1 {
    display: flex; 
    gap: 16px; 
    margin: 32px; 
}

.dot {
    background-color: var(--text-color); 
    width: 64px; 
    height: 64px; 
    border-radius: 32px; 
    animation: dots; 
    animation-duration: 1s; 
    animation-timing-function: ease; 
    animation-iteration-count: infinite; 
}

.dot:nth-child(2) {
    animation-delay: .33s; 
}

.dot:nth-child(3) {
    animation-delay: .66s; 
}

.loader-2{
    display: flex; 
    gap: 16px; 
    margin: 32px;
}

.loader-2:hover .dot{
    width: 96px; 
    height: 96px; 
    border-radius: 48px;  
}

.word{
    font-size: 64px; 
    color: var(--text-color); 
    animation: dots; 
    animation-duration: 1s; 
    animation-timing-function: ease; 
    animation-iteration-count: infinite; 
}

.word:nth-child(2) {
    animation-delay: .11s; 
}

.word:nth-child(3) {
    animation-delay: .22s; 
}

.word:nth-child(4) {
    animation-delay: .33s; 
}

.word:nth-child(5) {
    animation-delay: .44s; 
}

.word:nth-child(6) {
    animation-delay: .55s; 
}

.word:nth-child(7) {
    animation-delay: .66s; 
}

.word:nth-child(8) {
    animation-delay: .77s; 
}

.word:nth-child(9) {
    animation-delay: .88s; 
}

.word:nth-child(10) {
    animation-delay: .99s; 
}

.loader-3{
    display: flex; 
    gap: 16px; 
    margin: 32px;
}`;