const stats = document.querySelector(".stats");
const statsUl = document.querySelector(".stats-ul");

stats.addEventListener("click", (e) => {
    e.preventDefault();
    stats.classList.toggle("stats_active");
    statsUl.classList.toggle("stats-ul_active");
})