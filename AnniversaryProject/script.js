// Login functionality
const loginButton = document.getElementById("login-button");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginMessage = document.getElementById("login-message");
const loginPage = document.getElementById("login-page");
const mainContent = document.getElementById("main-content");

// Replace with your chosen username and password
const validUsername = "Anniversary2024";
const validPassword = "011219";

loginButton.addEventListener("click", () => {
    // Retrieve input values
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validation logic
    if (username === validUsername && password === validPassword) {
        // Successful login
        loginMessage.textContent = "";
        loginPage.style.display = "none";
        mainContent.style.display = "block";
    } else {
        // Failed login
        loginMessage.textContent = "booboo salah la hmm bukan ituuu sayangg, try again ajuk ><.";
    }
});

// Timer since first day together
const firstDayTogether = new Date("2019-12-01T00:00:00");
const togetherElement = document.getElementById("together-timer");

function updateTogetherTimer() {
    const now = new Date();
    const difference = now - firstDayTogether;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    togetherElement.textContent = `We have been together for ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds My Love.`;
}

setInterval(updateTogetherTimer, 1000);

// Countdown to reunion
const targetDate = new Date("2024-12-09T00:00:00"); // Replace with your reunion date
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    countdownElement.textContent = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}

setInterval(updateCountdown, 1000);

// Audio Play/Pause Functionality
const audio = document.getElementById("anniversary-audio");
const playButton = document.getElementById("play-audio-button");

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause Our Song";
    } else {
        audio.pause();
        playButton.textContent = "Play Our Song";
    }
});
const revealButton = document.getElementById("reveal-message-button");
const anniversaryMessage = document.getElementById("anniversary-message");

revealButton.addEventListener("click", () => {
    // Show the hidden message
    anniversaryMessage.style.display = "block";
    // Hide the button after it's clicked
    revealButton.style.display = "none";
});

