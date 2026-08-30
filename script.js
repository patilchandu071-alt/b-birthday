/* ==========================================
   BHAVANI BIRTHDAY SURPRISE
   MADE BY CHANDU ❤️
========================================== */


/* ================= PASSWORD ================= */

const SECRET_PASSWORD = "chanduuu";

function unlock() {

    const input = document.getElementById("password");
    const error = document.getElementById("error");

    const enteredPassword = input.value.trim();

    if (enteredPassword === SECRET_PASSWORD) {

        error.style.display = "none";

        createExplosion();

        setTimeout(() => {

            showPage("welcomePage");

            startMusic();

        }, 600);

    } else {

        error.style.display = "block";

        input.classList.remove("shake");

        void input.offsetWidth;

        input.classList.add("shake");
    }
}


/* ================= ENTER KEY ================= */

document.addEventListener("DOMContentLoaded", () => {

    const password =
        document.getElementById("password");

    password.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            unlock();
        }

    });

    createParticles();
});


/* ================= PAGE NAVIGATION ================= */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage =
        document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* ================= MUSIC ================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let musicStarted = false;


function startMusic() {

    if (!music) return;

    music.volume = 0.55;

    const promise = music.play();

    if (promise !== undefined) {

        promise
            .then(() => {

                musicStarted = true;

                musicBtn.classList.add(
                    "music-playing"
                );

                musicBtn.innerHTML = "♫";

            })
            .catch(() => {

                /*
                    Browser may block automatic audio.
                    User can press the music button.
                */

                musicStarted = false;

            });

    }

}


function toggleMusic() {

    if (!music) return;

    if (music.paused) {

        music.play()
            .then(() => {

                musicStarted = true;

                musicBtn.innerHTML = "♫";

                musicBtn.classList.add(
                    "music-playing"
                );

            })
            .catch(() => {

                alert(
                    "Music file could not be played. Check music/birthday-music.mp3"
                );

            });

    } else {

        music.pause();

        musicBtn.innerHTML = "♪";

        musicBtn.classList.remove(
            "music-playing"
        );

    }

}


/* ================= PARTICLES ================= */

function createParticles() {

    const container =
        document.getElementById("particles");

    if (!container) return;

    const symbols = [
        "♡",
        "✦",
        "·",
        "✧",
        "♥"
    ];

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("span");

        particle.className = "particle";

        particle.innerText =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.fontSize =
            (8 + Math.random() * 16) + "px";

        particle.style.animationDuration =
            (8 + Math.random() * 15) + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        container.appendChild(particle);

    }

}


/* ================= PASSWORD SHAKE ================= */

const shakeStyle =
document.createElement("style");

shakeStyle.innerHTML = `

@keyframes shake {

    0%, 100% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(-8px);
    }

    40% {
        transform: translateX(8px);
    }

    60% {
        transform: translateX(-6px);
    }

    80% {
        transform: translateX(6px);
    }

}

.shake {
    animation: shake 0.4s ease;
}

`;

document.head.appendChild(shakeStyle);


/* ================= LOGIN EXPLOSION ================= */

function createExplosion() {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧"
    ];

    for (let i = 0; i < 25; i++) {

        const element =
            document.createElement("div");

        element.innerText =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        element.style.position = "fixed";

        element.style.left = "50%";

        element.style.top = "50%";

        element.style.zIndex = "1000";

        element.style.pointerEvents = "none";

        element.style.color =
            i % 2 === 0
                ? "#ed8eaf"
                : "#dca04c";

        element.style.fontSize =
            (15 + Math.random() * 25) + "px";

        document.body.appendChild(element);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 300;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        element.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.3)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    700 + Math.random() * 500,

                easing: "cubic-bezier(.2,.8,.3,1)"
            }
        );

        setTimeout(() => {

            element.remove();

        }, 1300);

    }

}


/* ================= BIRTHDAY CELEBRATION ================= */

function celebrate() {

    const celebration =
        document.getElementById(
            "celebration"
        );

    celebration.classList.add("show");

    createConfetti();

}


/* ================= CLOSE CELEBRATION ================= */

function closeCelebration() {

    const celebration =
        document.getElementById(
            "celebration"
        );

    celebration.classList.remove("show");

}


/* ================= CONFETTI ================= */

function createConfetti() {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧",
        "•"
    ];

    for (let i = 0; i < 70; i++) {

        const confetti =
            document.createElement("div");

        confetti.className =
            "confetti";

        confetti.innerText =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (10 + Math.random() * 20) + "px";

        confetti.style.color =
            i % 3 === 0
                ? "#ef9dbb"
                : i % 3 === 1
                    ? "#dba04b"
                    : "#ffffff";

        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5500);

    }

}


/* ================= ESCAPE ================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        const celebration =
            document.getElementById(
                "celebration"
            );

        celebration.classList.remove("show");

    }

});


/* ==========================================
   END
========================================== */