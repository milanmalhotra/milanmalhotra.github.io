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


const isInViewport = function(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight - 300 || document.documentElement.clientHeight - 300) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

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
    })
    inactiveTabs = document.querySelectorAll(".list-group > .bone-gray");
});




// if (isInViewport(homeSection)) {
//     console.log("home");
//     homeTab.classList.add("active");
//     homeTab.classList.remove("bone-gray");
// } else if (!isInViewport(homeSection)) {
//     homeTab.classList.remove("active");
//     homeTab.classList.add("bone-gray");
// }
// if (isInViewport(aboutSection)) {
//     console.log("about");
//     aboutTab.classList.add("active");
//     aboutTab.classList.remove("bone-gray");
// } else if (!isInViewport(aboutSection)) {
//     aboutTab.classList.remove("active");
//     aboutTab.classList.add("bone-gray");
// }
// if (isInViewport(workSection)) {
//     console.log("project");
//     workTab.classList.add("active");
//     workTab.classList.remove("bone-gray");

// } else if (!isInViewport(workSection)) {
//     workTab.classList.remove("active");
//     workTab.classList.add("bone-gray");
// }