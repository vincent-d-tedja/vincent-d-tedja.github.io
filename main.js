const navbarContainer = document.getElementById("navbarContainer");
const navbarToggler = document.getElementById("navbarToggler");
const navbarCollapse = document.getElementById("navbarCollapse");
const mainBody = document.getElementById("main");
const navbarLogo = document.getElementById("navbarLogo");

navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("active");
    navbarToggler.classList.toggle("pushed");
    navbarCollapse.classList.toggle("sidemenu");
    mainBody.classList.toggle("pushed");
    navbarLogo.classList.toggle("mobilepushed");
})

window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;
    if (scrollValue >= 70) {
        navbarContainer.classList.add("shrinked");
    } else {
        navbarContainer.classList.remove("shrinked");
    }
})