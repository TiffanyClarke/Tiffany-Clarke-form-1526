let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// event-target object
let btn = document.getElementById("submit-btn");
let email = document.getElementById("email");
let name = document.getElementById("name");
let message = document.getElementById("message");

// Clear the data from HTML form
let testForm = document.querySelector("form");

// event-handler
function validateForm() {

    console.clear();

    // save data and errors:
    let errors = [];
    let data = {};

    // Validate Full Name
    if (name.value === "") {
        errors.push("Please enter your full name!");
    } else {
        data.name = name.value;
    }

    // validate email
    if (email.value === "") {
        errors.push("Please enter your email!");
    } else {
        /*data.emailProp = email.value;*/
        if (emailPattern.test(email.value)) {
            data.emailProp = email.value;
        } else {
            errors.push("Your email is invlaid!");
        }
    }
    
    //Validate message
    if (message.value === "") {
        errors.push("Would you like to leave a message?");
    } else {
        data.message = message.value;
    }

    // create the feedback
    if (errors.length === 0) {
        // clear your form here:
        testForm.reset();
        console.log(`Your name: ${data.name}  Your email: ${data.emailProp}  Your message: ${data.message}`);
    } else {
        console.log(`Errors: ${errors}`);
    }
}

// registering event
btn.addEventListener("click", validateForm);
