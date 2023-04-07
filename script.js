// Get the button:
let mybutton = document.getElementById("scroll-up");
const burguer = document.getElementById("burguer");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 550) {
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
openMenu.classList.toggle("show-mobile");
closeMenu.classList.toggle("hide-mobile")
    console.log(burguerMenu)
    burguerMenu.forEach((burguerMenu) => {
        burguerMenu.classList.toggle("show")
    })
})