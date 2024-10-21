// Track if user has registered
let isRegistered = false;

// Handle login or registration form submission
function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const formTitle = document.getElementById('form-title').textContent;

    if (formTitle === "Login") {
        // Handle login
        if (username === "user" && password === "password") {
            document.getElementById('errorMessage').style.display = 'none';
            
            if (isRegistered) {
                // If registered, show the external links
                document.getElementById('externalLinks').style.display = 'block';
            } else {
                alert("You need to register to access the external links.");
            }
        } else {
            document.getElementById('errorMessage').style.display = 'block';
        }
    } else {
        // Handle registration
        const email = document.getElementById('email').value;
        if (username && password && email) {
            document.getElementById('errorMessage').style.display = 'none';
            
            // Set user as registered
            isRegistered = true;
            
            // Show external links after registration
            document.getElementById('externalLinks').style.display = 'block';
            
            // Hide the registration form
            document.querySelector('.login-container').style.display = 'none';
            
            alert("Registration successful!");
        } else {
            alert("Please fill all fields.");
        }
    }
}

// Toggle between Login and Register forms
function toggleForm() {
    const formTitle = document.getElementById('form-title');
    const registerExtra = document.getElementById('register-extra');
    const submitButton = document.getElementById('submitButton');
    const toggleText = document.getElementById('toggleText');
    
    if (formTitle.textContent === "Login") {
        // Switch to Register
        formTitle.textContent = "Register";
        registerExtra.style.display = 'block';
        submitButton.textContent = "Register";
        toggleText.innerHTML = 'Already have an account? <a href="#" onclick="toggleForm()">Login here</a>';
    } else {
        // Switch to Login
        formTitle.textContent = "Login";
        registerExtra.style.display = 'none';
        submitButton.textContent = "Login";
        toggleText.innerHTML = 'New user? <a href="#" onclick="toggleForm()">Register here</a>';
    }
}
