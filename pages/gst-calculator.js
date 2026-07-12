export default {
  render() {
    return `
      <div class="section section-light text-center pb-0">
        <div class="container">
          <span class="badge badge-info mb-2">200+ Items Database</span>
          <h1 class="heading-xl">GST Rate Finder & Calculator</h1>
          <p class="text-muted text-lg mt-2 mb-4">Look up GST rates for any product or service. Calculate GST amounts instantly.</p>
        </div>
      </div>

      <div class="section pt-3">
        <div class="container">
          <div class="grid-2 gap-4">
            
            <!-- Left: Search & Results -->
            <div>
              <div class="card mb-4" style="padding: 24px; position:relative;">
                <div class="search-box" style="position:relative;">
                  <span class="search-box-icon" style="position:absolute; left:16px; top:50%; transform:translateY(-50%); font-size:1.2rem;">🔍</span>
                  <input type="text" id="gst-search" class="form-input" placeholder="Search for any product or service..." style="padding-left: 48px; font-size: 1.1rem; height: 54px;">
                  <div id="search-suggestions" class="search-suggestions" style="display:none; position:absolute; top:100%; left:0; width:100%; background:var(--bg-card); border:1px solid var(--color-border); border-radius:8px; box-shadow:0 10px 25px rgba(0,0,0,0.1); z-index:100; max-height:300px; overflow-y:auto; margin-top:8px;">
                    <!-- Auto-populated -->
                  </div>
                </div>

                <div class="tabs-pill mt-4" style="display:flex; gap:8px;">
                  <button class="tab-btn active" data-cat="all" style="padding:6px 16px; border-radius:20px; border:1px solid var(--color-border); background:var(--color-primary); color:#fff; cursor:pointer;">All</button>
                  <button class="tab-btn" data-cat="goods" style="padding:6px 16px; border-radius:20px; border:1px solid var(--color-border); background:transparent; cursor:pointer;">Goods</button>
                  <button class="tab-btn" data-cat="services" style="padding:6px 16px; border-radius:20px; border:1px solid var(--color-border); background:transparent; cursor:pointer;">Services</button>
                </div>

                <div class="quick-access mt-4">
                  <p class="text-sm text-muted mb-2">Popular Searches:</p>
                  <div style="display:flex; flex-wrap:wrap; gap:8px;">
                    <span class="quick-chip badge badge-info" style="cursor:pointer;" data-query="Laptop">Laptop</span>
                    <span class="quick-chip badge badge-info" style="cursor:pointer;" data-query="Mobile">Mobile Phone</span>
                    <span class="quick-chip badge badge-info" style="cursor:pointer;" data-query="Rice">Rice</span>
                    <span class="quick-chip badge badge-info" style="cursor:pointer;" data-query="AC">AC</span>
                    <span class="quick-chip badge badge-info" style="cursor:pointer;" data-query="Car">Car</span>
                    <span class="quick-chip badge badge-info" style="cursor:pointer;" data-query="IT Services">IT Services</span>
                  </div>
                </div>
              </div>

              <!-- Selected Item Detail -->
              <div id="gst-result-card" class="gst-result-card card" style="display:none; padding: 24px; border-left: 4px solid var(--color-accent);">
                <div class="flex-between mb-3">
                  <div>
                    <h3 class="heading-md" id="item-name">Item Name</h3>
                    <div class="text-muted text-sm mt-1">HSN/SAC: <span id="item-hsn" class="font-mono"></span></div>
                  </div>
                  <div class="gst-rate-display" style="background:var(--color-accent); color:#fff; padding:12px 20px; border-radius:8px; font-weight:700; font-size:1.5rem;">
                    <span id="item-rate">18</span>%
                  </div>
                </div>
                <p class="text-muted text-sm mb-4" id="item-desc">Description</p>
                <div class="gst-split grid-3 gap-2 text-center" style="background:var(--bg-secondary); padding:16px; border-radius:8px;">
                  <div class="gst-split-item">
                    <div class="gst-split-label text-xs text-muted mb-1">CGST</div>
                    <div class="gst-split-value font-mono font-weight-600" id="item-cgst">9%</div>
                  </div>
                  <div class="gst-split-item">
                    <div class="gst-split-label text-xs text-muted mb-1">SGST</div>
                    <div class="gst-split-value font-mono font-weight-600" id="item-sgst">9%</div>
                  </div>
                  <div class="gst-split-item">
                    <div class="gst-split-label text-xs text-muted mb-1">IGST</div>
                    <div class="gst-split-value font-mono font-weight-600" id="item-igst">18%</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Calculator -->
            <div>
              <div class="card mb-4" style="padding: 24px;">
                <h3 class="heading-md mb-4">GST Calculator</h3>
                
                <div class="tabs-pill mb-4" style="display:flex; background:var(--bg-secondary); border-radius:8px; padding:4px;">
                  <button class="calc-mode-btn active" data-mode="exclusive" style="flex:1; padding:10px; border-radius:6px; border:none; background:var(--color-primary); color:#fff; cursor:pointer;">GST Exclusive</button>
                  <button class="calc-mode-btn" data-mode="inclusive" style="flex:1; padding:10px; border-radius:6px; border:none; background:transparent; cursor:pointer;">GST Inclusive</button>
                </div>

                <div class="form-group mb-4">
                  <label class="form-label">Amount</label>
                  <div class="input-currency">
                    <input type="text" class="form-input font-mono" id="calc-amount" value="10,000" style="font-size:1.2rem; padding:12px;">
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label class="form-label">GST Rate</label>
                  <select class="form-select" id="calc-rate" style="font-size:1.1rem; padding:12px;">
                    <option value="0">0%</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18" selected>18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                <div style="background:var(--bg-secondary); padding:20px; border-radius:8px; border:1px solid var(--color-border);">
                  <div class="flex-between mb-2">
                    <span class="text-muted">Base Amount</span>
                    <span class="font-mono font-weight-600" id="res-base">₹10,000</span>
                  </div>
                  <div class="flex-between mb-2">
                    <span class="text-muted">CGST</span>
                    <span class="font-mono" id="res-cgst">₹900</span>
                  </div>
                  <div class="flex-between mb-3 pb-3" style="border-bottom:1px dashed var(--color-border);">
                    <span class="text-muted">SGST</span>
                    <span class="font-mono" id="res-sgst">₹900</span>
                  </div>
                  <div class="flex-between">
                    <span class="font-weight-600" style="font-size:1.1rem;">Total Amount</span>
                    <span class="font-mono font-weight-700 text-success" id="res-total" style="font-size:1.3rem;">₹11,800</span>
                  </div>
                </div>
              </div>
              
              <div class="card" style="padding: 24px;">
                <h3 class="heading-sm mb-3">GST Slabs Reference</h3>
                <table class="slab-table" style="width:100%; text-align:left; border-collapse:collapse; font-size:0.9rem;">
                  <thead>
                    <tr style="border-bottom:1px solid var(--color-border);">
                      <th class="py-2">Rate</th>
                      <th class="py-2">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom:1px solid var(--color-border);">
                      <td class="py-2 font-mono">0%</td>
                      <td class="py-2 text-muted">Milk, Eggs, Bread, Books</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--color-border);">
                      <td class="py-2 font-mono">5%</td>
                      <td class="py-2 text-muted">Sugar, Tea, Coffee, Spices</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--color-border);">
                      <td class="py-2 font-mono">12%</td>
                      <td class="py-2 text-muted">Butter, Mobile Phones, Fruit Juice</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--color-border);">
                      <td class="py-2 font-mono">18%</td>
                      <td class="py-2 text-muted">Laptops, ACs, IT Services</td>
                    </tr>
                    <tr>
                      <td class="py-2 font-mono">28%</td>
                      <td class="py-2 text-muted">Cars, Cement, 5-Star Hotels</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  },

  init() {
    let gstData = [];
    let currentCat = 'all';
    let calcMode = 'exclusive';
    
    // Formatting helper
    const format = window.formatCurrency || ((n) => '₹'+n.toLocaleString('en-IN', {maximumFractionDigits:2}));
    const parseCurrency = (str) => parseFloat((str || '0').replace(/,/g, '')) || 0;

    // Calculator Logic
    const calculate = () => {
      let amount = parseCurrency(document.getElementById('calc-amount').value);
      let rate = parseFloat(document.getElementById('calc-rate').value) || 0;
      
      let base, gst, total;
      
      if (calcMode === 'exclusive') {
        base = amount;
        gst = amount * (rate / 100);
        total = base + gst;
      } else {
        total = amount;
        base = total / (1 + (rate / 100));
        gst = total - base;
      }
      
      let halfGst = gst / 2;
      
      document.getElementById('res-base').innerText = format(Math.round(base));
      document.getElementById('res-cgst').innerText = format(Math.round(halfGst));
      document.getElementById('res-sgst').innerText = format(Math.round(halfGst));
      document.getElementById('res-total').innerText = format(Math.round(total));
    };

    document.getElementById('calc-amount').addEventListener('input', (e) => {
      let val = e.target.value.replace(/[^\d.]/g, '');
      if(val) {
        let parts = val.split('.');
        parts[0] = parseInt(parts[0], 10).toLocaleString('en-IN');
        val = parts.join('.');
      }
      e.target.value = val;
      calculate();
    });

    document.getElementById('calc-rate').addEventListener('change', calculate);

    document.querySelectorAll('.calc-mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.calc-mode-btn').forEach(b => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = '';
        });
        e.target.classList.add('active');
        e.target.style.background = 'var(--color-primary)';
        e.target.style.color = '#fff';
        calcMode = e.target.dataset.mode;
        calculate();
      });
    });

    // Fetch Data & Search
    fetch('./data/gst-rates.json')
      .then(res => res.json())
      .then(data => {
        gstData = data;
        // Select Laptop as default
        const laptop = data.find(d => d.name.toLowerCase().includes('laptop'));
        if(laptop) selectItem(laptop);
      })
      .catch(err => console.error("Could not load GST data", err));

    const searchInput = document.getElementById('gst-search');
    const suggestions = document.getElementById('search-suggestions');
    let debounceTimer;

    const selectItem = (item) => {
      document.getElementById('gst-result-card').style.display = 'block';
      document.getElementById('item-name').innerText = item.name;
      document.getElementById('item-hsn').innerText = item.hsn;
      document.getElementById('item-desc').innerText = item.description || `${item.category} item under GST slab ${item.rate}%`;
      document.getElementById('item-rate').innerText = item.rate;
      
      let half = item.rate / 2;
      document.getElementById('item-cgst').innerText = half + '%';
      document.getElementById('item-sgst').innerText = half + '%';
      document.getElementById('item-igst').innerText = item.rate + '%';
      
      document.getElementById('calc-rate').value = item.rate;
      calculate();
      
      suggestions.style.display = 'none';
      searchInput.value = item.name;
    };

    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const query = e.target.value.toLowerCase();
      
      if (!query) {
        suggestions.style.display = 'none';
        return;
      }
      
      debounceTimer = setTimeout(() => {
        let filtered = gstData.filter(item => {
          const matchCat = currentCat === 'all' || item.category === currentCat;
          const matchQuery = item.name.toLowerCase().includes(query) || (item.hsn && item.hsn.includes(query));
          return matchCat && matchQuery;
        }).slice(0, 10);
        
        if (filtered.length > 0) {
          suggestions.innerHTML = filtered.map(item => `
            <div class="search-suggestion-item" style="padding:12px 16px; border-bottom:1px solid var(--color-border); cursor:pointer; display:flex; justify-content:space-between; align-items:center;" data-hsn="${item.hsn}">
              <div>
                <div style="font-weight:600;">${item.name}</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">HSN: ${item.hsn}</div>
              </div>
              <span class="badge badge-info" style="font-size:0.8rem;">${item.rate}%</span>
            </div>
          `).join('');
          
          suggestions.querySelectorAll('.search-suggestion-item').forEach(el => {
            el.addEventListener('click', () => {
              const hsn = el.dataset.hsn;
              const item = gstData.find(d => d.hsn === hsn);
              if(item) selectItem(item);
            });
            el.addEventListener('mouseenter', () => el.style.background = 'var(--bg-secondary)');
            el.addEventListener('mouseleave', () => el.style.background = 'transparent');
          });
          
          suggestions.style.display = 'block';
        } else {
          suggestions.innerHTML = '<div style="padding:16px; color:var(--text-muted); text-align:center;">No items found</div>';
          suggestions.style.display = 'block';
        }
      }, 200);
    });

    document.addEventListener('click', (e) => {
      if(!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
        suggestions.style.display = 'none';
      }
    });

    // Category Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = '';
        });
        e.target.classList.add('active');
        e.target.style.background = 'var(--color-primary)';
        e.target.style.color = '#fff';
        currentCat = e.target.dataset.cat;
        searchInput.dispatchEvent(new Event('input')); // trigger search refresh
      });
    });

    // Quick Chips
    document.querySelectorAll('.quick-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const query = e.target.dataset.query;
        searchInput.value = query;
        searchInput.dispatchEvent(new Event('input'));
      });
    });
  },

  cleanup() {}
};

