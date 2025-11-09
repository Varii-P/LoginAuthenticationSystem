// Signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (localStorage.getItem(username)) {
      document.getElementById('signupMessage').innerText = "Username already exists!";
    } else {
      localStorage.setItem(username, password);
      document.getElementById('signupMessage').style.color = "green";
      document.getElementById('signupMessage').innerText = "Signup successful! Redirecting...";
      setTimeout(() => window.location.href = index.html, 1500);
    }
  });
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      document.getElementById('loginMessage').style.color = "green";
      document.getElementById('loginMessage').innerText = "Login successful!";
      localStorage.setItem('loggedInUser', username);
      setTimeout(() => window.location.href = dashboard.html, 1000);
    } else {
      document.getElementById('loginMessage').innerText = "Invalid username or password!";
    }
  });
}
