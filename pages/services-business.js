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
              <div class="card-icon card-icon-success">📋</div>
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
              <div class="card-icon card-icon-gold">🏢</div>
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
              <div class="card-icon card-icon-warning">💼</div>
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
              <div class="card-icon card-icon-success">🏗️</div>
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
              <div class="card-icon card-icon-gold">📊</div>
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
              <div class="card-icon card-icon-warning">📦</div>
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
