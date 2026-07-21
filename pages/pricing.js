// pages/pricing.js - Dynamic Pricing Page
// ──────────────────────────────────────────

/* ── data ─────────────────────────────────────────────── */

const individualComplexity = [
  { id: 'salary',   label: 'Salary Only',      add: 0,    locked: true  },
  { id: 'capgains', label: 'Capital Gains',     add: 500,  locked: false },
  { id: 'rental',   label: 'Rental Income',     add: 300,  locked: false },
  { id: 'foreign',  label: 'Foreign Income',    add: 1000, locked: false },
  { id: 'business', label: 'Business Income',   add: 800,  locked: false },
];

const businessTypes = [
  { id: 'sole',    label: 'Sole Proprietorship' },
  { id: 'partner', label: 'Partnership' },
  { id: 'pvtltd',  label: 'Private Limited' },
  { id: 'llp',     label: 'LLP' },
];

const individualTiers = [
  {
    name: 'Self-File',
    basePrice: 0,
    period: '',
    dynamic: false,
    desc: 'File your own return with our guided wizard - always free.',
    features: [
      { text: 'ITR-1 guided wizard', on: true },
      { text: 'Auto-fetch Form 26AS', on: true },
      { text: 'Tax saving tips', on: true },
      { text: 'Email support', on: true },
      { text: 'CA review', on: false },
      { text: 'Revision support', on: false },
    ],
    btnClass: 'btn btn-outline',
    btnText: 'Get Started',
    popular: false,
  },
  {
    name: 'CA-Assisted',
    basePrice: 1499,
    period: '',
    dynamic: true,
    desc: 'Let a dedicated CA handle everything for you.',
    features: [
      { text: 'Everything in Self-File', on: true },
      { text: 'Dedicated CA', on: true },
      { text: 'Document review', on: true },
      { text: '1 free revision', on: true },
      { text: 'Chat support', on: true },
      { text: 'Refund tracking', on: true },
      { text: 'Priority processing', on: true },
    ],
    btnClass: 'btn btn-primary',
    btnText: 'Choose Plan',
    popular: true,
  },
  {
    name: 'Premium',
    basePrice: 3999,
    period: '',
    dynamic: true,
    desc: 'White-glove service with proactive tax planning.',
    features: [
      { text: 'Everything in CA-Assisted', on: true },
      { text: 'Priority CA', on: true },
      { text: '30-min tax planning call', on: true },
      { text: 'Audit support', on: true },
      { text: 'Unlimited revisions', on: true },
      { text: 'Phone support', on: true },
      { text: 'Tax optimization report', on: true },
    ],
    btnClass: 'btn btn-gold',
    btnText: 'Go Premium',
    popular: false,
  },
];

const businessTiers = [
  {
    name: 'Starter',
    price: '₹4,999',
    period: '/mo',
    desc: 'For small businesses getting compliant.',
    features: [
      { text: 'GST filing', on: true },
      { text: 'Basic TDS', on: true },
      { text: 'Email support', on: true },
      { text: 'Compliance calendar', on: true },
      { text: 'Payroll', on: false },
      { text: 'Dedicated manager', on: false },
    ],
    btnClass: 'btn btn-outline',
    btnText: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹9,999',
    period: '/mo',
    desc: 'For growing companies that need dedicated help.',
    features: [
      { text: 'Everything in Starter', on: true },
      { text: 'Payroll compliance', on: true },
      { text: 'Dedicated manager', on: true },
      { text: 'MIS reports', on: true },
      { text: 'Priority support', on: true },
    ],
    btnClass: 'btn btn-primary',
    btnText: 'Choose Plan',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large organizations with bespoke needs.',
    features: [
      { text: 'Everything in Growth', on: true },
      { text: 'API access', on: true },
      { text: 'Custom SLA', on: true },
      { text: 'Virtual CFO', on: true },
      { text: 'Audit support', on: true },
    ],
    btnClass: 'btn btn-gold',
    btnText: 'Contact Us',
    popular: false,
  },
];

