const messages = [
    "kya tum sure ho?",
    "pakkaaaaa???",
    "please naaa:( ",
    "itne pookie ho aap",
    "mai naraaz ho jaaungi",
    "mai had zyada naraaz ho jaaungi",
    "aapka mai murder kar dungi",
    "mai aapko dher saara pyaar karungi",
    "kardo na cutieee plejj request",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button'); // Fixed selector

    if (noButton) {
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }

    if (yesButton) {
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`; // Adjusted growth factor for better UI
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
