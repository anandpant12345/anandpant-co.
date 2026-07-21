/* ============================================================================
   ANAND PANT & CO. - SPA Router & Global Logic
   ============================================================================ */

// ── Route Configuration ──────────────────────────────────────────────────────
const routes = {
  '/':                   { module: './pages/home.js',                title: 'Home' },
  '/home':               { module: './pages/home.js',                title: 'Home' },
  '/calculator':         { module: './pages/tax-calculator.js',      title: 'Tax Calculator' },
  '/gst':                { module: './pages/gst-calculator.js',      title: 'GST Rate Finder' },
  '/pricing':            { module: './pages/pricing.js',             title: 'Pricing' },
  '/pricing/individual': { module: './pages/services-individual.js', title: 'Individual Pricing' },
  '/pricing/business':   { module: './pages/services-business.js',   title: 'Business Pricing' },
  '/dashboard':          { module: './pages/dashboard.js',           title: 'Dashboard' },
  '/services/individual':{ module: './pages/services-individual.js', title: 'Individual Services' },
  '/services/business':  { module: './pages/services-business.js',   title: 'Business Services' },
  '/tax-guides':         { module: './pages/tax-guides.js',          title: 'Tax Guides' },
  '/about':              { module: './pages/about.js',               title: 'About Us' },
  '/privacy-policy':     { module: './pages/privacy-policy.js',      title: 'Privacy Policy' },
  '/contact':            { module: './pages/contact.js',             title: 'Contact Us' },
};

// ── Global State ─────────────────────────────────────────────────────────────
const state = {
  currentPage: null,
  currentModule: null,
  user: {
    name: 'Anand',
    email: 'anand@example.com',
    isLoggedIn: true,
  },
  scrolled: false,
  mobileMenuOpen: false,
};

// ── Utility Functions ────────────────────────────────────────────────────────
window.formatCurrency = (num) => {
  if (num === undefined || num === null || isNaN(num)) return '₹0';
  return '₹' + Number(num).toLocaleString('en-IN', { maximumFractionDigits: 0 });
};

window.formatNumber = (num) => {
  if (!num && num !== 0) return '0';
  return Number(num).toLocaleString('en-IN');
};

window.navigateTo = (hash) => {
  window.location.hash = hash;
};

window.scrollToTestimonials = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const el = document.getElementById('testimonials-section') || document.getElementById('testimonials-heading');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.hash = '#/';
    setTimeout(() => {
      const target = document.getElementById('testimonials-section') || document.getElementById('testimonials-heading');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  }
};

// ── Shared Components ────────────────────────────────────────────────────────

function renderAnnouncementBar() {
  return '';
}

function renderLeadModal() {
  return `
    <div class="modal-overlay" id="lead-modal">
      <div class="modal-content">
        <button class="modal-close" id="lead-modal-close" aria-label="Close Modal">×</button>
        <div class="modal-header">
          <h3 class="modal-title">Get Expert Assistance</h3>
          <p class="modal-subtitle">Fill out the form below and our tax experts will contact you shortly.</p>
        </div>
        <form id="lead-form" class="modal-form">
          <div class="form-group">
            <label for="lead-name">Full Name</label>
            <input type="text" id="lead-name" required placeholder="John Doe">
          </div>
          <div class="form-group">
            <label for="lead-email">Email Address</label>
            <input type="email" id="lead-email" required placeholder="john@example.com">
          </div>
          <div class="form-group">
            <label for="lead-phone">Phone Number</label>
            <input type="tel" id="lead-phone" required placeholder="+91 98765 43210">
          </div>
          <div class="form-group">
            <label for="lead-service">Service Required</label>
            <select id="lead-service" required>
              <option value="" disabled selected>Select a Service</option>
              <option value="ITR Filing">ITR Filing</option>
              <option value="GST Registration & Returns">GST Registration & Returns</option>
              <option value="Corporate Law & ROC">Corporate Law & ROC</option>
              <option value="Certifications">Certifications (MSME, FSSAI)</option>
              <option value="Financials">Financials (P&L, Balance Sheet)</option>
              <option value="Financial Advisory">Financial Advisory & Virtual CFO</option>
              <option value="Other">Other (Please Specify)</option>
            </select>
          </div>
          <div class="form-group hidden" id="lead-service-other-group">
            <label for="lead-service-other">Please Specify</label>
            <input type="text" id="lead-service-other" placeholder="Enter service needed">
          </div>
          <button type="submit" class="btn btn-primary w-full" style="margin-top: 1rem;">Submit Request</button>
        </form>
      </div>
    </div>
  `;
}

