/* =====================================================
   ELEMENTS
===================================================== */

const intro = document.getElementById("intro");
const introText = document.getElementById("introText");

const envelopeScene =
    document.getElementById("envelopeScene");

const envelopeWrapper =
    document.getElementById("envelopeWrapper");

const envelope =
    document.getElementById("envelope");

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

    "Heyy Inaya~",

    "First, I'm sorry the wish came in so late 🥲",

    "I hope you like this ;]"

];


let currentMessage = 0;


/* =====================================================
   INTRO SEQUENCE
===================================================== */

function showMessage() {

    introText.classList.remove("fade-up");

    introText.style.animation = "none";

    void introText.offsetWidth;

    introText.textContent =
        messages[currentMessage];

    introText.style.animation =
        "introAppear 1.2s ease forwards";


    /*
       Keep each message on screen for 2.2 seconds.
    */

    setTimeout(() => {

        introText.classList.add("fade-up");

    }, 2200);


    /*
       Move to the next message.
    */

    setTimeout(() => {

        currentMessage++;

        if (currentMessage < messages.length) {

            showMessage();

        } else {

            /*
               After the final message disappears,
               reveal the envelope.
            */

            setTimeout(() => {

                showEnvelope();

            }, 650);

        }

    }, 3500);

}


/* =====================================================
   ENVELOPE
===================================================== */

let shakeInterval = null;


function showEnvelope() {

    intro.classList.add("hidden");

    envelopeScene.classList.remove("hidden");

    startEnvelopeShake();

}


/* =====================================================
   ENVELOPE SHAKE
===================================================== */

function startEnvelopeShake() {

    clearInterval(shakeInterval);


    shakeInterval = setInterval(() => {

        /*
           Don't shake while the envelope is open.
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
       Give the envelope time to open
       before transitioning to the letter.
    */

    setTimeout(() => {

        envelopeScene.classList.add("hidden");

        letterScene.classList.remove("hidden");

    }, 1100);

});


/* =====================================================
   CLOSE LETTER
===================================================== */

doneButton.addEventListener("click", () => {

    /*
       Fold the paper away.
    */

    letterPaper.classList.add("fold-back");

    doneButton.style.opacity = "0";


    setTimeout(() => {

        letterScene.classList.add("hidden");

        /*
           Bring the envelope back.
        */

        envelopeScene.classList.remove("hidden");

        envelope.classList.remove("open");

        letterPaper.classList.remove("fold-back");

        doneButton.style.opacity = "1";


    }, 1300);


    /*
       After the envelope returns,
       leave it on screen for a moment.
    */

    setTimeout(() => {

        envelope.classList.add("shake");

    }, 1700);

});


/* =====================================================
   START
===================================================== */

showMessage();
