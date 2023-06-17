// Get the button:
let mybutton = document.getElementById("scroll-up");
const burguer = document.getElementById("burguer");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 850 & window.innerWidth > 780) {
        // adjuts the value above to decide when the scroll button displays
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

burguer.addEventListener("click", function(){
    burguer.classList.toggle("open")
    const burguerMenu = document.querySelectorAll(".nav-item-burguer");
    openMenu.classList.toggle("show-mobile")
    closeMenu.classList.toggle("hide-mobile");
    burguerMenu.forEach((burguerMenu) => {
        burguerMenu.classList.toggle("show")
    })
})
// to stop the animation when hovered
const icons = Array.from(document.querySelectorAll(".carrousel-icons"));

icons.forEach(icon =>{
    icon.addEventListener('mouseover', () => {
        icon.style.animationPlayState = 'paused';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.animationPlayState = 'running';
    });
})
