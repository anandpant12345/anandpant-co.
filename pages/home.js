// pages/home.js - Anand Pant & Company Landing Page
let carouselInterval = null;
let coreServicesInterval = null;
let clickOutsideListener = null;

function render() {
  return `
    <!-- ===== 1. HERO SECTION ===== -->
    <section class="hero hero-light">
      <div class="hero-mesh-light"></div>
      
      <div class="hero-content container">
        <div class="hero-split-asym">
          <!-- LEFT COLUMN -->
          <div class="hero-left">
            <div class="hero-trust-badge mb-3">
              <span class="badge-text"><strong>10000+</strong> Users</span>
              <span class="badge-sep">|</span>
              <span class="badge-stars">★★★★★ <strong style="color:var(--color-text);">4.9</strong></span>
              <span class="badge-sep">|</span>
              <a href="#/" class="badge-link">See reviews</a>
            </div>
            
            <h1 class="heading-xl mb-2" style="font-size: 3.5rem; line-height: 1.15; color: var(--color-primary-dark); margin-bottom: 12px;">
              File ITR in minutes<br>with <span class="text-accent">100% Accuracy</span>
            </h1>
            
            <!-- First Badge: Maximum Tax Refund, Guaranteed -->
            <div class="hero-badge-wrapper" style="margin-bottom: 16px;">
              <div class="reveal" style="display: inline-flex; align-items: center; background: #e6f4ea; color: #137333; padding: 6px 14px; border-radius: 100px; font-weight: 600; font-size: 0.8rem;">
                Maximum Tax Refund, Guaranteed
              </div>
            </div>
            
            <!-- Second Badge: Notice Protect / Notice Shield -->
            <div class="hero-badge-wrapper" style="margin-bottom: 40px;">
              <div class="notice-protect-badge reveal" style="padding: 12px 20px; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); border: 1px solid #e2e8f0; display: inline-flex; align-items: center; gap: 0; max-width: none !important;">
                <div style="display: flex; align-items: center; flex-shrink: 0;">
                  <!-- Shield Icon -->
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 10px;">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 11l2 2 4-4" stroke-width="3"/>
                  </svg>
                  <div style="display: flex; flex-direction: column; align-items: flex-start; justify-content: center; margin-right: 15px;">
                    <div style="font-size: 0.85rem; font-weight: 700; color: #0f172a; line-height: 1.1; margin-bottom: 2px; letter-spacing: -0.3px; white-space: nowrap;">anand pant &amp; co.</div>
                    <div style="font-size: 0.65rem; font-weight: 800; color: #2563eb; letter-spacing: 0.8px; white-space: nowrap;">NOTICE SHIELD</div>
                  </div>
                </div>
                
                <!-- Vertical Separator -->
                <div style="width: 1px; height: 28px; background: #e2e8f0; margin: 0 15px; flex-shrink: 0;"></div>
                
                <!-- Text -->
                <div class="np-text" style="font-size: 0.75rem; line-height: 1.4; color: #475569; text-align: left; white-space: nowrap; flex-shrink: 0;">
                  Received a notice? <strong style="color: #0f172a; font-weight: 700;">We Handle It Free</strong><br>
                  Computation Error? <strong style="color: #0f172a; font-weight: 700;">100% Refund.</strong>
                </div>
              </div>
            </div>
            
            <!-- The Two CTAs Side-by-Side -->
            <div class="hero-cta-boxes">
              <div class="hero-cta-box" style="background: radial-gradient(circle at top left, #fff7ed 0%, #ffffff 60%); border: 1px solid #ffedd5;">
                <div>
                  <div class="cta-box-icon"><img src="./images/file-icon.jpg" alt="File Tax Icon" style="width: 48px; height: 48px; object-fit: contain;" /></div>
                  <h3 class="cta-box-title">File your taxes</h3>
                  <p class="cta-box-desc">In 3 simple steps</p>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; margin-top: 16px;">
                  <a href="#/services/individual" class="btn btn-primary" style="padding: 10px 4px; font-size: 0.82rem; font-weight: 600; text-align: center; justify-content: center; width: 100%; white-space: nowrap; box-sizing: border-box;">Individual</a>
                  <a href="#/services/business" class="btn btn-primary" style="padding: 10px 4px; font-size: 0.82rem; font-weight: 600; text-align: center; justify-content: center; width: 100%; white-space: nowrap; box-sizing: border-box;">Business</a>
                </div>
              </div>
              <div class="hero-cta-box" style="background: radial-gradient(circle at top left, #fef2f2 0%, #ffffff 60%); border: 1px solid #fee2e2;" onclick="event.preventDefault(); window.openLeadModal();">
                <div>
                  <div class="cta-box-icon"><img src="./images/user-icon.png" alt="Expert File Icon" style="width: 48px; height: 48px; object-fit: contain;" /></div>
                  <h3 class="cta-box-title">Expert files for you</h3>
                  <p class="cta-box-desc">ITR filed in 24hrs</p>
                </div>
                <button class="btn btn-primary w-full">Hire an Expert</button>
              </div>
            </div>
          </div>
          
          <!-- RIGHT COLUMN WITH THE NEW GIRL AND CALCULATOR GRAPHIC -->
          <div class="hero-right">
            <div class="hero-image-wrapper" style="display: flex; justify-content: center; align-items: center; position: relative;">
              <img src="./images/hero-girl.jpg" alt="Estimated Refund calculation and user" class="hero-main-img" style="max-width: 100%; height: auto; border-radius: 20px; mask-image: none !important; -webkit-mask-image: none !important; box-shadow: none;" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 1B. TRUST BAR ===== -->
    <section class="trust-bar-light">
      <div class="container">
        <div class="trust-stats-row">
          <div class="trust-stat-item">
            <div class="trust-stat-val">₹ 20 Cr+</div>
             <div class="trust-stat-lbl">Lifetime ITR Refund Delivered</div>
          </div>
          <div class="trust-stat-item">
            <div class="trust-stat-val">10 K+</div>
             <div class="trust-stat-lbl">Users Trust Us</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 2. CORE SERVICES SLIDER ===== -->
    <section class="section bg-white" style="background-color: white; padding: 4rem 0; overflow: hidden; position: relative;">
      <div class="container">
        <h2 class="heading-lg text-center" style="margin-bottom: 2.5rem; color: #1a1a1a;">Our Core Services</h2>
        <div class="core-services-wrapper" id="core-services-wrapper" style="position: relative; width: 100%;">
          <div class="core-services-track" id="core-services-track" style="display: flex; transition: transform 0.3s ease-out; touch-action: pan-y;">
            <!-- Service Items -->
            <div class="core-service-slide">
              <div class="core-service-card">
                <h3>Taxation & GST</h3>
                <p>Expert income tax filing, monthly GST returns, and strategic tax planning.</p>
              </div>
            </div>
            <div class="core-service-slide">
              <div class="core-service-card">
                <h3>Certifications & Licensing</h3>
                <p>Licensing and setup for MSME, FSSAI, and business entities.</p>
              </div>
            </div>
            <div class="core-service-slide">
              <div class="core-service-card">
                <h3>Corporate Law</h3>
                <p>Company incorporation, LLP registration, and ROC compliance.</p>
              </div>
            </div>
            <div class="core-service-slide">
              <div class="core-service-card">
                <h3>Financials</h3>
                <p>Precise preparation of Balance Sheets, P&L, Income Statements, and forecasting.</p>
              </div>
            </div>
            <div class="core-service-slide">
              <div class="core-service-card">
                <h3>Forecasting</h3>
                <p>Detailed project reports and projections for corporate bank loans.</p>
              </div>
            </div>
            <div class="core-service-slide">
              <div class="core-service-card">
                <h3>Financial Advisory</h3>
                <p>Virtual CFO & Strategic Consultancy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 3. AUDIENCE PERSONAS & EXPERTISE ===== -->

    <section class="section audience-section">
      <div class="container">
        <h2 class="heading-lg text-center" style="margin-bottom: 3rem;">India's Most Trusted <span style="color: #0055ff;">Tax Filing Platform For</span></h2>
        <div class="audience-grid-container">
          
          <!-- Box 1 -->
          <div class="audience-card" style="background-color: #f8fbff;">
            <div class="audience-card-front">
              <div class="audience-card-header">
                <h3 class="audience-title">Salaried<br/>Professionals</h3>
                <div class="audience-icon-wrap" style="background-color: #eff6ff; display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border-radius: 18px; flex-shrink: 0;">
                  <svg viewBox="0 0 48 48" width="68" height="68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 6H28L36 14V34C36 37.3137 33.3137 40 30 40H14C10.6863 40 8 37.3137 8 34V12C8 8.68629 10.6863 6 14 6Z" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28 6V14H36" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="32" cy="32" r="9" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
                    <path d="M28 32L31 35L36 29" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <p class="audience-desc">Simple, accurate filing for every salaried taxpayer</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">Salaried Professionals</h3>
              <button class="btn btn-primary" onclick="event.preventDefault(); window.openLeadModal();">File Now</button>
            </div>
          </div>

          <!-- Box 2 -->
          <div class="audience-card" style="background-color: #f2faf5;">
            <div class="audience-card-front">
              <div class="audience-card-header">
                <h3 class="audience-title">Investors<br/>and Traders</h3>
                <div class="audience-icon-wrap" style="background-color: #f0fdf4; display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border-radius: 18px; flex-shrink: 0;">
                  <svg viewBox="0 0 48 48" width="68" height="68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 6H28L36 14V34C36 37.3137 33.3137 40 30 40H14C10.6863 40 8 37.3137 8 34V12C8 8.68629 10.6863 6 14 6Z" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28 6V14H36" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 32L22 25L26 29L32 21" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27 21H32V26" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="32" cy="21" r="3" fill="#bfdbfe"/>
                  </svg>
                </div>
              </div>
              <p class="audience-desc">1-click capital gains import from 80+ brokers</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">Investors & Traders</h3>
              <button class="btn btn-primary" onclick="event.preventDefault(); window.openLeadModal();">File Now</button>
            </div>
          </div>

          <!-- Box 3 -->
          <div class="audience-card" style="background-color: #f0fafa;">
            <div class="audience-card-front">
              <div class="audience-card-header">
                <h3 class="audience-title">Freelancers &<br/>Professionals</h3>
                <div class="audience-icon-wrap" style="background-color: #ecfeff; display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border-radius: 18px; flex-shrink: 0;">
                  <svg viewBox="0 0 48 48" width="68" height="68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 6H28L36 14V36C36 38.2091 34.2091 40 32 40H14C11.7909 40 10 38.2091 10 36V10C10 7.79086 11.7909 6 14 6Z" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="16" y="27" width="4" height="8" rx="1" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                    <rect x="23" y="21" width="4" height="14" rx="1" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                    <rect x="30" y="17" width="4" height="18" rx="1" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                  </svg>
                </div>
              </div>
              <p class="audience-desc">Consulting fees, TDS deductions, advance tax, etc...</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">Freelancers & Professionals</h3>
              <button class="btn btn-primary" onclick="event.preventDefault(); window.openLeadModal();">File Now</button>
            </div>
          </div>

          <!-- Box 4 -->
          <div class="audience-card" style="background-color: #fff9f0;">
            <div class="audience-card-front">
              <div class="audience-card-header">
                <h3 class="audience-title">Advanced Traders</h3>
                <div class="audience-icon-wrap" style="background-color: #fff7ed; display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border-radius: 18px; flex-shrink: 0;">
                  <svg viewBox="0 0 48 48" width="68" height="68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="6" width="22" height="34" rx="5" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 15H22" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                    <path d="M14 21H19" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="32" cy="31" r="9" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
                    <path d="M29 28L35 34" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
                    <circle cx="30" cy="33" r="1.5" fill="#2563eb"/>
                    <circle cx="34" cy="29" r="1.5" fill="#2563eb"/>
                  </svg>
                </div>
              </div>
              <p class="audience-desc">F&O, intraday or any complex capital gains - An expert files your return.</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">Advanced Traders</h3>
              <button class="btn btn-primary" onclick="event.preventDefault(); window.openLeadModal();">Explore More</button>
            </div>
          </div>

          <!-- Box 5 -->
          <div class="audience-card" style="background-color: #f5f3fc;">
            <div class="audience-card-front">
              <div class="audience-card-header">
                <h3 class="audience-title">NRIs & RSU/ESOPs<br/>holders</h3>
                <div class="audience-icon-wrap" style="background-color: #f3e8ff; display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border-radius: 18px; flex-shrink: 0;">
                  <svg viewBox="0 0 48 48" width="68" height="68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="22" r="13" stroke="#2563eb" stroke-width="3"/>
                    <path d="M8 22H32" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
                    <path d="M20 9C23.5 13 25 17.5 25 22C25 26.5 23.5 31 20 35" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
                    <path d="M20 9C16.5 13 15 17.5 15 22C15 26.5 16.5 31 20 35" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
                    <path d="M30 35L33 28L39 31L36 36L40 40L36 41L32 38L29 41L30 35Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <p class="audience-desc">Protect RSUs/ESOPs gains, foreign income & accurate Schedule FA filing by experts.</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">NRIs & RSU/ESOPs</h3>
              <button class="btn btn-primary" onclick="event.preventDefault(); window.openLeadModal();">Get Expert Help</button>
            </div>
          </div>

          <!-- Box 6 -->
          <div class="audience-card" style="background-color: #f8fbff;">
            <div class="audience-card-front">
              <div class="audience-card-header">
                <h3 class="audience-title">Affluent Investors</h3>
                <div class="audience-icon-wrap" style="background-color: #eff6ff; display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border-radius: 18px; flex-shrink: 0;">
                  <svg viewBox="0 0 48 48" width="68" height="68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="19" cy="14" r="6" stroke="#2563eb" stroke-width="3"/>
                    <path d="M7 35C7 28.9249 11.9249 24 18 24C21 24 23.7 25.2 25.7 27.1" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                    <path d="M18 24V29L20 31L18 35" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                    <circle cx="33" cy="33" r="8" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
                    <path d="M29 33L32 36L37 30" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <p class="audience-desc">From salary to global income, get year-round support from our Tax Specialists</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">Affluent Investors</h3>
              <button class="btn btn-primary" onclick="event.preventDefault(); window.openLeadModal();">Get Expert Help</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  

  <section class="bento-container">
    <div class="bento-grid">
      <div class="bento-item bento-expert">
        <h3>Need an Expert?</h3>
        <p>Get personalized assistance from our certified tax experts. Let us handle the complexity while you relax.</p>
        <button class="bento-btn" onclick="event.preventDefault(); window.openLeadModal();">Talk to an Expert</button>
      </div>
      <div class="bento-item bento-stat">
        <div class="stat-number">12 hrs</div>
        <p>Avg filing time</p>
      </div>
      <div class="bento-item bento-users">
        <div class="stat-number">10k+</div>
        <p>Happy Users</p>
      </div>
      <div class="bento-item bento-accuracy">
        <div class="stat-number">100%</div>
        <p>Accuracy Guaranteed</p>
      </div>
      <div class="bento-item bento-support">
        <h3>24/7 Support</h3>
        <p>We're here whenever you need us, resolving queries instantly.</p>
      </div>
    </div>
  </section>


  <section class="carousel-section">
    <h2 class="carousel-heading">Why Choose Us</h2>
    <div class="carousel-container">
      <div class="carousel-item">
        <h3>Maximum Deductions</h3>
        <p>Our algorithms find every tax deduction you're eligible for, maximizing your refund.</p>
      </div>
      <div class="carousel-item">
        <h3>Bank-level Security</h3>
        <p>Your financial data is encrypted and completely secure with 256-bit encryption.</p>
      </div>
      <div class="carousel-item">
        <h3>Expert Review</h3>
        <p>Every filing can be optionally reviewed by a certified CA for complete peace of mind.</p>
      </div>
      <div class="carousel-item">
        <h3>Fast Refunds</h3>
        <p>Get your money back faster with priority e-filing directly integrated with tax portals.</p>
      </div>
    </div>
  </section>

    <!-- ===== 5. HOW IT WORKS ===== -->
    <section class="section">
      <div class="container">
        <h2 class="heading-lg text-center" style="margin-bottom: 3rem;">How It Works</h2>
        <div class="timeline">

          <div class="timeline-step reveal reveal-delay-1">
            <div class="timeline-number">1</div>
            <div class="timeline-title">📤 Upload Documents</div>
            <p class="timeline-desc">Securely upload your Form 16, bank statements, and other documents through our encrypted portal.</p>
          </div>

          <div class="timeline-step reveal reveal-delay-2">
            <div class="timeline-number">2</div>
            <div class="timeline-title">🔍 Expert CA Review</div>
            <p class="timeline-desc">A dedicated Chartered Accountant reviews your documents, identifies deductions, and optimizes your return.</p>
          </div>

          <div class="timeline-step reveal reveal-delay-3">
            <div class="timeline-number">3</div>
            <div class="timeline-title">📤 Return Filed</div>
            <p class="timeline-desc">Your ITR is filed electronically with the Income Tax Department. You receive instant confirmation.</p>
          </div>

          <div class="timeline-step reveal reveal-delay-4">
            <div class="timeline-number">4</div>
            <div class="timeline-title">💰 Refund Processed</div>
            <p class="timeline-desc">Track your refund status in real-time. Most refunds are credited within 15–45 days of e-verification.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ===== 6. TESTIMONIALS ===== -->
    <section class="section section-light">
      <div class="container">
        <h2 class="heading-lg text-center" style="margin-bottom: 3rem;">What Our Clients Say</h2>
        <div class="carousel-container" id="testimonial-carousel">
          <div class="carousel-track" id="carousel-track">

            <div class="carousel-slide">
              <div class="card testimonial-card">
                <div class="testimonial-stars">★★★★★</div>
                <blockquote class="testimonial-quote">"Filed my ITR in under 10 minutes. The CA was incredibly helpful and thorough."</blockquote>
                <div class="testimonial-author">
                  <div class="testimonial-avatar">PS</div>
                  <div>
                    <div class="testimonial-name">Priya Sharma</div>
                    <div class="testimonial-role">Software Engineer</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-slide">
              <div class="card testimonial-card">
                <div class="testimonial-stars">★★★★★</div>
                <blockquote class="testimonial-quote">"Their GST filing service saved us hours every month. Highly recommended for businesses."</blockquote>
                <div class="testimonial-author">
                  <div class="testimonial-avatar">RK</div>
                  <div>
                    <div class="testimonial-name">Rajesh Kumar</div>
                    <div class="testimonial-role">Business Owner</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-slide">
              <div class="card testimonial-card">
                <div class="testimonial-stars">★★★★★</div>
                <blockquote class="testimonial-quote">"Best platform for NRI tax filing. They handled DTAA claims perfectly."</blockquote>
                <div class="testimonial-author">
                  <div class="testimonial-avatar">SP</div>
                  <div>
                    <div class="testimonial-name">Sneha Patel</div>
                    <div class="testimonial-role">NRI</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="carousel-dots" id="carousel-dots">
            <button class="carousel-dot active" data-slide="0" aria-label="Slide 1"></button>
            <button class="carousel-dot" data-slide="1" aria-label="Slide 2"></button>
            <button class="carousel-dot" data-slide="2" aria-label="Slide 3"></button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BRAND MARQUEE ===== -->
    <section class="section" style="padding-bottom: 0;">
      <div class="container text-center">
        <h2 class="heading-lg" style="margin-bottom: 2rem; font-size: 1.8rem;">Trusted by employees from <span style="color: #0055ff;">India's biggest brands</span></h2>
      </div>
      <div class="marquee-container" style="overflow: hidden; padding: 10px 0 30px; display: flex; white-space: nowrap;">
        <!-- Single strip moving left -->
        <div class="marquee-strip marquee-left" style="display: flex; width: max-content;">
          <div class="brand-marquee-content" style="display: flex; gap: 30px; padding-right: 30px;">
            <div class="brand-logo-box"><img src="./images/ola.png" alt="Ola" /></div>
            <div class="brand-logo-box"><img src="./images/3m.png" alt="3M" /></div>
            <div class="brand-logo-box"><img src="./images/intel.png" alt="Intel" /></div>
            <div class="brand-logo-box"><img src="./images/apollo.png" alt="Apollo Tyres" /></div>
            <div class="brand-logo-box"><img src="./images/flipkart.png" alt="Flipkart" /></div>
            <div class="brand-logo-box"><img src="./images/patanjali.png" alt="Patanjali" /></div>
            <div class="brand-logo-box"><img src="./images/blinkit.png" alt="Blinkit" /></div>
            <div class="brand-logo-box"><img src="./images/jindal.png" alt="Jindal Saw" /></div>
            <div class="brand-logo-box"><img src="./images/byjus.png" alt="BYJU'S" /></div>
            <div class="brand-logo-box"><img src="./images/swiggy.png" alt="Swiggy" /></div>
            <div class="brand-logo-box"><img src="./images/arvind.png" alt="Arvind" /></div>
            <div class="brand-logo-box"><img src="./images/usha.png" alt="Usha" /></div>
            <div class="brand-logo-box"><img src="./images/sap.png" alt="SAP" /></div>
            <div class="brand-logo-box"><img src="./images/coromandel.png" alt="Coromandel" /></div>
            <div class="brand-logo-box"><img src="./images/page.svg" alt="Page Industries (Jockey)" /></div>
          </div>
          <div class="brand-marquee-content" style="display: flex; gap: 30px; padding-right: 30px;" aria-hidden="true">
            <div class="brand-logo-box"><img src="./images/ola.png" alt="Ola" /></div>
            <div class="brand-logo-box"><img src="./images/3m.png" alt="3M" /></div>
            <div class="brand-logo-box"><img src="./images/intel.png" alt="Intel" /></div>
            <div class="brand-logo-box"><img src="./images/apollo.png" alt="Apollo Tyres" /></div>
            <div class="brand-logo-box"><img src="./images/flipkart.png" alt="Flipkart" /></div>
            <div class="brand-logo-box"><img src="./images/patanjali.png" alt="Patanjali" /></div>
            <div class="brand-logo-box"><img src="./images/blinkit.png" alt="Blinkit" /></div>
            <div class="brand-logo-box"><img src="./images/jindal.png" alt="Jindal Saw" /></div>
            <div class="brand-logo-box"><img src="./images/byjus.png" alt="BYJU'S" /></div>
            <div class="brand-logo-box"><img src="./images/swiggy.png" alt="Swiggy" /></div>
            <div class="brand-logo-box"><img src="./images/arvind.png" alt="Arvind" /></div>
            <div class="brand-logo-box"><img src="./images/usha.png" alt="Usha" /></div>
            <div class="brand-logo-box"><img src="./images/sap.png" alt="SAP" /></div>
            <div class="brand-logo-box"><img src="./images/coromandel.png" alt="Coromandel" /></div>
            <div class="brand-logo-box"><img src="./images/page.svg" alt="Page Industries (Jockey)" /></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 7. SOCIAL PROOF ===== -->
    <section class="section">
      <div class="container">
        <div class="grid-4">

          <div class="card text-center reveal reveal-delay-1">
            <div class="trust-stat-value" data-count="8000" data-suffix="+">0</div>
            <div class="trust-stat-label">Total Returns Filed</div>
          </div>

          <div class="card text-center reveal reveal-delay-2">
            <div class="trust-stat-value" data-count="15" data-suffix="+">0</div>
            <div class="trust-stat-label">Expert CAs</div>
          </div>

          <div class="card text-center reveal reveal-delay-3">
            <div class="trust-stat-value" data-count="20" data-prefix="₹" data-suffix="Cr+">0</div>
            <div class="trust-stat-label">Refunds Processed</div>
          </div>

          <div class="card text-center reveal reveal-delay-4">
            <div class="trust-stat-value" data-count="99.9" data-suffix="%">0</div>
            <div class="trust-stat-label">Accuracy Rate</div>
          </div>

        </div>
      </div>
    </section>

    <!-- ===== 9. EXPERT CTA ===== -->
    <section class="section">
      <div class="container">
        <div class="cta-banner">
          <h2 class="heading-lg" style="color: #ffffff;">Speak to a Tax Expert Today</h2>
          <p class="text-md" style="margin-bottom: 2rem; opacity: 0.9;">Get personalized advice from our team of experienced Chartered Accountants. No obligations, no hidden fees.</p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="tel:+917982327731" class="btn btn-outline-white btn-lg">📞 Call Now</a>
            <a href="https://wa.me/917982327731" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">💬 Live Chat</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark text-center" style="background-color: var(--color-primary-dark); padding: 5rem 0;">
      <div class="container">
        <h2 class="heading-lg" style="margin-bottom: 1rem; color: #ffffff;">Plans Starting at ₹499</h2>
        <p class="text-md text-muted" style="max-width: 560px; margin: 0 auto 2rem; color: rgba(255, 255, 255, 0.7);">From affordable basic filing to premium CA-assisted plans - choose the perfect option for your needs.</p>
        <div class="plans-dropdown-container" style="position: relative; display: inline-block;">
          <button class="btn btn-primary btn-lg btn-glow" style="display: inline-flex; align-items: center; gap: 8px; border: none; cursor: pointer;"
                  onclick="const m = this.nextElementSibling; const isVis = m.style.display === 'block'; m.style.display = isVis ? 'none' : 'block'; this.querySelector('.arrow-svg').style.transform = isVis ? 'rotate(0deg)' : 'rotate(180deg)'; event.stopPropagation();">
            View All Plans 
            <svg class="arrow-svg" style="width: 16px; height: 16px; transition: transform 0.2s;" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>
          </button>
          <div class="plans-dropdown-menu" style="display: none; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 0; min-width: 160px; z-index: 100; box-shadow: 0 10px 25px rgba(0,0,0,0.15); margin-top: 8px;">
            <a href="#/services/individual" onclick="window.navigateTo('#/services/individual'); this.parentNode.style.display='none'; this.parentNode.previousElementSibling.querySelector('.arrow-svg').style.transform='rotate(0deg)'; event.stopPropagation();" style="display: block; padding: 10px 20px; color: #0f172a; font-size: 0.95rem; text-decoration: none; font-weight: 600; text-align: center; transition: background 0.2s;" onmouseover="this.style.background='#f1f5f9';" onmouseout="this.style.background='transparent';">👤 Individual</a>
            <a href="#/services/business" onclick="window.navigateTo('#/services/business'); this.parentNode.style.display='none'; this.parentNode.previousElementSibling.querySelector('.arrow-svg').style.transform='rotate(0deg)'; event.stopPropagation();" style="display: block; padding: 10px 20px; color: #0f172a; font-size: 0.95rem; text-decoration: none; font-weight: 600; text-align: center; transition: background 0.2s;" onmouseover="this.style.background='#f1f5f9';" onmouseout="this.style.background='transparent';">🏢 Business</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function init() {
  // Click-outside listener for plans dropdown
  clickOutsideListener = (e) => {
    const menu = document.querySelector('.plans-dropdown-menu');
    if (menu && menu.style.display === 'block') {
      const container = document.querySelector('.plans-dropdown-container');
      if (container && !container.contains(e.target)) {
        menu.style.display = 'none';
        const arrow = container.querySelector('.arrow-svg');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      }
    }
  };
  document.addEventListener('click', clickOutsideListener);

  // Scroll-reveal observer
  if (typeof window.initRevealObserver === 'function') {
    window.initRevealObserver();
  }

  // Animate counter numbers
  if (typeof window.animateCounters === 'function') {
    window.animateCounters();
  }

  // ---- Core Services Infinite Slider ----
  const sliderTrack = document.getElementById('core-services-track');
  const sliderWrapper = document.getElementById('core-services-wrapper');
  if (sliderTrack && sliderWrapper) {
    const slides = Array.from(sliderTrack.children);
    // Clone nodes for infinite scroll (2 extra sets)
    slides.forEach(slide => sliderTrack.appendChild(slide.cloneNode(true)));
    slides.forEach(slide => sliderTrack.appendChild(slide.cloneNode(true)));

    let isDragging = false;
    let isPausedCore = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let currentIndex = slides.length; // Start at the middle set
    
    function getSlideWidth() {
      return sliderTrack.children[0].offsetWidth;
    }
    
    function setSliderPosition() {
      sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    function animation() {
      setSliderPosition();
      if(isDragging) requestAnimationFrame(animation);
    }
    
    currentTranslate = -currentIndex * getSlideWidth();
    prevTranslate = currentTranslate;
    sliderTrack.style.transform = `translateX(${currentTranslate}px)`;

    function touchStart(event) {
      isDragging = true;
      startPos = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
      animationID = requestAnimationFrame(animation);
      sliderTrack.style.transition = 'none';
    }

    function touchMove(event) {
      if (isDragging) {
        const currentPosition = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    }

    function touchEnd() {
      isDragging = false;
      cancelAnimationFrame(animationID);
      const slideWidth = getSlideWidth();
      const movedBy = currentTranslate - prevTranslate;
      
      if (movedBy < -50) currentIndex += 1;
      if (movedBy > 50) currentIndex -= 1;
      
      sliderTrack.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      
      // Enforce infinite bounds
      if (currentIndex >= slides.length * 2) {
         currentIndex = slides.length;
         setTimeout(() => {
           sliderTrack.style.transition = 'none';
           currentTranslate = -currentIndex * getSlideWidth();
           prevTranslate = currentTranslate;
           setSliderPosition();
         }, 600);
      } else if (currentIndex <= 0) {
         currentIndex = slides.length;
         setTimeout(() => {
           sliderTrack.style.transition = 'none';
           currentTranslate = -currentIndex * getSlideWidth();
           prevTranslate = currentTranslate;
           setSliderPosition();
         }, 600);
      }

      currentTranslate = -currentIndex * slideWidth;
      prevTranslate = currentTranslate;
      setSliderPosition();
    }

    function autoSwipeCore() {
      if (isDragging || isPausedCore) return;
      currentIndex += 1;
      sliderTrack.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      const slideWidth = getSlideWidth();
      currentTranslate = -currentIndex * slideWidth;
      prevTranslate = currentTranslate;
      setSliderPosition();

      if (currentIndex >= slides.length * 2) {
        setTimeout(() => {
          sliderTrack.style.transition = 'none';
          currentIndex = slides.length;
          currentTranslate = -currentIndex * getSlideWidth();
          prevTranslate = currentTranslate;
          setSliderPosition();
        }, 600);
      }
    }

    sliderWrapper.addEventListener('mouseenter', () => { isPausedCore = true; });
    sliderWrapper.addEventListener('mouseleave', () => { isPausedCore = false; });

    sliderWrapper.addEventListener('touchstart', touchStart, { passive: true });
    sliderWrapper.addEventListener('touchmove', touchMove, { passive: true });
    sliderWrapper.addEventListener('touchend', touchEnd);
    sliderWrapper.addEventListener('mousedown', touchStart);
    sliderWrapper.addEventListener('mousemove', touchMove);
    sliderWrapper.addEventListener('mouseup', touchEnd);
    sliderWrapper.addEventListener('mouseleave', () => { 
      isPausedCore = false;
      if (isDragging) touchEnd(); 
    });
    
    window.addEventListener('resize', () => {
      sliderTrack.style.transition = 'none';
      currentTranslate = -currentIndex * getSlideWidth();
      prevTranslate = currentTranslate;
      setSliderPosition();
    });

    coreServicesInterval = setInterval(autoSwipeCore, 3000);
  }

  // ---- Testimonial Carousel ----
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('carousel-dots');
  if (!track || !dotsContainer) return;

  const slides = track.querySelectorAll('.carousel-slide');
  const dots = dotsContainer.querySelectorAll('.carousel-dot');
  const totalSlides = slides.length;
  let currentSlide = 0;
  let isPaused = false;

  function goToSlide(index) {
    currentSlide = ((index % totalSlides) + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    if (!isPaused) {
      goToSlide(currentSlide + 1);
    }
  }

  // Dot click handlers
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
      goToSlide(slideIndex);
    });
  });

  // Pause on hover
  const carouselEl = document.getElementById('testimonial-carousel');
  if (carouselEl) {
    carouselEl.addEventListener('mouseenter', () => { isPaused = true; });
    carouselEl.addEventListener('mouseleave', () => { isPaused = false; });
  }

  // Auto-advance
  carouselInterval = setInterval(nextSlide, 5000);
}

function cleanup() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }
  if (coreServicesInterval) {
    clearInterval(coreServicesInterval);
    coreServicesInterval = null;
  }
  if (clickOutsideListener) {
    document.removeEventListener('click', clickOutsideListener);
    clickOutsideListener = null;
  }
}

export default { render, init, cleanup };

