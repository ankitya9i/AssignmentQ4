var loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  errorMessage.textContent = '';

  // Validate email format for username
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username)) {
    errorMessage.textContent = 'Please enter a valid email address';
    return;
  }
  if (password === 'SmartServTest@123') {
    // Redirect to the user dashboard
    window.location.href = 'in2.html';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
  }
  // Validate password format
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
  if (!passwordRegex.test(password)) {
    errorMessage.textContent =
      'Password must contain an uppercase letter, a number, and only @ as a special character';
    return;
  }

  // Check for the specific password to show the dashboard
 
    errorMessage.textContent = 'Invalid password or username';
  
});


function handleForgotPassword() {
    window.location.href = 'mailto:support@smartserv.io?subject=Password Reset Request';
  }