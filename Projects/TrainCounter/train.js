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

let maxCapacity = 99;

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

// Function to format the time with leading zeros
function formatTimeWithLeadingZero(time) {
    return time.toString().padStart(2, '0');
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

// Update the current time every minute (60,000 milliseconds)
setInterval(updateCurrentTime, 60000);

// Function to increase passenger count

let passengerCount = 0;
let savedPassengers = 0;

function increasePassengerCount() {
    if (passengerCount > 14) {
        alert('Maximum number of passengers reached!');
        return false; // prevent default form submission behavior when max limit is exceeded
    }
  passengerCount++;
  console.log(`Passenger Count: ${passengerCount}`);
  const passengerCountElement = document.getElementById("passenger-count");
  passengerCountElement.textContent = passengerCount;
}
increaseBtn.addEventListener("click", increasePassengerCount);

function decreasePassengerCount() {
    if (passengerCount < 1 ) {
        alert('Minimum number of passengers already met.');
        return false;
    }
    passengerCount--;
    console.log(`Passenger count: ${passengerCount}`);
    const passengerCountElement = document.getElementById("passenger-count");
    passengerCountElement.textContent = passengerCount;
}
decreaseBtn.addEventListener("click", decreasePassengerCount);

function savePassengers() {
    savedPassengers = passengerCount;
    console.log(`"Number of passengers boarded: ${passengerCount}`);
    const savedMessageElement = document.getElementById("saved-message");
  savedMessageElement.querySelector("span").textContent = savedPassengers;
}
saveTrain.addEventListener("click", savePassengers);

function resetPassengers() {
    passengerCount = 0;
    savedPassengers = 0;
    alert("Passengers exiting the train stand back!!");
    console.log(`Resetting Passenger Count`);
    const passengerCountElement = document.getElementById("passenger-count");
    passengerCountElement.textContent = passengerCount;
    const savedMessageElement = document.getElementById("saved-message");
    savedMessageElement.querySelector("span").textContent = savedPassengers;
  }
  resetPassengersElement.addEventListener("click", resetPassengers);