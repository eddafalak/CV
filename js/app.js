const menuBtn = document.querySelector("#menuBtn");
const OpenIcon = document.querySelector("#openIcon");
const closeIcon = document.querySelector("#closeIcon");
const mobileNav = document.querySelector("#mobileNav");
const mobileLinks = mobileNav.querySelectorAll("a");

function toggleMenu() {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";

    menuBtn.setAttribute("aria-expanded", !isExpanded);

    mobileNav.setAttribute("aria-hidden", isExpanded);

    if (!isExpanded) {
        closeIcon.style.display = "block";
        OpenIcon.style.display = "none";
        mobileNav.classList.add("open");
    } else {
        closeIcon.style.display = "none";
        OpenIcon.style.display = "block";
        mobileNav.classList.remove("open");
    }
    }
 

menuBtn.addEventListener("click", () => {
    toggleMenu();
});

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if(mobileNav.classList.contains("open")) {
            toggleMenu();
        }
    });
});