const individualCompare = {
  headers: ['Feature', 'Self-File', 'CA-Assisted', 'Premium'],
  rows: [
    ['ITR-1 guided wizard',    true,  true,  true ],
    ['Auto-fetch Form 26AS',   true,  true,  true ],
    ['Tax saving tips',        true,  true,  true ],
    ['Email support',          true,  true,  true ],
    ['Dedicated CA',           false, true,  true ],
    ['Document review',        false, true,  true ],
    ['1 free revision',        false, true,  true ],
    ['Chat support',           false, true,  true ],
    ['Refund tracking',        false, true,  true ],
    ['Priority processing',    false, true,  true ],
    ['Priority CA',            false, false, true ],
    ['30-min planning call',   false, false, true ],
    ['Audit support',          false, false, true ],
    ['Unlimited revisions',    false, false, true ],
    ['Phone support',          false, false, true ],
    ['Tax optimization report',false, false, true ],
  ],
};

const businessCompare = {
  headers: ['Feature', 'Starter', 'Growth', 'Enterprise'],
  rows: [
    ['GST filing',           true,  true,  true ],
    ['Basic TDS',            true,  true,  true ],
    ['Email support',        true,  true,  true ],
    ['Compliance calendar',  true,  true,  true ],
    ['Payroll compliance',   false, true,  true ],
    ['Dedicated manager',    false, true,  true ],
    ['MIS reports',          false, true,  true ],
    ['Priority support',     false, true,  true ],
    ['API access',           false, false, true ],
    ['Custom SLA',           false, false, true ],
    ['Virtual CFO',          false, false, true ],
    ['Audit support',        false, false, true ],
  ],
};

const faqItems = [
  {
    q: "What's included in the free plan?",
    a: "The Self-File plan is completely free and includes our guided ITR-1 wizard, automatic Form 26AS fetching, personalised tax saving tips, and email support. It's perfect for salaried individuals with straightforward returns.",
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely! You can upgrade at any time. If you start with Self-File and realise you need a CA, simply choose the CA-Assisted or Premium plan. You'll only pay the difference.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: "Yes - we offer a 100% money-back guarantee. If you're not satisfied with our service, you can request a full refund within 7 days of purchase, no questions asked.",
  },
  {
    q: 'Do you handle revised returns?',
    a: 'Yes. The CA-Assisted plan includes 1 free revision and the Premium plan includes unlimited revisions. If you need additional revisions on the Self-File plan, you can upgrade to a paid tier at any time.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards, UPI, net banking, and popular wallets like Paytm and PhonePe. All payments are processed securely through Razorpay.',
  },
];

/* ── helpers ──────────────────────────────────────────── */

function fmt(n) {
  return n.toLocaleString('en-IN');
}

function featureHTML(f) {
  const icon = f.on
    ? '<span class="tier-feature-icon">✓</span>'
    : '<span class="tier-feature-icon disabled">✗</span>';
  return `<li class="tier-feature">${icon} ${f.text}</li>`;
}

function tierCard(t, priceDisplay, periodDisplay) {
  return `
    <div class="pricing-tier${t.popular ? ' popular' : ''} reveal">
      ${t.popular ? '<span class="popular-badge">MOST POPULAR</span>' : ''}
      <h3 class="tier-name">${t.name}</h3>
      <div class="tier-price" data-tier="${t.name}">
        <span class="currency">${priceDisplay}</span>
        ${periodDisplay ? `<span class="period">${periodDisplay}</span>` : ''}
      </div>
      <p class="tier-desc">${t.desc}</p>
      <ul class="tier-features">${t.features.map(featureHTML).join('')}</ul>
      <button class="${t.btnClass} btn-lg">${t.btnText}</button>
    </div>`;
}

