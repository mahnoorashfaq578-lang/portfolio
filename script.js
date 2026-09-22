
/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 2000);

});


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


menuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("show");

    const icon =
        menuBtn.querySelector("i");


    if (mobileMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("show");

        const icon =
            menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingText =
    document.querySelector(".typing-text");


const words = [

    "Frontend Developer",
    "Creative Web Developer",
    "JavaScript Developer",
    "Responsive Web Designer"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (deleting === false) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );


        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

            return;

        }


        setTimeout(
            typeEffect,
            80
        );


    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );


        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }


            setTimeout(
                typeEffect,
                400
            );

            return;

        }


        setTimeout(
            typeEffect,
            45
        );

    }

}


typeEffect();



/* =====================================================
   DARK MODE
===================================================== */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    const icon =
        themeBtn.querySelector("i");


    if (
        document.body.classList.contains("dark")
    ) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("active");


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function (element) {

        observer.observe(element);

    }
);



/* =====================================================
   SERVICES STAGGER
===================================================== */

const serviceCards =
    document.querySelectorAll(
        ".service-card"
    );


serviceCards.forEach(
    function (card, index) {

        card.style.transitionDelay =
            (index * 0.08) + "s";

    }
);



/* =====================================================
   ACTIVE NAV
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 180;


                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >=
                    sectionTop
                    &&
                    window.scrollY <
                    sectionTop +
                    sectionHeight
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =====================================================
   BACK TO TOP
===================================================== */

const topBtn =
    document.getElementById(
        "topBtn"
    );


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 500
        ) {

            topBtn.classList.add(
                "show"
            );

        } else {

            topBtn.classList.remove(
                "show"
            );

        }

    }
);


topBtn.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);

/* =====================================
   SERVICES SCROLL ANIMATION
===================================== */

const servicesSection = document.querySelector(".services");

if (servicesSection) {

    const servicesObserver = new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    servicesSection.classList.add("is-visible");

                } else {

                    servicesSection.classList.remove("is-visible");

                }

            });

        },
        {
            threshold: 0.18
        }
    );

    servicesObserver.observe(servicesSection);
}


/* =========================================
   INFINITE SKILLS SLIDER
========================================= */

const skillsGrid = document.querySelector(".skills-grid");

if (skillsGrid) {

    let position = 0;
    let lastTime = 0;

    const speed = 50; // movement speed

    function moveSkills(time) {

        if (!lastTime) {
            lastTime = time;
        }

        const deltaTime = (time - lastTime) / 1000;
        lastTime = time;

        position = position + speed * deltaTime;

        const firstCard = skillsGrid.firstElementChild;

        const cardWidth = firstCard.getBoundingClientRect().width;

        const gap = parseFloat(
            getComputedStyle(skillsGrid).gap
        );

        const moveDistance = cardWidth + gap;

        /*
           Jab first card completely left side
           se bahar chala jaye to usko end par bhej do.
        */

        if (position >= moveDistance) {

            position = position - moveDistance;

            skillsGrid.appendChild(firstCard);
        }

        skillsGrid.style.transform =
            "translate3d(-" + position + "px, 0, 0)";

        requestAnimationFrame(moveSkills);
    }

    requestAnimationFrame(moveSkills);
}


/* =====================================================
   PROJECT CAROUSEL
===================================================== */

const projectTrack =
    document.getElementById("projectTrack");

const projectSlides =
    document.querySelectorAll(".project-slide");

const projectDots =
    document.getElementById("projectDots");

const prevProject =
    document.getElementById("prevProject");

const nextProject =
    document.getElementById("nextProject");


let currentProject = 0;

const totalProjects =
    projectSlides.length;


/* =====================================================
   CREATE DOTS
===================================================== */

projectSlides.forEach(function (slide, index) {

    const dot =
        document.createElement("button");

    dot.classList.add("project-dot");

    dot.setAttribute(
        "aria-label",
        "Go to project " + (index + 1)
    );

    dot.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            currentProject = index;

            updateProject();

            resetAutoSlide();

        }
    );

    projectDots.appendChild(dot);

});


const projectDotsAll =
    document.querySelectorAll(".project-dot");


/* =====================================================
   GET CIRCULAR POSITION
===================================================== */

function getProjectPosition(index) {

    let difference =
        index - currentProject;


    if (
        difference > totalProjects / 2
    ) {

        difference -= totalProjects;

    }


    if (
        difference < -totalProjects / 2
    ) {

        difference += totalProjects;

    }


    return difference;

}


/* =====================================================
   UPDATE CARDS
===================================================== */

function updateProject() {

    projectSlides.forEach(
        function (slide, index) {

            slide.classList.remove(
                "active",
                "left-1",
                "left-2",
                "left-3",
                "right-1",
                "right-2",
                "right-3",
                "hidden"
            );


            const position =
                getProjectPosition(index);


            /* CENTER */

            if (position === 0) {

                slide.classList.add(
                    "active"
                );

            }


            /* LEFT 1 */

            else if (position === -1) {

                slide.classList.add(
                    "left-1"
                );

            }


            /* LEFT 2 */

            else if (position === -2) {

                slide.classList.add(
                    "left-2"
                );

            }


            /* LEFT 3 */

            else if (position === -3) {

                slide.classList.add(
                    "left-3"
                );

            }


            /* RIGHT 1 */

            else if (position === 1) {

                slide.classList.add(
                    "right-1"
                );

            }


            /* RIGHT 2 */

            else if (position === 2) {

                slide.classList.add(
                    "right-2"
                );

            }


            /* RIGHT 3 */

            else if (position === 3) {

                slide.classList.add(
                    "right-3"
                );

            }


            /* HIDDEN */

            else {

                slide.classList.add(
                    "hidden"
                );

            }

        }
    );


    /* =================================================
       UPDATE DOTS
    ================================================= */

    projectDotsAll.forEach(
        function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentProject
            );

        }
    );

}


/* =====================================================
   NEXT
===================================================== */

function nextProjectFunction() {

    currentProject++;

    if (
        currentProject >= totalProjects
    ) {

        currentProject = 0;

    }

    updateProject();

}


/* =====================================================
   PREVIOUS
===================================================== */

function previousProjectFunction() {

    currentProject--;

    if (
        currentProject < 0
    ) {

        currentProject =
            totalProjects - 1;

    }

    updateProject();

}


/* =====================================================
   CARD CLICK
===================================================== */

projectSlides.forEach(
    function (slide, index) {

        slide.addEventListener(
            "click",
            function (event) {


                /* DON'T TRIGGER CARD
                   WHEN LIVE PROJECT IS CLICKED */

                if (
                    event.target.closest(
                        ".project-link"
                    )
                ) {

                    return;

                }


                const position =
                    getProjectPosition(index);


                /* LEFT / RIGHT CARD */

                if (
                    position !== 0
                ) {

                    currentProject = index;

                    updateProject();

                    resetAutoSlide();

                    return;

                }


                /* CENTER CARD */

                if (
                    position === 0
                ) {

                    nextProjectFunction();

                    resetAutoSlide();

                }

            }
        );

    }
);


/* =====================================================
   AUTO SLIDE
===================================================== */

let projectAutoSlide =
    setInterval(
        function () {

            nextProjectFunction();

        },
        6000
    );


/* =====================================================
   RESET AUTO SLIDE
===================================================== */

function resetAutoSlide() {

    clearInterval(
        projectAutoSlide
    );


    projectAutoSlide =
        setInterval(
            function () {

                nextProjectFunction();

            },
            6000
        );

}


/* =====================================================
   INITIAL
===================================================== */

updateProject();