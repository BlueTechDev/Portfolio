// Function to format the time with leading zeros
function formatTimeWithLeadingZero(time) {
    return time.toString().padStart(2, '0');
}

const trainPassengers = document.getElementById("passenger-count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const saveTrain = document.getElementById("savebtn");
const message = document.getElementById("saved-message");
const resetPassengersElement = document.getElementById("resetbtn");
const inputPassengerCount = document.querySelector("input[type='number']");

let maxCapacity = 100;

// Function to update the current time
function updateCurrentTime() {
    const currentTime = new Date();
    const currentHour = formatTimeWithLeadingZero(currentTime.getHours());
    document.getElementById("currentHour").textContent = currentHour;
    const currentMinute = formatTimeWithLeadingZero(currentTime.getMinutes());
    document.getElementById('current-minute').textContent = currentMinute;
    const currentSeconds = formatTimeWithLeadingZero(currentTime.getSeconds());
    document.getElementById("currentSeconds").textContent = currentSeconds;
}

// Function to update the current date
function updateCurrentDate() {
    const currentDate = new Date();
    const currentDay = formatTimeWithLeadingZero(currentDate.getDate());
    const currentMonth = formatTimeWithLeadingZero(currentDate.getMonth() + 1); // Months are zero-based, so add 1
    const currentYear = currentDate.getFullYear();

    document.getElementById("dayOfMonth").textContent = currentDay;
    document.getElementById("month").textContent = currentMonth;
    document.getElementById("year").textContent = currentYear;
}

// Call the updateCurrentDate function initially to set the current date on page load
updateCurrentDate();

// Update the current date every minute (60,000 milliseconds)
setInterval(updateCurrentDate, 60000);

// Call the updateCurrentTime function initially to set the current time on page load
updateCurrentTime();

// Update the current time every second (1000 milliseconds)
setInterval(updateCurrentTime, 1000);

// Function to increase passenger count
let passengerCount = 0;

function increasePassengerCount() {
    if (passengerCount >= maxCapacity) {
        alert('Maximum number of passengers reached!');
        return;
    }
    passengerCount++;
    console.log(`Passenger Count: ${passengerCount}`);
    const passengerCountElement = document.getElementById("passenger-count");
    passengerCountElement.textContent = passengerCount;

    // Additional animation: Increase size when passenger count is incremented
    passengerCountElement.classList.add("animate-increase");
    setTimeout(() => {
        passengerCountElement.classList.remove("animate-increase");
    }, 500);
}

increaseBtn.addEventListener("click", increasePassengerCount);

function decreasePassengerCount() {
    if (passengerCount <= 0) {
        alert('Minimum number of passengers already met.');
        return;
    }
    passengerCount--;
    console.log(`Passenger count: ${passengerCount}`);
    const passengerCountElement = document.getElementById("passenger-count");
    passengerCountElement.textContent = passengerCount;

    // Additional animation: Decrease size when passenger count is decremented
    passengerCountElement.classList.add("animate-decrease");
    setTimeout(() => {
        passengerCountElement.classList.remove("animate-decrease");
    }, 500);
}

decreaseBtn.addEventListener("click", decreasePassengerCount);

function savePassengers() {
    const savedMessageElement = document.getElementById("saved-message");
    savedMessageElement.classList.add("animate-save");
    setTimeout(() => {
        savedMessageElement.classList.remove("animate-save");
        savedMessageElement.textContent = `Number of passengers boarded: ${passengerCount}`;
    }, 2000);
}

saveTrain.addEventListener("click", savePassengers);

function resetPassengers() {
    passengerCount = 0;
    alert("Passengers exiting the train stand back!!");
    console.log(`Resetting Passenger Count`);
    const passengerCountElement = document.getElementById("passenger-count");
    passengerCountElement.textContent = passengerCount;
    const savedMessageElement = document.getElementById("saved-message");
    savedMessageElement.textContent = "";
}

resetPassengersElement.addEventListener("click", resetPassengers);

const customInput = document.getElementById("custom-passenger-count");
const customSubmit = document.getElementById("custom-submit");

customInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the form from being submitted
        const customCount = parseInt(customInput.value);
        if (isNaN(customCount)) {
            alert("Invalid input. Please enter a valid number.");
            return;
        }
        if (customCount < 0 || customCount > maxCapacity) {
            alert("Invalid input. Please enter a number within the valid range.");
            return;
        }
        passengerCount = customCount;
        const passengerCountElement = document.getElementById("passenger-count");
        passengerCountElement.textContent = passengerCount;
        customInput.value = ""; // Clear the input field
    }
});

customSubmit.addEventListener("click", function() {
    const customCount = parseInt(customInput.value);
    if (isNaN(customCount)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }
    if (customCount < 0 || customCount > maxCapacity) {
        alert("Invalid input. Please enter a number within the valid range.");
        return;
    }
    passengerCount = customCount;
    const passengerCountElement = document.getElementById("passenger-count");
    passengerCountElement.textContent = passengerCount;
    customInput.value = ""; // Clear the input field
});