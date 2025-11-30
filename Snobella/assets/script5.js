document.addEventListener('DOMContentLoaded', () => {
  
  document.querySelectorAll('.filter-block__header').forEach(header => {
    header.addEventListener('click', () => {
      const block = header.closest('.filter-block');
      block.classList.toggle('filter-block--collapsed');
    });
  });

  
  const sortDropdown = document.querySelector('.sort-dropdown');
  const sortBtn = sortDropdown?.querySelector('.sort-dropdown__btn');

  sortBtn?.addEventListener('click', () => {
    sortDropdown.classList.toggle('sort-dropdown--open');
  });

  
  document.addEventListener('click', (e) => {
    if (!sortDropdown) return;
    if (!sortDropdown.contains(e.target) && e.target !== sortBtn) {
      sortDropdown.classList.remove('sort-dropdown--open');
    }
  });
  const accountMenu = document.getElementById('accountMenu');
  const accountBtn = document.getElementById('accountBtn');
  const accountLabel = document.getElementById('accountLabel');
  const accountMenuList = document.getElementById('accountMenuList');
  const usernameDisplay = document.getElementById('userNameDisplay');

  function getLoggedInUser() {
    try {
      return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    } catch (err) {
      return null;
    }
  }

  function setUsernameDisplay(user) {
    if (!usernameDisplay) return;

    if (user && user.name) {
      usernameDisplay.textContent = user.name;
    } else {
      usernameDisplay.textContent = '';
    }
  }

  function renderAccountMenu(user) {
    if (!accountLabel || !accountMenuList) return;

    if (user && user.name) {
      
      accountLabel.textContent = 'Account';
      setUsernameDisplay(user);

      accountMenuList.innerHTML = `
        <li><button type="button" data-action="logout">Log out</button></li>
      `;
    } else {
      
      accountLabel.textContent = 'Sign up';
      setUsernameDisplay(null);

      accountMenuList.innerHTML = `
        <li><button type="button" data-action="register">Register</button></li>
        <li><button type="button" data-action="login">Log in</button></li>
      `;
    }
  }

  function handleAccountAction(action) {
    switch (action) {
      case 'register':
        window.location.href = 'index1.html';
        break;
      case 'login':
        window.location.href = 'index2.html';
        break;
      case 'logout':
        localStorage.removeItem('loggedInUser');
        renderAccountMenu(null);
        break;
    }
    if (accountMenu) {
      accountMenu.classList.remove('account-menu--open');
    }
  }

  const currentUser = getLoggedInUser();
  renderAccountMenu(currentUser);

  if (accountBtn && accountMenu && accountMenuList) {
    
    accountBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      accountMenu.classList.toggle('account-menu--open');
    });

    
    accountMenuList.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;
      handleAccountAction(action);
    });

    
    document.addEventListener('click', (e) => {
      if (!accountMenu.contains(e.target)) {
        accountMenu.classList.remove('account-menu--open');
      }
    });
  }
});