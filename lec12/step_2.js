const timeDisplay = document.querySelector('#time-display'); // Displays the time
const startButton = document.querySelector('#start-button'); // Starts the timer
const pauseButton = document.querySelector('#pause-button'); // Pauses the timer
const resetButton = document.querySelector('#reset-button'); // Resets the timer

const startedTime = Date.now(); // Timestamp when we started the timer

/**
 * Update the content in the #time-display element to reflect the current time
 * @param {*} value Time in milliseconds
 */
function updateDisplay(value) {
    timeDisplay.innerText = (value/1000).toFixed(0);
}

const loadedTime = Date.now(); // Timestamp when the page loaded
function updateTime() {
    const elapsedTime = Date.now() - loadedTime;
    updateDisplay(elapsedTime);
}

setInterval(updateTime, 1000); // Update the time display every second
updateTime(); // ...and immediately