const toggle = document.getElementById("toggle");
const mode = document.getElementById("mode");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const text = document.getElementById("texteMode");

toggle.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
    sun.classList.toggle("active", e.target.checked);
    moon.classList.toggle("active", e.target.unchecked);
    if (text.innerHTML === "Dark Mode") {
        text.innerHTML = "Light Mode";
    } else {
        text.innerHTML = "Dark Mode";
    }
})
