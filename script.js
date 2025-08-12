const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrors();

    let isValid = true;

    const userName = document.getElementById("user").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(userName === "") {
        showError('name-error', 'Name is required');
        isValid = false;
    } else if (userName.length < 2) {
        showError('name-error', 'Name must be at least 2 characters');
        isValid = false;
    }

    if (email === "") {
        showError('email-error', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }

    if(message === '') {
        showError('message-error', 'Message is required');
        isValid = false;
    } else if(message.length < 10) {
        showError('message-error', 'Message must be at lease 10 characters');
        isValid = false;
    }

    if(isValid) {
        document.getElementById('success-message').style.display = 'block';
        form.reset();
    }

    setTimeout(() => {
        document.getElementById('success-message').style.display = 'none';
    }, 3000);
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";
}

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}