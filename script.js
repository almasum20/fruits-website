const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = document.querySelector(".nav-close");
const navbarMenu = document.querySelector("#navbar .links");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .button-link a");
// show form popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// hide form popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? "add" : "remove"](
            "show-signup"
        );
    });
});


// menu bar clicking here 
const toggleBar = document.querySelector("#toggle");
const links = document.querySelector("#navbar .links");
const navlinksa = document.querySelectorAll(".links li");

for (let i = 0; i < navlinksa.length; i++) {
    navlinksa[i].addEventListener("click", () => {
        toggleBar.classList.remove("active");
        links.classList.remove("active");
    });
}



toggleBar.addEventListener("click", () => {
    links.classList.toggle("active");
    toggleBar.classList.toggle("active");
});
