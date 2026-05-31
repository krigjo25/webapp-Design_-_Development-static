const rainbowbutton = document.getElementById("rainbow");
const rainbow: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function change(): void { document.body.style.background = rainbow[Math.floor(7 * Math.random())]; }

if (rainbowbutton) { rainbowbutton.addEventListener('click', change); }