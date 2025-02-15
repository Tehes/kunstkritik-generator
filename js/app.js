/* ---------------------------------------------------------------------------------------
Utility function to randomize letters in a string
---------------------------------------------------------------------------------------- */
function shuffleString(str) {
    const chars = str.split("");
    const length = chars.length;

    for (let i = length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
    }
    return chars.join("");
}

/* ---------------------------------------------------------------------------------------
Helper function to get a random integer between min and max (inclusive)
---------------------------------------------------------------------------------------- */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* ---------------------------------------------------------------------------------------
Data
---------------------------------------------------------------------------------------- */
const words = [
    [
        "Das Œuvre",
        "Das Substrat",
        "Die Rhythmisierung",
        "Der Pinselduktus",
        "Der Mythos",
        "Die Linearität",
        "Die Komposition",
        "Die Impression",
        "Die Idealisierung",
        "Der Gestus",
        "Der Farbauftrag",
        "Die Expression",
        "Die Atmosphäre",
        "Die Abstraktion",
        "Die Ästhetik",
    ],
    [
        "transzendiert",
        "collagiert",
        "illuminiert",
        "intendiert",
        "evoziert",
        "manifestiert",
        "moduliert",
        "reflektiert",
        "suggeriert",
        "thematisiert",
        "transformiert",
        "reproduziert",
        "verhandelt",
        "zitiert",
        "simuliert",
    ],
    [
        "virtuell",
        "tautologisch",
        "informell",
        "surreal",
        "stringent",
        "seriell",
        "mimetisch",
        "narrativ",
        "hypothetisch",
        "haptisch",
        "fragmentarisch",
        "hermetisch",
        "figurativ",
        "experimentell",
        "assoziativ",
    ],
    [
        "das Artifizielle",
        "das Auratische",
        "den Bildraum",
        "das Eingeschriebene",
        "das Erratische",
        "das Existentielle",
        "die Ikonographie",
        "das Motivische",
        "das Orgiastische",
        "die Materialität",
        "das Phantastische",
        "die Relativität",
        "das Selbstreflexive",
        "das Kosmische",
        "die Inszenierung",
    ],
];

/* ---------------------------------------------------------------------------------------
Main function: generate a random sentence and animate it via repeated shuffles
---------------------------------------------------------------------------------------- */
function generateSentence() {
    const paragraphs = document.querySelectorAll("p");
    let counter = 1;

    // Get random indices for each sub-array in 'words'
    const indices = words.map((group) => getRandomInteger(0, group.length - 1));

    const shuffleParagraphs = () => {
        if (counter >= 10) {
            clearInterval(animation);
            paragraphs[0].textContent = words[0][indices[0]];
            paragraphs[1].textContent = words[1][indices[1]];
            paragraphs[2].textContent = words[2][indices[2]];
            paragraphs[3].textContent = words[3][indices[3]] + ".";
            return;
        }
        paragraphs[0].textContent = shuffleString(words[0][indices[0]]).trim();
        paragraphs[1].textContent = shuffleString(words[1][indices[1]]).trim();
        paragraphs[2].textContent = shuffleString(words[2][indices[2]]).trim();
        paragraphs[3].textContent = shuffleString(words[3][indices[3]]).trim() +
            ".";
        counter++;
    };

    const animation = setInterval(shuffleParagraphs, 50);
}

/* ---------------------------------------------------------------------------------------
Initialization: add event listeners
---------------------------------------------------------------------------------------- */
function init() {
    const text = document.querySelector("div");

    // Required to enable touch events on some mobile browsers
    document.addEventListener("touchstart", () => { }, false);

    // Generate sentence once DOM is ready
    window.addEventListener("DOMContentLoaded", generateSentence, false);

    // Generate a new sentence on click
    text.addEventListener("click", generateSentence, false);
}

/* ---------------------------------------------------------------------------------------
Public members (exposed in window scope)
---------------------------------------------------------------------------------------- */
window.kunstkritikGenerator = {
    init,
    generateSentence,
};

window.kunstkritikGenerator.init();
