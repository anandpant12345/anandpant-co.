export default {
  render() {
    return `
      <!-- ========== HERO SECTION ========== -->
      <section class="hero hero-dark" style="padding: 80px 0 40px; text-align: center; position: relative;">
        <div class="hero-mesh"></div>
        <div class="container" style="position: relative; z-index: 2;">
          <h1 class="heading-xl reveal" style="color: #fff; font-size: 3rem;">
            Privacy Policy
          </h1>
          <p class="text-md text-muted reveal reveal-delay-1" style="max-width: 600px; margin: 12px auto 0;">
            Effective Date: July 12, 2026. Tailored in compliance with the Digital Personal Data Protection (DPDP) Act, 2023.
          </p>
        </div>
      </section>

      <!-- ========== PRIVACY CONTENT ========== -->
      <section class="section" style="padding: 60px 0; background: var(--color-surface-light);">
        <div class="container" style="max-width: 880px;">
          <div class="card reveal" style="background: #ffffff; padding: 40px; border-radius: 16px; box-shadow: 0 4px 30px rgba(0,0,0,0.03); display: flex; flex-direction: column; gap: 28px;">
            
            <div>
              <h2 style="font-size: 1.35rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">1. Introduction</h2>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
                Welcome to **Anand Pant & Co.** We value your trust and are committed to protecting your personal and financial data. This Privacy Policy details how we collect, store, process, and protect your information when you use our website and professional e-filing/compliance services.
              </p>
            </div>

            <div>
              <h2 style="font-size: 1.35rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">2. Information We Collect</h2>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 8px;">
                To file tax returns, verify your identity, and provide statutory advisory services, we collect:
              </p>
              <ul style="padding-left: 20px; color: #475569; font-size: 0.95rem; line-height: 1.6; display: flex; flex-direction: column; gap: 6px;">
                <li><strong>Identity Information:</strong> Name, Email Address, Contact Number, PAN Card number, and Aadhaar Card details.</li>
                <li><strong>Income & Tax Information:</strong> Form 16 (salary details), Bank Statements, Form 26AS/AIS summaries, investment declarations, capital gains logs, and loan payment details.</li>
                <li><strong>Verification Data:</strong> Aadhaar OTPs (solely used for live e-verification of returns). We do not save or log your Aadhaar OTPs on our databases.</li>
              </ul>
            </div>

            <div>
              <h2 style="font-size: 1.35rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">3. How We Process Your Data</h2>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 8px;">
                Your data is processed strictly for the following purposes:
              </p>
              <ul style="padding-left: 20px; color: #475569; font-size: 0.95rem; line-height: 1.6; display: flex; flex-direction: column; gap: 6px;">
                <li>To accurately calculate, prepare, and electronically file your Income Tax Returns (ITR) and GST/TDS filings.</li>
                <li>To assign a verified, certified Chartered Accountant (CA) under Non-Disclosure Agreements (NDAs) to review your files.</li>
                <li>To communicate transactional status updates, filing confirmations, or resolution requirements regarding notices.</li>
              </ul>
            </div>

            <div>
              <h2 style="font-size: 1.35rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">4. Security & Encryption</h2>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
                We employ bank-grade security protocols to prevent data leaks. All personal documents and credentials are encrypted using **256-bit AES Encryption** in transit and at rest. Access to your financial logs is strictly limited to authorized auditing specialists.
              </p>
            </div>

            <div>
              <h2 style="font-size: 1.35rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">5. Data Retention</h2>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">
                As an authorized e-Filing Intermediary in India, we are legally required to retain your financial records and completed returns for **8 assessment years** as mandated by the Income Tax Act, 1961. Non-statutory files can be deleted upon request.
              </p>
            </div>

            <div>
              <h2 style="font-size: 1.35rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">6. Your Rights under the DPDP Act, 2023</h2>
              <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 8px;">
                As a data principal, you hold the following rights:
              </p>
              <ul style="padding-left: 20px; color: #475569; font-size: 0.95rem; line-height: 1.6; display: flex; flex-direction: column; gap: 6px;">
                <li>The right to seek information and summary of your personal data processed.</li>
                <li>The right to request correction or updating of inaccurate records.</li>
                <li>The right to withdraw consent at any time for non-statutory communication.</li>
                <li>The right to file a grievance to our Data Protection Officer at <strong>privacy@apaco.in</strong>.</li>
              </ul>
            </div>

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
