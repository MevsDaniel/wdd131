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
        menu.classList.remove("hide"); 
        menuButton.classList.add("hide"); 
    } else {
        menu.classList.add("hide"); 
        menuButton.classList.remove("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

//viewer stuff
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }


function viewHandler(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'IMG') { 
        const imgSrc = clickedElement.src.split('-sm').join('-full');
        const altText = clickedElement.alt; 
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, altText));
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}
document.querySelector('.gallery').addEventListener('click', viewHandler);