function renderBusinessModal() {
  return `
    <div class="modal-overlay" id="business-modal">
      <div class="modal-content">
        <button class="modal-close" id="business-modal-close" aria-label="Close Modal">×</button>
        <div class="modal-header">
          <h3 class="modal-title">Business Consultation</h3>
          <p class="modal-subtitle">Tell us about your business and our corporate experts will contact you.</p>
        </div>
        <form id="business-form" class="modal-form">
          <div class="form-group">
            <label for="business-name">Full Name</label>
            <input type="text" id="business-name" required placeholder="John Doe">
          </div>
          <div class="form-group">
            <label for="business-email">Work Email</label>
            <input type="email" id="business-email" required placeholder="john@company.com">
          </div>
          <div class="form-group">
            <label for="business-phone">Phone Number</label>
            <input type="tel" id="business-phone" required placeholder="+91 98765 43210">
          </div>
          <div class="form-group">
            <label for="company-name">Company Name</label>
            <input type="text" id="company-name" required placeholder="Acme Corp">
          </div>
          <div class="form-group">
            <label for="entity-type">Entity Type</label>
            <select id="entity-type" required>
              <option value="" disabled selected>Select Entity Type</option>
              <option value="Private Limited">Private Limited</option>
              <option value="LLP">LLP</option>
              <option value="Partnership">Partnership</option>
              <option value="Sole Proprietorship">Sole Proprietorship</option>
              <option value="NGO / Trust">NGO / Trust</option>
              <option value="Not Applicable">Not Applicable</option>
            </select>
          </div>
          <div class="form-group">
            <label for="business-service">Service Required</label>
            <select id="business-service" required>
              <option value="" disabled selected>Select a Service</option>
              <option value="GST Registration & Filing">GST Registration & Filing</option>
              <option value="Corporate Tax">Corporate Tax</option>
              <option value="Audit & Assurance">Audit & Assurance</option>
              <option value="Virtual CFO">Virtual CFO</option>
              <option value="Company Registration">Company Registration (Incorporation)</option>
              <option value="Monthly Compliance">Monthly Compliance Packages</option>
              <option value="Other">Other (Please Specify)</option>
            </select>
          </div>
          <div class="form-group hidden" id="business-service-other-group">
            <label for="business-service-other">Please Specify</label>
            <input type="text" id="business-service-other" placeholder="Enter service needed">
          </div>
          <button type="submit" class="btn btn-primary w-full" style="margin-top: 1rem;">Request Consultation</button>
        </form>
      </div>
    </div>
  `;
}

function getActiveClass(path) {
  const current = getCurrentRoute();
  return current === path ? 'active' : '';
}

