
let currentVerbIndex = Math.floor(Math.random() * verbs.length);

// Pronunciation function
function updateSpeakerButton() {
    const currentVerb = verbs[currentVerbIndex].base;
    const speakerButton = document.querySelector('.btn-sound');
    speakerButton.setAttribute('onclick', `speak('${currentVerb}')`);
}


function loadVerb(index) {
    const verb = verbs[index];
    document.querySelector('#verbBase').textContent = verb.base;
    document.querySelector('#v2').textContent = '?';
    document.querySelector('#v3').textContent = '?';
    document.querySelector('#translation').textContent = 'Translation';
    document.querySelector('.pastsimple').value = '';
    document.querySelector('.pastparticiple').value = '';
    document.querySelector('#example').textContent = 'Example will appear here.';
    document.querySelector('.card').style.backgroundColor = ''; // Reset background color
    updateSpeakerButton(); // Dynamically set the speaker's behavior
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
}

document.querySelector('.translate').addEventListener('click', () => {
    const verb = verbs[currentVerbIndex];
    document.querySelector('#translation').textContent = verb.translation;
});


document.querySelector('.check').addEventListener('click', () => {
    const verb = verbs[currentVerbIndex];
    const userPast = document.querySelector('.pastsimple').value.trim();
    const userParticiple = document.querySelector('.pastparticiple').value.trim();

    // Compare input ignoring case
    const isPastCorrect = userPast.toLowerCase() === verb.past.toLowerCase();
    const isParticipleCorrect = userParticiple.toLowerCase() === verb.participle.toLowerCase();

    if (isPastCorrect && isParticipleCorrect) {
        document.querySelector('.card').style.backgroundColor = 'rgba(144, 238, 144, 0.7)'; // Light pastel green
        document.querySelector('#example').textContent = verb.example;
        document.querySelector('#v2').textContent = verb.past;
        document.querySelector('#v3').textContent = verb.participle;
    } else if (isPastCorrect || isParticipleCorrect) {
        document.querySelector('.card').style.backgroundColor = 'rgba(255, 255, 102, 0.7)'; // Light pastel yellow
    } else {
        document.querySelector('.card').style.backgroundColor = 'rgba(255, 102, 102, 0.7)'; // Light pastel red
    }
});


document.querySelector('.next').addEventListener('click', () => {
    currentVerbIndex = Math.floor(Math.random() * verbs.length);
    loadVerb(currentVerbIndex);
});




// Load the first verb on page load
loadVerb(currentVerbIndex);

const modal = document.querySelector('.custom-modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnShow = document.querySelector('.show-modal');

// Open Modal
btnShow.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

// Close Modal Function
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Event Listeners for Close
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);






