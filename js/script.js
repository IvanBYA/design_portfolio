const navItem = document.querySelector(".nav__item");
const menuBars = document.querySelector(".menu__desplegable");
const barraHeader = document.querySelector(".barra");

menuBars.addEventListener("click", () => {
    navItem.classList.toggle("nav__item--active");
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        CambiarBackgroundBarra();
        CambiarColorMenuBar();
    } else {
        RemoverBackgroundBarra();
        RemoverColorMenuBar();
    }
})

function CambiarBackgroundBarra() {
    barraHeader.classList.add("bg-light");
}
function RemoverBackgroundBarra() {
    barraHeader.classList.remove("bg-light");
}
function CambiarColorMenuBar() {
    menuBars.classList.add("color-negro")
}
function RemoverColorMenuBar() {
    menuBars.classList.remove("color-negro")
}
