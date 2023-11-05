const btn = document.getElementById("btn");
const color = document.getElementById("color");
var string;

btn.addEventListener("click", () =>{
    document.body.style.background = randomBg();
    color.classList.add('active');
    color.innerText = string;
});

function randomBg(){
    string = `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`;
    return string;
}