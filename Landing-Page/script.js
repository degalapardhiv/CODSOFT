// ======================================
// LOADING SCREEN
// ======================================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }

    }, 2000);

});

// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav ul");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

        if (window.innerWidth <= 768) {
            navMenu.classList.remove("show");
        }

    });

});

// ======================================
// ACTIVE NAVBAR
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href").includes(current)
        ) {

            link.classList.add("active");

        }

    });

});

// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const revealElements =
    document.querySelectorAll(
        ".card, .feature-card, .pricing-card, .stat"
    );

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ======================================
// COUNTER ANIMATION
// ======================================

const counters =
    document.querySelectorAll(".counter");

const speed = 100;

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            +counter.dataset.target;

        const count =
            +counter.innerText;

        const increment =
            target / speed;

        if (count < target) {

            counter.innerText =
                Math.ceil(count + increment);

            setTimeout(
                updateCounter,
                20
            );

        } else {

            counter.innerText =
                target;

        }

    };

    updateCounter();

});

// ======================================
// TERMINAL TYPING EFFECT
// ======================================

const typingElement =
    document.getElementById("typing");

const typingLines = [

    "root@cybershield:~$ whoami",
    "CyberShield AI Security Platform",
    "AI Powered Protection",
    "24/7 Monitoring Enabled",
    "System Status: SECURE"

];

let lineIndex = 0;
let charIndex = 0;

function typeText() {

    if (!typingElement) return;

    if (lineIndex < typingLines.length) {

        if (
            charIndex <
            typingLines[lineIndex].length
        ) {

            typingElement.innerHTML +=
                typingLines[lineIndex].charAt(charIndex);

            charIndex++;

            setTimeout(typeText, 50);

        } else {

            typingElement.innerHTML += "<br>";

            lineIndex++;
            charIndex = 0;

            setTimeout(typeText, 300);

        }

    }

}

typeText();

// ======================================
// CURSOR GLOW
// ======================================

const glow =
    document.createElement("div");

glow.classList.add(
    "cursor-glow"
);

document.body.appendChild(glow);

document.addEventListener(
    "mousemove",
    (e) => {

        glow.style.left =
            e.clientX + "px";

        glow.style.top =
            e.clientY + "px";

    }
);

// ======================================
// PARTICLE NETWORK BACKGROUND
// ======================================

const canvas =
    document.getElementById("particles");

if (canvas) {

    const ctx =
        canvas.getContext("2d");

    function resizeCanvas() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }

    resizeCanvas();

    window.addEventListener(
        "resize",
        resizeCanvas
    );

    const particles = [];

    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {

        particles.push({

            x:
                Math.random() * canvas.width,

            y:
                Math.random() * canvas.height,

            radius:
                Math.random() * 2 + 1,

            dx:
                (Math.random() - 0.5) * 0.6,

            dy:
                (Math.random() - 0.5) * 0.6

        });

    }

    function drawParticles() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(p => {

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "#38bdf8";

            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (
                p.x < 0 ||
                p.x > canvas.width
            ) {
                p.dx *= -1;
            }

            if (
                p.y < 0 ||
                p.y > canvas.height
            ) {
                p.dy *= -1;
            }

        });

        connectParticles();

        requestAnimationFrame(
            drawParticles
        );

    }

    function connectParticles() {

        for (
            let a = 0;
            a < particles.length;
            a++
        ) {

            for (
                let b = a;
                b < particles.length;
                b++
            ) {

                const dx =
                    particles[a].x -
                    particles[b].x;

                const dy =
                    particles[a].y -
                    particles[b].y;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );

                if (distance < 120) {

                    ctx.beginPath();

                    ctx.strokeStyle =
                        "rgba(56,189,248,0.15)";

                    ctx.lineWidth = 1;

                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );

                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );

                    ctx.stroke();

                }

            }

        }

    }

    drawParticles();

}

// ======================================
// LIVE CLOCK
// ======================================

const clock =
    document.getElementById("clock");

function updateClock() {

    if (clock) {

        const now =
            new Date();

        clock.innerHTML =
            now.toLocaleTimeString();

    }

}

setInterval(
    updateClock,
    1000
);

updateClock();

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log(
    "%cCyberShield AI Loaded Successfully",
    "color:#00ff88;font-size:16px;font-weight:bold;"
);