function compareTableHTML(data) {
  const head = data.headers
    .map((h, i) => `<th${i === 0 ? '' : ' class="text-center"'}>${h}</th>`)
    .join('');
  const rows = data.rows
    .map(
      (r) =>
        `<tr>${r
          .map((c, i) => {
            if (i === 0) return `<td>${c}</td>`;
            return `<td class="text-center">${c ? '<span class="check">✓</span>' : '<span class="cross">✗</span>'}</td>`;
          })
          .join('')}</tr>`
    )
    .join('');
  return `<div style="overflow-x: auto; width: 100%; -webkit-overflow-scrolling: touch; margin-bottom: 2rem;"><table class="comparison-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

/* ── render ───────────────────────────────────────────── */

function render() {
  return `
<!-- ====== PRICING PAGE ====== -->

<!-- 1. Header -->
<section class="section section-light text-center">
  <div class="container">
    <span class="badge badge-premium reveal">💰 Transparent Pricing</span>
    <h1 class="heading-lg reveal">Simple, Honest Pricing</h1>
    <p class="text-lg text-muted reveal">No hidden fees. Choose the plan that fits your needs.</p>
  </div>
</section>

<!-- 2. Step 1 - User Type -->
<section class="section text-center">
  <div class="container">
    <div class="pricing-selector reveal">
      <p class="heading-sm">What best describes you?</p>
      <div class="pricing-options" id="pricing-user-type">
        <div class="pricing-option selected" data-type="individual">
          <span class="pricing-option-icon" style="display: flex; align-items: center; justify-content: center;">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </span>
          <span class="pricing-option-title">Individual</span>
          <span class="pricing-option-desc">Salaried, freelancer, or investor</span>
        </div>
        <div class="pricing-option" data-type="business">
          <span class="pricing-option-icon" style="display: flex; align-items: center; justify-content: center;">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01"></path></svg>
          </span>
          <span class="pricing-option-title">Business</span>
          <span class="pricing-option-desc">Company, firm, or enterprise</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 3. Step 2 - Complexity -->
<section class="section section-light text-center" id="pricing-complexity-section">
  <div class="container">
    <!-- Individual complexity -->
    <div id="complexity-individual" class="pricing-step reveal">
      <p class="heading-sm">Select your income sources</p>
      <div class="pricing-options" id="income-sources" style="flex-direction:column;align-items:center;gap:0.5rem;">
        ${individualComplexity
          .map(
            (c) => `
        <label class="form-checkbox" style="min-width:260px;">
          <input type="checkbox" data-id="${c.id}" data-add="${c.add}" ${c.locked ? 'checked disabled' : ''}>
          <span>${c.label}${c.add ? ' <span class="text-muted font-mono">(+₹' + fmt(c.add) + ')</span>' : ''}</span>
        </label>`
          )
          .join('')}
      </div>
    </div>

    <!-- Business complexity -->
    <div id="complexity-business" class="pricing-step reveal" style="display:none;">
      <p class="heading-sm">Select your business type</p>
      <div class="pricing-options" id="biz-type-options">
        ${businessTypes
          .map(
            (b, i) => `
        <div class="pricing-option${i === 0 ? ' selected' : ''}" data-biz="${b.id}">
          <span class="pricing-option-title">${b.label}</span>
        </div>`
          )
          .join('')}
      </div>
    </div>
  </div>
</section>

<!-- 4. Step 3 - Pricing Tiers -->
<section class="section text-center" id="pricing-tiers-section">
  <div class="container">
    <div class="pricing-tiers" id="tiers-individual">
      ${individualTiers.map((t) => tierCard(t, t.basePrice === 0 ? '₹0' : '₹' + fmt(t.basePrice), t.period)).join('')}
    </div>
    <div class="pricing-tiers" id="tiers-business" style="display:none;">
      ${businessTiers.map((t) => tierCard(t, t.price, t.period)).join('')}
    </div>
  </div>
</section>

<!-- 5. Comparison Table -->
<section class="section section-light" id="pricing-comparison-section">
  <div class="container text-center">
    <h2 class="heading-md reveal">Feature Comparison</h2>
    <div id="compare-individual" class="reveal" style="overflow-x:auto;">
      ${compareTableHTML(individualCompare)}
    </div>
    <div id="compare-business" class="reveal" style="overflow-x:auto;display:none;">
      ${compareTableHTML(businessCompare)}
    </div>
  </div>
</section>

<!-- 6. Money-back Guarantee -->
<section class="section text-center">
  <div class="container">
    <div class="cta-banner reveal">
      <h2 class="heading-md" style="color: #ffffff;">🛡️ 100% Money-Back Guarantee</h2>
      <p class="text-lg" style="color: rgba(255, 255, 255, 0.9);">Not satisfied? Get a full refund within 7 days.</p>
    </div>
  </div>
</section>

<!-- 7. FAQ -->
<section class="section section-light">
  <div class="container" style="max-width:780px;">
    <h2 class="heading-md text-center reveal">Frequently Asked Questions</h2>
    ${faqItems
      .map(
        (f, i) => `
    <div class="deduction-group reveal reveal-delay-${i + 1}">
      <div class="deduction-header" data-faq="${i}">
        <span>${f.q}</span>
        <span class="pricing-option-icon" style="transition:transform .3s;">▸</span>
      </div>
      <div class="deduction-body" data-faq-body="${i}">
        <p class="text-muted">${f.a}</p>
      </div>
    </div>`
      )
      .join('')}
  </div>
</section>
`;
}

/* ── init ─────────────────────────────────────────────── */

function init() {
  /* -- references --------------------------------------------------- */
  const userTypeOptions = document.querySelectorAll('#pricing-user-type .pricing-option');
  const complexIndiv = document.getElementById('complexity-individual');
  const complexBiz   = document.getElementById('complexity-business');
  const tiersIndiv   = document.getElementById('tiers-individual');
  const tiersBiz     = document.getElementById('tiers-business');
  const compareIndiv = document.getElementById('compare-individual');
  const compareBiz   = document.getElementById('compare-business');
  const incomeBoxes  = document.querySelectorAll('#income-sources input[type="checkbox"]');
  const bizOptions   = document.querySelectorAll('#biz-type-options .pricing-option');
  const faqHeaders   = document.querySelectorAll('.deduction-header[data-faq]');

  let currentType = 'individual';

  // Read URL parameters from hash to pre-select Individual or Business
  const hash = window.location.hash;
  const urlParams = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
  const typeParam = urlParams.get('type') || 'individual';

  /* -- CSS transition for animated price numbers -------------------- */
  const style = document.createElement('style');
  style.textContent = `
    .tier-price { transition: transform .35s cubic-bezier(.4,0,.2,1), opacity .35s ease; }
    .tier-price.updating { transform: scale(1.08); opacity: .4; }
  `;
  document.head.appendChild(style);

  /* -- helpers ------------------------------------------------------ */

  function switchView(type) {
    currentType = type;
    const isIndiv = type === 'individual';

    complexIndiv.style.display = isIndiv ? '' : 'none';
    complexBiz.style.display   = isIndiv ? 'none' : '';
    tiersIndiv.style.display   = isIndiv ? '' : 'none';
    tiersBiz.style.display     = isIndiv ? 'none' : '';
    compareIndiv.style.display = isIndiv ? '' : 'none';
    compareBiz.style.display   = isIndiv ? 'none' : '';
  }

  function recalcPrices() {
    let extra = 0;
    incomeBoxes.forEach((cb) => {
      if (cb.checked && !cb.disabled) extra += Number(cb.dataset.add);
    });

    individualTiers.forEach((t) => {
      const el = tiersIndiv.querySelector(`.tier-price[data-tier="${t.name}"]`);
      if (!el) return;

      const finalPrice = t.dynamic ? t.basePrice + extra : 0;
      const display = finalPrice === 0 ? '₹0' : '₹' + fmt(finalPrice);

      // animate
      el.classList.add('updating');
      setTimeout(() => {
        el.querySelector('.currency').textContent = display;
        el.classList.remove('updating');
      }, 180);
    });
  }

  /* -- user type toggle --------------------------------------------- */
  userTypeOptions.forEach((opt) => {
    opt.addEventListener('click', () => {
      userTypeOptions.forEach((o) => o.classList.remove('selected'));
      opt.classList.add('selected');
      switchView(opt.dataset.type);
    });
  });

  /* -- income source checkboxes ------------------------------------- */
  incomeBoxes.forEach((cb) => {
    if (!cb.disabled) {
      cb.addEventListener('change', recalcPrices);
    }
  });

  /* -- business type radio ------------------------------------------ */
  bizOptions.forEach((opt) => {
    opt.addEventListener('click', () => {
      bizOptions.forEach((o) => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  /* -- FAQ accordion ------------------------------------------------ */
  faqHeaders.forEach((hdr) => {
    hdr.addEventListener('click', () => {
      const idx = hdr.dataset.faq;
      const body = document.querySelector(`[data-faq-body="${idx}"]`);
      const icon = hdr.querySelector('.pricing-option-icon');
      const isOpen = body.classList.toggle('open');
      if (icon) icon.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(0deg)';
    });
  });

  /* -- set defaults ------------------------------------------------- */
  if (typeParam === 'business') {
    userTypeOptions.forEach((o) => o.classList.remove('selected'));
    const bizOpt = document.querySelector('#pricing-user-type .pricing-option[data-type="business"]');
    if (bizOpt) bizOpt.classList.add('selected');
    switchView('business');
  } else {
    switchView('individual');
  }
  recalcPrices();

  /* -- reveal observer ---------------------------------------------- */
  if (typeof window.initRevealObserver === 'function') {
    window.initRevealObserver();
  }
}

/* ── cleanup ─────────────────────────────────────────── */

function cleanup() {
  // nothing to tear down
}

/* ── export ──────────────────────────────────────────── */

export default { render, init, cleanup };

