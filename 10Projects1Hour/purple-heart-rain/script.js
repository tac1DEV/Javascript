function createHeart() {
    const heart = document.createElement("div");
    
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = "💜";
    
    document.body.appendChild(heart);

    setInterval(() => { 
        heart.remove();
    }, 5000);

}

const create = setInterval(createHeart, 300);

function stop() {
     clearInterval(create);
}

setInterval(stop, 3000);