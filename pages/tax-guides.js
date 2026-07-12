export default {
  render() {
    return `
      <!-- ========== HERO SECTION ========== -->
      <section class="hero hero-dark" style="padding: 100px 0 60px; text-align: center; position: relative;">
        <div class="hero-mesh"></div>
        <div class="container" style="position: relative; z-index: 2;">
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <span class="badge badge-info reveal" style="padding: 8px 20px; font-size: 0.9rem; border-radius: 30px; color: #fff;">Resources</span>
          </div>
          <h1 class="heading-xl reveal reveal-delay-1" style="color: #fff;">
            Complete Guide to Filing Your ITR
          </h1>
          <p class="text-lg text-muted reveal reveal-delay-2" style="max-width: 640px; margin: 20px auto 36px;">
            A step-by-step visual guide to filing your Income Tax Return in India for FY 2025-26 (AY 2026-27).
          </p>
        </div>
      </section>

      <!-- ========== STEP-BY-STEP FILING FLOWCHART ========== -->
      <style>
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 0;
        }
        .timeline-row {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          align-items: center;
          margin-bottom: 48px;
          position: relative;
          z-index: 2;
        }
        .timeline-card {
          background: #ffffff;
          padding: 24px 30px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .timeline-card::before {
          content: '';
          position: absolute;
          top: 50%;
          width: 20px;
          height: 2px;
          background: #cbd5e1;
          z-index: -1;
        }
        .timeline-row-left .timeline-card::before {
          right: -20px;
        }
        .timeline-row-right .timeline-card::before {
          left: -20px;
        }
        .timeline-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(37, 99, 235, 0.08);
          border-color: #2563eb;
        }
        .timeline-node {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 4px solid #2563eb;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          font-weight: 800;
          margin: 0 auto;
          z-index: 3;
          box-shadow: 0 4px 10px rgba(37,99,235,0.15);
          transition: all 0.3s ease;
        }
        .timeline-row:hover .timeline-node {
          background: #2563eb;
          color: #ffffff;
          transform: scale(1.15);
          box-shadow: 0 0 15px rgba(37,99,235,0.4);
        }
        
        .timeline-row-left .timeline-left {
          grid-column: 1;
        }
        .timeline-row-left .timeline-right {
          grid-column: 3;
          visibility: hidden;
          pointer-events: none;
        }
        .timeline-row-right .timeline-left {
          grid-column: 1;
          visibility: hidden;
          pointer-events: none;
        }
        .timeline-row-right .timeline-right {
          grid-column: 3;
        }
        
        .timeline-row-left .timeline-card {
          text-align: left;
        }
        .timeline-row-right .timeline-card {
          text-align: left;
        }

        @media (max-width: 768px) {
          .timeline-track-wavy {
            left: 22px !important;
            transform: none !important;
          }
          .timeline-row {
            grid-template-columns: 44px 1fr !important;
            gap: 16px;
            margin-bottom: 32px;
          }
          .timeline-node {
            grid-column: 1 !important;
            margin: 0 !important;
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
          .timeline-row-left .timeline-left {
            grid-column: 2 !important;
          }
          .timeline-row-left .timeline-right {
            display: none !important;
          }
          .timeline-row-right .timeline-left {
            display: none !important;
          }
          .timeline-row-right .timeline-right {
            grid-column: 2 !important;
          }
          .timeline-card::before {
            display: none !important;
          }
        }
      </style>

      <section class="section" style="padding: 80px 0; overflow: hidden; background: #fdfdfd;">
        <div class="container">
          <h2 class="heading-lg text-center reveal" style="margin-bottom: 12px;">How to File ITR: Step-by-Step Flow</h2>
          <p class="text-md text-center text-muted reveal" style="max-width: 600px; margin: 0 auto 60px;">A smooth, visual timeline guide connecting each step of your tax filing journey.</p>
          
          <div class="timeline-container">
            <!-- Central Wavy Sine Line -->
            <div class="timeline-track-wavy" style="position: absolute; left: 50%; top: 0; bottom: 0; width: 60px; transform: translateX(-50%); z-index: 1; pointer-events: none;">
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 2400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0 C70 50, 70 150, 50 200 C30 250, 30 350, 50 400 C70 450, 70 550, 50 600 C30 650, 30 750, 50 800 C70 850, 70 950, 50 1000 C30 1050, 30 1150, 50 1200 C70 1250, 70 1350, 50 1400 C30 1450, 30 1550, 50 1600 C70 1650, 70 1750, 50 1800 C30 1850, 30 1950, 50 2000 C70 2050, 70 2150, 50 2200 C30 2250, 30 2350, 50 2400" stroke="url(#timeline-grad)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6" fill="none" />
                <defs>
                  <linearGradient id="timeline-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#2563eb" />
                    <stop offset="50%" stop-color="#10b981" />
                    <stop offset="100%" stop-color="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <!-- Step 1 -->
            <div class="timeline-row timeline-row-left">
              <div class="timeline-left">
                <div class="timeline-card reveal">
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; color: #0f172a;">Gather All Required Documents</h3>
                  <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0;">Collect Form 16 (from employer), Bank Statements, Form 26AS/AIS (Tax Credit statements), and Investment/Expense proofs (80C, 80D, HRA).</p>
                </div>
              </div>
              <div class="timeline-node">1</div>
              <div class="timeline-right"></div>
            </div>
            
            <!-- Step 2 -->
            <div class="timeline-row timeline-row-right">
              <div class="timeline-left"></div>
              <div class="timeline-node">2</div>
              <div class="timeline-right">
                <div class="timeline-card reveal">
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; color: #0f172a;">Select the Correct ITR Form</h3>
                  <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0;">Choose <strong>ITR-1</strong> (Salary & one house), <strong>ITR-2</strong> (Capital gains/multiple houses), <strong>ITR-3</strong> (Business/Professional income), or <strong>ITR-4</strong> (Presumptive taxation).</p>
                </div>
              </div>
            </div>
            
            <!-- Step 3 -->
            <div class="timeline-row timeline-row-left">
              <div class="timeline-left">
                <div class="timeline-card reveal">
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; color: #0f172a;">Link and Verify PAN-Aadhaar</h3>
                  <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0;">Ensure your PAN card is linked to your Aadhaar card and registered on the e-filing portal of the Income Tax Department.</p>
                </div>
              </div>
              <div class="timeline-node">3</div>
              <div class="timeline-right"></div>
            </div>
            
            <!-- Step 4 -->
            <div class="timeline-row timeline-row-right">
              <div class="timeline-left"></div>
              <div class="timeline-node">4</div>
              <div class="timeline-right">
                <div class="timeline-card reveal">
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; color: #0f172a;">Pre-fill Data & Compute Tax</h3>
                  <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0;">Import pre-filled details from the portal, match with Form 16, calculate tax liability, and claim exemptions/deductions.</p>
                </div>
              </div>
            </div>
            
            <!-- Step 5 -->
            <div class="timeline-row timeline-row-left">
              <div class="timeline-left">
                <div class="timeline-card reveal">
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; color: #0f172a;">Pay Outstanding Tax (if any)</h3>
                  <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0;">If your calculated tax exceeds TDS, pay the self-assessment tax online via Challan 280 before filing.</p>
                </div>
              </div>
              <div class="timeline-node">5</div>
              <div class="timeline-right"></div>
            </div>
            
            <!-- Step 6 -->
            <div class="timeline-row timeline-row-right">
              <div class="timeline-left"></div>
              <div class="timeline-node">6</div>
              <div class="timeline-right">
                <div class="timeline-card reveal">
                  <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; color: #0f172a;">File and E-Verify ITR</h3>
                  <p style="color: #475569; font-size: 0.95rem; line-height: 1.5; margin: 0;">Submit the return on the e-filing portal. <strong style="color: #dc2626;">CRITICAL:</strong> Always e-Verify your return within 30 days using Aadhaar OTP to prevent invalidation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== DETAILED CHECKLIST ========== -->
      <section class="section section-light" style="padding: 60px 0;">
        <div class="container">
          <h2 class="heading-lg text-center reveal" style="margin-bottom: 48px;">ITR Document Checklist</h2>
          <div class="grid-3">
            <!-- Card 1: Identity & Bank Details -->
            <div class="card card-hover reveal" style="background: #ffffff; padding: 28px; border-radius: 16px; border: 1px solid #f1f5f9; box-shadow: 0 4px 20px rgba(0,0,0,0.02); transition: all 0.3s ease;">
              <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; color: #0f172a; display: flex; align-items: center; gap: 12px;">
                <span style="display: inline-block; width: 12px; height: 12px; background-color: #10b981; border-radius: 50%; flex-shrink: 0;"></span>
                Identity & Bank Details
              </h3>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
                <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: #475569;">
                  <svg style="width: 18px; height: 18px; color: #2563eb; flex-shrink: 0; margin-top: 2px;" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  <span>Aadhaar Card copy</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: #475569;">
                  <svg style="width: 18px; height: 18px; color: #2563eb; flex-shrink: 0; margin-top: 2px;" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  <span>PAN Card copy</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: #475569;">
                  <svg style="width: 18px; height: 18px; color: #2563eb; flex-shrink: 0; margin-top: 2px;" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  <span>Bank account numbers & IFSCs</span>
                </li>
              </ul>
            </div>

            <!-- Card 2: Salary & Pension -->
            <div class="card card-hover reveal reveal-delay-1" style="background: #ffffff; padding: 28px; border-radius: 16px; border: 1px solid #f1f5f9; box-shadow: 0 4px 20px rgba(0,0,0,0.02); transition: all 0.3s ease;">
              <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; color: #0f172a; display: flex; align-items: center; gap: 12px;">
                <span style="display: inline-block; width: 12px; height: 12px; background-color: #10b981; border-radius: 50%; flex-shrink: 0;"></span>
                Salary & Pension
              </h3>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
                <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: #475569;">
                  <svg style="width: 18px; height: 18px; color: #10b981; flex-shrink: 0; margin-top: 2px;" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  <span>Form 16 (Part A & B)</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: #475569;">
                  <svg style="width: 18px; height: 18px; color: #10b981; flex-shrink: 0; margin-top: 2px;" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  <span>Salary Slips (last 12 months)</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: #475569;">
                  <svg style="width: 18px; height: 18px; color: #10b981; flex-shrink: 0; margin-top: 2px;" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  <span>Form 16A (for interest income)</span>
                </li>
              </ul>
            </div>

            <!-- Card 3: Tax Saving Proofs -->
            <div class="card card-hover reveal reveal-delay-2" style="background: #ffffff; padding: 28px; border-radius: 16px; border: 1px solid #f1f5f9; box-shadow: 0 4px 20px rgba(0,0,0,0.02); transition: all 0.3s ease;">
              <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; color: #0f172a; display: flex; align-items: center; gap: 12px;">
                <span style="display: inline-block; width: 12px; height: 12px; background-color: #10b981; border-radius: 50%; flex-shrink: 0;"></span>
                Tax Saving Proofs
              </h3>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
                <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: #475569;">
                  <svg style="width: 18px; height: 18px; color: #f59e0b; flex-shrink: 0; margin-top: 2px;" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  <span>80C receipts (PPF, LIC, ELSS)</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: #475569;">
                  <svg style="width: 18px; height: 18px; color: #f59e0b; flex-shrink: 0; margin-top: 2px;" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  <span>80D Health Insurance premiums</span>
                </li>
                <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: #475569;">
                  <svg style="width: 18px; height: 18px; color: #f59e0b; flex-shrink: 0; margin-top: 2px;" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  <span>HRA receipts & Landlord PAN</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== CTA BANNER ========== -->
      <section class="section" style="padding: 60px 0;">
        <div class="container">
          <div class="cta-banner" style="text-align: center; background: linear-gradient(135deg, var(--color-primary-dark), #111e38); color: #fff; padding: 48px; border-radius: 16px;">
            <h2 class="heading-lg" style="margin-bottom: 12px; color: #fff;">Too Complex? Let Our Experts File It</h2>
            <p class="text-md" style="margin-bottom: 24px; opacity: 0.9; max-width: 600px; margin-left: auto; margin-right: auto;">
              Upload your documents and our certified CAs will handle the calculation, optimization, and e-filing for you safely.
            </p>
            <button class="btn btn-primary btn-lg" onclick="event.preventDefault(); window.openLeadModal();">Hire a Tax Expert Now</button>
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
