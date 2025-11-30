document.addEventListener('DOMContentLoaded', () => {
  const step1 = document.getElementById('resetStep1');
  const step2 = document.getElementById('resetStep2');
  const resetForm = document.getElementById('resetForm');
  const successLoginBtn = document.getElementById('successLoginBtn');

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

  function showStep(which) {
    step1.classList.toggle('reset-step--active', which === 1);
    step2.classList.toggle('reset-step--active', which === 2);
  }

  if (resetForm) {
    resetForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = document.getElementById('resetEmail');
      const newPasswordInput = document.getElementById('newPassword');

      const emailVal = emailInput.value.trim();
      const newPassword = newPasswordInput.value.trim();

      if (!emailVal) {
        alert('Please enter your email.');
        return;
      }

      if (!newPassword) {
        alert('Please enter a new password.');
        return;
      }
      const passwordErrors = validatePassword(newPassword);
      if (passwordErrors.length > 0) {
        alert('Password requirements:\n\n' + passwordErrors.join('\n'));
        return;
      }
      let accounts = [];
      try {
        accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      } catch (err) {
        accounts = [];
      }
      const idx = accounts.findIndex(acc => acc.email === emailVal);
      if (idx === -1) {
        alert('No account found with this email.');
        return;
      }
      accounts[idx].password = newPassword;
      localStorage.setItem('accounts', JSON.stringify(accounts));

      const logged = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
      if (logged && logged.email === emailVal) {
        logged.password = newPassword;
        localStorage.setItem('loggedInUser', JSON.stringify(logged));
      }

      showStep(2);
    });
  }
  if (successLoginBtn) {
    successLoginBtn.addEventListener('click', () => {
      window.location.href = 'index2.html';
    });
  }
  showStep(1);
});