// Calculate the time remaining until the anniversary date (adjust the date accordingly)
const anniversaryDate = new Date('2023-09-10T00:00:00');
const now = new Date();

const timeRemaining = anniversaryDate - now;

// Display the countdown timer
const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
document.querySelector('#countdown').textContent = `${daysRemaining} days until our golden celebration!`;
