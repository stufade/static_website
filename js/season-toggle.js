const seasons = document.querySelectorAll(".content__season__choose__button");
const first = seasons[0];
const second = seasons[1];
first.addEventListener("click", (e) => {
    first.classList.add("active");
    second.classList.remove("active");
});
second.addEventListener("click", (e) => {
    second.classList.add("active");
    first.classList.remove("active");
});