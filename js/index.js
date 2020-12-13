window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

let sidebarCollapse = document.querySelector("#sidebar-collapse");
let sidebar = document.querySelector("#sidebar");
let discordbot = document.querySelector("#discordbot-fig");
let figures = document.querySelectorAll("figure");
let tabs = document.querySelectorAll(".list-group > h5");
let homeSection = document.querySelector(".hero-text");
let aboutSection = document.querySelector(".about-section > .section-title");
let workSection = document.querySelector(".work-section > .section-title");
let projectsSection = document.querySelector(".projects-section > .section-title");
let skillsSection = document.querySelector(".skills-section > .section-title");
let homeTab = document.querySelector("#home-tab");
let aboutTab = document.querySelector("#about-tab");
let workTab = document.querySelector("#work-tab");
let projectsTab = document.querySelector("#projects-tab");
let skillsTab = document.querySelector("#skills-tab");
let inactiveTabs = document.querySelectorAll(".list-group > .bone-gray");
const skills = {
    html: { rate: 5 },
    css: { rate: 5 },
    js: { rate: 5 },
    wordpress: { rate: 5 },
    oop: { rate: 4 },
    windows: { rate: 4 },
    git: { rate: 4 },
    mac: { rate: 4 },
    sql: { rate: 4 },
    jquery: { rate: 3 },
    bootstrap: { rate: 3 },
    cSharp: { rate: 3 },
    python: { rate: 3 },
    react: { rate: 2 },
    php: { rate: 2 },
    photoshop: { rate: 2 },
    illustrator: { rate: 2 },
    less: { rate: 1 },
    jenkins: { rate: 1 },
    jira: { rate: 1 }
};

//Add scroll to each sidebar tab
tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        scrollToSection(tab.textContent);
    });
});

//Remove bounce animation and toggle active class on button click
sidebarCollapse.addEventListener("click", function() {
    sidebarCollapse.classList.remove("sidebar-bounce");
    sidebar.classList.toggle("active");
});

//Show projects when clicked
figures.forEach(figure => {
    figure.addEventListener("click", function() {
        showProject(figure.id);
    });
});

//Open new window with project websites
function showProject(id) {
    switch (id) {
        case "hlth360-fig":
            window.open("http://2ml.7b7.myftpupload.com/milans-landing-page-1/", "_blank");
        case "firstunitygame-fig":
            window.open("https://milmalho.itch.io/project-breakout", "_blank");
    };
};

//Scroll to selected section
function scrollToSection(sectionName) {
    switch (sectionName) {
        case "Home":
            window.scrollTo({ top: 0, behavior: "smooth" })
            break;
        case "About":
            aboutSection.scrollIntoView({ behavior: "smooth" });
            break;
        case "Work":
            workSection.scrollIntoView({ behavior: "smooth" });
            break;
        case "Projects":
            projectsSection.scrollIntoView({ behavior: "smooth" });
            break;
        case "Skills":
            break;
        case "Contact":
            break;
    }
    //sidebar.classList.toggle("active");
};

//Function that checks if certain element is within the set viewport
const isInViewport = function(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight - 400 || document.documentElement.clientHeight - 400) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//Updates the sidebar when new section is in view
window.addEventListener("scroll", function(e) {
    inactiveTabs.forEach(tab => {
        let corrSection = document.querySelector(tab.dataset.target);
        if (isInViewport(corrSection)) {
            let activeTab = document.querySelector(".list-group > .active");
            activeTab.classList.remove("active");
            activeTab.classList.add("bone-gray");
            tab.classList.remove("bone-gray");
            tab.classList.add("active");
        }
    });
    inactiveTabs = document.querySelectorAll(".list-group > .bone-gray");
});