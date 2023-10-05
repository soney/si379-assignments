const timeDisplay = document.querySelector('#time-display'); // Displays the time
const startButton = document.querySelector('#start-button'); // Starts the timer
const pauseButton = document.querySelector('#pause-button'); // Pauses the timer
const resetButton = document.querySelector('#reset-button'); // Resets the timer

let startedTime; // Timestamp when we started the timer

/**
 * Update the content in the #time-display element to reflect the current time
 * @param {*} value Time in milliseconds
 */
function updateDisplay(value) {
    timeDisplay.innerText = (value/1000).toFixed(0);
}

function updateTime() {
    const currentRunTime = Date.now() - startedTime; // Time since we last clicked "start"
    updateDisplay(currentRunTime); // Update the DOM to reflect this time
}

function startTimer() {
    startButton.setAttribute('disabled', 'true'); // Disable the start button
    startedTime = Date.now(); // Track when we clicked "start"
    updateInterval = setInterval(updateTime, 1000); // Update the time display frequently
    updateTime(); // ...and immediately
}

startButton.addEventListener('click', startTimer);
updateDisplay(0);