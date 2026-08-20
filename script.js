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


/* =====================================================
   INTRO SEQUENCE
===================================================== */

function startIntro() {

    let index = 0;

    function showNextMessage() {

        /* Remove old animation */
        introText.classList.remove("fade-up");

        /* Reset animation */
        introText.style.animation = "none";

        /*
           Force browser to restart the animation.
        */
        void introText.offsetWidth;

        /* Set the new message */
        introText.textContent = messages[index];

        /* Fade the new message in */
        introText.style.animation =
            "introAppear 1.2s ease forwards";


        /*
           Keep it visible for 2.2 seconds,
           then move it upward and fade it out.
        */
        setTimeout(() => {

            introText.classList.add("fade-up");

        }, 2200);


        /*
           Wait until the fade-out is finished,
           then show the next message.
        */
        setTimeout(() => {

            index++;

            if (index < messages.length) {

                showNextMessage();

            } else {

                /*
                   All intro messages are finished.
                   Now show the envelope.
                */

                setTimeout(() => {

                    showEnvelope();

                }, 500);

            }

        }, 3500);

    }


    /* Start the first message */
    showNextMessage();

}


/* =====================================================
   SHOW ENVELOPE
===================================================== */

let shakeInterval;


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

        if (
            envelope.classList.contains("open")
        ) {
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


    setTimeout(() => {

        envelopeScene.classList.add("hidden");

        letterScene.classList.remove("hidden");

    }, 1450);

});


/* =====================================================
   DONE READING
===================================================== */

doneButton.addEventListener("click", () => {

    letterPaper.classList.add("fold-back");

    doneButton.style.opacity = "0";

    doneButton.style.pointerEvents = "none";


    /*
       Wait for the letter to fold,
       then reveal the GIF.
    */

    setTimeout(() => {

        letterScene.classList.add("hidden");

        finalScene.classList.remove("hidden");

    }, 1300);

});


/* =====================================================
   START
===================================================== */

startIntro();
