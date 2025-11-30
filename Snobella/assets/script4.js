document.addEventListener('DOMContentLoaded', () => {

  function goToCollection(e) {
    e.preventDefault();
    window.location.href = 'index5.html';
  }

  const heroBtn = document.querySelector('.hero .btn--primary');
  if (heroBtn) {
    heroBtn.addEventListener('click', goToCollection);
  }

  document.querySelectorAll('.product-section__view-all').forEach(link => {
    link.addEventListener('click', goToCollection);
  });
    });
 
  document.querySelectorAll('.product-section__carousel').forEach(carousel => {
    const leftArrow = carousel.querySelector('.carousel-arrow--left');
    const rightArrow = carousel.querySelector('.carousel-arrow--right');
    const grid = carousel.querySelector('.product-grid');
 
    if (!leftArrow || !rightArrow || !grid) return;
 
    leftArrow.addEventListener('click', () => {
      grid.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    });
 
    rightArrow.addEventListener('click', () => {
      grid.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
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