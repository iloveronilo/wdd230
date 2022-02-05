// NAVIGATION
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("navButton").classList.toggle("open");
}

const x = document.getElementById("navButton");
x.onclick = toggleMenu;