const iconMenu = document.querySelector("#icon-menu"),
    menu = document.querySelector("#menu");

iconMenu.addEventListener("click", (e) => {

    menu.classList.toggle("active");
    document.body.classList.toggle("opacity");

})

