document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');

  function validatePassword(password) {
    const errors = [];
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least 1 uppercase letter');
    }
    
    if (!/[0-9]/.test(password)) {
      errors.push('Password must contain at least 1 number');
    }
    
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      errors.push('Password must contain at least 1 special character');
    }
    
    return errors;
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('email');
      const nameInput = document.getElementById('fullName');
      const passwordInput = document.getElementById('password');
      const termsCheckbox = document.getElementById('termsCheckbox');

      const emailVal = emailInput.value.trim();
      const nameVal = nameInput.value.trim();
      const passwordVal = passwordInput.value.trim();

      
      if (!emailVal) {
        alert('Please enter your email.');
        return;
      }

      if (!nameVal) {
        alert('Please enter your name.');
        return;
      }

      if (!passwordVal) {
        alert('Please enter a password.');
        return;
      }
      const passwordErrors = validatePassword(passwordVal);
      if (passwordErrors.length > 0) {
        alert('Password requirements:\n\n' + passwordErrors.join('\n'));
        return;
      }

      if (!termsCheckbox.checked) {
        alert('Please agree to the terms of use.');
        return;
      }

      let accounts = [];
      try {
        accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      } catch (err) {
        accounts = [];
      }

      const exists = accounts.some(acc => acc.email === emailVal);
      if (exists) {
        alert('This email already has an account. Please login.');
        window.location.href = 'index2.html';
        return;
      }

      accounts.push({
        email: emailVal,
        password: passwordVal,
        name: nameVal
      });

      localStorage.setItem('accounts', JSON.stringify(accounts));

      localStorage.setItem('loggedInUser', JSON.stringify({
        email: emailVal,
        password: passwordVal,
        name: nameVal
      }));

      alert('Account created successfully!');
      window.location.href = 'index4.html'; 
    });
  }
});
