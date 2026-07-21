export default {
  render() {
    return `
      <!-- ========== HERO SECTION ========== -->
      <section class="hero hero-dark" style="padding: 100px 0 60px; text-align: center; position: relative;">
        <div class="hero-mesh"></div>
        <div class="container" style="position: relative; z-index: 2;">
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <span class="badge badge-info reveal" style="padding: 8px 20px; font-size: 0.9rem; border-radius: 30px; color: #fff;">Individual Services</span>
          </div>
          <h1 class="heading-xl reveal reveal-delay-1" style="color: #fff;">
            Expert Tax Filing for Individuals
          </h1>
          <p class="text-lg text-muted reveal reveal-delay-2" style="max-width: 640px; margin: 20px auto 36px;">
            From simple salary returns to complex NRI filings, our expert CAs handle it all with 99.9% accuracy.
          </p>
          <div class="flex-center reveal reveal-delay-3" style="display: flex; justify-content: center;">
            <a href="#" onclick="event.preventDefault(); document.getElementById('individual-services-section').scrollIntoView({ behavior: 'smooth' });" class="btn btn-primary btn-lg">Get Started →</a>
          </div>
        </div>
      </section>

      <!-- ========== SERVICE CARDS ========== -->
      <section id="individual-services-section" class="section" style="scroll-margin-top: 80px;">
        <div class="container">
          <h2 class="heading-lg text-center reveal" style="margin-bottom: 48px;">Our Individual Tax Services</h2>

          <div class="service-grid">
            <!-- ITR-1 (Sahaj) -->
            <div class="card card-hover service-detail-card reveal">
              <div class="card-icon" style="background-color: #eff6ff; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 16px;">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6H28L36 14V34C36 37.3137 33.3137 40 30 40H14C10.6863 40 8 37.3137 8 34V12C8 8.68629 10.6863 6 14 6Z" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M28 6V14H36" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="32" cy="32" r="9" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
                  <path d="M28 32L31 35L36 29" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="card-title">ITR-1 (Sahaj)</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">Salary Income Filing</p>
              <p class="card-text">For salaried individuals with income up to ₹50 lakhs from single employer</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">Single employer income</li>
                <li class="service-detail-item">One house property</li>
                <li class="service-detail-item">Other sources (FD, savings)</li>
                <li class="service-detail-item">Straightforward &amp; fast</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">₹499</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openLeadModal();" class="btn btn-sm btn-primary">Hire an Expert Now</a>
              </div>
            </div>

            <!-- ITR-2 -->
            <div class="card card-hover service-detail-card reveal reveal-delay-1">
              <div class="card-icon" style="background-color: #f0fdf4; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 16px;">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6H28L36 14V34C36 37.3137 33.3137 40 30 40H14C10.6863 40 8 37.3137 8 34V12C8 8.68629 10.6863 6 14 6Z" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M28 6V14H36" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 32L22 25L26 29L32 21" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M27 21H32V26" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="32" cy="21" r="3" fill="#bfdbfe"/>
                </svg>
              </div>
              <h3 class="card-title">ITR-2</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">Capital Gains &amp; More</p>
              <p class="card-text">For individuals with capital gains, multiple properties, or foreign income</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">Stocks, MF &amp; property gains</li>
                <li class="service-detail-item">Multiple house properties</li>
                <li class="service-detail-item">Foreign income &amp; assets</li>
                <li class="service-detail-item">Director of company</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">₹899</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openLeadModal();" class="btn btn-sm btn-primary">Hire an Expert Now</a>
              </div>
            </div>

            <!-- ITR-3 -->
            <div class="card card-hover service-detail-card reveal reveal-delay-2">
              <div class="card-icon" style="background-color: #ecfeff; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 16px;">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6H28L36 14V36C36 38.2091 34.2091 40 32 40H14C11.7909 40 10 38.2091 10 36V10C10 7.79086 11.7909 6 14 6Z" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="16" y="27" width="4" height="8" rx="1" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                  <rect x="23" y="21" width="4" height="14" rx="1" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                  <rect x="30" y="17" width="4" height="18" rx="1" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                </svg>
              </div>
              <h3 class="card-title">ITR-3</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">Business &amp; Professional Income</p>
              <p class="card-text">For professionals and business owners filing detailed returns</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">Business/profession income</li>
                <li class="service-detail-item">Partnership firm income</li>
                <li class="service-detail-item">Presumptive taxation (44AD/44ADA)</li>
                <li class="service-detail-item">Audit cases with balance sheet</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">₹999</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openLeadModal();" class="btn btn-sm btn-primary">Hire an Expert Now</a>
              </div>
            </div>

            <!-- ITR-4 (Sugam) -->
            <div class="card card-hover service-detail-card reveal">
              <div class="card-icon" style="background-color: #fff7ed; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 16px;">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="6" width="22" height="34" rx="5" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 15H22" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                  <path d="M14 21H19" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                  <circle cx="32" cy="31" r="9" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
                  <path d="M29 28L35 34" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
                  <circle cx="30" cy="33" r="1.5" fill="#2563eb"/>
                  <circle cx="34" cy="29" r="1.5" fill="#2563eb"/>
                </svg>
              </div>
              <h3 class="card-title">ITR-4 (Sugam)</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">Presumptive Income</p>
              <p class="card-text">For small businesses and professionals under presumptive taxation scheme</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">Business income under 44AD</li>
                <li class="service-detail-item">Professional income under 44ADA</li>
                <li class="service-detail-item">Turnover up to ₹2 Crore</li>
                <li class="service-detail-item">Gross receipts up to ₹50 Lakhs</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">₹499</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openLeadModal();" class="btn btn-sm btn-primary">Hire an Expert Now</a>
              </div>
            </div>

            <!-- NRI Tax Filing -->
            <div class="card card-hover service-detail-card reveal reveal-delay-1">
              <div class="card-icon" style="background-color: #f3e8ff; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 16px;">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="22" r="13" stroke="#2563eb" stroke-width="3"/>
                  <path d="M8 22H32" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
                  <path d="M20 9C23.5 13 25 17.5 25 22C25 26.5 23.5 31 20 35" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
                  <path d="M20 9C16.5 13 15 17.5 15 22C15 26.5 16.5 31 20 35" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
                  <path d="M30 35L33 28L39 31L36 36L40 40L36 41L32 38L29 41L30 35Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="card-title">NRI Tax Filing</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">Non-Resident Indian Filing</p>
              <p class="card-text">Specialized tax filing for NRIs with Indian and foreign income</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">DTAA benefit optimization</li>
                <li class="service-detail-item">Foreign tax credit (FTC)</li>
                <li class="service-detail-item">Indian rental income</li>
                <li class="service-detail-item">Capital gains on Indian assets</li>
                <li class="service-detail-item">NRE/NRO account advisory</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">₹2,499</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openLeadModal();" class="btn btn-sm btn-primary">Hire an Expert Now</a>
              </div>
            </div>

            <!-- Capital Gains Tax -->
            <div class="card card-hover service-detail-card reveal reveal-delay-2">
              <div class="card-icon" style="background-color: #eff6ff; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 16px;">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="19" cy="14" r="6" stroke="#2563eb" stroke-width="3"/>
                  <path d="M7 35C7 28.9249 11.9249 24 18 24C21 24 23.7 25.2 25.7 27.1" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                  <path d="M18 24V29L20 31L18 35" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                  <circle cx="33" cy="33" r="8" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
                  <path d="M29 33L32 36L37 30" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="card-title">Capital Gains Tax</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">Investment Tax Filing</p>
              <p class="card-text">Expert handling of stocks, mutual funds, crypto and property transactions</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">Multi-broker stock trading</li>
                <li class="service-detail-item">Mutual fund capital gains</li>
                <li class="service-detail-item">Property sale/purchase</li>
                <li class="service-detail-item">ESOP/RSU taxation</li>
                <li class="service-detail-item">Crypto/VDA reporting</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">₹1,499</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openLeadModal();" class="btn btn-sm btn-primary">Hire an Expert Now</a>
              </div>
            </div>            </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ========== WHY CHOOSE US ========== -->
      <section class="section section-light">
        <div class="container">
          <h2 class="heading-lg text-center reveal" style="margin-bottom: 48px;">Why 10,000+ Individuals Trust Us</h2>

          <div class="grid-4">
            <div class="card card-hover reveal" style="text-align: left; padding: 32px 24px; border-top: 4px solid var(--accent-primary, #6c63ff); border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
              <div style="background: rgba(108, 99, 255, 0.1); width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 28px; height: 28px; color: var(--accent-primary, #6c63ff);"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 class="card-title" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 12px;">Expert CAs</h3>
              <p class="card-text" style="color: #4b5563; line-height: 1.6; font-size: 0.95rem;">15+ certified CAs with avg. 8 years experience</p>
            </div>
            
            <div class="card card-hover reveal reveal-delay-1" style="text-align: left; padding: 32px 24px; border-top: 4px solid #f59e0b; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
              <div style="background: rgba(245, 158, 11, 0.1); width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 28px; height: 28px; color: #f59e0b;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 class="card-title" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 12px;">24h Turnaround</h3>
              <p class="card-text" style="color: #4b5563; line-height: 1.6; font-size: 0.95rem;">Most returns prepared within 24 hours</p>
            </div>
            
            <div class="card card-hover reveal reveal-delay-2" style="text-align: left; padding: 32px 24px; border-top: 4px solid #10b981; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
              <div style="background: rgba(16, 185, 129, 0.1); width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 28px; height: 28px; color: #10b981;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 class="card-title" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 12px;">100% Accuracy</h3>
              <p class="card-text" style="color: #4b5563; line-height: 1.6; font-size: 0.95rem;">99.9% accuracy rate across all filings</p>
            </div>
            
            <div class="card card-hover reveal reveal-delay-3" style="text-align: left; padding: 32px 24px; border-top: 4px solid #6366f1; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
              <div style="background: rgba(99, 102, 241, 0.1); width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 28px; height: 28px; color: #6366f1;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 class="card-title" style="font-size: 1.25rem; font-weight: 700; margin-bottom: 12px;">Secure &amp; Encrypted</h3>
              <p class="card-text" style="color: #4b5563; line-height: 1.6; font-size: 0.95rem;">Bank-grade 256-bit AES encryption</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== CTA BANNER ========== -->
      <section class="section">
        <div class="container">
          <div class="cta-banner reveal">
            <h2 class="heading-lg" style="color: white;">Ready to File Your ITR?</h2>
            <p class="text-lg" style="margin: 16px 0 32px; opacity: 0.9;">
              Join 10,000+ individuals who trust us with their tax filings. Get expert assistance from certified CAs at the most competitive prices.
            </p>
            <div class="flex-center" style="gap: 16px; flex-wrap: wrap; display: flex; justify-content: center;">
              <a href="#" onclick="event.preventDefault(); window.openLeadModal();" class="btn btn-primary btn-lg">Start Filing →</a>
              <a href="#" onclick="event.preventDefault(); window.openLeadModal();" class="btn btn-outline-white btn-lg">Talk to Expert</a>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  init() {
    if (window.initRevealObserver) {
      window.initRevealObserver();
    }
  },

  cleanup() {
    // Nothing to clean up
  }
};

