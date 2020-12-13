window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

let sidebarCollapse = document.querySelector("#sidebar-collapse");
let sidebar = document.querySelector("#sidebar");
let discordbot = document.querySelector("#discordbot-fig");
let figures = document.querySelectorAll("figure");
let tabs = document.querySelectorAll(".list-group > h5");
let home = document.querySelector(".hero-text");
let about = document.querySelector(".about-section");
let work = document.querySelector(".work-section");
let projects = document.querySelector(".projects-section");

tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        scrollToSection(tab.textContent);
    });
});

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
        case "firstunitygame-fig":
            window.open("https://milmalho.itch.io/project-breakout", "_blank");
    };
};

function scrollToSection(sectionName) {
    switch (sectionName) {
        case "Home":
            window.scrollTo({ top: 0, behavior: "smooth" })
            break;
        case "About":
            about.scrollIntoView({ behavior: "smooth" });
            break;
        case "Work":
            work.scrollIntoView({ behavior: "smooth" });
            break;
        case "Projects":
            projects.scrollIntoView({ behavior: "smooth" });
            break;
        case "Skills":
            break;
        case "Contact":
            break;
    }
    //sidebar.classList.toggle("active");
};

//CHECKS IF ELEMENT IS IN VIEWPORT AND RETURNS TRUE OR FALSE
// var isInViewport = function(elem) {
//     var bounding = elem.getBoundingClientRect();
//     return (
//         bounding.top >= 0 &&
//         bounding.left >= 0 &&
//         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };