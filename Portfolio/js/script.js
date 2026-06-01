/* ==========================================
   DEGALA PARDHIV PORTFOLIO
   PROFESSIONAL SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       TYPING ANIMATION
    ========================================== */

    const typingElement =
        document.getElementById("typing-text");

    if (typingElement) {

        const roles = [

            "Full Stack Developer",

            "Cyber Security Enthusiast",

            "React.js Developer",

            "Node.js Developer",

            "Problem Solver"

        ];

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentText =
                roles[roleIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentText.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;

                if (
                    charIndex ===
                    currentText.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1500
                    );

                    return;

                }

            } else {

                typingElement.textContent =
                    currentText.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    roleIndex++;

                    if (
                        roleIndex >=
                        roles.length
                    ) {

                        roleIndex = 0;

                    }

                }

            }

            setTimeout(
                typeEffect,
                deleting ? 60 : 100
            );

        }

        typeEffect();

    }

    /* ==========================================
       DARK MODE
    ========================================== */

    const themeToggle =
        document.getElementById(
            "theme-toggle"
        );

    const savedTheme =
        localStorage.getItem(
            "theme"
        );

    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark"
        );

        if (themeToggle) {

            themeToggle.textContent =
                "☀️";

        }

    }

    themeToggle?.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );

            const isDark =
                document.body.classList.contains(
                    "dark"
                );

            localStorage.setItem(
                "theme",
                isDark
                    ? "dark"
                    : "light"
            );

            themeToggle.textContent =
                isDark
                    ? "☀️"
                    : "🌙";

        }
    );

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();

    navLinks.forEach(link => {

        const href =
            link.getAttribute(
                "href"
            );

        if (
            href === currentPage
        ) {

            link.classList.add(
                "active"
            );

        }

    });

    /* ==========================================
       SCROLL REVEAL ANIMATION
    ========================================== */

    const revealItems =
        document.querySelectorAll(
            ".project-card, .skill-card, .stat-card, .info-card, .tech-item, .social-card, .contact-card"
        );

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );

    revealItems.forEach(item => {

        item.classList.add(
            "fade-up"
        );

        observer.observe(item);

    });

    /* ==========================================
       HEADER SHADOW
    ========================================== */

    const header =
        document.querySelector(
            ".header"
        );

    window.addEventListener(
        "scroll",
        () => {

            if (!header) return;

            if (
                window.scrollY > 20
            ) {

                header.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,.08)";

            } else {

                header.style.boxShadow =
                    "none";

            }

        }
    );

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    const counters =
        document.querySelectorAll(
            ".stat-card h3"
        );

    let started = false;

    function runCounters() {

        if (started) return;

        started = true;

        counters.forEach(counter => {

            const text =
                counter.innerText
                    .replace("+", "")
                    .replace("%", "");

            const target =
                parseInt(text);

            if (
                isNaN(target)
            ) return;

            let current = 0;

            const increment =
                target / 40;

            function updateCounter() {

                if (
                    current < target
                ) {

                    current += increment;

                    let value =
                        Math.ceil(current);

                    if (
                        counter.innerText.includes("+")
                    ) {

                        counter.innerText =
                            value + "+";

                    } else if (
                        counter.innerText.includes("%")
                    ) {

                        counter.innerText =
                            value + "%";

                    } else {

                        counter.innerText =
                            value;

                    }

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    if (
                        counter.innerText.includes("+")
                    ) {

                        counter.innerText =
                            target + "+";

                    } else if (
                        counter.innerText.includes("%")
                    ) {

                        counter.innerText =
                            target + "%";

                    } else {

                        counter.innerText =
                            target;

                    }

                }

            }

            updateCounter();

        });

    }

    const statsSection =
        document.querySelector(
            ".stats-grid"
        );

    if (statsSection) {

        const statsObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                runCounters();

                            }

                        }
                    );

                }

            );

        statsObserver.observe(
            statsSection
        );

    }

    /* ==========================================
       PROFILE IMAGE EFFECT
    ========================================== */

    const profileImage =
        document.querySelector(
            ".hero-image img"
        );

    if (profileImage) {

        profileImage.addEventListener(
            "mouseenter",
            () => {

                profileImage.style.transform =
                    "translateY(-8px)";

            }
        );

        profileImage.addEventListener(
            "mouseleave",
            () => {

                profileImage.style.transform =
                    "translateY(0px)";

            }
        );

    }

    /* ==========================================
       SMOOTH ANCHOR SCROLL
    ========================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (e) {

                    e.preventDefault();

                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );

                    if (target) {

                        target.scrollIntoView({

                            behavior:
                                "smooth"

                        });

                    }

                }
            );

        });

    /* ==========================================
       AUTO FOOTER YEAR
    ========================================== */

    const footerText =
        document.querySelector(
            "footer p"
        );

    if (footerText) {

        footerText.innerHTML =
            `© ${new Date().getFullYear()} Degala Pardhiv. All Rights Reserved.`;

    }

    /* ==========================================
       CONSOLE BRANDING
    ========================================== */

    console.log(

        "%cDegala Pardhiv Portfolio",

        "color:#2563eb;font-size:18px;font-weight:bold;"

    );

    console.log(

        "%cFull Stack Developer | Cyber Security Enthusiast",

        "color:#64748b;font-size:13px;"

    );

});