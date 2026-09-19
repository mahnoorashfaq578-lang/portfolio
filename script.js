/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 900);

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
   SKILLS STAGGER
===================================================== */

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );


skillCards.forEach(
    function (card, index) {

        card.style.transitionDelay =
            (index * 0.08) + "s";

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
   PROJECT SLIDER
===================================================== */

const projectTrack =
    document.getElementById(
        "projectTrack"
    );


const projectSlides =
    document.querySelectorAll(
        ".project-slide"
    );


const prevProject =
    document.getElementById(
        "prevProject"
    );


const nextProject =
    document.getElementById(
        "nextProject"
    );


const projectProgress =
    document.getElementById(
        "projectProgress"
    );


const projectNumber =
    document.getElementById(
        "projectNumber"
    );


let currentProject = 0;


function updateProject() {

    projectTrack.style.transform =
        "translateX(-" +
        (currentProject * 100) +
        "%)";


    const progress =
        ((currentProject + 1) /
            projectSlides.length) * 100;


    projectProgress.style.width =
        progress + "%";


    let number =
        currentProject + 1;


    if (number < 10) {

        number = "0" + number;

    }


    projectNumber.textContent =
        number + " — 06";

}



nextProject.addEventListener(
    "click",
    function () {

        currentProject++;


        if (
            currentProject >=
            projectSlides.length
        ) {

            currentProject = 0;

        }


        updateProject();

    }
);



prevProject.addEventListener(
    "click",
    function () {

        currentProject--;


        if (currentProject < 0) {

            currentProject =
                projectSlides.length - 1;

        }


        updateProject();

    }
);



/* =====================================================
   AUTO PROJECT SLIDER
===================================================== */

let projectAutoSlide =
    setInterval(
        function () {

            currentProject++;


            if (
                currentProject >=
                projectSlides.length
            ) {

                currentProject = 0;

            }


            updateProject();

        },
        6000
    );



nextProject.addEventListener(
    "click",
    function () {

        clearInterval(
            projectAutoSlide
        );

    }
);


prevProject.addEventListener(
    "click",
    function () {

        clearInterval(
            projectAutoSlide
        );

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



/* =====================================================
   INITIAL PROJECT
===================================================== */

updateProject();