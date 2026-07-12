// nav_component.js
export function renderNavigation() {
  const navHTML = `
    <header class="smart-nav" id="main-nav">
      <div class="nav-container">
        <!-- Logo -->
        <a href="#" class="nav-logo" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
          <img src="logo.jpg" alt="Anand Pant & Co. Logo" style="height: 40px; width: auto; border-radius: 4px;" />
          <div style="display: flex; flex-direction: column; justify-content: center; text-align: left;">
            <span style="font-weight: 700; color: #0f172a; font-size: 1.15rem; line-height: 1.1; display: block;">Anand Pant & Co.</span>
            <span style="font-size: 0.7rem; color: #475569; letter-spacing: 0.5px; font-weight: 600; margin-top: 2px; display: block;">Grow More With Us</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <ul class="nav-list" style="display:flex; gap: 2rem; margin:0; padding:0;">
            <li class="nav-item">
              <span class="nav-link">Income Tax <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></span>
              <div class="mega-menu">
                <div class="mega-menu-column">
                  <h3>Individual</h3>
                  <a href="#" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    <div class="mega-menu-content">
                      <h4>File ITR</h4>
                      <p>e-File your Income Tax Return</p>
                    </div>
                  </a>
                  <a href="#" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                    <div class="mega-menu-content">
                      <h4>Tax Notices</h4>
                      <p>Expert replies to department</p>
                    </div>
                  </a>
                </div>
                <div class="mega-menu-column">
                  <h3>Business</h3>
                  <a href="#" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3v7.38L12 17l6-3.12V6.5l-6 3z"/></svg>
                    <div class="mega-menu-content">
                      <h4>Corporate Tax</h4>
                      <p>Filing for private limited companies</p>
                    </div>
                  </a>
                  <a href="#" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>
                    <div class="mega-menu-content">
                      <h4>Audit Services</h4>
                      <p>Statutory and tax audits</p>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            
            <li class="nav-item">
              <span class="nav-link">GST <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></span>
              <div class="mega-menu">
                <div class="mega-menu-column">
                  <h3>Compliance</h3>
                  <a href="#" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z"/></svg>
                    <div class="mega-menu-content">
                      <h4>GST Registration</h4>
                      <p>Get your business registered</p>
                    </div>
                  </a>
                  <a href="#" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                    <div class="mega-menu-content">
                      <h4>GST Returns</h4>
                      <p>GSTR-1, GSTR-3B, GSTR-9</p>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <span class="nav-link">Resources <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></span>
              <div class="mega-menu">
                <div class="mega-menu-column">
                  <h3>Learn</h3>
                  <a href="#" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    <div class="mega-menu-content">
                      <h4>Tax Guides</h4>
                      <p>Step-by-step tutorials</p>
                    </div>
                  </a>
                  <a href="#" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                    <div class="mega-menu-content">
                      <h4>Calculators</h4>
                      <p>HRA, Income Tax, SIP</p>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div class="nav-actions">
          <a href="#" class="btn-login">Login</a>
          <a href="#" class="btn-primary">Consult an Expert</a>
        </div>

        <!-- Mobile Nav Toggle -->
        <button class="mobile-nav-toggle" id="mobile-toggle" aria-label="Toggle Navigation">
          <svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </button>
      </div>
    </header>

    <!-- Mobile Navigation Menu -->
    <div class="mobile-nav" id="mobile-nav">
      <div class="mobile-nav-header">
        <a href="#/" class="nav-logo" style="display: flex; align-items: center; gap: 8px; text-decoration: none;">
          <img src="logo.jpg" alt="Anand Pant & Co. Logo" style="height: 32px; width: auto; border-radius: 4px;" />
          <div style="display: flex; flex-direction: column; justify-content: center; text-align: left;">
            <span style="font-weight: 700; color: #0f172a; font-size: 1rem; line-height: 1.1; display: block;">Anand Pant & Co.</span>
            <span style="font-size: 0.65rem; color: #475569; letter-spacing: 0.5px; font-weight: 600; margin-top: 1px; display: block;">Grow More With Us</span>
          </div>
        </a>
        <button class="mobile-close-btn" id="mobile-close" aria-label="Close Navigation">
          <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
      
      <div class="mobile-nav-menu">
        <div class="mobile-nav-item">
          <a href="#" class="mobile-nav-link" data-toggle="sub-menu">
            Income Tax <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
          </a>
          <div class="mobile-sub-menu">
            <a href="#" class="mobile-sub-item">
              <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> File ITR
            </a>
            <a href="#" class="mobile-sub-item">
              <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Tax Notices
            </a>
          </div>
        </div>
        <div class="mobile-nav-item">
          <a href="#" class="mobile-nav-link" data-toggle="sub-menu">
            GST <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
          </a>
          <div class="mobile-sub-menu">
            <a href="#" class="mobile-sub-item">
              <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z"/></svg> GST Registration
            </a>
            <a href="#" class="mobile-sub-item">
              <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> GST Returns
            </a>
          </div>
        </div>
        <div class="mobile-nav-item" style="margin-top: 1rem;">
          <a href="#" class="btn-primary" style="display: block; text-align: center;">Consult an Expert</a>
        </div>
      </div>
    </div>
  \`;

  // Attach nav HTML to document
  const navPlaceholder = document.createElement('div');
  navPlaceholder.innerHTML = navHTML;
  document.body.prepend(navPlaceholder);

  // JavaScript for Headroom-style sticky scroll transitions
  const mainNav = document.getElementById('main-nav');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      mainNav.classList.remove('nav-transparent');
    } else {
      mainNav.classList.add('nav-transparent');
    }

    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // Scroll down -> hide
      mainNav.classList.add('nav-hidden');
    } else {
      // Scroll up -> show
      mainNav.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
  });

  // Initial check
  if (window.scrollY === 0) {
    mainNav.classList.add('nav-transparent');
  }

  // JavaScript for Mobile Menu
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  }

  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const subMenu = link.nextElementSibling;
      if (subMenu && subMenu.classList.contains('mobile-sub-menu')) {
        subMenu.classList.toggle('is-open');
        // Rotate icon
        const icon = link.querySelector('svg');
        if (subMenu.classList.contains('is-open')) {
          icon.style.transform = 'rotate(180deg)';
        } else {
          icon.style.transform = 'rotate(0deg)';
        }
        icon.style.transition = 'transform 0.3s ease';
      }
    });
  });
}
