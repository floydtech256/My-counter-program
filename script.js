// Set initial count
let count = 0;

// Select value and buttons
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        
        // Change logic based on class names
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        // Change value text colors dynamically
        if (count > 0) {
            value.style.color = "#4caf50"; // Green
        } else if (count < 0) {
            value.style.color = "#ff4d4d"; // Red
        } else {
            value.style.color = "#ffffff"; // White
        }

        value.textContent = count;
    });
});
