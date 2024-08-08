document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".nav").classList.add("active");
    document.body.classList.add('stop-scroll');
})
document.querySelector(".nav__close").addEventListener("click", function () {
    document.querySelector(".nav").classList.remove("active");
    document.body.classList.remove('stop-scroll');
})

