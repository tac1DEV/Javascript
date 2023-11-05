/*Js popup*/
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");
const hearts = document.getElementsByClassName("heart");

open.addEventListener("click", () => {
    container.classList.add("active");

    /*Js heart-rain*/
    function createHeart() {
    const heart = document.createElement("div");
    
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = Math.random() * 2 + 2 + "s";

    heart.innerText = "💜";
    
    document.body.appendChild(heart);

    setInterval(() => { 
        heart.remove();
    }, 5000);

}

const create = setInterval(createHeart, 50);

function stop() {
     clearInterval(create);
}

setInterval(stop, 5000);
/*Js heart-rain*/

});

close.addEventListener("click", () => {
    container.classList.remove("active");
});
/*Js popup*/
    
