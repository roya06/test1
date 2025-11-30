document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('email').value.trim();
      const passwordInput = document.getElementById('password').value.trim();

      if (!emailInput || !passwordInput) {
        alert('Please enter both email and password.');
        return;
      }
      let accounts = [];
      try {
        accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      } catch (err) {
        accounts = [];
      }

      const found = accounts.find(
        acc => acc.email === emailInput && acc.password === passwordInput
      );

      if (!found) {
        alert('Incorrect email or password.');
        return;
      }

      localStorage.setItem('loggedInUser', JSON.stringify(found));

      alert('Login successful!');
      window.location.href = 'index4.html'; 
    });
  }
});