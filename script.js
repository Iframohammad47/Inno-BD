const intro = document.getElementById("intro");
const introText = document.getElementById("introText");

const envelopeScene = document.getElementById("envelopeScene");
const envelope = document.getElementById("envelope");
const envelopeWrapper = document.getElementById("envelopeWrapper");

const letterScene = document.getElementById("letterScene");
const letterPaper = document.getElementById("letterPaper");

const doneButton = document.getElementById("doneButton");


/* -------------------------
   INTRO SEQUENCE
------------------------- */

const messages = [
    "Heyy Inaya~",
    "First, I'm sorry the wish came in so late 🥲",
    "I hope you like this ;]"
];

let currentMessage = 0;


function showNextMessage() {

    introText.classList.remove("fade-up");

    introText.textContent = messages[currentMessage];

    introText.style.animation = "none";

    void introText.offsetWidth;

    introText.style.animation = "introAppear 1.2s ease forwards";


    setTimeout(() => {

        introText.classList.add("fade-up");

    }, 2200);


    setTimeout(() => {

        currentMessage++;

        if (currentMessage < messages.length) {

            showNextMessage();

        } else {

            setTimeout(showEnvelope, 700);

        }

    }, 3500);
}


/* -------------------------
   SHOW ENVELOPE
------------------------- */

function showEnvelope() {

    intro.classList.add("hidden");

    envelopeScene.classList.remove("hidden");

    startEnvelopeShaking();
}


/* -------------------------
   ENVELOPE SHAKE
------------------------- */

let shakeInterval;


function startEnvelopeShaking() {

    shakeInterval = setInterval(() => {

        envelope.classList.add("shake");

        setTimeout(() => {

            envelope.classList.remove("shake");

        }, 450);

    }, 2000);
}


/* -------------------------
   OPEN ENVELOPE
------------------------- */

envelopeWrapper.addEventListener("click", () => {

    clearInterval(shakeInterval);

    envelope.classList.remove("shake");

    envelope.classList.add("open");

    setTimeout(() => {

        envelopeScene.classList.add("hidden");

        letterScene.classList.remove("hidden");

    }, 1200);

});


/* -------------------------
   CLOSE LETTER
------------------------- */

doneButton.addEventListener("click", () => {

    letterPaper.classList.add("fold-back");

    setTimeout(() => {

        letterScene.classList.add("hidden");

        envelopeScene.classList.remove("hidden");

        envelope.classList.remove("open");

        envelope.classList.remove("shake");

        setTimeout(() => {

            startEnvelopeShaking();

        }, 500);

    }, 1300);

});


/* Start */

showNextMessage();
