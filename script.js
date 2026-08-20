/* =====================================================
   ELEMENTS
===================================================== */

const intro = document.getElementById("intro");
const introText = document.getElementById("introText");

const envelopeScene =
    document.getElementById("envelopeScene");

const envelope =
    document.getElementById("envelope");

const envelopeWrapper =
    document.getElementById("envelopeWrapper");

const letterScene =
    document.getElementById("letterScene");

const letterPaper =
    document.getElementById("letterPaper");

const doneButton =
    document.getElementById("doneButton");

const finalScene =
    document.getElementById("finalScene");


/* =====================================================
   INTRO MESSAGES
===================================================== */

const messages = [
    "Heyyy Inaya~",
    "First, I'm sorry the wish came in so late 😔",
    "I hope you like this ;]"
];


let currentMessage = 0;


/* =====================================================
   SHOW INTRO MESSAGE
===================================================== */

function showMessage() {

    introText.classList.remove("fade-up");

    /*
       Reset the animation so it can play again.
    */

    introText.style.animation = "none";

    void introText.offsetWidth;

    introText.textContent =
        messages[currentMessage];

    introText.style.animation =
        "introAppear 1.2s ease forwards";


    /*
       Keep the message visible.
    */

    setTimeout(() => {

        introText.classList.add("fade-up");

    }, 2200);


    /*
       Move to next message.
    */

    setTimeout(() => {

        currentMessage++;

        if (currentMessage < messages.length) {

            showMessage();

        } else {

            setTimeout(() => {

                showEnvelope();

            }, 650);

        }

    }, 3500);

}


/* =====================================================
   SHOW ENVELOPE
===================================================== */

let shakeInterval = null;


function showEnvelope() {

    intro.classList.add("hidden");

    envelopeScene.classList.remove("hidden");

    startEnvelopeShaking();

}


/* =====================================================
   ENVELOPE SHAKE
===================================================== */

function startEnvelopeShaking() {

    clearInterval(shakeInterval);

    shakeInterval = setInterval(() => {

        /*
           Don't shake while it is opening.
        */

        if (envelope.classList.contains("open")) {
            return;
        }

        envelope.classList.remove("shake");

        void envelope.offsetWidth;

        envelope.classList.add("shake");

    }, 2000);

}


/* =====================================================
   OPEN ENVELOPE
===================================================== */

envelopeWrapper.addEventListener("click", () => {

    clearInterval(shakeInterval);

    envelope.classList.remove("shake");

    envelope.classList.add("open");


    /*
       Wait for the flap + paper animation
       to complete before changing scenes.
    */

    setTimeout(() => {

        envelopeScene.classList.add("hidden");

        letterScene.classList.remove("hidden");

    }, 1450);

});


/* =====================================================
   DONE READING
===================================================== */

doneButton.addEventListener("click", () => {

    /*
       Fold the letter away.
    */

    letterPaper.classList.add("fold-back");

    doneButton.style.opacity = "0";
    doneButton.style.pointerEvents = "none";


    /*
       After the folding animation,
       reveal the GIF instead of the envelope.
    */

    setTimeout(() => {

        letterScene.classList.add("hidden");

        finalScene.classList.remove("hidden");

    }, 1300);

});
