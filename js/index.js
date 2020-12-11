window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

let sidebarCollapse = document.querySelector("#sidebar-collapse");
let sidebar = document.querySelector("#sidebar");

sidebarCollapse.addEventListener("click", function() {
    sidebarCollapse.classList.remove("sidebar-bounce");
    sidebar.classList.toggle("active");
})