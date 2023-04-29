 // Get references to the hour, minute, and seconds elements in the HTML document.
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

// Set up an interval to update the clock every second.
const clock = setInterval(
  function time() {
    // Get the current date and time.
    const date_now = new Date();

    // Get the current hour, minute, and second from the date object.
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    // Format the hour, minute, and second values with leading zeros if necessary.
    hr = hr.toString().padStart(2, "0");
    min = min.toString().padStart(2, "0");
    sec = sec.toString().padStart(2, "0");

    // Update the text content of the hour, minute, and seconds elements with the formatted time string.
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
  },
  // Specify the interval duration in milliseconds (i.e. 1000 ms = 1 second).
  1000
);
