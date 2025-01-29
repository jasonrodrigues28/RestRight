
function findBedtime() {
    // Get the wake-up time and sleep duration from the user
    var wakeUpTime = document.getElementById("wakeUpTime").value;
    var sleepDuration = document.getElementById("sleepDuration").value;

    if (!wakeUpTime || !sleepDuration) {
        alert("Please enter both wake-up time and sleep duration.");
        return;
    }

    // Split the wake-up time into hours and minutes
    var timeParts = wakeUpTime.split(":");
    var wakeUpHour = parseInt(timeParts[0]);
    var wakeUpMinute = parseInt(timeParts[1]);

    // Subtract sleep duration from the wake-up time
    var bedtimeHour = wakeUpHour - sleepDuration;
    var bedtimeMinute = wakeUpMinute;

    if (bedtimeHour < 0) {
        bedtimeHour += 24;
    }

    var period = bedtimeHour >= 12 ? "PM" : "AM";  // Determine AM or PM
    var hourIn12hrFormat = bedtimeHour % 12;  // Convert hour to 12-hour format

    // If the hour is 0, it should be 12 (for midnight)
    if (hourIn12hrFormat === 0) {
        hourIn12hrFormat = 12;
    }

    var formattedMinute = bedtimeMinute < 10 ? "0" + bedtimeMinute : bedtimeMinute;

    var bedtime = hourIn12hrFormat + ":" + formattedMinute + " " + period;

    // Display the result in the popup
    document.getElementById("result").innerText = "Your optimal bedtime is: " + bedtime;

    // Show the popup
    document.getElementById("popup").style.display = 'flex';
}

    // Close the popup when the close button is clicked
    document.getElementById("closeBtn").onclick = function() {
    document.getElementById("popup").style.display = 'none';
    }

    // Close the popup if the user clicks outside the popup content
    window.onclick = function(event) {
    if (event.target === document.getElementById("popup")) {
        document.getElementById("popup").style.display = 'none';
    }
}