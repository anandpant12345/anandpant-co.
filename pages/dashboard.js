export default {
  render() {
    return `
      <div class="dashboard-layout" style="display:flex; min-height:calc(100vh - 70px); background:var(--bg-primary);">
        
        <!-- SIDEBAR -->
        <aside class="dashboard-sidebar" style="width:260px; background:var(--bg-card); border-right:1px solid var(--color-border); padding:24px 0;">
          <div style="padding:0 24px; margin-bottom:16px;">
            <div class="sidebar-section-title text-xs text-muted" style="font-weight:700; letter-spacing:1px;">MAIN</div>
          </div>
          <nav class="sidebar-nav" style="display:flex; flex-direction:column; gap:4px; padding:0 12px;">
            <a class="sidebar-item active" data-panel="panel-dashboard" style="display:flex; align-items:center; padding:12px; border-radius:8px; cursor:pointer; text-decoration:none; color:var(--text-primary); transition:background 0.2s;">
              <span class="sidebar-item-icon" style="margin-right:12px; font-size:1.2rem;">📊</span> Dashboard Home
            </a>
            <a class="sidebar-item" data-panel="panel-filings" style="display:flex; align-items:center; padding:12px; border-radius:8px; cursor:pointer; text-decoration:none; color:var(--text-primary); transition:background 0.2s;">
              <span class="sidebar-item-icon" style="margin-right:12px; font-size:1.2rem;">📄</span> My Filings
            </a>
            <a class="sidebar-item" data-panel="panel-vault" style="display:flex; align-items:center; padding:12px; border-radius:8px; cursor:pointer; text-decoration:none; color:var(--text-primary); transition:background 0.2s;">
              <span class="sidebar-item-icon" style="margin-right:12px; font-size:1.2rem;">📁</span> Document Vault
            </a>
            <a class="sidebar-item" data-panel="panel-calculator" style="display:flex; align-items:center; padding:12px; border-radius:8px; cursor:pointer; text-decoration:none; color:var(--text-primary); transition:background 0.2s;">
              <span class="sidebar-item-icon" style="margin-right:12px; font-size:1.2rem;">🧮</span> Tax Calculator
            </a>
            <a class="sidebar-item" data-panel="panel-messages" style="display:flex; align-items:center; padding:12px; border-radius:8px; cursor:pointer; text-decoration:none; color:var(--text-primary); transition:background 0.2s;">
              <span class="sidebar-item-icon" style="margin-right:12px; font-size:1.2rem;">💬</span> Messages
            </a>
            <a class="sidebar-item" data-panel="panel-settings" style="display:flex; align-items:center; padding:12px; border-radius:8px; cursor:pointer; text-decoration:none; color:var(--text-primary); transition:background 0.2s;">
              <span class="sidebar-item-icon" style="margin-right:12px; font-size:1.2rem;">⚙️</span> Settings
            </a>
          </nav>
        </aside>

        <!-- MAIN CONTENT -->
        <main class="dashboard-main" style="flex:1; padding:32px; overflow-y:auto;">
          
          <!-- PANEL: DASHBOARD -->
          <div id="panel-dashboard" class="dashboard-panel">
            <div class="welcome-banner" style="background:linear-gradient(135deg, var(--color-primary), var(--color-accent-dark)); color:#fff; padding:32px; border-radius:12px; margin-bottom:32px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <h2 style="font-size:1.8rem; margin-bottom:8px;">Welcome back, Anand! 👋</h2>
                <p style="opacity:0.9;">Filing season AY 2025-26 is open. Your deadline: 31st July 2026</p>
              </div>
              <a href="#/services/individual" class="btn btn-outline-white">Start Filing →</a>
            </div>

            <div class="grid-4 gap-3 mb-4">
              <div class="stat-card card" style="padding:20px; display:flex; align-items:center;">
                <div class="stat-card-icon" style="width:48px; height:48px; border-radius:12px; background:rgba(37,99,235,0.1); display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin-right:16px;">📄</div>
                <div>
                  <div class="stat-card-value" style="font-size:1.5rem; font-weight:700;">2</div>
                  <div class="stat-card-label text-muted text-sm">Active Filings</div>
                </div>
              </div>
              <div class="stat-card card" style="padding:20px; display:flex; align-items:center;">
                <div class="stat-card-icon" style="width:48px; height:48px; border-radius:12px; background:rgba(5,150,105,0.1); display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin-right:16px;">📁</div>
                <div>
                  <div class="stat-card-value" style="font-size:1.5rem; font-weight:700;">8</div>
                  <div class="stat-card-label text-muted text-sm">Documents Uploaded</div>
                </div>
              </div>
              <div class="stat-card card" style="padding:20px; display:flex; align-items:center;">
                <div class="stat-card-icon" style="width:48px; height:48px; border-radius:12px; background:rgba(217,119,6,0.1); display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin-right:16px;">🔔</div>
                <div>
                  <div class="stat-card-value" style="font-size:1.5rem; font-weight:700;">1</div>
                  <div class="stat-card-label text-muted text-sm">Pending Actions</div>
                </div>
              </div>
              <div class="stat-card card" style="padding:20px; display:flex; align-items:center;">
                <div class="stat-card-icon" style="width:48px; height:48px; border-radius:12px; background:rgba(5,150,105,0.1); display:flex; align-items:center; justify-content:center; font-size:1.5rem; margin-right:16px;">💰</div>
                <div>
                  <div class="stat-card-value font-mono text-success" style="font-size:1.25rem; font-weight:700;">₹24,500</div>
                  <div class="stat-card-label text-muted text-sm">Estimated Refund</div>
                </div>
              </div>
            </div>

            <div class="card mb-4" style="padding:24px;">
              <h3 class="heading-sm mb-4">Filing Status (AY 2025-26)</h3>
              <div class="status-pipeline" style="display:flex; justify-content:space-between; position:relative; padding-bottom:16px;">
                <div style="position:absolute; top:12px; left:0; width:100%; height:4px; background:var(--color-border); z-index:1;"></div>
                <div style="position:absolute; top:12px; left:0; width:50%; height:4px; background:var(--color-success); z-index:1;"></div>
                
                <div class="status-step completed" style="position:relative; z-index:2; text-align:center; width:20%;">
                  <div class="status-dot" style="width:28px; height:28px; border-radius:50%; background:var(--color-success); color:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 8px;">✓</div>
                  <div class="status-label text-sm font-weight-600">Documents Received</div>
                  <div class="status-date text-xs text-muted mt-1">Jan 15</div>
                </div>
                
                <div class="status-step completed" style="position:relative; z-index:2; text-align:center; width:20%;">
                  <div class="status-dot" style="width:28px; height:28px; border-radius:50%; background:var(--color-success); color:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 8px;">✓</div>
                  <div class="status-label text-sm font-weight-600">Under CA Review</div>
                  <div class="status-date text-xs text-muted mt-1">Jan 18</div>
                </div>
                
                <div class="status-step active" style="position:relative; z-index:2; text-align:center; width:20%;">
                  <div class="status-dot" style="width:28px; height:28px; border-radius:50%; background:#fff; border:4px solid var(--color-accent); display:flex; align-items:center; justify-content:center; margin:0 auto 8px; box-shadow:0 0 0 4px rgba(37,99,235,0.2);"></div>
                  <div class="status-label text-sm font-weight-600 text-accent">Return Prepared</div>
                  <div class="status-date text-xs text-muted mt-1">In Progress</div>
                </div>
                
                <div class="status-step pending" style="position:relative; z-index:2; text-align:center; width:20%; opacity:0.5;">
                  <div class="status-dot" style="width:28px; height:28px; border-radius:50%; background:var(--bg-secondary); border:2px solid var(--color-border); margin:0 auto 8px;"></div>
                  <div class="status-label text-sm font-weight-600">Filed with ITD</div>
                  <div class="status-date text-xs text-muted mt-1">Pending</div>
                </div>
                
                <div class="status-step pending" style="position:relative; z-index:2; text-align:center; width:20%; opacity:0.5;">
                  <div class="status-dot" style="width:28px; height:28px; border-radius:50%; background:var(--bg-secondary); border:2px solid var(--color-border); margin:0 auto 8px;"></div>
                  <div class="status-label text-sm font-weight-600">Refund Processed</div>
                  <div class="status-date text-xs text-muted mt-1">Pending</div>
                </div>
              </div>
            </div>

            <div class="grid-2 gap-4">
              <div class="card" style="padding:24px;">
                <h3 class="heading-sm mb-3">Recent Activity</h3>
                <div style="display:flex; flex-direction:column; gap:16px;">
                  <div style="display:flex; align-items:flex-start;">
                    <span style="font-size:1.2rem; margin-right:12px;">📄</span>
                    <div>
                      <div class="font-weight-600">Form 16 uploaded</div>
                      <div class="text-xs text-muted">2 hours ago</div>
                    </div>
                  </div>
                  <div style="display:flex; align-items:flex-start;">
                    <span style="font-size:1.2rem; margin-right:12px;">✅</span>
                    <div>
                      <div class="font-weight-600">PAN verification completed</div>
                      <div class="text-xs text-muted">Yesterday</div>
                    </div>
                  </div>
                  <div style="display:flex; align-items:flex-start;">
                    <span style="font-size:1.2rem; margin-right:12px;">💬</span>
                    <div>
                      <div class="font-weight-600">New message from CA Sharma</div>
                      <div class="text-xs text-muted">Yesterday <span class="badge badge-info" style="font-size:0.7rem; margin-left:8px;">New</span></div>
                    </div>
                  </div>
                  <div style="display:flex; align-items:flex-start;">
                    <span style="font-size:1.2rem; margin-right:12px;">📋</span>
                    <div>
                      <div class="font-weight-600">ITR-2 draft prepared</div>
                      <div class="text-xs text-muted">2 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="card" style="padding:24px;">
                <h3 class="heading-sm mb-3">Upcoming Deadlines</h3>
                <div style="display:flex; flex-direction:column; gap:16px;">
                  <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid var(--color-border);">
                    <div>
                      <div class="font-weight-600">ITR Filing Deadline</div>
                      <div class="text-xs text-muted">Individual & Non-Audit</div>
                    </div>
                    <div style="text-align:right;">
                      <div class="font-weight-600">Jul 31, 2026</div>
                      <span class="badge badge-danger" style="font-size:0.7rem;">Critical</span>
                    </div>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid var(--color-border);">
                    <div>
                      <div class="font-weight-600">Advance Tax 1st Installment</div>
                      <div class="text-xs text-muted">15% of estimated tax</div>
                    </div>
                    <div style="text-align:right;">
                      <div class="font-weight-600">Jun 15, 2026</div>
                      <span class="badge badge-warning" style="font-size:0.7rem;">Upcoming</span>
                    </div>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                      <div class="font-weight-600">Tax Audit Report</div>
                      <div class="text-xs text-muted">For applicable businesses</div>
                    </div>
                    <div style="text-align:right;">
                      <div class="font-weight-600">Sep 30, 2026</div>
                      <span class="badge badge-info" style="font-size:0.7rem;">Info</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- PANEL: FILINGS -->
          <div id="panel-filings" class="dashboard-panel" style="display:none;">
            <h2 class="heading-md mb-4">My Tax Filings</h2>
            
            <div class="card card-hover mb-3" style="padding:24px; border-left:4px solid var(--color-warning);">
              <div class="flex-between">
                <div>
                  <h3 class="font-weight-600" style="font-size:1.1rem;">Assessment Year 2025-26 <span class="badge badge-warning" style="margin-left:8px;">Under Review</span></h3>
                  <div class="text-muted text-sm mt-1">Form: ITR-2 • Assigned CA: Mr. Sharma</div>
                </div>
                <div>
                  <button class="btn btn-sm btn-outline">View Details</button>
                </div>
              </div>
            </div>
            
            <div class="card card-hover mb-3" style="padding:24px; border-left:4px solid var(--color-success);">
              <div class="flex-between">
                <div>
                  <h3 class="font-weight-600" style="font-size:1.1rem;">Assessment Year 2024-25 <span class="badge badge-success" style="margin-left:8px;">Filed</span></h3>
                  <div class="text-muted text-sm mt-1">Form: ITR-1 • Refund: <span class="font-mono text-success font-weight-600">₹18,200</span> (Processed)</div>
                </div>
                <div>
                  <button class="btn btn-sm btn-outline">View ITR-V</button>
                  <button class="btn btn-sm btn-primary">Download Form</button>
                </div>
              </div>
            </div>
            
            <div class="card card-hover mb-3" style="padding:24px; border-left:4px solid var(--color-success);">
              <div class="flex-between">
                <div>
                  <h3 class="font-weight-600" style="font-size:1.1rem;">Assessment Year 2023-24 <span class="badge badge-success" style="margin-left:8px;">Completed</span></h3>
                  <div class="text-muted text-sm mt-1">Form: ITR-1 • Refund: <span class="font-mono text-success font-weight-600">₹12,500</span> (Processed)</div>
                </div>
                <div>
                  <button class="btn btn-sm btn-outline">View ITR-V</button>
                </div>
              </div>
            </div>
          </div>

          <!-- PANEL: VAULT -->
          <div id="panel-vault" class="dashboard-panel" style="display:none;">
            <div class="flex-between mb-4">
              <h2 class="heading-md">Document Vault</h2>
              <div class="text-sm text-muted">🔒 All uploads encrypted with 256-bit AES</div>
            </div>
            
            <div class="upload-zone mb-4" id="upload-zone" style="border:2px dashed var(--color-border); border-radius:12px; padding:40px; text-align:center; background:var(--bg-secondary); cursor:pointer; transition:all 0.2s;">
              <div style="font-size:2.5rem; margin-bottom:12px;">📤</div>
              <h3 class="font-weight-600 mb-1">Drag & drop files here or click to browse</h3>
              <p class="text-muted text-sm">Supported: PDF, JPG, PNG • Max 10MB</p>
              <input type="file" id="file-input" style="display:none;" multiple>
              
              <div id="upload-progress" style="display:none; margin-top:20px; text-align:left;">
                <div class="text-sm mb-1 font-weight-600">Uploading file...</div>
                <div style="height:6px; background:var(--color-border); border-radius:3px; overflow:hidden;">
                  <div id="upload-fill" style="height:100%; width:0%; background:var(--color-primary); transition:width 0.1s;"></div>
                </div>
              </div>
            </div>
            
            <h3 class="heading-sm mb-3">Uploaded Documents (7)</h3>
            <div style="display:flex; flex-direction:column; gap:12px;" id="file-list">
              <div class="card" style="padding:16px; display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center;">
                  <div style="font-size:1.5rem; margin-right:16px;">📄</div>
                  <div>
                    <div class="font-weight-600">Form16_2025.pdf</div>
                    <div class="text-xs text-muted">245 KB • Uploaded Jan 15</div>
                  </div>
                </div>
                <div style="display:flex; align-items:center; gap:12px;">
                  <span class="badge badge-success">Verified</span>
                  <button class="btn btn-sm btn-ghost">🗑️</button>
                </div>
              </div>
              
              <div class="card" style="padding:16px; display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center;">
                  <div style="font-size:1.5rem; margin-right:16px;">🖼️</div>
                  <div>
                    <div class="font-weight-600">PAN_Card.jpg</div>
                    <div class="text-xs text-muted">180 KB • Uploaded Jan 15</div>
                  </div>
                </div>
                <div style="display:flex; align-items:center; gap:12px;">
                  <span class="badge badge-success">Verified</span>
                  <button class="btn btn-sm btn-ghost">🗑️</button>
                </div>
              </div>
              
              <div class="card" style="padding:16px; display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center;">
                  <div style="font-size:1.5rem; margin-right:16px;">📄</div>
                  <div>
                    <div class="font-weight-600">Capital_Gains.pdf</div>
                    <div class="text-xs text-muted">320 KB • Uploaded Jan 18</div>
                  </div>
                </div>
                <div style="display:flex; align-items:center; gap:12px;">
                  <span class="badge badge-warning">Under Review</span>
                  <button class="btn btn-sm btn-ghost">🗑️</button>
                </div>
              </div>
            </div>
          </div>

          <!-- PANEL: CALCULATOR -->
          <div id="panel-calculator" class="dashboard-panel" style="display:none;">
            <h2 class="heading-md mb-4">Tax Calculator</h2>
            <div class="card text-center" style="padding:40px;">
              <div style="font-size:3rem; margin-bottom:16px;">🧮</div>
              <h3 class="font-weight-600 mb-2">Use our full-featured Tax Calculator</h3>
              <p class="text-muted mb-4">Compare Old vs New regime and optimize your tax savings.</p>
              <a href="#/calculator" class="btn btn-primary">Open Calculator</a>
            </div>
          </div>

          <!-- PANEL: MESSAGES -->
          <div id="panel-messages" class="dashboard-panel" style="display:none;">
            <h2 class="heading-md mb-4">Messages</h2>
            <div class="card" style="display:flex; flex-direction:column; height:500px;">
              <div style="padding:16px; border-bottom:1px solid var(--color-border); display:flex; align-items:center;">
                <div style="width:40px; height:40px; border-radius:50%; background:var(--color-primary); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; margin-right:12px;">CA</div>
                <div>
                  <div class="font-weight-600">CA Sharma</div>
                  <div class="text-xs text-success">Online</div>
                </div>
              </div>
              
              <div style="flex:1; padding:20px; overflow-y:auto; display:flex; flex-direction:column; gap:16px; background:var(--bg-secondary);">
                
                <div style="display:flex; align-items:flex-end; gap:8px;">
                  <div style="width:28px; height:28px; border-radius:50%; background:var(--color-primary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:0.7rem;">CA</div>
                  <div style="background:var(--bg-card); padding:12px 16px; border-radius:16px 16px 16px 4px; max-width:70%; box-shadow:0 1px 2px rgba(0,0,0,0.05);">
                    <p style="margin:0; font-size:0.9rem;">Hi Anand, I have reviewed your Form 16 and capital gains statement. Everything looks in order. I will prepare your ITR-2 draft shortly.</p>
                    <div class="text-xs text-muted mt-1" style="text-align:right;">10:24 AM</div>
                  </div>
                </div>
                
                <div style="display:flex; align-items:flex-end; gap:8px; align-self:flex-end; flex-direction:row-reverse;">
                  <div style="width:28px; height:28px; border-radius:50%; background:var(--color-accent); color:#fff; display:flex; align-items:center; justify-content:center; font-size:0.7rem;">AP</div>
                  <div style="background:var(--color-accent); color:#fff; padding:12px 16px; border-radius:16px 16px 4px 16px; max-width:70%; box-shadow:0 1px 2px rgba(0,0,0,0.05);">
                    <p style="margin:0; font-size:0.9rem;">Thanks! I have also uploaded the rent agreement for HRA claim.</p>
                    <div class="text-xs mt-1" style="text-align:right; opacity:0.8;">10:30 AM</div>
                  </div>
                </div>
                
                <div style="display:flex; align-items:flex-end; gap:8px;">
                  <div style="width:28px; height:28px; border-radius:50%; background:var(--color-primary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:0.7rem;">CA</div>
                  <div style="background:var(--bg-card); padding:12px 16px; border-radius:16px 16px 16px 4px; max-width:70%; box-shadow:0 1px 2px rgba(0,0,0,0.05);">
                    <p style="margin:0; font-size:0.9rem;">Great, I will include the HRA exemption. Your estimated refund is approximately ₹24,500.</p>
                    <div class="text-xs text-muted mt-1" style="text-align:right;">Yesterday</div>
                  </div>
                </div>
                
              </div>
              
              <div style="padding:16px; border-top:1px solid var(--color-border); display:flex; gap:12px;">
                <input type="text" class="form-input" placeholder="Type a message..." style="flex:1;">
                <button class="btn btn-primary" id="btn-send-msg">Send</button>
              </div>
            </div>
          </div>

          <!-- PANEL: SETTINGS -->
          <div id="panel-settings" class="dashboard-panel" style="display:none;">
            <h2 class="heading-md mb-4">Account Settings</h2>
            
            <div class="grid-2 gap-4 mb-4">
              <div class="card" style="padding:24px;">
                <h3 class="heading-sm mb-4">Profile Information</h3>
                <div class="form-group mb-3">
                  <label class="form-label">Full Name</label>
                  <input type="text" class="form-input" value="Anand Pant">
                </div>
                <div class="form-group mb-3">
                  <label class="form-label">Email Address</label>
                  <input type="email" class="form-input" value="anand@example.com">
                </div>
                <div class="form-group mb-3">
                  <label class="form-label">Phone Number</label>
                  <input type="tel" class="form-input" value="+91 98765 43210">
                </div>
                <div class="form-group">
                  <label class="form-label">PAN Number</label>
                  <input type="text" class="form-input font-mono" value="ABCDE****F" disabled>
                  <div class="text-xs text-muted mt-1">Contact support to update PAN.</div>
                </div>
              </div>
              
              <div>
                <div class="card mb-4" style="padding:24px;">
                  <h3 class="heading-sm mb-4">Notification Preferences</h3>
                  
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                    <div>
                      <div class="font-weight-600">Email Notifications</div>
                      <div class="text-xs text-muted">Receive updates about your filings</div>
                    </div>
                    <label class="form-toggle" style="display:flex; align-items:center; cursor:pointer;">
                      <input type="checkbox" checked style="display:none;" onchange="this.nextElementSibling.style.background = this.checked ? 'var(--color-primary)' : 'var(--color-border)'">
                      <div class="toggle-track" style="width:40px; height:20px; background:var(--color-primary); border-radius:10px; position:relative; transition:0.2s;">
                        <div style="width:16px; height:16px; background:#fff; border-radius:50%; position:absolute; top:2px; right:2px;"></div>
                      </div>
                    </label>
                  </div>
                  
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                    <div>
                      <div class="font-weight-600">SMS Alerts</div>
                      <div class="text-xs text-muted">Critical updates and OTPs</div>
                    </div>
                    <label class="form-toggle" style="display:flex; align-items:center; cursor:pointer;">
                      <input type="checkbox" checked style="display:none;" onchange="this.nextElementSibling.style.background = this.checked ? 'var(--color-primary)' : 'var(--color-border)'">
                      <div class="toggle-track" style="width:40px; height:20px; background:var(--color-primary); border-radius:10px; position:relative; transition:0.2s;">
                        <div style="width:16px; height:16px; background:#fff; border-radius:50%; position:absolute; top:2px; right:2px;"></div>
                      </div>
                    </label>
                  </div>
                  
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                      <div class="font-weight-600">Filing Reminders</div>
                      <div class="text-xs text-muted">Due dates and compliance alerts</div>
                    </div>
                    <label class="form-toggle" style="display:flex; align-items:center; cursor:pointer;">
                      <input type="checkbox" checked style="display:none;" onchange="this.nextElementSibling.style.background = this.checked ? 'var(--color-primary)' : 'var(--color-border)'">
                      <div class="toggle-track" style="width:40px; height:20px; background:var(--color-primary); border-radius:10px; position:relative; transition:0.2s;">
                        <div style="width:16px; height:16px; background:#fff; border-radius:50%; position:absolute; top:2px; right:2px;"></div>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div class="card" style="padding:24px;">
                  <h3 class="heading-sm mb-4">Security</h3>
                  <button class="btn btn-outline mb-3" style="width:100%;">Change Password</button>
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                      <div class="font-weight-600">Two-Factor Auth (2FA)</div>
                      <div class="text-xs text-muted">Extra layer of security</div>
                    </div>
                    <label class="form-toggle" style="display:flex; align-items:center; cursor:pointer;">
                      <input type="checkbox" style="display:none;" onchange="this.nextElementSibling.style.background = this.checked ? 'var(--color-primary)' : 'var(--color-border)'">
                      <div class="toggle-track" style="width:40px; height:20px; background:var(--color-border); border-radius:10px; position:relative; transition:0.2s;">
                        <div style="width:16px; height:16px; background:#fff; border-radius:50%; position:absolute; top:2px; left:2px;"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <button class="btn btn-primary" id="btn-save-settings">Save Changes</button>
          </div>
          
        </main>
      </div>
    `;
  },

  init() {
    // Sidebar navigation
    document.querySelectorAll('.sidebar-item').forEach(item => {
      item.addEventListener('click', (e) => {
        // Update active class
        document.querySelectorAll('.sidebar-item').forEach(el => {
          el.classList.remove('active');
          el.style.background = 'transparent';
        });
        const target = e.currentTarget;
        target.classList.add('active');
        target.style.background = 'var(--bg-secondary)';
        
        // Switch panels
        const panelId = target.dataset.panel;
        document.querySelectorAll('.dashboard-panel').forEach(panel => {
          panel.style.display = 'none';
        });
        document.getElementById(panelId).style.display = 'block';
      });
    });

    // File Upload Simulation
    const uploadZone = document.getElementById('upload-zone');
    const fileInput = document.getElementById('file-input');
    const uploadProgress = document.getElementById('upload-progress');
    const uploadFill = document.getElementById('upload-fill');
    
    uploadZone.addEventListener('click', () => fileInput.click());
    
    uploadZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadZone.style.background = 'var(--color-accent-dark)';
      uploadZone.style.borderColor = 'var(--color-accent)';
      uploadZone.style.color = '#fff';
    });
    
    uploadZone.addEventListener('dragleave', (e) => {
      e.preventDefault();
      uploadZone.style.background = 'var(--bg-secondary)';
      uploadZone.style.borderColor = 'var(--color-border)';
      uploadZone.style.color = '';
    });
    
    const handleUpload = () => {
      uploadZone.style.background = 'var(--bg-secondary)';
      uploadZone.style.borderColor = 'var(--color-border)';
      uploadZone.style.color = '';
      
      uploadProgress.style.display = 'block';
      let progress = 0;
      
      const interval = setInterval(() => {
        progress += 10;
        uploadFill.style.width = progress + '%';
        
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            uploadProgress.style.display = 'none';
            uploadFill.style.width = '0%';
            if(window.showToast) window.showToast('Document uploaded successfully!', 'success');
            
            // Add mock item to list
            const list = document.getElementById('file-list');
            const newItem = document.createElement('div');
            newItem.className = 'card';
            newItem.style.padding = '16px';
            newItem.style.display = 'flex';
            newItem.style.justifyContent = 'space-between';
            newItem.style.alignItems = 'center';
            newItem.innerHTML = `
              <div style="display:flex; align-items:center;">
                <div style="font-size:1.5rem; margin-right:16px;">📄</div>
                <div>
                  <div class="font-weight-600">New_Document.pdf</div>
                  <div class="text-xs text-muted">1.2 MB • Just now</div>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:12px;">
                <span class="badge badge-info">Uploaded</span>
                <button class="btn btn-sm btn-ghost">🗑️</button>
              </div>
            `;
            list.prepend(newItem);
          }, 500);
        }
      }, 100);
    };
    
    uploadZone.addEventListener('drop', (e) => {
      e.preventDefault();
      handleUpload();
    });
    
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) handleUpload();
    });

    // Buttons
    document.getElementById('btn-send-msg').addEventListener('click', () => {
      const input = document.querySelector('#panel-messages input[type="text"]');
      if(input.value.trim() && window.showToast) {
        window.showToast('Message sent!', 'success');
        input.value = '';
      }
    });
    
    document.getElementById('btn-save-settings').addEventListener('click', () => {
      if(window.showToast) window.showToast('Settings saved successfully!', 'success');
    });
    
    // Set initial active state styling
    document.querySelector('.sidebar-item.active').style.background = 'var(--bg-secondary)';
  },

  cleanup() {}
};

