const rainbowbutton = document.getElementById("rainbow");
const rainbow: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function change(): void {
    const main = document.querySelector('main');
    if (main) {
        main.style.background = rainbow[Math.floor(rainbow.length * Math.random())];
    }
}

if (rainbowbutton) { 
    rainbowbutton.addEventListener('click', change); 
}
