// pages/contact.js - Fully Responsive Registered Office & Contact Info Page
// ─────────────────────────────────────────────────────────────────────────────

export default {
  render() {
    return `
      <section class="contact-office-wrapper">
        <div class="container" style="display: flex; justify-content: center; align-items: center; width: 100%;">
          
          <!-- Registered Office Card -->
          <div class="contact-office-card">
            
            <h2 class="contact-office-title">
              Our Registered Office
            </h2>

            <div class="contact-office-grid">
              
              <!-- Left Column: Offices -->
              <div class="contact-office-left">
                
                <!-- Delhi Office -->
                <div>
                  <div class="contact-office-item">
                    <svg class="contact-pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div>
                      <h3 class="contact-office-name">Delhi Office</h3>
                      <p class="contact-office-address">
                        O Pocket, 2nd compound, 2nd floor,<br/>
                        Dilshad Garden, Delhi, 110095
                      </p>
                    </div>
                  </div>
                </div>

                <div class="contact-office-divider"></div>

                <!-- UP Office -->
                <div>
                  <div class="contact-office-item">
                    <svg class="contact-pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div>
                      <h3 class="contact-office-name">UP Office</h3>
                      <p class="contact-office-address">
                        F-209, Indraprastha Yojna,<br/>
                        Uttar Pradesh, 201102
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Right Column: Contact Info Box -->
              <div class="contact-info-box">
                
                <div class="contact-info-header">
                  <svg class="contact-phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <h3 class="contact-info-title">Contact Info</h3>
                </div>

                <!-- Phone -->
                <div style="margin-bottom: 16px;">
                  <div class="contact-info-label">PHONE</div>
                  <a href="tel:+917982327731" class="contact-info-value">+91 79823 27731</a>
                </div>

                <div class="contact-office-divider" style="margin: 14px 0;"></div>

                <!-- Email -->
                <div style="margin-bottom: 16px;">
                  <div class="contact-info-label">EMAIL</div>
                  <a href="mailto:info@apaco.in" class="contact-info-value">info@apaco.in</a>
                </div>

                <div class="contact-office-divider" style="margin: 14px 0;"></div>

                <!-- Office Hours -->
                <div>
                  <div class="contact-info-label">OFFICE HOURS</div>
                  <div style="font-size: 0.9rem; font-weight: 500; color: #334155;">Mon - Sat (9:00 AM - 6:00 PM)</div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    `;
  },

  init() {},
  cleanup() {}
};
