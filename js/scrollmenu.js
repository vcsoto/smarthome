const menuBox = document.querySelector(".menubox");
const body = document.body;

function menuscroll() {
    if (window.innerWidth <= 576) {
        if (menuBox.classList.toggle("desplegar")) {
            menuBox.style.width = 80 + "%";
            body.classList.add("noscroll");

        } else {
            menuBox.removeAttribute("style");
            body.classList.remove("noscroll");
        }
    }
}