document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const fathersFirstName = document.getElementById("fathersFirstName").value;
        const mothersFirstName = document.getElementById("mothersFirstName").value;
        const gender = document.getElementById("gender").value;
        const category = document.getElementById("Category").value;
        const dob = document.getElementById("dob").value;
        const email = document.getElementById("email").value;
        const mobileNumber = document.getElementById("mobileNumber").value;
        const address = document.getElementById("address").value;
        const examCenter = document.getElementById("examCenter").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const terms = document.getElementById("terms").checked;

        // Perform form validation
        if (
            firstName === "" ||
            lastName === "" ||
            fathersFirstName === "" ||
            mothersFirstName === "" ||
            gender === "" ||
            category === "" ||
            dob === "" ||
            email === "" ||
            mobileNumber === "" ||
            address === "" ||
            examCenter === "" ||
            password === "" ||
            confirmPassword === "" ||
            !terms
        ) {
            alert("Please fill out all fields and agree to the terms.");
            return;
        }

        // Check for a valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please enter again.");
            return;
        }

        // You can now proceed with form submission or additional logic

        alert("Form submitted! Thanks for visiting! You will be notified by e-mail soon."); // For demonstration purposes
    });
});