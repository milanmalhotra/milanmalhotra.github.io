window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

let sidebarCollapse = document.querySelector("#sidebarCollapse");
let sidebar = document.querySelector("#sidebar");

sidebarCollapse.addEventListener("click", function() {
    sidebarCollapse.classList.remove("sidebarBounce");
    sidebar.classList.toggle("active");
})