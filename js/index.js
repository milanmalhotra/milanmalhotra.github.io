window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

let sidebarCollapse = document.querySelector("#sidebar-collapse");
let sidebar = document.querySelector("#sidebar");
let hlth360 = document.querySelector("#hlth360-fig");
let apiprac = document.querySelector("#apipractice-fig");
let unitygame = document.querySelector("#firstunitygame-fig");
let drugrunners = document.querySelector("#drugrunners-fig");
let parkingassist = document.querySelector("#parkingassist-fig");
let discordbot = document.querySelector("#discordbot-fig");
let figures = document.querySelectorAll("figure");

sidebarCollapse.addEventListener("click", function() {
    sidebarCollapse.classList.remove("sidebar-bounce");
    sidebar.classList.toggle("active");
});

figures.forEach(figure => {
    figure.addEventListener("click", function() {
        showProject(figure.id);
    });
});

function showProject(id) {
    switch (id) {
        case "hlth360-fig":
            window.open("http://2ml.7b7.myftpupload.com/milans-landing-page-1/", "_blank");
        case "apipractice-fig":
            break;
        case "firstunitygame-fig":
            window.open("https://milmalho.itch.io/project-breakout", "_blank");
        case "drugrunners-fig":
            break;
        case "parkingassist-fig":
            break;
        case "discordbot-fig":
            break;
    }
};