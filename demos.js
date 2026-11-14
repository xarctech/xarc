// ============================================
// XARC DEMO WEBSITES DATA
// Har demo ka complete HTML string yahan hai
// ============================================

const DEMO_DATA = {

  // ========== PROFILE: ADVOCATE ==========
  "advocate": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#f7f5f0;color:#1a1a1a;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(20,30,50,0.97);color:#fff;padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:10;}
      .nav h1{font-size:22px;letter-spacing:2px;color:#d4af37;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#fff;text-decoration:none;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#d4af37;}
      .hero{background:linear-gradient(135deg,#1a2332,#2c3e50);color:#fff;padding:100px 40px;text-align:center;}
      .hero h2{font-size:48px;color:#d4af37;margin-bottom:16px;}
      .hero p{font-size:18px;color:#ccc;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:14px 32px;background:#d4af37;color:#1a2332;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;}
      .hero .btn:hover{background:#fff;transform:translateY(-3px);box-shadow:0 10px 30px rgba(212,175,55,0.4);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#1a2332;margin-bottom:30px;border-bottom:3px solid #d4af37;padding-bottom:12px;display:inline-block;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;margin-top:30px;}
      .card{background:#fff;padding:28px;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.08);transition:all 0.3s;}
      .card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(212,175,55,0.25);}
      .card h4{color:#d4af37;margin-bottom:10px;font-size:20px;}
      .contact{background:#1a2332;color:#fff;padding:60px 40px;text-align:center;}
      .contact h3{color:#d4af37;font-size:28px;margin-bottom:20px;}
      .contact p{margin:8px 0;font-size:16px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>⚖ SHARMA & ASSOCIATES</h1><nav><a href="#">Home</a><a href="#">Practice</a><a href="#">About</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>Justice. Integrity. Results.</h2><p>Expert legal counsel with 25+ years of experience in civil, criminal and corporate law.</p><a href="#" class="btn">Book Consultation</a></div>
    <div class="section"><h3>Our Practice Areas</h3>
      <div class="grid">
        <div class="card"><h4>Civil Law</h4><p>Property disputes, contracts, family matters handled with precision.</p></div>
        <div class="card"><h4>Criminal Defense</h4><p>Strong defense representation in all criminal cases.</p></div>
        <div class="card"><h4>Corporate Law</h4><p>Business compliance, mergers & acquisitions.</p></div>
        <div class="card"><h4>Family Law</h4><p>Divorce, custody, and family settlements.</p></div>
      </div>
    </div>
    <div class="contact"><h3>Get Legal Help Today</h3><p>📞 +91 93093 32775</p><p>📧 xarctech@gmail.com</p><p>📍 Mumbai, India</p></div>
    </body></html>
  `,

  // ========== PROFILE: DOCTOR ==========
  "doctor": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f0f9ff;color:#1e293b;line-height:1.6;}
      .nav{position:sticky;top:0;background:#fff;padding:18px 40px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 10px rgba(0,0,0,0.06);z-index:10;}
      .nav h1{color:#0ea5e9;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#1e293b;text-decoration:none;font-size:14px;font-weight:500;transition:color 0.3s;}
      .nav nav a:hover{color:#0ea5e9;}
      .hero{background:linear-gradient(135deg,#0ea5e9,#06b6d4);color:#fff;padding:90px 40px;text-align:center;}
      .hero h2{font-size:46px;margin-bottom:16px;}
      .hero p{font-size:18px;max-width:600px;margin:0 auto 30px;opacity:0.95;}
      .hero .btn{display:inline-block;padding:14px 32px;background:#fff;color:#0ea5e9;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(255,255,255,0.4);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#0ea5e9;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .card{background:#fff;padding:28px;border-radius:16px;box-shadow:0 4px 20px rgba(14,165,233,0.1);text-align:center;transition:all 0.3s;}
      .card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(14,165,233,0.25);}
      .card .icon{font-size:42px;margin-bottom:12px;}
      .card h4{color:#1e293b;margin-bottom:10px;font-size:18px;}
      .contact{background:#0ea5e9;color:#fff;padding:60px 40px;text-align:center;}
      .contact h3{font-size:28px;margin-bottom:20px;}
      .contact p{margin:8px 0;font-size:16px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>👨‍⚕️ Dr. Patel Clinic</h1><nav><a href="#">Home</a><a href="#">Services</a><a href="#">About</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>Your Health, Our Priority</h2><p>Compassionate care with modern medical expertise. Book your appointment today.</p><a href="#" class="btn">Book Appointment</a></div>
    <div class="section"><h3>Our Services</h3>
      <div class="grid">
        <div class="card"><div class="icon">🩺</div><h4>General Checkup</h4><p>Routine health screenings and preventive care.</p></div>
        <div class="card"><div class="icon">💉</div><h4>Vaccinations</h4><p>Complete vaccination services for all ages.</p></div>
        <div class="card"><div class="icon">❤️</div><h4>Cardiology</h4><p>Heart health monitoring and consultation.</p></div>
        <div class="card"><div class="icon">🧪</div><h4>Lab Tests</h4><p>Fast and accurate diagnostic lab services.</p></div>
      </div>
    </div>
    <div class="contact"><h3>Contact Us</h3><p>📞 +91 93093 32775</p><p>📧 xarctech@gmail.com</p><p>🕒 Mon-Sat: 9AM - 7PM</p></div>
    </body></html>
  `,

  // ========== CRYPTO: TOKEN LANDING ==========
  "crypto1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#0a0e17;color:#fff;line-height:1.6;overflow-x:hidden;}
      .nav{position:sticky;top:0;background:rgba(10,14,23,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(130,71,229,0.3);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{background:linear-gradient(90deg,#8247e5,#00d4ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-size:24px;font-weight:900;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#fff;text-decoration:none;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#8247e5;}
      .hero{padding:120px 40px;text-align:center;background:radial-gradient(circle at 50% 0%,rgba(130,71,229,0.3),transparent 60%);}
      .hero h2{font-size:56px;font-weight:900;margin-bottom:16px;background:linear-gradient(90deg,#8247e5,#00d4ff,#ff00cc);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shine 3s linear infinite;background-size:200% auto;}
      @keyframes shine{to{background-position:200% center;}}
      .hero p{font-size:18px;color:#aaa;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:16px 40px;background:linear-gradient(90deg,#8247e5,#00d4ff);color:#fff;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;box-shadow:0 0 30px rgba(130,71,229,0.6);}
      .hero .btn:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 0 50px rgba(130,71,229,1);}
      .stats{display:flex;justify-content:center;gap:60px;padding:50px 20px;flex-wrap:wrap;}
      .stat{text-align:center;}
      .stat b{display:block;font-size:36px;background:linear-gradient(90deg,#8247e5,#00d4ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .stat span{color:#888;font-size:14px;}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:36px;text-align:center;margin-bottom:40px;background:linear-gradient(90deg,#8247e5,#00d4ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .card{background:rgba(255,255,255,0.03);padding:28px;border-radius:16px;border:1px solid rgba(130,71,229,0.3);transition:all 0.3s;}
      .card:hover{transform:translateY(-6px);border-color:#8247e5;box-shadow:0 0 30px rgba(130,71,229,0.5);}
      .card h4{color:#00d4ff;margin-bottom:10px;font-size:18px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:70px 20px;}.hero h2{font-size:36px;}.stats{gap:30px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>◆ NEON COIN</h1><nav><a href="#">Home</a><a href="#">Tokenomics</a><a href="#">Roadmap</a><a href="#">Buy</a></nav></div>
    <div class="hero"><h2>Next-Gen Token on Polygon</h2><p>Fast, secure, and built for the future of DeFi. Join the revolution today.</p><a href="#" class="btn">🚀 Buy $NEON Now</a></div>
    <div class="stats"><div class="stat"><b>$2.4M</b><span>Liquidity Locked</span></div><div class="stat"><b>12,500+</b><span>Holders</span></div><div class="stat"><b>99.9%</b><span>Uptime</span></div></div>
    <div class="section"><h3>Why $NEON?</h3>
      <div class="grid">
        <div class="card"><h4>⚡ Lightning Fast</h4><p>Built on Polygon for near-instant transactions.</p></div>
        <div class="card"><h4>🔒 Fully Audited</h4><p>Smart contract audited by leading security firms.</p></div>
        <div class="card"><h4>💎 Deflationary</h4><p>Automatic burn mechanism on every transaction.</p></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== CRYPTO: BONDING CURVE DAPP ==========
  "crypto2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#0d1117;color:#fff;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(13,17,23,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,215,0,0.3);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{background:linear-gradient(90deg,#ffd700,#ff8c00);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-size:24px;font-weight:900;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#fff;text-decoration:none;font-size:14px;}
      .nav nav a:hover{color:#ffd700;}
      .hero{padding:100px 40px;text-align:center;background:radial-gradient(circle at 50% 0%,rgba(255,215,0,0.2),transparent 60%);}
      .hero h2{font-size:52px;font-weight:900;margin-bottom:16px;background:linear-gradient(90deg,#ffd700,#ff8c00,#ffd700);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;background-size:200% auto;animation:shine 4s linear infinite;}
      @keyframes shine{to{background-position:200% center;}}
      .hero p{font-size:18px;color:#aaa;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:16px 40px;background:linear-gradient(90deg,#ffd700,#ff8c00);color:#000;text-decoration:none;border-radius:30px;font-weight:bold;box-shadow:0 0 30px rgba(255,180,0,0.6);transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 0 50px rgba(255,180,0,1);}
      .chart{max-width:900px;margin:0 auto;padding:40px 20px;}
      .chart-box{background:linear-gradient(160deg,rgba(255,215,0,0.1),rgba(255,140,0,0.02));border:1px solid rgba(255,215,0,0.3);border-radius:16px;padding:40px;position:relative;overflow:hidden;}
      .chart-bars{display:flex;align-items:flex-end;gap:8px;height:200px;margin-top:20px;}
      .bar{flex:1;background:linear-gradient(180deg,#ffd700,#ff8c00);border-radius:4px 4px 0 0;transition:all 0.3s;}
      .bar:hover{transform:scaleY(1.1);box-shadow:0 0 20px rgba(255,180,0,0.8);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:36px;text-align:center;margin-bottom:40px;color:#ffd700;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .card{background:rgba(255,255,255,0.03);padding:28px;border-radius:16px;border:1px solid rgba(255,215,0,0.3);transition:all 0.3s;}
      .card:hover{transform:translateY(-6px);border-color:#ffd700;box-shadow:0 0 30px rgba(255,180,0,0.5);}
      .card h4{color:#ffd700;margin-bottom:10px;font-size:18px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>📈 GOLDBOND</h1><nav><a href="#">Home</a><a href="#">Buy</a><a href="#">Rewards</a><a href="#">Levels</a></nav></div>
    <div class="hero"><h2>Bonding Curve + Rewards</h2><p>Earn while you hold. Non-updatable matrix plan for sustainable growth.</p><a href="#" class="btn">💰 Buy Now</a></div>
    <div class="chart"><div class="chart-box"><h3 style="color:#ffd700;margin-bottom:10px;">📊 Price Chart</h3>
      <div class="chart-bars">
        <div class="bar" style="height:30%;"></div><div class="bar" style="height:45%;"></div><div class="bar" style="height:55%;"></div><div class="bar" style="height:70%;"></div><div class="bar" style="height:65%;"></div><div class="bar" style="height:80%;"></div><div class="bar" style="height:90%;"></div><div class="bar" style="height:95%;"></div>
      </div></div></div>
    <div class="section"><h3>Rewards System</h3>
      <div class="grid">
        <div class="card"><h4>Level 1</h4><p>Direct referral rewards up to 10% instantly.</p></div>
        <div class="card"><h4>Level 2</h4><p>Second level team rewards 5% per sale.</p></div>
        <div class="card"><h4>Level 3</h4><p>Third level rewards 2% per sale.</p></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== CRYPTO: EXCHANGE UI ==========
  "crypto3": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#0b0e15;color:#fff;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(11,14,21,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(0,212,255,0.3);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{background:linear-gradient(90deg,#00d4ff,#a100ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-size:24px;font-weight:900;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#fff;text-decoration:none;font-size:14px;}
      .nav nav a:hover{color:#00d4ff;}
      .hero{padding:100px 40px;text-align:center;background:radial-gradient(circle at 50% 0%,rgba(0,212,255,0.2),transparent 60%);}
      .hero h2{font-size:52px;font-weight:900;margin-bottom:16px;background:linear-gradient(90deg,#00d4ff,#a100ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .hero p{font-size:18px;color:#aaa;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:16px 40px;background:linear-gradient(90deg,#00d4ff,#a100ff);color:#fff;text-decoration:none;border-radius:30px;font-weight:bold;box-shadow:0 0 30px rgba(0,212,255,0.6);transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 0 50px rgba(0,212,255,1);}
      .swap{max-width:500px;margin:0 auto;padding:40px 20px;}
      .swap-box{background:linear-gradient(160deg,rgba(0,212,255,0.1),rgba(161,0,255,0.05));border:1px solid rgba(0,212,255,0.3);border-radius:20px;padding:30px;}
      .swap-box h3{text-align:center;margin-bottom:24px;color:#00d4ff;}
      .swap-input{background:rgba(0,0,0,0.4);padding:18px;border-radius:12px;margin-bottom:14px;border:1px solid rgba(0,212,255,0.2);}
      .swap-input label{display:block;font-size:12px;color:#888;margin-bottom:6px;}
      .swap-input .row{display:flex;justify-content:space-between;align-items:center;}
      .swap-input input{background:none;border:none;color:#fff;font-size:20px;width:70%;outline:none;}
      .swap-input .token{background:rgba(0,212,255,0.2);padding:6px 14px;border-radius:20px;font-size:14px;color:#00d4ff;font-weight:bold;}
      .swap-btn{width:100%;padding:16px;background:linear-gradient(90deg,#00d4ff,#a100ff);color:#fff;border:none;border-radius:12px;font-size:16px;font-weight:bold;cursor:pointer;margin-top:14px;transition:all 0.3s;}
      .swap-btn:hover{transform:translateY(-2px);box-shadow:0 0 30px rgba(0,212,255,0.6);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:36px;text-align:center;margin-bottom:40px;color:#00d4ff;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .card{background:rgba(255,255,255,0.03);padding:28px;border-radius:16px;border:1px solid rgba(0,212,255,0.3);transition:all 0.3s;}
      .card:hover{transform:translateY(-6px);border-color:#00d4ff;box-shadow:0 0 30px rgba(0,212,255,0.5);}
      .card h4{color:#00d4ff;margin-bottom:10px;font-size:18px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🔄 SWAPX</h1><nav><a href="#">Swap</a><a href="#">Pool</a><a href="#">Rewards</a><a href="#">Connect Wallet</a></nav></div>
    <div class="hero"><h2>Trade. Earn. Repeat.</h2><p>Full DApp with buy/sell, wallet connect & reward tracker.</p></div>
    <div class="swap"><div class="swap-box"><h3>🔄 Swap Tokens</h3>
      <div class="swap-input"><label>From</label><div class="row"><input value="1.0" readonly><span class="token">POL</span></div></div>
      <div class="swap-input"><label>To</label><div class="row"><input value="1250" readonly><span class="token">SWAPX</span></div></div>
      <button class="swap-btn">Swap Now</button>
    </div></div>
    <div class="section"><h3>Why SWAPX?</h3>
      <div class="grid">
        <div class="card"><h4>💎 Best Rates</h4><p>Get the best swap rates across all DEXs.</p></div>
        <div class="card"><h4>⚡ Instant</h4><p>Transactions confirm in seconds on Polygon.</p></div>
        <div class="card"><h4>🛡️ Secure</h4><p>Non-custodial wallet, you control your keys.</p></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== GENERAL STORE 1: GROCERY ==========
  "general1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#fffef9;color:#333;line-height:1.6;}
      .nav{position:sticky;top:0;background:#fff;padding:18px 40px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 10px rgba(0,0,0,0.06);z-index:10;}
      .nav h1{color:#16a34a;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#333;text-decoration:none;font-size:14px;font-weight:500;}
      .nav nav a:hover{color:#16a34a;}
      .hero{background:linear-gradient(135deg,#16a34a,#22c55e);color:#fff;padding:90px 40px;text-align:center;}
      .hero h2{font-size:46px;margin-bottom:16px;}
      .hero p{font-size:18px;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:14px 32px;background:#fff;color:#16a34a;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(255,255,255,0.4);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#16a34a;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:22px;}
      .product{background:#fff;padding:20px;border-radius:12px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.06);transition:all 0.3s;}
      .product:hover{transform:translateY(-6px);box-shadow:0 12px 30px rgba(22,163,74,0.2);}
      .product .emoji{font-size:56px;margin-bottom:10px;}
      .product h4{color:#333;margin-bottom:6px;font-size:16px;}
      .product .price{color:#16a34a;font-size:18px;font-weight:bold;margin-bottom:12px;}
      .product .btn{padding:8px 20px;background:#16a34a;color:#fff;border:none;border-radius:20px;cursor:pointer;font-size:13px;transition:all 0.3s;}
      .product .btn:hover{background:#22c55e;transform:scale(1.05);}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🛒 Fresh Mart</h1><nav><a href="#">Home</a><a href="#">Products</a><a href="#">Offers</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>Fresh Groceries Delivered</h2><p>Order your daily essentials online and get them delivered to your doorstep.</p><a href="#" class="btn">🛍️ Shop Now</a></div>
    <div class="section"><h3>Popular Products</h3>
      <div class="grid">
        <div class="product"><div class="emoji">🍎</div><h4>Fresh Apples</h4><div class="price">₹120/kg</div><button class="btn">Add to Cart</button></div>
        <div class="product"><div class="emoji">🥛</div><h4>Organic Milk</h4><div class="price">₹60/L</div><button class="btn">Add to Cart</button></div>
        <div class="product"><div class="emoji">🍞</div><h4>Wheat Bread</h4><div class="price">₹40</div><button class="btn">Add to Cart</button></div>
        <div class="product"><div class="emoji">🥚</div><h4>Farm Eggs</h4><div class="price">₹80/dozen</div><button class="btn">Add to Cart</button></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== GENERAL STORE 2: KIRANA ==========
  "general2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#fff8ec;color:#3a2e1f;line-height:1.6;}
      .nav{position:sticky;top:0;background:#ffedd5;padding:18px 40px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 10px rgba(0,0,0,0.08);z-index:10;}
      .nav h1{color:#c2410c;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#3a2e1f;text-decoration:none;font-size:14px;font-weight:500;}
      .nav nav a:hover{color:#c2410c;}
      .hero{background:linear-gradient(135deg,#f97316,#fb923c);color:#fff;padding:90px 40px;text-align:center;}
      .hero h2{font-size:46px;margin-bottom:16px;}
      .hero p{font-size:18px;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:14px 32px;background:#fff;color:#c2410c;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(255,255,255,0.4);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#c2410c;margin-bottom:30px;text-align:center;}
      .info{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;margin-bottom:40px;}
      .info-card{background:#fff;padding:28px;border-radius:12px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.06);transition:all 0.3s;}
      .info-card:hover{transform:translateY(-6px);box-shadow:0 12px 30px rgba(249,115,22,0.2);}
      .info-card .icon{font-size:42px;margin-bottom:12px;}
      .info-card h4{color:#c2410c;margin-bottom:8px;}
      .map{width:100%;height:280px;border-radius:12px;overflow:hidden;border:3px solid #ffedd5;}
      .map iframe{width:100%;height:100%;border:0;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🏪 Sharma Kirana</h1><nav><a href="#">Home</a><a href="#">Products</a><a href="#">Offers</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>Your Neighborhood Store</h2><p>Daily offers and essentials — now online for easy ordering.</p><a href="#" class="btn">📞 Call to Order</a></div>
    <div class="section"><h3>Why Shop With Us</h3>
      <div class="info">
        <div class="info-card"><div class="icon">💰</div><h4>Best Prices</h4><p>Daily offers on all essential items.</p></div>
        <div class="info-card"><div class="icon">🏠</div><h4>Home Delivery</h4><p>Free delivery on orders above ₹500.</p></div>
        <div class="info-card"><div class="icon">⏰</div><h4>Fast Service</h4><p>Same-day delivery guaranteed.</p></div>
      </div>
      <div class="map"><iframe src="https://www.google.com/maps?q=Bandra%20Mumbai&output=embed" loading="lazy"></iframe></div>
    </div>
    </body></html>
  `,

  // ========== MEDICAL STORE ==========
  "medical": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f0f9ff;color:#1e293b;line-height:1.6;}
      .nav{position:sticky;top:0;background:#fff;padding:18px 40px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 10px rgba(0,0,0,0.06);z-index:10;}
      .nav h1{color:#0284c7;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#1e293b;text-decoration:none;font-size:14px;font-weight:500;}
      .nav nav a:hover{color:#0284c7;}
      .hero{background:linear-gradient(135deg,#0284c7,#0ea5e9);color:#fff;padding:90px 40px;text-align:center;}
      .hero h2{font-size:46px;margin-bottom:16px;}
      .hero p{font-size:18px;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:14px 32px;background:#fff;color:#0284c7;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(255,255,255,0.4);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#0284c7;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:22px;}
      .medicine{background:#fff;padding:22px;border-radius:12px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.06);transition:all 0.3s;}
      .medicine:hover{transform:translateY(-6px);box-shadow:0 12px 30px rgba(2,132,199,0.2);}
      .medicine .emoji{font-size:48px;margin-bottom:10px;}
      .medicine h4{color:#1e293b;margin-bottom:6px;font-size:15px;}
      .medicine .price{color:#0284c7;font-size:16px;font-weight:bold;margin-bottom:10px;}
      .medicine .btn{padding:8px 18px;background:#0284c7;color:#fff;border:none;border-radius:20px;cursor:pointer;font-size:12px;transition:all 0.3s;}
      .medicine .btn:hover{background:#0ea5e9;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>💊 MediCare Pharmacy</h1><nav><a href="#">Home</a><a href="#">Medicines</a><a href="#">Delivery</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>Your Health Partner</h2><p>Genuine medicines delivered to your door. Order now via call or WhatsApp.</p><a href="#" class="btn">📞 Call to Order</a></div>
    <div class="section"><h3>Popular Medicines</h3>
      <div class="grid">
        <div class="medicine"><div class="emoji">💊</div><h4>Paracetamol</h4><div class="price">₹25</div><button class="btn">Order</button></div>
        <div class="medicine"><div class="emoji">🧴</div><h4>Hand Sanitizer</h4><div class="price">₹80</div><button class="btn">Order</button></div>
        <div class="medicine"><div class="emoji">🌡️</div><h4>Thermometer</h4><div class="price">₹180</div><button class="btn">Order</button></div>
        <div class="medicine"><div class="emoji">🩹</div><h4>Bandage Pack</h4><div class="price">₹40</div><button class="btn">Order</button></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== ASTROLOGY 1: KUNDLI ==========
  "astro1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#1a0f2e;color:#f0e6ff;line-height:1.6;overflow-x:hidden;}
      .nav{position:sticky;top:0;background:rgba(26,15,46,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,215,0,0.3);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{background:linear-gradient(90deg,#ffd700,#ff8c00);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#f0e6ff;text-decoration:none;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#ffd700;}
      .hero{padding:110px 40px;text-align:center;background:radial-gradient(circle at 50% 0%,rgba(255,215,0,0.15),transparent 60%);position:relative;}
      .hero::before{content:'✧ ✦ ✧';position:absolute;top:40px;left:50%;transform:translateX(-50%);color:#ffd700;font-size:24px;letter-spacing:20px;animation:twinkle 2s infinite alternate;}
      @keyframes twinkle{from{opacity:0.3;}to{opacity:1;}}
      .hero h2{font-size:52px;background:linear-gradient(90deg,#ffd700,#ff8c00,#ffd700);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;background-size:200% auto;animation:shine 4s linear infinite;margin-bottom:16px;}
      @keyframes shine{to{background-position:200% center;}}
      .hero p{font-size:18px;color:#c8b6ff;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:16px 40px;background:linear-gradient(90deg,#ffd700,#ff8c00);color:#1a0f2e;text-decoration:none;border-radius:30px;font-weight:bold;box-shadow:0 0 30px rgba(255,180,0,0.6);transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 0 50px rgba(255,180,0,1);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#ffd700;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .card{background:linear-gradient(160deg,rgba(255,215,0,0.08),rgba(26,15,46,0.4));padding:28px;border-radius:16px;border:1px solid rgba(255,215,0,0.3);text-align:center;transition:all 0.3s;}
      .card:hover{transform:translateY(-6px);border-color:#ffd700;box-shadow:0 0 30px rgba(255,180,0,0.5);}
      .card .icon{font-size:48px;margin-bottom:14px;}
      .card h4{color:#ffd700;margin-bottom:10px;font-size:19px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:70px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🔮 Pandit Ji Astrology</h1><nav><a href="#">Home</a><a href="#">Kundli</a><a href="#">Horoscope</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>Discover Your Destiny</h2><p>Expert astrological guidance for love, career, health & prosperity.</p><a href="#" class="btn">✨ Get Your Kundli</a></div>
    <div class="section"><h3>Our Services</h3>
      <div class="grid">
        <div class="card"><div class="icon">🌟</div><h4>Kundli Reading</h4><p>Detailed birth chart analysis with remedies.</p></div>
        <div class="card"><div class="icon">💖</div><h4>Love Compatibility</h4><p>Match making and relationship guidance.</p></div>
        <div class="card"><div class="icon">💼</div><h4>Career Prediction</h4><p>Find your perfect career path through stars.</p></div>
        <div class="card"><div class="icon">🏥</div><h4>Health Remedies</h4><p>Astrological remedies for better health.</p></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== ASTROLOGY 2: TAROT ==========
  "astro2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#0f0a1a;color:#e6d9ff;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(15,10,26,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(161,0,255,0.3);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{background:linear-gradient(90deg,#a100ff,#00d4ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#e6d9ff;text-decoration:none;font-size:14px;}
      .nav nav a:hover{color:#a100ff;}
      .hero{padding:110px 40px;text-align:center;background:radial-gradient(circle at 50% 0%,rgba(161,0,255,0.2),transparent 60%);}
      .hero h2{font-size:52px;background:linear-gradient(90deg,#a100ff,#00d4ff,#a100ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;background-size:200% auto;animation:shine 4s linear infinite;margin-bottom:16px;}
      @keyframes shine{to{background-position:200% center;}}
      .hero p{font-size:18px;color:#c8b6ff;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:16px 40px;background:linear-gradient(90deg,#a100ff,#00d4ff);color:#fff;text-decoration:none;border-radius:30px;font-weight:bold;box-shadow:0 0 30px rgba(161,0,255,0.6);transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 0 50px rgba(161,0,255,1);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#a100ff;margin-bottom:30px;text-align:center;}
      .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;}
      .tarot{background:linear-gradient(160deg,rgba(161,0,255,0.15),rgba(0,212,255,0.1));padding:30px 20px;border-radius:16px;border:1px solid rgba(161,0,255,0.3);text-align:center;transition:all 0.4s;cursor:pointer;}
      .tarot:hover{transform:translateY(-8px) rotate(-2deg);border-color:#a100ff;box-shadow:0 0 40px rgba(161,0,255,0.6);}
      .tarot .icon{font-size:56px;margin-bottom:14px;transition:transform 0.4s;}
      .tarot:hover .icon{transform:scale(1.2) rotate(10deg);}
      .tarot h4{color:#00d4ff;font-size:16px;}
      .tarot p{font-size:12px;color:#a899c0;margin-top:6px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:70px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🎴 Mystic Tarot</h1><nav><a href="#">Home</a><a href="#">Readings</a><a href="#">About</a><a href="#">Book</a></nav></div>
    <div class="hero"><h2>Unlock Your Future</h2><p>Personal tarot readings reveal the path your soul must walk.</p><a href="#" class="btn">🌙 Book a Reading</a></div>
    <div class="section"><h3>Choose Your Reading</h3>
      <div class="cards">
        <div class="tarot"><div class="icon">🌞</div><h4>Daily Card</h4><p>Quick insight</p></div>
        <div class="tarot"><div class="icon">🌙</div><h4>Full Reading</h4><p>Complete picture</p></div>
        <div class="tarot"><div class="icon">💖</div><h4>Love Reading</h4><p>Relationships</p></div>
        <div class="tarot"><div class="icon">💼</div><h4>Career Path</h4><p>Professional life</p></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== ASTROLOGY 3: VASTU ==========
  "astro3": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#1a1310;color:#f0e6d8;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(26,19,16,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,140,0,0.3);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{background:linear-gradient(90deg,#ff8c00,#ffd700);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#f0e6d8;text-decoration:none;font-size:14px;}
      .nav nav a:hover{color:#ffd700;}
      .hero{padding:110px 40px;text-align:center;background:radial-gradient(circle at 50% 0%,rgba(255,140,0,0.2),transparent 60%);}
      .hero h2{font-size:52px;background:linear-gradient(90deg,#ff8c00,#ffd700);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;}
      .hero p{font-size:18px;color:#d4c4a8;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:16px 40px;background:linear-gradient(90deg,#ff8c00,#ffd700);color:#1a1310;text-decoration:none;border-radius:30px;font-weight:bold;box-shadow:0 0 30px rgba(255,180,0,0.6);transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 0 50px rgba(255,180,0,1);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#ffd700;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .card{background:linear-gradient(160deg,rgba(255,140,0,0.1),rgba(26,19,16,0.4));padding:28px;border-radius:16px;border:1px solid rgba(255,140,0,0.3);transition:all 0.3s;}
      .card:hover{transform:translateY(-6px);border-color:#ffd700;box-shadow:0 0 30px rgba(255,180,0,0.5);}
      .card h4{color:#ffd700;margin-bottom:10px;font-size:19px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:70px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🏛️ Vastu Shastra Expert</h1><nav><a href="#">Home</a><a href="#">Services</a><a href="#">Tips</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>Harmonize Your Space</h2><p>Ancient wisdom for modern living. Bring positive energy to your home & office.</p><a href="#" class="btn">🔱 Book Consultation</a></div>
    <div class="section"><h3>Our Services</h3>
      <div class="grid">
        <div class="card"><h4>🏠 Home Vastu</h4><p>Complete home analysis and remedies for peace & prosperity.</p></div>
        <div class="card"><h4>🏢 Office Vastu</h4><p>Boost business growth with proper office layout.</p></div>
        <div class="card"><h4>🏗️ Construction</h4><p>Vastu-compliant construction planning from day one.</p></div>
        <div class="card"><h4>🌿 Remedies</h4><p>Simple remedies to correct existing Vastu doshas.</p></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== COMPUTER 1: CYBER CAFE ==========
  "computer1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#0f172a;color:#e2e8f0;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(15,23,42,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(59,130,246,0.3);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{color:#3b82f6;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#e2e8f0;text-decoration:none;font-size:14px;}
      .nav nav a:hover{color:#3b82f6;}
      .hero{padding:100px 40px;text-align:center;background:radial-gradient(circle at 50% 0%,rgba(59,130,246,0.25),transparent 60%);}
      .hero h2{font-size:48px;margin-bottom:16px;background:linear-gradient(90deg,#3b82f6,#06b6d4);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .hero p{font-size:18px;color:#94a3b8;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:14px 32px;background:linear-gradient(90deg,#3b82f6,#06b6d4);color:#fff;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;box-shadow:0 0 30px rgba(59,130,246,0.6);}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 0 50px rgba(59,130,246,1);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#3b82f6;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:22px;}
      .service{background:rgba(59,130,246,0.08);padding:24px;border-radius:12px;border:1px solid rgba(59,130,246,0.3);text-align:center;transition:all 0.3s;}
      .service:hover{transform:translateY(-6px);border-color:#3b82f6;box-shadow:0 0 25px rgba(59,130,246,0.5);}
      .service .icon{font-size:42px;margin-bottom:12px;}
      .service h4{color:#06b6d4;margin-bottom:6px;font-size:17px;}
      .service .price{color:#3b82f6;font-weight:bold;font-size:15px;margin-top:8px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>💻 Cyber Zone Cafe</h1><nav><a href="#">Home</a><a href="#">Services</a><a href="#">Rates</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>All Digital Services Under One Roof</h2><p>Online forms, printing, scanning, government services & more.</p><a href="#" class="btn">📞 Call Now</a></div>
    <div class="section"><h3>Our Services</h3>
      <div class="grid">
        <div class="service"><div class="icon">🖨️</div><h4>Printing</h4><div class="price">₹2/page</div></div>
        <div class="service"><div class="icon">📄</div><h4>Online Forms</h4><div class="price">₹50+</div></div>
        <div class="service"><div class="icon">📷</div><h4>Scanning</h4><div class="price">₹5/page</div></div>
        <div class="service"><div class="icon">🖼️</div><h4>Passport Photo</h4><div class="price">₹80</div></div>
        <div class="service"><div class="icon">💰</div><h4>Money Transfer</h4><div class="price">₹20+</div></div>
        <div class="service"><div class="icon">📝</div><h4>Resume Making</h4><div class="price">₹100</div></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== COMPUTER 2: TRAINING ==========
  "computer2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f8fafc;color:#1e293b;line-height:1.6;}
      .nav{position:sticky;top:0;background:#fff;padding:18px 40px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 10px rgba(0,0,0,0.06);z-index:10;}
      .nav h1{color:#7c3aed;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#1e293b;text-decoration:none;font-size:14px;font-weight:500;}
      .nav nav a:hover{color:#7c3aed;}
      .hero{background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;padding:90px 40px;text-align:center;}
      .hero h2{font-size:46px;margin-bottom:16px;}
      .hero p{font-size:18px;max-width:600px;margin:0 auto 30px;opacity:0.95;}
      .hero .btn{display:inline-block;padding:14px 32px;background:#fff;color:#7c3aed;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(255,255,255,0.4);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#7c3aed;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .course{background:#fff;padding:28px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.06);transition:all 0.3s;}
      .course:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(124,58,237,0.2);}
      .course h4{color:#7c3aed;margin-bottom:10px;font-size:18px;}
      .course .duration{color:#64748b;font-size:13px;margin-bottom:12px;}
      .course .price{color:#1e293b;font-size:20px;font-weight:bold;margin-bottom:14px;}
      .course .btn{padding:10px 24px;background:#7c3aed;color:#fff;border:none;border-radius:20px;cursor:pointer;font-size:13px;transition:all 0.3s;}
      .course .btn:hover{background:#a855f7;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🎓 TechLearn Institute</h1><nav><a href="#">Home</a><a href="#">Courses</a><a href="#">Faculty</a><a href="#">Admission</a></nav></div>
    <div class="hero"><h2>Learn. Build. Succeed.</h2><p>Master in-demand tech skills with expert trainers and hands-on projects.</p><a href="#" class="btn">🎯 Enroll Now</a></div>
    <div class="section"><h3>Popular Courses</h3>
      <div class="grid">
        <div class="course"><h4>Basic Computer</h4><div class="duration">📅 3 Months</div><div class="price">₹3,000</div><button class="btn">Enroll</button></div>
        <div class="course"><h4>Web Development</h4><div class="duration">📅 6 Months</div><div class="price">₹12,000</div><button class="btn">Enroll</button></div>
        <div class="course"><h4>MS Office</h4><div class="duration">📅 2 Months</div><div class="price">₹2,500</div><button class="btn">Enroll</button></div>
        <div class="course"><h4>Tally + GST</h4><div class="duration">📅 3 Months</div><div class="price">₹5,000</div><button class="btn">Enroll</button></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== WOOD 1: FURNITURE STORE ==========
  "wood1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#fdf6ec;color:#3d2b1f;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(253,246,236,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #a0522d;z-index:10;backdrop-filter:blur(10px);}
      .nav h1{color:#a0522d;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#3d2b1f;text-decoration:none;font-size:14px;font-weight:500;}
      .nav nav a:hover{color:#a0522d;}
      .hero{background:linear-gradient(135deg,#8b4513,#a0522d);color:#fff;padding:90px 40px;text-align:center;}
      .hero h2{font-size:48px;margin-bottom:16px;}
      .hero p{font-size:18px;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:14px 32px;background:#fdf6ec;color:#8b4513;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(255,255,255,0.3);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#8b4513;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:22px;}
      .product{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);transition:all 0.3s;}
      .product:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(160,82,45,0.3);}
      .product .img{height:180px;background:linear-gradient(135deg,#deb887,#cd853f);display:flex;align-items:center;justify-content:center;font-size:70px;}
      .product .info{padding:20px;}
      .product h4{color:#3d2b1f;margin-bottom:6px;}
      .product .price{color:#a0522d;font-size:18px;font-weight:bold;margin-bottom:12px;}
      .product .btn{padding:8px 20px;background:#a0522d;color:#fff;border:none;border-radius:20px;cursor:pointer;font-size:13px;transition:all 0.3s;}
      .product .btn:hover{background:#8b4513;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🪵 Woodcraft Furniture</h1><nav><a href="#">Home</a><a href="#">Collection</a><a href="#">Custom</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>Handcrafted Wooden Furniture</h2><p>Traditional craftsmanship meets modern design. Built to last generations.</p><a href="#" class="btn">🪑 Browse Collection</a></div>
    <div class="section"><h3>Best Sellers</h3>
      <div class="grid">
        <div class="product"><div class="img">🛋️</div><div class="info"><h4>Wooden Sofa</h4><div class="price">₹15,999</div><button class="btn">View Details</button></div></div>
        <div class="product"><div class="img">🪑</div><div class="info"><h4>Dining Chair</h4><div class="price">₹2,499</div><button class="btn">View Details</button></div></div>
        <div class="product"><div class="img">🛏️</div><div class="info"><h4>King Size Bed</h4><div class="price">₹22,999</div><button class="btn">View Details</button></div></div>
        <div class="product"><div class="img">🗄️</div><div class="info"><h4>Wardrobe</h4><div class="price">₹18,999</div><button class="btn">View Details</button></div></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== WOOD 2: INTERIOR DESIGN ==========
  "wood2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f5f1ec;color:#2d2419;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(245,241,236,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(160,82,45,0.3);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{color:#8b6f47;font-size:22px;font-weight:700;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#2d2419;text-decoration:none;font-size:14px;font-weight:500;}
      .nav nav a:hover{color:#8b6f47;}
      .hero{padding:110px 40px;text-align:center;background:linear-gradient(135deg,#e8dcc8,#d4b896);color:#2d2419;}
      .hero h2{font-size:52px;margin-bottom:16px;font-weight:900;}
      .hero p{font-size:18px;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:14px 32px;background:#2d2419;color:#fff;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(45,36,25,0.4);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#8b6f47;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;}
      .project{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);transition:all 0.3s;}
      .project:hover{transform:translateY(-8px);box-shadow:0 12px 40px rgba(139,111,71,0.3);}
      .project .img{height:200px;background:linear-gradient(135deg,#8b6f47,#d4b896);display:flex;align-items:center;justify-content:center;font-size:64px;color:#fff;}
      .project .info{padding:24px;}
      .project h4{color:#2d2419;margin-bottom:6px;font-size:18px;}
      .project p{color:#6b5d4f;font-size:14px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:70px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🏛️ Wood Interior Studio</h1><nav><a href="#">Home</a><a href="#">Projects</a><a href="#">About</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>Transform Your Space</h2><p>Premium wooden interior design for homes, offices & restaurants.</p><a href="#" class="btn">📐 Get Free Quote</a></div>
    <div class="section"><h3>Recent Projects</h3>
      <div class="grid">
        <div class="project"><div class="img">🏠</div><div class="info"><h4>Modern Living Room</h4><p>Custom wood paneling & furniture</p></div></div>
        <div class="project"><div class="img">🏢</div><div class="info"><h4>Corporate Office</h4><p>Ergonomic wooden workspace design</p></div></div>
        <div class="project"><div class="img">🍽️</div><div class="info"><h4>Restaurant Interior</h4><p>Rustic wood theme with warm lighting</p></div></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== WOOD 3: CUSTOM WORKSHOP ==========
  "wood3": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#1a1410;color:#e8dcc8;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(26,20,16,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(160,82,45,0.4);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{color:#d4a76a;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#e8dcc8;text-decoration:none;font-size:14px;}
      .nav nav a:hover{color:#d4a76a;}
      .hero{padding:110px 40px;text-align:center;background:radial-gradient(circle at 50% 0%,rgba(160,82,45,0.3),transparent 60%);}
      .hero h2{font-size:52px;background:linear-gradient(90deg,#d4a76a,#f0c080);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;}
      .hero p{font-size:18px;color:#a89980;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:16px 40px;background:linear-gradient(90deg,#d4a76a,#a0522d);color:#1a1410;text-decoration:none;border-radius:30px;font-weight:bold;box-shadow:0 0 30px rgba(212,167,106,0.5);transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 0 50px rgba(212,167,106,1);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#d4a76a;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .card{background:linear-gradient(160deg,rgba(160,82,45,0.15),rgba(26,20,16,0.6));padding:32px;border-radius:16px;border:1px solid rgba(160,82,45,0.4);text-align:center;transition:all 0.3s;}
      .card:hover{transform:translateY(-6px);border-color:#d4a76a;box-shadow:0 0 30px rgba(212,167,106,0.4);}
      .card .icon{font-size:48px;margin-bottom:14px;}
      .card h4{color:#d4a76a;margin-bottom:10px;font-size:18px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:70px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>⚒️ Master Wood Works</h1><nav><a href="#">Home</a><a href="#">Workshop</a><a href="#">Gallery</a><a href="#">Quote</a></nav></div>
    <div class="hero"><h2>Custom Wood Creations</h2><p>Every piece tells a story. Get your dream furniture handcrafted by masters.</p><a href="#" class="btn">📝 Request Quote</a></div>
    <div class="section"><h3>What We Create</h3>
      <div class="grid">
        <div class="card"><div class="icon">🪑</div><h4>Custom Chairs</h4><p>Design your perfect seating with premium woods.</p></div>
        <div class="card"><div class="icon">🚪</div><h4>Wooden Doors</h4><p>Hand-carved designer doors for grand entrances.</p></div>
        <div class="card"><div class="icon">🪞</div><h4>Mirror Frames</h4><p>Elegant frames crafted with intricate detailing.</p></div>
        <div class="card"><div class="icon">📚</div><h4>Bookshelves</h4><p>Custom library shelves for your dream home.</p></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== HOTEL 1: LUXURY ==========
  "hotel1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#0a0a0f;color:#e8e8e8;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(10,10,15,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(212,175,55,0.3);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{color:#d4af37;font-size:22px;letter-spacing:2px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#e8e8e8;text-decoration:none;font-size:14px;}
      .nav nav a:hover{color:#d4af37;}
      .hero{padding:130px 40px;text-align:center;background:linear-gradient(135deg,#1a1a2e,#0a0a0f);position:relative;overflow:hidden;}
      .hero::before{content:'✦';position:absolute;top:20%;left:10%;font-size:40px;color:rgba(212,175,55,0.2);animation:float 4s infinite;}
      .hero::after{content:'✦';position:absolute;bottom:20%;right:10%;font-size:60px;color:rgba(212,175,55,0.15);animation:float 5s infinite reverse;}
      @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-20px);}}
      .hero h2{font-size:56px;color:#d4af37;margin-bottom:16px;font-weight:normal;letter-spacing:4px;}
      .hero p{font-size:18px;color:#c8c8c8;max-width:600px;margin:0 auto 30px;font-style:italic;}
      .hero .btn{display:inline-block;padding:16px 40px;background:transparent;border:2px solid #d4af37;color:#d4af37;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;}
      .hero .btn:hover{background:#d4af37;color:#0a0a0f;transform:translateY(-3px);box-shadow:0 10px 40px rgba(212,175,55,0.5);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#d4af37;margin-bottom:30px;text-align:center;font-weight:normal;letter-spacing:3px;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .room{background:linear-gradient(160deg,rgba(212,175,55,0.05),rgba(10,10,15,0.8));padding:32px 24px;border-radius:16px;border:1px solid rgba(212,175,55,0.3);text-align:center;transition:all 0.3s;}
      .room:hover{transform:translateY(-8px);border-color:#d4af37;box-shadow:0 0 40px rgba(212,175,55,0.4);}
      .room .icon{font-size:48px;margin-bottom:14px;}
      .room h4{color:#d4af37;margin-bottom:8px;font-size:19px;font-weight:normal;}
      .room .price{color:#e8e8e8;font-size:22px;margin:12px 0;font-weight:bold;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:70px 20px;}.hero h2{font-size:34px;letter-spacing:2px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>👑 THE GRAND PALACE</h1><nav><a href="#">Home</a><a href="#">Rooms</a><a href="#">Dining</a><a href="#">Book</a></nav></div>
    <div class="hero"><h2>The Grand Palace</h2><p>Where luxury meets timeless elegance. Experience royalty.</p><a href="#" class="btn">✦ Book Your Stay</a></div>
    <div class="section"><h3>Our Rooms</h3>
      <div class="grid">
        <div class="room"><div class="icon">🛏️</div><h4>Deluxe Room</h4><div class="price">₹4,999/night</div></div>
        <div class="room"><div class="icon">🏨</div><h4>Premium Suite</h4><div class="price">₹9,999/night</div></div>
        <div class="room"><div class="icon">👑</div><h4>Royal Suite</h4><div class="price">₹19,999/night</div></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== HOTEL 2: RESTAURANT MENU ==========
  "hotel2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#1a0f0a;color:#f5e6d3;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(26,15,10,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(220,38,38,0.3);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{color:#dc2626;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#f5e6d3;text-decoration:none;font-size:14px;}
      .nav nav a:hover{color:#dc2626;}
      .hero{padding:110px 40px;text-align:center;background:radial-gradient(circle at 50% 0%,rgba(220,38,38,0.3),transparent 60%);}
      .hero h2{font-size:52px;background:linear-gradient(90deg,#dc2626,#f59e0b);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;}
      .hero p{font-size:18px;color:#c8a896;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:16px 40px;background:linear-gradient(90deg,#dc2626,#f59e0b);color:#fff;text-decoration:none;border-radius:30px;font-weight:bold;box-shadow:0 0 30px rgba(220,38,38,0.6);transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 0 50px rgba(220,38,38,1);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#f59e0b;margin-bottom:30px;text-align:center;}
      .menu-item{background:rgba(220,38,38,0.08);padding:22px;border-radius:12px;border:1px solid rgba(220,38,38,0.3);display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;transition:all 0.3s;}
      .menu-item:hover{transform:translateX(8px);border-color:#dc2626;box-shadow:0 0 25px rgba(220,38,38,0.4);}
      .menu-item .info h4{color:#f5e6d3;font-size:17px;margin-bottom:4px;}
      .menu-item .info p{color:#a89080;font-size:13px;}
      .menu-item .price{color:#f59e0b;font-size:20px;font-weight:bold;white-space:nowrap;margin-left:20px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:70px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🍽️ Spice Garden</h1><nav><a href="#">Home</a><a href="#">Menu</a><a href="#">Order</a><a href="#">Book Table</a></nav></div>
    <div class="hero"><h2>Authentic Indian Flavors</h2><p>Experience the rich taste of traditional recipes crafted with love.</p><a href="#" class="btn">🍴 View Menu</a></div>
    <div class="section"><h3>Popular Dishes</h3>
      <div class="menu-item"><div class="info"><h4>Butter Chicken</h4><p>Rich creamy tomato gravy with tender chicken</p></div><div class="price">₹320</div></div>
      <div class="menu-item"><div class="info"><h4>Paneer Tikka</h4><p>Grilled cottage cheese with spices</p></div><div class="price">₹280</div></div>
      <div class="menu-item"><div class="info"><h4>Biryani</h4><p>Fragrant basmati rice with aromatic spices</p></div><div class="price">₹350</div></div>
      <div class="menu-item"><div class="info"><h4>Masala Dosa</h4><p>Crispy dosa with spiced potato filling</p></div><div class="price">₹180</div></div>
    </div>
    </body></html>
  `,

  // ========== HOTEL 3: CAFE ==========
  "hotel3": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f5efe6;color:#3d2b1f;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(245,239,230,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 10px rgba(0,0,0,0.06);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{color:#8b4513;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#3d2b1f;text-decoration:none;font-size:14px;font-weight:500;}
      .nav nav a:hover{color:#8b4513;}
      .hero{padding:120px 40px;text-align:center;background:linear-gradient(135deg,#d4a574,#8b4513);color:#fff;position:relative;overflow:hidden;}
      .hero::before{content:'☕';position:absolute;top:20%;left:10%;font-size:80px;opacity:0.15;animation:float 4s infinite;}
      .hero::after{content:'☕';position:absolute;bottom:20%;right:10%;font-size:100px;opacity:0.15;animation:float 5s infinite reverse;}
      @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-20px);}}
      .hero h2{font-size:52px;margin-bottom:16px;text-shadow:0 4px 20px rgba(0,0,0,0.3);}
      .hero p{font-size:18px;max-width:600px;margin:0 auto 30px;}
      .hero .btn{display:inline-block;padding:16px 40px;background:#fff;color:#8b4513;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;box-shadow:0 10px 30px rgba(0,0,0,0.2);}
      .hero .btn:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 15px 40px rgba(0,0,0,0.3);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#8b4513;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:22px;}
      .item{background:#fff;padding:28px 20px;border-radius:16px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.08);transition:all 0.3s;}
      .item:hover{transform:translateY(-6px);box-shadow:0 12px 30px rgba(139,69,19,0.3);}
      .item .emoji{font-size:56px;margin-bottom:12px;transition:transform 0.3s;}
      .item:hover .emoji{transform:scale(1.15) rotate(-5deg);}
      .item h4{color:#3d2b1f;margin-bottom:6px;font-size:17px;}
      .item .price{color:#8b4513;font-size:18px;font-weight:bold;margin:8px 0;}
      .item .btn{padding:8px 20px;background:#8b4513;color:#fff;border:none;border-radius:20px;cursor:pointer;font-size:12px;transition:all 0.3s;}
      .item .btn:hover{background:#d4a574;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:70px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>☕ Cozy Brew Cafe</h1><nav><a href="#">Home</a><a href="#">Menu</a><a href="#">Order</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>Your Daily Cup of Joy</h2><p>Handcrafted coffee, fresh pastries & cozy vibes. Come sit, sip, and relax.</p><a href="#" class="btn">☕ Order Now</a></div>
    <div class="section"><h3>Popular Menu</h3>
      <div class="grid">
        <div class="item"><div class="emoji">☕</div><h4>Espresso</h4><div class="price">₹120</div><button class="btn">Order</button></div>
        <div class="item"><div class="emoji">🥐</div><h4>Croissant</h4><div class="price">₹80</div><button class="btn">Order</button></div>
        <div class="item"><div class="emoji">🍰</div><h4>Chocolate Cake</h4><div class="price">₹150</div><button class="btn">Order</button></div>
        <div class="item"><div class="emoji">🥤</div><h4>Cold Coffee</h4><div class="price">₹140</div><button class="btn">Order</button></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== HOTEL 4: FINE DINE ==========
  "hotel4": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#0f0f0f;color:#e8e8e8;line-height:1.6;}
      .nav{position:sticky;top:0;background:rgba(15,15,15,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(220,38,38,0.3);z-index:10;backdrop-filter:blur(10px);}
      .nav h1{color:#dc2626;font-size:22px;letter-spacing:3px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#e8e8e8;text-decoration:none;font-size:14px;}
      .nav nav a:hover{color:#dc2626;}
      .hero{padding:130px 40px;text-align:center;background:linear-gradient(135deg,#1a1a1a,#000);position:relative;}
      .hero h2{font-size:56px;color:#dc2626;margin-bottom:16px;font-weight:normal;letter-spacing:4px;text-shadow:0 0 40px rgba(220,38,38,0.5);}
      .hero p{font-size:18px;color:#c8c8c8;max-width:600px;margin:0 auto 30px;font-style:italic;}
      .hero .btn{display:inline-block;padding:16px 40px;background:linear-gradient(90deg,#dc2626,#a01010);color:#fff;text-decoration:none;border-radius:30px;font-weight:bold;box-shadow:0 0 30px rgba(220,38,38,0.6);transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 0 50px rgba(220,38,38,1);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#dc2626;margin-bottom:30px;text-align:center;font-weight:normal;letter-spacing:3px;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .card{background:linear-gradient(160deg,rgba(220,38,38,0.08),rgba(15,15,15,0.8));padding:32px 24px;border-radius:16px;border:1px solid rgba(220,38,38,0.3);text-align:center;transition:all 0.3s;}
      .card:hover{transform:translateY(-8px);border-color:#dc2626;box-shadow:0 0 40px rgba(220,38,38,0.5);}
      .card .icon{font-size:52px;margin-bottom:14px;}
      .card h4{color:#dc2626;margin-bottom:10px;font-size:19px;font-weight:normal;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:70px 20px;}.hero h2{font-size:34px;letter-spacing:2px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🍷 ELITE DINING</h1><nav><a href="#">Home</a><a href="#">Menu</a><a href="#">Reserve</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>ELITE DINING</h2><p>Where every meal is a masterpiece. Reserve your table for an unforgettable experience.</p><a href="#" class="btn">🍽️ Reserve Table</a></div>
    <div class="section"><h3>Signature Experiences</h3>
      <div class="grid">
        <div class="card"><div class="icon">🍷</div><h4>Wine Pairing</h4><p>Curated wines to complement every dish.</p></div>
        <div class="card"><div class="icon">👨‍🍳</div><h4>Chef's Special</h4><p>Exclusive tasting menu by our master chef.</p></div>
        <div class="card"><div class="icon">🎂</div><h4>Private Events</h4><p>Celebrate special moments in style.</p></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== INSTITUTE 1: COACHING ==========
  "institute1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f0f9ff;color:#1e293b;line-height:1.6;}
      .nav{position:sticky;top:0;background:#fff;padding:18px 40px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 10px rgba(0,0,0,0.06);z-index:10;}
      .nav h1{color:#2563eb;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#1e293b;text-decoration:none;font-size:14px;font-weight:500;}
      .nav nav a:hover{color:#2563eb;}
      .hero{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:90px 40px;text-align:center;}
      .hero h2{font-size:46px;margin-bottom:16px;}
      .hero p{font-size:18px;max-width:600px;margin:0 auto 30px;opacity:0.95;}
      .hero .btn{display:inline-block;padding:14px 32px;background:#fff;color:#2563eb;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(255,255,255,0.4);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#2563eb;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .course{background:#fff;padding:28px;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.06);transition:all 0.3s;}
      .course:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(37,99,235,0.2);}
      .course h4{color:#2563eb;margin-bottom:10px;font-size:18px;}
      .course .detail{color:#64748b;font-size:13px;margin-bottom:8px;}
      .course .price{color:#1e293b;font-size:20px;font-weight:bold;margin-bottom:14px;}
      .course .btn{padding:10px 24px;background:#2563eb;color:#fff;border:none;border-radius:20px;cursor:pointer;font-size:13px;transition:all 0.3s;}
      .course .btn:hover{background:#7c3aed;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🎓 Success Coaching</h1><nav><a href="#">Home</a><a href="#">Courses</a><a href="#">Faculty</a><a href="#">Admission</a></nav></div>
    <div class="hero"><h2>Your Success is Our Mission</h2><p>Expert coaching for competitive exams with proven track record.</p><a href="#" class="btn">📚 Join Now</a></div>
    <div class="section"><h3>Our Courses</h3>
      <div class="grid">
        <div class="course"><h4>JEE Advanced</h4><div class="detail">📅 2 Years Program</div><div class="price">₹85,000</div><button class="btn">Enroll</button></div>
        <div class="course"><h4>NEET Preparation</h4><div class="detail">📅 2 Years Program</div><div class="price">₹75,000</div><button class="btn">Enroll</button></div>
        <div class="course"><h4>UPSC Foundation</h4><div class="detail">📅 1 Year Program</div><div class="price">₹45,000</div><button class="btn">Enroll</button></div>
        <div class="course"><h4>Banking Exams</h4><div class="detail">📅 6 Months</div><div class="price">₹25,000</div><button class="btn">Enroll</button></div>
      </div>
    </div>
    </body></html>
  `,

  // ========== INSTITUTE 2: SCHOOL ==========
  "institute2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#fffbeb;color:#1e293b;line-height:1.6;}
      .nav{position:sticky;top:0;background:#fff;padding:18px 40px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 10px rgba(0,0,0,0.06);z-index:10;}
      .nav h1{color:#ea580c;font-size:22px;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#1e293b;text-decoration:none;font-size:14px;font-weight:500;}
      .nav nav a:hover{color:#ea580c;}
      .hero{background:linear-gradient(135deg,#ea580c,#f97316);color:#fff;padding:90px 40px;text-align:center;}
      .hero h2{font-size:46px;margin-bottom:16px;}
      .hero p{font-size:18px;max-width:600px;margin:0 auto 30px;opacity:0.95;}
      .hero .btn{display:inline-block;padding:14px 32px;background:#fff;color:#ea580c;text-decoration:none;border-radius:30px;font-weight:bold;transition:all 0.3s;}
      .hero .btn:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(255,255,255,0.4);}
      .section{padding:70px 40px;max-width:1100px;margin:0 auto;}
      .section h3{font-size:32px;color:#ea580c;margin-bottom:30px;text-align:center;}
      .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;}
      .card{background:#fff;padding:32px 24px;border-radius:16px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.06);transition:all 0.3s;}
      .card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(234,88,12,0.2);}
      .card .icon{font-size:52px;margin-bottom:14px;}
      .card h4{color:#ea580c;margin-bottom:10px;font-size:18px;}
      .card p{color:#64748b;font-size:14px;}
      @media(max-width:768px){.nav{flex-direction:column;gap:14px;padding:14px 20px;}.nav nav{gap:14px;flex-wrap:wrap;justify-content:center;}.hero{padding:60px 20px;}.hero h2{font-size:32px;}.section{padding:50px 20px;}}
    </style></head><body>
    <div class="nav"><h1>🏫 Bright Future School</h1><nav><a href="#">Home</a><a href="#">Academics</a><a href="#">Gallery</a><a href="#">Contact</a></nav></div>
    <div class="hero"><h2>Nurturing Young Minds</h2><p>Where every child discovers their potential. Quality education from KG to Class 12.</p><a href="#" class="btn">🎒 Apply Now</a></div>
    <div class="section"><h3>Why Choose Us</h3>
      <div class="grid">
        <div class="card"><div class="icon">📚</div><h4>Expert Faculty</h4><p>Highly qualified & experienced teachers.</p></div>
        <div class="card"><div class="icon">🏆</div><h4>Top Results</h4><p>Consistent 100% board results.</p></div>
        <div class="card"><div class="icon">⚽</div><h4>Sports Facilities</h4><p>Modern playground & sports equipment.</p></div>
        <div class="card"><div class="icon">💻</div><h4>Smart Classes</h4><p>Digital learning with modern tech.</p></div>
      </div>
    </div>
    </body></html>
  `
};

// Global function to open demo
function openDemo(key) {
  const html = DEMO_DATA[key];
  if (!html) {
    alert('Demo not found!');
    return;
  }
  // Create modal
  const modal = document.getElementById('demoModal');
  const iframe = document.getElementById('demoIframe');
  const title = document.getElementById('demoTitle');

  // Set title based on key
  const titles = {
    advocate: '⚖ Sharma & Associates — Advocate Website',
    doctor: '👨‍⚕️ Dr. Patel Clinic — Doctor Website',
    crypto1: '◆ Neon Coin — Token Landing',
    crypto2: '📈 GoldBond — Bonding Curve DApp',
    crypto3: '🔄 SwapX — Exchange UI',
    general1: '🛒 Fresh Mart — Grocery Store',
    general2: '🏪 Sharma Kirana — Kirana Store',
    medical: '💊 MediCare — Pharmacy',
    astro1: '🔮 Pandit Ji — Kundli Astrology',
    astro2: '🎴 Mystic Tarot — Tarot Reading',
    astro3: '🏛️ Vastu Expert',
    computer1: '💻 Cyber Zone — Cyber Cafe',
    computer2: '🎓 TechLearn — Computer Training',
    wood1: '🪵 Woodcraft — Furniture Store',
    wood2: '🏛️ Wood Interior Studio',
    wood3: '⚒️ Master Wood Works',
    hotel1: '👑 The Grand Palace — Luxury Hotel',
    hotel2: '🍽️ Spice Garden — Restaurant',
    hotel3: '☕ Cozy Brew — Cafe',
    hotel4: '🍷 Elite Dining',
    institute1: '🎓 Success Coaching',
    institute2: '🏫 Bright Future School'
  };

  title.textContent = titles[key] || 'Demo Preview';

  // Set iframe content
  iframe.srcdoc = html;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDemo() {
  const modal = document.getElementById('demoModal');
  const iframe = document.getElementById('demoIframe');
  modal.classList.remove('active');
  iframe.srcdoc = '';
  document.body.style.overflow = '';
}

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDemo();
});
