

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    let formIsValid = true;
  
    // Reset feedback
    document.getElementById('usernameFeedback').textContent = '';
    document.getElementById('emailFeedback').textContent = '';
    document.getElementById('passwordFeedback').textContent = '';
  
    // Validation logic
    if (username.length < 3) {
      formIsValid = false;
      document.getElementById('usernameFeedback').textContent = 'Username must be at least 3 characters.';
    }
  
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      formIsValid = false;
      document.getElementById('emailFeedback').textContent = 'Please enter a valid email address.';
    }
  

  
    if (formIsValid) {
      alert('Registration successful! Redirecting...');
      window.location.href = 'welcome.html'; // Redirect to another page on success
    }
  })
  