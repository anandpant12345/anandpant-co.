export default {
  render() {
    return `
      <div class="section section-light pb-0">
        <div class="container text-center">
          <span class="badge badge-info mb-2">FY 2025-26 | AY 2026-27</span>
          <h1 class="heading-xl">Income Tax Calculator</h1>
          <p class="text-muted text-lg mt-2 mb-4">Compare Old vs New Regime and find which saves you more.</p>
        </div>
      </div>

      <div class="section pt-3">
        <div class="container">
          <div class="calc-layout">
            <!-- Left: Inputs -->
            <div class="calc-inputs card" style="padding: 32px;">
              <h2 class="heading-md mb-3">Income Details</h2>
              
              <div class="grid-2 gap-2 mb-3">
                <div class="form-group">
                  <label class="form-label">Assessment Year</label>
                  <select class="form-select" id="calc-ay">
                    <option value="2026-27">AY 2026-27</option>
                    <option value="2025-26">AY 2025-26</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Age Group</label>
                  <select class="form-select" id="calc-age">
                    <option value="below60">Below 60</option>
                    <option value="senior">60 - 80 (Senior)</option>
                    <option value="super">Above 80 (Super Senior)</option>
                  </select>
                </div>
              </div>

              <div class="form-group mb-4">
                <label class="form-label">Annual Gross Salary</label>
                <div class="input-currency">
                  <input type="text" class="form-input" id="calc-salary" value="10,00,000">
                </div>
              </div>

              <h2 class="heading-md mb-3">Deductions (Old Regime Only)</h2>
              
              <div class="deduction-group">
                <div class="deduction-header">
                  <span>Section 80C (PPF, ELSS, LIC, EPF)</span>
                  <span class="chevron">▼</span>
                </div>
                <div class="deduction-body">
                  <div class="form-group mt-2 mb-0">
                    <div class="input-currency">
                      <input type="text" class="form-input calc-deduction" data-max="150000" id="ded-80c" placeholder="Max ₹1,50,000">
                    </div>
                  </div>
                </div>
              </div>

              <div class="deduction-group">
                <div class="deduction-header">
                  <span>Section 80D (Health Insurance)</span>
                  <span class="chevron">▼</span>
                </div>
                <div class="deduction-body">
                  <div class="form-group mt-2 mb-0">
                    <div class="input-currency">
                      <input type="text" class="form-input calc-deduction" id="ded-80d" placeholder="Amount">
                    </div>
                  </div>
                </div>
              </div>

              <div class="deduction-group">
                <div class="deduction-header">
                  <span>HRA Exemption</span>
                  <span class="chevron">▼</span>
                </div>
                <div class="deduction-body">
                  <div class="form-group mt-2 mb-0">
                    <div class="input-currency">
                      <input type="text" class="form-input calc-deduction" id="ded-hra" placeholder="Exempted Amount">
                    </div>
                  </div>
                </div>
              </div>

              <div class="deduction-group">
                <div class="deduction-header">
                  <span>Home Loan Interest (Sec 24)</span>
                  <span class="chevron">▼</span>
                </div>
                <div class="deduction-body">
                  <div class="form-group mt-2 mb-0">
                    <div class="input-currency">
                      <input type="text" class="form-input calc-deduction" data-max="200000" id="ded-sec24" placeholder="Max ₹2,00,000">
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="deduction-group">
                <div class="deduction-header">
                  <span>Other Deductions (80E, 80G, NPS)</span>
                  <span class="chevron">▼</span>
                </div>
                <div class="deduction-body">
                  <div class="form-group mt-2 mb-0">
                    <div class="input-currency">
                      <input type="text" class="form-input calc-deduction" id="ded-other" placeholder="Total other deductions">
                    </div>
                  </div>
                </div>
              </div>

              <h2 class="heading-md mt-4 mb-3">Capital Gains (Optional)</h2>
              <div class="deduction-group">
                <div class="deduction-header">
                  <span>Short Term / Long Term Gains</span>
                  <span class="chevron">▼</span>
                </div>
                <div class="deduction-body">
                  <div class="grid-2 gap-2 mt-2">
                    <div class="form-group mb-0">
                      <label class="form-label text-sm">STCG Amount</label>
                      <div class="input-currency">
                        <input type="text" class="form-input calc-cg" id="cg-stcg" placeholder="STCG">
                      </div>
                    </div>
                    <div class="form-group mb-0">
                      <label class="form-label text-sm">LTCG Amount</label>
                      <div class="input-currency">
                        <input type="text" class="form-input calc-cg" id="cg-ltcg" placeholder="LTCG">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Right: Results -->
            <div class="calc-results">
              <div class="grid-2 gap-3 mb-4">
                <div class="calc-result-card old-regime card text-center">
                  <div class="calc-result-label text-muted mb-2">Old Regime Tax</div>
                  <div class="calc-result-value font-mono heading-lg" id="res-old">₹0</div>
                </div>
                <div class="calc-result-card new-regime card card-premium text-center">
                  <div class="calc-result-label text-muted mb-2">New Regime Tax</div>
                  <div class="calc-result-value font-mono heading-lg" id="res-new" style="color: var(--color-success)">₹0</div>
                </div>
              </div>

              <div class="savings-badge positive text-center mb-4" id="savings-badge" style="display:none; padding:12px; background:rgba(5,150,105,0.1); border-radius:8px; color:var(--color-success); font-weight:600;">
                <!-- Filled dynamically -->
              </div>

              <div class="card mb-4" style="padding: 24px;">
                <h3 class="heading-sm mb-3">Tax Comparison</h3>
                <div class="tax-bar-chart" style="display:flex; justify-content:space-around; align-items:flex-end; height:180px; padding-top:20px;">
                  <div class="tax-bar" style="display:flex; flex-direction:column; align-items:center; width:45%;">
                    <div class="tax-bar-amount font-mono text-sm mb-1" id="bar-amt-old">₹0</div>
                    <div class="tax-bar-fill old" id="bar-fill-old" style="width:60px; background:linear-gradient(to top, var(--color-accent-dark), var(--color-accent)); border-radius:4px 4px 0 0; transition:height 0.3s ease;"></div>
                    <div class="tax-bar-label text-sm mt-2 font-weight-600">Old Regime</div>
                  </div>
                  <div class="tax-bar" style="display:flex; flex-direction:column; align-items:center; width:45%;">
                    <div class="tax-bar-amount font-mono text-sm mb-1" id="bar-amt-new">₹0</div>
                    <div class="tax-bar-fill new" id="bar-fill-new" style="width:60px; background:linear-gradient(to top, var(--color-success), #10B981); border-radius:4px 4px 0 0; transition:height 0.3s ease;"></div>
                    <div class="tax-bar-label text-sm mt-2 font-weight-600">New Regime</div>
                  </div>
                </div>
              </div>

              <div class="card mb-4" style="padding: 24px;">
                <h3 class="heading-sm mb-3">New Regime Breakdown</h3>
                <table class="slab-table" style="width:100%; text-align:left; border-collapse:collapse;">
                  <thead>
                    <tr style="border-bottom:1px solid var(--color-border);">
                      <th class="py-2">Income Slab</th>
                      <th class="py-2">Rate</th>
                      <th class="py-2 text-right">Tax</th>
                    </tr>
                  </thead>
                  <tbody id="slab-tbody-new" class="font-mono text-sm">
                    <!-- Dynamic rows -->
                  </tbody>
                </table>
              </div>

              <div class="card mb-4" style="padding: 24px;">
                <h3 class="heading-sm mb-3">Old Regime Breakdown</h3>
                <table class="slab-table" style="width:100%; text-align:left; border-collapse:collapse;">
                  <thead>
                    <tr style="border-bottom:1px solid var(--color-border);">
                      <th class="py-2">Income Slab</th>
                      <th class="py-2">Rate</th>
                      <th class="py-2 text-right">Tax</th>
                    </tr>
                  </thead>
                  <tbody id="slab-tbody-old" class="font-mono text-sm">
                    <!-- Dynamic rows -->
                  </tbody>
                </table>
              </div>

              <div class="text-center">
                <a href="#/services/individual" class="btn btn-success btn-lg" id="btn-file-now" style="width:100%">File with New Regime →</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    `;
  },

  init() {
    if(window.initRevealObserver) window.initRevealObserver();

    // Toggle accordions
    document.querySelectorAll('.deduction-header').forEach(header => {
      header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const chevron = header.querySelector('.chevron');
        body.classList.toggle('open');
        chevron.style.transform = body.classList.contains('open') ? 'rotate(180deg)' : '';
      });
    });

    // Formatting helpers
    const parseCurrency = (str) => parseInt((str || '0').replace(/,/g, ''), 10) || 0;
    
    const formatInput = (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if(!val) val = '';
      else val = parseInt(val, 10).toLocaleString('en-IN');
      
      const max = e.target.dataset.max;
      if (max && parseCurrency(val) > parseInt(max, 10)) {
        val = parseInt(max, 10).toLocaleString('en-IN');
      }
      
      e.target.value = val;
      calculate();
    };

    // Bind inputs
    document.getElementById('calc-salary').addEventListener('input', formatInput);
    document.querySelectorAll('.calc-deduction').forEach(el => el.addEventListener('input', formatInput));
    document.querySelectorAll('.calc-cg').forEach(el => el.addEventListener('input', formatInput));
    document.getElementById('calc-age').addEventListener('change', calculate);

    function calculateOldRegime(taxable, ageGroup) {
      let tax = 0;
      let breakdown = [];
      let rem = taxable;
      
      let exemption = 250000;
      if(ageGroup === 'senior') exemption = 300000;
      if(ageGroup === 'super') exemption = 500000;

      // Slab 1
      let s1 = Math.min(taxable, exemption);
      breakdown.push({ slab: `0 - ${exemption.toLocaleString('en-IN')}`, rate: '0%', tax: 0 });
      rem -= s1;

      // Slab 2
      if(exemption < 500000 && rem > 0) {
        let maxS2 = 500000 - exemption;
        let s2 = Math.min(rem, maxS2);
        let t2 = s2 * 0.05;
        tax += t2;
        breakdown.push({ slab: `${(exemption+1).toLocaleString('en-IN')} - 5,00,000`, rate: '5%', tax: t2 });
        rem -= s2;
      }

      // Slab 3
      if(rem > 0) {
        let s3 = Math.min(rem, 500000); // 5L to 10L is 5L gap
        let t3 = s3 * 0.20;
        tax += t3;
        breakdown.push({ slab: '5,00,001 - 10,00,000', rate: '20%', tax: t3 });
        rem -= s3;
      }

      // Slab 4
      if(rem > 0) {
        let t4 = rem * 0.30;
        tax += t4;
        breakdown.push({ slab: 'Above 10,00,000', rate: '30%', tax: t4 });
      }

      // Rebate 87A
      let rebate = 0;
      if(taxable <= 500000) {
        rebate = Math.min(tax, 12500);
        tax -= rebate;
      }
      if(rebate > 0) breakdown.push({ slab: 'Sec 87A Rebate', rate: '-', tax: -rebate });

      return { tax, breakdown };
    }

    function calculateNewRegime(taxable) {
      let tax = 0;
      let breakdown = [];
      let rem = taxable;

      const slabs = [
        { max: 400000, rate: 0, label: '0 - 4,00,000' },
        { max: 800000, rate: 0.05, label: '4,00,001 - 8,00,000' },
        { max: 1200000, rate: 0.10, label: '8,00,001 - 12,00,000' },
        { max: 1600000, rate: 0.15, label: '12,00,001 - 16,00,000' },
        { max: 2000000, rate: 0.20, label: '16,00,001 - 20,00,000' },
        { max: 2400000, rate: 0.25, label: '20,00,001 - 24,00,000' },
        { max: Infinity, rate: 0.30, label: 'Above 24,00,000' }
      ];

      let prevMax = 0;
      for (let s of slabs) {
        if (taxable > prevMax) {
          let amountInSlab = Math.min(taxable - prevMax, s.max - prevMax);
          let taxInSlab = amountInSlab * s.rate;
          tax += taxInSlab;
          breakdown.push({ slab: s.label, rate: (s.rate*100)+'%', tax: taxInSlab });
        }
        prevMax = s.max;
      }

      // Rebate 87A for New Regime (up to 12L)
      let rebate = 0;
      if(taxable <= 1200000) {
        rebate = tax;
        tax = 0;
      } else if(taxable > 1200000 && taxable < 1275000) {
        // Marginal relief approx
        let maxTaxIf12L = 0; // Tax is 0 if 12L
        let taxDiff = tax; 
        let incomeDiff = taxable - 1200000;
        if(taxDiff > incomeDiff) {
          rebate = taxDiff - incomeDiff;
          tax -= rebate;
        }
      }

      if(rebate > 0) breakdown.push({ slab: 'Sec 87A / Relief', rate: '-', tax: -rebate });

      return { tax, breakdown };
    }

    function calculate() {
      const gross = parseCurrency(document.getElementById('calc-salary').value);
      const ageGroup = document.getElementById('calc-age').value;
      
      let oldDeds = 0;
      document.querySelectorAll('.calc-deduction').forEach(el => oldDeds += parseCurrency(el.value));

      let stcg = parseCurrency(document.getElementById('cg-stcg').value);
      let ltcg = parseCurrency(document.getElementById('cg-ltcg').value);

      // Taxable income
      let oldTaxable = Math.max(0, gross - 50000 - oldDeds);
      let newTaxable = Math.max(0, gross - 75000);

      // Basic Tax
      let oldRes = calculateOldRegime(oldTaxable, ageGroup);
      let newRes = calculateNewRegime(newTaxable);

      let oldTax = oldRes.tax;
      let newTax = newRes.tax;

      // Capital Gains Tax
      let cgTax = (stcg * 0.15) + (Math.max(0, ltcg - 125000) * 0.125);
      oldTax += cgTax;
      newTax += cgTax;

      // Surcharge
      const calcSurcharge = (t, income, isNew) => {
        let rate = 0;
        let totalIncome = income + stcg + ltcg;
        if(totalIncome > 50000000) rate = isNew ? 0.25 : 0.37;
        else if(totalIncome > 20000000) rate = 0.25;
        else if(totalIncome > 10000000) rate = 0.15;
        else if(totalIncome > 5000000) rate = 0.10;
        return t * rate;
      };

      let oldSurcharge = calcSurcharge(oldTax, oldTaxable, false);
      let newSurcharge = calcSurcharge(newTax, newTaxable, true);

      // Cess
      let oldCess = (oldTax + oldSurcharge) * 0.04;
      let newCess = (newTax + newSurcharge) * 0.04;

      let oldTotal = Math.round(oldTax + oldSurcharge + oldCess);
      let newTotal = Math.round(newTax + newSurcharge + newCess);

      // Update UI
      const format = window.formatCurrency || ((n) => '₹'+n.toLocaleString('en-IN'));
      
      document.getElementById('res-old').innerText = format(oldTotal);
      document.getElementById('res-new').innerText = format(newTotal);

      // Savings badge
      const savingsBadge = document.getElementById('savings-badge');
      const btnFileNow = document.getElementById('btn-file-now');
      if (oldTotal !== newTotal) {
        savingsBadge.style.display = 'block';
        if (newTotal < oldTotal) {
          savingsBadge.innerText = `✅ You save ${format(oldTotal - newTotal)} with New Regime!`;
          btnFileNow.innerText = 'File with New Regime →';
        } else {
          savingsBadge.innerText = `✅ You save ${format(newTotal - oldTotal)} with Old Regime!`;
          btnFileNow.innerText = 'File with Old Regime →';
        }
      } else {
        savingsBadge.style.display = 'none';
        btnFileNow.innerText = 'File Now →';
      }

      // Update Charts
      const maxTax = Math.max(oldTotal, newTotal, 1);
      document.getElementById('bar-fill-old').style.height = `${(oldTotal / maxTax) * 100}%`;
      document.getElementById('bar-fill-new').style.height = `${(newTotal / maxTax) * 100}%`;
      document.getElementById('bar-amt-old').innerText = format(oldTotal);
      document.getElementById('bar-amt-new').innerText = format(newTotal);

      // Render Tables
      const renderTable = (tbodyId, breakdown, totalTax, surcharge, cess, netTotal) => {
        const tbody = document.getElementById(tbodyId);
        let html = '';
        breakdown.forEach(row => {
          html += `
            <tr style="border-bottom: 1px solid var(--color-border);">
              <td class="py-2">${row.slab}</td>
              <td class="py-2">${row.rate}</td>
              <td class="py-2 text-right">${format(row.tax)}</td>
            </tr>
          `;
        });
        if(cgTax > 0) {
          html += `<tr style="border-bottom: 1px solid var(--color-border);"><td class="py-2">Capital Gains Tax</td><td class="py-2">-</td><td class="py-2 text-right">${format(cgTax)}</td></tr>`;
        }
        if(surcharge > 0) {
          html += `<tr style="border-bottom: 1px solid var(--color-border);"><td class="py-2">Surcharge</td><td class="py-2">-</td><td class="py-2 text-right">${format(surcharge)}</td></tr>`;
        }
        if(cess > 0) {
          html += `<tr style="border-bottom: 1px solid var(--color-border);"><td class="py-2">Health & Ed. Cess (4%)</td><td class="py-2">4%</td><td class="py-2 text-right">${format(cess)}</td></tr>`;
        }
        html += `
          <tr style="font-weight: 700; background: var(--bg-secondary);">
            <td class="py-2">Total Tax Payable</td>
            <td class="py-2"></td>
            <td class="py-2 text-right text-success">${format(netTotal)}</td>
          </tr>
        `;
        tbody.innerHTML = html;
      };

      renderTable('slab-tbody-old', oldRes.breakdown, oldTax, oldSurcharge, oldCess, oldTotal);
      renderTable('slab-tbody-new', newRes.breakdown, newTax, newSurcharge, newCess, newTotal);
    }

    // Init run
    calculate();
  },

  cleanup() {}
};

