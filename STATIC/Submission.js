// JavaScript code for form validation
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Validation for First Name
        var firstName = document.querySelector('input[placeholder="First name"]').value;
        if (firstName.trim() === "") {
            alert("Please enter your First Name.");
            return;
        }

        // Validation for Last Name
        var lastName = document.querySelector('input[placeholder="Last name"]').value;
        if (lastName.trim() === "") {
            alert("Please enter your Last Name.");
            return;
        }

        // Validation for National ID
        var nationalID = document.querySelector('input[placeholder="National ID"]').value;
        if (!nationalID.match(/^\d+$/)) {
            alert("Please enter a valid National ID (numbers only).");
            return;
        }

        // Validation for Email
        var email = document.querySelector('input[placeholder="email"]').value;
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validation for Gender
        var genderMale = document.querySelector('input[name="Gender"][value="Male"]').checked;
        var genderFemale = document.querySelector('input[name="Gender"][value="Female"]').checked;
        if (!genderMale && !genderFemale) {
            alert("Please select your gender.");
            return;
        }

        // Validation for Date of Birth
        var dateOfBirth = document.querySelector('input[placeholder="Date of Birth"]').value;
        if (dateOfBirth.trim() === "") {
            alert("Please select your Date of Birth.");
            return;
        }

        // Validation for Mother Name
        var motherName = document.querySelector('input[placeholder="Mother Name"]').value;
        if (motherName.trim() === "") {
            alert("Please enter your Mother's Name.");
            return;
        }

        // Validation for Father Name
        var fatherName = document.querySelector('input[placeholder="Father Name"]').value;
        if (fatherName.trim() === "") {
            alert("Please enter your Father's Name.");
            return;
        }

        // Validation for Phone Number
        var phoneNumber = document.querySelector('input[placeholder="Phone number"]').value;
        if (!phoneNumber.match(/^\d+$/)) {
            alert("Please enter a valid Phone Number (numbers only).");
            return;
        }

        // Validation for Marital Status
        var statusMarried = document.querySelector('input[name="Status"][value="Maried"]').checked;
        var statusSingle = document.querySelector('input[name="Status"][value="Single"]').checked;
        var statusDivorced = document.querySelector('input[name="Status"][value="Divorced"]').checked;
        if (!statusMarried && !statusSingle && !statusDivorced) {
            alert("Please select your Marital Status.");
            return;
        }

        // Validation for Faculty
        var faculty = document.querySelector('select[name="Faculty"]').value;
        if (faculty.trim() === "") {
            alert("Please select your Faculty.");
            return;
        }

        // Validation for Department
        var department = document.querySelector('select[name="Department"]').value;
        if (department.trim() === "") {
            alert("Please select your Department.");
            return;
        }

        // Validation for Program
        var programDay = document.querySelector('input[type="checkbox"][id="gridCheck"][value="Day"]').checked;
        var programEvening = document.querySelector('input[type="checkbox"][id="gridCheck"][value="Evening"]').checked;
        if (!programDay && !programEvening) {
            alert("Please select your Program.");
            return;
        }

        // If all validations pass, you can submit the form
        form.submit();
    });

    // Function to validate email address
    function isValidEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
