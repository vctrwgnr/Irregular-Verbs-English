const verbs = [
    { base: "do", past: "did", participle: "done", translation: "делать", example: "I did the packing. The preparations have been done by the team." },
    { base: "make", past: "made", participle: "made", translation: "делать", example: "We made a booking for the hotel. The reservation has been made." },
    { base: "go", past: "went", participle: "gone", translation: "идти", example: "We went to Paris last summer. The group has gone to the airport." },
    { base: "be", past: "was/were", participle: "been", translation: "быть", example: "I was in Italy last year. The tickets have been booked already." },
    { base: "have", past: "had", participle: "had", translation: "иметь", example: "We had a great trip. The hotel had been prepared for guests." },
    { base: "take", past: "took", participle: "taken", translation: "взять", example: "She took a map from the desk. The photo was taken at the Eiffel Tower." },
    { base: "see", past: "saw", participle: "seen", translation: "видеть", example: "We saw many landmarks in London. The view has been seen by all passengers." },
    { base: "write", past: "wrote", participle: "written", translation: "писать", example: "He wrote a postcard to his friend. The address was written incorrectly." },
    { base: "buy", past: "bought", participle: "bought", translation: "купить", example: "They bought souvenirs at the market. Tickets have already been bought online." },
    { base: "eat", past: "ate", participle: "eaten", translation: "есть", example: "We ate at a famous restaurant. Breakfast has been eaten in the dining hall." },
    { base: "drink", past: "drank", participle: "drunk", translation: "пить", example: "She drank coffee during the flight. The water has been drunk already." },
    { base: "fly", past: "flew", participle: "flown", translation: "летать", example: "We flew to New York yesterday. The plane has been flown by an experienced pilot." },
    { base: "leave", past: "left", participle: "left", translation: "оставлять", example: "They left the station early in the morning. The luggage has been left in the room." },
    { base: "bring", past: "brought", participle: "brought", translation: "приносить", example: "She brought her passport to the check-in counter. A new guidebook was brought for the trip." },
    { base: "know", past: "knew", participle: "known", translation: "знать", example: "He knew the route by heart. The location has been known to locals for years." },
    { base: "meet", past: "met", participle: "met", translation: "встречать", example: "We met our guide at the hotel lobby. A lot of travelers have been met at the station." },
    { base: "find", past: "found", participle: "found", translation: "найти", example: "They found a great deal on flights. The lost passport has been found." },
    { base: "forget", past: "forgot", participle: "forgotten", translation: "забывать", example: "I forgot my wallet at home. The instructions have been forgotten by many tourists." },
    { base: "give", past: "gave", participle: "given", translation: "давать", example: "She gave directions to the museum. Information has been given to the travelers." },
    { base: "get", past: "got", participle: "gotten", translation: "получать", example: "He got a visa for his trip. The travel documents have been gotten in time." },
    { base: "read", past: "read", participle: "read", translation: "читать", example: "I read a book during the flight. The travel guide has been read by everyone." },
    { base: "sleep", past: "slept", participle: "slept", translation: "спать", example: "They slept in a cozy cabin. The room has been slept in before." },
    { base: "take", past: "took", participle: "taken", translation: "брать", example: "We took a taxi to the airport. Many pictures were taken during the journey." },
    { base: "spend", past: "spent", participle: "spent", translation: "тратить/проводить", example: "She spent a lot of time exploring. A week has been spent in Italy." },
    { base: "say", past: "said", participle: "said", translation: "сказать", example: "He said goodbye to his family. The announcement has been said repeatedly." }
];

let currentVerbIndex = Math.floor(Math.random() * verbs.length);

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
