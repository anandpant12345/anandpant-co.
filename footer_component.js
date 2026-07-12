export const getFooterHTML = () => `
<footer class="mega-footer">
    <div class="mega-footer-container">
        <div class="footer-column">
            <h4>Products</h4>
            <ul>
                <li><a href="/products/trading-platform">Trading Platform</a></li>
                <li><a href="/products/portfolio-manager">Portfolio Manager</a></li>
                <li><a href="/products/api-access">API Access</a></li>
                <li><a href="/products/institutional">Institutional Solutions</a></li>
            </ul>
        </div>
        
        <div class="footer-column">
            <h4>Calculators</h4>
            <ul>
                <li><a href="/calculators/roi">ROI Calculator</a></li>
                <li><a href="/calculators/risk-assessment">Risk Assessment</a></li>
                <li><a href="/calculators/tax-estimator">Tax Estimator</a></li>
                <li><a href="/calculators/compound-interest">Compound Interest</a></li>
            </ul>
        </div>
        
        <div class="footer-column">
            <h4>Guides</h4>
            <ul>
                <li><a href="/guides/getting-started">Getting Started</a></li>
                <li><a href="/guides/advanced-strategies">Advanced Strategies</a></li>
                <li><a href="/guides/market-analysis">Market Analysis 101</a></li>
                <li><a href="/guides/api-documentation">API Documentation</a></li>
            </ul>
        </div>
        
        <div class="footer-column">
            <h4>Market Trackers</h4>
            <ul>
                <li><a href="/trackers/global-indices">Global Indices</a></li>
                <li><a href="/trackers/crypto-dashboard">Crypto Dashboard</a></li>
                <li><a href="/trackers/commodities">Commodities</a></li>
                <li><a href="/trackers/forex-pairs">Forex Pairs</a></li>
            </ul>
        </div>
        
        <div class="footer-column">
            <h4>Physical Office</h4>
            <div class="address-block">
                <p>100 Financial District Blvd.<br>
                Suite 4500<br>
                New York, NY 10005<br>
                United States</p>
                <p>📞 +1 (800) 555-0199<br>
                ✉️ contact@platform.com</p>
            </div>
            
            <div class="trust-badges">
                <div class="trust-badge" title="SSL Secured">
                    <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                    SSL Secured
                </div>
                <div class="trust-badge" title="ISO 27001 Certified">
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    ISO 27001
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer-bottom">
        &copy; ${new Date().getFullYear()} Trading Platform. All rights reserved.
    </div>
</footer>
`;

export const getTrustMarqueeHTML = () => `
<section class="trust-marquee-section">
    <h3 class="trust-marquee-title">Trusted by Industry Leaders</h3>
    <div class="marquee-container">
        <div class="marquee-content">
            <!-- First set -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" alt="Cisco">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla">
            <!-- Duplicate set for seamless scrolling -->
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" alt="Cisco">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla">
        </div>
    </div>
</section>
`;

export default { getFooterHTML, getTrustMarqueeHTML };
