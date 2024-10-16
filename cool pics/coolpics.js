const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    const menuButton = document.querySelector(".menu-button");
    
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide"); // Show the menu
        menuButton.classList.add("hide"); // Hide the menu button
    } else {
        menu.classList.add("hide"); // Hide the menu
        menuButton.classList.remove("hide"); // Show the menu button
    }
}

handleResize();
window.addEventListener("resize", handleResize);