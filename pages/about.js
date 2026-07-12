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
        <div class="container">
          <div class="card reveal" style="padding: 40px; border-radius: 16px; background: #ffffff; box-shadow: 0 4px 30px rgba(0,0,0,0.04); display: flex; flex-direction: column; gap: 24px; max-width: 800px; margin: 0 auto;">
            <h2 style="font-size: 1.75rem; font-weight: 700; color: #0f172a; margin-bottom: 8px; text-align: center;">Our Registered Office</h2>
            <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; text-align: left; flex-wrap: wrap;">
              <!-- Left Side: Offices -->
              <div style="display: flex; flex-direction: column; gap: 24px;">
                <div>
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    📍 Delhi Office
                  </h3>
                  <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0;">
                    O Pocket, 2nd compound, 2nd floor,<br>
                    Dilshad Garden, Delhi, 110095
                  </p>
                </div>
                
                <div style="border-top: 1px solid #f1f5f9; padding-top: 16px;">
                  <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    📍 UP Office
                  </h3>
                  <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0;">
                    F-209, Indraprastha Yojna,<br>
                    Uttar Pradesh, 201102
                  </p>
                </div>
              </div>
              
              <!-- Right Side: Contact Info -->
              <div style="background: #f8fafc; border-radius: 12px; padding: 24px; border: 1px solid #f1f5f9; display: flex; flex-direction: column; gap: 16px;">
                <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin: 0; display: flex; align-items: center; gap: 8px;">
                  📞 Contact Info
                </h3>
                <div style="color: #475569; font-size: 0.95rem; line-height: 1.6; display: flex; flex-direction: column; gap: 8px;">
                  <div>
                    <strong style="color: #0f172a; display: block; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Phone</strong>
                    <a href="tel:+917982327731" style="color: #2563eb; text-decoration: none; font-weight: 600;">+91 79823 27731</a>
                  </div>
                  <div style="border-top: 1px solid #e2e8f0; padding-top: 8px;">
                    <strong style="color: #0f172a; display: block; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Email</strong>
                    <a href="mailto:info@apandco.in" style="color: #2563eb; text-decoration: none; font-weight: 600;">info@apandco.in</a>
                  </div>
                  <div style="border-top: 1px solid #e2e8f0; padding-top: 8px;">
                    <strong style="color: #0f172a; display: block; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">Office Hours</strong>
                    <span>Mon - Sat (9:00 AM - 6:00 PM)</span>
                  </div>
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
