export default {
  render() {
    return `
      <!-- ========== HERO SECTION ========== -->
      <section class="hero hero-dark" style="padding: 100px 0 60px; text-align: center; position: relative;">
        <div class="hero-mesh"></div>
        <div class="container" style="position: relative; z-index: 2;">
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <span class="badge badge-info reveal" style="padding: 8px 20px; font-size: 0.9rem; border-radius: 30px; color: #fff;">Company</span>
          </div>
          <h1 class="heading-xl reveal reveal-delay-1" style="color: #fff;">
            About Anand Pant & Co.
          </h1>
          <p class="text-lg text-muted reveal reveal-delay-2" style="max-width: 640px; margin: 20px auto 36px;">
            Simplifying tax filing, corporate accounting, and legal compliance for individuals and businesses across India.
          </p>
        </div>
      </section>

      <!-- ========== VISION & MISSION ========== -->
      <section class="section" style="padding: 60px 0;">
        <div class="container">
          <div class="grid-2">
            <div class="card reveal" style="padding: 32px; border-radius: 16px; background: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <h2 style="font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our Mission</h2>
              <p style="color: #475569; font-size: 1rem; line-height: 1.6;">
                To make professional financial advice and tax compliance straightforward, secure, and accessible to every Indian tax payer. We combine tech-enabled automation with the expertise of seasoned Chartered Accountants.
              </p>
            </div>
            <div class="card reveal reveal-delay-1" style="padding: 32px; border-radius: 16px; background: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
              <h2 style="font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our Vision</h2>
              <p style="color: #475569; font-size: 1rem; line-height: 1.6;">
                To establish ourselves as India's leading digital tax advisory and corporate compliance partner, recognized for exceptional accuracy, customer-first service, and transparent pricing models.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== KEY VALUES & STATS ========== -->
      <section class="section section-light" style="padding: 60px 0;">
        <div class="container text-center">
          <h2 class="heading-lg reveal" style="margin-bottom: 48px;">Our Growth & Impact</h2>
          <div class="grid-3" style="margin-bottom: 48px;">
            <div class="card reveal" style="background: #fff; padding: 32px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
              <div style="font-size: 2.5rem; font-weight: 700; color: #2563eb; margin-bottom: 8px;">8,000+</div>
              <div style="color: #475569; font-weight: 600;">Returns Filed</div>
            </div>
            <div class="card reveal reveal-delay-1" style="background: #fff; padding: 32px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
              <div style="font-size: 2.5rem; font-weight: 700; color: #2563eb; margin-bottom: 8px;">15+</div>
              <div style="color: #475569; font-weight: 600;">Expert Chartered Accountants</div>
            </div>
            <div class="card reveal reveal-delay-2" style="background: #fff; padding: 32px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
              <div style="font-size: 2.5rem; font-weight: 700; color: #2563eb; margin-bottom: 8px;">₹20 Cr+</div>
              <div style="color: #475569; font-weight: 600;">Refunds Processed</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== OFFICE / LOCATION ========== -->
      <section class="section" style="padding: 60px 0;">
        <div class="container" style="display: flex; justify-content: center;">
          <div class="contact-office-card reveal">
            <h2 class="contact-office-title">Our Registered Office</h2>
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

      <!-- ========== CTA BANNER ========== -->
      <section class="section" style="padding: 60px 0;">
        <div class="container">
          <div class="cta-banner" style="text-align: center; background: linear-gradient(135deg, var(--color-primary-dark), #111e38); color: #fff; padding: 48px; border-radius: 16px;">
            <h2 class="heading-lg" style="margin-bottom: 12px; color: #fff;">Need Professional Assistance?</h2>
            <p class="text-md" style="margin-bottom: 24px; opacity: 0.9; max-width: 600px; margin-left: auto; margin-right: auto;">
              Connect with our experienced chartered accountants today to streamline your filing and compliance.
            </p>
            <button class="btn btn-primary btn-lg" onclick="event.preventDefault(); window.openLeadModal();">Speak to a Tax Expert</button>
          </div>
        </div>
      </section>
    `;
  },
  init() {
    if (typeof window.initRevealObserver === 'function') {
      window.initRevealObserver();
    }
  }
};
