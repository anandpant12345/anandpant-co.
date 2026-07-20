export default {
  render() {
    return `
      <!-- ========== HERO SECTION ========== -->
      <section class="hero hero-dark" style="padding: 100px 0 60px; text-align: center; position: relative;">
        <div class="hero-mesh"></div>
        <div class="container" style="position: relative; z-index: 2;">
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <span class="badge badge-premium reveal" style="padding: 8px 20px; font-size: 0.9rem; border-radius: 30px; color: #fff;">Business Services</span>
          </div>
          <h1 class="heading-xl reveal reveal-delay-1" style="color: #fff;">
            Complete Business Compliance Solutions
          </h1>
          <p class="text-lg text-muted reveal reveal-delay-2" style="max-width: 640px; margin: 20px auto 36px;">
            GST, TDS, company registration &amp; more. Focus on growth, we handle compliance.
          </p>
          <div class="flex-center reveal reveal-delay-3" style="display: flex; justify-content: center;">
            <a href="#" onclick="event.preventDefault(); document.getElementById('business-services-section').scrollIntoView({ behavior: 'smooth' });" class="btn btn-primary btn-lg">Explore Solutions →</a>
          </div>
        </div>
      </section>

      <!-- ========== SERVICE CARDS ========== -->
      <section id="business-services-section" class="section" style="scroll-margin-top: 80px;">
        <div class="container">
          <h2 class="heading-lg text-center reveal" style="margin-bottom: 48px;">Business Services</h2>

          <div class="service-grid">

            <!-- GST Filing -->
            <div class="card card-hover service-detail-card reveal">
              <div class="card-icon" style="background-color: #eff6ff; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 16px;">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6H28L36 14V34C36 37.3137 33.3137 40 30 40H14C10.6863 40 8 37.3137 8 34V12C8 8.68629 10.6863 6 14 6Z" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M28 6V14H36" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="32" cy="32" r="9" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
                  <path d="M28 32L31 35L36 29" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="card-title">GST Filing</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">GSTR-1, 3B, 9, 9C</p>
              <p class="card-text">End-to-end GST return filing and reconciliation for businesses of all sizes</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">Monthly/quarterly GSTR-1 &amp; 3B</li>
                <li class="service-detail-item">Annual GSTR-9 return</li>
                <li class="service-detail-item">GSTR-9C reconciliation</li>
                <li class="service-detail-item">Input Tax Credit optimization</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">₹599</span>
                  <span class="text-muted" style="display: block; font-size: 0.85rem;">Starting price</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openBusinessModal();" class="btn btn-sm btn-primary">Get Started</a>
              </div>
            </div>

            <!-- GST Registration -->
            <div class="card card-hover service-detail-card reveal reveal-delay-1">
              <div class="card-icon" style="background-color: #f0fdf4; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 16px;">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6H28L36 14V34C36 37.3137 33.3137 40 30 40H14C10.6863 40 8 37.3137 8 34V12C8 8.68629 10.6863 6 14 6Z" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M28 6V14H36" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="24" y="24" width="14" height="14" rx="3" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5"/>
                  <path d="M28 29H34M28 33H32" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <h3 class="card-title">GST Registration</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">New &amp; Amendment</p>
              <p class="card-text">Hassle-free GST registration, amendments, and surrender services</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">New GST registration</li>
                <li class="service-detail-item">GST amendments</li>
                <li class="service-detail-item">GST cancellation/surrender</li>
                <li class="service-detail-item">Additional place of business</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">₹999</span>
                  <span class="text-muted" style="display: block; font-size: 0.85rem;">Starting price</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openBusinessModal();" class="btn btn-sm btn-primary">Get Started</a>
              </div>
            </div>

            <!-- TDS Returns -->
            <div class="card card-hover service-detail-card reveal reveal-delay-2">
              <div class="card-icon" style="background-color: #ecfeff; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 16px;">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6H28L36 14V36C36 38.2091 34.2091 40 32 40H14C11.7909 40 10 38.2091 10 36V10C10 7.79086 11.7909 6 14 6Z" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="16" y="27" width="4" height="8" rx="1" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                  <rect x="23" y="21" width="4" height="14" rx="1" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                  <rect x="30" y="17" width="4" height="18" rx="1" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                </svg>
              </div>
              <h3 class="card-title">TDS Returns</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">24Q, 26Q, 27Q</p>
              <p class="card-text">Comprehensive TDS return filing and certificate management</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">Salary TDS (Form 24Q)</li>
                <li class="service-detail-item">Non-salary TDS (Form 26Q)</li>
                <li class="service-detail-item">NRI TDS (Form 27Q)</li>
                <li class="service-detail-item">TDS certificates &amp; compliance</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">₹1,999</span>
                  <span class="text-muted" style="display: block; font-size: 0.85rem;">Starting price</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openBusinessModal();" class="btn btn-sm btn-primary">Get Started</a>
              </div>
            </div>

            <!-- Company Registration -->
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
              <h3 class="card-title">Company Registration</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">Incorporation Services</p>
              <p class="card-text">Complete company formation and incorporation services with end-to-end support</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">Private Limited Company</li>
                <li class="service-detail-item">LLP incorporation</li>
                <li class="service-detail-item">One Person Company (OPC)</li>
                <li class="service-detail-item">Section 8 Company (NGO)</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">₹7,999</span>
                  <span class="text-muted" style="display: block; font-size: 0.85rem;">Starting price</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openBusinessModal();" class="btn btn-sm btn-primary">Get Started</a>
              </div>
            </div>

            <!-- Virtual CFO -->
            <div class="card card-hover service-detail-card reveal reveal-delay-1">
              <div class="card-icon" style="background-color: #eff6ff; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 16px;">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="19" cy="14" r="6" stroke="#2563eb" stroke-width="3"/>
                  <path d="M7 35C7 28.9249 11.9249 24 18 24C21 24 23.7 25.2 25.7 27.1" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                  <path d="M18 24V29L20 31L18 35" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                  <circle cx="33" cy="33" r="8" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
                  <path d="M29 33L32 36L37 30" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="card-title">Virtual CFO</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">Financial Advisory</p>
              <p class="card-text">On-demand CFO services for strategic financial planning and growth advisory</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">Financial planning &amp; advisory</li>
                <li class="service-detail-item">MIS reports &amp; dashboards</li>
                <li class="service-detail-item">Cash flow management</li>
                <li class="service-detail-item">Compliance calendar &amp; automation</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">₹14,999</span>
                  <span class="text-muted" style="display: block; font-size: 0.85rem;">Starting price</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openBusinessModal();" class="btn btn-sm btn-primary">Get Started</a>
              </div>
            </div>

            <!-- Compliance Packages -->
            <div class="card card-hover service-detail-card reveal reveal-delay-2">
              <div class="card-icon" style="background-color: #f3e8ff; display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 16px;">
                <svg viewBox="0 0 48 48" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6H28L36 14V34C36 37.3137 33.3137 40 30 40H14C10.6863 40 8 37.3137 8 34V12C8 8.68629 10.6863 6 14 6Z" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M28 6V14H36" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 26H28" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                  <path d="M16 32H24" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                  <circle cx="32" cy="32" r="9" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
                  <path d="M28 32L31 35L36 29" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="card-title">Compliance Packages</h3>
              <p class="heading-sm" style="color: var(--accent-primary, #6c63ff); margin-bottom: 8px;">Bundled Solutions</p>
              <p class="card-text">Pre-built compliance bundles designed for startups, SMEs, and enterprises</p>
              <ul class="service-detail-list">
                <li class="service-detail-item">GST + TDS bundle</li>
                <li class="service-detail-item">Annual compliance pack</li>
                <li class="service-detail-item">Startup compliance package</li>
                <li class="service-detail-item">Custom enterprise plans</li>
              </ul>
              <div class="card-footer">
                <div>
                  <span class="font-mono" style="font-size: 1.75rem; font-weight: 700; color: #1a1a1a;">Custom</span>
                  <span class="text-muted" style="display: block; font-size: 0.85rem;">Starting price</span>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openBusinessModal();" class="btn btn-sm btn-primary">Get Started</a>
              </div>
            </div>
                </div>
                <a href="#" onclick="event.preventDefault(); window.openBusinessModal();" class="btn btn-sm btn-primary">Get Quote</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ========== HOW IT WORKS (TIMELINE) ========== -->
      <section class="section section-light">
        <div class="container">
          <h2 class="heading-lg text-center reveal" style="margin-bottom: 48px;">How Business Compliance Works</h2>

          <div class="timeline">

            <div class="timeline-step reveal">
              <div class="timeline-number">📞</div>
              <h3 class="timeline-title">Consultation</h3>
              <p class="timeline-desc">
                We understand your business structure, compliance requirements, and create a tailored plan for your needs.
              </p>
            </div>

            <div class="timeline-step reveal reveal-delay-1">
              <div class="timeline-number">📋</div>
              <h3 class="timeline-title">Setup &amp; Onboarding</h3>
              <p class="timeline-desc">
                Our team sets up your accounts, integrates with your existing systems, and handles all registrations.
              </p>
            </div>

            <div class="timeline-step reveal reveal-delay-2">
              <div class="timeline-number">⚙️</div>
              <h3 class="timeline-title">Ongoing Compliance</h3>
              <p class="timeline-desc">
                We file all returns on time, manage your compliance calendar, and keep you audit-ready year-round.
              </p>
            </div>

            <div class="timeline-step reveal reveal-delay-3">
              <div class="timeline-number">📊</div>
              <h3 class="timeline-title">Reporting &amp; Growth</h3>
              <p class="timeline-desc">
                Receive detailed MIS reports, financial insights, and strategic recommendations to fuel business growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- ========== CTA BANNER ========== -->
      <section class="section">
        <div class="container">
          <div class="cta-banner reveal">
            <h2 class="heading-lg" style="color: #fff;">Scale Your Business, Not Your Compliance Worries</h2>
            <p class="text-lg" style="margin: 16px 0 32px; opacity: 0.9;">
              Let our expert team handle GST, TDS, registrations, and everything in between - so you can focus on what matters most: growing your business.
            </p>
            <div class="flex-center" style="gap: 16px; flex-wrap: wrap;">
              <a href="#" onclick="event.preventDefault(); window.openBusinessModal();" class="btn btn-primary btn-lg">Get Started →</a>
              <a href="#" onclick="event.preventDefault(); window.openBusinessModal();" class="btn btn-outline-white btn-lg">Request Demo</a>
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
