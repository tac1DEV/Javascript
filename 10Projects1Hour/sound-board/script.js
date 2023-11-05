const sounds = ["dropthebass","fart1","fart2","coins","MariOOF","sheesh","wow","wtf","yooo"];

const wrapper = document.getElementById("wrapper");

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSound();
        document.getElementById(sound).play();
    });
    
    wrapper.appendChild(btn);
})

function stopSound(){
    sounds.forEach((sound) => {
        document.getElementById(sound).load();
    })
}