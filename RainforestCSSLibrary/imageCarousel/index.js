function intervalAnimation(slider) {
    if (slider.children.length === 1) {
        slider.appendChild(slider.firstElementChild.cloneNode(true)); 
        slider.appendChild(slider.firstElementChild.cloneNode(true));
        slider.appendChild(slider.firstElementChild.cloneNode(true));
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    }
    else if(slider.children.length === 2) { 
        const secondChild = slider.lastElementChild.cloneNode(true); 
        slider.appendChild(slider.firstElementChild.cloneNode(true)); 
        slider.appendChild(secondChild); 
        slider.appendChild(slider.firstElementChild.cloneNode(true)); 
    }
    else if(slider.children.length === 3) {
        slider.appendChild(slider.firstElementChild.cloneNode(true)); 
        slider.appendChild(slider.firstElementChild.cloneNode(true)); 
    }
    else if(slider.children.length === 4) {
        slider.appendChild(slider.firstElementChild.cloneNode(true)); 
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