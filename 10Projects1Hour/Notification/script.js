const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
    console.log(index);
})

function createNotification(){
    const notif = document.createElement('div');
    
    notif.classList.add("toast");
    
    notif.innerText = "Ceci est une notification.";

    container.appendChild(notif);

    notif.addEventListener("click", () => {
        notif.remove();
    });

    setTimeout(() => {
        notif.remove();
        index--;
    }, 3000);
}