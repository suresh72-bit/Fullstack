const settingsForm = document.getElementById("settingsForm");
const maxCharsInput = document.getElementById("maxChars");
const warningPercentInput = document.getElementById("warningPercent");
const errorMessage = document.getElementById("settingsError");

const textSection = document.getElementById("textSection");
const textarea = document.getElementById("textInput");
const counter = document.getElementById("counter");

let maxChars = 0;
let warningLimit = 0;

settingsForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const max = Number(maxCharsInput.value);
    const warningPercent = Number(warningPercentInput.value);

    // Validation
    if (max <= 0 || warningPercent <= 0) {
        errorMessage.textContent = "Values must be positive numbers.";
        return;
    }

    if (warningPercent >= 100) {
        errorMessage.textContent = "Warning limit must be less than 100%.";
        return;
    }

    errorMessage.textContent = "";

    maxChars = max;
    warningLimit = Math.floor(maxChars * (warningPercent / 100));

    textarea.value = "";
    textarea.maxLength = maxChars;
    counter.textContent = `Remaining characters: ${maxChars}`;
    counter.className = "";

    textSection.classList.remove("hidden");
});

// Live counter
textarea.addEventListener("input", function () {
    const used = textarea.value.length;
    const remaining = maxChars - used;

    counter.textContent = `Remaining characters: ${remaining}`;

    if (used >= warningLimit) {
        counter.classList.add("warning");
    } else {
        counter.classList.remove("warning");
    }
});