function getCurrentRoute() {
  const hash = window.location.hash.slice(1) || '/';
  return hash.split('?')[0];
}

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
            <li class="nav-item nav-dropdown">
              <span class="nav-link">Income Tax <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></span>
              <div class="mega-menu">
                <div class="mega-menu-column">
                  <h3>Individual</h3>
                  <a href="#/services/individual" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="7" r="4" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/></svg>
                    <div class="mega-menu-content">
                      <h4>File ITR</h4>
                      <p>e-File your Income Tax Return</p>
                    </div>
                  </a>
                  <a href="#/services/individual" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/><polyline points="14 2 14 8 20 8" stroke="#2563eb" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" stroke="#2563eb" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" stroke="#2563eb" stroke-width="2"/></svg>
                    <div class="mega-menu-content">
                      <h4>Tax Notices</h4>
                      <p>Expert replies to department</p>
                    </div>
                  </a>
                </div>
                <div class="mega-menu-column">
                  <h3>Business</h3>
                  <a href="#/services/business" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/><path d="M9 22v-4h6v4" stroke="#2563eb" stroke-width="2"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/></svg>
                    <div class="mega-menu-content">
                      <h4>Corporate Tax</h4>
                      <p>Filing for private limited companies</p>
                    </div>
                  </a>
                  <a href="#/services/business" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/><path d="M9 12l2 2 4-4" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <div class="mega-menu-content">
                      <h4>Audit Services</h4>
                      <p>Statutory and tax audits</p>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            
            <li class="nav-item nav-dropdown">
              <span class="nav-link">GST <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></span>
              <div class="mega-menu">
                <div class="mega-menu-column">
                  <h3>Compliance</h3>
                  <a href="#/services/business" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#2563eb" stroke-width="2"/><path d="M12 11v6m-3-3h6" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/></svg>
                    <div class="mega-menu-content">
                      <h4>GST Registration</h4>
                      <p>Get your business registered</p>
                    </div>
                  </a>
                  <a href="#/services/business" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/><polyline points="14 2 14 8 20 8" stroke="#2563eb" stroke-width="2"/><path d="M12 18v-6m-3 3l3-3 3 3" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <div class="mega-menu-content">
                      <h4>GST Returns</h4>
                      <p>GSTR-1, GSTR-3B, GSTR-9</p>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li class="nav-item nav-dropdown">
              <span class="nav-link">Resources <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></span>
              <div class="mega-menu">
                <div class="mega-menu-column">
                  <h3>Learn</h3>
                  <a href="#/tax-guides" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#2563eb" stroke-width="2"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/></svg>
                    <div class="mega-menu-content">
                      <h4>Tax Guides</h4>
                      <p>Step-by-step tutorials</p>
                    </div>
                  </a>
                  <a href="#/calculator" class="mega-menu-item">
                    <svg class="mega-menu-icon" viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/><line x1="8" y1="6" x2="16" y2="6" stroke="#2563eb" stroke-width="2"/><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/></svg>
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
          <a href="#" class="btn-primary" onclick="event.preventDefault(); window.openLeadModal();">Consult an Expert</a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button class="mobile-nav-toggle" id="mobile-toggle" aria-label="Toggle Navigation Side Panel">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round">
            <line x1="4" y1="6" x2="14" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Side Panel Drawer Backdrop -->
    <div class="mobile-nav-backdrop" id="mobile-backdrop"></div>

    <!-- Mobile Side Panel Drawer Menu -->
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
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#0f172a"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
      
      <div class="mobile-nav-menu">
        <!-- 1. Income Tax Section -->
        <div class="mobile-nav-item">
          <a href="javascript:void(0)" class="mobile-nav-link" data-toggle="sub-menu">
            <span>Income Tax</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="mobile-sub-menu">
            <a href="#/services/individual" class="mobile-sub-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4" fill="#bfdbfe"/></svg>
              <span>File ITR</span>
            </a>
            <a href="#/services/individual" class="mobile-sub-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#bfdbfe"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <span>Tax Notices</span>
            </a>
            <a href="#/services/business" class="mobile-sub-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" fill="#bfdbfe"/><path d="M9 22v-4h6v4"/></svg>
              <span>Corporate Tax</span>
            </a>
            <a href="#/services/business" class="mobile-sub-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="2"><circle cx="12" cy="12" r="9" fill="#bfdbfe"/><path d="M9 12l2 2 4-4"/></svg>
              <span>Audit Services</span>
            </a>
          </div>
        </div>

        <!-- 2. GST Services Section -->
        <div class="mobile-nav-item">
          <a href="javascript:void(0)" class="mobile-nav-link" data-toggle="sub-menu">
            <span>GST Services</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="mobile-sub-menu">
            <a href="#/services/business" class="mobile-sub-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" fill="#bfdbfe"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 11v6m-3-3h6"/></svg>
              <span>GST Registration</span>
            </a>
            <a href="#/services/business" class="mobile-sub-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#bfdbfe"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6m-3 3l3-3 3 3"/></svg>
              <span>GST Returns</span>
            </a>
          </div>
        </div>

        <!-- 3. Resources Section -->
        <div class="mobile-nav-item">
          <a href="javascript:void(0)" class="mobile-nav-link" data-toggle="sub-menu">
            <span>Resources &amp; Tools</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="mobile-sub-menu">
            <a href="#/tax-guides" class="mobile-sub-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="#bfdbfe"/></svg>
              <span>Tax Guides</span>
            </a>
            <a href="#/calculator" class="mobile-sub-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" fill="#bfdbfe"/><line x1="8" y1="6" x2="16" y2="6"/></svg>
              <span>Tax Calculator</span>
            </a>
            <a href="#/gst" class="mobile-sub-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="2"><circle cx="11" cy="11" r="8" fill="#bfdbfe"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>GST Rate Finder</span>
            </a>
          </div>
        </div>

        <!-- 4. Pricing Dropdown Section -->
        <div class="mobile-nav-item">
          <a href="javascript:void(0)" class="mobile-nav-link" data-toggle="sub-menu">
            <span>Pricing</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <div class="mobile-sub-menu">
            <a href="#/services/individual" class="mobile-sub-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4" fill="#bfdbfe"/></svg>
              <span>Individual Pricing</span>
            </a>
            <a href="#/services/business" class="mobile-sub-item">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" fill="#bfdbfe"/><path d="M9 22v-4h6v4"/></svg>
              <span>Business Pricing</span>
            </a>
          </div>
        </div>
        <div class="mobile-nav-item">
          <a href="#/about" class="mobile-nav-link"><span>About Us</span></a>
        </div>
        <div class="mobile-nav-item">
          <a href="#/contact" class="mobile-nav-link"><span>Registered Office &amp; Contact</span></a>
        </div>

        <!-- 5. CTA Button -->
        <div class="mobile-nav-item" style="margin-top: 1rem; border-bottom: none;">
          <a href="#" class="btn-primary" style="display: block; text-align: center; padding: 14px; border-radius: 10px; font-weight: 600;" onclick="event.preventDefault(); window.openLeadModal(); const mn = document.getElementById('mobile-nav'); const mb = document.getElementById('mobile-backdrop'); if(mn) mn.classList.remove('is-open'); if(mb) mb.classList.remove('is-open'); document.body.style.overflow = '';">Consult an Expert</a>
        </div>
      </div>
    </div>
  `;

  // Attach nav HTML to document once
  if (!document.getElementById('main-nav-wrapper')) {
    const navPlaceholder = document.createElement('div');
    navPlaceholder.id = 'main-nav-wrapper';
    navPlaceholder.innerHTML = navHTML;
    document.body.prepend(navPlaceholder);
  }
}


function getFooterHTML() {
  return `
    <footer class="site-footer" id="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="nav-logo" href="#/">
              <img class="logo-img" src="logo.jpg" alt="Anand Pant & Co. Logo" />
              <div class="logo-text">
                <span class="logo-name" style="color:#fff">Anand Pant & Co.</span>
                <span class="logo-suffix">Grow More With Us</span>
              </div>
            </a>
            <p>India's most trusted tax filing and compliance platform. Bank-grade security, expert CAs, and guaranteed accuracy for every return.</p>
            <div class="footer-social mt-3">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="https://www.linkedin.com/company/142887959/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div>
            <div class="footer-heading">Income Tax</div>
            <div class="footer-links">
              <a href="#/services/individual">ITR-1 (Salary)</a>
              <a href="#/services/individual">ITR-2 (Capital Gains)</a>
              <a href="#/services/individual">ITR-3 (Business)</a>
              <a href="#/services/individual">NRI Tax Filing</a>
              <a href="#/calculator">Tax Calculator</a>
            </div>
          </div>

          <div>
            <div class="footer-heading">GST & Business</div>
            <div class="footer-links">
              <a href="#/services/business">GST Filing</a>
              <a href="#/services/business">GST Registration</a>
              <a href="#/services/business">TDS Returns</a>
              <a href="#/gst">GST Rate Finder</a>
              <a href="#/services/business">Company Registration</a>
            </div>
          </div>

          <div>
            <div class="footer-heading">Resources</div>
            <div class="footer-links">
              <a href="#/calculator">Tax Calculator</a>
              <a href="#/gst">GST Rate Finder</a>
              <div class="footer-dropdown-container" style="position: relative; display: block;" 
                   onmouseenter="this.querySelector('.footer-dropdown-menu').style.display='block'; this.querySelector('svg').style.transform='rotate(180deg)';"
                   onmouseleave="this.querySelector('.footer-dropdown-menu').style.display='none'; this.querySelector('svg').style.transform='rotate(0deg)';">
                <a href="#" onclick="event.preventDefault(); const m = this.nextElementSibling; const isVisible = m.style.display === 'block'; m.style.display = isVisible ? 'none' : 'block'; this.querySelector('svg').style.transform = isVisible ? 'rotate(180deg)' : 'rotate(0deg)';" class="footer-dropdown-toggle" style="display: flex; align-items: center; gap: 4px; color: rgba(255, 255, 255, 0.5); cursor: pointer;">
                  Pricing Plans 
                  <svg style="width: 12px; height: 12px; transition: transform 0.2s;" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
                </a>
                <div class="footer-dropdown-menu" style="display: none; position: absolute; top: 100%; left: 0; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 6px 0; min-width: 120px; z-index: 100; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); margin-top: 4px;">
                  <a href="#/services/individual" style="display: block; padding: 8px 16px; color: #000000; font-size: 0.85rem; text-decoration: none; transition: background 0.2s, color 0.2s;" onmouseover="this.style.background='#f3f4f6'; this.style.color='#000';" onmouseout="this.style.background='transparent'; this.style.color='#000000';">Individual</a>
                  <a href="#/services/business" style="display: block; padding: 8px 16px; color: #000000; font-size: 0.85rem; text-decoration: none; transition: background 0.2s, color 0.2s;" onmouseover="this.style.background='#f3f4f6'; this.style.color='#000';" onmouseout="this.style.background='transparent'; this.style.color='#000000';">Business</a>
                </div>
              </div>
              <a href="#/tax-guides">Tax Guides</a>
            </div>
          </div>

          <div>
            <div class="footer-heading">Company</div>
            <div class="footer-links">
              <a href="#/about">About Us</a>
              <a href="#/contact">Contact</a>
              <a href="#/privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© 2026 Anand Pant & Co. All rights reserved. Authorized e-Filing Intermediary.</span>
        </div>
      </div>
    </footer>
  `;
}

// ── Router Logic ─────────────────────────────────────────────────────────────

let currentCleanup = null;

async function handleRoute() {
  const path = getCurrentRoute();
  const route = routes[path] || routes['/'];
  const app = document.getElementById('app');

  // Cleanup previous page
  if (currentCleanup && typeof currentCleanup === 'function') {
    try { currentCleanup(); } catch(e) { /* ignore */ }
    currentCleanup = null;
  }

  // Update document title
  document.title = `${route.title} - Anand Pant & Co.`;

  // Show loader
  const isDashboard = path === '/dashboard';

  app.innerHTML = `
    ${renderAnnouncementBar()}
    ${renderLeadModal()}
    ${renderBusinessModal()}
    
    <main id="page-content">
      <div class="page-loader"><div class="loader"></div></div>
    </main>
    ${isDashboard ? '' : getFooterHTML()}
  `;

  // Init nav interactions
  initNavigation();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Load page module
  try {
    const mod = await import(route.module);
    const page = mod.default;
    const pageContent = document.getElementById('page-content');

    if (page && page.render) {
      pageContent.innerHTML = page.render();
      pageContent.style.animation = 'fadeIn 0.3s ease';

      if (page.init) {
        // Small delay to let DOM settle
        requestAnimationFrame(() => {
          page.init();
        });
      }

      if (page.cleanup) {
        currentCleanup = page.cleanup;
      }
    }
  } catch (err) {
    console.error('Page load error:', err);
    document.getElementById('page-content').innerHTML = `
      <div class="section" style="min-height:60vh; display:flex; align-items:center; justify-content:center;">
        <div class="text-center">
          <div style="font-size:4rem; margin-bottom:16px;">⚠️</div>
          <h2 class="heading-md mb-2">Page Not Found</h2>
          <p class="text-muted mb-3">The page you're looking for doesn't exist or failed to load.</p>
          <a class="btn btn-primary" href="#/">Go Home</a>
        </div>
      </div>
    `;
  }
}

// ── Navigation Interactions ──────────────────────────────────────────────────

function initNavigation() {
  // Guarantee nav elements exist in DOM
  renderNavigation();

  const nav = document.getElementById('main-nav');
  if (nav && !nav.dataset.scrollBound) {
    nav.dataset.scrollBound = 'true';
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        nav.classList.add('nav-hidden');
      } else {
        nav.classList.remove('nav-hidden');
      }
      lastScrollY = window.scrollY;
    }, { passive: true });
  }

  // Mobile 3-Dots Side Drawer Panel Handlers
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileBackdrop = document.getElementById('mobile-backdrop');

  const openSidePanel = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (mobileNav) mobileNav.classList.add('is-open');
    if (mobileBackdrop) mobileBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeSidePanel = (e) => {
    if (e) { e.stopPropagation(); }
    if (mobileNav) mobileNav.classList.remove('is-open');
    if (mobileBackdrop) mobileBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (mobileToggle) mobileToggle.onclick = openSidePanel;
  if (mobileClose) mobileClose.onclick = closeSidePanel;
  if (mobileBackdrop) mobileBackdrop.onclick = closeSidePanel;

  // Sub-menu accordion toggles in mobile drawer
  document.querySelectorAll('[data-toggle="sub-menu"]').forEach(link => {
    link.style.cursor = 'pointer';
    link.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parentItem = link.closest('.mobile-nav-item');
      const subMenu = parentItem?.querySelector('.mobile-sub-menu');
      const arrowIcon = link.querySelector('svg');
      
      if (subMenu) {
        const isExpanded = subMenu.classList.contains('is-open');
        if (isExpanded) {
          subMenu.classList.remove('is-open');
          if (arrowIcon) arrowIcon.style.transform = 'rotate(0deg)';
        } else {
          // Collapse other sub-menus first
          document.querySelectorAll('.mobile-sub-menu').forEach(sm => sm.classList.remove('is-open'));
          document.querySelectorAll('[data-toggle="sub-menu"] svg').forEach(svg => svg.style.transform = 'rotate(0deg)');

          subMenu.classList.add('is-open');
          if (arrowIcon) arrowIcon.style.transform = 'rotate(180deg)';
        }
      }
    };
  });

  // Direct page navigation links inside mobile drawer
  document.querySelectorAll('.mobile-sub-item, .mobile-nav-link:not([data-toggle="sub-menu"])').forEach(link => {
    link.style.cursor = 'pointer';
    link.onclick = (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        e.stopPropagation();
        closeSidePanel(e);
        window.location.hash = href;
      }
    };
  });

  // Google Sheet Web App Submission Helper
  const submitLeadToGoogleSheet = (payload) => {
    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxXfSg5KYf3R2pyKXdsDLY5l4mB_G6jUrRUQfEXKA_CLNi08cwI4LQBN7TUULfg0HEcvw/exec';
    
    if (!GOOGLE_SHEET_URL || GOOGLE_SHEET_URL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL') {
      console.warn("Google Sheet Web App URL not configured. Simulating submission.");
      return new Promise(resolve => setTimeout(resolve, 800));
    }
    
    return fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(() => ({ status: 'success' }))
    .catch(err => {
      console.error("Error submitting lead to Google Sheet:", err);
      return { status: 'error', error: err };
    });
  };

  // Lead Modal Logic
  const modal = document.getElementById('lead-modal');
  const closeBtn = document.getElementById('lead-modal-close');
  const form = document.getElementById('lead-form');
  const serviceSelect = document.getElementById('lead-service');
  const otherGroup = document.getElementById('lead-service-other-group');
  const otherInput = document.getElementById('lead-service-other');

  window.openLeadModal = () => {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLeadModal = () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      form.reset();
      otherGroup.classList.add('hidden');
      otherInput.removeAttribute('required');
    }
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLeadModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeLeadModal();
      }
    });
  }

  if (serviceSelect && otherGroup && otherInput) {
    serviceSelect.addEventListener('change', (e) => {
      if (e.target.value === 'Other') {
        otherGroup.classList.remove('hidden');
        otherInput.setAttribute('required', 'true');
      } else {
        otherGroup.classList.add('hidden');
        otherInput.removeAttribute('required');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerText;
      btn.innerText = 'Submitting...';
      btn.disabled = true;

      const payload = {
        leadType: 'Individual',
        name: document.getElementById('lead-name')?.value || '',
        email: document.getElementById('lead-email')?.value || '',
        phone: document.getElementById('lead-phone')?.value || '',
        service: document.getElementById('lead-service')?.value === 'Other' 
          ? document.getElementById('lead-service-other')?.value 
          : document.getElementById('lead-service')?.value,
        notes: 'Submitted via Individual Consultation Modal'
      };

      submitLeadToGoogleSheet(payload).then(() => {
        window.showToast('We have received your request! Our expert will contact you shortly.', 'success');
        closeLeadModal();
        btn.innerText = originalText;
        btn.disabled = false;
      });
    });
  }

  // Business Modal Logic
  const bModal = document.getElementById('business-modal');
  const bCloseBtn = document.getElementById('business-modal-close');
  const bForm = document.getElementById('business-form');
  const bServiceSelect = document.getElementById('business-service');
  const bOtherGroup = document.getElementById('business-service-other-group');
  const bOtherInput = document.getElementById('business-service-other');

  window.openBusinessModal = () => {
    if (bModal) {
      bModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeBusinessModal = () => {
    if (bModal) {
      bModal.classList.remove('active');
      document.body.style.overflow = '';
      bForm.reset();
      bOtherGroup.classList.add('hidden');
      bOtherInput.removeAttribute('required');
    }
  };

  if (bCloseBtn) {
    bCloseBtn.addEventListener('click', closeBusinessModal);
  }

  if (bModal) {
    bModal.addEventListener('click', (e) => {
      if (e.target === bModal) {
        closeBusinessModal();
      }
    });
  }

  if (bServiceSelect && bOtherGroup && bOtherInput) {
    bServiceSelect.addEventListener('change', (e) => {
      if (e.target.value === 'Other') {
        bOtherGroup.classList.remove('hidden');
        bOtherInput.setAttribute('required', 'true');
      } else {
        bOtherGroup.classList.add('hidden');
        bOtherInput.removeAttribute('required');
      }
    });
  }

  if (bForm) {
    bForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = bForm.querySelector('button[type="submit"]');
      const originalText = btn.innerText;
      btn.innerText = 'Submitting...';
      btn.disabled = true;

      const company = document.getElementById('company-name')?.value || '';
      const entity = document.getElementById('entity-type')?.value || '';

      const payload = {
        leadType: 'Business',
        name: document.getElementById('business-name')?.value || '',
        email: document.getElementById('business-email')?.value || '',
        phone: document.getElementById('business-phone')?.value || '',
        service: document.getElementById('business-service')?.value === 'Other' 
          ? document.getElementById('business-service-other')?.value 
          : document.getElementById('business-service')?.value,
        notes: `Company: ${company} | Entity: ${entity}`
      };

      submitLeadToGoogleSheet(payload).then(() => {
        window.showToast('Thank you! Our senior corporate consultant will contact you within 24 hours.', 'success');
        closeBusinessModal();
        btn.innerText = originalText;
        btn.disabled = false;
      });
    });
  }
}

// ── Scroll Reveal Observer ───────────────────────────────────────────────────

window.initRevealObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  return observer;
};

// ── Counter Animation ────────────────────────────────────────────────────────

window.animateCounters = () => {
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const duration = 2000;
        const start = performance.now();
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          const current = Math.round(target * eased);
          el.textContent = prefix + current.toLocaleString('en-IN') + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => counterObserver.observe(c));
};

// ── Toast System ─────────────────────────────────────────────────────────────

window.showToast = (message, type = 'info') => {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(30px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

// ── Initialize ───────────────────────────────────────────────────────────────

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', () => {
  renderNavigation();
  handleRoute();
});

