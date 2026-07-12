export function renderAudienceGrid() {
  return `
    <section class="section audience-section">
      <div class="container">
        <h2 class="heading-lg text-center" style="margin-bottom: 3rem;">Expert Tax Filing for Everyone</h2>
        <div class="audience-grid-container">
          
          <!-- Box 1 -->
          <div class="audience-card" style="background-color: #f8fbff;">
            <div class="audience-card-front">
              <div class="audience-icon">🧑‍💼</div>
              <h3 class="audience-title">Salaried Professionals</h3>
              <p class="audience-desc">Optimize deductions, declare HRA, and file ITR-1 or ITR-2 with 100% accuracy.</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">Salaried Professionals</h3>
              <button class="btn btn-primary" onclick="window.navigateTo('#/services/individual')">File Now</button>
            </div>
          </div>

          <!-- Box 2 -->
          <div class="audience-card" style="background-color: #f7fcfa;">
            <div class="audience-card-front">
              <div class="audience-icon">📈</div>
              <h3 class="audience-title">Investors & Traders</h3>
              <p class="audience-desc">Seamless auto-import of capital gains, intraday trading, and F&O P&L.</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">Investors & Traders</h3>
              <button class="btn btn-primary" onclick="window.navigateTo('#/services/individual')">File Now</button>
            </div>
          </div>

          <!-- Box 3 -->
          <div class="audience-card" style="background-color: #fffaf3;">
            <div class="audience-card-front">
              <div class="audience-icon">💻</div>
              <h3 class="audience-title">Freelancers</h3>
              <p class="audience-desc">Claim business expenses, section 44ADA benefits, and file ITR-3 or ITR-4.</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">Freelancers</h3>
              <button class="btn btn-primary" onclick="window.navigateTo('#/services/individual')">File Now</button>
            </div>
          </div>

          <!-- Box 4 -->
          <div class="audience-card" style="background-color: #f5fcfc;">
            <div class="audience-card-front">
              <div class="audience-icon">📊</div>
              <h3 class="audience-title">Advanced Traders</h3>
              <p class="audience-desc">High-volume trading tax, audit requirements, and loss set-off strategies.</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">Advanced Traders</h3>
              <button class="btn btn-primary" onclick="window.navigateTo('#/services/business')">Explore More</button>
            </div>
          </div>

          <!-- Box 5 -->
          <div class="audience-card" style="background-color: #fafafe;">
            <div class="audience-card-front">
              <div class="audience-icon">🌏</div>
              <h3 class="audience-title">NRIs & RSUs</h3>
              <p class="audience-desc">Foreign income, DTAA benefits, and specialized tax treatment for RSUs/ESOPs.</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">NRIs & RSUs</h3>
              <button class="btn btn-primary" onclick="window.navigateTo('#/services/individual')">Get Expert Help</button>
            </div>
          </div>

          <!-- Box 6 -->
          <div class="audience-card" style="background-color: #fff5f5;">
            <div class="audience-card-front">
              <div class="audience-icon">💎</div>
              <h3 class="audience-title">Affluent Investors</h3>
              <p class="audience-desc">Schedule AL, large capital gains, dividend taxation, and complex portfolios.</p>
            </div>
            <div class="audience-card-overlay">
              <h3 class="audience-title-overlay">Affluent Investors</h3>
              <button class="btn btn-primary" onclick="window.navigateTo('#/services/individual')">Get Expert Help</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
