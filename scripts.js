// Switch between login and signup forms
document.getElementById('showSignup').addEventListener('click', function() {
    document.querySelector('form').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('signupContainer').style.display = 'none';
    document.querySelector('form').style.display = 'block';
});

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Basic validation (more complex checks should be done)
    if(email && password) {
        alert('Logged in successfully!');
        // Here you'd typically send the data to the server for validation
        // For example, using fetch to send POST data to the server
        window.location.href = "index.html";
    } else {
        alert('Please fill out all fields.');
    }
});

// Handle Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    // Basic validation
    if(email && password) {
        alert('Signed up successfully!');
        // Send data to the server for signup
    } else {
        alert('Please fill out all fields.');
    }
});
