document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const responseBox = document.getElementById("form-response");

    form.addEventListener("submit", (e) => {
        // Prevent default browser refresh on submit
        e.preventDefault();

        // Retrieve input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Clear previous error messages
        document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

        let isValid = true;

        // Name validation
        if (name === "") {
            document.getElementById("name-error").textContent = "Name is required.";
            isValid = false;
        }

        // Simple Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("email-error").textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Message validation
        if (message.length < 10) {
            document.getElementById("message-error").textContent = "Message must be at least 10 characters long.";
            isValid = false;
        }

        // If validation passes
        if (isValid) {
            // Hide the form and show success banner
            form.style.display = "none";
            responseBox.classList.remove("hidden");
            responseBox.innerHTML = `
                <h4>Thank you, ${name}! ☕</h4>
                <p>We received your message and will get back to you at <strong>${email}</strong> shortly.</p>
            `;
        }
    });
});