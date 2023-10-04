const typedText = document.getElementById("typed-text");
const phrases = ["Web Developer", "Programmer", "Problem Solver", "Tech Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;

function type() {
    if (phraseIndex < phrases.length) {
        if (charIndex < phrases[phraseIndex].length) {
            typedText.textContent += phrases[phraseIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Typing speed (adjust as needed)
        } else {
            phraseIndex++;
            charIndex = 0;
            setTimeout(erase, 1000); // Delay before erasing (adjust as needed)
        }
    } else {
        phraseIndex = 0;
        setTimeout(type, 100); // Restart typing (adjust as needed)
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Erasing speed (adjust as needed)
    } else {
        phraseIndex++;
        if (phraseIndex >= phrases.length) {
            phraseIndex = 0;
        }
        setTimeout(type, 100); // Start typing the next phrase
    }
}

type(); // Start typing when the page loads
