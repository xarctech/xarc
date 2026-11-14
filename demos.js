// ============================================
// XARC DEMO WEBSITES — PROFESSIONAL VERSION
// Part 1: Profile + Crypto
// ============================================

const DEMO_DATA = {

  // ========== PROFILE: ADVOCATE ==========
  "advocate": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#f8f5f0;color:#2c2419;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .topbar{background:#0f1b2d;color:#d4af37;padding:10px 30px;font-size:13px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;}
      .topbar span{display:flex;align-items:center;gap:6px;}
      .nav{position:sticky;top:0;background:rgba(15,27,45,0.98);color:#fff;padding:20px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(10px);box-shadow:0 4px 20px rgba(0,0,0,0.3);}
      .nav .logo{display:flex;align-items:center;gap:10px;}
      .nav .logo-icon{width:44px;height:44px;background:linear-gradient(135deg,#d4af37,#b8860b);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;color:#0f1b2d;font-weight:bold;}
      .nav .logo-text h1{font-size:20px;color:#d4af37;letter-spacing:2px;margin:0;}
      .nav .logo-text p{font-size:11px;color:#8899aa;letter-spacing:1px;margin:0;}
      .nav nav{display:flex;gap:30px;}
      .nav nav a{color:#fff;font-size:14px;position:relative;padding:6px 0;transition:color 0.3s;}
      .nav nav a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:#d4af37;transition:width 0.4s;}
      .nav nav a:hover{color:#d4af37;}
      .nav nav a:hover::after{width:100%;}
      .hero{position:relative;padding:140px 40px 160px;background:linear-gradient(135deg,#0f1b2d 0%,#1a2f4a 50%,#0f1b2d 100%);color:#fff;overflow:hidden;}
      .hero::before{content:'';position:absolute;inset:0;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M0 0 L100 100 M100 0 L0 100" stroke="rgba(212,175,55,0.06)" stroke-width="1"/></svg>');opacity:0.5;}
      .hero-content{position:relative;max-width:900px;margin:0 auto;text-align:center;z-index:1;}
      .hero-subtitle{display:inline-block;padding:8px 22px;border:1px solid rgba(212,175,55,0.5);border-radius:30px;color:#d4af37;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:24px;animation:fadeUp 1s ease;}
      .hero h2{font-size:clamp(36px,6vw,72px);line-height:1.1;margin-bottom:24px;color:#fff;animation:fadeUp 1s ease 0.2s backwards;}
      .hero h2 span{color:#d4af37;font-style:italic;}
      .hero-desc{font-size:18px;color:#c8d0dc;max-width:640px;margin:0 auto 40px;animation:fadeUp 1s ease 0.4s backwards;}
      .hero-cta{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;animation:fadeUp 1s ease 0.6s backwards;}
      .btn{padding:16px 40px;border-radius:4px;font-size:15px;font-weight:bold;letter-spacing:1px;transition:all 0.4s;display:inline-block;border:none;cursor:pointer;}
      .btn-gold{background:linear-gradient(135deg,#d4af37,#b8860b);color:#0f1b2d;box-shadow:0 8px 30px rgba(212,175,55,0.4);}
      .btn-gold:hover{transform:translateY(-4px);box-shadow:0 15px 45px rgba(212,175,55,0.6);}
      .btn-outline{border:2px solid #d4af37;color:#d4af37;background:transparent;}
      .btn-outline:hover{background:#d4af37;color:#0f1b2d;transform:translateY(-4px);}
      @keyframes fadeUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
      .hero-stats{position:absolute;bottom:-60px;left:50%;transform:translateX(-50%);display:flex;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.15);overflow:hidden;width:90%;max-width:800px;}
      .hero-stat{flex:1;padding:30px 20px;text-align:center;border-right:1px solid #eee;transition:all 0.3s;}
      .hero-stat:last-child{border-right:none;}
      .hero-stat:hover{background:#fdf9f3;transform:scale(1.02);}
      .hero-stat h3{font-size:36px;color:#0f1b2d;margin-bottom:6px;}
      .hero-stat p{font-size:13px;color:#7a7a7a;letter-spacing:1px;text-transform:uppercase;}
      .section{padding:100px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#b8860b;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:bold;}
      .section-title{font-size:clamp(32px,4.5vw,48px);color:#0f1b2d;margin-bottom:20px;line-height:1.2;}
      .section-title span{color:#b8860b;font-style:italic;}
      .section-desc{font-size:17px;color:#5a5a5a;max-width:640px;margin-bottom:50px;}
      .about{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{position:relative;border-radius:12px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.15);}
      .about-img::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(212,175,55,0.2),transparent);z-index:1;}
      .about-img img{width:100%;height:500px;object-fit:cover;}
      .about-content{padding:20px 0;}
      .about-content h3{font-size:32px;color:#0f1b2d;margin-bottom:20px;line-height:1.3;}
      .about-content h3 span{color:#b8860b;font-style:italic;}
      .about-content p{font-size:16px;color:#555;margin-bottom:18px;line-height:1.8;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:24px;}
      .about-feat{display:flex;align-items:center;gap:10px;font-size:14px;color:#0f1b2d;font-weight:bold;}
      .about-feat::before{content:'✓';width:26px;height:26px;background:#d4af37;color:#0f1b2d;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;font-weight:bold;}
      .practice{background:#0f1b2d;}
      .practice .section-tag{color:#d4af37;}
      .practice .section-title{color:#fff;}
      .practice .section-title span{color:#d4af37;}
      .practice .section-desc{color:#c8d0dc;}
      .practice-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
      .practice-card{background:rgba(255,255,255,0.03);padding:40px 28px;border:1px solid rgba(212,175,55,0.2);border-radius:8px;transition:all 0.4s;position:relative;overflow:hidden;}
      .practice-card::before{content:'';position:absolute;top:0;left:0;width:0;height:3px;background:#d4af37;transition:width 0.4s;}
      .practice-card:hover{background:rgba(212,175,55,0.08);transform:translateY(-8px);border-color:#d4af37;}
      .practice-card:hover::before{width:100%;}
      .practice-icon{width:64px;height:64px;background:linear-gradient(135deg,#d4af37,#b8860b);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:20px;transition:transform 0.4s;}
      .practice-card:hover .practice-icon{transform:rotate(-10deg) scale(1.1);}
      .practice-card h4{font-size:22px;color:#fff;margin-bottom:12px;}
      .practice-card p{font-size:14px;color:#a8b0bc;line-height:1.7;}
      .team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;}
      .team-card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.08);transition:all 0.4s;}
      .team-card:hover{transform:translateY(-10px);box-shadow:0 25px 60px rgba(0,0,0,0.15);}
      .team-img{height:320px;overflow:hidden;position:relative;}
      .team-img img{width:100%;height:100%;object-fit:cover;transition:transform 0.6s;}
      .team-card:hover .team-img img{transform:scale(1.1);}
      .team-info{padding:26px;text-align:center;}
      .team-info h4{font-size:22px;color:#0f1b2d;margin-bottom:6px;}
      .team-info p{font-size:14px;color:#b8860b;letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;}
      .team-info .social{display:flex;justify-content:center;gap:10px;}
      .team-info .social a{width:36px;height:36px;background:#f0ece5;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;transition:all 0.3s;}
      .team-info .social a:hover{background:#d4af37;color:#fff;transform:translateY(-3px);}
      .testimonial-section{background:linear-gradient(135deg,#0f1b2d,#1a2f4a);}
      .testimonial-section .section-tag{color:#d4af37;}
      .testimonial-section .section-title{color:#fff;}
      .testimonial-section .section-title span{color:#d4af37;}
      .testimonial-section .section-desc{color:#c8d0dc;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:30px;}
      .testimonial-card{background:rgba(255,255,255,0.04);padding:40px;border-radius:12px;border:1px solid rgba(212,175,55,0.2);position:relative;transition:all 0.4s;}
      .testimonial-card:hover{background:rgba(212,175,55,0.08);transform:translateY(-6px);}
      .testimonial-card::before{content:'"';position:absolute;top:10px;left:20px;font-size:80px;color:rgba(212,175,55,0.3);font-family:Georgia;line-height:1;}
      .testimonial-text{font-size:16px;color:#c8d0dc;line-height:1.8;margin-bottom:24px;position:relative;z-index:1;font-style:italic;}
      .testimonial-author{display:flex;align-items:center;gap:14px;}
      .testimonial-author .avatar{width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#d4af37,#b8860b);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:bold;color:#0f1b2d;}
      .testimonial-author h5{font-size:16px;color:#fff;margin-bottom:4px;}
      .testimonial-author p{font-size:13px;color:#d4af37;}
      .contact-section{background:#0f1b2d;color:#fff;}
      .contact-inner{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;}
      .contact-info h3{font-size:36px;color:#fff;margin-bottom:20px;}
      .contact-info h3 span{color:#d4af37;font-style:italic;}
      .contact-info > p{color:#c8d0dc;margin-bottom:30px;}
      .contact-item{display:flex;gap:16px;margin-bottom:24px;align-items:flex-start;}
      .contact-item-icon{width:52px;height:52px;background:rgba(212,175,55,0.15);border:1px solid rgba(212,175,55,0.4);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;color:#d4af37;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .contact-item-icon{background:#d4af37;color:#0f1b2d;transform:rotate(-5deg);}
      .contact-item h5{font-size:15px;color:#d4af37;margin-bottom:4px;letter-spacing:1px;text-transform:uppercase;}
      .contact-item p{font-size:16px;color:#fff;}
      .contact-form{background:rgba(255,255,255,0.04);padding:40px;border-radius:12px;border:1px solid rgba(212,175,55,0.2);}
      .contact-form h4{color:#d4af37;font-size:24px;margin-bottom:24px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#c8d0dc;font-size:13px;margin-bottom:8px;letter-spacing:1px;text-transform:uppercase;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:rgba(0,0,0,0.3);border:1px solid rgba(212,175,55,0.3);border-radius:6px;color:#fff;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#d4af37;background:rgba(0,0,0,0.5);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-gold{width:100%;margin-top:10px;}
      .footer{background:#080f18;color:#7a8490;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#d4af37;font-size:18px;margin-bottom:20px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:14px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#7a8490;font-size:14px;transition:color 0.3s;}
      .footer ul a:hover{color:#d4af37;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(212,175,55,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:16px 20px;flex-wrap:wrap;gap:14px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;}
        .topbar{justify-content:center;text-align:center;font-size:11px;padding:8px 16px;}
        .hero{padding:80px 20px 140px;}
        .hero-stats{position:static;transform:none;width:100%;max-width:none;margin-top:40px;flex-wrap:wrap;}
        .hero-stat{flex:1 1 50%;border-right:none;border-bottom:1px solid #eee;padding:20px;}
        .hero-stat:nth-child(odd){border-right:1px solid #eee;}
        .hero-stat:last-child,.hero-stat:nth-last-child(2){border-bottom:none;}
        .section{padding:60px 20px;}
        .about,.contact-inner,.team-grid,.practice-grid,.testimonial-grid{grid-template-columns:1fr;gap:30px;}
        .about-img img{height:340px;}
        .footer-top{grid-template-columns:1fr 1fr;}
      }
      @media(max-width:600px){
        .about-features{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;align-items:center;}
        .btn{width:100%;max-width:320px;text-align:center;}
        .contact-form{padding:26px 20px;}
        .footer-top{grid-template-columns:1fr;}
      }
    </style></head><body>

    <div class="topbar">
      <span>📞 +91 93093 32775</span>
      <span>📧 xarctech@gmail.com</span>
      <span>🕒 Mon–Sat: 9AM – 8PM</span>
    </div>

    <header class="nav">
      <div class="logo">
        <div class="logo-icon">⚖</div>
        <div class="logo-text"><h1>SHARMA & ASSOCIATES</h1><p>Advocates & Legal Consultants</p></div>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Practice Areas</a>
        <a href="#">Our Team</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-content">
        <span class="hero-subtitle">25+ Years of Legal Excellence</span>
        <h2>Justice. Integrity. <span>Results.</span></h2>
        <p class="hero-desc">Expert legal counsel with a proven track record in civil, criminal, corporate, and family law. Trusted by over 5,000 clients across India.</p>
        <div class="hero-cta">
          <a href="#" class="btn btn-gold">📅 Book Consultation</a>
          <a href="#" class="btn btn-outline">📞 Call Now</a>
        </div>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><h3>25+</h3><p>Years Experience</p></div>
        <div class="hero-stat"><h3>5,000+</h3><p>Cases Won</p></div>
        <div class="hero-stat"><h3>98%</h3><p>Success Rate</p></div>
      </div>
    </section>

    <section class="section">
      <div class="about">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" alt="Law Office"></div>
        <div class="about-content">
          <span class="section-tag">About Our Firm</span>
          <h3>Committed to <span>Protecting Your Rights</span></h3>
          <p>Sharma & Associates is a full-service law firm dedicated to providing strategic, ethical, and result-oriented legal solutions. Our team of seasoned advocates combines decades of courtroom experience with a deep understanding of Indian law.</p>
          <p>We believe every client deserves personalized attention, transparent communication, and relentless advocacy — whether it's a complex corporate dispute or a sensitive family matter.</p>
          <div class="about-features">
            <div class="about-feat">Free Initial Consultation</div>
            <div class="about-feat">Confidential Handling</div>
            <div class="about-feat">24/7 Client Support</div>
            <div class="about-feat">Courtroom Excellence</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section practice">
      <div style="text-align:center;margin-bottom:50px;">
        <span class="section-tag">What We Do</span>
        <h2 class="section-title">Our <span>Practice Areas</span></h2>
        <p class="section-desc" style="margin:0 auto;">Comprehensive legal services tailored to protect your interests across all major areas of law.</p>
      </div>
      <div class="practice-grid">
        <div class="practice-card">
          <div class="practice-icon">⚖️</div>
          <h4>Civil Law</h4>
          <p>Property disputes, contracts, consumer cases, and civil litigation handled with meticulous precision and strategic foresight.</p>
        </div>
        <div class="practice-card">
          <div class="practice-icon">🛡️</div>
          <h4>Criminal Defense</h4>
          <p>Robust defense representation in all criminal cases — from bail to trial — with an unwavering commitment to your rights.</p>
        </div>
        <div class="practice-card">
          <div class="practice-icon">🏢</div>
          <h4>Corporate Law</h4>
          <p>Business compliance, mergers, acquisitions, and corporate advisory services for startups and established enterprises.</p>
        </div>
        <div class="practice-card">
          <div class="practice-icon">👨‍👩‍👧</div>
          <h4>Family Law</h4>
          <p>Sensitive handling of divorce, custody, maintenance, and family settlements with compassion and professionalism.</p>
        </div>
        <div class="practice-card">
          <div class="practice-icon">📋</div>
          <h4>Property Law</h4>
          <p>Title verification, property disputes, registration, and real estate transactions with complete legal due diligence.</p>
        </div>
        <div class="practice-card">
          <div class="practice-icon">💼</div>
          <h4>Labour Law</h4>
          <p>Employment disputes, industrial relations, and compliance advisory for both employers and employees.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div style="text-align:center;margin-bottom:50px;">
        <span class="section-tag">Our Experts</span>
        <h2 class="section-title">Meet Our <span>Legal Team</span></h2>
        <p class="section-desc" style="margin:0 auto;">Seasoned advocates dedicated to your case with years of combined expertise.</p>
      </div>
      <div class="team-grid">
        <div class="team-card">
          <div class="team-img"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" alt="Advocate"></div>
          <div class="team-info"><h4>Rajesh Sharma</h4><p>Senior Advocate</p><div class="social"><a href="#">in</a><a href="#">f</a><a href="#">t</a></div></div>
        </div>
        <div class="team-card">
          <div class="team-img"><img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" alt="Advocate"></div>
          <div class="team-info"><h4>Priya Mehta</h4><p>Corporate Law Expert</p><div class="social"><a href="#">in</a><a href="#">f</a><a href="#">t</a></div></div>
        </div>
        <div class="team-card">
          <div class="team-img"><img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80" alt="Advocate"></div>
          <div class="team-info"><h4>Amit Verma</h4><p>Criminal Defense</p><div class="social"><a href="#">in</a><a href="#">f</a><a href="#">t</a></div></div>
        </div>
      </div>
    </section>

    <section class="section testimonial-section">
      <div style="text-align:center;margin-bottom:50px;">
        <span class="section-tag">Client Reviews</span>
        <h2 class="section-title">What Our <span>Clients Say</span></h2>
        <p class="section-desc" style="margin:0 auto;text-align:center;">Real testimonials from clients we've helped over the years.</p>
      </div>
      <div class="testimonial-grid" style="max-width:1000px;margin:0 auto;">
        <div class="testimonial-card">
          <p class="testimonial-text">Rajesh sir handled my property dispute with incredible expertise. What seemed like a hopeless case turned into a complete victory. Highly recommended!</p>
          <div class="testimonial-author">
            <div class="avatar">VK</div>
            <div><h5>Vikram Khanna</h5><p>Property Case Client</p></div>
          </div>
        </div>
        <div class="testimonial-card">
          <p class="testimonial-text">Professional, responsive, and genuinely caring. The team guided me through a difficult divorce with sensitivity and got me fair custody of my children.</p>
          <div class="testimonial-author">
            <div class="avatar">SM</div>
            <div><h5>Sunita Malhotra</h5><p>Family Law Client</p></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section contact-section">
      <div style="text-align:center;margin-bottom:50px;">
        <span class="section-tag" style="color:#d4af37;">Get In Touch</span>
        <h2 class="section-title" style="color:#fff;">Free <span style="color:#d4af37;font-style:italic;">Consultation</span></h2>
        <p class="section-desc" style="margin:0 auto;color:#c8d0dc;">Discuss your case with our experts — confidential and free first consultation.</p>
      </div>
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Let's Discuss <span>Your Case</span></h3>
          <p>Fill out the form and our team will get back to you within 24 hours.</p>
          <div class="contact-item">
            <div class="contact-item-icon">📞</div>
            <div><h5>Call Us</h5><p>+91 93093 32775</p></div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">📧</div>
            <div><h5>Email Us</h5><p>xarctech@gmail.com</p></div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">📍</div>
            <div><h5>Visit Office</h5><p>Bandra, Mumbai, Maharashtra</p></div>
          </div>
          <div class="contact-item">
            <div class="contact-item-icon">🕒</div>
            <div><h5>Working Hours</h5><p>Mon–Sat: 9:00 AM – 8:00 PM</p></div>
          </div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Thank you! We will contact you soon.');">
          <h4>Request Free Consultation</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone Number</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Case Type</label>
            <select required><option>-- Select --</option><option>Civil Case</option><option>Criminal Case</option><option>Corporate Law</option><option>Family Law</option><option>Property Law</option></select>
          </div>
          <div class="form-group"><label>Brief Description</label><textarea placeholder="Describe your case briefly..."></textarea></div>
          <button type="submit" class="btn btn-gold">📅 Book Free Consultation</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div>
          <h4>Sharma & Associates</h4>
          <p>Trusted legal counsel since 1998. Protecting rights, delivering justice, and building a better future for our clients across India.</p>
        </div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Practice Areas</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Practice</h4><ul><li><a href="#">Civil Law</a></li><li><a href="#">Criminal Law</a></li><li><a href="#">Corporate Law</a></li><li><a href="#">Family Law</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai, MH 400050</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Sharma & Associates. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== PROFILE: DOCTOR ==========
  "doctor": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f0f9ff;color:#1e293b;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .topbar{background:linear-gradient(90deg,#0ea5e9,#06b6d4);color:#fff;padding:10px 30px;font-size:13px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;}
      .nav{position:sticky;top:0;background:rgba(255,255,255,0.98);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(10px);box-shadow:0 2px 20px rgba(14,165,233,0.15);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#0ea5e9,#06b6d4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:26px;color:#fff;}
      .nav .logo-text h1{font-size:20px;color:#0f172a;margin:0;}
      .nav .logo-text p{font-size:12px;color:#64748b;margin:0;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#1e293b;font-size:14px;font-weight:500;position:relative;padding:6px 0;transition:color 0.3s;}
      .nav nav a:hover{color:#0ea5e9;}
      .nav .book-btn{background:linear-gradient(135deg,#0ea5e9,#06b6d4);color:#fff;padding:12px 24px;border-radius:30px;font-weight:600;font-size:14px;transition:all 0.3s;box-shadow:0 4px 15px rgba(14,165,233,0.3);}
      .nav .book-btn:hover{transform:translateY(-3px);box-shadow:0 8px 25px rgba(14,165,233,0.5);}
      .hero{position:relative;padding:100px 40px;background:linear-gradient(135deg,#e0f2fe 0%,#f0f9ff 100%);overflow:hidden;}
      .hero::before{content:'';position:absolute;top:-100px;right:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(14,165,233,0.2),transparent 70%);border-radius:50%;}
      .hero::after{content:'';position:absolute;bottom:-100px;left:-100px;width:300px;height:300px;background:radial-gradient(circle,rgba(6,182,212,0.15),transparent 70%);border-radius:50%;}
      .hero-inner{position:relative;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;z-index:1;}
      .hero-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;background:#fff;border-radius:30px;color:#0ea5e9;font-size:13px;font-weight:600;margin-bottom:20px;box-shadow:0 4px 15px rgba(14,165,233,0.15);}
      .hero-badge::before{content:'●';color:#22c55e;animation:pulse 1.5s infinite;}
      @keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.3;}}
      .hero h2{font-size:clamp(34px,5vw,54px);line-height:1.15;color:#0f172a;margin-bottom:22px;}
      .hero h2 span{color:#0ea5e9;}
      .hero-desc{font-size:17px;color:#475569;max-width:560px;margin-bottom:32px;}
      .hero-cta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
      .btn-primary{background:linear-gradient(135deg,#0ea5e9,#06b6d4);color:#fff;padding:16px 32px;border-radius:30px;font-weight:600;font-size:15px;transition:all 0.3s;box-shadow:0 8px 20px rgba(14,165,233,0.35);border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;}
      .btn-primary:hover{transform:translateY(-3px);box-shadow:0 12px 30px rgba(14,165,233,0.5);}
      .btn-secondary{background:#fff;color:#0ea5e9;padding:16px 32px;border-radius:30px;font-weight:600;font-size:15px;transition:all 0.3s;border:2px solid #0ea5e9;cursor:pointer;display:inline-flex;align-items:center;gap:8px;}
      .btn-secondary:hover{background:#0ea5e9;color:#fff;transform:translateY(-3px);}
      .hero-trust{display:flex;gap:30px;flex-wrap:wrap;}
      .hero-trust-item{display:flex;align-items:center;gap:10px;font-size:14px;color:#475569;}
      .hero-trust-item::before{content:'✓';width:24px;height:24px;background:#22c55e;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;flex-shrink:0;}
      .hero-img{position:relative;}
      .hero-img img{width:100%;border-radius:24px;box-shadow:0 25px 60px rgba(14,165,233,0.3);}
      .hero-img .floating-card{position:absolute;bottom:-30px;left:-30px;background:#fff;padding:22px;border-radius:16px;box-shadow:0 15px 40px rgba(0,0,0,0.12);display:flex;align-items:center;gap:14px;animation:float 4s ease-in-out infinite;}
      @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
      .hero-img .floating-card .icon{width:50px;height:50px;background:linear-gradient(135deg,#22c55e,#16a34a);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;}
      .hero-img .floating-card h5{font-size:15px;color:#0f172a;margin-bottom:4px;}
      .hero-img .floating-card p{font-size:13px;color:#64748b;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#0ea5e9;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-size:clamp(30px,4vw,44px);color:#0f172a;margin-bottom:18px;line-height:1.2;}
      .section-title span{color:#0ea5e9;}
      .section-desc{font-size:16px;color:#64748b;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .service-card{background:#fff;padding:40px 30px;border-radius:20px;box-shadow:0 4px 25px rgba(14,165,233,0.08);transition:all 0.4s;position:relative;overflow:hidden;}
      .service-card::before{content:'';position:absolute;top:0;right:0;width:100px;height:100px;background:radial-gradient(circle,rgba(14,165,233,0.1),transparent);border-radius:50%;transition:all 0.4s;}
      .service-card:hover{transform:translateY(-8px);box-shadow:0 20px 50px rgba(14,165,233,0.2);}
      .service-card:hover::before{width:200px;height:200px;}
      .service-icon{width:70px;height:70px;background:linear-gradient(135deg,#e0f2fe,#bae6fd);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:32px;margin-bottom:22px;transition:transform 0.4s;}
      .service-card:hover .service-icon{transform:scale(1.1) rotate(-8deg);background:linear-gradient(135deg,#0ea5e9,#06b6d4);}
      .service-card h4{font-size:21px;color:#0f172a;margin-bottom:12px;}
      .service-card p{font-size:14px;color:#64748b;line-height:1.7;}
      .about{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);}
      .about-inner{max-width:1200px;margin:0 auto;padding:90px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(14,165,233,0.25);position:relative;}
      .about-img img{width:100%;height:520px;object-fit:cover;}
      .about-img .badge{position:absolute;top:20px;right:20px;background:#22c55e;color:#fff;padding:8px 16px;border-radius:20px;font-size:12px;font-weight:600;letter-spacing:1px;}
      .about-content h3{font-size:32px;color:#0f172a;margin-bottom:22px;line-height:1.3;}
      .about-content h3 span{color:#0ea5e9;}
      .about-content p{font-size:16px;color:#475569;margin-bottom:18px;line-height:1.8;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:12px;background:#fff;padding:16px 20px;border-radius:12px;font-size:14px;font-weight:500;color:#0f172a;box-shadow:0 2px 10px rgba(14,165,233,0.08);transition:all 0.3s;}
      .about-feat:hover{transform:translateX(6px);box-shadow:0 4px 20px rgba(14,165,233,0.15);}
      .about-feat::before{content:'✓';width:26px;height:26px;background:#0ea5e9;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;flex-shrink:0;}
      .stats-section{background:linear-gradient(135deg,#0ea5e9,#06b6d4);color:#fff;padding:80px 40px;}
      .stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:40px;text-align:center;}
      .stat-item h3{font-size:52px;font-weight:800;margin-bottom:8px;}
      .stat-item p{font-size:15px;opacity:0.9;}
      .doctors-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;}
      .doctor-card{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(14,165,233,0.12);transition:all 0.4s;}
      .doctor-card:hover{transform:translateY(-10px);box-shadow:0 25px 60px rgba(14,165,233,0.25);}
      .doctor-img{height:320px;overflow:hidden;position:relative;}
      .doctor-img img{width:100%;height:100%;object-fit:cover;transition:transform 0.6s;}
      .doctor-card:hover .doctor-img img{transform:scale(1.08);}
      .doctor-info{padding:26px;text-align:center;}
      .doctor-info h4{font-size:21px;color:#0f172a;margin-bottom:6px;}
      .doctor-info .specialty{color:#0ea5e9;font-weight:600;font-size:14px;margin-bottom:6px;}
      .doctor-info .qual{color:#64748b;font-size:13px;margin-bottom:16px;}
      .doctor-info .social{display:flex;justify-content:center;gap:10px;}
      .doctor-info .social a{width:38px;height:38px;background:#e0f2fe;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#0ea5e9;font-size:15px;font-weight:bold;transition:all 0.3s;}
      .doctor-info .social a:hover{background:#0ea5e9;color:#fff;transform:translateY(-3px);}
      .testimonial-section{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);}
      .testimonial-inner{max-width:1200px;margin:0 auto;padding:90px 40px;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:50px;}
      .testimonial-card{background:#fff;padding:36px 30px;border-radius:20px;box-shadow:0 4px 20px rgba(14,165,233,0.1);transition:all 0.4s;position:relative;}
      .testimonial-card:hover{transform:translateY(-8px);box-shadow:0 20px 50px rgba(14,165,233,0.2);}
      .testimonial-stars{color:#fbbf24;font-size:20px;margin-bottom:14px;letter-spacing:2px;}
      .testimonial-text{font-size:15px;color:#475569;line-height:1.8;margin-bottom:22px;font-style:italic;}
      .testimonial-author{display:flex;align-items:center;gap:14px;}
      .testimonial-author .avatar{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#0ea5e9,#06b6d4);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:18px;}
      .testimonial-author h5{font-size:15px;color:#0f172a;margin-bottom:4px;}
      .testimonial-author p{font-size:12px;color:#64748b;}
      .contact-section{background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;}
      .contact-inner{max-width:1200px;margin:0 auto;padding:90px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;}
      .contact-info h3{font-size:34px;color:#fff;margin-bottom:20px;}
      .contact-info h3 span{color:#0ea5e9;}
      .contact-info > p{color:#cbd5e1;margin-bottom:32px;}
      .contact-item{display:flex;gap:16px;margin-bottom:26px;align-items:flex-start;}
      .contact-item-icon{width:54px;height:54px;background:rgba(14,165,233,0.15);border:1px solid rgba(14,165,233,0.3);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .contact-item-icon{background:#0ea5e9;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#0ea5e9;margin-bottom:4px;letter-spacing:1px;text-transform:uppercase;}
      .contact-item p{font-size:15px;color:#fff;}
      .contact-form{background:rgba(255,255,255,0.04);padding:40px;border-radius:20px;border:1px solid rgba(14,165,233,0.2);}
      .contact-form h4{color:#0ea5e9;font-size:23px;margin-bottom:24px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#cbd5e1;font-size:13px;margin-bottom:8px;font-weight:500;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:rgba(0,0,0,0.3);border:1px solid rgba(14,165,233,0.3);border-radius:10px;color:#fff;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#0ea5e9;background:rgba(0,0,0,0.5);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-primary{width:100%;justify-content:center;margin-top:10px;}
      .footer{background:#020617;color:#94a3b8;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#0ea5e9;font-size:18px;margin-bottom:20px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:14px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#94a3b8;font-size:14px;transition:color 0.3s;}
      .footer ul a:hover{color:#0ea5e9;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(14,165,233,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;}
        .hero{padding:60px 20px;}
        .hero-inner{grid-template-columns:1fr;gap:40px;}
        .hero-img .floating-card{position:static;margin-top:20px;}
        .section,.about-inner,.testimonial-inner,.contact-inner{padding:60px 20px;}
        .services-grid,.doctors-grid,.testimonial-grid,.about-inner,.contact-inner{grid-template-columns:1fr;gap:24px;}
        .about-img img{height:340px;}
        .stats-inner{grid-template-columns:1fr 1fr;gap:30px;}
        .stat-item h3{font-size:38px;}
        .footer-top{grid-template-columns:1fr 1fr;}
      }
      @media(max-width:600px){
        .about-features{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn-primary,.btn-secondary{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
        .footer-top{grid-template-columns:1fr;}
        .topbar{justify-content:center;text-align:center;font-size:11px;}
      }
    </style></head><body>

    <div class="topbar">
      <span>📞 +91 93093 32775</span>
      <span>📧 xarctech@gmail.com</span>
      <span>🕒 Mon–Sat: 9AM – 7PM</span>
    </div>

    <header class="nav">
      <div class="logo">
        <div class="logo-icon">⚕</div>
        <div class="logo-text"><h1>Dr. Patel Clinic</h1><p>Multi-Specialty Healthcare Center</p></div>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Doctors</a>
        <a href="#">Contact</a>
      </nav>
      <a href="#" class="book-btn">📅 Book Appointment</a>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <div>
          <span class="hero-badge">Accepting New Patients</span>
          <h2>Your Health,<br><span>Our Priority</span></h2>
          <p class="hero-desc">Compassionate, comprehensive healthcare for your entire family. Book your appointment with our experienced doctors today.</p>
          <div class="hero-cta">
            <a href="#" class="btn-primary">📅 Book Appointment</a>
            <a href="#" class="btn-secondary">📞 Call Now</a>
          </div>
          <div class="hero-trust">
            <div class="hero-trust-item">24/7 Emergency Care</div>
            <div class="hero-trust-item">Certified Specialists</div>
            <div class="hero-trust-item">Modern Equipment</div>
          </div>
        </div>
        <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" alt="Doctor">
          <div class="floating-card">
            <div class="icon">✓</div>
            <div><h5>5,000+ Happy Patients</h5><p>Trusted since 2005</p></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Our Services</span>
        <h2 class="section-title">Comprehensive <span>Healthcare Services</span></h2>
        <p class="section-desc">From routine checkups to specialized treatments — we've got your complete health covered.</p>
      </div>
      <div class="services-grid">
        <div class="service-card"><div class="service-icon">🩺</div><h4>General Checkup</h4><p>Routine health screenings, preventive care, and comprehensive health assessments for all ages.</p></div>
        <div class="service-card"><div class="service-icon">💉</div><h4>Vaccinations</h4><p>Complete vaccination services for children and adults with all recommended immunizations.</p></div>
        <div class="service-card"><div class="service-icon">❤️</div><h4>Cardiology</h4><p>Heart health monitoring, ECG testing, and expert consultation with cardiologists.</p></div>
        <div class="service-card"><div class="service-icon">🧪</div><h4>Lab Tests</h4><p>Fast, accurate diagnostic lab services with same-day report delivery.</p></div>
        <div class="service-card"><div class="service-icon">🦷</div><h4>Dental Care</h4><p>Complete dental services from cleaning to cosmetic procedures.</p></div>
        <div class="service-card"><div class="service-icon">👶</div><h4>Pediatrics</h4><p>Specialized childcare from newborns to teenagers with expert pediatricians.</p></div>
      </div>
    </section>

    <section class="about">
      <div class="about-inner">
        <div class="about-img">
          <img src="https://images.unsplash.com/photo-1631815589068-a3a4f1e13c46?auto=format&fit=crop&w=800&q=80" alt="Clinic">
          <div class="badge">✓ CERTIFIED</div>
        </div>
        <div class="about-content">
          <span class="section-tag">About Us</span>
          <h3>Trusted Healthcare <span>For Over 20 Years</span></h3>
          <p>At Dr. Patel Clinic, we believe healthcare should be accessible, compassionate, and world-class. Our team of experienced doctors combines modern technology with genuine care.</p>
          <p>From your first visit to ongoing treatment, we're committed to providing the highest standard of medical care in a comfortable, welcoming environment.</p>
          <div class="about-features">
            <div class="about-feat">Expert Doctors</div>
            <div class="about-feat">Modern Equipment</div>
            <div class="about-feat">Affordable Rates</div>
            <div class="about-feat">Easy Scheduling</div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-inner">
        <div class="stat-item"><h3>20+</h3><p>Years Experience</p></div>
        <div class="stat-item"><h3>5,000+</h3><p>Happy Patients</p></div>
        <div class="stat-item"><h3>15+</h3><p>Expert Doctors</p></div>
        <div class="stat-item"><h3>24/7</h3><p>Emergency Care</p></div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Our Team</span>
        <h2 class="section-title">Meet Our <span>Expert Doctors</span></h2>
        <p class="section-desc">Highly qualified specialists dedicated to your well-being.</p>
      </div>
      <div class="doctors-grid">
        <div class="doctor-card">
          <div class="doctor-img"><img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80" alt="Doctor"></div>
          <div class="doctor-info"><h4>Dr. Rajesh Patel</h4><div class="specialty">General Physician</div><div class="qual">MBBS, MD - 15 years exp</div><div class="social"><a href="#">f</a><a href="#">t</a><a href="#">in</a></div></div>
        </div>
        <div class="doctor-card">
          <div class="doctor-img"><img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" alt="Doctor"></div>
          <div class="doctor-info"><h4>Dr. Priya Sharma</h4><div class="specialty">Pediatrician</div><div class="qual">MBBS, DCH - 12 years exp</div><div class="social"><a href="#">f</a><a href="#">t</a><a href="#">in</a></div></div>
        </div>
        <div class="doctor-card">
          <div class="doctor-img"><img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" alt="Doctor"></div>
          <div class="doctor-info"><h4>Dr. Amit Kumar</h4><div class="specialty">Cardiologist</div><div class="qual">MBBS, DM - 18 years exp</div><div class="social"><a href="#">f</a><a href="#">t</a><a href="#">in</a></div></div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="testimonial-inner">
        <div class="section-header">
          <span class="section-tag">Testimonials</span>
          <h2 class="section-title">What Our <span>Patients Say</span></h2>
          <p class="section-desc">Real stories from real patients who trust us with their health.</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">Excellent care and very professional doctors. The staff is friendly and the clinic is spotless. Highly recommend!</p>
            <div class="testimonial-author"><div class="avatar">RK</div><div><h5>Ramesh Kumar</h5><p>Regular Patient</p></div></div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">Dr. Priya is amazing with kids. My daughter actually looks forward to her checkups now! Such a caring doctor.</p>
            <div class="testimonial-author"><div class="avatar">SP</div><div><h5>Sunita Patel</h5><p>Parent</p></div></div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">Quick appointments, thorough diagnosis, and reasonable fees. This is how healthcare should be!</p>
            <div class="testimonial-author"><div class="avatar">AM</div><div><h5>Arjun Mehta</h5><p>Patient</p></div></div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Book Your <span>Appointment</span></h3>
          <p>Fill the form and our team will confirm your appointment within 2 hours.</p>
          <div class="contact-item"><div class="contact-item-icon">📞</div><div><h5>Call Us</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="contact-item-icon">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="contact-item-icon">📍</div><div><h5>Clinic Address</h5><p>Bandra, Mumbai, Maharashtra</p></div></div>
          <div class="contact-item"><div class="contact-item-icon">🕒</div><div><h5>Hours</h5><p>Mon–Sat: 9AM–7PM | Sun: Emergency Only</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Appointment request sent!');">
          <h4>Request Appointment</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone Number</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Department</label><select required><option>-- Select --</option><option>General Checkup</option><option>Cardiology</option><option>Pediatrics</option><option>Dental</option><option>Lab Tests</option></select></div>
          <div class="form-group"><label>Preferred Date</label><input type="date" required></div>
          <div class="form-group"><label>Message</label><textarea placeholder="Describe your concern..."></textarea></div>
          <button type="submit" class="btn-primary">📅 Book Appointment</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>Dr. Patel Clinic</h4><p>Providing compassionate, comprehensive healthcare to families since 2005. Your health is our mission.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Services</a></li><li><a href="#">Doctors</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Services</h4><ul><li><a href="#">General Care</a></li><li><a href="#">Cardiology</a></li><li><a href="#">Pediatrics</a></li><li><a href="#">Dental</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Dr. Patel Clinic. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== CRYPTO 1: TOKEN LANDING ==========
  "crypto1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#05070d;color:#fff;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(5,7,13,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(130,71,229,0.3);z-index:100;backdrop-filter:blur(12px);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:48px;height:48px;background:linear-gradient(135deg,#8247e5,#00d4ff);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;box-shadow:0 0 20px rgba(130,71,229,0.6);}
      .nav .logo-text{font-family:'Orbitron',sans-serif;font-weight:900;font-size:20px;background:linear-gradient(90deg,#8247e5,#00d4ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:2px;}
      .nav nav{display:flex;gap:30px;}
      .nav nav a{color:#fff;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#8247e5;}
      .nav .connect-btn{padding:12px 24px;background:linear-gradient(135deg,#8247e5,#00d4ff);color:#fff;border-radius:30px;font-weight:600;font-size:14px;border:none;cursor:pointer;transition:all 0.3s;box-shadow:0 0 20px rgba(130,71,229,0.5);}
      .nav .connect-btn:hover{transform:translateY(-3px);box-shadow:0 0 40px rgba(130,71,229,0.8);}
      .hero{position:relative;padding:120px 40px 100px;text-align:center;background:radial-gradient(ellipse at 50% 0%,rgba(130,71,229,0.35),transparent 60%);overflow:hidden;}
      .hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(130,71,229,0.15) 1px,transparent 1px);background-size:40px 40px;opacity:0.5;animation:dotsMove 20s linear infinite;}
      @keyframes dotsMove{from{background-position:0 0;}to{background-position:400px 400px;}}
      .hero-content{position:relative;z-index:1;max-width:900px;margin:0 auto;}
      .hero-badge{display:inline-flex;align-items:center;gap:10px;padding:8px 22px;background:rgba(130,71,229,0.2);border:1px solid rgba(130,71,229,0.5);border-radius:30px;font-size:13px;margin-bottom:26px;animation:fadeUp 1s ease;}
      .hero-badge .live{width:8px;height:8px;background:#22c55e;border-radius:50%;box-shadow:0 0 10px #22c55e;animation:pulse 1.5s infinite;}
      @keyframes pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(1.3);}}
      @keyframes fadeUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
      .hero h1{font-family:'Orbitron',sans-serif;font-size:clamp(40px,7vw,80px);line-height:1.1;font-weight:900;margin-bottom:24px;background:linear-gradient(90deg,#8247e5,#00d4ff,#ff00cc,#8247e5);background-size:300% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shine 4s linear infinite,fadeUp 1s ease 0.2s backwards;}
      @keyframes shine{to{background-position:300% center;}}
      .hero p{font-size:18px;color:#a8b0bc;max-width:640px;margin:0 auto 40px;animation:fadeUp 1s ease 0.4s backwards;}
      .hero-cta{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-bottom:60px;animation:fadeUp 1s ease 0.6s backwards;}
      .btn{padding:16px 40px;border-radius:30px;font-weight:700;font-size:15px;border:none;cursor:pointer;transition:all 0.3s;display:inline-flex;align-items:center;gap:8px;}
      .btn-grad{background:linear-gradient(135deg,#8247e5,#00d4ff);color:#fff;box-shadow:0 0 30px rgba(130,71,229,0.6);}
      .btn-grad:hover{transform:translateY(-4px);box-shadow:0 0 50px rgba(130,71,229,1);}
      .btn-outline{border:2px solid #8247e5;color:#8247e5;background:transparent;}
      .btn-outline:hover{background:#8247e5;color:#fff;transform:translateY(-4px);}
      .hero-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:900px;margin:0 auto;animation:fadeUp 1s ease 0.8s backwards;}
      .hero-stat{background:rgba(130,71,229,0.08);border:1px solid rgba(130,71,229,0.3);padding:24px;border-radius:16px;transition:all 0.3s;}
      .hero-stat:hover{background:rgba(130,71,229,0.15);transform:translateY(-5px);box-shadow:0 10px 40px rgba(130,71,229,0.4);}
      .hero-stat h3{font-family:'Orbitron',sans-serif;font-size:28px;background:linear-gradient(90deg,#8247e5,#00d4ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:6px;}
      .hero-stat p{font-size:12px;color:#a8b0bc;text-transform:uppercase;letter-spacing:1px;}
      .section{padding:100px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#00d4ff;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-family:'Orbitron',sans-serif;font-size:clamp(32px,5vw,48px);margin-bottom:20px;line-height:1.2;background:linear-gradient(90deg,#8247e5,#00d4ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .section-desc{font-size:16px;color:#a8b0bc;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .feature-card{background:linear-gradient(160deg,rgba(130,71,229,0.08),rgba(0,212,255,0.02));border:1px solid rgba(130,71,229,0.3);padding:40px 30px;border-radius:20px;transition:all 0.4s;position:relative;overflow:hidden;}
      .feature-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(90deg,#8247e5,#00d4ff);transform:scaleX(0);transform-origin:left;transition:transform 0.4s;}
      .feature-card:hover{transform:translateY(-8px);border-color:#8247e5;box-shadow:0 20px 60px rgba(130,71,229,0.4);}
      .feature-card:hover::before{transform:scaleX(1);}
      .feature-icon{width:64px;height:64px;background:linear-gradient(135deg,#8247e5,#00d4ff);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:30px;margin-bottom:22px;box-shadow:0 8px 25px rgba(130,71,229,0.5);transition:transform 0.4s;}
      .feature-card:hover .feature-icon{transform:rotate(-10deg) scale(1.1);}
      .feature-card h4{font-family:'Orbitron',sans-serif;font-size:20px;color:#fff;margin-bottom:12px;}
      .feature-card p{font-size:14px;color:#a8b0bc;line-height:1.7;}
      .tokenomics{background:linear-gradient(180deg,transparent,rgba(130,71,229,0.08),transparent);}
      .tokenomics-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;}
      .tokenomics-chart{position:relative;width:100%;max-width:400px;margin:0 auto;aspect-ratio:1;}
      .tokenomics-chart svg{width:100%;height:100%;}
      .tokenomics-list{display:flex;flex-direction:column;gap:16px;}
      .tokenomics-item{display:flex;justify-content:space-between;align-items:center;padding:20px 24px;background:rgba(130,71,229,0.08);border:1px solid rgba(130,71,229,0.3);border-radius:12px;transition:all 0.3s;}
      .tokenomics-item:hover{background:rgba(130,71,229,0.15);transform:translateX(8px);}
      .tokenomics-item .label{display:flex;align-items:center;gap:12px;font-size:15px;color:#fff;}
      .tokenomics-item .dot{width:14px;height:14px;border-radius:50%;box-shadow:0 0 10px currentColor;}
      .tokenomics-item .value{font-family:'Orbitron',sans-serif;font-weight:700;font-size:18px;color:#00d4ff;}
      .roadmap-section{background:linear-gradient(180deg,transparent,rgba(0,212,255,0.05),transparent);}
      .roadmap{position:relative;max-width:900px;margin:0 auto;}
      .roadmap::before{content:'';position:absolute;left:50%;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#8247e5,#00d4ff);transform:translateX(-50%);}
      .roadmap-item{position:relative;width:50%;padding:20px 40px;margin-bottom:30px;background:rgba(130,71,229,0.08);border:1px solid rgba(130,71,229,0.3);border-radius:16px;transition:all 0.4s;}
      .roadmap-item:nth-child(odd){margin-left:0;}
      .roadmap-item:nth-child(even){margin-left:50%;}
      .roadmap-item::before{content:'';position:absolute;top:30px;width:20px;height:20px;background:#00d4ff;border-radius:50%;box-shadow:0 0 20px #00d4ff;border:3px solid #05070d;}
      .roadmap-item:nth-child(odd)::before{right:-10px;}
      .roadmap-item:nth-child(even)::before{left:-10px;}
      .roadmap-item:hover{transform:scale(1.03);border-color:#00d4ff;box-shadow:0 0 30px rgba(0,212,255,0.4);}
      .roadmap-item h4{font-family:'Orbitron',sans-serif;color:#00d4ff;font-size:16px;margin-bottom:8px;}
      .roadmap-item p{font-size:14px;color:#a8b0bc;line-height:1.6;}
      .roadmap-item .quarter{display:inline-block;padding:4px 12px;background:linear-gradient(90deg,#8247e5,#00d4ff);border-radius:20px;font-size:11px;font-weight:700;color:#fff;margin-bottom:10px;letter-spacing:1px;}
      .buy-section{background:linear-gradient(135deg,#0f0a1f,#05070d);text-align:center;}
      .buy-inner{max-width:700px;margin:0 auto;padding:100px 40px;}
      .buy-box{background:linear-gradient(160deg,rgba(130,71,229,0.15),rgba(0,212,255,0.05));border:2px solid #8247e5;border-radius:24px;padding:50px 40px;box-shadow:0 0 80px rgba(130,71,229,0.4);}
      .buy-box h3{font-family:'Orbitron',sans-serif;font-size:32px;color:#fff;margin-bottom:12px;}
      .buy-box > p{color:#a8b0bc;margin-bottom:30px;}
      .buy-rate{display:flex;justify-content:space-between;padding:16px;background:rgba(0,0,0,0.3);border-radius:12px;margin-bottom:14px;}
      .buy-rate span{color:#a8b0bc;font-size:14px;}
      .buy-rate b{color:#00d4ff;font-family:'Orbitron',sans-serif;}
      .buy-input{width:100%;padding:18px;background:rgba(0,0,0,0.4);border:1px solid rgba(130,71,229,0.4);border-radius:12px;color:#fff;font-size:18px;text-align:center;margin-bottom:14px;font-family:'Orbitron',sans-serif;}
      .buy-input:focus{outline:none;border-color:#00d4ff;}
      .buy-box .btn-grad{width:100%;justify-content:center;margin-top:14px;}
      .footer{background:#020308;color:#7a8490;padding:60px 40px 30px;border-top:1px solid rgba(130,71,229,0.2);}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#00d4ff;font-family:'Orbitron',sans-serif;font-size:16px;margin-bottom:20px;letter-spacing:1px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:14px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#7a8490;font-size:14px;transition:color 0.3s;}
      .footer ul a:hover{color:#00d4ff;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(130,71,229,0.2);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:60px 20px;}
        .hero-stats{grid-template-columns:1fr 1fr;}
        .section,.buy-inner{padding:60px 20px;}
        .features-grid,.tokenomics-grid,.footer-top{grid-template-columns:1fr;gap:24px;}
        .roadmap::before{left:20px;}
        .roadmap-item,.roadmap-item:nth-child(odd),.roadmap-item:nth-child(even){width:calc(100% - 40px);margin-left:40px;padding:18px 24px;}
        .roadmap-item::before,.roadmap-item:nth-child(odd)::before,.roadmap-item:nth-child(even)::before{left:-32px;right:auto;}
      }
      @media(max-width:600px){
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .footer-top{grid-template-columns:1fr;}
        .buy-box{padding:30px 22px;}
        .tokenomics-chart{max-width:280px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo">
        <div class="logo-icon">◆</div>
        <div class="logo-text">NEON COIN</div>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Tokenomics</a>
        <a href="#">Roadmap</a>
        <a href="#">Buy</a>
      </nav>
      <button class="connect-btn">🔗 Connect Wallet</button>
    </header>

    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge"><span class="live"></span> LIVE ON POLYGON NETWORK</div>
        <h1>NEXT-GEN TOKEN ON POLYGON</h1>
        <p>Fast, secure, and built for the future of DeFi. Join 12,500+ holders in the $NEON revolution — audited, deflationary, and community-driven.</p>
        <div class="hero-cta">
          <button class="btn btn-grad">🚀 Buy $NEON Now</button>
          <button class="btn btn-outline">📄 Read Whitepaper</button>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><h3>$2.4M</h3><p>Liquidity Locked</p></div>
          <div class="hero-stat"><h3>12,500+</h3><p>Holders</p></div>
          <div class="hero-stat"><h3>$0.042</h3><p>Current Price</p></div>
          <div class="hero-stat"><h3>99.9%</h3><p>Uptime</p></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Why Choose Us</span>
        <h2 class="section-title">Why $NEON?</h2>
        <p class="section-desc">Built by developers, for the community. Every feature is designed to give you the best DeFi experience.</p>
      </div>
      <div class="features-grid">
        <div class="feature-card"><div class="feature-icon">⚡</div><h4>Lightning Fast</h4><p>Built on Polygon for near-instant transactions with negligible gas fees. Trade without worrying about congestion.</p></div>
        <div class="feature-card"><div class="feature-icon">🔒</div><h4>Fully Audited</h4><p>Smart contract audited by leading security firms. Your funds are safe with us — verified and transparent code.</p></div>
        <div class="feature-card"><div class="feature-icon">💎</div><h4>Deflationary Supply</h4><p>Automatic burn mechanism on every transaction reduces total supply, making your tokens more valuable over time.</p></div>
        <div class="feature-card"><div class="feature-icon">👥</div><h4>Community Owned</h4><p>DAO governance gives every holder a voice. Vote on proposals, updates, and treasury allocations.</p></div>
        <div class="feature-card"><div class="feature-icon">🎁</div><h4>Staking Rewards</h4><p>Earn passive income by staking your $NEON tokens. Up to 24% APY with no lock-up period.</p></div>
        <div class="feature-card"><div class="feature-icon">🛡️</div><h4>Liquidity Locked</h4><p>Liquidity locked for 2 years — no rug pulls, no hidden tricks. Just a fair and honest launch.</p></div>
      </div>
    </section>

    <section class="section tokenomics">
      <div class="section-header">
        <span class="section-tag">Token Distribution</span>
        <h2 class="section-title">Tokenomics</h2>
        <p class="section-desc">Transparent token distribution — no hidden allocations.</p>
      </div>
      <div class="tokenomics-grid">
        <div class="tokenomics-chart">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(130,71,229,0.2)" stroke-width="20"/>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#8247e5" stroke-width="20" stroke-dasharray="100.5 251.3" stroke-dashoffset="0" transform="rotate(-90 50 50)"/>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#00d4ff" stroke-width="20" stroke-dasharray="62.8 251.3" stroke-dashoffset="-100.5" transform="rotate(-90 50 50)"/>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#ff00cc" stroke-width="20" stroke-dasharray="50.3 251.3" stroke-dashoffset="-163.3" transform="rotate(-90 50 50)"/>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#ffd700" stroke-width="20" stroke-dasharray="37.7 251.3" stroke-dashoffset="-213.6" transform="rotate(-90 50 50)"/>
            <text x="50" y="48" text-anchor="middle" fill="#fff" font-size="8" font-family="Orbitron" font-weight="900">1B</text>
            <text x="50" y="58" text-anchor="middle" fill="#a8b0bc" font-size="4">TOTAL SUPPLY</text>
          </svg>
        </div>
        <div class="tokenomics-list">
          <div class="tokenomics-item"><div class="label"><span class="dot" style="background:#8247e5;color:#8247e5;"></span> Liquidity Pool</div><div class="value">40%</div></div>
          <div class="tokenomics-item"><div class="label"><span class="dot" style="background:#00d4ff;color:#00d4ff;"></span> Staking Rewards</div><div class="value">25%</div></div>
          <div class="tokenomics-item"><div class="label"><span class="dot" style="background:#ff00cc;color:#ff00cc;"></span> Team & Development</div><div class="value">20%</div></div>
          <div class="tokenomics-item"><div class="label"><span class="dot" style="background:#ffd700;color:#ffd700;"></span> Marketing & Community</div><div class="value">15%</div></div>
        </div>
      </div>
    </section>

    <section class="section roadmap-section">
      <div class="section-header">
        <span class="section-tag">Our Journey</span>
        <h2 class="section-title">Roadmap</h2>
        <p class="section-desc">Here's what we've achieved and where we're heading.</p>
      </div>
      <div class="roadmap">
        <div class="roadmap-item"><span class="quarter">Q1 2026</span><h4>✓ Launch & Audit</h4><p>Token launch on Polygon, smart contract audit, initial liquidity lock.</p></div>
        <div class="roadmap-item"><span class="quarter">Q2 2026</span><h4>✓ DEX Listings</h4><p>Listed on QuickSwap, Uniswap. Reached 5,000 holders milestone.</p></div>
        <div class="roadmap-item"><span class="quarter">Q3 2026</span><h4>🚧 Staking Platform</h4><p>Launch of staking dApp with 24% APY. Community governance portal.</p></div>
        <div class="roadmap-item"><span class="quarter">Q4 2026</span><h4>📋 NFT Marketplace</h4><p>Launch NFT marketplace. Partnership with major DeFi protocols.</p></div>
      </div>
    </section>

    <section class="buy-section">
      <div class="buy-inner">
        <div class="buy-box">
          <h3>Buy $NEON Now</h3>
          <p>Exchange POL for $NEON at the best rates</p>
          <div class="buy-rate"><span>You Pay</span><b>1.00 POL</b></div>
          <div class="buy-rate"><span>You Get</span><b>1,250 NEON</b></div>
          <input type="text" class="buy-input" placeholder="Enter amount" value="1.00">
          <button class="btn btn-grad">🚀 Confirm Purchase</button>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>NEON COIN</h4><p>The next generation of DeFi tokens. Built on Polygon, owned by community. Join the revolution today.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Tokenomics</a></li><li><a href="#">Roadmap</a></li><li><a href="#">Whitepaper</a></li></ul></div>
        <div><h4>Community</h4><ul><li><a href="#">Telegram</a></li><li><a href="#">Twitter</a></li><li><a href="#">Discord</a></li><li><a href="#">Medium</a></li></ul></div>
        <div><h4>Resources</h4><ul><li><a href="#">Audit Report</a></li><li><a href="#">Contract</a></li><li><a href="#">Docs</a></li><li><a href="#">Support</a></li></ul></div>
      </div>
      <div class="footer-bottom">© 2026 Neon Coin. All rights reserved. | Built by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== CRYPTO 2: BONDING CURVE DAPP ==========
  "crypto2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#0a0805;color:#fff;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(10,8,5,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,215,0,0.3);z-index:100;backdrop-filter:blur(12px);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:48px;height:48px;background:linear-gradient(135deg,#ffd700,#ff8c00);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#000;box-shadow:0 0 20px rgba(255,180,0,0.6);}
      .nav .logo-text{font-family:'Orbitron',sans-serif;font-weight:900;font-size:20px;background:linear-gradient(90deg,#ffd700,#ff8c00);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:2px;}
      .nav nav{display:flex;gap:30px;}
      .nav nav a{color:#fff;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#ffd700;}
      .nav .connect-btn{padding:12px 24px;background:linear-gradient(135deg,#ffd700,#ff8c00);color:#000;border-radius:30px;font-weight:700;font-size:14px;border:none;cursor:pointer;transition:all 0.3s;box-shadow:0 0 20px rgba(255,180,0,0.5);}
      .nav .connect-btn:hover{transform:translateY(-3px);box-shadow:0 0 40px rgba(255,180,0,0.9);}
      .hero{position:relative;padding:120px 40px 80px;background:radial-gradient(ellipse at 50% 0%,rgba(255,180,0,0.3),transparent 60%);overflow:hidden;}
      .hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(255,215,0,0.12) 1px,transparent 1px);background-size:40px 40px;opacity:0.5;animation:dotsMove 20s linear infinite;}
      @keyframes dotsMove{from{background-position:0 0;}to{background-position:400px 400px;}}
      .hero-inner{position:relative;z-index:1;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center;}
      .hero-badge{display:inline-flex;align-items:center;gap:10px;padding:8px 22px;background:rgba(255,180,0,0.15);border:1px solid rgba(255,215,0,0.5);border-radius:30px;font-size:13px;margin-bottom:26px;color:#ffd700;font-weight:600;}
      .hero h1{font-family:'Orbitron',sans-serif;font-size:clamp(36px,6vw,64px);line-height:1.1;font-weight:900;margin-bottom:24px;background:linear-gradient(90deg,#ffd700,#ff8c00,#ffd700);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shine 4s linear infinite;}
      @keyframes shine{to{background-position:200% center;}}
      .hero p{font-size:17px;color:#b8a880;margin-bottom:32px;max-width:560px;}
      .hero-cta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
      .btn{padding:16px 36px;border-radius:30px;font-weight:700;font-size:15px;border:none;cursor:pointer;transition:all 0.3s;display:inline-flex;align-items:center;gap:8px;}
      .btn-gold{background:linear-gradient(135deg,#ffd700,#ff8c00);color:#000;box-shadow:0 0 30px rgba(255,180,0,0.6);}
      .btn-gold:hover{transform:translateY(-4px);box-shadow:0 0 50px rgba(255,180,0,1);}
      .btn-outline{border:2px solid #ffd700;color:#ffd700;background:transparent;}
      .btn-outline:hover{background:#ffd700;color:#000;transform:translateY(-4px);}
      .hero-mini-stats{display:flex;gap:30px;flex-wrap:wrap;}
      .mini-stat{display:flex;flex-direction:column;}
      .mini-stat b{font-family:'Orbitron',sans-serif;font-size:22px;color:#ffd700;}
      .mini-stat span{font-size:12px;color:#b8a880;text-transform:uppercase;letter-spacing:1px;}
      .chart-card{background:linear-gradient(160deg,rgba(255,215,0,0.1),rgba(255,140,0,0.02));border:1px solid rgba(255,215,0,0.4);border-radius:20px;padding:30px;box-shadow:0 20px 60px rgba(255,180,0,0.2);}
      .chart-card h4{font-family:'Orbitron',sans-serif;font-size:16px;color:#ffd700;margin-bottom:8px;}
      .chart-card .price-now{font-family:'Orbitron',sans-serif;font-size:36px;font-weight:900;color:#fff;margin-bottom:4px;}
      .chart-card .price-change{color:#22c55e;font-size:14px;font-weight:600;margin-bottom:24px;}
      .chart-bars{display:flex;align-items:flex-end;gap:6px;height:180px;margin-bottom:20px;padding:0 4px;}
      .chart-bars .bar{flex:1;background:linear-gradient(180deg,#ffd700,#ff8c00);border-radius:4px 4px 0 0;transition:all 0.3s;position:relative;cursor:pointer;min-height:10px;}
      .chart-bars .bar:hover{transform:scaleY(1.05);box-shadow:0 0 20px rgba(255,180,0,0.8);}
      .chart-bars .bar::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(255,255,255,0.2));border-radius:inherit;}
      .chart-labels{display:flex;justify-content:space-between;font-size:11px;color:#b8a880;}
      .section{padding:100px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#ffd700;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-family:'Orbitron',sans-serif;font-size:clamp(32px,5vw,48px);color:#fff;margin-bottom:20px;line-height:1.2;}
      .section-desc{font-size:16px;color:#b8a880;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .levels-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
      .level-card{background:linear-gradient(160deg,rgba(255,215,0,0.08),rgba(0,0,0,0.3));border:1px solid rgba(255,215,0,0.3);border-radius:20px;padding:32px 24px;text-align:center;position:relative;overflow:hidden;transition:all 0.4s;}
      .level-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#ffd700,#ff8c00);}
      .level-card:hover{transform:translateY(-8px);border-color:#ffd700;box-shadow:0 20px 50px rgba(255,180,0,0.4);}
      .level-card .level-num{font-family:'Orbitron',sans-serif;font-size:14px;color:#ffd700;letter-spacing:2px;margin-bottom:10px;}
      .level-card .level-percent{font-family:'Orbitron',sans-serif;font-size:48px;font-weight:900;background:linear-gradient(90deg,#ffd700,#ff8c00);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;line-height:1;}
      .level-card .level-percent small{font-size:20px;}
      .level-card h4{font-size:16px;color:#fff;margin-bottom:12px;font-weight:600;}
      .level-card p{font-size:13px;color:#b8a880;line-height:1.6;}
      .level-card .lock{margin-top:16px;display:inline-block;padding:6px 14px;background:rgba(255,215,0,0.15);border-radius:20px;font-size:11px;color:#ffd700;font-weight:600;}
      .swap-section{background:linear-gradient(180deg,transparent,rgba(255,180,0,0.08),transparent);}
      .swap-box{max-width:520px;margin:0 auto;background:linear-gradient(160deg,rgba(255,215,0,0.12),rgba(0,0,0,0.3));border:2px solid #ffd700;border-radius:24px;padding:40px;box-shadow:0 0 80px rgba(255,180,0,0.3);}
      .swap-box h3{font-family:'Orbitron',sans-serif;font-size:24px;color:#fff;text-align:center;margin-bottom:8px;}
      .swap-box > p{text-align:center;color:#b8a880;font-size:14px;margin-bottom:26px;}
      .swap-tabs{display:flex;gap:6px;background:rgba(0,0,0,0.4);padding:6px;border-radius:12px;margin-bottom:24px;}
      .swap-tab{flex:1;padding:10px;text-align:center;border-radius:8px;font-size:14px;font-weight:600;color:#b8a880;cursor:pointer;transition:all 0.3s;border:none;background:transparent;}
      .swap-tab.active{background:linear-gradient(135deg,#ffd700,#ff8c00);color:#000;}
      .swap-input-box{background:rgba(0,0,0,0.4);padding:20px;border-radius:14px;margin-bottom:12px;border:1px solid rgba(255,215,0,0.2);}
      .swap-input-box label{display:block;font-size:12px;color:#b8a880;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;}
      .swap-input-row{display:flex;justify-content:space-between;align-items:center;gap:12px;}
      .swap-input-row input{background:none;border:none;color:#fff;font-size:22px;font-family:'Orbitron',sans-serif;width:100%;outline:none;}
      .token-badge{display:flex;align-items:center;gap:6px;background:rgba(255,215,0,0.15);padding:8px 14px;border-radius:20px;font-size:14px;font-weight:600;color:#ffd700;flex-shrink:0;}
      .swap-arrow{text-align:center;margin:8px 0;position:relative;}
      .swap-arrow span{display:inline-block;width:36px;height:36px;background:rgba(255,215,0,0.2);border:1px solid #ffd700;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:#ffd700;font-size:16px;cursor:pointer;transition:all 0.3s;}
      .swap-arrow span:hover{transform:rotate(180deg);background:#ffd700;color:#000;}
      .swap-info{background:rgba(0,0,0,0.3);padding:14px 18px;border-radius:10px;margin-bottom:16px;font-size:13px;}
      .swap-info-row{display:flex;justify-content:space-between;color:#b8a880;padding:4px 0;}
      .swap-info-row b{color:#fff;}
      .swap-box .btn-gold{width:100%;justify-content:center;}
      .rewards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
      .reward-card{background:linear-gradient(160deg,rgba(255,215,0,0.08),rgba(0,0,0,0.3));border:1px solid rgba(255,215,0,0.3);border-radius:20px;padding:36px 28px;transition:all 0.4s;position:relative;overflow:hidden;}
      .reward-card:hover{transform:translateY(-8px);border-color:#ffd700;box-shadow:0 20px 50px rgba(255,180,0,0.4);}
      .reward-icon{width:64px;height:64px;background:linear-gradient(135deg,#ffd700,#ff8c00);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:30px;margin-bottom:20px;box-shadow:0 8px 25px rgba(255,180,0,0.4);}
      .reward-card h4{font-family:'Orbitron',sans-serif;font-size:19px;color:#fff;margin-bottom:10px;}
      .reward-card p{font-size:14px;color:#b8a880;line-height:1.7;}
      .how-section{background:linear-gradient(180deg,transparent,rgba(255,180,0,0.08),transparent);}
      .how-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
      .how-card{text-align:center;padding:30px 20px;position:relative;}
      .how-card .num{width:60px;height:60px;margin:0 auto 18px;background:linear-gradient(135deg,#ffd700,#ff8c00);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Orbitron',sans-serif;font-size:26px;font-weight:900;color:#000;box-shadow:0 8px 25px rgba(255,180,0,0.5);}
      .how-card h4{font-size:17px;color:#ffd700;margin-bottom:10px;font-weight:600;}
      .how-card p{font-size:13px;color:#b8a880;line-height:1.6;}
      .footer{background:#050302;color:#7a6850;padding:60px 40px 30px;border-top:1px solid rgba(255,215,0,0.2);}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#ffd700;font-family:'Orbitron',sans-serif;font-size:16px;margin-bottom:20px;letter-spacing:1px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:14px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#7a6850;font-size:14px;transition:color 0.3s;}
      .footer ul a:hover{color:#ffd700;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(255,215,0,0.2);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:60px 20px;}
        .hero-inner{grid-template-columns:1fr;gap:40px;}
        .section{padding:60px 20px;}
        .levels-grid,.rewards-grid,.how-grid,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
      }
      @media(max-width:600px){
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .levels-grid,.rewards-grid,.how-grid,.footer-top{grid-template-columns:1fr;}
        .swap-box{padding:26px 20px;}
        .mini-stat b{font-size:18px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo"><div class="logo-icon">📈</div><div class="logo-text">GOLDBOND</div></div>
      <nav><a href="#">Home</a><a href="#">Buy</a><a href="#">Rewards</a><a href="#">Levels</a></nav>
      <button class="connect-btn">🔗 Connect Wallet</button>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <div>
          <div class="hero-badge">💎 BONDING CURVE + REWARDS</div>
          <h1>EARN WHILE YOU HOLD</h1>
          <p>Non-updatable matrix plan for sustainable growth. Bonding curve pricing means early buyers always benefit. Earn passive rewards on every trade made by your downline.</p>
          <div class="hero-cta">
            <button class="btn btn-gold">💰 Buy Now</button>
            <button class="btn btn-outline">📊 View Chart</button>
          </div>
          <div class="hero-mini-stats">
            <div class="mini-stat"><b>$1.2M</b><span>TVL</span></div>
            <div class="mini-stat"><b>8,200+</b><span>Holders</span></div>
            <div class="mini-stat"><b>18.5%</b><span>APY</span></div>
          </div>
        </div>
        <div class="chart-card">
          <h4>GOLDBOND PRICE</h4>
          <div class="price-now">$0.0857</div>
          <div class="price-change">↑ +12.4% (24h)</div>
          <div class="chart-bars">
            <div class="bar" style="height:30%;"></div>
            <div class="bar" style="height:45%;"></div>
            <div class="bar" style="height:38%;"></div>
            <div class="bar" style="height:55%;"></div>
            <div class="bar" style="height:62%;"></div>
            <div class="bar" style="height:50%;"></div>
            <div class="bar" style="height:70%;"></div>
            <div class="bar" style="height:78%;"></div>
            <div class="bar" style="height:88%;"></div>
            <div class="bar" style="height:95%;"></div>
          </div>
          <div class="chart-labels"><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Referral Matrix</span>
        <h2 class="section-title">Reward Levels</h2>
        <p class="section-desc">Earn across 4 levels. Non-updatable matrix ensures fairness for everyone — no admin changes, fully on-chain.</p>
      </div>
      <div class="levels-grid">
        <div class="level-card"><div class="level-num">LEVEL 1</div><div class="level-percent">10<small>%</small></div><h4>Direct Referral</h4><p>Earn 10% instantly on every direct referral purchase.</p><div class="lock">🔒 Locked Rate</div></div>
        <div class="level-card"><div class="level-num">LEVEL 2</div><div class="level-percent">5<small>%</small></div><h4>Second Level</h4><p>Earn 5% on purchases made by your team's team.</p><div class="lock">🔒 Locked Rate</div></div>
        <div class="level-card"><div class="level-num">LEVEL 3</div><div class="level-percent">3<small>%</small></div><h4>Third Level</h4><p>Earn 3% on purchases made three levels deep.</p><div class="lock">🔒 Locked Rate</div></div>
        <div class="level-card"><div class="level-num">LEVEL 4</div><div class="level-percent">2<small>%</small></div><h4>Fourth Level</h4><p>Earn 2% on purchases made four levels deep.</p><div class="lock">🔒 Locked Rate</div></div>
      </div>
    </section>

    <section class="section swap-section">
      <div class="section-header">
        <span class="section-tag">Trade Now</span>
        <h2 class="section-title">Buy / Sell GOLDBOND</h2>
        <p class="section-desc">Trade instantly at bonding curve prices — the more people buy, the higher the price.</p>
      </div>
      <div class="swap-box">
        <h3>Swap Tokens</h3>
        <p>Exchange POL for GOLDBOND instantly</p>
        <div class="swap-tabs">
          <button class="swap-tab active">Buy</button>
          <button class="swap-tab">Sell</button>
        </div>
        <div class="swap-input-box">
          <label>You Pay</label>
          <div class="swap-input-row"><input type="text" value="1.0"><div class="token-badge">🟣 POL</div></div>
        </div>
        <div class="swap-arrow"><span>⇅</span></div>
        <div class="swap-input-box">
          <label>You Receive</label>
          <div class="swap-input-row"><input type="text" value="11.66"><div class="token-badge">🟡 GOLDBOND</div></div>
        </div>
        <div class="swap-info">
          <div class="swap-info-row"><span>Exchange Rate</span><b>1 POL = 11.66 GOLDBOND</b></div>
          <div class="swap-info-row"><span>Price Impact</span><b style="color:#22c55e;">+0.35%</b></div>
          <div class="swap-info-row"><span>Network Fee</span><b>~0.001 POL</b></div>
        </div>
        <button class="btn btn-gold">🔄 Swap Now</button>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Earning Opportunities</span>
        <h2 class="section-title">Rewards System</h2>
        <p class="section-desc">Multiple ways to earn passive income with GOLDBOND.</p>
      </div>
      <div class="rewards-grid">
        <div class="reward-card"><div class="reward-icon">💰</div><h4>Staking Rewards</h4><p>Stake your GOLDBOND tokens and earn up to 24% APY. No lock-up period — withdraw anytime.</p></div>
        <div class="reward-card"><div class="reward-icon">👥</div><h4>Referral Rewards</h4><p>Build your team and earn passive rewards across 4 levels. Non-updatable matrix = transparent forever.</p></div>
        <div class="reward-card"><div class="reward-icon">🎁</div><h4>Holder Bonus</h4><p>Every transaction has a 2% reflection to all holders. Just hold GOLDBOND and watch your balance grow.</p></div>
      </div>
    </section>

    <section class="section how-section">
      <div class="section-header">
        <span class="section-tag">Simple Process</span>
        <h2 class="section-title">How It Works</h2>
        <p class="section-desc">Get started in 4 simple steps — no complex setup required.</p>
      </div>
      <div class="how-grid">
        <div class="how-card"><div class="num">1</div><h4>Connect Wallet</h4><p>Connect your MetaMask or any Web3 wallet to Polygon network.</p></div>
        <div class="how-card"><div class="num">2</div><h4>Buy GOLDBOND</h4><p>Swap POL for GOLDBOND at the current bonding curve price.</p></div>
        <div class="how-card"><div class="num">3</div><h4>Build Team</h4><p>Share your referral link and build your downline across 4 levels.</p></div>
        <div class="how-card"><div class="num">4</div><h4>Earn Rewards</h4><p>Earn passive rewards from referrals and staking. Withdraw anytime.</p></div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>GOLDBOND</h4><p>Bonding curve token with rewards + non-updatable matrix plan. Built on Polygon for maximum efficiency.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Buy</a></li><li><a href="#">Rewards</a></li><li><a href="#">Levels</a></li></ul></div>
        <div><h4>Community</h4><ul><li><a href="#">Telegram</a></li><li><a href="#">Twitter</a></li><li><a href="#">Discord</a></li><li><a href="#">Medium</a></li></ul></div>
        <div><h4>Resources</h4><ul><li><a href="#">Whitepaper</a></li><li><a href="#">Contract</a></li><li><a href="#">Audit</a></li><li><a href="#">Docs</a></li></ul></div>
      </div>
      <div class="footer-bottom">© 2026 GoldBond. All rights reserved. | Built by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== CRYPTO 3: EXCHANGE UI ==========
  "crypto3": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#08090f;color:#fff;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(8,9,15,0.95);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(0,212,255,0.3);z-index:100;backdrop-filter:blur(12px);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:48px;height:48px;background:linear-gradient(135deg,#00d4ff,#a100ff);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;box-shadow:0 0 20px rgba(0,212,255,0.6);}
      .nav .logo-text{font-family:'Orbitron',sans-serif;font-weight:900;font-size:20px;background:linear-gradient(90deg,#00d4ff,#a100ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:2px;}
      .nav nav{display:flex;gap:30px;}
      .nav nav a{color:#fff;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#00d4ff;}
      .nav .connect-btn{padding:12px 24px;background:linear-gradient(135deg,#00d4ff,#a100ff);color:#fff;border-radius:30px;font-weight:700;font-size:14px;border:none;cursor:pointer;transition:all 0.3s;box-shadow:0 0 20px rgba(0,212,255,0.5);}
      .nav .connect-btn:hover{transform:translateY(-3px);box-shadow:0 0 40px rgba(0,212,255,0.9);}
      .hero{position:relative;padding:100px 40px 80px;background:radial-gradient(ellipse at 50% 0%,rgba(0,212,255,0.3),transparent 60%);overflow:hidden;}
      .hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(0,212,255,0.15) 1px,transparent 1px);background-size:40px 40px;opacity:0.4;animation:dotsMove 20s linear infinite;}
      @keyframes dotsMove{from{background-position:0 0;}to{background-position:400px 400px;}}
      .hero-inner{position:relative;z-index:1;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.1fr 1fr;gap:60px;align-items:center;}
      .hero h1{font-family:'Orbitron',sans-serif;font-size:clamp(38px,6vw,64px);line-height:1.1;font-weight:900;margin-bottom:24px;background:linear-gradient(90deg,#00d4ff,#a100ff,#00d4ff);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shine 4s linear infinite;margin-bottom:20px;}
      @keyframes shine{to{background-position:200% center;}}
      .hero .hero-badge{display:inline-block;padding:8px 20px;background:rgba(0,212,255,0.15);border:1px solid rgba(0,212,255,0.5);border-radius:30px;color:#00d4ff;font-size:13px;font-weight:600;margin-bottom:22px;}
      .hero p{font-size:17px;color:#94a3b8;margin-bottom:32px;max-width:540px;}
      .hero-cta{display:flex;gap:16px;flex-wrap:wrap;}
      .btn{padding:16px 36px;border-radius:30px;font-weight:700;font-size:15px;border:none;cursor:pointer;transition:all 0.3s;display:inline-flex;align-items:center;gap:8px;}
      .btn-grad{background:linear-gradient(135deg,#00d4ff,#a100ff);color:#fff;box-shadow:0 0 30px rgba(0,212,255,0.6);}
      .btn-grad:hover{transform:translateY(-4px);box-shadow:0 0 50px rgba(0,212,255,1);}
      .btn-outline{border:2px solid #00d4ff;color:#00d4ff;background:transparent;}
      .btn-outline:hover{background:#00d4ff;color:#000;transform:translateY(-4px);}
      .swap-widget{background:linear-gradient(160deg,rgba(0,212,255,0.1),rgba(161,0,255,0.05));border:2px solid rgba(0,212,255,0.5);border-radius:24px;padding:30px;box-shadow:0 0 60px rgba(0,212,255,0.3);}
      .swap-widget h4{font-family:'Orbitron',sans-serif;font-size:18px;color:#00d4ff;text-align:center;margin-bottom:24px;}
      .swap-field{background:rgba(0,0,0,0.5);padding:18px;border-radius:14px;margin-bottom:8px;border:1px solid rgba(0,212,255,0.2);}
      .swap-field label{display:block;font-size:12px;color:#94a3b8;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;}
      .swap-field-row{display:flex;justify-content:space-between;align-items:center;gap:12px;}
      .swap-field-row input{background:none;border:none;color:#fff;font-size:22px;font-family:'Orbitron',sans-serif;width:100%;outline:none;}
      .swap-field .tok{display:flex;align-items:center;gap:6px;background:rgba(0,212,255,0.15);padding:8px 14px;border-radius:20px;font-size:14px;font-weight:600;color:#00d4ff;flex-shrink:0;}
      .swap-flip{text-align:center;margin:8px 0;}
      .swap-flip span{display:inline-flex;width:38px;height:38px;background:rgba(0,212,255,0.2);border:1px solid #00d4ff;border-radius:50%;align-items:center;justify-content:center;color:#00d4ff;font-size:16px;cursor:pointer;transition:all 0.3s;}
      .swap-flip span:hover{transform:rotate(180deg);background:#00d4ff;color:#000;}
      .swap-meta{background:rgba(0,0,0,0.3);padding:14px 18px;border-radius:10px;margin-bottom:14px;font-size:13px;}
      .swap-meta-row{display:flex;justify-content:space-between;color:#94a3b8;padding:4px 0;}
      .swap-meta-row b{color:#fff;}
      .swap-widget .btn-grad{width:100%;justify-content:center;}
      .market-bar{background:rgba(0,0,0,0.4);border-top:1px solid rgba(0,212,255,0.2);border-bottom:1px solid rgba(0,212,255,0.2);padding:16px 40px;overflow:hidden;}
      .market-track{display:flex;gap:40px;animation:scrollX 40s linear infinite;white-space:nowrap;}
      @keyframes scrollX{from{transform:translateX(0);}to{transform:translateX(-50%);}}
      .market-item{display:flex;align-items:center;gap:10px;font-size:14px;flex-shrink:0;}
      .market-item .sym{font-family:'Orbitron',sans-serif;color:#fff;font-weight:700;}
      .market-item .px{color:#fff;}
      .market-item .chg{color:#22c55e;font-weight:600;}
      .market-item .chg.down{color:#ef4444;}
      .section{padding:100px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#00d4ff;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-family:'Orbitron',sans-serif;font-size:clamp(32px,5vw,44px);color:#fff;margin-bottom:20px;line-height:1.2;}
      .section-desc{font-size:16px;color:#94a3b8;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .feat-card{background:linear-gradient(160deg,rgba(0,212,255,0.08),rgba(161,0,255,0.02));border:1px solid rgba(0,212,255,0.3);border-radius:20px;padding:40px 30px;transition:all 0.4s;}
      .feat-card:hover{transform:translateY(-8px);border-color:#00d4ff;box-shadow:0 20px 50px rgba(0,212,255,0.4);}
      .feat-icon{width:64px;height:64px;background:linear-gradient(135deg,#00d4ff,#a100ff);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:30px;margin-bottom:22px;box-shadow:0 8px 25px rgba(0,212,255,0.5);}
      .feat-card h4{font-family:'Orbitron',sans-serif;font-size:19px;color:#fff;margin-bottom:12px;}
      .feat-card p{font-size:14px;color:#94a3b8;line-height:1.7;}
      .pools-section{background:linear-gradient(180deg,transparent,rgba(0,212,255,0.05),transparent);}
      .pools-table{background:rgba(0,0,0,0.3);border:1px solid rgba(0,212,255,0.2);border-radius:16px;overflow:hidden;}
      .pool-row{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 100px;gap:16px;padding:20px 24px;border-bottom:1px solid rgba(0,212,255,0.1);align-items:center;transition:all 0.3s;}
      .pool-row:last-child{border-bottom:none;}
      .pool-row:hover{background:rgba(0,212,255,0.05);}
      .pool-row.head{background:rgba(0,212,255,0.08);font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-weight:600;}
      .pool-pair{display:flex;align-items:center;gap:10px;}
      .pool-icons{display:flex;}
      .pool-icons .ic{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid #08090f;font-weight:bold;}
      .pool-icons .ic:first-child{background:linear-gradient(135deg,#8247e5,#a100ff);color:#fff;}
      .pool-icons .ic:last-child{margin-left:-10px;background:linear-gradient(135deg,#00d4ff,#06b6d4);color:#000;}
      .pool-pair b{color:#fff;font-size:15px;}
      .pool-cell{font-size:14px;color:#fff;}
      .pool-cell.apy{color:#22c55e;font-weight:700;}
      .pool-btn{padding:8px 16px;background:linear-gradient(135deg,#00d4ff,#a100ff);color:#fff;border:none;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.3s;}
      .pool-btn:hover{transform:scale(1.05);box-shadow:0 0 20px rgba(0,212,255,0.6);}
      .stats-bar{background:linear-gradient(135deg,#0a1220,#08090f);padding:60px 40px;border-top:1px solid rgba(0,212,255,0.2);border-bottom:1px solid rgba(0,212,255,0.2);}
      .stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center;}
      .stat-item h3{font-family:'Orbitron',sans-serif;font-size:38px;background:linear-gradient(90deg,#00d4ff,#a100ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:6px;}
      .stat-item p{font-size:13px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;}
      .footer{background:#030409;color:#64748b;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#00d4ff;font-family:'Orbitron',sans-serif;font-size:16px;margin-bottom:20px;letter-spacing:1px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:14px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#64748b;font-size:14px;transition:color 0.3s;}
      .footer ul a:hover{color:#00d4ff;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(0,212,255,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:60px 20px;}
        .hero-inner{grid-template-columns:1fr;gap:40px;}
        .section{padding:60px 20px;}
        .features-grid,.stats-inner,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .pool-row{grid-template-columns:1.5fr 1fr 1fr;font-size:13px;}
        .pool-row .pool-cell:nth-child(4),.pool-row.head .pool-cell:nth-child(4){display:none;}
        .market-bar{padding:14px 20px;}
        .stats-bar{padding:40px 20px;}
      }
      @media(max-width:600px){
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .features-grid,.stats-inner,.footer-top{grid-template-columns:1fr;}
        .swap-widget{padding:22px 18px;}
        .pool-row{grid-template-columns:1fr 1fr;gap:8px;padding:16px;}
        .pool-row .pool-cell:nth-child(3),.pool-row.head .pool-cell:nth-child(3){display:none;}
        .stat-item h3{font-size:28px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo"><div class="logo-icon">🔄</div><div class="logo-text">SWAPX</div></div>
      <nav><a href="#">Swap</a><a href="#">Pools</a><a href="#">Rewards</a><a href="#">Analytics</a></nav>
      <button class="connect-btn">🔗 Connect Wallet</button>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <div>
          <span class="hero-badge">💎 DECENTRALIZED EXCHANGE</span>
          <h1>TRADE. EARN. REPEAT.</h1>
          <p>Full DApp with buy/sell, wallet connect, and reward tracker. The fastest and most secure DEX on Polygon — swap tokens with zero slippage and lightning speed.</p>
          <div class="hero-cta">
            <button class="btn btn-grad">🔄 Start Swapping</button>
            <button class="btn btn-outline">📊 View Pools</button>
          </div>
        </div>
        <div class="swap-widget">
          <h4>🔄 Instant Swap</h4>
          <div class="swap-field">
            <label>You Pay</label>
            <div class="swap-field-row"><input type="text" value="1.00"><div class="tok">🟣 POL</div></div>
          </div>
          <div class="swap-flip"><span>⇅</span></div>
          <div class="swap-field">
            <label>You Receive</label>
            <div class="swap-field-row"><input type="text" value="1250.00"><div class="tok">💠 SWAPX</div></div>
          </div>
          <div class="swap-meta">
            <div class="swap-meta-row"><span>Rate</span><b>1 POL = 1250 SWAPX</b></div>
            <div class="swap-meta-row"><span>Fee</span><b style="color:#22c55e;">0.3%</b></div>
            <div class="swap-meta-row"><span>Slippage</span><b>0.5%</b></div>
          </div>
          <button class="btn btn-grad">🔄 Swap Now</button>
        </div>
      </div>
    </section>

    <div class="market-bar">
      <div class="market-track">
        <div class="market-item"><span class="sym">POL</span><span class="px">$0.85</span><span class="chg">+2.4%</span></div>
        <div class="market-item"><span class="sym">BTC</span><span class="px">$67,250</span><span class="chg">+1.8%</span></div>
        <div class="market-item"><span class="sym">ETH</span><span class="px">$3,480</span><span class="chg">+3.2%</span></div>
        <div class="market-item"><span class="sym">SWAPX</span><span class="px">$0.0008</span><span class="chg">+12.4%</span></div>
        <div class="market-item"><span class="sym">USDT</span><span class="px">$1.00</span><span class="chg down">-0.01%</span></div>
        <div class="market-item"><span class="sym">POL</span><span class="px">$0.85</span><span class="chg">+2.4%</span></div>
        <div class="market-item"><span class="sym">BTC</span><span class="px">$67,250</span><span class="chg">+1.8%</span></div>
        <div class="market-item"><span class="sym">ETH</span><span class="px">$3,480</span><span class="chg">+3.2%</span></div>
      </div>
    </div>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Features</span>
        <h2 class="section-title">Why SWAPX?</h2>
        <p class="section-desc">The most advanced DEX with cutting-edge features for DeFi traders.</p>
      </div>
      <div class="features-grid">
        <div class="feat-card"><div class="feat-icon">💎</div><h4>Best Rates</h4><p>Aggregated from multiple DEXs — always get the optimal swap rate with smart routing.</p></div>
        <div class="feat-card"><div class="feat-icon">⚡</div><h4>Instant Confirmations</h4><p>Transactions confirm in seconds on Polygon. No more waiting, no more failed swaps.</p></div>
        <div class="feat-card"><div class="feat-icon">🛡️</div><h4>Non-Custodial</h4><p>You control your keys. No KYC, no accounts, no central authority. 100% decentralized.</p></div>
      </div>
    </section>

    <section class="section pools-section">
      <div class="section-header">
        <span class="section-tag">Liquidity Pools</span>
        <h2 class="section-title">Earn by Providing Liquidity</h2>
        <p class="section-desc">Deposit your tokens into pools and earn trading fees plus farming rewards.</p>
      </div>
      <div class="pools-table">
        <div class="pool-row head"><div class="pool-cell">Pool</div><div class="pool-cell">TVL</div><div class="pool-cell">Volume 24h</div><div class="pool-cell">APY</div><div></div></div>
        <div class="pool-row"><div class="pool-pair"><div class="pool-icons"><div class="ic">P</div><div class="ic">S</div></div><b>POL-SWAPX</b></div><div class="pool-cell">$850K</div><div class="pool-cell">$120K</div><div class="pool-cell apy">185%</div><button class="pool-btn">Deposit</button></div>
        <div class="pool-row"><div class="pool-pair"><div class="pool-icons"><div class="ic">P</div><div class="ic">U</div></div><b>POL-USDT</b></div><div class="pool-cell">$1.2M</div><div class="pool-cell">$340K</div><div class="pool-cell apy">42%</div><button class="pool-btn">Deposit</button></div>
        <div class="pool-row"><div class="pool-pair"><div class="pool-icons"><div class="ic">S</div><div class="ic">U</div></div><b>SWAPX-USDT</b></div><div class="pool-cell">$320K</div><div class="pool-cell">$85K</div><div class="pool-cell apy">320%</div><button class="pool-btn">Deposit</button></div>
      </div>
    </section>

    <div class="stats-bar">
      <div class="stats-inner">
        <div class="stat-item"><h3>$12.4M</h3><p>Total Value Locked</p></div>
        <div class="stat-item"><h3>125K+</h3><p>Total Swaps</p></div>
        <div class="stat-item"><h3>8,500+</h3><p>Active Users</p></div>
        <div class="stat-item"><h3>0.3%</h3><p>Trading Fee</p></div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>SWAPX</h4><p>The most advanced DEX on Polygon. Trade, earn, and grow with the best DeFi tools.</p></div>
        <div><h4>Product</h4><ul><li><a href="#">Swap</a></li><li><a href="#">Pools</a></li><li><a href="#">Farm</a></li><li><a href="#">Analytics</a></li></ul></div>
        <div><h4>Community</h4><ul><li><a href="#">Telegram</a></li><li><a href="#">Twitter</a></li><li><a href="#">Discord</a></li><li><a href="#">Medium</a></li></ul></div>
        <div><h4>Resources</h4><ul><li><a href="#">Docs</a></li><li><a href="#">Audit</a></li><li><a href="#">Contracts</a></li><li><a href="#">Support</a></li></ul></div>
      </div>
      <div class="footer-bottom">© 2026 SWAPX. All rights reserved. | Built by XARC</div>
    </footer>
    </body></html>
  `
  // ========== GENERAL STORE 1: GROCERY ==========
  "general1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#fffef9;color:#1e293b;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .topbar{background:#16a34a;color:#fff;padding:10px 30px;font-size:13px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;}
      .nav{position:sticky;top:0;background:rgba(255,255,255,0.98);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(10px);box-shadow:0 2px 20px rgba(22,163,74,0.12);}
      .nav .logo{display:flex;align-items:center;gap:10px;}
      .nav .logo-icon{width:48px;height:48px;background:linear-gradient(135deg,#16a34a,#22c55e);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:26px;}
      .nav .logo-text h1{font-size:20px;color:#14532d;margin:0;}
      .nav .logo-text p{font-size:12px;color:#16a34a;margin:0;font-weight:600;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#1e293b;font-size:14px;font-weight:500;transition:color 0.3s;position:relative;padding:6px 0;}
      .nav nav a:hover{color:#16a34a;}
      .nav .cart-btn{position:relative;padding:12px 22px;background:linear-gradient(135deg,#16a34a,#22c55e);color:#fff;border-radius:30px;font-weight:600;font-size:14px;transition:all 0.3s;box-shadow:0 4px 15px rgba(22,163,74,0.3);}
      .nav .cart-btn:hover{transform:translateY(-3px);box-shadow:0 8px 25px rgba(22,163,74,0.5);}
      .nav .cart-btn .badge{position:absolute;top:-6px;right:-6px;background:#dc2626;color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:bold;}
      .hero{position:relative;padding:90px 40px;background:linear-gradient(135deg,#dcfce7,#f0fdf4);overflow:hidden;}
      .hero::before{content:'';position:absolute;top:-100px;right:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(22,163,74,0.2),transparent 70%);border-radius:50%;}
      .hero::after{content:'';position:absolute;bottom:-100px;left:-100px;width:350px;height:350px;background:radial-gradient(circle,rgba(34,197,94,0.15),transparent 70%);border-radius:50%;}
      .hero-inner{position:relative;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.1fr 1fr;gap:60px;align-items:center;z-index:1;}
      .hero-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;background:#fff;border-radius:30px;color:#16a34a;font-size:13px;font-weight:600;margin-bottom:22px;box-shadow:0 4px 15px rgba(22,163,74,0.15);}
      .hero-badge::before{content:'●';color:#22c55e;animation:pulse 1.5s infinite;}
      @keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.3;}}
      .hero h2{font-size:clamp(34px,5.5vw,56px);line-height:1.15;color:#14532d;margin-bottom:22px;}
      .hero h2 span{color:#16a34a;}
      .hero-desc{font-size:17px;color:#475569;margin-bottom:32px;max-width:520px;}
      .hero-cta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
      .btn-primary{background:linear-gradient(135deg,#16a34a,#22c55e);color:#fff;padding:16px 34px;border-radius:30px;font-weight:700;font-size:15px;transition:all 0.3s;box-shadow:0 8px 20px rgba(22,163,74,0.35);border:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;}
      .btn-primary:hover{transform:translateY(-3px);box-shadow:0 12px 30px rgba(22,163,74,0.5);}
      .btn-secondary{background:#fff;color:#16a34a;padding:16px 34px;border-radius:30px;font-weight:700;font-size:15px;transition:all 0.3s;border:2px solid #16a34a;cursor:pointer;display:inline-flex;align-items:center;gap:8px;}
      .btn-secondary:hover{background:#16a34a;color:#fff;transform:translateY(-3px);}
      .hero-features{display:flex;gap:24px;flex-wrap:wrap;}
      .hero-feature{display:flex;align-items:center;gap:10px;font-size:14px;color:#475569;font-weight:500;}
      .hero-feature::before{content:'✓';width:24px;height:24px;background:#22c55e;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;flex-shrink:0;}
      .hero-img{position:relative;}
      .hero-img img{width:100%;border-radius:24px;box-shadow:0 25px 60px rgba(22,163,74,0.25);}
      .hero-img .float-card{position:absolute;background:#fff;padding:18px 22px;border-radius:16px;box-shadow:0 12px 35px rgba(0,0,0,0.12);display:flex;align-items:center;gap:12px;animation:float 4s ease-in-out infinite;}
      .hero-img .float-card:nth-child(2){bottom:-20px;left:-20px;}
      .hero-img .float-card:nth-child(3){top:20px;right:-20px;animation-delay:2s;}
      @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
      .float-card .ic{width:46px;height:46px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;background:#dcfce7;}
      .float-card h5{font-size:14px;color:#14532d;margin-bottom:2px;font-weight:700;}
      .float-card p{font-size:12px;color:#64748b;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#16a34a;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-size:clamp(28px,4vw,42px);color:#14532d;margin-bottom:18px;line-height:1.2;}
      .section-title span{color:#16a34a;}
      .section-desc{font-size:16px;color:#64748b;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .categories-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
      .cat-card{background:#fff;padding:32px 20px;border-radius:16px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.06);transition:all 0.4s;cursor:pointer;position:relative;overflow:hidden;}
      .cat-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,#dcfce7,transparent);opacity:0;transition:opacity 0.3s;}
      .cat-card:hover{transform:translateY(-8px);box-shadow:0 20px 45px rgba(22,163,74,0.2);}
      .cat-card:hover::before{opacity:1;}
      .cat-card .emoji{font-size:48px;margin-bottom:14px;position:relative;transition:transform 0.4s;}
      .cat-card:hover .emoji{transform:scale(1.15) rotate(-8deg);}
      .cat-card h4{font-size:16px;color:#14532d;position:relative;margin-bottom:6px;}
      .cat-card p{font-size:12px;color:#64748b;position:relative;}
      .products-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
      .product{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);transition:all 0.4s;position:relative;}
      .product:hover{transform:translateY(-8px);box-shadow:0 20px 45px rgba(22,163,74,0.2);}
      .product-img{height:200px;background:linear-gradient(135deg,#dcfce7,#bbf7d0);display:flex;align-items:center;justify-content:center;font-size:80px;position:relative;transition:all 0.4s;}
      .product:hover .product-img{font-size:90px;}
      .product-tag{position:absolute;top:12px;left:12px;background:#dc2626;color:#fff;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:700;z-index:1;}
      .product-info{padding:20px;}
      .product-info h4{font-size:16px;color:#14532d;margin-bottom:6px;font-weight:700;}
      .product-info .category{font-size:12px;color:#16a34a;font-weight:600;margin-bottom:10px;}
      .product-info .rating{color:#fbbf24;font-size:13px;margin-bottom:10px;}
      .product-info .price-row{display:flex;justify-content:space-between;align-items:center;}
      .product-info .price{font-size:20px;color:#16a34a;font-weight:800;}
      .product-info .price small{font-size:12px;color:#64748b;font-weight:400;}
      .product-info .add-btn{width:38px;height:38px;background:linear-gradient(135deg,#16a34a,#22c55e);color:#fff;border:none;border-radius:10px;font-size:20px;cursor:pointer;transition:all 0.3s;display:flex;align-items:center;justify-content:center;}
      .product-info .add-btn:hover{transform:scale(1.1) rotate(90deg);box-shadow:0 4px 15px rgba(22,163,74,0.4);}
      .features-section{background:linear-gradient(135deg,#f0fdf4,#dcfce7);}
      .features-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .features-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
      .feature-card{background:#fff;padding:32px 24px;border-radius:16px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.06);transition:all 0.4s;}
      .feature-card:hover{transform:translateY(-8px);box-shadow:0 15px 40px rgba(22,163,74,0.2);}
      .feature-card .ic{width:64px;height:64px;margin:0 auto 18px;background:linear-gradient(135deg,#dcfce7,#bbf7d0);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:30px;transition:transform 0.4s;}
      .feature-card:hover .ic{transform:scale(1.1) rotate(-8deg);}
      .feature-card h4{font-size:17px;color:#14532d;margin-bottom:10px;font-weight:700;}
      .feature-card p{font-size:13px;color:#64748b;line-height:1.7;}
      .testimonial-section{background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;}
      .testimonial-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:50px;}
      .testimonial-card{background:rgba(255,255,255,0.05);padding:32px 28px;border-radius:16px;border:1px solid rgba(255,255,255,0.1);transition:all 0.4s;position:relative;}
      .testimonial-card:hover{background:rgba(255,255,255,0.08);transform:translateY(-6px);border-color:rgba(34,197,94,0.5);}
      .testimonial-card .stars{color:#fbbf24;font-size:18px;margin-bottom:14px;letter-spacing:2px;}
      .testimonial-card .quote{font-size:14.5px;color:#cbd5e1;line-height:1.8;margin-bottom:22px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#22c55e,#16a34a);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:18px;}
      .testimonial-card .author h5{font-size:15px;color:#fff;margin-bottom:4px;}
      .testimonial-card .author p{font-size:12px;color:#22c55e;}
      .contact-section{background:linear-gradient(135deg,#f0fdf4,#dcfce7);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:32px;color:#14532d;margin-bottom:18px;}
      .contact-info h3 span{color:#16a34a;}
      .contact-info > p{color:#475569;margin-bottom:28px;font-size:15px;}
      .contact-item{display:flex;gap:14px;margin-bottom:22px;align-items:flex-start;}
      .contact-item .ic{width:50px;height:50px;background:#fff;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 15px rgba(22,163,74,0.15);transition:all 0.3s;}
      .contact-item:hover .ic{transform:rotate(-5deg);background:#16a34a;}
      .contact-item h5{font-size:13px;color:#16a34a;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:700;}
      .contact-item p{font-size:15px;color:#14532d;font-weight:500;}
      .contact-form{background:#fff;padding:40px;border-radius:20px;box-shadow:0 10px 40px rgba(22,163,74,0.15);}
      .contact-form h4{font-size:22px;color:#14532d;margin-bottom:22px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#475569;font-size:13px;margin-bottom:8px;font-weight:600;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;color:#1e293b;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#16a34a;background:#fff;box-shadow:0 0 0 3px rgba(22,163,74,0.1);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-primary{width:100%;justify-content:center;}
      .footer{background:#14532d;color:#bbf7d0;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#fff;font-size:17px;margin-bottom:18px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#bbf7d0;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#fff;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(187,247,208,0.2);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:60px 20px;}
        .hero-inner{grid-template-columns:1fr;gap:40px;}
        .hero-img .float-card{position:static;margin-top:14px;animation:none;}
        .hero-img .float-card:nth-child(3){display:none;}
        .section,.features-inner,.testimonial-inner,.contact-inner{padding:60px 20px;}
        .categories-grid,.products-grid,.features-grid,.testimonial-grid,.contact-inner,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
      }
      @media(max-width:600px){
        .categories-grid,.products-grid,.features-grid,.testimonial-grid,.contact-inner,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn-primary,.btn-secondary{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
        .topbar{justify-content:center;text-align:center;font-size:11px;}
      }
    </style></head><body>

    <div class="topbar">
      <span>🚚 Free Delivery on Orders ₹500+</span>
      <span>📞 +91 93093 32775</span>
      <span>🕒 7AM – 10PM Daily</span>
    </div>

    <header class="nav">
      <div class="logo">
        <div class="logo-icon">🛒</div>
        <div class="logo-text"><h1>FreshMart</h1><p>Your Daily Grocery Store</p></div>
      </div>
      <nav><a href="#">Home</a><a href="#">Categories</a><a href="#">Offers</a><a href="#">About</a><a href="#">Contact</a></nav>
      <a href="#" class="cart-btn">🛒 Cart<span class="badge">3</span></a>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <div>
          <span class="hero-badge">DELIVERY IN 30 MINUTES</span>
          <h2>Fresh Groceries,<br><span>Delivered Fast</span></h2>
          <p class="hero-desc">Order your daily essentials online and get them delivered to your doorstep within 30 minutes. Fresh, affordable, and reliable.</p>
          <div class="hero-cta">
            <a href="#" class="btn-primary">🛍️ Shop Now</a>
            <a href="#" class="btn-secondary">📞 Call to Order</a>
          </div>
          <div class="hero-features">
            <div class="hero-feature">100% Fresh</div>
            <div class="hero-feature">Best Prices</div>
            <div class="hero-feature">Free Delivery</div>
          </div>
        </div>
        <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80" alt="Grocery">
          <div class="float-card"><div class="ic">⭐</div><div><h5>4.9/5 Rating</h5><p>10,000+ reviews</p></div></div>
          <div class="float-card"><div class="ic">⚡</div><div><h5>30 Min Delivery</h5><p>Fast & reliable</p></div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Shop by Category</span>
        <h2 class="section-title">Browse Our <span>Categories</span></h2>
        <p class="section-desc">Everything you need for your home, delivered fresh to your door.</p>
      </div>
      <div class="categories-grid">
        <div class="cat-card"><div class="emoji">🍎</div><h4>Fresh Fruits</h4><p>50+ varieties</p></div>
        <div class="cat-card"><div class="emoji">🥬</div><h4>Vegetables</h4><p>100+ items</p></div>
        <div class="cat-card"><div class="emoji">🥛</div><h4>Dairy & Eggs</h4><p>Daily essentials</p></div>
        <div class="cat-card"><div class="emoji">🍞</div><h4>Bakery</h4><p>Fresh daily</p></div>
        <div class="cat-card"><div class="emoji">🥤</div><h4>Beverages</h4><p>Juices, tea, coffee</p></div>
        <div class="cat-card"><div class="emoji">🍫</div><h4>Snacks</h4><p>Chips, biscuits, more</p></div>
        <div class="cat-card"><div class="emoji">🧴</div><h4>Personal Care</h4><p>Hygiene products</p></div>
        <div class="cat-card"><div class="emoji">🧹</div><h4>Household</h4><p>Cleaning essentials</p></div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Bestsellers</span>
        <h2 class="section-title">Popular <span>Products</span></h2>
        <p class="section-desc">Our most-loved products, ordered by happy customers every day.</p>
      </div>
      <div class="products-grid">
        <div class="product"><div class="product-img">🍎<div class="product-tag">20% OFF</div></div><div class="product-info"><h4>Fresh Kashmiri Apples</h4><div class="category">Fresh Fruits</div><div class="rating">★★★★★ (128)</div><div class="price-row"><div class="price">₹120<small>/kg</small></div><button class="add-btn">+</button></div></div></div>
        <div class="product"><div class="product-img">🥛<div class="product-tag">BESTSELLER</div></div><div class="product-info"><h4>Organic Full Cream Milk</h4><div class="category">Dairy</div><div class="rating">★★★★★ (245)</div><div class="price-row"><div class="price">₹65<small>/L</small></div><button class="add-btn">+</button></div></div></div>
        <div class="product"><div class="product-img">🍞<div class="product-tag">FRESH</div></div><div class="product-info"><h4>Whole Wheat Bread</h4><div class="category">Bakery</div><div class="rating">★★★★☆ (89)</div><div class="price-row"><div class="price">₹45<small>/pack</small></div><button class="add-btn">+</button></div></div></div>
        <div class="product"><div class="product-img">🥚<div class="product-tag">NEW</div></div><div class="product-info"><h4>Farm Fresh Eggs</h4><div class="category">Dairy</div><div class="rating">★★★★★ (312)</div><div class="price-row"><div class="price">₹80<small>/dozen</small></div><button class="add-btn">+</button></div></div></div>
        <div class="product"><div class="product-img">🍌</div><div class="product-info"><h4>Ripe Bananas</h4><div class="category">Fresh Fruits</div><div class="rating">★★★★★ (156)</div><div class="price-row"><div class="price">₹50<small>/dozen</small></div><button class="add-btn">+</button></div></div></div>
        <div class="product"><div class="product-img">🍅</div><div class="product-info"><h4>Fresh Tomatoes</h4><div class="category">Vegetables</div><div class="rating">★★★★☆ (95)</div><div class="price-row"><div class="price">₹40<small>/kg</small></div><button class="add-btn">+</button></div></div></div>
        <div class="product"><div class="product-img">🧀<div class="product-tag">PREMIUM</div></div><div class="product-info"><h4>Aged Cheddar Cheese</h4><div class="category">Dairy</div><div class="rating">★★★★★ (78)</div><div class="price-row"><div class="price">₹320<small>/200g</small></div><button class="add-btn">+</button></div></div></div>
        <div class="product"><div class="product-img">🥕</div><div class="product-info"><h4>Organic Carrots</h4><div class="category">Vegetables</div><div class="rating">★★★★★ (203)</div><div class="price-row"><div class="price">₹55<small>/kg</small></div><button class="add-btn">+</button></div></div></div>
      </div>
    </section>

    <section class="features-section">
      <div class="features-inner">
        <div class="section-header">
          <span class="section-tag">Why Choose Us</span>
          <h2 class="section-title">Why Shop With <span>FreshMart</span>?</h2>
          <p class="section-desc">We make grocery shopping simpler, faster, and more affordable.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card"><div class="ic">🚚</div><h4>Free Delivery</h4><p>Free home delivery on all orders above ₹500. No hidden charges.</p></div>
          <div class="feature-card"><div class="ic">⚡</div><h4>30-Minute Delivery</h4><p>Lightning-fast delivery to your doorstep in select areas.</p></div>
          <div class="feature-card"><div class="ic">💚</div><h4>100% Fresh</h4><p>Farm-fresh produce sourced daily from local farmers.</p></div>
          <div class="feature-card"><div class="ic">💰</div><h4>Best Prices</h4><p>Save up to 30% compared to local market rates, guaranteed.</p></div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="testimonial-inner">
        <div class="section-header">
          <span class="section-tag" style="color:#22c55e;">Customer Love</span>
          <h2 class="section-title" style="color:#fff;">What Our <span style="color:#22c55e;">Customers Say</span></h2>
          <p class="section-desc" style="color:#cbd5e1;">Join thousands of happy families who trust us for their daily needs.</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"FreshMart has completely changed how I shop! Delivery is always on time and the quality is superb. I never have to go to the market again."</p><div class="author"><div class="av">PM</div><div><h5>Priya Mehta</h5><p>Regular Customer</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The prices are unbeatable and the products are always fresh. The app is super easy to use. Highly recommend to everyone!"</p><div class="author"><div class="av">RK</div><div><h5>Rajesh Kumar</h5><p>Working Professional</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Amazing service! The 30-minute delivery is a game-changer for busy moms like me. Customer support is also very responsive."</p><div class="author"><div class="av">AS</div><div><h5>Anita Sharma</h5><p>Homemaker</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Get in <span>Touch</span></h3>
          <p>Have questions? We'd love to hear from you. Reach out and we'll get back within 24 hours.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call Us</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Address</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Hours</h5><p>Everyday: 7AM – 10PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Message sent!');">
          <h4>Send Us a Message</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Email</label><input type="email" placeholder="you@email.com" required></div>
          <div class="form-group"><label>Message</label><textarea placeholder="How can we help?"></textarea></div>
          <button type="submit" class="btn-primary">📨 Send Message</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>🛒 FreshMart</h4><p>Your trusted neighborhood grocery store — now online. Fresh products, fast delivery, best prices.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Categories</a></li><li><a href="#">Offers</a></li><li><a href="#">About</a></li></ul></div>
        <div><h4>Categories</h4><ul><li><a href="#">Fruits</a></li><li><a href="#">Vegetables</a></li><li><a href="#">Dairy</a></li><li><a href="#">Snacks</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 FreshMart. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== GENERAL STORE 2: KIRANA ==========
  "general2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#fff8ec;color:#3a2e1f;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(255,237,213,0.98);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(10px);box-shadow:0 2px 15px rgba(194,65,12,0.15);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#f97316,#fb923c);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:26px;box-shadow:0 4px 15px rgba(249,115,22,0.3);}
      .nav .logo-text h1{font-size:21px;color:#7c2d12;margin:0;font-weight:800;}
      .nav .logo-text p{font-size:12px;color:#c2410c;margin:0;font-weight:600;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#3a2e1f;font-size:14px;font-weight:500;transition:color 0.3s;}
      .nav nav a:hover{color:#c2410c;}
      .nav .order-btn{padding:12px 24px;background:linear-gradient(135deg,#f97316,#fb923c);color:#fff;border-radius:30px;font-weight:700;font-size:14px;transition:all 0.3s;box-shadow:0 4px 15px rgba(249,115,22,0.35);}
      .nav .order-btn:hover{transform:translateY(-3px);box-shadow:0 8px 25px rgba(249,115,22,0.55);}
      .hero{padding:90px 40px;background:linear-gradient(135deg,#ffedd5,#fff8ec);position:relative;overflow:hidden;}
      .hero::before{content:'';position:absolute;top:-80px;right:-80px;width:350px;height:350px;background:radial-gradient(circle,rgba(249,115,22,0.25),transparent 70%);border-radius:50%;}
      .hero-inner{position:relative;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.15fr 1fr;gap:60px;align-items:center;z-index:1;}
      .hero-badge{display:inline-block;padding:8px 18px;background:#fff;border-radius:30px;color:#c2410c;font-size:13px;font-weight:700;margin-bottom:22px;box-shadow:0 4px 15px rgba(194,65,12,0.15);}
      .hero h2{font-size:clamp(34px,5.5vw,56px);line-height:1.15;color:#7c2d12;margin-bottom:22px;}
      .hero h2 span{color:#ea580c;}
      .hero-desc{font-size:17px;color:#78350f;margin-bottom:32px;max-width:520px;}
      .hero-cta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 32px;border-radius:30px;font-weight:700;font-size:15px;transition:all 0.3s;cursor:pointer;border:none;}
      .btn-primary{background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;box-shadow:0 8px 25px rgba(249,115,22,0.4);}
      .btn-primary:hover{transform:translateY(-4px);box-shadow:0 12px 35px rgba(249,115,22,0.55);}
      .btn-outline{background:#fff;color:#c2410c;border:2px solid #f97316;}
      .btn-outline:hover{background:#f97316;color:#fff;transform:translateY(-4px);}
      .hero-stats{display:flex;gap:32px;flex-wrap:wrap;}
      .hero-stat{display:flex;flex-direction:column;}
      .hero-stat b{font-size:28px;color:#c2410c;font-weight:900;line-height:1;}
      .hero-stat span{font-size:12px;color:#78350f;margin-top:6px;text-transform:uppercase;letter-spacing:1px;font-weight:600;}
      .hero-img{position:relative;}
      .hero-img img{width:100%;border-radius:24px;box-shadow:0 25px 60px rgba(194,65,12,0.3);}
      .offer-badge{position:absolute;top:-15px;right:-15px;width:100px;height:100px;background:linear-gradient(135deg,#dc2626,#ef4444);border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;box-shadow:0 10px 30px rgba(220,38,38,0.5);animation:rotate 8s linear infinite;}
      @keyframes rotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
      .offer-badge b{font-size:24px;line-height:1;}
      .offer-badge span{font-size:11px;font-weight:700;letter-spacing:1px;}
      .offer-badge > div{animation:rotate 8s linear infinite reverse;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#c2410c;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;font-weight:800;}
      .section-title{font-size:clamp(28px,4vw,42px);color:#7c2d12;margin-bottom:18px;line-height:1.2;}
      .section-title span{color:#ea580c;}
      .section-desc{font-size:16px;color:#78350f;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .about{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{position:relative;border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(194,65,12,0.25);}
      .about-img img{width:100%;height:520px;object-fit:cover;}
      .about-img::before{content:'SINCE 1985';position:absolute;top:20px;left:20px;background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;padding:10px 18px;border-radius:20px;font-size:12px;font-weight:800;letter-spacing:2px;box-shadow:0 4px 15px rgba(249,115,22,0.4);}
      .about-content h3{font-size:32px;color:#7c2d12;margin-bottom:20px;line-height:1.3;}
      .about-content h3 span{color:#ea580c;}
      .about-content p{font-size:16px;color:#78350f;line-height:1.8;margin-bottom:18px;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:10px;background:#fff;padding:14px 18px;border-radius:10px;font-size:14px;font-weight:600;color:#7c2d12;box-shadow:0 2px 10px rgba(194,65,12,0.08);}
      .about-feat::before{content:'✓';width:24px;height:24px;background:#22c55e;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;flex-shrink:0;}
      .services-section{background:linear-gradient(135deg,#fff8ec,#ffedd5);}
      .services-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .service-card{background:#fff;padding:40px 28px;border-radius:20px;box-shadow:0 4px 20px rgba(194,65,12,0.08);transition:all 0.4s;position:relative;overflow:hidden;}
      .service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#f97316,#ea580c);transform:scaleX(0);transform-origin:left;transition:transform 0.4s;}
      .service-card:hover{transform:translateY(-8px);box-shadow:0 20px 45px rgba(194,65,12,0.2);}
      .service-card:hover::before{transform:scaleX(1);}
      .service-icon{width:70px;height:70px;background:linear-gradient(135deg,#ffedd5,#fed7aa);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:32px;margin-bottom:22px;transition:all 0.4s;}
      .service-card:hover .service-icon{background:linear-gradient(135deg,#f97316,#ea580c);transform:rotate(-10deg) scale(1.1);}
      .service-card h4{font-size:19px;color:#7c2d12;margin-bottom:12px;}
      .service-card p{font-size:14px;color:#78350f;line-height:1.7;}
      .info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:50px;}
      .info-card{background:#fff;padding:32px 24px;border-radius:16px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.06);transition:all 0.4s;}
      .info-card:hover{transform:translateY(-8px);box-shadow:0 20px 40px rgba(194,65,12,0.15);}
      .info-card .ic{width:64px;height:64px;margin:0 auto 16px;background:linear-gradient(135deg,#ffedd5,#fed7aa);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:28px;transition:transform 0.4s;}
      .info-card:hover .ic{transform:scale(1.1) rotate(-8deg);}
      .info-card h4{font-size:17px;color:#7c2d12;margin-bottom:8px;}
      .info-card p{font-size:13px;color:#78350f;line-height:1.6;}
      .map{width:100%;height:400px;border-radius:20px;overflow:hidden;border:4px solid #ffedd5;box-shadow:0 10px 40px rgba(194,65,12,0.15);}
      .map iframe{width:100%;height:100%;border:0;}
      .offers-section{background:linear-gradient(135deg,#7c2d12,#9a3412);color:#fff;}
      .offers-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .offers-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:40px;}
      .offer-card{background:rgba(255,255,255,0.08);padding:32px;border-radius:16px;border:1px solid rgba(255,237,213,0.3);text-align:center;transition:all 0.4s;position:relative;overflow:hidden;}
      .offer-card::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:conic-gradient(from 0deg,transparent,rgba(249,115,22,0.2),transparent,rgba(251,146,60,0.2),transparent);animation:spin 8s linear infinite;opacity:0;transition:opacity 0.4s;}
      .offer-card:hover::before{opacity:1;}
      @keyframes spin{to{transform:rotate(360deg);}}
      .offer-card > *{position:relative;z-index:1;}
      .offer-card:hover{transform:translateY(-8px);border-color:#f97316;box-shadow:0 20px 50px rgba(249,115,22,0.4);}
      .offer-icon{font-size:52px;margin-bottom:14px;display:inline-block;transition:transform 0.4s;}
      .offer-card:hover .offer-icon{transform:scale(1.2) rotate(-10deg);}
      .offer-card h4{font-size:20px;margin-bottom:10px;font-weight:700;}
      .offer-card .discount{font-size:42px;color:#fbbf24;font-weight:900;line-height:1;margin-bottom:8px;}
      .offer-card p{font-size:13px;color:#fed7aa;line-height:1.6;}
      .contact-section{background:linear-gradient(135deg,#ffedd5,#fff8ec);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:32px;color:#7c2d12;margin-bottom:20px;}
      .contact-info h3 span{color:#ea580c;}
      .contact-info > p{color:#78350f;margin-bottom:30px;font-size:15px;}
      .contact-item{display:flex;gap:16px;margin-bottom:22px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:#fff;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 15px rgba(194,65,12,0.15);transition:all 0.3s;}
      .contact-item:hover .ic{background:#f97316;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#c2410c;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:700;}
      .contact-item p{font-size:15px;color:#7c2d12;font-weight:500;}
      .contact-form{background:#fff;padding:40px;border-radius:20px;box-shadow:0 10px 40px rgba(194,65,12,0.15);}
      .contact-form h4{font-size:22px;color:#7c2d12;margin-bottom:22px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#78350f;font-size:13px;margin-bottom:8px;font-weight:600;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:#fff8ec;border:1px solid #fed7aa;border-radius:10px;color:#3a2e1f;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#f97316;background:#fff;box-shadow:0 0 0 3px rgba(249,115,22,0.15);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-primary{width:100%;justify-content:center;}
      .footer{background:#431407;color:#fed7aa;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#fff;font-size:17px;margin-bottom:18px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#fed7aa;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#f97316;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(254,215,170,0.2);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:60px 20px;}
        .hero-inner,.about,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .about-img img{height:340px;}
        .section,.services-inner,.offers-inner,.contact-inner{padding:60px 20px;}
        .services-grid,.info-grid,.offers-grid,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .offer-badge{width:80px;height:80px;}
        .offer-badge b{font-size:20px;}
      }
      @media(max-width:600px){
        .services-grid,.info-grid,.offers-grid,.footer-top,.about-features{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
        .hero-stats{gap:20px;}
        .hero-stat b{font-size:22px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo">
        <div class="logo-icon">🏪</div>
        <div class="logo-text"><h1>Sharma Kirana Store</h1><p>Serving Since 1985</p></div>
      </div>
      <nav><a href="#">Home</a><a href="#">About</a><a href="#">Services</a><a href="#">Offers</a><a href="#">Contact</a></nav>
      <a href="#" class="order-btn">📞 Call to Order</a>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <div>
          <span class="hero-badge">⭐ Trusted for 40 Years</span>
          <h2>Your <span>Neighborhood</span><br>Store, Now Online</h2>
          <p class="hero-desc">Daily offers on all essentials — grocery, snacks, household items, and more. Order via WhatsApp or call and get home delivery.</p>
          <div class="hero-cta">
            <a href="#" class="btn btn-primary">📞 Call to Order</a>
            <a href="#" class="btn btn-outline">📍 Visit Store</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><b>40+</b><span>Years Trusted</span></div>
            <div class="hero-stat"><b>5000+</b><span>Happy Families</span></div>
            <div class="hero-stat"><b>₹0</b><span>Delivery Charges</span></div>
          </div>
        </div>
        <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" alt="Kirana Store">
          <div class="offer-badge"><div><b>30%</b><span>OFF</span></div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="about">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=800&q=80" alt="Store"></div>
        <div class="about-content">
          <span class="section-tag">About Our Store</span>
          <h3>Three Generations of <span>Trust & Service</span></h3>
          <p>Sharma Kirana Store has been the heartbeat of our neighborhood since 1985. What started as a small shop has grown into a trusted destination for thousands of families.</p>
          <p>We believe in honest pricing, quality products, and personal service. Our customers aren't just shoppers — they're family.</p>
          <div class="about-features">
            <div class="about-feat">Fresh Stock Daily</div>
            <div class="about-feat">Home Delivery</div>
            <div class="about-feat">Credit Facility</div>
            <div class="about-feat">Bulk Discounts</div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="services-inner">
        <div class="section-header">
          <span class="section-tag">What We Offer</span>
          <h2 class="section-title">Our <span>Services</span></h2>
          <p class="section-desc">Everything you need under one roof — for your home and your daily life.</p>
        </div>
        <div class="services-grid">
          <div class="service-card"><div class="service-icon">🛒</div><h4>Daily Groceries</h4><p>All essentials for your kitchen — rice, dal, oil, spices, flour and more at the best rates.</p></div>
          <div class="service-card"><div class="service-icon">🚚</div><h4>Free Home Delivery</h4><p>Free delivery on all orders above ₹500 in nearby areas. Same-day delivery guaranteed.</p></div>
          <div class="service-card"><div class="service-icon">💳</div><h4>Monthly Credit</h4><p>Regular customers enjoy monthly credit facilities. Pay at the end of the month, hassle-free.</p></div>
          <div class="service-card"><div class="service-icon">📱</div><h4>WhatsApp Ordering</h4><p>Just send a message on WhatsApp with your list and we'll pack it for you.</p></div>
          <div class="service-card"><div class="service-icon">💰</div><h4>Bulk Discounts</h4><p>Special wholesale rates for bulk orders. Perfect for events and functions.</p></div>
          <div class="service-card"><div class="service-icon">🎁</div><h4>Festival Offers</h4><p>Special discounts during Diwali, Holi, and other festivals throughout the year.</p></div>
        </div>
      </div>
    </section>

    <section class="offers-section">
      <div class="offers-inner">
        <div class="section-header">
          <span class="section-tag" style="color:#fb923c;">Current Offers</span>
          <h2 class="section-title" style="color:#fff;">Special <span style="color:#fb923c;">Discounts</span></h2>
          <p class="section-desc" style="color:#fed7aa;">Grab these limited-time offers before they expire!</p>
        </div>
        <div class="offers-grid">
          <div class="offer-card"><div class="offer-icon">🌾</div><div class="discount">30%</div><h4>OFF on Rice & Flour</h4><p>On all 10kg+ bags. Valid till month end.</p></div>
          <div class="offer-card"><div class="offer-icon">🛢️</div><div class="discount">₹100</div><h4>OFF on Cooking Oil</h4><p>On purchase of 5L pack. Limited stock.</p></div>
          <div class="offer-card"><div class="offer-icon">🎁</div><div class="discount">FREE</div><h4>Delivery on ₹500+</h4><p>Zero delivery charges on orders above ₹500.</p></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Why Choose Us</span>
        <h2 class="section-title">Why <span>Sharma Kirana</span>?</h2>
        <p class="section-desc">40 years of trust, service, and quality — that's our promise.</p>
      </div>
      <div class="info-grid">
        <div class="info-card"><div class="ic">💰</div><h4>Best Prices</h4><p>Daily offers on all essential items — beat any store's prices.</p></div>
        <div class="info-card"><div class="ic">🏠</div><h4>Home Delivery</h4><p>Free delivery on orders above ₹500 in your neighborhood.</p></div>
        <div class="info-card"><div class="ic">⏰</div><h4>Fast Service</h4><p>Same-day delivery guaranteed. Order today, get today.</p></div>
      </div>
      <div class="map"><iframe src="https://www.google.com/maps?q=Bandra%20Mumbai&output=embed" loading="lazy"></iframe></div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Visit or <span>Call Us</span></h3>
          <p>Visit our store or call us to place an order. We're here to serve you.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Store Address</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Store Hours</h5><p>Everyday: 7:00 AM – 10:00 PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Enquiry sent!');">
          <h4>Send Your Order / Enquiry</h4>
          <div class="form-group"><label>Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Your Order</label><textarea placeholder="List items you need..." required></textarea></div>
          <button type="submit" class="btn btn-primary">📤 Send Order</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>🏪 Sharma Kirana Store</h4><p>Serving our community since 1985. Quality products, honest prices, personal service.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Services</a></li><li><a href="#">Offers</a></li></ul></div>
        <div><h4>Services</h4><ul><li><a href="#">Grocery</a></li><li><a href="#">Delivery</a></li><li><a href="#">Bulk Orders</a></li><li><a href="#">Credit</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Sharma Kirana Store. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== MEDICAL STORE ==========
  "medical": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f0f9ff;color:#1e293b;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .topbar{background:#0284c7;color:#fff;padding:10px 30px;font-size:13px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;}
      .nav{position:sticky;top:0;background:rgba(255,255,255,0.98);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(10px);box-shadow:0 2px 20px rgba(2,132,199,0.12);}
      .nav .logo{display:flex;align-items:center;gap:10px;}
      .nav .logo-icon{width:48px;height:48px;background:linear-gradient(135deg,#0284c7,#0ea5e9);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 4px 15px rgba(2,132,199,0.3);}
      .nav .logo-text h1{font-size:20px;color:#0c4a6e;margin:0;font-weight:800;}
      .nav .logo-text p{font-size:12px;color:#0284c7;margin:0;font-weight:600;}
      .nav nav{display:flex;gap:26px;}
      .nav nav a{color:#1e293b;font-size:14px;font-weight:500;transition:color 0.3s;}
      .nav nav a:hover{color:#0284c7;}
      .nav .order-btn{padding:12px 24px;background:linear-gradient(135deg,#0284c7,#0ea5e9);color:#fff;border-radius:30px;font-weight:700;font-size:14px;transition:all 0.3s;box-shadow:0 4px 15px rgba(2,132,199,0.35);}
      .nav .order-btn:hover{transform:translateY(-3px);box-shadow:0 8px 25px rgba(2,132,199,0.55);}
      .hero{padding:90px 40px;background:linear-gradient(135deg,#e0f2fe,#f0f9ff);position:relative;overflow:hidden;}
      .hero::before{content:'';position:absolute;top:-100px;right:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(2,132,199,0.2),transparent 70%);border-radius:50%;}
      .hero-inner{position:relative;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.1fr 1fr;gap:60px;align-items:center;z-index:1;}
      .hero-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;background:#fff;border-radius:30px;color:#0284c7;font-size:13px;font-weight:600;margin-bottom:22px;box-shadow:0 4px 15px rgba(2,132,199,0.15);}
      .hero-badge::before{content:'●';color:#22c55e;animation:pulse 1.5s infinite;}
      @keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.3;}}
      .hero h2{font-size:clamp(34px,5.5vw,56px);line-height:1.15;color:#0c4a6e;margin-bottom:22px;}
      .hero h2 span{color:#0284c7;}
      .hero-desc{font-size:17px;color:#475569;margin-bottom:32px;max-width:520px;}
      .hero-cta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 32px;border-radius:30px;font-weight:700;font-size:15px;transition:all 0.3s;cursor:pointer;border:none;}
      .btn-primary{background:linear-gradient(135deg,#0284c7,#0ea5e9);color:#fff;box-shadow:0 8px 20px rgba(2,132,199,0.35);}
      .btn-primary:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(2,132,199,0.5);}
      .btn-outline{background:#fff;color:#0284c7;border:2px solid #0284c7;}
      .btn-outline:hover{background:#0284c7;color:#fff;transform:translateY(-4px);}
      .hero-features{display:flex;gap:24px;flex-wrap:wrap;}
      .hero-feature{display:flex;align-items:center;gap:10px;font-size:14px;color:#475569;font-weight:500;}
      .hero-feature::before{content:'✓';width:24px;height:24px;background:#22c55e;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;flex-shrink:0;}
      .hero-img{position:relative;}
      .hero-img img{width:100%;border-radius:24px;box-shadow:0 25px 60px rgba(2,132,199,0.25);}
      .float-card{position:absolute;bottom:-20px;left:-20px;background:#fff;padding:20px 24px;border-radius:16px;box-shadow:0 12px 35px rgba(0,0,0,0.15);display:flex;align-items:center;gap:14px;animation:float 4s ease-in-out infinite;}
      @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
      .float-card .ic{width:50px;height:50px;background:linear-gradient(135deg,#dcfce7,#bbf7d0);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;}
      .float-card h5{font-size:15px;color:#0c4a6e;margin-bottom:4px;}
      .float-card p{font-size:12px;color:#64748b;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#0284c7;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-size:clamp(28px,4vw,42px);color:#0c4a6e;margin-bottom:18px;line-height:1.2;}
      .section-title span{color:#0284c7;}
      .section-desc{font-size:16px;color:#64748b;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .categories-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
      .cat-card{background:#fff;padding:32px 20px;border-radius:16px;text-align:center;box-shadow:0 4px 20px rgba(2,132,199,0.08);transition:all 0.4s;cursor:pointer;position:relative;overflow:hidden;}
      .cat-card:hover{transform:translateY(-8px);box-shadow:0 20px 45px rgba(2,132,199,0.2);}
      .cat-card .emoji{font-size:48px;margin-bottom:14px;transition:transform 0.4s;}
      .cat-card:hover .emoji{transform:scale(1.15) rotate(-8deg);}
      .cat-card h4{font-size:16px;color:#0c4a6e;margin-bottom:6px;}
      .cat-card p{font-size:12px;color:#64748b;}
      .medicines-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
      .medicine{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(2,132,199,0.08);transition:all 0.4s;}
      .medicine:hover{transform:translateY(-8px);box-shadow:0 20px 45px rgba(2,132,199,0.2);}
      .medicine-img{height:180px;background:linear-gradient(135deg,#e0f2fe,#bae6fd);display:flex;align-items:center;justify-content:center;font-size:68px;position:relative;transition:all 0.4s;}
      .medicine:hover .medicine-img{font-size:80px;}
      .medicine-tag{position:absolute;top:12px;left:12px;background:#0284c7;color:#fff;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:700;}
      .medicine-tag.rx{background:#dc2626;}
      .medicine-info{padding:20px;}
      .medicine-info h4{font-size:15px;color:#0c4a6e;margin-bottom:6px;font-weight:700;}
      .medicine-info .desc{font-size:12px;color:#64748b;margin-bottom:10px;}
      .medicine-info .rating{color:#fbbf24;font-size:12px;margin-bottom:10px;}
      .medicine-info .price-row{display:flex;justify-content:space-between;align-items:center;}
      .medicine-info .price{font-size:18px;color:#0284c7;font-weight:800;}
      .medicine-info .price small{font-size:11px;color:#64748b;font-weight:400;}
      .medicine-info .order-btn{width:38px;height:38px;background:linear-gradient(135deg,#0284c7,#0ea5e9);color:#fff;border:none;border-radius:10px;font-size:16px;cursor:pointer;transition:all 0.3s;display:flex;align-items:center;justify-content:center;}
      .medicine-info .order-btn:hover{transform:scale(1.1);box-shadow:0 4px 15px rgba(2,132,199,0.5);}
      .features-section{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);}
      .features-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .features-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
      .feature-card{background:#fff;padding:32px 24px;border-radius:16px;text-align:center;box-shadow:0 4px 20px rgba(2,132,199,0.08);transition:all 0.4s;}
      .feature-card:hover{transform:translateY(-8px);box-shadow:0 15px 40px rgba(2,132,199,0.2);}
      .feature-card .ic{width:64px;height:64px;margin:0 auto 18px;background:linear-gradient(135deg,#e0f2fe,#bae6fd);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:30px;transition:transform 0.4s;}
      .feature-card:hover .ic{transform:scale(1.1) rotate(-8deg);}
      .feature-card h4{font-size:17px;color:#0c4a6e;margin-bottom:10px;font-weight:700;}
      .feature-card p{font-size:13px;color:#64748b;line-height:1.7;}
      .about-section{background:linear-gradient(135deg,#0c4a6e,#075985);color:#fff;}
      .about-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,0.3);}
      .about-img img{width:100%;height:480px;object-fit:cover;}
      .about-content h3{font-size:32px;margin-bottom:20px;line-height:1.3;}
      .about-content h3 span{color:#38bdf8;}
      .about-content p{font-size:16px;color:#bae6fd;line-height:1.8;margin-bottom:18px;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.08);padding:14px 18px;border-radius:10px;font-size:14px;color:#fff;font-weight:500;border:1px solid rgba(56,189,248,0.3);}
      .about-feat::before{content:'✓';width:24px;height:24px;background:#38bdf8;color:#0c4a6e;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;flex-shrink:0;}
      .contact-section{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:32px;color:#0c4a6e;margin-bottom:20px;}
      .contact-info h3 span{color:#0284c7;}
      .contact-info > p{color:#475569;margin-bottom:30px;font-size:15px;}
      .contact-item{display:flex;gap:16px;margin-bottom:22px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:#fff;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 15px rgba(2,132,199,0.15);transition:all 0.3s;}
      .contact-item:hover .ic{background:#0284c7;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#0284c7;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:700;}
      .contact-item p{font-size:15px;color:#0c4a6e;font-weight:500;}
      .contact-form{background:#fff;padding:40px;border-radius:20px;box-shadow:0 10px 40px rgba(2,132,199,0.15);}
      .contact-form h4{font-size:22px;color:#0c4a6e;margin-bottom:22px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#475569;font-size:13px;margin-bottom:8px;font-weight:600;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;color:#1e293b;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#0284c7;background:#fff;box-shadow:0 0 0 3px rgba(2,132,199,0.1);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-primary{width:100%;justify-content:center;}
      .footer{background:#082f49;color:#bae6fd;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#fff;font-size:17px;margin-bottom:18px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#bae6fd;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#38bdf8;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(186,230,253,0.2);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:60px 20px;}
        .hero-inner,.about-inner,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .about-img img{height:340px;}
        .section,.features-inner,.contact-inner{padding:60px 20px;}
        .categories-grid,.medicines-grid,.features-grid,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
      }
      @media(max-width:600px){
        .categories-grid,.medicines-grid,.features-grid,.footer-top,.about-features{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
        .topbar{justify-content:center;text-align:center;font-size:11px;}
      }
    </style></head><body>

    <div class="topbar">
      <span>💊 100% Genuine Medicines</span>
      <span>📞 +91 93093 32775</span>
      <span>🚚 Free Delivery on ₹300+</span>
    </div>

    <header class="nav">
      <div class="logo">
        <div class="logo-icon">💊</div>
        <div class="logo-text"><h1>MediCare Pharmacy</h1><p>Your Trusted Health Partner</p></div>
      </div>
      <nav><a href="#">Home</a><a href="#">Medicines</a><a href="#">Categories</a><a href="#">About</a><a href="#">Contact</a></nav>
      <a href="#" class="order-btn">📞 Order Now</a>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <div>
          <span class="hero-badge">LICENSED PHARMACY</span>
          <h2>Genuine Medicines,<br><span>Delivered Home</span></h2>
          <p class="hero-desc">All prescription and OTC medicines delivered to your door. 100% genuine products from licensed distributors with proper bills.</p>
          <div class="hero-cta">
            <a href="#" class="btn btn-primary">💊 Order Medicines</a>
            <a href="#" class="btn btn-outline">📞 Call to Order</a>
          </div>
          <div class="hero-features">
            <div class="hero-feature">100% Genuine</div>
            <div class="hero-feature">Free Delivery</div>
            <div class="hero-feature">24/7 Support</div>
          </div>
        </div>
        <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80" alt="Pharmacy">
          <div class="float-card"><div class="ic">✓</div><div><h5>100% Verified</h5><p>Licensed & trusted</p></div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Browse by Category</span>
        <h2 class="section-title">Medicine <span>Categories</span></h2>
        <p class="section-desc">Find what you need quickly by browsing our well-organized categories.</p>
      </div>
      <div class="categories-grid">
        <div class="cat-card"><div class="emoji">💊</div><h4>Tablets & Capsules</h4><p>500+ items</p></div>
        <div class="cat-card"><div class="emoji">🧴</div><h4>Syrups & Liquids</h4><p>200+ items</p></div>
        <div class="cat-card"><div class="emoji">🩹</div><h4>First Aid</h4><p>100+ items</p></div>
        <div class="cat-card"><div class="emoji">🧪</div><h4>Health Supplements</h4><p>150+ items</p></div>
        <div class="cat-card"><div class="emoji">🌡️</div><h4>Medical Devices</h4><p>80+ items</p></div>
        <div class="cat-card"><div class="emoji">🧴</div><h4>Personal Care</h4><p>200+ items</p></div>
        <div class="cat-card"><div class="emoji">👶</div><h4>Baby Care</h4><p>120+ items</p></div>
        <div class="cat-card"><div class="emoji">🌿</div><h4>Ayurvedic</h4><p>90+ items</p></div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Popular Products</span>
        <h2 class="section-title">Bestselling <span>Medicines</span></h2>
        <p class="section-desc">Trusted by thousands of customers — safe, effective, and always in stock.</p>
      </div>
      <div class="medicines-grid">
        <div class="medicine"><div class="medicine-img">💊<div class="medicine-tag">OTC</div></div><div class="medicine-info"><h4>Paracetamol 500mg</h4><div class="desc">Fever & pain relief</div><div class="rating">★★★★★ (234)</div><div class="price-row"><div class="price">₹25<small>/strip</small></div><button class="order-btn">+</button></div></div></div>
        <div class="medicine"><div class="medicine-img">🧴<div class="medicine-tag">SAVE 20%</div></div><div class="medicine-info"><h4>Hand Sanitizer 500ml</h4><div class="desc">70% alcohol-based</div><div class="rating">★★★★★ (189)</div><div class="price-row"><div class="price">₹80<small>/bottle</small></div><button class="order-btn">+</button></div></div></div>
        <div class="medicine"><div class="medicine-img">🌡️<div class="medicine-tag">BESTSELLER</div></div><div class="medicine-info"><h4>Digital Thermometer</h4><div class="desc">Fast & accurate reading</div><div class="rating">★★★★★ (145)</div><div class="price-row"><div class="price">₹180<small>/unit</small></div><button class="order-btn">+</button></div></div></div>
        <div class="medicine"><div class="medicine-img">🩹<div class="medicine-tag">OTC</div></div><div class="medicine-info"><h4>Bandage Pack</h4><div class="desc">Sterile adhesive bandages</div><div class="rating">★★★★☆ (78)</div><div class="price-row"><div class="price">₹40<small>/pack</small></div><button class="order-btn">+</button></div></div></div>
        <div class="medicine"><div class="medicine-img">💊<div class="medicine-tag rx">Rx</div></div><div class="medicine-info"><h4>Amoxicillin 500mg</h4><div class="desc">Antibiotic (prescription required)</div><div class="rating">★★★★★ (56)</div><div class="price-row"><div class="price">₹120<small>/strip</small></div><button class="order-btn">+</button></div></div></div>
        <div class="medicine"><div class="medicine-img">🧪<div class="medicine-tag">NEW</div></div><div class="medicine-info"><h4>Vitamin D3 Tablets</h4><div class="desc">Bone health supplement</div><div class="rating">★★★★★ (167)</div><div class="price-row"><div class="price">₹240<small>/bottle</small></div><button class="order-btn">+</button></div></div></div>
        <div class="medicine"><div class="medicine-img">🧴<div class="medicine-tag">BESTSELLER</div></div><div class="medicine-info"><h4>Cough Syrup 100ml</h4><div class="desc">Relieves cough & cold</div><div class="rating">★★★★☆ (92)</div><div class="price-row"><div class="price">₹95<small>/bottle</small></div><button class="order-btn">+</button></div></div></div>
        <div class="medicine"><div class="medicine-img">💊<div class="medicine-tag">OTC</div></div><div class="medicine-info"><h4>ORS Powder</h4><div class="desc">Electrolyte replacement</div><div class="rating">★★★★★ (203)</div><div class="price-row"><div class="price">₹35<small>/pack</small></div><button class="order-btn">+</button></div></div></div>
      </div>
    </section>

    <section class="features-section">
      <div class="features-inner">
        <div class="section-header">
          <span class="section-tag">Why Choose Us</span>
          <h2 class="section-title">Why <span>MediCare</span>?</h2>
          <p class="section-desc">Trusted pharmacy services with genuine medicines and reliable delivery.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card"><div class="ic">✅</div><h4>100% Genuine</h4><p>All medicines sourced directly from licensed manufacturers and distributors.</p></div>
          <div class="feature-card"><div class="ic">🚚</div><h4>Free Delivery</h4><p>Free home delivery on orders above ₹300. Same-day delivery available.</p></div>
          <div class="feature-card"><div class="ic">💰</div><h4>Best Prices</h4><p>Up to 20% discount on regular medicines and health products.</p></div>
          <div class="feature-card"><div class="ic">👨‍⚕️</div><h4>Expert Support</h4><p>Qualified pharmacists available to guide you on medication and dosages.</p></div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="about-inner">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Pharmacist"></div>
        <div class="about-content">
          <span class="section-tag" style="color:#38bdf8;">About Us</span>
          <h3>Your Trusted <span>Pharmacy Partner</span></h3>
          <p>MediCare Pharmacy has been serving the community for over 15 years. We're a licensed, government-approved pharmacy committed to making healthcare accessible and affordable.</p>
          <p>With a team of qualified pharmacists and a complete inventory of genuine medicines, we ensure you get exactly what you need — when you need it.</p>
          <div class="about-features">
            <div class="about-feat">Licensed Pharmacy</div>
            <div class="about-feat">Qualified Staff</div>
            <div class="about-feat">Same-Day Delivery</div>
            <div class="about-feat">Easy Returns</div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Order or <span>Enquire</span></h3>
          <p>Send us your prescription via WhatsApp or call us directly. We'll deliver to your door.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Store Address</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Hours</h5><p>Mon–Sun: 8AM – 11PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Order sent!');">
          <h4>Place Your Order</h4>
          <div class="form-group"><label>Your Name</label><input type="text" placeholder="Full name" required></div>
          <div class="form-group"><label>Phone Number</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Prescription / Order Details</label><textarea placeholder="List medicines or describe your need..." required></textarea></div>
          <button type="submit" class="btn btn-primary">📤 Submit Order</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>💊 MediCare Pharmacy</h4><p>Your trusted neighborhood pharmacy — licensed, genuine, and always caring. 15+ years of service.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Medicines</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Categories</h4><ul><li><a href="#">Tablets</a></li><li><a href="#">Syrups</a></li><li><a href="#">Supplements</a></li><li><a href="#">Devices</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 MediCare Pharmacy. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== ASTROLOGY 1: KUNDLI ==========
  "astro1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#1a0f2e;color:#f0e6ff;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(26,15,46,0.96);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,215,0,0.25);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#ffd700,#ff8c00);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;box-shadow:0 0 25px rgba(255,180,0,0.5);}
      .nav .logo-text h1{font-size:20px;background:linear-gradient(90deg,#ffd700,#ff8c00);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin:0;letter-spacing:2px;}
      .nav .logo-text p{font-size:11px;color:#c8b6ff;margin:0;letter-spacing:1px;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#f0e6ff;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#ffd700;}
      .nav .cta-btn{padding:12px 24px;background:linear-gradient(135deg,#ffd700,#ff8c00);color:#1a0f2e;border-radius:30px;font-weight:700;font-size:14px;transition:all 0.3s;box-shadow:0 0 20px rgba(255,180,0,0.5);}
      .nav .cta-btn:hover{transform:translateY(-3px);box-shadow:0 0 40px rgba(255,180,0,0.9);}
      .hero{position:relative;padding:110px 40px 80px;text-align:center;background:radial-gradient(ellipse at 50% 0%,rgba(255,215,0,0.2),transparent 60%);overflow:hidden;}
      .hero::before{content:'✧ ✦ ✧ ✦ ✧';position:absolute;top:40px;left:50%;transform:translateX(-50%);color:#ffd700;font-size:22px;letter-spacing:14px;opacity:0.6;animation:twinkle 3s ease-in-out infinite alternate;white-space:nowrap;}
      @keyframes twinkle{from{opacity:0.3;}to{opacity:1;}}
      .hero::after{content:'✦';position:absolute;bottom:40px;right:10%;color:#ffd700;font-size:40px;opacity:0.3;animation:float 4s ease-in-out infinite;}
      @keyframes float{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-20px) rotate(180deg);}}
      .hero-content{position:relative;max-width:900px;margin:0 auto;z-index:1;}
      .hero-badge{display:inline-block;padding:8px 22px;border:1px solid rgba(255,215,0,0.5);border-radius:30px;color:#ffd700;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:26px;animation:fadeUp 1s ease;background:rgba(255,215,0,0.08);}
      @keyframes fadeUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
      .hero h1{font-size:clamp(38px,6.5vw,72px);line-height:1.1;margin-bottom:24px;background:linear-gradient(90deg,#ffd700,#ff8c00,#ffd700);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shine 4s linear infinite,fadeUp 1s ease 0.2s backwards;font-weight:normal;}
      @keyframes shine{to{background-position:200% center;}}
      .hero p{font-size:18px;color:#c8b6ff;max-width:640px;margin:0 auto 40px;animation:fadeUp 1s ease 0.4s backwards;}
      .hero-cta{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;animation:fadeUp 1s ease 0.6s backwards;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:30px;font-weight:700;font-size:15px;border:none;cursor:pointer;transition:all 0.3s;font-family:'Georgia',serif;}
      .btn-gold{background:linear-gradient(135deg,#ffd700,#ff8c00);color:#1a0f2e;box-shadow:0 0 30px rgba(255,180,0,0.6);}
      .btn-gold:hover{transform:translateY(-4px);box-shadow:0 0 50px rgba(255,180,0,1);}
      .btn-outline{border:2px solid #ffd700;color:#ffd700;background:transparent;}
      .btn-outline:hover{background:#ffd700;color:#1a0f2e;transform:translateY(-4px);}
      .hero-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:700px;margin:60px auto 0;animation:fadeUp 1s ease 0.8s backwards;}
      .hero-stat{background:rgba(255,215,0,0.06);border:1px solid rgba(255,215,0,0.3);padding:24px 16px;border-radius:16px;transition:all 0.3s;}
      .hero-stat:hover{background:rgba(255,215,0,0.12);transform:translateY(-5px);box-shadow:0 10px 30px rgba(255,180,0,0.3);}
      .hero-stat h3{font-size:32px;color:#ffd700;margin-bottom:6px;}
      .hero-stat p{font-size:12px;color:#c8b6ff;text-transform:uppercase;letter-spacing:1px;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#ffd700;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-size:clamp(30px,4.5vw,44px);color:#fff;margin-bottom:18px;line-height:1.2;font-weight:normal;}
      .section-title span{color:#ffd700;font-style:italic;}
      .section-desc{font-size:16px;color:#c8b6ff;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
      .service-card{background:linear-gradient(160deg,rgba(255,215,0,0.08),rgba(26,15,46,0.4));padding:40px 28px;border-radius:20px;border:1px solid rgba(255,215,0,0.25);transition:all 0.4s;text-align:center;position:relative;overflow:hidden;}
      .service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#ffd700,#ff8c00);transform:scaleX(0);transition:transform 0.4s;}
      .service-card:hover{transform:translateY(-8px);border-color:#ffd700;box-shadow:0 20px 50px rgba(255,180,0,0.3);}
      .service-card:hover::before{transform:scaleX(1);}
      .service-icon{font-size:56px;margin-bottom:20px;display:inline-block;transition:transform 0.4s;}
      .service-card:hover .service-icon{transform:scale(1.2) rotate(-10deg);}
      .service-card h4{font-size:22px;color:#ffd700;margin-bottom:12px;font-weight:normal;}
      .service-card p{font-size:14px;color:#c8b6ff;line-height:1.7;}
      .service-card .price-tag{display:inline-block;margin-top:16px;padding:8px 18px;background:rgba(255,215,0,0.15);border:1px solid rgba(255,215,0,0.4);border-radius:20px;color:#ffd700;font-size:13px;font-weight:bold;}
      .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(255,180,0,0.25);position:relative;}
      .about-img img{width:100%;height:520px;object-fit:cover;}
      .about-img::before{content:'✦';position:absolute;top:20px;right:20px;font-size:40px;color:#ffd700;animation:float 3s ease-in-out infinite;}
      .about-content h3{font-size:34px;color:#fff;margin-bottom:20px;line-height:1.3;font-weight:normal;}
      .about-content h3 span{color:#ffd700;font-style:italic;}
      .about-content p{font-size:16px;color:#c8b6ff;line-height:1.8;margin-bottom:18px;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:10px;background:rgba(255,215,0,0.08);padding:14px 18px;border-radius:10px;font-size:14px;color:#f0e6ff;border:1px solid rgba(255,215,0,0.2);}
      .about-feat::before{content:'✦';width:24px;height:24px;background:#ffd700;color:#1a0f2e;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;font-weight:bold;}
      .process-section{background:linear-gradient(180deg,transparent,rgba(255,215,0,0.05),transparent);}
      .process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
      .process-card{text-align:center;padding:32px 20px;position:relative;}
      .process-card .num{width:70px;height:70px;margin:0 auto 20px;background:linear-gradient(135deg,#ffd700,#ff8c00);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:900;color:#1a0f2e;box-shadow:0 8px 25px rgba(255,180,0,0.5);}
      .process-card h4{font-size:18px;color:#ffd700;margin-bottom:10px;font-weight:normal;}
      .process-card p{font-size:13px;color:#c8b6ff;line-height:1.6;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .testimonial-card{background:linear-gradient(160deg,rgba(255,215,0,0.08),rgba(26,15,46,0.4));padding:36px 28px;border-radius:20px;border:1px solid rgba(255,215,0,0.25);transition:all 0.4s;position:relative;}
      .testimonial-card::before{content:'"';position:absolute;top:10px;left:20px;font-size:80px;color:rgba(255,215,0,0.3);font-family:Georgia;line-height:1;}
      .testimonial-card:hover{transform:translateY(-8px);border-color:#ffd700;box-shadow:0 20px 50px rgba(255,180,0,0.3);}
      .testimonial-card .stars{color:#ffd700;font-size:16px;margin-bottom:14px;position:relative;z-index:1;}
      .testimonial-card .quote{font-size:14.5px;color:#c8b6ff;line-height:1.8;margin-bottom:22px;position:relative;z-index:1;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;position:relative;z-index:1;}
      .testimonial-card .author .av{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#ffd700,#ff8c00);display:flex;align-items:center;justify-content:center;color:#1a0f2e;font-weight:bold;font-size:18px;}
      .testimonial-card .author h5{font-size:15px;color:#fff;margin-bottom:4px;}
      .testimonial-card .author p{font-size:12px;color:#ffd700;}
      .contact-section{background:linear-gradient(135deg,#0f0820,#1a0f2e);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:90px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:34px;color:#fff;margin-bottom:20px;font-weight:normal;}
      .contact-info h3 span{color:#ffd700;font-style:italic;}
      .contact-info > p{color:#c8b6ff;margin-bottom:32px;}
      .contact-item{display:flex;gap:16px;margin-bottom:24px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:rgba(255,215,0,0.15);border:1px solid rgba(255,215,0,0.4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;color:#ffd700;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .ic{background:#ffd700;color:#1a0f2e;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#ffd700;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:bold;}
      .contact-item p{font-size:15px;color:#fff;}
      .contact-form{background:rgba(255,215,0,0.05);padding:40px;border-radius:20px;border:1px solid rgba(255,215,0,0.3);}
      .contact-form h4{font-size:22px;color:#ffd700;margin-bottom:22px;font-weight:normal;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#c8b6ff;font-size:13px;margin-bottom:8px;font-weight:500;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:rgba(0,0,0,0.4);border:1px solid rgba(255,215,0,0.3);border-radius:10px;color:#fff;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#ffd700;background:rgba(0,0,0,0.6);box-shadow:0 0 0 3px rgba(255,215,0,0.15);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-gold{width:100%;justify-content:center;}
      .footer{background:#05030f;color:#8a7fa8;padding:60px 40px 30px;border-top:1px solid rgba(255,215,0,0.15);}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#ffd700;font-size:17px;margin-bottom:18px;font-weight:normal;letter-spacing:1px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#8a7fa8;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#ffd700;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(255,215,0,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:70px 20px 60px;}
        .hero-stats{grid-template-columns:1fr 1fr 1fr;gap:12px;}
        .hero-stat h3{font-size:24px;}
        .section,.contact-inner{padding:60px 20px;}
        .services-grid,.testimonial-grid,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .about-grid,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .about-img img{height:340px;}
        .process-grid{grid-template-columns:1fr 1fr;gap:16px;}
      }
      @media(max-width:600px){
        .services-grid,.testimonial-grid,.process-grid,.about-features,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .hero-stats{grid-template-columns:1fr;}
        .contact-form{padding:26px 20px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo">
        <div class="logo-icon">🔮</div>
        <div class="logo-text"><h1>PANDIT JI ASTROLOGY</h1><p>30+ Years of Divine Guidance</p></div>
      </div>
      <nav><a href="#">Home</a><a href="#">Services</a><a href="#">About</a><a href="#">Testimonials</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">📞 Book Consultation</a>
    </header>

    <section class="hero">
      <div class="hero-content">
        <span class="hero-badge">✦ VEDIC ASTROLOGY EXPERT ✦</span>
        <h1>Discover Your Destiny</h1>
        <p>Expert astrological guidance for love, career, health, and prosperity. Trusted by over 25,000 clients across India for accurate predictions and effective remedies.</p>
        <div class="hero-cta">
          <a href="#" class="btn btn-gold">✨ Get Your Kundli</a>
          <a href="#" class="btn btn-outline">📞 Talk to Astrologer</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><h3>30+</h3><p>Years Experience</p></div>
          <div class="hero-stat"><h3>25,000+</h3><p>Happy Clients</p></div>
          <div class="hero-stat"><h3>98%</h3><p>Accuracy Rate</p></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Our Services</span>
        <h2 class="section-title">Divine <span>Guidance</span> Services</h2>
        <p class="section-desc">Personalized astrological solutions for every aspect of your life.</p>
      </div>
      <div class="services-grid">
        <div class="service-card"><div class="service-icon">🌟</div><h4>Kundli Reading</h4><p>Detailed birth chart analysis with life predictions and personalized remedies.</p><div class="price-tag">₹1,100</div></div>
        <div class="service-card"><div class="service-icon">💖</div><h4>Love Compatibility</h4><p>Match-making, relationship guidance, and solutions for love life.</p><div class="price-tag">₹1,500</div></div>
        <div class="service-card"><div class="service-icon">💼</div><h4>Career Prediction</h4><p>Discover your ideal career path through Vedic astrology analysis.</p><div class="price-tag">₹1,000</div></div>
        <div class="service-card"><div class="service-icon">🏥</div><h4>Health Remedies</h4><p>Astrological remedies for better health and well-being.</p><div class="price-tag">₹1,200</div></div>
        <div class="service-card"><div class="service-icon">💰</div><h4>Wealth & Finance</h4><p>Financial predictions and remedies to attract wealth.</p><div class="price-tag">₹1,500</div></div>
        <div class="service-card"><div class="service-icon">🏠</div><h4>Vastu Consultation</h4><p>Home and office Vastu remedies for peace & prosperity.</p><div class="price-tag">₹2,100</div></div>
      </div>
    </section>

    <section class="section">
      <div class="about-grid">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&w=800&q=80" alt="Astrologer"></div>
        <div class="about-content">
          <span class="section-tag">About Pandit Ji</span>
          <h3>30+ Years of <span>Divine Wisdom</span></h3>
          <p>Pandit Ji is a renowned Vedic astrologer who has been guiding people for over three decades. His accurate predictions and effective remedies have transformed thousands of lives.</p>
          <p>Trained in traditional Vedic astrology under legendary gurus, he combines ancient wisdom with modern understanding to provide practical solutions.</p>
          <div class="about-features">
            <div class="about-feat">Gold Medalist</div>
            <div class="about-feat">Vedic Expert</div>
            <div class="about-feat">100% Confidential</div>
            <div class="about-feat">Online & Offline</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section process-section">
      <div class="section-header">
        <span class="section-tag">Simple Process</span>
        <h2 class="section-title">How It <span>Works</span></h2>
        <p class="section-desc">Getting your personalized astrology consultation is easy and quick.</p>
      </div>
      <div class="process-grid">
        <div class="process-card"><div class="num">1</div><h4>Book Appointment</h4><p>Call or WhatsApp to book your consultation slot.</p></div>
        <div class="process-card"><div class="num">2</div><h4>Share Details</h4><p>Provide birth date, time, and place for accurate analysis.</p></div>
        <div class="process-card"><div class="num">3</div><h4>Get Consultation</h4><p>Discuss your concerns personally with Pandit Ji.</p></div>
        <div class="process-card"><div class="num">4</div><h4>Receive Remedies</h4><p>Get personalized remedies and detailed report.</p></div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Client Stories</span>
        <h2 class="section-title">What Our <span>Clients Say</span></h2>
        <p class="section-desc">Real experiences from real people whose lives have been transformed.</p>
      </div>
      <div class="testimonial-grid">
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Pandit Ji's predictions about my career were incredibly accurate. Within 3 months of following his remedies, I got my dream job!"</p><div class="author"><div class="av">RK</div><div><h5>Rahul Khanna</h5><p>Software Engineer</p></div></div></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"I was struggling in my marriage. Pandit Ji's guidance and remedies saved my relationship. Forever grateful to him."</p><div class="author"><div class="av">SP</div><div><h5>Sunita Patel</h5><p>Homemaker</p></div></div></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The accuracy of his kundli reading left me speechless. Every prediction about my business came true. Highly recommended!"</p><div class="author"><div class="av">AM</div><div><h5>Amit Mehta</h5><p>Business Owner</p></div></div></div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Get Your <span>Consultation</span></h3>
          <p>Book your personal consultation with Pandit Ji. Available online and offline.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Office</h5><p>Bandra, Mumbai, Maharashtra</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Hours</h5><p>Mon–Sun: 9AM – 8PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Consultation request sent!');">
          <h4>Book Consultation</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Consultation Type</label><select required><option>-- Select --</option><option>Kundli Reading</option><option>Love Problem</option><option>Career Guidance</option><option>Health Remedies</option><option>Wealth & Finance</option></select></div>
          <div class="form-group"><label>Your Concern</label><textarea placeholder="Describe your situation..." required></textarea></div>
          <button type="submit" class="btn btn-gold">✦ Book Now</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>🔮 Pandit Ji Astrology</h4><p>30+ years of divine guidance. Accurate predictions, effective remedies, and trusted advice for all life's challenges.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Services</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Services</h4><ul><li><a href="#">Kundli</a></li><li><a href="#">Love</a></li><li><a href="#">Career</a></li><li><a href="#">Vastu</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Pandit Ji Astrology. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== ASTROLOGY 2: TAROT ==========
  "astro2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#0f0a1a;color:#e6d9ff;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(15,10,26,0.96);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(12px);border-bottom:1px solid rgba(161,0,255,0.3);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#a100ff,#00d4ff);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 0 25px rgba(161,0,255,0.5);}
      .nav .logo-text h1{font-size:20px;background:linear-gradient(90deg,#a100ff,#00d4ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin:0;letter-spacing:2px;}
      .nav .logo-text p{font-size:11px;color:#c8b6ff;margin:0;letter-spacing:1px;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#e6d9ff;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#a100ff;}
      .nav .cta-btn{padding:12px 24px;background:linear-gradient(135deg,#a100ff,#00d4ff);color:#fff;border-radius:30px;font-weight:700;font-size:14px;transition:all 0.3s;box-shadow:0 0 20px rgba(161,0,255,0.5);}
      .nav .cta-btn:hover{transform:translateY(-3px);box-shadow:0 0 40px rgba(161,0,255,0.9);}
      .hero{position:relative;padding:110px 40px 80px;text-align:center;background:radial-gradient(ellipse at 50% 0%,rgba(161,0,255,0.3),transparent 60%);overflow:hidden;}
      .hero::before{content:'🌙';position:absolute;top:40px;left:10%;font-size:60px;opacity:0.3;animation:float 5s ease-in-out infinite;}
      .hero::after{content:'⭐';position:absolute;top:60px;right:15%;font-size:40px;opacity:0.3;animation:float 4s ease-in-out infinite reverse;}
      @keyframes float{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-20px) rotate(20deg);}}
      .hero-content{position:relative;max-width:900px;margin:0 auto;z-index:1;}
      .hero-badge{display:inline-block;padding:8px 22px;border:1px solid rgba(161,0,255,0.5);border-radius:30px;color:#a100ff;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:26px;background:rgba(161,0,255,0.08);}
      .hero h1{font-size:clamp(38px,6.5vw,72px);line-height:1.1;margin-bottom:24px;background:linear-gradient(90deg,#a100ff,#00d4ff,#a100ff);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shine 4s linear infinite;font-weight:normal;}
      @keyframes shine{to{background-position:200% center;}}
      .hero p{font-size:18px;color:#c8b6ff;max-width:640px;margin:0 auto 40px;}
      .hero-cta{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:30px;font-weight:700;font-size:15px;border:none;cursor:pointer;transition:all 0.3s;font-family:'Georgia',serif;}
      .btn-grad{background:linear-gradient(135deg,#a100ff,#00d4ff);color:#fff;box-shadow:0 0 30px rgba(161,0,255,0.6);}
      .btn-grad:hover{transform:translateY(-4px);box-shadow:0 0 50px rgba(161,0,255,1);}
      .btn-outline{border:2px solid #a100ff;color:#a100ff;background:transparent;}
      .btn-outline:hover{background:#a100ff;color:#fff;transform:translateY(-4px);}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#a100ff;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-size:clamp(30px,4.5vw,44px);color:#fff;margin-bottom:18px;line-height:1.2;font-weight:normal;}
      .section-title span{color:#a100ff;font-style:italic;}
      .section-desc{font-size:16px;color:#c8b6ff;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .cards-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
      .tarot-card{background:linear-gradient(160deg,rgba(161,0,255,0.15),rgba(0,212,255,0.1));padding:40px 24px;border-radius:20px;border:1px solid rgba(161,0,255,0.3);text-align:center;transition:all 0.4s;cursor:pointer;position:relative;overflow:hidden;}
      .tarot-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(161,0,255,0.3),transparent);opacity:0;transition:opacity 0.4s;}
      .tarot-card:hover{transform:translateY(-10px) rotate(-2deg);border-color:#a100ff;box-shadow:0 20px 50px rgba(161,0,255,0.5);}
      .tarot-card:hover::before{opacity:1;}
      .tarot-card .icon{font-size:56px;margin-bottom:16px;position:relative;transition:transform 0.4s;display:block;}
      .tarot-card:hover .icon{transform:scale(1.2) rotate(10deg);}
      .tarot-card h4{font-size:18px;color:#00d4ff;margin-bottom:8px;position:relative;font-weight:normal;}
      .tarot-card p{font-size:12px;color:#c8b6ff;position:relative;}
      .tarot-card .price{display:inline-block;margin-top:14px;padding:6px 16px;background:rgba(161,0,255,0.2);border-radius:20px;color:#a100ff;font-size:12px;font-weight:bold;position:relative;}
      .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(161,0,255,0.3);}
      .about-img img{width:100%;height:520px;object-fit:cover;}
      .about-content h3{font-size:34px;color:#fff;margin-bottom:20px;line-height:1.3;font-weight:normal;}
      .about-content h3 span{color:#a100ff;font-style:italic;}
      .about-content p{font-size:16px;color:#c8b6ff;line-height:1.8;margin-bottom:18px;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:10px;background:rgba(161,0,255,0.1);padding:14px 18px;border-radius:10px;font-size:14px;color:#e6d9ff;border:1px solid rgba(161,0,255,0.3);}
      .about-feat::before{content:'✦';width:24px;height:24px;background:#a100ff;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;font-weight:bold;}
      .reading-section{background:linear-gradient(180deg,transparent,rgba(161,0,255,0.08),transparent);}
      .reading-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .step-card{background:linear-gradient(160deg,rgba(161,0,255,0.1),rgba(0,212,255,0.05));padding:40px 28px;border-radius:20px;border:1px solid rgba(161,0,255,0.3);position:relative;text-align:center;transition:all 0.4s;}
      .step-card:hover{transform:translateY(-8px);border-color:#a100ff;box-shadow:0 20px 50px rgba(161,0,255,0.4);}
      .step-card .num{width:70px;height:70px;margin:0 auto 20px;background:linear-gradient(135deg,#a100ff,#00d4ff);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:900;color:#fff;box-shadow:0 8px 25px rgba(161,0,255,0.5);}
      .step-card h4{font-size:20px;color:#00d4ff;margin-bottom:12px;font-weight:normal;}
      .step-card p{font-size:14px;color:#c8b6ff;line-height:1.7;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .testimonial-card{background:linear-gradient(160deg,rgba(161,0,255,0.1),rgba(0,212,255,0.05));padding:36px 28px;border-radius:20px;border:1px solid rgba(161,0,255,0.3);transition:all 0.4s;position:relative;}
      .testimonial-card:hover{transform:translateY(-8px);border-color:#a100ff;box-shadow:0 20px 50px rgba(161,0,255,0.3);}
      .testimonial-card .stars{color:#a100ff;font-size:16px;margin-bottom:14px;}
      .testimonial-card .quote{font-size:14.5px;color:#c8b6ff;line-height:1.8;margin-bottom:22px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#a100ff,#00d4ff);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:18px;}
      .testimonial-card .author h5{font-size:15px;color:#fff;margin-bottom:4px;}
      .testimonial-card .author p{font-size:12px;color:#00d4ff;}
      .contact-section{background:linear-gradient(135deg,#05030f,#0f0a1a);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:90px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:34px;color:#fff;margin-bottom:20px;font-weight:normal;}
      .contact-info h3 span{color:#a100ff;font-style:italic;}
      .contact-info > p{color:#c8b6ff;margin-bottom:32px;}
      .contact-item{display:flex;gap:16px;margin-bottom:24px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:rgba(161,0,255,0.15);border:1px solid rgba(161,0,255,0.4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;color:#a100ff;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .ic{background:#a100ff;color:#fff;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#a100ff;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:bold;}
      .contact-item p{font-size:15px;color:#fff;}
      .contact-form{background:rgba(161,0,255,0.05);padding:40px;border-radius:20px;border:1px solid rgba(161,0,255,0.3);}
      .contact-form h4{font-size:22px;color:#a100ff;margin-bottom:22px;font-weight:normal;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#c8b6ff;font-size:13px;margin-bottom:8px;font-weight:500;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:rgba(0,0,0,0.4);border:1px solid rgba(161,0,255,0.3);border-radius:10px;color:#fff;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#a100ff;background:rgba(0,0,0,0.6);box-shadow:0 0 0 3px rgba(161,0,255,0.15);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-grad{width:100%;justify-content:center;}
      .footer{background:#05030f;color:#8a7fa8;padding:60px 40px 30px;border-top:1px solid rgba(161,0,255,0.15);}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#a100ff;font-size:17px;margin-bottom:18px;font-weight:normal;letter-spacing:1px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#8a7fa8;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#a100ff;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(161,0,255,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:70px 20px 60px;}
        .section,.contact-inner{padding:60px 20px;}
        .cards-grid,.testimonial-grid,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .about-grid,.contact-inner,.reading-steps{grid-template-columns:1fr;gap:30px;}
        .about-img img{height:340px;}
      }
      @media(max-width:600px){
        .cards-grid,.testimonial-grid,.reading-steps,.about-features,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo">
        <div class="logo-icon">🎴</div>
        <div class="logo-text"><h1>MYSTIC TAROT</h1><p>Unlock Your Future</p></div>
      </div>
      <nav><a href="#">Home</a><a href="#">Readings</a><a href="#">About</a><a href="#">Testimonials</a><a href="#">Book</a></nav>
      <a href="#" class="cta-btn">🌙 Book Reading</a>
    </header>

    <section class="hero">
      <div class="hero-content">
        <span class="hero-badge">✨ TAROT CARD READER ✨</span>
        <h1>Unlock Your Future</h1>
        <p>Personal tarot readings reveal the path your soul must walk. Discover hidden truths, find clarity in confusion, and embrace your destiny with expert guidance.</p>
        <div class="hero-cta">
          <a href="#" class="btn btn-grad">🌙 Book a Reading</a>
          <a href="#" class="btn btn-outline">🎴 Free Daily Card</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Choose Your Reading</span>
        <h2 class="section-title">Tarot <span>Reading Options</span></h2>
        <p class="section-desc">Select the type of reading that best suits your current needs.</p>
      </div>
      <div class="cards-grid">
        <div class="tarot-card"><span class="icon">🌞</span><h4>Daily Card</h4><p>Quick insight for today</p><div class="price">₹199</div></div>
        <div class="tarot-card"><span class="icon">🌙</span><h4>Full Reading</h4><p>Complete life picture</p><div class="price">₹899</div></div>
        <div class="tarot-card"><span class="icon">💖</span><h4>Love Reading</h4><p>Relationship insights</p><div class="price">₹1,199</div></div>
        <div class="tarot-card"><span class="icon">💼</span><h4>Career Path</h4><p>Professional guidance</p><div class="price">₹1,299</div></div>
        <div class="tarot-card"><span class="icon">🔮</span><h4>Past Life</h4><p>Discover your past</p><div class="price">₹1,499</div></div>
        <div class="tarot-card"><span class="icon">🌟</span><h4>Year Ahead</h4><p>12-month forecast</p><div class="price">₹1,899</div></div>
        <div class="tarot-card"><span class="icon">💫</span><h4>Celtic Cross</h4><p>Deep dive analysis</p><div class="price">₹2,199</div></div>
        <div class="tarot-card"><span class="icon">🎴</span><h4>Custom</h4><p>Personalized reading</p><div class="price">Talk to Us</div></div>
      </div>
    </section>

    <section class="section">
      <div class="about-grid">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?auto=format&fit=crop&w=800&q=80" alt="Tarot Reader"></div>
        <div class="about-content">
          <span class="section-tag">About Mystic</span>
          <h3>15+ Years of <span>Tarot Wisdom</span></h3>
          <p>Mystic Seraphina is a gifted tarot reader who has been helping people find clarity and purpose for over 15 years. Her intuitive readings have touched thousands of lives.</p>
          <p>Using a combination of traditional tarot wisdom and modern psychological insight, she provides practical guidance that you can apply to your daily life.</p>
          <div class="about-features">
            <div class="about-feat">15+ Years Exp</div>
            <div class="about-feat">Online Readings</div>
            <div class="about-feat">100% Confidential</div>
            <div class="about-feat">Accurate Insights</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section reading-section">
      <div class="section-header">
        <span class="section-tag">How It Works</span>
        <h2 class="section-title">Simple <span>Steps</span></h2>
        <p class="section-desc">Get your personalized tarot reading in 3 simple steps.</p>
      </div>
      <div class="reading-steps">
        <div class="step-card"><div class="num">1</div><h4>Choose Reading</h4><p>Select the type of reading from our options and book your session.</p></div>
        <div class="step-card"><div class="num">2</div><h4>Share Your Focus</h4><p>Tell us what area of life you want clarity on — love, career, health, etc.</p></div>
        <div class="step-card"><div class="num">3</div><h4>Receive Insight</h4><p>Get your detailed reading via video call or written report.</p></div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Testimonials</span>
        <h2 class="section-title">Client <span>Experiences</span></h2>
        <p class="section-desc">Real stories from people whose paths were illuminated by tarot.</p>
      </div>
      <div class="testimonial-grid">
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The reading was eerily accurate. It gave me the clarity I needed to make a big life decision. Forever grateful."</p><div class="author"><div class="av">PM</div><div><h5>Priya Mehta</h5><p>Regular Client</p></div></div></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Seraphina has an amazing gift. Her love reading helped me understand my relationship patterns and heal."</p><div class="author"><div class="av">RK</div><div><h5>Rohan Kumar</h5><p>Client</p></div></div></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"I was skeptical at first, but the career reading was spot on. Within 6 months I got the promotion I'd been hoping for."</p><div class="author"><div class="av">AS</div><div><h5>Anjali Singh</h5><p>Corporate Professional</p></div></div></div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Book Your <span>Reading</span></h3>
          <p>Ready to discover your future? Book your personal tarot reading today.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Location</h5><p>Bandra, Mumbai (Online Worldwide)</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Available</h5><p>Mon–Sun: 10AM – 9PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Reading booked!');">
          <h4>Book a Reading</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Reading Type</label><select required><option>-- Select --</option><option>Daily Card</option><option>Full Reading</option><option>Love Reading</option><option>Career Path</option><option>Celtic Cross</option></select></div>
          <div class="form-group"><label>Your Question / Focus</label><textarea placeholder="What would you like guidance on?" required></textarea></div>
          <button type="submit" class="btn btn-grad">🌙 Book Now</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>🎴 Mystic Tarot</h4><p>15+ years of tarot wisdom. Accurate, compassionate, and confidential readings for everyone.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Readings</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Readings</h4><ul><li><a href="#">Daily</a></li><li><a href="#">Love</a></li><li><a href="#">Career</a></li><li><a href="#">Past Life</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Mystic Tarot. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== ASTROLOGY 3: VASTU ==========
  "astro3": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#1a1310;color:#f0e6d8;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(26,19,16,0.96);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,140,0,0.3);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#ff8c00,#ffd700);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 0 25px rgba(255,140,0,0.5);}
      .nav .logo-text h1{font-size:20px;background:linear-gradient(90deg,#ff8c00,#ffd700);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin:0;letter-spacing:1px;}
      .nav .logo-text p{font-size:11px;color:#d4c4a8;margin:0;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#f0e6d8;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#ffd700;}
      .nav .cta-btn{padding:12px 24px;background:linear-gradient(135deg,#ff8c00,#ffd700);color:#1a1310;border-radius:30px;font-weight:700;font-size:14px;transition:all 0.3s;box-shadow:0 0 20px rgba(255,140,0,0.5);}
      .nav .cta-btn:hover{transform:translateY(-3px);box-shadow:0 0 40px rgba(255,140,0,0.9);}
      .hero{position:relative;padding:110px 40px 90px;text-align:center;background:radial-gradient(ellipse at 50% 0%,rgba(255,140,0,0.25),transparent 60%);overflow:hidden;}
      .hero::before{content:'🏛️';position:absolute;top:50px;left:10%;font-size:80px;opacity:0.15;animation:float 6s ease-in-out infinite;}
      .hero::after{content:'🕉️';position:absolute;bottom:50px;right:10%;font-size:70px;opacity:0.15;animation:float 5s ease-in-out infinite reverse;}
      @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-20px);}}
      .hero-content{position:relative;max-width:900px;margin:0 auto;z-index:1;}
      .hero-badge{display:inline-block;padding:8px 22px;border:1px solid rgba(255,140,0,0.5);border-radius:30px;color:#ffd700;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:26px;background:rgba(255,140,0,0.08);}
      .hero h1{font-size:clamp(36px,6vw,68px);line-height:1.1;margin-bottom:24px;background:linear-gradient(90deg,#ff8c00,#ffd700,#ff8c00);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shine 4s linear infinite;font-weight:normal;}
      @keyframes shine{to{background-position:200% center;}}
      .hero p{font-size:18px;color:#d4c4a8;max-width:640px;margin:0 auto 40px;}
      .hero-cta{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:30px;font-weight:700;font-size:15px;border:none;cursor:pointer;transition:all 0.3s;font-family:'Georgia',serif;}
      .btn-gold{background:linear-gradient(135deg,#ff8c00,#ffd700);color:#1a1310;box-shadow:0 0 30px rgba(255,140,0,0.6);}
      .btn-gold:hover{transform:translateY(-4px);box-shadow:0 0 50px rgba(255,140,0,1);}
      .btn-outline{border:2px solid #ffd700;color:#ffd700;background:transparent;}
      .btn-outline:hover{background:#ffd700;color:#1a1310;transform:translateY(-4px);}
      .hero-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:700px;margin:60px auto 0;}
      .hero-stat{background:rgba(255,140,0,0.08);border:1px solid rgba(255,140,0,0.3);padding:24px 16px;border-radius:16px;transition:all 0.3s;}
      .hero-stat:hover{background:rgba(255,140,0,0.15);transform:translateY(-5px);box-shadow:0 10px 30px rgba(255,140,0,0.3);}
      .hero-stat h3{font-size:32px;color:#ffd700;margin-bottom:6px;}
      .hero-stat p{font-size:12px;color:#d4c4a8;text-transform:uppercase;letter-spacing:1px;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#ffd700;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-size:clamp(30px,4.5vw,44px);color:#fff;margin-bottom:18px;line-height:1.2;font-weight:normal;}
      .section-title span{color:#ffd700;font-style:italic;}
      .section-desc{font-size:16px;color:#d4c4a8;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
      .service-card{background:linear-gradient(160deg,rgba(255,140,0,0.1),rgba(26,19,16,0.4));padding:40px 28px;border-radius:20px;border:1px solid rgba(255,140,0,0.3);transition:all 0.4s;position:relative;overflow:hidden;}
      .service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#ff8c00,#ffd700);transform:scaleX(0);transition:transform 0.4s;}
      .service-card:hover{transform:translateY(-8px);border-color:#ffd700;box-shadow:0 20px 50px rgba(255,140,0,0.3);}
      .service-card:hover::before{transform:scaleX(1);}
      .service-icon{font-size:56px;margin-bottom:20px;display:inline-block;transition:transform 0.4s;}
      .service-card:hover .service-icon{transform:scale(1.2) rotate(-10deg);}
      .service-card h4{font-size:21px;color:#ffd700;margin-bottom:12px;font-weight:normal;}
      .service-card p{font-size:14px;color:#d4c4a8;line-height:1.7;}
      .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(255,140,0,0.25);}
      .about-img img{width:100%;height:520px;object-fit:cover;}
      .about-content h3{font-size:34px;color:#fff;margin-bottom:20px;line-height:1.3;font-weight:normal;}
      .about-content h3 span{color:#ffd700;font-style:italic;}
      .about-content p{font-size:16px;color:#d4c4a8;line-height:1.8;margin-bottom:18px;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:10px;background:rgba(255,140,0,0.1);padding:14px 18px;border-radius:10px;font-size:14px;color:#f0e6d8;border:1px solid rgba(255,140,0,0.3);}
      .about-feat::before{content:'✓';width:24px;height:24px;background:#ffd700;color:#1a1310;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;font-weight:bold;}
      .tips-section{background:linear-gradient(180deg,transparent,rgba(255,140,0,0.08),transparent);}
      .tips-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
      .tip-card{background:linear-gradient(160deg,rgba(255,140,0,0.1),rgba(26,19,16,0.4));padding:32px 24px;border-radius:16px;border:1px solid rgba(255,140,0,0.3);transition:all 0.4s;}
      .tip-card:hover{transform:translateY(-8px);border-color:#ffd700;box-shadow:0 15px 40px rgba(255,140,0,0.3);}
      .tip-card .emoji{font-size:40px;margin-bottom:14px;display:block;}
      .tip-card h4{font-size:18px;color:#ffd700;margin-bottom:10px;font-weight:normal;}
      .tip-card p{font-size:14px;color:#d4c4a8;line-height:1.7;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .testimonial-card{background:linear-gradient(160deg,rgba(255,140,0,0.08),rgba(26,19,16,0.4));padding:36px 28px;border-radius:20px;border:1px solid rgba(255,140,0,0.3);transition:all 0.4s;position:relative;}
      .testimonial-card:hover{transform:translateY(-8px);border-color:#ffd700;box-shadow:0 20px 50px rgba(255,140,0,0.3);}
      .testimonial-card .stars{color:#ffd700;font-size:16px;margin-bottom:14px;}
      .testimonial-card .quote{font-size:14.5px;color:#d4c4a8;line-height:1.8;margin-bottom:22px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#ff8c00,#ffd700);display:flex;align-items:center;justify-content:center;color:#1a1310;font-weight:bold;font-size:18px;}
      .testimonial-card .author h5{font-size:15px;color:#fff;margin-bottom:4px;}
      .testimonial-card .author p{font-size:12px;color:#ffd700;}
      .contact-section{background:linear-gradient(135deg,#0a0705,#1a1310);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:90px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:34px;color:#fff;margin-bottom:20px;font-weight:normal;}
      .contact-info h3 span{color:#ffd700;font-style:italic;}
      .contact-info > p{color:#d4c4a8;margin-bottom:32px;}
      .contact-item{display:flex;gap:16px;margin-bottom:24px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:rgba(255,140,0,0.15);border:1px solid rgba(255,140,0,0.4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;color:#ffd700;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .ic{background:#ffd700;color:#1a1310;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#ffd700;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:bold;}
      .contact-item p{font-size:15px;color:#fff;}
      .contact-form{background:rgba(255,140,0,0.05);padding:40px;border-radius:20px;border:1px solid rgba(255,140,0,0.3);}
      .contact-form h4{font-size:22px;color:#ffd700;margin-bottom:22px;font-weight:normal;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#d4c4a8;font-size:13px;margin-bottom:8px;font-weight:500;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:rgba(0,0,0,0.4);border:1px solid rgba(255,140,0,0.3);border-radius:10px;color:#fff;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#ffd700;background:rgba(0,0,0,0.6);box-shadow:0 0 0 3px rgba(255,140,0,0.15);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-gold{width:100%;justify-content:center;}
      .footer{background:#050302;color:#8a7a60;padding:60px 40px 30px;border-top:1px solid rgba(255,140,0,0.15);}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#ffd700;font-size:17px;margin-bottom:18px;font-weight:normal;letter-spacing:1px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#8a7a60;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#ffd700;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(255,140,0,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:70px 20px;}
        .hero-stats{grid-template-columns:1fr 1fr 1fr;gap:12px;}
        .hero-stat h3{font-size:24px;}
        .section,.contact-inner{padding:60px 20px;}
        .services-grid,.tips-grid,.testimonial-grid,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .about-grid,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .about-img img{height:340px;}
      }
      @media(max-width:600px){
        .services-grid,.tips-grid,.testimonial-grid,.about-features,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .hero-stats{grid-template-columns:1fr;}
        .contact-form{padding:26px 20px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo">
        <div class="logo-icon">🏛️</div>
        <div class="logo-text"><h1>VASTU SHASTRA EXPERT</h1><p>Harmonize Your Space</p></div>
      </div>
      <nav><a href="#">Home</a><a href="#">Services</a><a href="#">About</a><a href="#">Tips</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">🔱 Book Consultation</a>
    </header>

    <section class="hero">
      <div class="hero-content">
        <span class="hero-badge">🕉️ VASTU CONSULTANT 🕉️</span>
        <h1>Harmonize Your Space</h1>
        <p>Ancient wisdom for modern living. Bring positive energy, prosperity, and peace to your home and office with expert Vastu consultation.</p>
        <div class="hero-cta">
          <a href="#" class="btn btn-gold">🔱 Book Consultation</a>
          <a href="#" class="btn btn-outline">📞 Talk to Expert</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><h3>20+</h3><p>Years Experience</p></div>
          <div class="hero-stat"><h3>10,000+</h3><p>Spaces Blessed</p></div>
          <div class="hero-stat"><h3>100%</h3><p>Satisfaction</p></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Our Services</span>
        <h2 class="section-title">Vastu <span>Consultation</span> Services</h2>
        <p class="section-desc">Complete Vastu solutions for homes, offices, and commercial spaces.</p>
      </div>
      <div class="services-grid">
        <div class="service-card"><div class="service-icon">🏠</div><h4>Home Vastu</h4><p>Complete home analysis with detailed remedies for peace and prosperity.</p></div>
        <div class="service-card"><div class="service-icon">🏢</div><h4>Office Vastu</h4><p>Boost business growth with proper office layout and energy flow.</p></div>
        <div class="service-card"><div class="service-icon">🏗️</div><h4>Construction Vastu</h4><p>Vastu-compliant construction planning from day one for best results.</p></div>
        <div class="service-card"><div class="service-icon">🌿</div><h4>Remedies</h4><p>Simple, effective remedies to correct existing Vastu doshas.</p></div>
        <div class="service-card"><div class="service-icon">📐</div><h4>Blueprint Review</h4><p>Detailed analysis of architectural plans before construction.</p></div>
        <div class="service-card"><div class="service-icon">🎯</div><h4>Site Selection</h4><p>Expert guidance on choosing the right plot for maximum benefits.</p></div>
      </div>
    </section>

    <section class="section">
      <div class="about-grid">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Vastu"></div>
        <div class="about-content">
          <span class="section-tag">About Expert</span>
          <h3>20+ Years of <span>Vastu Mastery</span></h3>
          <p>Our founder is a renowned Vastu expert with over 20 years of experience. He has consulted for over 10,000 residential and commercial spaces across India.</p>
          <p>His approach combines traditional Vastu Shastra with practical, modern solutions that fit your lifestyle and budget — no unnecessary changes, just effective remedies.</p>
          <div class="about-features">
            <div class="about-feat">Gold Medalist</div>
            <div class="about-feat">Certified Expert</div>
            <div class="about-feat">Site Visits</div>
            <div class="about-feat">Online Consults</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section tips-section">
      <div class="section-header">
        <span class="section-tag">Free Tips</span>
        <h2 class="section-title">Simple Vastu <span>Tips</span></h2>
        <p class="section-desc">Quick remedies you can apply today to improve the energy of your space.</p>
      </div>
      <div class="tips-grid">
        <div class="tip-card"><div class="emoji">🌅</div><h4>East-Facing Entrance</h4><p>The main entrance should ideally face east or north for maximum positive energy.</p></div>
        <div class="tip-card"><div class="emoji">🧘</div><h4>Meditation Corner</h4><p>Create a quiet meditation space in the northeast corner of your home.</p></div>
        <div class="tip-card"><div class="emoji">🌿</div><h4>Plants Placement</h4><p>Place tulsi or money plants in the north or east direction for prosperity.</p></div>
        <div class="tip-card"><div class="emoji">💧</div><h4>Water Features</h4><p>A small fountain in the north brings wealth and positive energy.</p></div>
        <div class="tip-card"><div class="emoji">🪞</div><h4>Mirror Positioning</h4><p>Place mirrors on north or east walls — never facing the bed directly.</p></div>
        <div class="tip-card"><div class="emoji">🛏️</div><h4>Bed Direction</h4><p>Sleep with your head pointing south or east for better health and rest.</p></div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Testimonials</span>
        <h2 class="section-title">Client <span>Feedback</span></h2>
        <p class="section-desc">Real results from people who applied Vastu remedies in their spaces.</p>
      </div>
      <div class="testimonial-grid">
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"After applying Vastu remedies, our family harmony improved dramatically. Financial issues also resolved. Amazing results!"</p><div class="author"><div class="av">RK</div><div><h5>Ramesh Khanna</h5><p>Homeowner</p></div></div></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Our business was struggling. After Vastu correction of our office, we saw immediate improvement in sales and team morale."</p><div class="author"><div class="av">SM</div><div><h5>Sunita Mehta</h5><p>Business Owner</p></div></div></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Simple remedies, no major construction required. Very practical approach and effective results. Highly recommended."</p><div class="author"><div class="av">AP</div><div><h5>Anil Patel</h5><p>Property Investor</p></div></div></div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Book <span>Consultation</span></h3>
          <p>Ready to transform your space? Book your Vastu consultation today.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Office</h5><p>Bandra, Mumbai, Maharashtra</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Hours</h5><p>Mon–Sat: 9AM – 7PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Consultation booked!');">
          <h4>Request Consultation</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Consultation Type</label><select required><option>-- Select --</option><option>Home Vastu</option><option>Office Vastu</option><option>New Construction</option><option>Blueprint Review</option><option>Site Selection</option></select></div>
          <div class="form-group"><label>Your Requirement</label><textarea placeholder="Describe your space and concern..." required></textarea></div>
          <button type="submit" class="btn btn-gold">🔱 Book Consultation</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>🏛️ Vastu Expert</h4><p>20+ years of Vastu mastery. Bringing harmony, prosperity, and peace to homes and businesses across India.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Services</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Services</h4><ul><li><a href="#">Home Vastu</a></li><li><a href="#">Office Vastu</a></li><li><a href="#">Construction</a></li><li><a href="#">Remedies</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Vastu Expert. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== COMPUTER 1: CYBER CAFE ==========
  "computer1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#0f172a;color:#e2e8f0;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .topbar{background:linear-gradient(90deg,#1e40af,#3b82f6);color:#fff;padding:10px 30px;font-size:13px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;}
      .nav{position:sticky;top:0;background:rgba(15,23,42,0.96);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(12px);border-bottom:1px solid rgba(59,130,246,0.3);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#3b82f6,#06b6d4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 0 20px rgba(59,130,246,0.5);}
      .nav .logo-text h1{font-size:20px;background:linear-gradient(90deg,#3b82f6,#06b6d4);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin:0;}
      .nav .logo-text p{font-size:11px;color:#94a3b8;margin:0;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#e2e8f0;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#3b82f6;}
      .nav .cta-btn{padding:12px 24px;background:linear-gradient(135deg,#3b82f6,#06b6d4);color:#fff;border-radius:30px;font-weight:600;font-size:14px;transition:all 0.3s;box-shadow:0 0 20px rgba(59,130,246,0.5);}
      .nav .cta-btn:hover{transform:translateY(-3px);box-shadow:0 0 40px rgba(59,130,246,0.9);}
      .hero{position:relative;padding:100px 40px 80px;background:radial-gradient(ellipse at 50% 0%,rgba(59,130,246,0.25),transparent 60%);overflow:hidden;}
      .hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(59,130,246,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.08) 1px,transparent 1px);background-size:50px 50px;animation:gridMove 20s linear infinite;}
      @keyframes gridMove{from{background-position:0 0;}to{background-position:50px 50px;}}
      .hero-inner{position:relative;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.15fr 1fr;gap:60px;align-items:center;z-index:1;}
      .hero-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;background:rgba(59,130,246,0.15);border:1px solid rgba(59,130,246,0.5);border-radius:30px;color:#60a5fa;font-size:13px;font-weight:600;margin-bottom:22px;}
      .hero h2{font-size:clamp(34px,5.5vw,56px);line-height:1.15;margin-bottom:22px;color:#fff;}
      .hero h2 span{background:linear-gradient(90deg,#3b82f6,#06b6d4);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .hero-desc{font-size:17px;color:#94a3b8;margin-bottom:32px;max-width:520px;}
      .hero-cta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 32px;border-radius:30px;font-weight:600;font-size:15px;transition:all 0.3s;cursor:pointer;border:none;}
      .btn-primary{background:linear-gradient(135deg,#3b82f6,#06b6d4);color:#fff;box-shadow:0 8px 20px rgba(59,130,246,0.4);}
      .btn-primary:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(59,130,246,0.6);}
      .btn-outline{background:transparent;color:#60a5fa;border:2px solid #3b82f6;}
      .btn-outline:hover{background:#3b82f6;color:#fff;transform:translateY(-4px);}
      .hero-features{display:flex;gap:20px;flex-wrap:wrap;}
      .hero-feature{display:flex;align-items:center;gap:8px;font-size:13px;color:#94a3b8;}
      .hero-feature::before{content:'✓';width:22px;height:22px;background:#22c55e;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:bold;flex-shrink:0;}
      .hero-img{position:relative;}
      .hero-img img{width:100%;border-radius:20px;box-shadow:0 25px 60px rgba(59,130,246,0.3);}
      .float-badge{position:absolute;bottom:-20px;left:-20px;background:rgba(15,23,42,0.95);padding:18px 22px;border-radius:16px;box-shadow:0 12px 35px rgba(0,0,0,0.5);display:flex;align-items:center;gap:12px;border:1px solid rgba(59,130,246,0.4);animation:float 4s ease-in-out infinite;}
      @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
      .float-badge .ic{width:46px;height:46px;background:linear-gradient(135deg,#3b82f6,#06b6d4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;}
      .float-badge h5{font-size:14px;color:#fff;margin-bottom:3px;}
      .float-badge p{font-size:12px;color:#94a3b8;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#60a5fa;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-size:clamp(28px,4vw,42px);color:#fff;margin-bottom:18px;line-height:1.2;}
      .section-title span{background:linear-gradient(90deg,#3b82f6,#06b6d4);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .section-desc{font-size:16px;color:#94a3b8;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
      .service-card{background:linear-gradient(160deg,rgba(59,130,246,0.08),rgba(15,23,42,0.4));padding:36px 26px;border-radius:16px;border:1px solid rgba(59,130,246,0.25);transition:all 0.4s;position:relative;overflow:hidden;}
      .service-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#3b82f6,#06b6d4);transform:scaleX(0);transition:transform 0.4s;}
      .service-card:hover{transform:translateY(-8px);border-color:#3b82f6;box-shadow:0 20px 50px rgba(59,130,246,0.3);}
      .service-card:hover::before{transform:scaleX(1);}
      .service-icon{font-size:52px;margin-bottom:16px;display:block;transition:transform 0.4s;}
      .service-card:hover .service-icon{transform:scale(1.15) rotate(-8deg);}
      .service-card h4{font-size:19px;color:#fff;margin-bottom:12px;}
      .service-card p{font-size:14px;color:#94a3b8;line-height:1.7;}
      .service-card .price-tag{display:inline-block;margin-top:14px;padding:6px 16px;background:rgba(59,130,246,0.15);border:1px solid rgba(59,130,246,0.4);border-radius:20px;color:#60a5fa;font-size:12px;font-weight:600;}
      .pricing-table{background:rgba(15,23,42,0.6);border:1px solid rgba(59,130,246,0.25);border-radius:16px;overflow:hidden;}
      .price-row{display:grid;grid-template-columns:2fr 1fr 1fr;gap:16px;padding:20px 28px;border-bottom:1px solid rgba(59,130,246,0.15);align-items:center;transition:all 0.3s;}
      .price-row:hover{background:rgba(59,130,246,0.05);}
      .price-row.head{background:rgba(59,130,246,0.1);font-size:12px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;font-weight:700;}
      .price-row:last-child{border-bottom:none;}
      .price-row .name{color:#fff;font-size:15px;font-weight:500;}
      .price-row .dur{color:#94a3b8;font-size:13px;}
      .price-row .amt{color:#22c55e;font-size:16px;font-weight:700;}
      .stats-bar{background:linear-gradient(135deg,#0a1220,#0f172a);padding:60px 40px;border-top:1px solid rgba(59,130,246,0.2);border-bottom:1px solid rgba(59,130,246,0.2);}
      .stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center;}
      .stat-item h3{font-size:42px;background:linear-gradient(90deg,#3b82f6,#06b6d4);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:6px;}
      .stat-item p{font-size:13px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;}
      .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(59,130,246,0.25);}
      .about-img img{width:100%;height:500px;object-fit:cover;}
      .about-content h3{font-size:32px;color:#fff;margin-bottom:20px;line-height:1.3;}
      .about-content h3 span{background:linear-gradient(90deg,#3b82f6,#06b6d4);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .about-content p{font-size:16px;color:#94a3b8;line-height:1.8;margin-bottom:18px;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:10px;background:rgba(59,130,246,0.08);padding:14px 18px;border-radius:10px;font-size:14px;color:#e2e8f0;border:1px solid rgba(59,130,246,0.25);}
      .about-feat::before{content:'✓';width:24px;height:24px;background:#3b82f6;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;flex-shrink:0;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
      .testimonial-card{background:linear-gradient(160deg,rgba(59,130,246,0.08),rgba(15,23,42,0.4));padding:32px 26px;border-radius:16px;border:1px solid rgba(59,130,246,0.25);transition:all 0.4s;}
      .testimonial-card:hover{transform:translateY(-8px);border-color:#3b82f6;box-shadow:0 20px 50px rgba(59,130,246,0.3);}
      .testimonial-card .stars{color:#fbbf24;font-size:16px;margin-bottom:14px;}
      .testimonial-card .quote{font-size:14px;color:#cbd5e1;line-height:1.8;margin-bottom:20px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#06b6d4);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:16px;}
      .testimonial-card .author h5{font-size:14px;color:#fff;margin-bottom:3px;}
      .testimonial-card .author p{font-size:12px;color:#60a5fa;}
      .contact-section{background:linear-gradient(135deg,#0a1220,#0f172a);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:32px;color:#fff;margin-bottom:20px;}
      .contact-info h3 span{background:linear-gradient(90deg,#3b82f6,#06b6d4);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .contact-info > p{color:#94a3b8;margin-bottom:30px;}
      .contact-item{display:flex;gap:16px;margin-bottom:22px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:rgba(59,130,246,0.15);border:1px solid rgba(59,130,246,0.4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;color:#60a5fa;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .ic{background:#3b82f6;color:#fff;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#60a5fa;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:600;}
      .contact-item p{font-size:15px;color:#fff;}
      .contact-form{background:rgba(59,130,246,0.05);padding:40px;border-radius:20px;border:1px solid rgba(59,130,246,0.3);}
      .contact-form h4{font-size:22px;color:#fff;margin-bottom:22px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#cbd5e1;font-size:13px;margin-bottom:8px;font-weight:500;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:rgba(0,0,0,0.4);border:1px solid rgba(59,130,246,0.3);border-radius:10px;color:#fff;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#3b82f6;background:rgba(0,0,0,0.6);box-shadow:0 0 0 3px rgba(59,130,246,0.15);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-primary{width:100%;justify-content:center;}
      .footer{background:#030712;color:#64748b;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#60a5fa;font-size:17px;margin-bottom:18px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#64748b;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#3b82f6;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(59,130,246,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:60px 20px;}
        .hero-inner,.about-grid,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .section,.contact-inner{padding:60px 20px;}
        .services-grid,.testimonial-grid,.stats-inner,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .about-img img{height:340px;}
        .stats-bar{padding:40px 20px;}
      }
      @media(max-width:600px){
        .services-grid,.testimonial-grid,.stats-inner,.about-features,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
        .price-row{grid-template-columns:1fr 1fr;gap:8px;padding:16px 20px;}
        .price-row .dur{display:none;}
        .topbar{justify-content:center;text-align:center;font-size:11px;}
        .stat-item h3{font-size:32px;}
      }
    </style></head><body>

    <div class="topbar"><span>💻 All Digital Services</span><span>📞 +91 93093 32775</span><span>🕒 8AM – 10PM Daily</span></div>

    <header class="nav">
      <div class="logo"><div class="logo-icon">💻</div><div class="logo-text"><h1>CYBER ZONE CAFE</h1><p>All Digital Services</p></div></div>
      <nav><a href="#">Home</a><a href="#">Services</a><a href="#">Pricing</a><a href="#">About</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">📞 Call Now</a>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <div>
          <span class="hero-badge">⚡ TRUSTED BY 10,000+ CUSTOMERS</span>
          <h2>All Digital Services <span>Under One Roof</span></h2>
          <p class="hero-desc">Online form filling, printing, scanning, government services, money transfer, and much more. Fast, reliable, and affordable.</p>
          <div class="hero-cta">
            <a href="#" class="btn btn-primary">📞 Call Now</a>
            <a href="#" class="btn btn-outline">💬 WhatsApp</a>
          </div>
          <div class="hero-features">
            <div class="hero-feature">Same-Day Service</div>
            <div class="hero-feature">Experienced Staff</div>
            <div class="hero-feature">Affordable Rates</div>
          </div>
        </div>
        <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" alt="Cyber Cafe">
          <div class="float-badge"><div class="ic">✓</div><div><h5>Fast Service</h5><p>Within 30 minutes</p></div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Our Services</span>
        <h2 class="section-title">Everything <span>Digital</span></h2>
        <p class="section-desc">All your digital needs handled by experienced professionals at affordable prices.</p>
      </div>
      <div class="services-grid">
        <div class="service-card"><div class="service-icon">🖨️</div><h4>Printing & Photocopy</h4><p>High-quality printing, photocopy, and color printing services.</p><div class="price-tag">₹2 / page</div></div>
        <div class="service-card"><div class="service-icon">📄</div><h4>Online Form Filling</h4><p>Government forms, job applications, exam forms, and more.</p><div class="price-tag">₹50 onwards</div></div>
        <div class="service-card"><div class="service-icon">📷</div><h4>Scanning Services</h4><p>Fast document scanning, PDF conversion, and email delivery.</p><div class="price-tag">₹5 / page</div></div>
        <div class="service-card"><div class="service-icon">🖼️</div><h4>Passport Photos</h4><p>Instant passport-size photos for all documents and forms.</p><div class="price-tag">₹80 / set</div></div>
        <div class="service-card"><div class="service-icon">💰</div><h4>Money Transfer</h4><p>Quick money transfer and bill payments — safe and fast.</p><div class="price-tag">₹20 onwards</div></div>
        <div class="service-card"><div class="service-icon">📝</div><h4>Resume Making</h4><p>Professional resume building with modern templates.</p><div class="price-tag">₹100 onwards</div></div>
        <div class="service-card"><div class="service-icon">🎫</div><h4>Ticket Booking</h4><p>Train, bus, flight, and movie ticket bookings.</p><div class="price-tag">₹30 + charges</div></div>
        <div class="service-card"><div class="service-icon">🆔</div><h4>Aadhar Services</h4><p>Aadhar update, correction, and print services.</p><div class="price-tag">₹50 onwards</div></div>
        <div class="service-card"><div class="service-icon">🌐</div><h4>Internet Browsing</h4><p>High-speed internet access at affordable hourly rates.</p><div class="price-tag">₹20 / hour</div></div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Price List</span>
        <h2 class="section-title">Transparent <span>Pricing</span></h2>
        <p class="section-desc">No hidden charges — clear and honest pricing for all services.</p>
      </div>
      <div class="pricing-table">
        <div class="price-row head"><div class="name">Service</div><div class="dur">Duration</div><div class="amt">Price</div></div>
        <div class="price-row"><div class="name">Black & White Print</div><div class="dur">Instant</div><div class="amt">₹2 / page</div></div>
        <div class="price-row"><div class="name">Color Print</div><div class="dur">Instant</div><div class="amt">₹10 / page</div></div>
        <div class="price-row"><div class="name">Photocopy</div><div class="dur">Instant</div><div class="amt">₹1 / page</div></div>
        <div class="price-row"><div class="name">Scanning & PDF</div><div class="dur">5 min</div><div class="amt">₹5 / page</div></div>
        <div class="price-row"><div class="name">Passport Photo (8 copies)</div><div class="dur">10 min</div><div class="amt">₹80</div></div>
        <div class="price-row"><div class="name">Online Form Filling</div><div class="dur">15-30 min</div><div class="amt">₹50 onwards</div></div>
        <div class="price-row"><div class="name">Resume Making</div><div class="dur">30 min</div><div class="amt">₹100 onwards</div></div>
        <div class="price-row"><div class="name">Money Transfer</div><div class="dur">5 min</div><div class="amt">₹20 + charges</div></div>
        <div class="price-row"><div class="name">Internet Browsing</div><div class="dur">Per hour</div><div class="amt">₹20</div></div>
      </div>
    </section>

    <div class="stats-bar">
      <div class="stats-inner">
        <div class="stat-item"><h3>10,000+</h3><p>Happy Customers</p></div>
        <div class="stat-item"><h3>15+</h3><p>Years Experience</p></div>
        <div class="stat-item"><h3>50+</h3><p>Services Offered</p></div>
        <div class="stat-item"><h3>4.8★</h3><p>Google Rating</p></div>
      </div>
    </div>

    <section class="section">
      <div class="about-grid">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" alt="Cyber Cafe"></div>
        <div class="about-content">
          <span class="section-tag">About Us</span>
          <h3>15 Years of <span>Digital Excellence</span></h3>
          <p>Cyber Zone Cafe has been serving the community for over 15 years. What started as a small cyber cafe has grown into a complete digital service center.</p>
          <p>We're your one-stop destination for all digital needs — from simple photocopies to complex online form submissions. Fast service, honest pricing, and friendly staff.</p>
          <div class="about-features">
            <div class="about-feat">Expert Staff</div>
            <div class="about-feat">Fast Service</div>
            <div class="about-feat">Air Conditioned</div>
            <div class="about-feat">Parking Available</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Testimonials</span>
        <h2 class="section-title">Customer <span>Reviews</span></h2>
        <p class="section-desc">Don't take our word for it — hear from our happy customers.</p>
      </div>
      <div class="testimonial-grid">
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Best cyber cafe in the area! Fast service, reasonable prices, and the staff is always helpful. Highly recommended!"</p><div class="author"><div class="av">RK</div><div><h5>Rajesh Kumar</h5><p>Regular Customer</p></div></div></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Needed urgent form filling for a government job. They did it in minutes and helped me with all the documents. Thank you!"</p><div class="author"><div class="av">SP</div><div><h5>Sunita Patel</h5><p>Customer</p></div></div></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Been going here for years for all my printing and online needs. Reliable, fast, and always have the latest services."</p><div class="author"><div class="av">AM</div><div><h5>Amit Mehta</h5><p>Business Owner</p></div></div></div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Get in <span>Touch</span></h3>
          <p>Visit our shop or call us for any digital service. Same-day service guaranteed.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Shop Address</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Hours</h5><p>Everyday: 8AM – 10PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Enquiry sent!');">
          <h4>Send Enquiry</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Service Needed</label><select required><option>-- Select --</option><option>Printing</option><option>Online Form</option><option>Scanning</option><option>Passport Photo</option><option>Resume</option><option>Other</option></select></div>
          <div class="form-group"><label>Details</label><textarea placeholder="Describe what you need..." required></textarea></div>
          <button type="submit" class="btn btn-primary">📨 Send Enquiry</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>💻 Cyber Zone Cafe</h4><p>Your one-stop digital service center. 15+ years of trusted service for all your digital needs.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Services</a></li><li><a href="#">Pricing</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Services</h4><ul><li><a href="#">Printing</a></li><li><a href="#">Online Forms</a></li><li><a href="#">Scanning</a></li><li><a href="#">Photos</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Cyber Zone Cafe. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== COMPUTER 2: TRAINING ==========
  "computer2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f8fafc;color:#1e293b;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .topbar{background:linear-gradient(90deg,#7c3aed,#a855f7);color:#fff;padding:10px 30px;font-size:13px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;}
      .nav{position:sticky;top:0;background:rgba(255,255,255,0.98);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(10px);box-shadow:0 2px 20px rgba(124,58,237,0.12);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#7c3aed,#a855f7);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 4px 15px rgba(124,58,237,0.3);}
      .nav .logo-text h1{font-size:20px;color:#0f172a;margin:0;}
      .nav .logo-text p{font-size:12px;color:#7c3aed;margin:0;font-weight:600;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#1e293b;font-size:14px;font-weight:500;transition:color 0.3s;}
      .nav nav a:hover{color:#7c3aed;}
      .nav .cta-btn{padding:12px 24px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border-radius:30px;font-weight:600;font-size:14px;transition:all 0.3s;box-shadow:0 4px 15px rgba(124,58,237,0.35);}
      .nav .cta-btn:hover{transform:translateY(-3px);box-shadow:0 8px 25px rgba(124,58,237,0.55);}
      .hero{padding:90px 40px;background:linear-gradient(135deg,#f3e8ff,#faf5ff);position:relative;overflow:hidden;}
      .hero::before{content:'';position:absolute;top:-80px;right:-80px;width:400px;height:400px;background:radial-gradient(circle,rgba(124,58,237,0.2),transparent 70%);border-radius:50%;}
      .hero-inner{position:relative;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.1fr 1fr;gap:60px;align-items:center;z-index:1;}
      .hero-badge{display:inline-block;padding:8px 18px;background:#fff;border-radius:30px;color:#7c3aed;font-size:13px;font-weight:700;margin-bottom:22px;box-shadow:0 4px 15px rgba(124,58,237,0.15);}
      .hero h2{font-size:clamp(34px,5.5vw,56px);line-height:1.15;color:#0f172a;margin-bottom:22px;}
      .hero h2 span{background:linear-gradient(90deg,#7c3aed,#a855f7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .hero-desc{font-size:17px;color:#475569;margin-bottom:32px;max-width:520px;}
      .hero-cta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 32px;border-radius:30px;font-weight:700;font-size:15px;transition:all 0.3s;cursor:pointer;border:none;}
      .btn-primary{background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;box-shadow:0 8px 20px rgba(124,58,237,0.35);}
      .btn-primary:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(124,58,237,0.5);}
      .btn-outline{background:#fff;color:#7c3aed;border:2px solid #7c3aed;}
      .btn-outline:hover{background:#7c3aed;color:#fff;transform:translateY(-4px);}
      .hero-stats{display:flex;gap:32px;flex-wrap:wrap;}
      .hero-stat b{font-size:28px;color:#7c3aed;font-weight:900;display:block;line-height:1;}
      .hero-stat span{font-size:12px;color:#475569;text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-top:6px;display:block;}
      .hero-img{position:relative;}
      .hero-img img{width:100%;border-radius:24px;box-shadow:0 25px 60px rgba(124,58,237,0.25);}
      .float-badge{position:absolute;bottom:-20px;right:-20px;background:#fff;padding:18px 22px;border-radius:16px;box-shadow:0 12px 35px rgba(0,0,0,0.15);display:flex;align-items:center;gap:12px;animation:float 4s ease-in-out infinite;}
      @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
      .float-badge .ic{width:46px;height:46px;background:linear-gradient(135deg,#22c55e,#16a34a);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;}
      .float-badge h5{font-size:14px;color:#0f172a;margin-bottom:3px;}
      .float-badge p{font-size:12px;color:#64748b;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#7c3aed;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;font-weight:800;}
      .section-title{font-size:clamp(28px,4vw,42px);color:#0f172a;margin-bottom:18px;line-height:1.2;}
      .section-title span{background:linear-gradient(90deg,#7c3aed,#a855f7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .section-desc{font-size:16px;color:#64748b;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .courses-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .course-card{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 25px rgba(124,58,237,0.08);transition:all 0.4s;border:1px solid rgba(124,58,237,0.1);}
      .course-card:hover{transform:translateY(-10px);box-shadow:0 25px 60px rgba(124,58,237,0.2);border-color:rgba(124,58,237,0.3);}
      .course-header{padding:32px 28px;background:linear-gradient(135deg,#f3e8ff,#e9d5ff);position:relative;overflow:hidden;}
      .course-header::before{content:'';position:absolute;top:-30px;right:-30px;width:100px;height:100px;background:rgba(124,58,237,0.1);border-radius:50%;}
      .course-icon{width:64px;height:64px;background:linear-gradient(135deg,#7c3aed,#a855f7);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:30px;margin-bottom:16px;position:relative;box-shadow:0 8px 25px rgba(124,58,237,0.4);}
      .course-header h4{font-size:19px;color:#0f172a;position:relative;margin-bottom:6px;}
      .course-header .level{font-size:12px;color:#7c3aed;font-weight:600;text-transform:uppercase;letter-spacing:1px;position:relative;}
      .course-body{padding:28px;}
      .course-info{display:flex;flex-direction:column;gap:12px;margin-bottom:22px;}
      .course-info-row{display:flex;align-items:center;gap:10px;font-size:14px;color:#475569;}
      .course-info-row::before{content:'✓';width:20px;height:20px;background:#22c55e;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:bold;flex-shrink:0;}
      .course-price{display:flex;justify-content:space-between;align-items:center;padding-top:18px;border-top:1px solid #e2e8f0;}
      .course-price .amount{font-size:24px;color:#7c3aed;font-weight:900;}
      .course-price .amount small{font-size:13px;color:#64748b;font-weight:400;}
      .course-price .enroll-btn{padding:10px 20px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;transition:all 0.3s;}
      .course-price .enroll-btn:hover{transform:scale(1.05);box-shadow:0 4px 15px rgba(124,58,237,0.5);}
      .features-section{background:linear-gradient(135deg,#f3e8ff,#faf5ff);}
      .features-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .features-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
      .feature-card{background:#fff;padding:32px 24px;border-radius:16px;text-align:center;box-shadow:0 4px 20px rgba(124,58,237,0.08);transition:all 0.4s;}
      .feature-card:hover{transform:translateY(-8px);box-shadow:0 20px 45px rgba(124,58,237,0.2);}
      .feature-card .ic{width:64px;height:64px;margin:0 auto 18px;background:linear-gradient(135deg,#f3e8ff,#e9d5ff);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:30px;transition:transform 0.4s;}
      .feature-card:hover .ic{transform:scale(1.1) rotate(-8deg);background:linear-gradient(135deg,#7c3aed,#a855f7);}
      .feature-card h4{font-size:17px;color:#0f172a;margin-bottom:10px;font-weight:700;}
      .feature-card p{font-size:13px;color:#64748b;line-height:1.7;}
      .stats-bar{background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;padding:60px 40px;}
      .stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center;}
      .stat-item h3{font-size:42px;font-weight:900;margin-bottom:6px;}
      .stat-item p{font-size:13px;opacity:0.9;text-transform:uppercase;letter-spacing:1px;}
      .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(124,58,237,0.25);}
      .about-img img{width:100%;height:500px;object-fit:cover;}
      .about-content h3{font-size:32px;color:#0f172a;margin-bottom:20px;line-height:1.3;}
      .about-content h3 span{background:linear-gradient(90deg,#7c3aed,#a855f7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .about-content p{font-size:16px;color:#475569;line-height:1.8;margin-bottom:18px;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:10px;background:#fff;padding:14px 18px;border-radius:10px;font-size:14px;font-weight:600;color:#0f172a;box-shadow:0 2px 10px rgba(124,58,237,0.08);}
      .about-feat::before{content:'✓';width:24px;height:24px;background:#7c3aed;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;flex-shrink:0;}
      .testimonial-section{background:linear-gradient(135deg,#f3e8ff,#faf5ff);}
      .testimonial-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:50px;}
      .testimonial-card{background:#fff;padding:32px 28px;border-radius:16px;box-shadow:0 4px 20px rgba(124,58,237,0.1);transition:all 0.4s;}
      .testimonial-card:hover{transform:translateY(-8px);box-shadow:0 20px 50px rgba(124,58,237,0.2);}
      .testimonial-card .stars{color:#fbbf24;font-size:18px;margin-bottom:14px;}
      .testimonial-card .quote{font-size:14.5px;color:#475569;line-height:1.8;margin-bottom:22px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#a855f7);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:18px;}
      .testimonial-card .author h5{font-size:15px;color:#0f172a;margin-bottom:4px;}
      .testimonial-card .author p{font-size:12px;color:#7c3aed;}
      .contact-section{background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;}
      .contact-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:32px;color:#fff;margin-bottom:20px;}
      .contact-info h3 span{background:linear-gradient(90deg,#a855f7,#c084fc);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .contact-info > p{color:#cbd5e1;margin-bottom:30px;}
      .contact-item{display:flex;gap:16px;margin-bottom:22px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:rgba(124,58,237,0.15);border:1px solid rgba(124,58,237,0.4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .ic{background:#7c3aed;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#a855f7;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:700;}
      .contact-item p{font-size:15px;color:#fff;}
      .contact-form{background:rgba(255,255,255,0.05);padding:40px;border-radius:20px;border:1px solid rgba(124,58,237,0.3);}
      .contact-form h4{font-size:22px;color:#a855f7;margin-bottom:22px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#cbd5e1;font-size:13px;margin-bottom:8px;font-weight:500;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:rgba(0,0,0,0.3);border:1px solid rgba(124,58,237,0.3);border-radius:10px;color:#fff;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#a855f7;background:rgba(0,0,0,0.5);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-primary{width:100%;justify-content:center;}
      .footer{background:#0a0520;color:#94a3b8;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#a855f7;font-size:17px;margin-bottom:18px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#94a3b8;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#a855f7;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(124,58,237,0.2);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:60px 20px;}
        .hero-inner,.about-grid,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .section,.features-inner,.testimonial-inner,.contact-inner{padding:60px 20px;}
        .courses-grid,.features-grid,.testimonial-grid,.stats-inner,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .about-img img{height:340px;}
        .stats-bar{padding:40px 20px;}
      }
      @media(max-width:600px){
        .courses-grid,.features-grid,.testimonial-grid,.stats-inner,.about-features,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
        .topbar{justify-content:center;text-align:center;font-size:11px;}
      }
    </style></head><body>

    <div class="topbar"><span>🎓 10,000+ Students Trained</span><span>📞 +91 93093 32775</span><span>📅 New Batch Every Month</span></div>

    <header class="nav">
      <div class="logo"><div class="logo-icon">🎓</div><div class="logo-text"><h1>TechLearn Institute</h1><p>Master In-Demand Tech Skills</p></div></div>
      <nav><a href="#">Home</a><a href="#">Courses</a><a href="#">Faculty</a><a href="#">About</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">🎯 Enroll Now</a>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <div>
          <span class="hero-badge">🚀 NEW BATCH STARTING SOON</span>
          <h2>Learn. Build. <span>Succeed.</span></h2>
          <p class="hero-desc">Master in-demand tech skills with expert trainers and hands-on projects. Join 10,000+ successful students who transformed their careers.</p>
          <div class="hero-cta">
            <a href="#" class="btn btn-primary">🎯 Enroll Now</a>
            <a href="#" class="btn btn-outline">📞 Free Demo Class</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><b>10K+</b><span>Students Trained</span></div>
            <div class="hero-stat"><b>95%</b><span>Placement Rate</span></div>
            <div class="hero-stat"><b>15+</b><span>Courses Offered</span></div>
          </div>
        </div>
        <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" alt="Computer Training">
          <div class="float-badge"><div class="ic">✓</div><div><h5>Certified Courses</h5><p>Govt. recognized</p></div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Popular Courses</span>
        <h2 class="section-title">Choose Your <span>Course</span></h2>
        <p class="section-desc">Industry-relevant courses designed to make you job-ready.</p>
      </div>
      <div class="courses-grid">
        <div class="course-card">
          <div class="course-header"><div class="course-icon">💻</div><h4>Basic Computer Course</h4><div class="level">Beginner Level</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">MS Office, Internet, Email</div>
              <div class="course-info-row">Typing & Data Entry</div>
              <div class="course-info-row">Basic Hardware Knowledge</div>
            </div>
            <div class="course-price"><div class="amount">₹3,000<small> / 3 months</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
        <div class="course-card">
          <div class="course-header"><div class="course-icon">🌐</div><h4>Web Development</h4><div class="level">Advanced Level</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">HTML, CSS, JavaScript</div>
              <div class="course-info-row">React & Node.js</div>
              <div class="course-info-row">Live Project Work</div>
            </div>
            <div class="course-price"><div class="amount">₹12,000<small> / 6 months</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
        <div class="course-card">
          <div class="course-header"><div class="course-icon">📊</div><h4>MS Office + Tally</h4><div class="level">Intermediate</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">Word, Excel, PowerPoint</div>
              <div class="course-info-row">Tally ERP 9 & GST</div>
              <div class="course-info-row">Practical Training</div>
            </div>
            <div class="course-price"><div class="amount">₹5,000<small> / 3 months</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
        <div class="course-card">
          <div class="course-header"><div class="course-icon">🎨</div><h4>Graphic Design</h4><div class="level">Professional</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">Photoshop, Illustrator</div>
              <div class="course-info-row">CorelDRAW, Canva</div>
              <div class="course-info-row">Design Portfolio</div>
            </div>
            <div class="course-price"><div class="amount">₹8,000<small> / 4 months</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
        <div class="course-card">
          <div class="course-header"><div class="course-icon">📱</div><h4>Digital Marketing</h4><div class="level">Professional</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">SEO, SEM, Social Media</div>
              <div class="course-info-row">Google Ads & Analytics</div>
              <div class="course-info-row">Campaign Management</div>
            </div>
            <div class="course-price"><div class="amount">₹15,000<small> / 4 months</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
        <div class="course-card">
          <div class="course-header"><div class="course-icon">💰</div><h4>Tally Prime + GST</h4><div class="level">Advanced</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">Complete Tally Prime</div>
              <div class="course-info-row">GST Filing Practical</div>
              <div class="course-info-row">Accounting Basics</div>
            </div>
            <div class="course-price"><div class="amount">₹6,000<small> / 3 months</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="features-inner">
        <div class="section-header">
          <span class="section-tag">Why Choose Us</span>
          <h2 class="section-title">Why <span>TechLearn</span>?</h2>
          <p class="section-desc">We're not just a training center — we're your career partner.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card"><div class="ic">👨‍🏫</div><h4>Expert Trainers</h4><p>Learn from industry experts with 10+ years of experience.</p></div>
          <div class="feature-card"><div class="ic">💼</div><h4>Placement Support</h4><p>100% placement assistance after course completion.</p></div>
          <div class="feature-card"><div class="ic">🎯</div><h4>Hands-On Training</h4><p>Real projects and practical training, not just theory.</p></div>
          <div class="feature-card"><div class="ic">📜</div><h4>Certification</h4><p>Government-recognized certification upon completion.</p></div>
        </div>
      </div>
    </section>

    <div class="stats-bar">
      <div class="stats-inner">
        <div class="stat-item"><h3>10,000+</h3><p>Students Trained</p></div>
        <div class="stat-item"><h3>95%</h3><p>Placement Rate</p></div>
        <div class="stat-item"><h3>15+</h3><p>Expert Trainers</p></div>
        <div class="stat-item"><h3>4.9★</h3><p>Google Rating</p></div>
      </div>
    </div>

    <section class="section">
      <div class="about-grid">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" alt="Training Center"></div>
        <div class="about-content">
          <span class="section-tag">About Us</span>
          <h3>Building <span>Careers</span> Since 2010</h3>
          <p>TechLearn Institute has been the leading computer training center in Mumbai for over a decade. We've helped thousands of students launch successful careers in tech.</p>
          <p>Our approach is simple — practical, hands-on training with real projects and ongoing support even after the course ends. Your success is our success.</p>
          <div class="about-features">
            <div class="about-feat">Certified Courses</div>
            <div class="about-feat">Small Batch Size</div>
            <div class="about-feat">Flexible Timings</div>
            <div class="about-feat">EMI Available</div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="testimonial-inner">
        <div class="section-header">
          <span class="section-tag">Success Stories</span>
          <h2 class="section-title">Student <span>Testimonials</span></h2>
          <p class="section-desc">Real stories from real students who transformed their careers.</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The web development course changed my life! Within 2 months of finishing, I got placed at a top IT company. Best investment I ever made."</p><div class="author"><div class="av">RK</div><div><h5>Rahul Kumar</h5><p>Web Developer</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Amazing teachers and hands-on training. The Tally + GST course got me a job immediately. The placement support is excellent."</p><div class="author"><div class="av">SP</div><div><h5>Sunita Patel</h5><p>Accountant</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"After 10 years of career break, I joined their digital marketing course. Now I'm freelancing and earning better than ever!"</p><div class="author"><div class="av">AM</div><div><h5>Anita Mehta</h5><p>Freelance Marketer</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Start Your <span>Journey</span></h3>
          <p>Book a free demo class or enroll now. Limited seats available!</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Institute Address</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Timings</h5><p>Mon–Sat: 8AM – 9PM | Sun: 10AM – 4PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Enrollment request sent!');">
          <h4>Enroll / Request Demo</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Interested Course</label><select required><option>-- Select --</option><option>Basic Computer</option><option>Web Development</option><option>MS Office + Tally</option><option>Graphic Design</option><option>Digital Marketing</option><option>Tally Prime + GST</option></select></div>
          <div class="form-group"><label>Message (Optional)</label><textarea placeholder="Any questions or preferred batch timing?"></textarea></div>
          <button type="submit" class="btn btn-primary">🎓 Enroll Now</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>🎓 TechLearn Institute</h4><p>Building careers since 2010. Expert-led courses, hands-on training, and placement support.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Courses</a></li><li><a href="#">Faculty</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Courses</h4><ul><li><a href="#">Basic Computer</a></li><li><a href="#">Web Dev</a></li><li><a href="#">Tally</a></li><li><a href="#">Digital Marketing</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 TechLearn Institute. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== WOOD 1: FURNITURE STORE ==========
  "wood1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#fdf6ec;color:#3d2b1f;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .topbar{background:#8b4513;color:#fdf6ec;padding:10px 30px;font-size:13px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;}
      .nav{position:sticky;top:0;background:rgba(253,246,236,0.98);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(10px);border-bottom:2px solid #a0522d;}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#8b4513,#a0522d);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 4px 15px rgba(139,69,19,0.3);}
      .nav .logo-text h1{font-size:22px;color:#5d4037;margin:0;letter-spacing:1px;}
      .nav .logo-text p{font-size:11px;color:#8b4513;margin:0;letter-spacing:2px;text-transform:uppercase;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#3d2b1f;font-size:14px;font-weight:500;transition:color 0.3s;position:relative;padding:6px 0;}
      .nav nav a:hover{color:#8b4513;}
      .nav .cta-btn{padding:12px 24px;background:linear-gradient(135deg,#8b4513,#a0522d);color:#fdf6ec;border-radius:4px;font-weight:700;font-size:14px;transition:all 0.3s;box-shadow:0 4px 15px rgba(139,69,19,0.3);}
      .nav .cta-btn:hover{transform:translateY(-3px);box-shadow:0 8px 25px rgba(139,69,19,0.5);}
      .hero{position:relative;padding:100px 40px;background:linear-gradient(135deg,#8b4513,#a0522d,#6d3410);color:#fff;overflow:hidden;}
      .hero::before{content:'';position:absolute;inset:0;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="40" height="40" fill="rgba(255,255,255,0.03)"/><rect x="40" y="40" width="40" height="40" fill="rgba(255,255,255,0.03)"/></svg>');opacity:0.5;}
      .hero-inner{position:relative;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.1fr 1fr;gap:60px;align-items:center;z-index:1;}
      .hero-badge{display:inline-block;padding:8px 20px;border:1px solid rgba(255,237,213,0.5);border-radius:30px;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:24px;}
      .hero h2{font-size:clamp(34px,5.5vw,56px);line-height:1.15;margin-bottom:22px;font-weight:normal;}
      .hero h2 span{color:#ffd700;font-style:italic;}
      .hero-desc{font-size:17px;color:#f0e6d8;margin-bottom:32px;max-width:520px;}
      .hero-cta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 32px;border-radius:4px;font-weight:700;font-size:15px;transition:all 0.3s;cursor:pointer;border:none;font-family:inherit;}
      .btn-gold{background:linear-gradient(135deg,#ffd700,#f0c000);color:#3d2b1f;box-shadow:0 8px 20px rgba(255,215,0,0.35);}
      .btn-gold:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(255,215,0,0.5);}
      .btn-outline{background:transparent;color:#fdf6ec;border:2px solid #fdf6ec;}
      .btn-outline:hover{background:#fdf6ec;color:#8b4513;transform:translateY(-4px);}
      .hero-stats{display:flex;gap:32px;flex-wrap:wrap;}
      .hero-stat b{font-size:28px;color:#ffd700;display:block;line-height:1;font-weight:normal;}
      .hero-stat span{font-size:12px;color:#f0e6d8;text-transform:uppercase;letter-spacing:1px;margin-top:6px;display:block;}
      .hero-img{position:relative;}
      .hero-img img{width:100%;border-radius:12px;box-shadow:0 25px 60px rgba(0,0,0,0.5);border:4px solid #a0522d;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#8b4513;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-size:clamp(30px,4.5vw,44px);color:#3d2b1f;margin-bottom:18px;line-height:1.2;font-weight:normal;}
      .section-title span{color:#8b4513;font-style:italic;}
      .section-desc{font-size:16px;color:#6d5a4e;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .categories-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
      .cat-card{background:#fff;padding:32px 20px;border-radius:12px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.06);transition:all 0.4s;cursor:pointer;border:2px solid transparent;}
      .cat-card:hover{transform:translateY(-8px);border-color:#a0522d;box-shadow:0 15px 40px rgba(139,69,19,0.2);}
      .cat-card .emoji{font-size:52px;margin-bottom:14px;transition:transform 0.4s;}
      .cat-card:hover .emoji{transform:scale(1.15) rotate(-8deg);}
      .cat-card h4{font-size:17px;color:#3d2b1f;margin-bottom:6px;font-weight:normal;}
      .cat-card p{font-size:12px;color:#8b4513;}
      .products-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
      .product{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);transition:all 0.4s;}
      .product:hover{transform:translateY(-8px);box-shadow:0 20px 45px rgba(139,69,19,0.2);}
      .product-img{height:220px;background:linear-gradient(135deg,#deb887,#cd853f);display:flex;align-items:center;justify-content:center;font-size:90px;position:relative;transition:all 0.4s;overflow:hidden;}
      .product:hover .product-img{font-size:100px;}
      .product-tag{position:absolute;top:12px;left:12px;background:#8b4513;color:#fff;padding:5px 12px;border-radius:4px;font-size:11px;font-weight:700;letter-spacing:1px;}
      .product-info{padding:22px;}
      .product-info h4{font-size:17px;color:#3d2b1f;margin-bottom:6px;font-weight:normal;}
      .product-info .material{font-size:12px;color:#8b4513;margin-bottom:10px;font-style:italic;}
      .product-info .rating{color:#fbbf24;font-size:13px;margin-bottom:12px;}
      .product-info .price-row{display:flex;justify-content:space-between;align-items:center;}
      .product-info .price{font-size:22px;color:#8b4513;font-weight:700;}
      .product-info .price small{font-size:12px;color:#6d5a4e;font-weight:400;}
      .product-info .view-btn{padding:8px 18px;background:#8b4513;color:#fff;border:none;border-radius:4px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.3s;}
      .product-info .view-btn:hover{background:#a0522d;transform:scale(1.05);}
      .craft-section{background:linear-gradient(135deg,#f5e6d3,#fdf6ec);}
      .craft-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .craft-img{border-radius:12px;overflow:hidden;box-shadow:0 25px 60px rgba(139,69,19,0.25);}
      .craft-img img{width:100%;height:500px;object-fit:cover;}
      .craft-content h3{font-size:32px;color:#3d2b1f;margin-bottom:20px;line-height:1.3;font-weight:normal;}
      .craft-content h3 span{color:#8b4513;font-style:italic;}
      .craft-content p{font-size:16px;color:#5d4037;line-height:1.8;margin-bottom:18px;}
      .craft-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .craft-feat{display:flex;align-items:center;gap:10px;background:#fff;padding:14px 18px;border-radius:8px;font-size:14px;font-weight:600;color:#3d2b1f;box-shadow:0 2px 10px rgba(139,69,19,0.08);}
      .craft-feat::before{content:'✓';width:24px;height:24px;background:#8b4513;color:#fff;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;flex-shrink:0;}
      .testimonial-section{background:linear-gradient(135deg,#3d2b1f,#5d4037);color:#f0e6d8;}
      .testimonial-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:50px;}
      .testimonial-card{background:rgba(255,255,255,0.05);padding:32px 28px;border-radius:12px;border:1px solid rgba(255,215,0,0.2);transition:all 0.4s;}
      .testimonial-card:hover{transform:translateY(-8px);border-color:#ffd700;box-shadow:0 20px 50px rgba(0,0,0,0.3);}
      .testimonial-card .stars{color:#ffd700;font-size:18px;margin-bottom:14px;}
      .testimonial-card .quote{font-size:14.5px;color:#e8dcc8;line-height:1.8;margin-bottom:22px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#ffd700,#f0c000);display:flex;align-items:center;justify-content:center;color:#3d2b1f;font-weight:bold;font-size:18px;}
      .testimonial-card .author h5{font-size:15px;color:#fff;margin-bottom:4px;}
      .testimonial-card .author p{font-size:12px;color:#ffd700;}
      .contact-section{background:linear-gradient(135deg,#f5e6d3,#fdf6ec);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:32px;color:#3d2b1f;margin-bottom:20px;font-weight:normal;}
      .contact-info h3 span{color:#8b4513;font-style:italic;}
      .contact-info > p{color:#5d4037;margin-bottom:30px;font-size:15px;}
      .contact-item{display:flex;gap:16px;margin-bottom:22px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 15px rgba(139,69,19,0.15);transition:all 0.3s;border:1px solid #e8dcc8;}
      .contact-item:hover .ic{background:#8b4513;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#8b4513;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:700;}
      .contact-item p{font-size:15px;color:#3d2b1f;font-weight:500;}
      .contact-form{background:#fff;padding:40px;border-radius:12px;box-shadow:0 10px 40px rgba(139,69,19,0.15);border-top:4px solid #8b4513;}
      .contact-form h4{font-size:22px;color:#3d2b1f;margin-bottom:22px;font-weight:normal;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#5d4037;font-size:13px;margin-bottom:8px;font-weight:600;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:#fdf6ec;border:1px solid #e8dcc8;border-radius:6px;color:#3d2b1f;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#8b4513;background:#fff;}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-gold{width:100%;justify-content:center;}
      .footer{background:#2d1f15;color:#b8a890;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#ffd700;font-size:17px;margin-bottom:18px;font-weight:normal;letter-spacing:1px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#b8a890;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#ffd700;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(255,215,0,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:60px 20px;}
        .hero-inner,.craft-inner,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .craft-img img{height:340px;}
        .section,.craft-inner,.testimonial-inner,.contact-inner{padding:60px 20px;}
        .categories-grid,.products-grid,.testimonial-grid,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
      }
      @media(max-width:600px){
        .categories-grid,.products-grid,.testimonial-grid,.craft-features,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
        .topbar{justify-content:center;text-align:center;font-size:11px;}
      }
    </style></head><body>

    <div class="topbar"><span>🚚 Free Delivery in Mumbai</span><span>📞 +91 93093 32775</span><span>🏆 Best Quality Wood</span></div>

    <header class="nav">
      <div class="logo"><div class="logo-icon">🪵</div><div class="logo-text"><h1>WOODCRAFT FURNITURE</h1><p>Handcrafted Since 1975</p></div></div>
      <nav><a href="#">Home</a><a href="#">Collection</a><a href="#">Custom</a><a href="#">About</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">🪑 Browse Collection</a>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <div>
          <span class="hero-badge">✦ CRAFTED WITH LOVE ✦</span>
          <h2>Handcrafted <span>Wooden Furniture</span></h2>
          <p class="hero-desc">Traditional craftsmanship meets modern design. Every piece is built to last generations — made with premium solid wood by master craftsmen.</p>
          <div class="hero-cta">
            <a href="#" class="btn btn-gold">🪑 Browse Collection</a>
            <a href="#" class="btn btn-outline">📞 Custom Order</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><b>50+</b><span>Years Experience</span></div>
            <div class="hero-stat"><b>10K+</b><span>Happy Families</span></div>
            <div class="hero-stat"><b>100%</b><span>Solid Wood</span></div>
          </div>
        </div>
        <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" alt="Wooden Furniture">
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Browse Categories</span>
        <h2 class="section-title">Our <span>Collection</span></h2>
        <p class="section-desc">Furniture for every room of your home, crafted with premium wood.</p>
      </div>
      <div class="categories-grid">
        <div class="cat-card"><div class="emoji">🛋️</div><h4>Sofas</h4><p>50+ designs</p></div>
        <div class="cat-card"><div class="emoji">🪑</div><h4>Chairs</h4><p>100+ designs</p></div>
        <div class="cat-card"><div class="emoji">🛏️</div><h4>Beds</h4><p>30+ designs</p></div>
        <div class="cat-card"><div class="emoji">🗄️</div><h4>Wardrobes</h4><p>40+ designs</p></div>
        <div class="cat-card"><div class="emoji">🍽️</div><h4>Dining Tables</h4><p>25+ designs</p></div>
        <div class="cat-card"><div class="emoji">📚</div><h4>Bookshelves</h4><p>20+ designs</p></div>
        <div class="cat-card"><div class="emoji">🪞</div><h4>Mirrors</h4><p>15+ designs</p></div>
        <div class="cat-card"><div class="emoji">🚪</div><h4>Doors</h4><p>Custom made</p></div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Bestsellers</span>
        <h2 class="section-title">Popular <span>Products</span></h2>
        <p class="section-desc">Our most loved pieces — chosen by thousands of happy customers.</p>
      </div>
      <div class="products-grid">
        <div class="product"><div class="product-img">🛋️<div class="product-tag">BESTSELLER</div></div><div class="product-info"><h4>Wooden Sofa Set</h4><div class="material">Sheesham Wood</div><div class="rating">★★★★★ (128)</div><div class="price-row"><div class="price">₹24,999</div><button class="view-btn">View</button></div></div></div>
        <div class="product"><div class="product-img">🪑<div class="product-tag">NEW</div></div><div class="product-info"><h4>Dining Chair Set</h4><div class="material">Teak Wood</div><div class="rating">★★★★★ (89)</div><div class="price-row"><div class="price">₹8,999</div><button class="view-btn">View</button></div></div></div>
        <div class="product"><div class="product-img">🛏️<div class="product-tag">PREMIUM</div></div><div class="product-info"><h4>King Size Bed</h4><div class="material">Solid Sheesham</div><div class="rating">★★★★★ (156)</div><div class="price-row"><div class="price">₹32,999</div><button class="view-btn">View</button></div></div></div>
        <div class="product"><div class="product-img">🗄️</div><div class="product-info"><h4>3-Door Wardrobe</h4><div class="material">Mango Wood</div><div class="rating">★★★★☆ (67)</div><div class="price-row"><div class="price">₹28,999</div><button class="view-btn">View</button></div></div></div>
        <div class="product"><div class="product-img">🍽️<div class="product-tag">SALE</div></div><div class="product-info"><h4>6-Seater Dining Table</h4><div class="material">Sheesham Wood</div><div class="rating">★★★★★ (94)</div><div class="price-row"><div class="price">₹18,999</div><button class="view-btn">View</button></div></div></div>
        <div class="product"><div class="product-img">📚</div><div class="product-info"><h4>Bookcase Shelf</h4><div class="material">Teak Wood</div><div class="rating">★★★★★ (112)</div><div class="price-row"><div class="price">₹12,499</div><button class="view-btn">View</button></div></div></div>
        <div class="product"><div class="product-img">🪞<div class="product-tag">HANDCRAFTED</div></div><div class="product-info"><h4>Designer Mirror Frame</h4><div class="material">Rosewood</div><div class="rating">★★★★★ (78)</div><div class="price-row"><div class="price">₹6,999</div><button class="view-btn">View</button></div></div></div>
        <div class="product"><div class="product-img">🚪</div><div class="product-info"><h4>Carved Wooden Door</h4><div class="material">Sheesham</div><div class="rating">★★★★★ (45)</div><div class="price-row"><div class="price">₹15,999</div><button class="view-btn">View</button></div></div></div>
      </div>
    </section>

    <section class="craft-section">
      <div class="craft-inner">
        <div class="craft-img"><img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80" alt="Craftsmanship"></div>
        <div class="craft-content">
          <span class="section-tag">Our Craft</span>
          <h3>50 Years of <span>Woodworking Excellence</span></h3>
          <p>WoodCraft Furniture has been crafting premium wooden furniture since 1975. Three generations of master craftsmen have honed their skills to create pieces that are both beautiful and durable.</p>
          <p>We use only the finest solid wood — Sheesham, Teak, Mango, and Rosewood — sourced ethically from sustainable forests. Every piece is hand-finished with traditional techniques passed down through generations.</p>
          <div class="craft-features">
            <div class="craft-feat">Premium Solid Wood</div>
            <div class="craft-feat">Hand-Finished</div>
            <div class="craft-feat">5-Year Warranty</div>
            <div class="craft-feat">Custom Sizes</div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="testimonial-inner">
        <div class="section-header">
          <span class="section-tag" style="color:#ffd700;">Testimonials</span>
          <h2 class="section-title" style="color:#fff;">Customer <span style="color:#ffd700;">Reviews</span></h2>
          <p class="section-desc" style="color:#e8dcc8;">What our happy customers say about our craftsmanship.</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Exceptional quality! The wooden sofa set we bought 5 years ago still looks brand new. The craftsmanship is truly world-class."</p><div class="author"><div class="av">RK</div><div><h5>Rajesh Kumar</h5><p>Homeowner</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Got a custom king-size bed made to fit my odd room dimensions. The team was so professional and the result is stunning!"</p><div class="author"><div class="av">SP</div><div><h5>Sunita Patel</h5><p>Customer</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Three generations of my family have bought furniture from here. There's a reason they've been around 50 years — quality speaks."</p><div class="author"><div class="av">AM</div><div><h5>Amit Mehta</h5><p>Loyal Customer</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Visit Our <span>Showroom</span></h3>
          <p>Come see our collection in person or place a custom order.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Showroom</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Hours</h5><p>Mon–Sun: 10AM – 8PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Enquiry sent!');">
          <h4>Send Enquiry</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Interested In</label><select required><option>-- Select --</option><option>Sofas</option><option>Beds</option><option>Dining</option><option>Wardrobe</option><option>Custom Order</option></select></div>
          <div class="form-group"><label>Message</label><textarea placeholder="Tell us what you're looking for..." required></textarea></div>
          <button type="submit" class="btn btn-gold">📨 Send Enquiry</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>🪵 WoodCraft Furniture</h4><p>50 years of crafting premium wooden furniture. Three generations of craftsmanship, one commitment to quality.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Collection</a></li><li><a href="#">Custom</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Categories</h4><ul><li><a href="#">Sofas</a></li><li><a href="#">Beds</a></li><li><a href="#">Dining</a></li><li><a href="#">Wardrobes</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 WoodCraft Furniture. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== WOOD 2: INTERIOR DESIGN ==========
  "wood2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f5f1ec;color:#2d2419;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(245,241,236,0.98);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(10px);border-bottom:1px solid rgba(139,111,71,0.2);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#8b6f47,#a68a5d);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;box-shadow:0 4px 15px rgba(139,111,71,0.3);}
      .nav .logo-text h1{font-size:19px;color:#2d2419;margin:0;font-weight:800;letter-spacing:1px;}
      .nav .logo-text p{font-size:11px;color:#8b6f47;margin:0;letter-spacing:2px;text-transform:uppercase;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#2d2419;font-size:14px;font-weight:500;transition:color 0.3s;}
      .nav nav a:hover{color:#8b6f47;}
      .nav .cta-btn{padding:12px 24px;background:#2d2419;color:#fff;border-radius:30px;font-weight:600;font-size:14px;transition:all 0.3s;}
      .nav .cta-btn:hover{background:#8b6f47;transform:translateY(-3px);}
      .hero{padding:110px 40px;text-align:center;background:linear-gradient(135deg,#e8dcc8,#f5f1ec);position:relative;overflow:hidden;}
      .hero::before{content:'';position:absolute;top:-100px;left:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(139,111,71,0.15),transparent 70%);border-radius:50%;}
      .hero-inner{position:relative;max-width:900px;margin:0 auto;z-index:1;}
      .hero-badge{display:inline-block;padding:8px 20px;background:#fff;border-radius:30px;color:#8b6f47;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:26px;font-weight:700;box-shadow:0 4px 15px rgba(0,0,0,0.08);}
      .hero h2{font-size:clamp(36px,6vw,64px);line-height:1.1;color:#2d2419;margin-bottom:24px;font-weight:900;}
      .hero h2 span{color:#8b6f47;font-style:italic;font-weight:400;}
      .hero p{font-size:18px;color:#5d4037;max-width:640px;margin:0 auto 40px;}
      .hero-cta{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:30px;font-weight:700;font-size:15px;transition:all 0.3s;cursor:pointer;border:none;}
      .btn-dark{background:#2d2419;color:#fff;box-shadow:0 8px 20px rgba(45,36,25,0.3);}
      .btn-dark:hover{background:#8b6f47;transform:translateY(-4px);box-shadow:0 12px 30px rgba(139,111,71,0.4);}
      .btn-outline{background:transparent;color:#2d2419;border:2px solid #2d2419;}
      .btn-outline:hover{background:#2d2419;color:#fff;transform:translateY(-4px);}
      .stats{background:#2d2419;color:#fff;padding:50px 40px;}
      .stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center;}
      .stat-item h3{font-size:42px;color:#d4b896;margin-bottom:6px;font-weight:900;}
      .stat-item p{font-size:13px;color:#b8a888;text-transform:uppercase;letter-spacing:1px;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#8b6f47;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:800;}
      .section-title{font-size:clamp(30px,4.5vw,44px);color:#2d2419;margin-bottom:18px;line-height:1.2;font-weight:900;}
      .section-title span{color:#8b6f47;font-style:italic;font-weight:400;}
      .section-desc{font-size:16px;color:#5d4037;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .projects-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .project-card{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(45,36,25,0.08);transition:all 0.4s;}
      .project-card:hover{transform:translateY(-10px);box-shadow:0 25px 60px rgba(139,111,71,0.25);}
      .project-img{height:240px;background:linear-gradient(135deg,#8b6f47,#d4b896);display:flex;align-items:center;justify-content:center;font-size:80px;color:#fff;position:relative;overflow:hidden;}
      .project-card:hover .project-img{font-size:90px;}
      .project-img .category-tag{position:absolute;top:14px;left:14px;background:rgba(45,36,25,0.9);color:#fff;padding:6px 14px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;}
      .project-info{padding:26px;}
      .project-info h4{font-size:19px;color:#2d2419;margin-bottom:8px;}
      .project-info p{font-size:13px;color:#5d4037;line-height:1.6;margin-bottom:16px;}
      .project-info .meta{display:flex;justify-content:space-between;padding-top:16px;border-top:1px solid #e8dcc8;font-size:12px;color:#8b6f47;font-weight:600;}
      .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
      .service-card{background:#fff;padding:36px 28px;border-radius:16px;box-shadow:0 4px 20px rgba(45,36,25,0.08);transition:all 0.4s;border-top:4px solid transparent;}
      .service-card:hover{transform:translateY(-8px);border-top-color:#8b6f47;box-shadow:0 20px 45px rgba(139,111,71,0.2);}
      .service-icon{width:64px;height:64px;background:linear-gradient(135deg,#e8dcc8,#d4b896);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:30px;margin-bottom:20px;transition:transform 0.4s;}
      .service-card:hover .service-icon{transform:rotate(-10deg) scale(1.1);}
      .service-card h4{font-size:19px;color:#2d2419;margin-bottom:10px;}
      .service-card p{font-size:14px;color:#5d4037;line-height:1.7;}
      .process-section{background:linear-gradient(135deg,#e8dcc8,#f5f1ec);}
      .process-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
      .process-card{text-align:center;padding:30px 20px;}
      .process-card .num{width:70px;height:70px;margin:0 auto 20px;background:#2d2419;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:900;color:#d4b896;box-shadow:0 8px 25px rgba(45,36,25,0.3);}
      .process-card h4{font-size:17px;color:#2d2419;margin-bottom:10px;}
      .process-card p{font-size:13px;color:#5d4037;line-height:1.6;}
      .testimonial-section{background:#2d2419;color:#fff;}
      .testimonial-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:50px;}
      .testimonial-card{background:rgba(255,255,255,0.05);padding:32px 28px;border-radius:16px;border:1px solid rgba(212,184,150,0.2);transition:all 0.4s;}
      .testimonial-card:hover{background:rgba(212,184,150,0.1);transform:translateY(-8px);}
      .testimonial-card .stars{color:#d4b896;font-size:18px;margin-bottom:14px;}
      .testimonial-card .quote{font-size:14.5px;color:#e8dcc8;line-height:1.8;margin-bottom:22px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:50px;height:50px;border-radius:50%;background:#8b6f47;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:18px;}
      .testimonial-card .author h5{font-size:15px;color:#fff;margin-bottom:4px;}
      .testimonial-card .author p{font-size:12px;color:#d4b896;}
      .contact-section{background:linear-gradient(135deg,#e8dcc8,#f5f1ec);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:32px;color:#2d2419;margin-bottom:20px;font-weight:900;}
      .contact-info h3 span{color:#8b6f47;font-style:italic;font-weight:400;}
      .contact-info > p{color:#5d4037;margin-bottom:30px;font-size:15px;}
      .contact-item{display:flex;gap:16px;margin-bottom:22px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:#fff;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 15px rgba(139,111,71,0.15);transition:all 0.3s;}
      .contact-item:hover .ic{background:#8b6f47;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#8b6f47;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:700;}
      .contact-item p{font-size:15px;color:#2d2419;font-weight:500;}
      .contact-form{background:#fff;padding:40px;border-radius:20px;box-shadow:0 10px 40px rgba(45,36,25,0.1);}
      .contact-form h4{font-size:22px;color:#2d2419;margin-bottom:22px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#5d4037;font-size:13px;margin-bottom:8px;font-weight:600;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:#f5f1ec;border:1px solid #e8dcc8;border-radius:10px;color:#2d2419;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#8b6f47;background:#fff;}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-dark{width:100%;justify-content:center;}
      .footer{background:#1a1410;color:#b8a888;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#d4b896;font-size:17px;margin-bottom:18px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#b8a888;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#d4b896;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(212,184,150,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:70px 20px;}
        .section,.process-inner,.testimonial-inner,.contact-inner{padding:60px 20px;}
        .projects-grid,.services-grid,.process-grid,.testimonial-grid,.stats-inner,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .contact-inner{grid-template-columns:1fr;gap:40px;}
        .stats{padding:40px 20px;}
      }
      @media(max-width:600px){
        .projects-grid,.services-grid,.process-grid,.testimonial-grid,.stats-inner,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
        .stat-item h3{font-size:32px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo"><div class="logo-icon">🏛️</div><div class="logo-text"><h1>WOOD INTERIOR STUDIO</h1><p>Designing Spaces Since 2005</p></div></div>
      <nav><a href="#">Home</a><a href="#">Projects</a><a href="#">Services</a><a href="#">About</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">📐 Free Quote</a>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <span class="hero-badge">✦ PREMIUM INTERIOR DESIGN ✦</span>
        <h2>Transform Your <span>Space</span></h2>
        <p>Premium wooden interior design for homes, offices, and restaurants. We create spaces that inspire, comfort, and impress.</p>
        <div class="hero-cta">
          <a href="#" class="btn btn-dark">📐 Get Free Quote</a>
          <a href="#" class="btn btn-outline">🖼️ View Portfolio</a>
        </div>
      </div>
    </section>

    <div class="stats">
      <div class="stats-inner">
        <div class="stat-item"><h3>500+</h3><p>Projects Completed</p></div>
        <div class="stat-item"><h3>20+</h3><p>Years Experience</p></div>
        <div class="stat-item"><h3>50+</h3><p>Expert Designers</p></div>
        <div class="stat-item"><h3>4.9★</h3><p>Client Rating</p></div>
      </div>
    </div>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Portfolio</span>
        <h2 class="section-title">Recent <span>Projects</span></h2>
        <p class="section-desc">Take a look at our latest interior design projects across Mumbai.</p>
      </div>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-img">🏠<div class="category-tag">Residential</div></div>
          <div class="project-info"><h4>Modern Living Room</h4><p>Complete wooden paneling with custom furniture and warm lighting for a cozy family space.</p><div class="meta"><span>📍 Bandra</span><span>2,500 sq ft</span></div></div>
        </div>
        <div class="project-card">
          <div class="project-img">🏢<div class="category-tag">Commercial</div></div>
          <div class="project-info"><h4>Corporate Office</h4><p>Ergonomic wooden workspace design with acoustic panels, custom desks, and meeting areas.</p><div class="meta"><span>📍 BKC</span><span>5,000 sq ft</span></div></div>
        </div>
        <div class="project-card">
          <div class="project-img">🍽️<div class="category-tag">Hospitality</div></div>
          <div class="project-info"><h4>Restaurant Interior</h4><p>Rustic wood theme with warm lighting, custom furniture, and a stunning bar counter.</p><div class="meta"><span>📍 Andheri</span><span>3,200 sq ft</span></div></div>
        </div>
        <div class="project-card">
          <div class="project-img">🛏️<div class="category-tag">Residential</div></div>
          <div class="project-info"><h4>Master Bedroom Suite</h4><p>Luxurious bedroom with wooden wardrobe, custom bed, and elegant headboard.</p><div class="meta"><span>📍 Juhu</span><span>600 sq ft</span></div></div>
        </div>
        <div class="project-card">
          <div class="project-img">📚<div class="category-tag">Residential</div></div>
          <div class="project-info"><h4>Home Library</h4><p>Floor-to-ceiling wooden bookshelves with reading nook and perfect lighting.</p><div class="meta"><span>📍 Powai</span><span>400 sq ft</span></div></div>
        </div>
        <div class="project-card">
          <div class="project-img">☕<div class="category-tag">Hospitality</div></div>
          <div class="project-info"><h4>Cafe Interior</h4><p>Cozy cafe with industrial wood look, open shelving, and comfortable seating areas.</p><div class="meta"><span>📍 Bandra</span><span>1,800 sq ft</span></div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Our Services</span>
        <h2 class="section-title">What We <span>Offer</span></h2>
        <p class="section-desc">Complete wooden interior design solutions for every space.</p>
      </div>
      <div class="services-grid">
        <div class="service-card"><div class="service-icon">🏠</div><h4>Residential Design</h4><p>Custom interiors for living rooms, bedrooms, kitchens, and complete homes.</p></div>
        <div class="service-card"><div class="service-icon">🏢</div><h4>Commercial Spaces</h4><p>Office interiors, retail stores, hotels, and restaurants designed for success.</p></div>
        <div class="service-card"><div class="service-icon">🪵</div><h4>Custom Furniture</h4><p>Bespoke wooden furniture designed and crafted for your unique space.</p></div>
        <div class="service-card"><div class="service-icon">🎨</div><h4>3D Visualization</h4><p>See your space before we build it with detailed 3D renderings.</p></div>
        <div class="service-card"><div class="service-icon">📐</div><h4>Space Planning</h4><p>Optimal use of every square foot with smart space planning.</p></div>
        <div class="service-card"><div class="service-icon">💡</div><h4>Lighting Design</h4><p>Perfect lighting to highlight your wooden interiors beautifully.</p></div>
      </div>
    </section>

    <section class="process-section">
      <div class="process-inner">
        <div class="section-header">
          <span class="section-tag">Our Process</span>
          <h2 class="section-title">How We <span>Work</span></h2>
          <p class="section-desc">A simple, transparent process from concept to completion.</p>
        </div>
        <div class="process-grid">
          <div class="process-card"><div class="num">1</div><h4>Consultation</h4><p>Free consultation to understand your needs and vision.</p></div>
          <div class="process-card"><div class="num">2</div><h4>Design</h4><p>Detailed 3D designs for your approval before execution.</p></div>
          <div class="process-card"><div class="num">3</div><h4>Execution</h4><p>Expert craftsmen bring the design to life with precision.</p></div>
          <div class="process-card"><div class="num">4</div><h4>Handover</h4><p>Final walkthrough, quality check, and complete handover.</p></div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="testimonial-inner">
        <div class="section-header">
          <span class="section-tag" style="color:#d4b896;">Client Love</span>
          <h2 class="section-title" style="color:#fff;">What Clients <span style="color:#d4b896;">Say</span></h2>
          <p class="section-desc" style="color:#e8dcc8;">Happy clients share their experience working with us.</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"They transformed our 3BHK into a dream home! The 3D design was exactly as promised. Professional team, timely delivery."</p><div class="author"><div class="av">RK</div><div><h5>Rohit Kapoor</h5><p>Homeowner</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Our restaurant looks stunning after the redesign. Customers keep complimenting the ambiance. Business has grown 40%!"</p><div class="author"><div class="av">SM</div><div><h5>Sunita Mehta</h5><p>Restaurant Owner</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Best investment we made for our office. The wooden interiors have boosted team morale and productivity significantly."</p><div class="author"><div class="av">AP</div><div><h5>Amit Patel</h5><p>CEO, TechCorp</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Get Your Free <span>Quote</span></h3>
          <p>Share your requirements and we'll provide a detailed quote within 24 hours.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Studio</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Hours</h5><p>Mon–Sat: 10AM – 7PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Quote request sent!');">
          <h4>Request Free Quote</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Project Type</label><select required><option>-- Select --</option><option>Residential</option><option>Commercial</option><option>Hospitality</option><option>Custom Furniture</option></select></div>
          <div class="form-group"><label>Project Details</label><textarea placeholder="Describe your space and requirements..." required></textarea></div>
          <button type="submit" class="btn btn-dark">📐 Get Free Quote</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>🏛️ Wood Interior Studio</h4><p>Premium wooden interior design for residential and commercial spaces. 20+ years of excellence.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Projects</a></li><li><a href="#">Services</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Services</h4><ul><li><a href="#">Residential</a></li><li><a href="#">Commercial</a></li><li><a href="#">Custom</a></li><li><a href="#">3D Design</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Wood Interior Studio. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== WOOD 3: CUSTOM WORKSHOP ==========
  "wood3": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#1a1410;color:#e8dcc8;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(26,20,16,0.96);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(12px);border-bottom:1px solid rgba(160,82,45,0.4);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#d4a76a,#a0522d);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;color:#1a1410;box-shadow:0 0 20px rgba(212,167,106,0.4);}
      .nav .logo-text h1{font-size:20px;color:#d4a76a;margin:0;letter-spacing:2px;}
      .nav .logo-text p{font-size:11px;color:#a89980;margin:0;letter-spacing:2px;text-transform:uppercase;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#e8dcc8;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#d4a76a;}
      .nav .cta-btn{padding:12px 24px;background:linear-gradient(135deg,#d4a76a,#a0522d);color:#1a1410;border-radius:30px;font-weight:700;font-size:14px;transition:all 0.3s;box-shadow:0 0 20px rgba(212,167,106,0.4);}
      .nav .cta-btn:hover{transform:translateY(-3px);box-shadow:0 0 40px rgba(212,167,106,0.8);}
      .hero{position:relative;padding:120px 40px 100px;text-align:center;background:radial-gradient(ellipse at 50% 0%,rgba(160,82,45,0.4),transparent 60%);overflow:hidden;}
      .hero::before{content:'⚒';position:absolute;top:60px;left:10%;font-size:80px;opacity:0.1;animation:float 5s ease-in-out infinite;}
      .hero::after{content:'🪚';position:absolute;bottom:60px;right:10%;font-size:80px;opacity:0.1;animation:float 6s ease-in-out infinite reverse;}
      @keyframes float{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-20px) rotate(10deg);}}
      .hero-content{position:relative;max-width:900px;margin:0 auto;z-index:1;}
      .hero-badge{display:inline-block;padding:8px 22px;border:1px solid rgba(212,167,106,0.5);border-radius:30px;color:#d4a76a;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:26px;background:rgba(212,167,106,0.08);}
      .hero h1{font-size:clamp(38px,6.5vw,72px);line-height:1.1;margin-bottom:24px;background:linear-gradient(90deg,#d4a76a,#f0c080,#d4a76a);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shine 4s linear infinite;font-weight:normal;}
      @keyframes shine{to{background-position:200% center;}}
      .hero p{font-size:18px;color:#a89980;max-width:640px;margin:0 auto 40px;}
      .hero-cta{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:30px;font-weight:700;font-size:15px;border:none;cursor:pointer;transition:all 0.3s;font-family:inherit;}
      .btn-gold{background:linear-gradient(135deg,#d4a76a,#a0522d);color:#1a1410;box-shadow:0 0 30px rgba(212,167,106,0.5);}
      .btn-gold:hover{transform:translateY(-4px);box-shadow:0 0 50px rgba(212,167,106,0.9);}
      .btn-outline{border:2px solid #d4a76a;color:#d4a76a;background:transparent;}
      .btn-outline:hover{background:#d4a76a;color:#1a1410;transform:translateY(-4px);}
      .hero-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:700px;margin:60px auto 0;}
      .hero-stat{background:rgba(212,167,106,0.08);border:1px solid rgba(212,167,106,0.3);padding:24px 16px;border-radius:16px;transition:all 0.3s;}
      .hero-stat:hover{background:rgba(212,167,106,0.15);transform:translateY(-5px);}
      .hero-stat h3{font-size:32px;color:#d4a76a;margin-bottom:6px;font-weight:normal;}
      .hero-stat p{font-size:12px;color:#a89980;text-transform:uppercase;letter-spacing:1px;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#d4a76a;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-size:clamp(30px,4.5vw,44px);color:#fff;margin-bottom:18px;line-height:1.2;font-weight:normal;}
      .section-title span{color:#d4a76a;font-style:italic;}
      .section-desc{font-size:16px;color:#a89980;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .products-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .product-card{background:linear-gradient(160deg,rgba(160,82,45,0.15),rgba(26,20,16,0.6));border-radius:20px;overflow:hidden;border:1px solid rgba(160,82,45,0.4);transition:all 0.4s;position:relative;}
      .product-card:hover{transform:translateY(-10px);border-color:#d4a76a;box-shadow:0 20px 50px rgba(212,167,106,0.3);}
      .product-img{height:240px;background:linear-gradient(135deg,#a0522d,#d4a76a);display:flex;align-items:center;justify-content:center;font-size:80px;color:#1a1410;transition:all 0.4s;}
      .product-card:hover .product-img{font-size:90px;}
      .product-info{padding:28px;}
      .product-info h4{font-size:21px;color:#fff;margin-bottom:10px;font-weight:normal;}
      .product-info p{font-size:14px;color:#a89980;line-height:1.7;margin-bottom:18px;}
      .product-info .features-list{list-style:none;margin-bottom:18px;}
      .product-info .features-list li{font-size:13px;color:#d4a76a;padding:5px 0;display:flex;align-items:center;gap:8px;}
      .product-info .features-list li::before{content:'✓';color:#d4a76a;font-weight:bold;}
      .product-info .enquire-btn{padding:10px 22px;background:linear-gradient(135deg,#d4a76a,#a0522d);color:#1a1410;border:none;border-radius:20px;font-size:13px;font-weight:700;cursor:pointer;transition:all 0.3s;}
      .product-info .enquire-btn:hover{transform:scale(1.05);box-shadow:0 4px 15px rgba(212,167,106,0.5);}
      .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(212,167,106,0.25);}
      .about-img img{width:100%;height:520px;object-fit:cover;}
      .about-content h3{font-size:34px;color:#fff;margin-bottom:20px;line-height:1.3;font-weight:normal;}
      .about-content h3 span{color:#d4a76a;font-style:italic;}
      .about-content p{font-size:16px;color:#a89980;line-height:1.8;margin-bottom:18px;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:10px;background:rgba(212,167,106,0.1);padding:14px 18px;border-radius:10px;font-size:14px;color:#e8dcc8;border:1px solid rgba(212,167,106,0.3);}
      .about-feat::before{content:'⚒';width:24px;height:24px;background:#d4a76a;color:#1a1410;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;font-weight:bold;}
      .process-section{background:linear-gradient(180deg,transparent,rgba(160,82,45,0.1),transparent);}
      .process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
      .process-card{text-align:center;padding:30px 20px;background:rgba(212,167,106,0.05);border-radius:16px;border:1px solid rgba(212,167,106,0.2);transition:all 0.4s;}
      .process-card:hover{transform:translateY(-6px);border-color:#d4a76a;box-shadow:0 15px 40px rgba(212,167,106,0.2);}
      .process-card .num{width:64px;height:64px;margin:0 auto 18px;background:linear-gradient(135deg,#d4a76a,#a0522d);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:900;color:#1a1410;box-shadow:0 8px 25px rgba(212,167,106,0.4);}
      .process-card h4{font-size:17px;color:#d4a76a;margin-bottom:10px;font-weight:normal;}
      .process-card p{font-size:13px;color:#a89980;line-height:1.6;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .testimonial-card{background:linear-gradient(160deg,rgba(160,82,45,0.1),rgba(26,20,16,0.4));padding:36px 28px;border-radius:20px;border:1px solid rgba(160,82,45,0.3);transition:all 0.4s;position:relative;}
      .testimonial-card:hover{transform:translateY(-8px);border-color:#d4a76a;box-shadow:0 20px 50px rgba(212,167,106,0.25);}
      .testimonial-card .stars{color:#d4a76a;font-size:16px;margin-bottom:14px;}
      .testimonial-card .quote{font-size:14.5px;color:#c8b8a0;line-height:1.8;margin-bottom:22px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#d4a76a,#a0522d);display:flex;align-items:center;justify-content:center;color:#1a1410;font-weight:bold;font-size:18px;}
      .testimonial-card .author h5{font-size:15px;color:#fff;margin-bottom:4px;}
      .testimonial-card .author p{font-size:12px;color:#d4a76a;}
      .contact-section{background:linear-gradient(135deg,#0f0a07,#1a1410);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:90px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:34px;color:#fff;margin-bottom:20px;font-weight:normal;}
      .contact-info h3 span{color:#d4a76a;font-style:italic;}
      .contact-info > p{color:#a89980;margin-bottom:32px;}
      .contact-item{display:flex;gap:16px;margin-bottom:24px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:rgba(212,167,106,0.15);border:1px solid rgba(212,167,106,0.4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;color:#d4a76a;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .ic{background:#d4a76a;color:#1a1410;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#d4a76a;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:bold;}
      .contact-item p{font-size:15px;color:#fff;}
      .contact-form{background:rgba(212,167,106,0.05);padding:40px;border-radius:20px;border:1px solid rgba(212,167,106,0.3);}
      .contact-form h4{font-size:22px;color:#d4a76a;margin-bottom:22px;font-weight:normal;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#a89980;font-size:13px;margin-bottom:8px;font-weight:500;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:rgba(0,0,0,0.4);border:1px solid rgba(212,167,106,0.3);border-radius:10px;color:#fff;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#d4a76a;background:rgba(0,0,0,0.6);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-gold{width:100%;justify-content:center;}
      .footer{background:#050302;color:#8a7a60;padding:60px 40px 30px;border-top:1px solid rgba(212,167,106,0.15);}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#d4a76a;font-size:17px;margin-bottom:18px;font-weight:normal;letter-spacing:1px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#8a7a60;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#d4a76a;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(212,167,106,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:70px 20px;}
        .hero-stats{grid-template-columns:1fr 1fr 1fr;gap:12px;}
        .hero-stat h3{font-size:24px;}
        .section,.contact-inner{padding:60px 20px;}
        .products-grid,.testimonial-grid,.process-grid,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .about-grid,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .about-img img{height:340px;}
      }
      @media(max-width:600px){
        .products-grid,.testimonial-grid,.process-grid,.about-features,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .hero-stats{grid-template-columns:1fr;}
        .contact-form{padding:26px 20px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo"><div class="logo-icon">⚒</div><div class="logo-text"><h1>MASTER WOOD WORKS</h1><p>Custom Creations Since 1960</p></div></div>
      <nav><a href="#">Home</a><a href="#">Products</a><a href="#">About</a><a href="#">Process</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">📝 Request Quote</a>
    </header>

    <section class="hero">
      <div class="hero-content">
        <span class="hero-badge">⚒ HANDCRAFTED WITH PASSION ⚒</span>
        <h1>Custom Wood Creations</h1>
        <p>Every piece tells a story. Get your dream furniture handcrafted by master craftsmen with over 60 years of combined experience.</p>
        <div class="hero-cta">
          <a href="#" class="btn btn-gold">📝 Request Quote</a>
          <a href="#" class="btn btn-outline">🖼️ View Gallery</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><h3>60+</h3><p>Years Experience</p></div>
          <div class="hero-stat"><h3>5000+</h3><p>Custom Pieces Made</p></div>
          <div class="hero-stat"><h3>100%</h3><p>Handcrafted</p></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">What We Create</span>
        <h2 class="section-title">Custom Wood <span>Specialties</span></h2>
        <p class="section-desc">Every piece is handcrafted to your exact specifications, from design to finish.</p>
      </div>
      <div class="products-grid">
        <div class="product-card">
          <div class="product-img">🪑</div>
          <div class="product-info">
            <h4>Custom Chairs</h4>
            <p>Design your perfect seating with premium woods and finishes.</p>
            <ul class="features-list"><li>Your choice of wood</li><li>Custom dimensions</li><li>Hand-finished</li></ul>
            <button class="enquire-btn">Enquire Now</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">🚪</div>
          <div class="product-info">
            <h4>Wooden Doors</h4>
            <p>Hand-carved designer doors that become statement pieces.</p>
            <ul class="features-list"><li>Intricate carvings</li><li>Teak & Sheesham</li><li>Anti-termite treatment</li></ul>
            <button class="enquire-btn">Enquire Now</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">🪞</div>
          <div class="product-info">
            <h4>Mirror Frames</h4>
            <p>Elegant frames crafted with intricate detailing and precision.</p>
            <ul class="features-list"><li>Multiple design styles</li><li>Rosewood & Teak</li><li>Custom sizes</li></ul>
            <button class="enquire-btn">Enquire Now</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">📚</div>
          <div class="product-info">
            <h4>Bookshelves</h4>
            <p>Custom library shelves to showcase your precious collection.</p>
            <ul class="features-list"><li>Floor to ceiling</li><li>Modular design</li><li>Hidden lighting option</li></ul>
            <button class="enquire-btn">Enquire Now</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">🪑</div>
          <div class="product-info">
            <h4>Dining Sets</h4>
            <p>Complete dining room sets crafted to fit your space perfectly.</p>
            <ul class="features-list"><li>4/6/8 seaters</li><li>Extendable options</li><li>Matching chairs</li></ul>
            <button class="enquire-btn">Enquire Now</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-img">🎨</div>
          <div class="product-info">
            <h4>Custom Decorative Pieces</h4>
            <p>Anything your imagination can dream — we can craft it in wood.</p>
            <ul class="features-list"><li>Statues & carvings</li><li>Wall art</li><li>Decorative panels</li></ul>
            <button class="enquire-btn">Enquire Now</button>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="about-grid">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" alt="Workshop"></div>
        <div class="about-content">
          <span class="section-tag">Our Legacy</span>
          <h3>60 Years of <span>Woodworking Mastery</span></h3>
          <p>Master Wood Works has been crafting premium custom wooden pieces since 1960. Three generations of master craftsmen have dedicated their lives to perfecting the art of woodworking.</p>
          <p>Every piece that leaves our workshop is a testament to our commitment to quality, tradition, and craftsmanship. No shortcuts, no compromise — just pure, honest woodworking.</p>
          <div class="about-features">
            <div class="about-feat">3 Generations</div>
            <div class="about-feat">Premium Woods Only</div>
            <div class="about-feat">Lifetime Warranty</div>
            <div class="about-feat">Custom Designs</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section process-section">
      <div class="section-header">
        <span class="section-tag">Our Process</span>
        <h2 class="section-title">From Vision <span>To Reality</span></h2>
        <p class="section-desc">A simple 4-step process to get your dream piece crafted.</p>
      </div>
      <div class="process-grid">
        <div class="process-card"><div class="num">1</div><h4>Consultation</h4><p>Share your vision, requirements, and budget with us.</p></div>
        <div class="process-card"><div class="num">2</div><h4>Design</h4><p>We create detailed design drawings for your approval.</p></div>
        <div class="process-card"><div class="num">3</div><h4>Crafting</h4><p>Master craftsmen bring your piece to life with precision.</p></div>
        <div class="process-card"><div class="num">4</div><h4>Delivery</h4><p>Safe delivery and installation at your location.</p></div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Client Stories</span>
        <h2 class="section-title">Happy <span>Customers</span></h2>
        <p class="section-desc">Hear from clients who got their dream pieces crafted by us.</p>
      </div>
      <div class="testimonial-grid">
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Got a custom dining table made for our anniversary. The craftsmanship is incredible — every guest asks where we got it!"</p><div class="author"><div class="av">RK</div><div><h5>Ramesh Kumar</h5><p>Customer</p></div></div></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"They made a custom bookshelf for my home library. It fits perfectly and is exactly what I envisioned. Highly recommend!"</p><div class="author"><div class="av">SM</div><div><h5>Sunita Mehta</h5><p>Book Lover</p></div></div></div>
        <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The carved wooden door they made for our home entrance is a masterpiece. Everyone who visits compliments it!"</p><div class="author"><div class="av">AP</div><div><h5>Arjun Patel</h5><p>Homeowner</p></div></div></div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Request Your <span>Custom Quote</span></h3>
          <p>Tell us what you want to create and we'll get back with a detailed quote.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Workshop</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Hours</h5><p>Mon–Sat: 9AM – 8PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Quote request sent!');">
          <h4>Request Custom Quote</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>What to Create</label><select required><option>-- Select --</option><option>Chairs</option><option>Doors</option><option>Mirror Frames</option><option>Bookshelf</option><option>Dining Set</option><option>Custom Piece</option></select></div>
          <div class="form-group"><label>Description</label><textarea placeholder="Describe your dream piece..." required></textarea></div>
          <button type="submit" class="btn btn-gold">📝 Request Quote</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>⚒ Master Wood Works</h4><p>60+ years of custom woodworking mastery. Every piece handcrafted to perfection by master craftsmen.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Products</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Products</h4><ul><li><a href="#">Chairs</a></li><li><a href="#">Doors</a></li><li><a href="#">Mirrors</a></li><li><a href="#">Shelves</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Master Wood Works. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== HOTEL 1: LUXURY ==========
  "hotel1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#0a0a0f;color:#e8e8e8;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(10,10,15,0.96);padding:20px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(12px);border-bottom:1px solid rgba(212,175,55,0.3);}
      .nav .logo{display:flex;align-items:center;gap:14px;}
      .nav .logo-icon{width:52px;height:52px;background:linear-gradient(135deg,#d4af37,#b8860b);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 0 25px rgba(212,175,55,0.5);}
      .nav .logo-text h1{font-size:20px;color:#d4af37;margin:0;letter-spacing:3px;font-weight:normal;}
      .nav .logo-text p{font-size:10px;color:#c8c8c8;margin:0;letter-spacing:4px;text-transform:uppercase;}
      .nav nav{display:flex;gap:30px;}
      .nav nav a{color:#e8e8e8;font-size:14px;transition:color 0.3s;letter-spacing:1px;}
      .nav nav a:hover{color:#d4af37;}
      .nav .cta-btn{padding:12px 26px;background:transparent;color:#d4af37;border:2px solid #d4af37;border-radius:30px;font-weight:700;font-size:13px;letter-spacing:2px;transition:all 0.3s;text-transform:uppercase;}
      .nav .cta-btn:hover{background:#d4af37;color:#0a0a0f;transform:translateY(-3px);box-shadow:0 10px 30px rgba(212,175,55,0.5);}
      .hero{position:relative;height:90vh;min-height:600px;display:flex;align-items:center;justify-content:center;text-align:center;background:linear-gradient(135deg,#0a0a0f 0%,#1a1a2e 50%,#0a0a0f 100%);overflow:hidden;padding:60px 40px;}
      .hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80') center/cover;opacity:0.25;}
      .hero::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,10,15,0.7),rgba(10,10,15,0.95));}
      .hero-content{position:relative;z-index:1;max-width:900px;}
      .hero-badge{display:inline-block;padding:10px 24px;border:1px solid rgba(212,175,55,0.6);color:#d4af37;font-size:12px;letter-spacing:5px;text-transform:uppercase;margin-bottom:30px;background:rgba(212,175,55,0.08);animation:fadeUp 1s ease;}
      @keyframes fadeUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
      .hero h1{font-size:clamp(44px,7vw,88px);color:#d4af37;margin-bottom:24px;letter-spacing:8px;font-weight:normal;line-height:1.1;animation:fadeUp 1s ease 0.2s backwards;text-shadow:0 0 60px rgba(212,175,55,0.5);}
      .hero p{font-size:20px;color:#c8c8c8;max-width:640px;margin:0 auto 40px;font-style:italic;animation:fadeUp 1s ease 0.4s backwards;}
      .hero-cta{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;animation:fadeUp 1s ease 0.6s backwards;}
      .btn{display:inline-flex;align-items:center;gap:10px;padding:18px 42px;font-weight:600;font-size:14px;letter-spacing:2px;text-transform:uppercase;transition:all 0.4s;cursor:pointer;border:none;font-family:inherit;}
      .btn-gold{background:linear-gradient(135deg,#d4af37,#b8860b);color:#0a0a0f;box-shadow:0 0 30px rgba(212,175,55,0.5);}
      .btn-gold:hover{transform:translateY(-4px);box-shadow:0 0 50px rgba(212,175,55,1);}
      .btn-outline{background:transparent;color:#d4af37;border:2px solid #d4af37;}
      .btn-outline:hover{background:#d4af37;color:#0a0a0f;transform:translateY(-4px);}
      .scroll-hint{position:absolute;bottom:40px;left:50%;transform:translateX(-50%);color:#d4af37;font-size:12px;letter-spacing:3px;z-index:2;animation:bounce 2s infinite;}
      @keyframes bounce{0%,100%{transform:translate(-50%,0);}50%{transform:translate(-50%,-10px);}}
      .section{padding:100px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#d4af37;font-size:12px;letter-spacing:5px;text-transform:uppercase;margin-bottom:16px;font-weight:700;}
      .section-title{font-size:clamp(32px,5vw,52px);color:#fff;margin-bottom:20px;line-height:1.2;font-weight:normal;letter-spacing:2px;}
      .section-title span{color:#d4af37;font-style:italic;}
      .section-desc{font-size:16px;color:#a8a8a8;max-width:640px;margin-bottom:60px;font-style:italic;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .rooms-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;}
      .room-card{background:linear-gradient(160deg,rgba(212,175,55,0.08),rgba(10,10,15,0.8));border:1px solid rgba(212,175,55,0.3);overflow:hidden;transition:all 0.5s;position:relative;}
      .room-card:hover{transform:translateY(-12px);border-color:#d4af37;box-shadow:0 30px 70px rgba(212,175,55,0.3);}
      .room-img{height:300px;overflow:hidden;position:relative;}
      .room-img img{width:100%;height:100%;object-fit:cover;transition:transform 0.7s;filter:brightness(0.8);}
      .room-card:hover .room-img img{transform:scale(1.1);filter:brightness(1);}
      .room-info{padding:32px 28px;text-align:center;}
      .room-info h4{font-size:24px;color:#d4af37;margin-bottom:10px;font-weight:normal;letter-spacing:2px;}
      .room-info .desc{font-size:14px;color:#a8a8a8;margin-bottom:20px;font-style:italic;line-height:1.6;}
      .room-info .amenities{display:flex;justify-content:center;gap:18px;margin-bottom:22px;flex-wrap:wrap;font-size:12px;color:#c8c8c8;}
      .room-info .amenities span{display:flex;align-items:center;gap:6px;}
      .room-info .price{font-size:26px;color:#fff;margin-bottom:8px;font-weight:bold;}
      .room-info .price small{font-size:12px;color:#a8a8a8;font-weight:normal;}
      .room-info .book-btn{padding:12px 32px;background:transparent;color:#d4af37;border:1px solid #d4af37;border-radius:30px;font-size:12px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;transition:all 0.3s;font-family:inherit;font-weight:600;}
      .room-info .book-btn:hover{background:#d4af37;color:#0a0a0f;box-shadow:0 0 25px rgba(212,175,55,0.6);}
      .amenities-section{background:linear-gradient(180deg,transparent,rgba(212,175,55,0.05),transparent);}
      .amenities-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
      .amenity-card{background:rgba(212,175,55,0.05);padding:36px 24px;border:1px solid rgba(212,175,55,0.2);text-align:center;transition:all 0.4s;}
      .amenity-card:hover{background:rgba(212,175,55,0.1);transform:translateY(-6px);border-color:#d4af37;}
      .amenity-icon{font-size:42px;margin-bottom:16px;display:block;}
      .amenity-card h4{font-size:16px;color:#d4af37;margin-bottom:8px;font-weight:normal;letter-spacing:1px;}
      .amenity-card p{font-size:13px;color:#a8a8a8;line-height:1.6;font-style:italic;}
      .experience-section{background:linear-gradient(135deg,#0a0a0f,#1a1a2e);}
      .experience-inner{max-width:1200px;margin:0 auto;padding:100px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .experience-img{border-radius:0;overflow:hidden;box-shadow:0 30px 80px rgba(212,175,55,0.2);position:relative;}
      .experience-img img{width:100%;height:600px;object-fit:cover;filter:brightness(0.9);}
      .experience-img::before{content:'';position:absolute;inset:20px;border:2px solid rgba(212,175,55,0.5);pointer-events:none;}
      .experience-content h3{font-size:38px;color:#fff;margin-bottom:24px;line-height:1.3;font-weight:normal;letter-spacing:1px;}
      .experience-content h3 span{color:#d4af37;font-style:italic;}
      .experience-content p{font-size:16px;color:#a8a8a8;line-height:1.9;margin-bottom:22px;font-style:italic;}
      .experience-content .signature{font-size:20px;color:#d4af37;font-style:italic;margin-top:20px;letter-spacing:2px;}
      .testimonial-section{background:linear-gradient(135deg,#0a0a0f,#1a1a2e);}
      .testimonial-inner{max-width:1200px;margin:0 auto;padding:100px 40px;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:60px;}
      .testimonial-card{background:rgba(212,175,55,0.04);padding:42px 32px;border:1px solid rgba(212,175,55,0.2);transition:all 0.4s;position:relative;}
      .testimonial-card::before{content:'"';position:absolute;top:10px;left:24px;font-size:100px;color:rgba(212,175,55,0.2);font-family:Georgia;line-height:1;}
      .testimonial-card:hover{background:rgba(212,175,55,0.08);transform:translateY(-8px);border-color:#d4af37;}
      .testimonial-card .stars{color:#d4af37;font-size:16px;margin-bottom:18px;position:relative;z-index:1;letter-spacing:3px;}
      .testimonial-card .quote{font-size:15px;color:#c8c8c8;line-height:1.9;margin-bottom:26px;position:relative;z-index:1;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:14px;position:relative;z-index:1;}
      .testimonial-card .author .av{width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#d4af37,#b8860b);display:flex;align-items:center;justify-content:center;color:#0a0a0f;font-weight:bold;font-size:18px;font-family:'Georgia',serif;}
      .testimonial-card .author h5{font-size:15px;color:#fff;margin-bottom:4px;font-weight:normal;letter-spacing:1px;}
      .testimonial-card .author p{font-size:12px;color:#d4af37;letter-spacing:1px;}
      .contact-section{background:#050508;padding:100px 40px;}
      .contact-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;}
      .contact-info h3{font-size:36px;color:#fff;margin-bottom:22px;font-weight:normal;letter-spacing:1px;}
      .contact-info h3 span{color:#d4af37;font-style:italic;}
      .contact-info > p{color:#a8a8a8;margin-bottom:36px;font-style:italic;}
      .contact-item{display:flex;gap:18px;margin-bottom:26px;align-items:flex-start;}
      .contact-item .ic{width:54px;height:54px;background:rgba(212,175,55,0.1);border:1px solid rgba(212,175,55,0.4);display:flex;align-items:center;justify-content:center;font-size:22px;color:#d4af37;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .ic{background:#d4af37;color:#0a0a0f;transform:rotate(-5deg);}
      .contact-item h5{font-size:11px;color:#d4af37;margin-bottom:5px;text-transform:uppercase;letter-spacing:3px;font-weight:normal;}
      .contact-item p{font-size:15px;color:#fff;letter-spacing:1px;}
      .contact-form{background:rgba(212,175,55,0.03);padding:44px;border:1px solid rgba(212,175,55,0.3);}
      .contact-form h4{font-size:24px;color:#d4af37;margin-bottom:26px;font-weight:normal;letter-spacing:2px;text-align:center;}
      .form-group{margin-bottom:20px;}
      .form-group label{display:block;color:#c8c8c8;font-size:11px;margin-bottom:10px;letter-spacing:2px;text-transform:uppercase;font-weight:600;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:15px 18px;background:rgba(0,0,0,0.5);border:1px solid rgba(212,175,55,0.3);color:#fff;font-family:'Georgia',serif;font-size:15px;transition:all 0.3s;letter-spacing:1px;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#d4af37;background:rgba(0,0,0,0.7);box-shadow:0 0 20px rgba(212,175,55,0.2);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-gold{width:100%;justify-content:center;}
      .footer{background:#000;color:#7a7a7a;padding:70px 40px 30px;border-top:1px solid rgba(212,175,55,0.2);}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:50px;margin-bottom:50px;}
      .footer h4{color:#d4af37;font-size:16px;margin-bottom:22px;font-weight:normal;letter-spacing:3px;text-transform:uppercase;}
      .footer p{font-size:13px;line-height:1.9;margin-bottom:14px;font-style:italic;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:12px;}
      .footer ul a{color:#7a7a7a;font-size:13px;transition:all 0.3s;letter-spacing:1px;}
      .footer ul a:hover{color:#d4af37;padding-left:8px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:34px;border-top:1px solid rgba(212,175,55,0.15);text-align:center;font-size:12px;letter-spacing:2px;}
      @media(max-width:992px){
        .nav{padding:16px 20px;flex-wrap:wrap;gap:14px;}
        .nav nav{gap:18px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{height:auto;min-height:auto;padding:80px 20px;}
        .section,.testimonial-inner,.contact-section{padding:70px 20px;}
        .rooms-grid,.testimonial-grid,.amenities-grid,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .experience-inner,.contact-inner{grid-template-columns:1fr;gap:40px;padding:70px 20px;}
        .experience-img img{height:400px;}
      }
      @media(max-width:600px){
        .rooms-grid,.testimonial-grid,.amenities-grid,.footer-top{grid-template-columns:1fr;}
        .hero h1{letter-spacing:4px;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:30px 22px;}
        .nav .logo-text h1{font-size:16px;}
        .nav .logo-text p{font-size:9px;letter-spacing:2px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo"><div class="logo-icon">👑</div><div class="logo-text"><h1>THE GRAND PALACE</h1><p>Luxury Redefined</p></div></div>
      <nav><a href="#">Home</a><a href="#">Rooms</a><a href="#">Amenities</a><a href="#">About</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">✦ Book Stay</a>
    </header>

    <section class="hero">
      <div class="hero-content">
        <span class="hero-badge">✦ WHERE LUXURY MEETS TIMELESS ELEGANCE ✦</span>
        <h1>THE GRAND PALACE</h1>
        <p>Experience royalty in every corner. Where exceptional service, world-class amenities, and timeless elegance come together to create unforgettable memories.</p>
        <div class="hero-cta">
          <a href="#" class="btn btn-gold">✦ Book Your Stay</a>
          <a href="#" class="btn btn-outline">Explore Rooms</a>
        </div>
      </div>
      <div class="scroll-hint">↓ SCROLL TO DISCOVER ↓</div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Our Accommodation</span>
        <h2 class="section-title">Luxurious <span>Rooms & Suites</span></h2>
        <p class="section-desc">Each room is a masterpiece of design, blending classic elegance with modern comfort.</p>
      </div>
      <div class="rooms-grid">
        <div class="room-card">
          <div class="room-img"><img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80" alt="Deluxe Room"></div>
          <div class="room-info"><h4>Deluxe Room</h4><div class="desc">Elegant comfort with garden view</div><div class="amenities"><span>📐 350 sq ft</span><span>👥 2 guests</span><span>🛏️ King Bed</span></div><div class="price">₹4,999<small>/night</small></div><button class="book-btn">Book Now</button></div>
        </div>
        <div class="room-card">
          <div class="room-img"><img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80" alt="Premium Suite"></div>
          <div class="room-info"><h4>Premium Suite</h4><div class="desc">Spacious luxury with city views</div><div class="amenities"><span>📐 550 sq ft</span><span>👥 3 guests</span><span>🛏️ King Bed</span></div><div class="price">₹9,999<small>/night</small></div><button class="book-btn">Book Now</button></div>
        </div>
        <div class="room-card">
          <div class="room-img"><img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" alt="Royal Suite"></div>
          <div class="room-info"><h4>Royal Suite</h4><div class="desc">Our finest with panoramic views</div><div class="amenities"><span>📐 850 sq ft</span><span>👥 4 guests</span><span>🛏️ King + Sofa</span></div><div class="price">₹19,999<small>/night</small></div><button class="book-btn">Book Now</button></div>
        </div>
      </div>
    </section>

    <section class="section amenities-section">
      <div class="section-header">
        <span class="section-tag">Experience</span>
        <h2 class="section-title">World-Class <span>Amenities</span></h2>
        <p class="section-desc">Every detail crafted for your comfort and pleasure.</p>
      </div>
      <div class="amenities-grid">
        <div class="amenity-card"><div class="amenity-icon">🏊</div><h4>Infinity Pool</h4><p>Temperature-controlled rooftop pool</p></div>
        <div class="amenity-card"><div class="amenity-icon">💆</div><h4>Spa & Wellness</h4><p>Full-service spa and yoga center</p></div>
        <div class="amenity-card"><div class="amenity-icon">🍽️</div><h4>Fine Dining</h4><p>Multi-cuisine restaurant & bar</p></div>
        <div class="amenity-card"><div class="amenity-icon">🏋️</div><h4>Fitness Center</h4><p>24/7 gym with modern equipment</p></div>
        <div class="amenity-card"><div class="amenity-icon">🚗</div><h4>Valet Parking</h4><p>Complimentary valet & parking</p></div>
        <div class="amenity-card"><div class="amenity-icon">📶</div><h4>High-Speed Wi-Fi</h4><p>Complimentary throughout the hotel</p></div>
        <div class="amenity-card"><div class="amenity-icon">🎉</div><h4>Event Spaces</h4><p>Grand ballroom & meeting rooms</p></div>
        <div class="amenity-card"><div class="amenity-icon">🚐</div><h4>Airport Transfer</h4><p>Luxury pickup and drop services</p></div>
      </div>
    </section>

    <section class="experience-section">
      <div class="experience-inner">
        <div class="experience-img"><img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80" alt="Experience"></div>
        <div class="experience-content">
          <span class="section-tag">Our Story</span>
          <h3>A Legacy of <span>Exceptional Hospitality</span></h3>
          <p>Since 1985, The Grand Palace has been the destination of choice for discerning travelers, celebrities, and dignitaries from across the world.</p>
          <p>Nestled in the heart of Mumbai, our heritage property combines timeless architecture with modern luxury, creating a sanctuary where every guest feels like royalty.</p>
          <p>Every corner, every detail, every service is crafted to exceed expectations and create memories that last a lifetime.</p>
          <div class="signature">— Management, The Grand Palace</div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="testimonial-inner">
        <div class="section-header">
          <span class="section-tag">Guest Stories</span>
          <h2 class="section-title">What Our <span>Guests Say</span></h2>
          <p class="section-desc">Testimonials from guests who've experienced the magic.</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"An absolutely magical experience. The service is impeccable, the rooms are stunning, and the attention to detail is extraordinary. This is luxury at its finest."</p><div class="author"><div class="av">RK</div><div><h5>Rajesh Kapoor</h5><p>Business Traveler</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"We celebrated our anniversary here and it was perfect. The staff went above and beyond to make it special. The Royal Suite is worth every rupee!"</p><div class="author"><div class="av">SM</div><div><h5>Sunita Mehta</h5><p>Anniversary Stay</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The Grand Palace sets the standard for luxury hospitality. I've traveled the world and stayed at many five-star hotels, but this one is truly exceptional."</p><div class="author"><div class="av">AP</div><div><h5>Arjun Patel</h5><p>International Guest</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Reserve Your <span>Royal Stay</span></h3>
          <p>Contact us to book your suite or for any special requests.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call Us</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Location</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>24/7 Concierge</h5><p>Available round the clock</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Booking request sent!');">
          <h4>Book Your Stay</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Room Type</label><select required><option>-- Select --</option><option>Deluxe Room</option><option>Premium Suite</option><option>Royal Suite</option></select></div>
          <div class="form-group"><label>Check-in Date</label><input type="date" required></div>
          <div class="form-group"><label>Special Requests</label><textarea placeholder="Any special requests?"></textarea></div>
          <button type="submit" class="btn btn-gold">✦ Book Now</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>The Grand Palace</h4><p>Where luxury meets timeless elegance. Creating unforgettable memories since 1985.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Rooms</a></li><li><a href="#">Amenities</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Rooms</h4><ul><li><a href="#">Deluxe</a></li><li><a href="#">Premium Suite</a></li><li><a href="#">Royal Suite</a></li><li><a href="#">Special Offers</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra West, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 The Grand Palace. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== HOTEL 2: RESTAURANT MENU ==========
  "hotel2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#1a0f0a;color:#f5e6d3;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(26,15,10,0.96);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(12px);border-bottom:1px solid rgba(220,38,38,0.3);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#dc2626,#f59e0b);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 0 20px rgba(220,38,38,0.5);}
      .nav .logo-text h1{font-size:22px;background:linear-gradient(90deg,#dc2626,#f59e0b);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin:0;letter-spacing:2px;}
      .nav .logo-text p{font-size:11px;color:#c8a896;margin:0;letter-spacing:2px;text-transform:uppercase;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#f5e6d3;font-size:14px;transition:color 0.3s;}
      .nav nav a:hover{color:#f59e0b;}
      .nav .cta-btn{padding:12px 24px;background:linear-gradient(135deg,#dc2626,#f59e0b);color:#fff;border-radius:30px;font-weight:700;font-size:13px;transition:all 0.3s;box-shadow:0 0 20px rgba(220,38,38,0.4);}
      .nav .cta-btn:hover{transform:translateY(-3px);box-shadow:0 0 40px rgba(220,38,38,0.8);}
      .hero{position:relative;padding:110px 40px 90px;text-align:center;background:linear-gradient(135deg,#1a0f0a,#2d1810,#1a0f0a);overflow:hidden;}
      .hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80') center/cover;opacity:0.2;}
      .hero::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,transparent 30%,rgba(26,15,10,0.8) 80%);}
      .hero-content{position:relative;max-width:900px;margin:0 auto;z-index:1;}
      .hero-badge{display:inline-block;padding:8px 22px;border:1px solid rgba(245,158,11,0.5);border-radius:30px;color:#f59e0b;font-size:12px;letter-spacing:4px;text-transform:uppercase;margin-bottom:26px;background:rgba(245,158,11,0.08);}
      .hero h1{font-size:clamp(40px,6.5vw,72px);line-height:1.1;margin-bottom:24px;background:linear-gradient(90deg,#dc2626,#f59e0b,#dc2626);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shine 4s linear infinite;letter-spacing:3px;}
      @keyframes shine{to{background-position:200% center;}}
      .hero p{font-size:18px;color:#c8a896;max-width:640px;margin:0 auto 40px;font-style:italic;}
      .hero-cta{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:30px;font-weight:700;font-size:15px;border:none;cursor:pointer;transition:all 0.3s;font-family:inherit;}
      .btn-primary{background:linear-gradient(135deg,#dc2626,#f59e0b);color:#fff;box-shadow:0 0 30px rgba(220,38,38,0.5);}
      .btn-primary:hover{transform:translateY(-4px);box-shadow:0 0 50px rgba(220,38,38,0.9);}
      .btn-outline{border:2px solid #f59e0b;color:#f59e0b;background:transparent;}
      .btn-outline:hover{background:#f59e0b;color:#1a0f0a;transform:translateY(-4px);}
      .hero-features{display:flex;gap:30px;justify-content:center;flex-wrap:wrap;margin-top:50px;}
      .hero-feature{display:flex;align-items:center;gap:8px;font-size:14px;color:#c8a896;}
      .hero-feature::before{content:'✓';color:#22c55e;font-weight:bold;font-size:16px;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#f59e0b;font-size:13px;letter-spacing:4px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-size:clamp(30px,4.5vw,48px);color:#fff;margin-bottom:18px;line-height:1.2;}
      .section-title span{color:#f59e0b;font-style:italic;}
      .section-desc{font-size:16px;color:#c8a896;max-width:640px;margin-bottom:50px;font-style:italic;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .menu-section{background:linear-gradient(180deg,transparent,rgba(220,38,38,0.05),transparent);}
      .menu-tabs{display:flex;justify-content:center;gap:12px;margin-bottom:50px;flex-wrap:wrap;}
      .menu-tab{padding:12px 28px;background:rgba(220,38,38,0.1);border:1px solid rgba(220,38,38,0.3);color:#c8a896;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.3s;border-radius:30px;font-family:inherit;letter-spacing:1px;}
      .menu-tab:hover{background:rgba(220,38,38,0.2);color:#fff;}
      .menu-tab.active{background:linear-gradient(135deg,#dc2626,#f59e0b);color:#fff;border-color:transparent;box-shadow:0 0 25px rgba(220,38,38,0.5);}
      .menu-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;}
      .menu-item{background:rgba(220,38,38,0.05);border:1px solid rgba(220,38,38,0.2);border-radius:12px;padding:26px;transition:all 0.4s;display:flex;gap:20px;align-items:flex-start;}
      .menu-item:hover{background:rgba(220,38,38,0.12);border-color:#dc2626;transform:translateY(-4px);box-shadow:0 15px 40px rgba(220,38,38,0.2);}
      .menu-item .item-icon{width:70px;height:70px;background:linear-gradient(135deg,#dc2626,#f59e0b);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;transition:transform 0.4s;}
      .menu-item:hover .item-icon{transform:rotate(-8deg) scale(1.08);}
      .menu-item .item-content{flex:1;}
      .menu-item .item-content h4{font-size:19px;color:#fff;margin-bottom:6px;font-weight:normal;letter-spacing:1px;}
      .menu-item .item-content p{font-size:13px;color:#c8a896;line-height:1.6;margin-bottom:10px;font-style:italic;}
      .menu-item .item-content .meta{display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid rgba(220,38,38,0.2);}
      .menu-item .item-content .price{font-size:20px;color:#f59e0b;font-weight:bold;font-family:'Georgia',serif;}
      .menu-item .item-content .veg-badge{font-size:11px;padding:3px 10px;border-radius:10px;font-weight:600;letter-spacing:1px;}
      .menu-item .item-content .veg-badge.veg{background:rgba(34,197,94,0.2);color:#22c55e;border:1px solid rgba(34,197,94,0.5);}
      .menu-item .item-content .veg-badge.nonveg{background:rgba(220,38,38,0.2);color:#dc2626;border:1px solid rgba(220,38,38,0.5);}
      .specials-section{background:linear-gradient(135deg,#2d1810,#1a0f0a);}
      .specials-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .specials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:50px;}
      .special-card{background:rgba(220,38,38,0.08);border:1px solid rgba(220,38,38,0.3);border-radius:16px;padding:36px 28px;text-align:center;transition:all 0.4s;position:relative;overflow:hidden;}
      .special-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#dc2626,#f59e0b);}
      .special-card:hover{transform:translateY(-10px);border-color:#f59e0b;box-shadow:0 25px 60px rgba(220,38,38,0.3);}
      .special-icon{font-size:56px;margin-bottom:16px;display:block;transition:transform 0.4s;}
      .special-card:hover .special-icon{transform:scale(1.15) rotate(-8deg);}
      .special-card h4{font-size:20px;color:#fff;margin-bottom:10px;font-weight:normal;}
      .special-card p{font-size:14px;color:#c8a896;line-height:1.7;font-style:italic;}
      .special-card .badge{display:inline-block;margin-top:16px;padding:5px 16px;background:linear-gradient(135deg,#dc2626,#f59e0b);border-radius:20px;color:#fff;font-size:12px;font-weight:700;letter-spacing:1px;}
      .chef-section{background:linear-gradient(135deg,#1a0f0a,#2d1810);}
      .chef-inner{max-width:1200px;margin:0 auto;padding:90px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .chef-img{border-radius:16px;overflow:hidden;box-shadow:0 25px 60px rgba(220,38,38,0.3);}
      .chef-img img{width:100%;height:500px;object-fit:cover;}
      .chef-content h3{font-size:34px;color:#fff;margin-bottom:20px;line-height:1.3;}
      .chef-content h3 span{color:#f59e0b;font-style:italic;}
      .chef-content p{font-size:16px;color:#c8a896;line-height:1.9;margin-bottom:18px;font-style:italic;}
      .chef-content .signature{font-size:22px;color:#f59e0b;font-style:italic;margin-top:24px;letter-spacing:2px;}
      .testimonial-section{background:linear-gradient(135deg,#0f0805,#1a0f0a);}
      .testimonial-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:50px;}
      .testimonial-card{background:rgba(220,38,38,0.05);padding:32px 26px;border-radius:16px;border:1px solid rgba(220,38,38,0.2);transition:all 0.4s;}
      .testimonial-card:hover{transform:translateY(-8px);border-color:#f59e0b;box-shadow:0 20px 50px rgba(220,38,38,0.2);}
      .testimonial-card .stars{color:#f59e0b;font-size:16px;margin-bottom:14px;letter-spacing:2px;}
      .testimonial-card .quote{font-size:14px;color:#c8a896;line-height:1.8;margin-bottom:20px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,#dc2626,#f59e0b);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:16px;}
      .testimonial-card .author h5{font-size:14px;color:#fff;margin-bottom:3px;}
      .testimonial-card .author p{font-size:12px;color:#f59e0b;}
      .contact-section{background:linear-gradient(135deg,#1a0f0a,#0f0805);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:32px;color:#fff;margin-bottom:20px;}
      .contact-info h3 span{color:#f59e0b;font-style:italic;}
      .contact-info > p{color:#c8a896;margin-bottom:30px;font-style:italic;}
      .contact-item{display:flex;gap:16px;margin-bottom:22px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:rgba(220,38,38,0.15);border:1px solid rgba(220,38,38,0.4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;color:#f59e0b;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .ic{background:#dc2626;color:#fff;transform:rotate(-5deg);}
      .contact-item h5{font-size:12px;color:#f59e0b;margin-bottom:4px;text-transform:uppercase;letter-spacing:2px;font-weight:700;}
      .contact-item p{font-size:15px;color:#fff;}
      .contact-form{background:rgba(220,38,38,0.05);padding:40px;border-radius:16px;border:1px solid rgba(220,38,38,0.3);}
      .contact-form h4{font-size:22px;color:#f59e0b;margin-bottom:22px;font-weight:normal;letter-spacing:1px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#c8a896;font-size:13px;margin-bottom:8px;font-weight:500;letter-spacing:1px;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:rgba(0,0,0,0.4);border:1px solid rgba(220,38,38,0.3);border-radius:10px;color:#fff;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#f59e0b;background:rgba(0,0,0,0.6);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-primary{width:100%;justify-content:center;}
      .footer{background:#050302;color:#8a7a60;padding:60px 40px 30px;border-top:1px solid rgba(220,38,38,0.15);}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#f59e0b;font-size:17px;margin-bottom:18px;font-weight:normal;letter-spacing:1px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;font-style:italic;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#8a7a60;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#f59e0b;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(220,38,38,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:70px 20px;}
        .section,.specials-inner,.chef-inner,.testimonial-inner,.contact-inner{padding:60px 20px;}
        .menu-grid,.specials-grid,.testimonial-grid,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .chef-inner,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .chef-img img{height:340px;}
      }
      @media(max-width:600px){
        .menu-grid,.specials-grid,.testimonial-grid,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
        .menu-tabs{gap:8px;}
        .menu-tab{padding:10px 18px;font-size:12px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo"><div class="logo-icon">🍽️</div><div class="logo-text"><h1>SPICE GARDEN</h1><p>Authentic Indian Cuisine</p></div></div>
      <nav><a href="#">Home</a><a href="#">Menu</a><a href="#">Chef</a><a href="#">Testimonials</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">📅 Book Table</a>
    </header>

    <section class="hero">
      <div class="hero-content">
        <span class="hero-badge">✦ AUTHENTIC INDIAN FLAVORS ✦</span>
        <h1>SPICE GARDEN</h1>
        <p>Experience the rich taste of traditional Indian recipes crafted with love, served with warmth, in an ambiance of timeless elegance.</p>
        <div class="hero-cta">
          <a href="#" class="btn btn-primary">🍴 View Menu</a>
          <a href="#" class="btn btn-outline">📅 Book Table</a>
        </div>
        <div class="hero-features">
          <div class="hero-feature">Authentic Recipes</div>
          <div class="hero-feature">Fresh Ingredients</div>
          <div class="hero-feature">Master Chefs</div>
        </div>
      </div>
    </section>

    <section class="section menu-section">
      <div class="section-header">
        <span class="section-tag">Explore Our Menu</span>
        <h2 class="section-title">Signature <span>Dishes</span></h2>
        <p class="section-desc">A curated selection of our most beloved dishes, crafted with authentic recipes.</p>
      </div>
      <div class="menu-tabs">
        <button class="menu-tab active">All Items</button>
        <button class="menu-tab">Starters</button>
        <button class="menu-tab">Main Course</button>
        <button class="menu-tab">Desserts</button>
        <button class="menu-tab">Beverages</button>
      </div>
      <div class="menu-grid">
        <div class="menu-item"><div class="item-icon">🍗</div><div class="item-content"><h4>Butter Chicken</h4><p>Tender chicken in rich creamy tomato gravy</p><div class="meta"><div class="price">₹320</div><span class="veg-badge nonveg">NON-VEG</span></div></div></div>
        <div class="menu-item"><div class="item-icon">🥘</div><div class="item-content"><h4>Paneer Tikka</h4><p>Grilled cottage cheese with aromatic spices</p><div class="meta"><div class="price">₹280</div><span class="veg-badge veg">VEG</span></div></div></div>
        <div class="menu-item"><div class="item-icon">🍚</div><div class="item-content"><h4>Hyderabadi Biryani</h4><p>Fragrant basmati rice with tender meat & spices</p><div class="meta"><div class="price">₹350</div><span class="veg-badge nonveg">NON-VEG</span></div></div></div>
        <div class="menu-item"><div class="item-icon">🥞</div><div class="item-content"><h4>Masala Dosa</h4><p>Crispy dosa with spiced potato filling</p><div class="meta"><div class="price">₹180</div><span class="veg-badge veg">VEG</span></div></div></div>
        <div class="menu-item"><div class="item-icon">🍛</div><div class="item-content"><h4>Dal Makhani</h4><p>Slow-cooked black lentils in creamy gravy</p><div class="meta"><div class="price">₹240</div><span class="veg-badge veg">VEG</span></div></div></div>
        <div class="menu-item"><div class="item-icon">🍤</div><div class="item-content"><h4>Prawn Curry</h4><p>Fresh prawns in aromatic coconut curry</p><div class="meta"><div class="price">₹420</div><span class="veg-badge nonveg">NON-VEG</span></div></div></div>
        <div class="menu-item"><div class="item-icon">🍨</div><div class="item-content"><h4>Gulab Jamun</h4><p>Soft milk dumplings in rose-flavored syrup</p><div class="meta"><div class="price">₹120</div><span class="veg-badge veg">VEG</span></div></div></div>
        <div class="menu-item"><div class="item-icon">🥤</div><div class="item-content"><h4>Mango Lassi</h4><p>Refreshing yogurt drink with fresh mango</p><div class="meta"><div class="price">₹100</div><span class="veg-badge veg">VEG</span></div></div></div>
      </div>
    </section>

    <section class="specials-section">
      <div class="specials-inner">
        <div class="section-header">
          <span class="section-tag">Chef's Specials</span>
          <h2 class="section-title">Featured <span>Creations</span></h2>
          <p class="section-desc">Exclusive dishes crafted by our master chefs.</p>
        </div>
        <div class="specials-grid">
          <div class="special-card"><div class="special-icon">🍛</div><h4>Tandoori Platter</h4><p>A royal assortment of tandoori specialties — chicken, paneer, seekh kebab & more.</p><div class="badge">₹899</div></div>
          <div class="special-card"><div class="special-icon">🦐</div><h4>Seafood Special</h4><p>Chef's selection of fresh seafood — prawns, fish & crab in signature spice blends.</p><div class="badge">₹1,299</div></div>
          <div class="special-card"><div class="special-icon">🍛</div><h4>Royal Thali</h4><p>A complete feast with 12+ items — truly fit for royalty. Perfect for special occasions.</p><div class="badge">₹599</div></div>
        </div>
      </div>
    </section>

    <section class="chef-section">
      <div class="chef-inner">
        <div class="chef-img"><img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" alt="Chef"></div>
        <div class="chef-content">
          <span class="section-tag">Meet Our Chef</span>
          <h3>Master Chef <span>Rajesh Kumar</span></h3>
          <p>With over 25 years of culinary experience, Chef Rajesh brings the authentic flavors of India to your plate. Trained in traditional cooking techniques, he combines time-honored recipes with modern presentation.</p>
          <p>Every dish at Spice Garden is personally supervised by Chef Rajesh, ensuring the same extraordinary taste in every bite. His philosophy — cook with love, serve with pride.</p>
          <div class="signature">— Chef Rajesh Kumar</div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="testimonial-inner">
        <div class="section-header">
          <span class="section-tag">Guest Reviews</span>
          <h2 class="section-title">What Our <span>Guests Say</span></h2>
          <p class="section-desc">Real reviews from our valued guests.</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The butter chicken here is the best I've ever had. The ambiance is perfect for family dinners. Highly recommend!"</p><div class="author"><div class="av">RK</div><div><h5>Rajesh Kumar</h5><p>Regular Guest</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Spice Garden has the most authentic Indian food in Mumbai. The service is excellent and prices are reasonable."</p><div class="author"><div class="av">SM</div><div><h5>Sunita Mehta</h5><p>Food Critic</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Celebrated our anniversary here and it was perfect. The special thali is worth every rupee. Will definitely come back!"</p><div class="author"><div class="av">AP</div><div><h5>Arjun Patel</h5><p>Guest</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Book Your <span>Table</span></h3>
          <p>Reserve your table for an unforgettable dining experience.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Restaurant</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Hours</h5><p>Lunch: 12PM–3PM | Dinner: 7PM–11PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Table booked!');">
          <h4>Reserve Your Table</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Number of Guests</label><select required><option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5+ Guests</option></select></div>
          <div class="form-group"><label>Date & Time</label><input type="datetime-local" required></div>
          <div class="form-group"><label>Special Requests</label><textarea placeholder="Any special requests?"></textarea></div>
          <button type="submit" class="btn btn-primary">📅 Book Table</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>🍽️ Spice Garden</h4><p>Authentic Indian cuisine crafted with love. Serving Mumbai's finest traditional flavors since 2005.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Menu</a></li><li><a href="#">Chef</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Menu</h4><ul><li><a href="#">Starters</a></li><li><a href="#">Main Course</a></li><li><a href="#">Desserts</a></li><li><a href="#">Beverages</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Spice Garden. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== HOTEL 3: CAFE ==========
  "hotel3": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f5efe6;color:#3d2b1f;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(245,239,230,0.98);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(10px);box-shadow:0 2px 20px rgba(139,69,19,0.12);}
      .nav .logo{display:flex;align-items:center;gap:10px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#8b4513,#d4a574);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:26px;box-shadow:0 4px 15px rgba(139,69,19,0.3);}
      .nav .logo-text h1{font-size:20px;color:#3d2b1f;margin:0;}
      .nav .logo-text p{font-size:12px;color:#8b4513;margin:0;font-weight:600;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#3d2b1f;font-size:14px;font-weight:500;transition:color 0.3s;}
      .nav nav a:hover{color:#8b4513;}
      .nav .cta-btn{padding:12px 24px;background:linear-gradient(135deg,#8b4513,#d4a574);color:#fff;border-radius:30px;font-weight:600;font-size:14px;transition:all 0.3s;box-shadow:0 4px 15px rgba(139,69,19,0.35);}
      .nav .cta-btn:hover{transform:translateY(-3px);box-shadow:0 8px 25px rgba(139,69,19,0.5);}
      .hero{position:relative;padding:110px 40px;text-align:center;background:linear-gradient(135deg,#d4a574,#8b4513);color:#fff;overflow:hidden;}
      .hero::before{content:'☕';position:absolute;top:15%;left:8%;font-size:100px;opacity:0.15;animation:float 4s ease-in-out infinite;}
      .hero::after{content:'🥐';position:absolute;bottom:15%;right:8%;font-size:100px;opacity:0.15;animation:float 5s ease-in-out infinite reverse;}
      @keyframes float{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-20px) rotate(10deg);}}
      .hero-content{position:relative;max-width:900px;margin:0 auto;z-index:1;}
      .hero-badge{display:inline-block;padding:8px 22px;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.4);border-radius:30px;color:#fff;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:26px;font-weight:600;}
      .hero h1{font-size:clamp(38px,6.5vw,72px);line-height:1.1;margin-bottom:24px;color:#fff;text-shadow:0 4px 20px rgba(0,0,0,0.3);font-weight:800;}
      .hero h1 span{font-style:italic;font-weight:400;}
      .hero p{font-size:18px;color:#f5efe6;max-width:640px;margin:0 auto 40px;}
      .hero-cta{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 36px;border-radius:30px;font-weight:700;font-size:15px;border:none;cursor:pointer;transition:all 0.3s;}
      .btn-white{background:#fff;color:#8b4513;box-shadow:0 8px 20px rgba(0,0,0,0.15);}
      .btn-white:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(0,0,0,0.25);}
      .btn-outline{background:transparent;color:#fff;border:2px solid #fff;}
      .btn-outline:hover{background:#fff;color:#8b4513;transform:translateY(-4px);}
      .hero-features{display:flex;gap:30px;justify-content:center;flex-wrap:wrap;margin-top:50px;}
      .hero-feature{display:flex;align-items:center;gap:8px;font-size:14px;color:#fff;}
      .hero-feature::before{content:'✓';font-size:16px;font-weight:bold;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#8b4513;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;font-weight:700;}
      .section-title{font-size:clamp(30px,4.5vw,46px);color:#3d2b1f;margin-bottom:18px;line-height:1.2;font-weight:800;}
      .section-title span{color:#8b4513;font-style:italic;font-weight:400;}
      .section-desc{font-size:16px;color:#6b5d4f;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .menu-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
      .menu-item{background:#fff;padding:32px 24px;border-radius:20px;text-align:center;box-shadow:0 4px 20px rgba(139,69,19,0.08);transition:all 0.4s;border-top:4px solid transparent;}
      .menu-item:hover{transform:translateY(-8px);border-top-color:#8b4513;box-shadow:0 20px 45px rgba(139,69,19,0.2);}
      .menu-item .emoji{font-size:60px;margin-bottom:14px;display:block;transition:transform 0.4s;}
      .menu-item:hover .emoji{transform:scale(1.15) rotate(-8deg);}
      .menu-item h4{font-size:18px;color:#3d2b1f;margin-bottom:6px;}
      .menu-item .desc{font-size:13px;color:#6b5d4f;margin-bottom:14px;line-height:1.6;}
      .menu-item .price{font-size:22px;color:#8b4513;font-weight:800;margin-bottom:14px;}
      .menu-item .order-btn{padding:8px 22px;background:#8b4513;color:#fff;border:none;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.3s;}
      .menu-item .order-btn:hover{background:#d4a574;transform:scale(1.05);}
      .about-section{background:linear-gradient(135deg,#f5efe6,#ebd9c2);}
      .about-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(139,69,19,0.25);position:relative;}
      .about-img img{width:100%;height:500px;object-fit:cover;}
      .about-img::before{content:'☕';position:absolute;top:20px;right:20px;width:70px;height:70px;background:#8b4513;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:32px;box-shadow:0 8px 25px rgba(139,69,19,0.4);}
      .about-content h3{font-size:32px;color:#3d2b1f;margin-bottom:20px;line-height:1.3;font-weight:800;}
      .about-content h3 span{color:#8b4513;font-style:italic;font-weight:400;}
      .about-content p{font-size:16px;color:#5d4037;line-height:1.8;margin-bottom:18px;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:10px;background:#fff;padding:14px 18px;border-radius:10px;font-size:14px;font-weight:600;color:#3d2b1f;box-shadow:0 2px 10px rgba(139,69,19,0.08);}
      .about-feat::before{content:'✓';width:24px;height:24px;background:#8b4513;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;flex-shrink:0;}
      .features-section{background:linear-gradient(135deg,#ebd9c2,#f5efe6);}
      .features-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .features-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
      .feature-card{background:#fff;padding:32px 24px;border-radius:16px;text-align:center;box-shadow:0 4px 20px rgba(139,69,19,0.08);transition:all 0.4s;}
      .feature-card:hover{transform:translateY(-8px);box-shadow:0 15px 40px rgba(139,69,19,0.15);}
      .feature-card .ic{width:64px;height:64px;margin:0 auto 18px;background:linear-gradient(135deg,#ebd9c2,#d4a574);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:30px;transition:transform 0.4s;}
      .feature-card:hover .ic{transform:scale(1.1) rotate(-8deg);}
      .feature-card h4{font-size:17px;color:#3d2b1f;margin-bottom:10px;}
      .feature-card p{font-size:13px;color:#6b5d4f;line-height:1.7;}
      .testimonial-section{background:linear-gradient(135deg,#3d2b1f,#5d4037);color:#fff;}
      .testimonial-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:50px;}
      .testimonial-card{background:rgba(255,255,255,0.05);padding:32px 26px;border-radius:16px;border:1px solid rgba(212,165,116,0.3);transition:all 0.4s;}
      .testimonial-card:hover{transform:translateY(-8px);background:rgba(212,165,116,0.1);}
      .testimonial-card .stars{color:#d4a574;font-size:18px;margin-bottom:14px;letter-spacing:2px;}
      .testimonial-card .quote{font-size:14.5px;color:#ebd9c2;line-height:1.8;margin-bottom:22px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#8b4513,#d4a574);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:18px;}
      .testimonial-card .author h5{font-size:15px;color:#fff;margin-bottom:4px;}
      .testimonial-card .author p{font-size:12px;color:#d4a574;}
      .contact-section{background:linear-gradient(135deg,#f5efe6,#ebd9c2);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:32px;color:#3d2b1f;margin-bottom:20px;font-weight:800;}
      .contact-info h3 span{color:#8b4513;font-style:italic;font-weight:400;}
      .contact-info > p{color:#6b5d4f;margin-bottom:30px;}
      .contact-item{display:flex;gap:16px;margin-bottom:22px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:#fff;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 15px rgba(139,69,19,0.15);transition:all 0.3s;}
      .contact-item:hover .ic{background:#8b4513;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#8b4513;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:700;}
      .contact-item p{font-size:15px;color:#3d2b1f;font-weight:500;}
      .contact-form{background:#fff;padding:40px;border-radius:20px;box-shadow:0 10px 40px rgba(139,69,19,0.15);}
      .contact-form h4{font-size:22px;color:#3d2b1f;margin-bottom:22px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#6b5d4f;font-size:13px;margin-bottom:8px;font-weight:600;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:#f5efe6;border:1px solid #d4a574;border-radius:10px;color:#3d2b1f;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#8b4513;background:#fff;}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn{width:100%;justify-content:center;background:linear-gradient(135deg,#8b4513,#d4a574);color:#fff;}
      .contact-form .btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(139,69,19,0.4);}
      .footer{background:#1a0f08;color:#b8a888;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#d4a574;font-size:17px;margin-bottom:18px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#b8a888;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#d4a574;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(212,165,116,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:70px 20px;}
        .section,.about-inner,.features-inner,.testimonial-inner,.contact-inner{padding:60px 20px;}
        .menu-grid,.features-grid,.testimonial-grid,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .about-inner,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .about-img img{height:340px;}
      }
      @media(max-width:600px){
        .menu-grid,.features-grid,.testimonial-grid,.about-features,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo"><div class="logo-icon">☕</div><div class="logo-text"><h1>Cozy Brew Cafe</h1><p>Your Daily Cup of Joy</p></div></div>
      <nav><a href="#">Home</a><a href="#">Menu</a><a href="#">About</a><a href="#">Testimonials</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">🛒 Order Now</a>
    </header>

    <section class="hero">
      <div class="hero-content">
        <span class="hero-badge">☕ HANDCRAFTED WITH LOVE ☕</span>
        <h1>Your Daily <span>Cup of Joy</span></h1>
        <p>Handcrafted coffee, fresh pastries & cozy vibes. Come sit, sip, and relax in our warm, welcoming space.</p>
        <div class="hero-cta">
          <a href="#" class="btn btn-white">☕ Order Now</a>
          <a href="#" class="btn btn-outline">📞 Call to Order</a>
        </div>
        <div class="hero-features">
          <div class="hero-feature">Freshly Brewed</div>
          <div class="hero-feature">100% Arabica</div>
          <div class="hero-feature">Cozy Ambiance</div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Our Menu</span>
        <h2 class="section-title">Popular <span>Brews & Bites</span></h2>
        <p class="section-desc">Handcrafted with premium ingredients, served with a smile.</p>
      </div>
      <div class="menu-grid">
        <div class="menu-item"><span class="emoji">☕</span><h4>Espresso</h4><div class="desc">Rich, bold shot of pure coffee</div><div class="price">₹120</div><button class="order-btn">Order</button></div>
        <div class="menu-item"><span class="emoji">🥐</span><h4>Butter Croissant</h4><div class="desc">Flaky, buttery perfection</div><div class="price">₹80</div><button class="order-btn">Order</button></div>
        <div class="menu-item"><span class="emoji">🍰</span><h4>Chocolate Cake</h4><div class="desc">Rich, moist chocolate slice</div><div class="price">₹150</div><button class="order-btn">Order</button></div>
        <div class="menu-item"><span class="emoji">🥤</span><h4>Cold Coffee</h4><div class="desc">Chilled coffee with milk</div><div class="price">₹140</div><button class="order-btn">Order</button></div>
        <div class="menu-item"><span class="emoji">🍵</span><h4>Green Tea</h4><div class="desc">Refreshing organic green tea</div><div class="price">₹80</div><button class="order-btn">Order</button></div>
        <div class="menu-item"><span class="emoji">🥪</span><h4>Club Sandwich</h4><div class="desc">Classic triple-decker sandwich</div><div class="price">₹180</div><button class="order-btn">Order</button></div>
        <div class="menu-item"><span class="emoji">🧁</span><h4>Cupcake</h4><div class="desc">Fresh vanilla or chocolate</div><div class="price">₹70</div><button class="order-btn">Order</button></div>
        <div class="menu-item"><span class="emoji">🍪</span><h4>Choco Chip Cookie</h4><div class="desc">Warm, freshly baked cookie</div><div class="price">₹50</div><button class="order-btn">Order</button></div>
      </div>
    </section>

    <section class="about-section">
      <div class="about-inner">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80" alt="Cafe"></div>
        <div class="about-content">
          <span class="section-tag">Our Story</span>
          <h3>Where Every Cup <span>Tells a Story</span></h3>
          <p>Cozy Brew Cafe was born from a simple dream — to create a warm, welcoming space where people can enjoy exceptional coffee, delicious food, and meaningful conversations.</p>
          <p>Since 2018, we've been serving handcrafted beverages made from the finest ingredients. Every cup is prepared with care, every pastry baked fresh daily.</p>
          <div class="about-features">
            <div class="about-feat">Premium Beans</div>
            <div class="about-feat">Fresh Bakes</div>
            <div class="about-feat">Cozy Seating</div>
            <div class="about-feat">Free Wi-Fi</div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="features-inner">
        <div class="section-header">
          <span class="section-tag">Why Choose Us</span>
          <h2 class="section-title">The <span>Cozy Brew</span> Experience</h2>
          <p class="section-desc">More than just coffee — a complete experience.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card"><div class="ic">☕</div><h4>Premium Coffee</h4><p>Single-origin Arabica beans roasted fresh every week.</p></div>
          <div class="feature-card"><div class="ic">🥐</div><h4>Fresh Bakes</h4><p>Pastries baked fresh every morning in our kitchen.</p></div>
          <div class="feature-card"><div class="ic">🛋️</div><h4>Cozy Space</h4><p>Comfortable seating perfect for work, dates, or solo time.</p></div>
          <div class="feature-card"><div class="ic">📶</div><h4>Free Wi-Fi</h4><p>High-speed internet — your perfect remote workspace.</p></div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="testimonial-inner">
        <div class="section-header">
          <span class="section-tag" style="color:#d4a574;">Testimonials</span>
          <h2 class="section-title" style="color:#fff;">What Our <span style="color:#d4a574;">Customers Say</span></h2>
          <p class="section-desc" style="color:#ebd9c2;">Real experiences from our beloved coffee community.</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Cozy Brew is my favorite coffee spot in Mumbai! The espresso is perfect, the ambiance is warm, and the staff is wonderful."</p><div class="author"><div class="av">RK</div><div><h5>Rajesh Kumar</h5><p>Regular Customer</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The chocolate cake here is divine! Paired with their cold coffee, it's pure bliss. I come here every weekend."</p><div class="author"><div class="av">SM</div><div><h5>Sunita Mehta</h5><p>Coffee Lover</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"My go-to place for remote work. Great coffee, fast Wi-Fi, and the coziest vibe. What more could you want?"</p><div class="author"><div class="av">AP</div><div><h5>Arjun Patel</h5><p>Freelancer</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Visit Us <span>Today</span></h3>
          <p>Come enjoy the cozy vibes and exceptional coffee at our cafe.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Cafe Address</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Hours</h5><p>Everyday: 8AM – 11PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Order received!');">
          <h4>Place Your Order</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Your Order</label><textarea placeholder="What would you like to order?" required></textarea></div>
          <button type="submit" class="btn">🛒 Place Order</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>☕ Cozy Brew Cafe</h4><p>Where every cup tells a story. Handcrafted beverages, fresh bakes, and cozy ambiance.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Menu</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Menu</h4><ul><li><a href="#">Coffee</a></li><li><a href="#">Tea</a></li><li><a href="#">Pastries</a></li><li><a href="#">Sandwiches</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Cozy Brew Cafe. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== HOTEL 4: FINE DINE ==========
  "hotel4": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Georgia',serif;}
      body{background:#0f0f0f;color:#e8e8e8;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .nav{position:sticky;top:0;background:rgba(15,15,15,0.96);padding:20px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(12px);border-bottom:1px solid rgba(220,38,38,0.3);}
      .nav .logo{display:flex;align-items:center;gap:14px;}
      .nav .logo-icon{width:52px;height:52px;background:linear-gradient(135deg,#dc2626,#a01010);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 0 25px rgba(220,38,38,0.5);}
      .nav .logo-text h1{font-size:20px;color:#dc2626;margin:0;letter-spacing:4px;font-weight:normal;}
      .nav .logo-text p{font-size:10px;color:#c8c8c8;margin:0;letter-spacing:4px;text-transform:uppercase;}
      .nav nav{display:flex;gap:30px;}
      .nav nav a{color:#e8e8e8;font-size:14px;transition:color 0.3s;letter-spacing:1px;}
      .nav nav a:hover{color:#dc2626;}
      .nav .cta-btn{padding:12px 26px;background:transparent;color:#dc2626;border:2px solid #dc2626;border-radius:30px;font-weight:700;font-size:13px;letter-spacing:2px;transition:all 0.3s;text-transform:uppercase;}
      .nav .cta-btn:hover{background:#dc2626;color:#fff;transform:translateY(-3px);box-shadow:0 10px 30px rgba(220,38,38,0.5);}
      .hero{position:relative;height:90vh;min-height:600px;display:flex;align-items:center;justify-content:center;text-align:center;background:linear-gradient(135deg,#0f0f0f,#1a1a1a);overflow:hidden;padding:60px 40px;}
      .hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80') center/cover;opacity:0.2;}
      .hero::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(15,15,15,0.7),rgba(15,15,15,0.95));}
      .hero-content{position:relative;z-index:1;max-width:900px;}
      .hero-badge{display:inline-block;padding:10px 24px;border:1px solid rgba(220,38,38,0.6);color:#dc2626;font-size:12px;letter-spacing:5px;text-transform:uppercase;margin-bottom:30px;background:rgba(220,38,38,0.08);}
      .hero h1{font-size:clamp(44px,7vw,88px);color:#dc2626;margin-bottom:24px;letter-spacing:8px;font-weight:normal;line-height:1.1;text-shadow:0 0 60px rgba(220,38,38,0.5);}
      .hero p{font-size:20px;color:#c8c8c8;max-width:640px;margin:0 auto 40px;font-style:italic;}
      .hero-cta{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;}
      .btn{display:inline-flex;align-items:center;gap:10px;padding:18px 42px;font-weight:600;font-size:14px;letter-spacing:2px;text-transform:uppercase;transition:all 0.4s;cursor:pointer;border:none;font-family:inherit;}
      .btn-red{background:linear-gradient(135deg,#dc2626,#a01010);color:#fff;box-shadow:0 0 30px rgba(220,38,38,0.5);}
      .btn-red:hover{transform:translateY(-4px);box-shadow:0 0 50px rgba(220,38,38,1);}
      .btn-outline{background:transparent;color:#dc2626;border:2px solid #dc2626;}
      .btn-outline:hover{background:#dc2626;color:#fff;transform:translateY(-4px);}
      .section{padding:100px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#dc2626;font-size:12px;letter-spacing:5px;text-transform:uppercase;margin-bottom:16px;font-weight:700;}
      .section-title{font-size:clamp(32px,5vw,52px);color:#fff;margin-bottom:20px;line-height:1.2;font-weight:normal;letter-spacing:2px;}
      .section-title span{color:#dc2626;font-style:italic;}
      .section-desc{font-size:16px;color:#a8a8a8;max-width:640px;margin-bottom:60px;font-style:italic;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .experiences-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;}
      .exp-card{background:linear-gradient(160deg,rgba(220,38,38,0.08),rgba(15,15,15,0.8));border:1px solid rgba(220,38,38,0.3);padding:44px 32px;text-align:center;transition:all 0.5s;position:relative;overflow:hidden;}
      .exp-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#dc2626,#a01010);transform:scaleX(0);transition:transform 0.5s;}
      .exp-card:hover{transform:translateY(-12px);border-color:#dc2626;box-shadow:0 30px 70px rgba(220,38,38,0.3);}
      .exp-card:hover::before{transform:scaleX(1);}
      .exp-icon{font-size:64px;margin-bottom:22px;display:block;transition:transform 0.5s;}
      .exp-card:hover .exp-icon{transform:scale(1.15) rotate(-8deg);}
      .exp-card h4{font-size:24px;color:#dc2626;margin-bottom:14px;font-weight:normal;letter-spacing:2px;}
      .exp-card p{font-size:14px;color:#a8a8a8;line-height:1.8;font-style:italic;}
      .menu-section{background:linear-gradient(180deg,transparent,rgba(220,38,38,0.05),transparent);}
      .menu-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:30px;}
      .menu-item{background:rgba(220,38,38,0.05);border:1px solid rgba(220,38,38,0.2);padding:32px 28px;transition:all 0.4s;position:relative;overflow:hidden;}
      .menu-item::before{content:'';position:absolute;top:0;left:0;width:4px;height:100%;background:linear-gradient(180deg,#dc2626,#a01010);transform:scaleY(0);transform-origin:top;transition:transform 0.4s;}
      .menu-item:hover{background:rgba(220,38,38,0.1);transform:translateX(8px);border-color:#dc2626;}
      .menu-item:hover::before{transform:scaleY(1);}
      .menu-item .item-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;}
      .menu-item .item-header h4{font-size:22px;color:#fff;font-weight:normal;letter-spacing:1px;}
      .menu-item .item-header .price{font-size:24px;color:#dc2626;font-weight:bold;white-space:nowrap;margin-left:20px;}
      .menu-item p{font-size:14px;color:#a8a8a8;line-height:1.7;font-style:italic;}
      .experience-section{background:linear-gradient(135deg,#0f0f0f,#1a1a1a);}
      .experience-inner{max-width:1200px;margin:0 auto;padding:100px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .experience-img{position:relative;overflow:hidden;}
      .experience-img img{width:100%;height:600px;object-fit:cover;filter:brightness(0.9);}
      .experience-img::before{content:'';position:absolute;inset:20px;border:2px solid rgba(220,38,38,0.5);pointer-events:none;}
      .experience-content h3{font-size:38px;color:#fff;margin-bottom:24px;line-height:1.3;font-weight:normal;letter-spacing:1px;}
      .experience-content h3 span{color:#dc2626;font-style:italic;}
      .experience-content p{font-size:16px;color:#a8a8a8;line-height:1.9;margin-bottom:22px;font-style:italic;}
      .experience-content .signature{font-size:20px;color:#dc2626;font-style:italic;margin-top:20px;letter-spacing:2px;}
      .stats-section{background:linear-gradient(135deg,#dc2626,#a01010);color:#fff;padding:70px 40px;}
      .stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center;}
      .stat-item h3{font-size:48px;font-weight:900;margin-bottom:8px;}
      .stat-item p{font-size:13px;opacity:0.9;text-transform:uppercase;letter-spacing:2px;}
      .testimonial-section{background:linear-gradient(135deg,#0a0a0a,#0f0f0f);}
      .testimonial-inner{max-width:1200px;margin:0 auto;padding:100px 40px;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;margin-top:60px;}
      .testimonial-card{background:rgba(220,38,38,0.04);padding:42px 32px;border:1px solid rgba(220,38,38,0.2);transition:all 0.4s;position:relative;}
      .testimonial-card::before{content:'"';position:absolute;top:10px;left:24px;font-size:100px;color:rgba(220,38,38,0.2);font-family:Georgia;line-height:1;}
      .testimonial-card:hover{background:rgba(220,38,38,0.08);transform:translateY(-8px);border-color:#dc2626;}
      .testimonial-card .stars{color:#dc2626;font-size:16px;margin-bottom:18px;position:relative;z-index:1;letter-spacing:3px;}
      .testimonial-card .quote{font-size:15px;color:#c8c8c8;line-height:1.9;margin-bottom:26px;position:relative;z-index:1;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:14px;position:relative;z-index:1;}
      .testimonial-card .author .av{width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#dc2626,#a01010);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:18px;font-family:'Georgia',serif;}
      .testimonial-card .author h5{font-size:15px;color:#fff;margin-bottom:4px;font-weight:normal;letter-spacing:1px;}
      .testimonial-card .author p{font-size:12px;color:#dc2626;letter-spacing:1px;}
      .contact-section{background:#050505;padding:100px 40px;}
      .contact-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;}
      .contact-info h3{font-size:36px;color:#fff;margin-bottom:22px;font-weight:normal;letter-spacing:1px;}
      .contact-info h3 span{color:#dc2626;font-style:italic;}
      .contact-info > p{color:#a8a8a8;margin-bottom:36px;font-style:italic;}
      .contact-item{display:flex;gap:18px;margin-bottom:26px;align-items:flex-start;}
      .contact-item .ic{width:54px;height:54px;background:rgba(220,38,38,0.1);border:1px solid rgba(220,38,38,0.4);display:flex;align-items:center;justify-content:center;font-size:22px;color:#dc2626;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .ic{background:#dc2626;color:#fff;transform:rotate(-5deg);}
      .contact-item h5{font-size:11px;color:#dc2626;margin-bottom:5px;text-transform:uppercase;letter-spacing:3px;font-weight:normal;}
      .contact-item p{font-size:15px;color:#fff;letter-spacing:1px;}
      .contact-form{background:rgba(220,38,38,0.03);padding:44px;border:1px solid rgba(220,38,38,0.3);}
      .contact-form h4{font-size:24px;color:#dc2626;margin-bottom:26px;font-weight:normal;letter-spacing:2px;text-align:center;}
      .form-group{margin-bottom:20px;}
      .form-group label{display:block;color:#c8c8c8;font-size:11px;margin-bottom:10px;letter-spacing:2px;text-transform:uppercase;font-weight:600;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:15px 18px;background:rgba(0,0,0,0.5);border:1px solid rgba(220,38,38,0.3);color:#fff;font-family:'Georgia',serif;font-size:15px;transition:all 0.3s;letter-spacing:1px;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#dc2626;background:rgba(0,0,0,0.7);box-shadow:0 0 20px rgba(220,38,38,0.2);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-red{width:100%;justify-content:center;}
      .footer{background:#000;color:#7a7a7a;padding:70px 40px 30px;border-top:1px solid rgba(220,38,38,0.2);}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:50px;margin-bottom:50px;}
      .footer h4{color:#dc2626;font-size:16px;margin-bottom:22px;font-weight:normal;letter-spacing:3px;text-transform:uppercase;}
      .footer p{font-size:13px;line-height:1.9;margin-bottom:14px;font-style:italic;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:12px;}
      .footer ul a{color:#7a7a7a;font-size:13px;transition:all 0.3s;letter-spacing:1px;}
      .footer ul a:hover{color:#dc2626;padding-left:8px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:34px;border-top:1px solid rgba(220,38,38,0.15);text-align:center;font-size:12px;letter-spacing:2px;}
      @media(max-width:992px){
        .nav{padding:16px 20px;flex-wrap:wrap;gap:14px;}
        .nav nav{gap:18px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{height:auto;min-height:auto;padding:80px 20px;}
        .section,.experience-inner,.testimonial-inner,.contact-section{padding:70px 20px;}
        .experiences-grid,.testimonial-grid,.menu-grid,.stats-inner,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .experience-inner,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .experience-img img{height:400px;}
        .stats-section{padding:50px 20px;}
      }
      @media(max-width:600px){
        .experiences-grid,.testimonial-grid,.menu-grid,.stats-inner,.footer-top{grid-template-columns:1fr;}
        .hero h1{letter-spacing:4px;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:30px 22px;}
        .nav .logo-text h1{font-size:16px;letter-spacing:3px;}
        .stat-item h3{font-size:36px;}
        .menu-item .item-header{flex-direction:column;gap:8px;}
      }
    </style></head><body>

    <header class="nav">
      <div class="logo"><div class="logo-icon">🍷</div><div class="logo-text"><h1>ELITE DINING</h1><p>Where Every Meal is a Masterpiece</p></div></div>
      <nav><a href="#">Home</a><a href="#">Experiences</a><a href="#">Menu</a><a href="#">Reserve</a></nav>
      <a href="#" class="cta-btn">🍽️ Reserve</a>
    </header>

    <section class="hero">
      <div class="hero-content">
        <span class="hero-badge">✦ FINE DINING EXPERIENCE ✦</span>
        <h1>ELITE DINING</h1>
        <p>Where every meal is a masterpiece. Reserve your table for an unforgettable culinary journey crafted by award-winning chefs.</p>
        <div class="hero-cta">
          <a href="#" class="btn btn-red">🍽️ Reserve Table</a>
          <a href="#" class="btn btn-outline">View Menu</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Curated Experiences</span>
        <h2 class="section-title">Signature <span>Experiences</span></h2>
        <p class="section-desc">Every experience is designed to create memories that last a lifetime.</p>
      </div>
      <div class="experiences-grid">
        <div class="exp-card"><div class="exp-icon">🍷</div><h4>Wine Pairing</h4><p>Curated selection of the world's finest wines paired perfectly with each course by our sommelier.</p></div>
        <div class="exp-card"><div class="exp-icon">👨‍🍳</div><h4>Chef's Table</h4><p>An exclusive tasting menu curated by our master chef, prepared right before your eyes.</p></div>
        <div class="exp-card"><div class="exp-icon">🎂</div><h4>Private Events</h4><p>Celebrate life's special moments in our elegant private dining rooms with personalized service.</p></div>
      </div>
    </section>

    <section class="section menu-section">
      <div class="section-header">
        <span class="section-tag">Our Menu</span>
        <h2 class="section-title">Signature <span>Dishes</span></h2>
        <p class="section-desc">A curated selection of our chef's finest creations.</p>
      </div>
      <div class="menu-grid">
        <div class="menu-item"><div class="item-header"><h4>Wagyu Beef Tenderloin</h4><div class="price">₹3,500</div></div><p>Premium A5 Wagyu with truffle mash and red wine reduction.</p></div>
        <div class="menu-item"><div class="item-header"><h4>Lobster Thermidor</h4><div class="price">₹2,800</div></div><p>Fresh lobster in rich creamy sauce with gruyère cheese crust.</p></div>
        <div class="menu-item"><div class="item-header"><h4>Truffle Risotto</h4><div class="price">₹1,800</div></div><p>Creamy arborio rice with black truffle shavings and parmesan.</p></div>
        <div class="menu-item"><div class="item-header"><h4>Pan-Seared Duck</h4><div class="price">₹2,200</div></div><p>Duck breast with cherry gastrique and roasted root vegetables.</p></div>
        <div class="menu-item"><div class="item-header"><h4>Chocolate Soufflé</h4><div class="price">₹800</div></div><p>Warm chocolate soufflé with vanilla bean ice cream.</p></div>
        <div class="menu-item"><div class="item-header"><h4>Crème Brûlée</h4><div class="price">₹650</div></div><p>Classic French vanilla custard with caramelized sugar crust.</p></div>
      </div>
    </section>

    <section class="experience-section">
      <div class="experience-inner">
        <div class="experience-img"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" alt="Fine Dining"></div>
        <div class="experience-content">
          <span class="section-tag">Our Philosophy</span>
          <h3>Where Culinary Art <span>Meets Elegance</span></h3>
          <p>At Elite Dining, we believe that a meal is more than just food — it's an experience, a memory, a moment of pure pleasure.</p>
          <p>Our award-winning chefs source only the finest ingredients from around the world, transforming them into culinary masterpieces that delight all the senses. Every dish is a work of art, every plate a canvas.</p>
          <div class="signature">— Chef & Management</div>
        </div>
      </div>
    </section>

    <div class="stats-section">
      <div class="stats-inner">
        <div class="stat-item"><h3>15+</h3><p>Years of Excellence</p></div>
        <div class="stat-item"><h3>50+</h3><p>Awards Won</p></div>
        <div class="stat-item"><h3>1000+</h3><p>Happy Guests Monthly</p></div>
        <div class="stat-item"><h3>4.9★</h3><p>Guest Rating</p></div>
      </div>
    </div>

    <section class="testimonial-section">
      <div class="testimonial-inner">
        <div class="section-header">
          <span class="section-tag">Guest Experiences</span>
          <h2 class="section-title">What Our <span>Guests Say</span></h2>
          <p class="section-desc">Testimonials from guests who've experienced culinary excellence.</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"An absolutely transcendent dining experience. Every course was a masterpiece. Elite Dining truly lives up to its name."</p><div class="author"><div class="av">RK</div><div><h5>Rajesh Kapoor</h5><p>Food Critic</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"We celebrated our 25th anniversary here and it was unforgettable. The wine pairing was perfect, service impeccable."</p><div class="author"><div class="av">SM</div><div><h5>Sunita Mehta</h5><p>Guest</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The chef's table experience was worth every rupee. Watching the master at work and tasting each creation — pure magic."</p><div class="author"><div class="av">AP</div><div><h5>Arjun Patel</h5><p>Business Owner</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Reserve Your <span>Experience</span></h3>
          <p>Contact us to book your table and create unforgettable memories.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Restaurant</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Hours</h5><p>Dinner: 7PM – 11:30PM (Daily)</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Reservation request sent!');">
          <h4>Reserve Your Table</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Party Size</label><select required><option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5+ Guests</option></select></div>
          <div class="form-group"><label>Preferred Date & Time</label><input type="datetime-local" required></div>
          <div class="form-group"><label>Special Occasion / Requests</label><textarea placeholder="Anniversary, birthday, dietary preferences..."></textarea></div>
          <button type="submit" class="btn btn-red">🍽️ Reserve Table</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>Elite Dining</h4><p>Where every meal is a masterpiece. Award-winning fine dining in the heart of Mumbai since 2008.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Menu</a></li><li><a href="#">Reserve</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Experiences</h4><ul><li><a href="#">Wine Pairing</a></li><li><a href="#">Chef's Table</a></li><li><a href="#">Private Events</a></li><li><a href="#">Corporate</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra West, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Elite Dining. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,
  // ========== INSTITUTE 1: COACHING ==========
  "institute1": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#f0f9ff;color:#1e293b;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .topbar{background:linear-gradient(90deg,#1e40af,#2563eb);color:#fff;padding:10px 30px;font-size:13px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;}
      .nav{position:sticky;top:0;background:rgba(255,255,255,0.98);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(10px);box-shadow:0 2px 20px rgba(37,99,235,0.12);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#2563eb,#7c3aed);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 4px 15px rgba(37,99,235,0.3);}
      .nav .logo-text h1{font-size:20px;color:#0f172a;margin:0;}
      .nav .logo-text p{font-size:12px;color:#2563eb;margin:0;font-weight:600;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#1e293b;font-size:14px;font-weight:500;transition:color 0.3s;}
      .nav nav a:hover{color:#2563eb;}
      .nav .cta-btn{padding:12px 24px;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;border-radius:30px;font-weight:600;font-size:14px;transition:all 0.3s;box-shadow:0 4px 15px rgba(37,99,235,0.35);}
      .nav .cta-btn:hover{transform:translateY(-3px);box-shadow:0 8px 25px rgba(37,99,235,0.55);}
      .hero{padding:90px 40px;background:linear-gradient(135deg,#dbeafe,#f0f9ff);position:relative;overflow:hidden;}
      .hero::before{content:'';position:absolute;top:-100px;right:-100px;width:450px;height:450px;background:radial-gradient(circle,rgba(37,99,235,0.2),transparent 70%);border-radius:50%;}
      .hero::after{content:'';position:absolute;bottom:-100px;left:-100px;width:350px;height:350px;background:radial-gradient(circle,rgba(124,58,237,0.15),transparent 70%);border-radius:50%;}
      .hero-inner{position:relative;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.1fr 1fr;gap:60px;align-items:center;z-index:1;}
      .hero-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 18px;background:#fff;border-radius:30px;color:#2563eb;font-size:13px;font-weight:700;margin-bottom:22px;box-shadow:0 4px 15px rgba(37,99,235,0.15);}
      .hero-badge::before{content:'●';color:#22c55e;animation:pulse 1.5s infinite;}
      @keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.3;}}
      .hero h2{font-size:clamp(34px,5.5vw,56px);line-height:1.15;color:#0f172a;margin-bottom:22px;}
      .hero h2 span{background:linear-gradient(90deg,#2563eb,#7c3aed);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .hero-desc{font-size:17px;color:#475569;margin-bottom:32px;max-width:520px;}
      .hero-cta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 32px;border-radius:30px;font-weight:700;font-size:15px;transition:all 0.3s;cursor:pointer;border:none;}
      .btn-primary{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;box-shadow:0 8px 20px rgba(37,99,235,0.35);}
      .btn-primary:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(37,99,235,0.5);}
      .btn-outline{background:#fff;color:#2563eb;border:2px solid #2563eb;}
      .btn-outline:hover{background:#2563eb;color:#fff;transform:translateY(-4px);}
      .hero-stats{display:flex;gap:32px;flex-wrap:wrap;}
      .hero-stat b{font-size:28px;color:#2563eb;display:block;line-height:1;font-weight:900;}
      .hero-stat span{font-size:12px;color:#475569;text-transform:uppercase;letter-spacing:1px;font-weight:600;margin-top:6px;display:block;}
      .hero-img{position:relative;}
      .hero-img img{width:100%;border-radius:24px;box-shadow:0 25px 60px rgba(37,99,235,0.25);}
      .float-badge{position:absolute;bottom:-20px;left:-20px;background:#fff;padding:18px 22px;border-radius:16px;box-shadow:0 12px 35px rgba(0,0,0,0.15);display:flex;align-items:center;gap:12px;animation:float 4s ease-in-out infinite;}
      @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
      .float-badge .ic{width:46px;height:46px;background:linear-gradient(135deg,#22c55e,#16a34a);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;}
      .float-badge h5{font-size:14px;color:#0f172a;margin-bottom:3px;}
      .float-badge p{font-size:12px;color:#64748b;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#2563eb;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;font-weight:800;}
      .section-title{font-size:clamp(28px,4vw,44px);color:#0f172a;margin-bottom:18px;line-height:1.2;}
      .section-title span{background:linear-gradient(90deg,#2563eb,#7c3aed);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .section-desc{font-size:16px;color:#64748b;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .courses-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
      .course-card{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 25px rgba(37,99,235,0.08);transition:all 0.4s;border:1px solid rgba(37,99,235,0.1);}
      .course-card:hover{transform:translateY(-10px);box-shadow:0 25px 60px rgba(37,99,235,0.2);border-color:rgba(37,99,235,0.3);}
      .course-header{padding:32px 28px;background:linear-gradient(135deg,#dbeafe,#e9d5ff);position:relative;overflow:hidden;}
      .course-header::before{content:'';position:absolute;top:-30px;right:-30px;width:100px;height:100px;background:rgba(37,99,235,0.1);border-radius:50%;}
      .course-icon{width:64px;height:64px;background:linear-gradient(135deg,#2563eb,#7c3aed);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:30px;margin-bottom:16px;position:relative;box-shadow:0 8px 25px rgba(37,99,235,0.4);}
      .course-header h4{font-size:19px;color:#0f172a;position:relative;margin-bottom:6px;}
      .course-header .tag{font-size:12px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:1px;position:relative;}
      .course-body{padding:28px;}
      .course-info{display:flex;flex-direction:column;gap:12px;margin-bottom:22px;}
      .course-info-row{display:flex;align-items:center;gap:10px;font-size:14px;color:#475569;}
      .course-info-row::before{content:'✓';width:20px;height:20px;background:#22c55e;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:bold;flex-shrink:0;}
      .course-price{display:flex;justify-content:space-between;align-items:center;padding-top:18px;border-top:1px solid #e2e8f0;}
      .course-price .amount{font-size:24px;color:#2563eb;font-weight:900;}
      .course-price .amount small{font-size:13px;color:#64748b;font-weight:400;}
      .course-price .enroll-btn{padding:10px 20px;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;border:none;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;transition:all 0.3s;}
      .course-price .enroll-btn:hover{transform:scale(1.05);box-shadow:0 4px 15px rgba(37,99,235,0.5);}
      .features-section{background:linear-gradient(135deg,#dbeafe,#f0f9ff);}
      .features-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .features-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
      .feature-card{background:#fff;padding:32px 24px;border-radius:16px;text-align:center;box-shadow:0 4px 20px rgba(37,99,235,0.08);transition:all 0.4s;}
      .feature-card:hover{transform:translateY(-8px);box-shadow:0 20px 45px rgba(37,99,235,0.2);}
      .feature-card .ic{width:64px;height:64px;margin:0 auto 18px;background:linear-gradient(135deg,#dbeafe,#e9d5ff);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:30px;transition:transform 0.4s;}
      .feature-card:hover .ic{transform:scale(1.1) rotate(-8deg);background:linear-gradient(135deg,#2563eb,#7c3aed);}
      .feature-card h4{font-size:17px;color:#0f172a;margin-bottom:10px;font-weight:700;}
      .feature-card p{font-size:13px;color:#64748b;line-height:1.7;}
      .stats-bar{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:60px 40px;}
      .stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center;}
      .stat-item h3{font-size:42px;font-weight:900;margin-bottom:6px;}
      .stat-item p{font-size:13px;opacity:0.9;text-transform:uppercase;letter-spacing:1px;}
      .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(37,99,235,0.25);}
      .about-img img{width:100%;height:500px;object-fit:cover;}
      .about-content h3{font-size:32px;color:#0f172a;margin-bottom:20px;line-height:1.3;}
      .about-content h3 span{background:linear-gradient(90deg,#2563eb,#7c3aed);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .about-content p{font-size:16px;color:#475569;line-height:1.8;margin-bottom:18px;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:10px;background:#fff;padding:14px 18px;border-radius:10px;font-size:14px;font-weight:600;color:#0f172a;box-shadow:0 2px 10px rgba(37,99,235,0.08);}
      .about-feat::before{content:'✓';width:24px;height:24px;background:#2563eb;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;flex-shrink:0;}
      .testimonial-section{background:linear-gradient(135deg,#dbeafe,#f0f9ff);}
      .testimonial-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:50px;}
      .testimonial-card{background:#fff;padding:32px 28px;border-radius:16px;box-shadow:0 4px 20px rgba(37,99,235,0.1);transition:all 0.4s;}
      .testimonial-card:hover{transform:translateY(-8px);box-shadow:0 20px 50px rgba(37,99,235,0.2);}
      .testimonial-card .stars{color:#fbbf24;font-size:18px;margin-bottom:14px;}
      .testimonial-card .quote{font-size:14.5px;color:#475569;line-height:1.8;margin-bottom:22px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#2563eb,#7c3aed);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:18px;}
      .testimonial-card .author h5{font-size:15px;color:#0f172a;margin-bottom:4px;}
      .testimonial-card .author p{font-size:12px;color:#2563eb;}
      .contact-section{background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;}
      .contact-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:32px;color:#fff;margin-bottom:20px;}
      .contact-info h3 span{background:linear-gradient(90deg,#60a5fa,#a855f7);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .contact-info > p{color:#cbd5e1;margin-bottom:30px;}
      .contact-item{display:flex;gap:16px;margin-bottom:22px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:rgba(37,99,235,0.15);border:1px solid rgba(37,99,235,0.4);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;transition:all 0.3s;}
      .contact-item:hover .ic{background:#2563eb;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#60a5fa;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:700;}
      .contact-item p{font-size:15px;color:#fff;}
      .contact-form{background:rgba(255,255,255,0.05);padding:40px;border-radius:20px;border:1px solid rgba(37,99,235,0.3);}
      .contact-form h4{font-size:22px;color:#60a5fa;margin-bottom:22px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#cbd5e1;font-size:13px;margin-bottom:8px;font-weight:500;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:rgba(0,0,0,0.3);border:1px solid rgba(37,99,235,0.3);border-radius:10px;color:#fff;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#60a5fa;background:rgba(0,0,0,0.5);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-primary{width:100%;justify-content:center;}
      .footer{background:#020617;color:#94a3b8;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#60a5fa;font-size:17px;margin-bottom:18px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#94a3b8;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#60a5fa;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(37,99,235,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:60px 20px;}
        .hero-inner,.about-grid,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .section,.features-inner,.testimonial-inner,.contact-inner{padding:60px 20px;}
        .courses-grid,.features-grid,.testimonial-grid,.stats-inner,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .about-img img{height:340px;}
        .stats-bar{padding:40px 20px;}
      }
      @media(max-width:600px){
        .courses-grid,.features-grid,.testimonial-grid,.stats-inner,.about-features,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
        .topbar{justify-content:center;text-align:center;font-size:11px;}
      }
    </style></head><body>

    <div class="topbar"><span>🎓 15+ Years of Excellence</span><span>📞 +91 93093 32775</span><span>📅 New Batch Starting Soon</span></div>

    <header class="nav">
      <div class="logo"><div class="logo-icon">🎓</div><div class="logo-text"><h1>Success Coaching</h1><p>Your Success is Our Mission</p></div></div>
      <nav><a href="#">Home</a><a href="#">Courses</a><a href="#">Faculty</a><a href="#">About</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">📚 Join Now</a>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <div>
          <span class="hero-badge">🏆 RANKED #1 IN MUMBAI</span>
          <h2>Your Success is <span>Our Mission</span></h2>
          <p class="hero-desc">Expert coaching for JEE, NEET, UPSC, and Banking exams with a proven track record of 15+ years. Small batch sizes, expert faculty, and personalized attention.</p>
          <div class="hero-cta">
            <a href="#" class="btn btn-primary">📚 Join Now</a>
            <a href="#" class="btn btn-outline">📞 Free Demo Class</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><b>15K+</b><span>Students Trained</span></div>
            <div class="hero-stat"><b>500+</b><span>Top Rankers</span></div>
            <div class="hero-stat"><b>98%</b><span>Success Rate</span></div>
          </div>
        </div>
        <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" alt="Coaching Institute">
          <div class="float-badge"><div class="ic">✓</div><div><h5>Expert Faculty</h5><p>IIT & AIIMS alumni</p></div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Our Courses</span>
        <h2 class="section-title">Choose Your <span>Course</span></h2>
        <p class="section-desc">Comprehensive courses designed by experts for all competitive exams.</p>
      </div>
      <div class="courses-grid">
        <div class="course-card">
          <div class="course-header"><div class="course-icon">🎯</div><h4>JEE Advanced</h4><div class="tag">2 Years Program</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">IIT Faculty Team</div>
              <div class="course-info-row">Daily Practice Problems</div>
              <div class="course-info-row">Weekly Mock Tests</div>
              <div class="course-info-row">Doubt Clearing Sessions</div>
            </div>
            <div class="course-price"><div class="amount">₹85,000<small>/year</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
        <div class="course-card">
          <div class="course-header"><div class="course-icon">🩺</div><h4>NEET Preparation</h4><div class="tag">2 Years Program</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">AIIMS Alumni Faculty</div>
              <div class="course-info-row">NCERT Based Curriculum</div>
              <div class="course-info-row">Regular Topic Tests</div>
              <div class="course-info-row">Personal Mentorship</div>
            </div>
            <div class="course-price"><div class="amount">₹75,000<small>/year</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
        <div class="course-card">
          <div class="course-header"><div class="course-icon">📋</div><h4>UPSC Foundation</h4><div class="tag">1 Year Program</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">IAS Officers Mentorship</div>
              <div class="course-info-row">Complete Syllabus Coverage</div>
              <div class="course-info-row">Current Affairs Updates</div>
              <div class="course-info-row">Interview Preparation</div>
            </div>
            <div class="course-price"><div class="amount">₹45,000<small>/year</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
        <div class="course-card">
          <div class="course-header"><div class="course-icon">🏦</div><h4>Banking Exams</h4><div class="tag">6 Months</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">IBPS / SBI / RBI Prep</div>
              <div class="course-info-row">Speed & Accuracy Training</div>
              <div class="course-info-row">Banking Awareness</div>
              <div class="course-info-row">Interview Training</div>
            </div>
            <div class="course-price"><div class="amount">₹25,000<small>/course</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
        <div class="course-card">
          <div class="course-header"><div class="course-icon">⚖️</div><h4>CLAT / Law Entrance</h4><div class="tag">1 Year Program</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">Legal Reasoning Mastery</div>
              <div class="course-info-row">Mock Tests & Analysis</div>
              <div class="course-info-row">Current Legal Affairs</div>
              <div class="course-info-row">Career Guidance</div>
            </div>
            <div class="course-price"><div class="amount">₹35,000<small>/year</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
        <div class="course-card">
          <div class="course-header"><div class="course-icon">📊</div><h4>CA Foundation</h4><div class="tag">8 Months</div></div>
          <div class="course-body">
            <div class="course-info">
              <div class="course-info-row">CA Faculty</div>
              <div class="course-info-row">Accountancy Fundamentals</div>
              <div class="course-info-row">Business Law & Maths</div>
              <div class="course-info-row">Test Series</div>
            </div>
            <div class="course-price"><div class="amount">₹30,000<small>/course</small></div><button class="enroll-btn">Enroll</button></div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="features-inner">
        <div class="section-header">
          <span class="section-tag">Why Choose Us</span>
          <h2 class="section-title">Why <span>Success Coaching</span>?</h2>
          <p class="section-desc">We're not just a coaching center — we're a launchpad for your dreams.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card"><div class="ic">👨‍🏫</div><h4>Expert Faculty</h4><p>Learn from IIT, AIIMS, and IAS alumni with proven teaching excellence.</p></div>
          <div class="feature-card"><div class="ic">👥</div><h4>Small Batches</h4><p>Maximum 30 students per batch for personal attention.</p></div>
          <div class="feature-card"><div class="ic">📊</div><h4>Regular Tests</h4><p>Weekly tests, mock exams, and performance analysis to track progress.</p></div>
          <div class="feature-card"><div class="ic">🎯</div><h4>Personal Mentoring</h4><p>One-on-one mentoring sessions for every student.</p></div>
        </div>
      </div>
    </section>

    <div class="stats-bar">
      <div class="stats-inner">
        <div class="stat-item"><h3>15,000+</h3><p>Students Trained</p></div>
        <div class="stat-item"><h3>500+</h3><p>Top Rankers</p></div>
        <div class="stat-item"><h3>98%</h3><p>Success Rate</p></div>
        <div class="stat-item"><h3>25+</h3><p>Expert Faculty</p></div>
      </div>
    </div>

    <section class="section">
      <div class="about-grid">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" alt="Coaching"></div>
        <div class="about-content">
          <span class="section-tag">About Us</span>
          <h3>Building <span>Careers</span> Since 2008</h3>
          <p>Success Coaching has been Mumbai's most trusted name in competitive exam preparation for over 15 years. Thousands of students have achieved their dreams through our dedicated coaching and mentoring.</p>
          <p>Our approach combines rigorous academic training with personal mentoring. We focus not just on knowledge, but on building confidence, discipline, and exam strategy.</p>
          <div class="about-features">
            <div class="about-feat">IIT/AIIMS Faculty</div>
            <div class="about-feat">AC Classrooms</div>
            <div class="about-feat">Library Access</div>
            <div class="about-feat">Doubt Clearing</div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="testimonial-inner">
        <div class="section-header">
          <span class="section-tag">Success Stories</span>
          <h2 class="section-title">Student <span>Testimonials</span></h2>
          <p class="section-desc">Real stories from students who achieved their dreams.</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The JEE Advanced coaching here completely changed my life. The faculty's dedication and constant support helped me crack IIT!"</p><div class="author"><div class="av">RK</div><div><h5>Rahul Khanna</h5><p>IIT Bombay, 2024</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"NEET preparation at Success Coaching was exceptional. Personal mentorship and regular tests made all the difference. Now pursuing MBBS at AIIMS!"</p><div class="author"><div class="av">SP</div><div><h5>Sunita Patel</h5><p>AIIMS Delhi, 2024</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The UPSC foundation course was incredibly comprehensive. The IAS mentorship and current affairs sessions were game-changers for my journey."</p><div class="author"><div class="av">AM</div><div><h5>Amit Mehta</h5><p>UPSC Aspirant</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Start Your <span>Journey</span></h3>
          <p>Book a free demo class or enroll now. Limited seats available!</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>Address</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Timings</h5><p>Mon–Sat: 7AM – 9PM | Sun: 9AM – 3PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Enquiry sent!');">
          <h4>Enroll / Free Demo Class</h4>
          <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Interested Course</label><select required><option>-- Select --</option><option>JEE Advanced</option><option>NEET</option><option>UPSC</option><option>Banking</option><option>CLAT</option><option>CA Foundation</option></select></div>
          <div class="form-group"><label>Message (Optional)</label><textarea placeholder="Any questions?"></textarea></div>
          <button type="submit" class="btn btn-primary">📚 Book Now</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>🎓 Success Coaching</h4><p>Mumbai's most trusted coaching institute since 2008. Building careers, one student at a time.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">Courses</a></li><li><a href="#">Faculty</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Courses</h4><ul><li><a href="#">JEE</a></li><li><a href="#">NEET</a></li><li><a href="#">UPSC</a></li><li><a href="#">Banking</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Success Coaching. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `,

  // ========== INSTITUTE 2: SCHOOL ==========
  "institute2": `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
      *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI',sans-serif;}
      body{background:#fffbeb;color:#1e293b;line-height:1.7;overflow-x:hidden;}
      img{max-width:100%;display:block;}
      a{text-decoration:none;color:inherit;}
      .topbar{background:linear-gradient(90deg,#ea580c,#f97316);color:#fff;padding:10px 30px;font-size:13px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;}
      .nav{position:sticky;top:0;background:rgba(255,255,255,0.98);padding:18px 40px;display:flex;justify-content:space-between;align-items:center;z-index:100;backdrop-filter:blur(10px);box-shadow:0 2px 20px rgba(234,88,12,0.12);}
      .nav .logo{display:flex;align-items:center;gap:12px;}
      .nav .logo-icon{width:50px;height:50px;background:linear-gradient(135deg,#ea580c,#f97316);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 4px 15px rgba(234,88,12,0.3);}
      .nav .logo-text h1{font-size:20px;color:#0f172a;margin:0;}
      .nav .logo-text p{font-size:12px;color:#ea580c;margin:0;font-weight:600;}
      .nav nav{display:flex;gap:28px;}
      .nav nav a{color:#1e293b;font-size:14px;font-weight:500;transition:color 0.3s;}
      .nav nav a:hover{color:#ea580c;}
      .nav .cta-btn{padding:12px 24px;background:linear-gradient(135deg,#ea580c,#f97316);color:#fff;border-radius:30px;font-weight:600;font-size:14px;transition:all 0.3s;box-shadow:0 4px 15px rgba(234,88,12,0.35);}
      .nav .cta-btn:hover{transform:translateY(-3px);box-shadow:0 8px 25px rgba(234,88,12,0.55);}
      .hero{padding:90px 40px;background:linear-gradient(135deg,#fff7ed,#fef3c7);position:relative;overflow:hidden;}
      .hero::before{content:'📚';position:absolute;top:60px;left:5%;font-size:100px;opacity:0.08;animation:float 4s ease-in-out infinite;}
      .hero::after{content:'✏️';position:absolute;bottom:60px;right:5%;font-size:100px;opacity:0.08;animation:float 5s ease-in-out infinite reverse;}
      @keyframes float{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-20px) rotate(10deg);}}
      .hero-inner{position:relative;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.1fr 1fr;gap:60px;align-items:center;z-index:1;}
      .hero-badge{display:inline-block;padding:8px 18px;background:#fff;border-radius:30px;color:#ea580c;font-size:13px;font-weight:700;margin-bottom:22px;box-shadow:0 4px 15px rgba(234,88,12,0.15);}
      .hero h2{font-size:clamp(34px,5.5vw,56px);line-height:1.15;color:#0f172a;margin-bottom:22px;}
      .hero h2 span{background:linear-gradient(90deg,#ea580c,#f97316);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .hero-desc{font-size:17px;color:#475569;margin-bottom:32px;max-width:520px;}
      .hero-cta{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:40px;}
      .btn{display:inline-flex;align-items:center;gap:8px;padding:16px 32px;border-radius:30px;font-weight:700;font-size:15px;transition:all 0.3s;cursor:pointer;border:none;}
      .btn-primary{background:linear-gradient(135deg,#ea580c,#f97316);color:#fff;box-shadow:0 8px 20px rgba(234,88,12,0.35);}
      .btn-primary:hover{transform:translateY(-4px);box-shadow:0 12px 30px rgba(234,88,12,0.5);}
      .btn-outline{background:#fff;color:#ea580c;border:2px solid #ea580c;}
      .btn-outline:hover{background:#ea580c;color:#fff;transform:translateY(-4px);}
      .hero-features{display:flex;gap:24px;flex-wrap:wrap;}
      .hero-feature{display:flex;align-items:center;gap:8px;font-size:14px;color:#475569;font-weight:500;}
      .hero-feature::before{content:'✓';width:24px;height:24px;background:#22c55e;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;flex-shrink:0;}
      .hero-img{position:relative;}
      .hero-img img{width:100%;border-radius:24px;box-shadow:0 25px 60px rgba(234,88,12,0.25);}
      .float-badge{position:absolute;bottom:-20px;left:-20px;background:#fff;padding:18px 22px;border-radius:16px;box-shadow:0 12px 35px rgba(0,0,0,0.15);display:flex;align-items:center;gap:12px;animation:float 4s ease-in-out infinite;}
      .float-badge .ic{width:46px;height:46px;background:linear-gradient(135deg,#fbbf24,#ea580c);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;}
      .float-badge h5{font-size:14px;color:#0f172a;margin-bottom:3px;}
      .float-badge p{font-size:12px;color:#64748b;}
      .stats-bar{background:linear-gradient(135deg,#ea580c,#f97316);color:#fff;padding:50px 40px;}
      .stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center;}
      .stat-item h3{font-size:42px;font-weight:900;margin-bottom:6px;}
      .stat-item p{font-size:13px;opacity:0.9;text-transform:uppercase;letter-spacing:1px;}
      .section{padding:90px 40px;max-width:1200px;margin:0 auto;}
      .section-tag{display:inline-block;color:#ea580c;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;font-weight:800;}
      .section-title{font-size:clamp(28px,4vw,44px);color:#0f172a;margin-bottom:18px;line-height:1.2;}
      .section-title span{background:linear-gradient(90deg,#ea580c,#f97316);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .section-desc{font-size:16px;color:#64748b;max-width:640px;margin-bottom:50px;}
      .section-header{text-align:center;}
      .section-header .section-desc{margin-left:auto;margin-right:auto;}
      .features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
      .feature-card{background:#fff;padding:36px 28px;border-radius:20px;text-align:center;box-shadow:0 4px 25px rgba(234,88,12,0.08);transition:all 0.4s;border-top:4px solid transparent;}
      .feature-card:hover{transform:translateY(-10px);box-shadow:0 20px 50px rgba(234,88,12,0.2);border-top-color:#ea580c;}
      .feature-card .ic{width:76px;height:76px;margin:0 auto 20px;background:linear-gradient(135deg,#fef3c7,#fed7aa);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;transition:all 0.4s;}
      .feature-card:hover .ic{transform:scale(1.1) rotate(-8deg);background:linear-gradient(135deg,#ea580c,#f97316);}
      .feature-card h4{font-size:19px;color:#0f172a;margin-bottom:12px;}
      .feature-card p{font-size:14px;color:#64748b;line-height:1.7;}
      .about-section{background:linear-gradient(135deg,#fff7ed,#fef3c7);}
      .about-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .about-img{border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(234,88,12,0.25);position:relative;}
      .about-img img{width:100%;height:520px;object-fit:cover;}
      .about-img::before{content:'SINCE 1995';position:absolute;top:20px;left:20px;background:linear-gradient(135deg,#ea580c,#f97316);color:#fff;padding:10px 18px;border-radius:20px;font-size:12px;font-weight:800;letter-spacing:2px;box-shadow:0 4px 15px rgba(234,88,12,0.4);}
      .about-content h3{font-size:32px;color:#0f172a;margin-bottom:20px;line-height:1.3;}
      .about-content h3 span{background:linear-gradient(90deg,#ea580c,#f97316);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .about-content p{font-size:16px;color:#475569;line-height:1.8;margin-bottom:18px;}
      .about-features{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;}
      .about-feat{display:flex;align-items:center;gap:10px;background:#fff;padding:14px 18px;border-radius:10px;font-size:14px;font-weight:600;color:#0f172a;box-shadow:0 2px 10px rgba(234,88,12,0.08);}
      .about-feat::before{content:'✓';width:24px;height:24px;background:#22c55e;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:bold;flex-shrink:0;}
      .gallery-section{background:linear-gradient(135deg,#fef3c7,#fff7ed);}
      .gallery-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
      .gallery-item{border-radius:12px;overflow:hidden;position:relative;aspect-ratio:1;box-shadow:0 4px 20px rgba(234,88,12,0.1);transition:all 0.4s;}
      .gallery-item:hover{transform:scale(1.05);box-shadow:0 15px 40px rgba(234,88,12,0.3);}
      .gallery-item img{width:100%;height:100%;object-fit:cover;transition:transform 0.6s;}
      .gallery-item:hover img{transform:scale(1.1);}
      .gallery-item::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(234,88,12,0.3));opacity:0;transition:opacity 0.4s;z-index:1;}
      .gallery-item:hover::before{opacity:1;}
      .testimonial-section{background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;}
      .testimonial-inner{max-width:1200px;margin:0 auto;padding:80px 40px;}
      .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:50px;}
      .testimonial-card{background:rgba(255,255,255,0.05);padding:32px 28px;border-radius:16px;border:1px solid rgba(251,191,36,0.2);transition:all 0.4s;}
      .testimonial-card:hover{transform:translateY(-8px);background:rgba(251,191,36,0.08);border-color:#fbbf24;}
      .testimonial-card .stars{color:#fbbf24;font-size:18px;margin-bottom:14px;}
      .testimonial-card .quote{font-size:14.5px;color:#cbd5e1;line-height:1.8;margin-bottom:22px;font-style:italic;}
      .testimonial-card .author{display:flex;align-items:center;gap:12px;}
      .testimonial-card .author .av{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#ea580c,#f97316);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:18px;}
      .testimonial-card .author h5{font-size:15px;color:#fff;margin-bottom:4px;}
      .testimonial-card .author p{font-size:12px;color:#fbbf24;}
      .contact-section{background:linear-gradient(135deg,#fff7ed,#fef3c7);}
      .contact-inner{max-width:1200px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
      .contact-info h3{font-size:32px;color:#0f172a;margin-bottom:20px;}
      .contact-info h3 span{background:linear-gradient(90deg,#ea580c,#f97316);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
      .contact-info > p{color:#475569;margin-bottom:30px;}
      .contact-item{display:flex;gap:16px;margin-bottom:22px;align-items:flex-start;}
      .contact-item .ic{width:52px;height:52px;background:#fff;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 15px rgba(234,88,12,0.15);transition:all 0.3s;}
      .contact-item:hover .ic{background:#ea580c;transform:rotate(-5deg);}
      .contact-item h5{font-size:13px;color:#ea580c;margin-bottom:4px;text-transform:uppercase;letter-spacing:1px;font-weight:700;}
      .contact-item p{font-size:15px;color:#0f172a;font-weight:500;}
      .contact-form{background:#fff;padding:40px;border-radius:20px;box-shadow:0 10px 40px rgba(234,88,12,0.15);}
      .contact-form h4{font-size:22px;color:#0f172a;margin-bottom:22px;}
      .form-group{margin-bottom:18px;}
      .form-group label{display:block;color:#475569;font-size:13px;margin-bottom:8px;font-weight:600;}
      .form-group input,.form-group textarea,.form-group select{width:100%;padding:14px 16px;background:#fff7ed;border:1px solid #fed7aa;border-radius:10px;color:#1e293b;font-family:inherit;font-size:15px;transition:all 0.3s;}
      .form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:#ea580c;background:#fff;box-shadow:0 0 0 3px rgba(234,88,12,0.1);}
      .form-group textarea{resize:vertical;min-height:100px;}
      .contact-form .btn-primary{width:100%;justify-content:center;}
      .footer{background:#1c1917;color:#a8a29e;padding:60px 40px 30px;}
      .footer-top{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px;}
      .footer h4{color:#f97316;font-size:17px;margin-bottom:18px;}
      .footer p{font-size:14px;line-height:1.8;margin-bottom:12px;}
      .footer ul{list-style:none;}
      .footer ul li{margin-bottom:10px;}
      .footer ul a{color:#a8a29e;font-size:14px;transition:all 0.3s;}
      .footer ul a:hover{color:#f97316;padding-left:6px;}
      .footer-bottom{max-width:1200px;margin:0 auto;padding-top:30px;border-top:1px solid rgba(249,115,22,0.15);text-align:center;font-size:13px;}
      @media(max-width:992px){
        .nav{padding:14px 20px;flex-wrap:wrap;gap:12px;}
        .nav nav{gap:16px;width:100%;justify-content:center;order:3;font-size:13px;}
        .hero{padding:60px 20px;}
        .hero-inner,.about-inner,.contact-inner{grid-template-columns:1fr;gap:40px;}
        .about-img img{height:340px;}
        .section,.about-inner,.gallery-inner,.testimonial-inner,.contact-inner{padding:60px 20px;}
        .features-grid,.testimonial-grid,.gallery-grid,.stats-inner,.footer-top{grid-template-columns:1fr 1fr;gap:20px;}
        .stats-bar{padding:40px 20px;}
      }
      @media(max-width:600px){
        .features-grid,.testimonial-grid,.gallery-grid,.stats-inner,.about-features,.footer-top{grid-template-columns:1fr;}
        .hero-cta{flex-direction:column;}
        .btn{width:100%;justify-content:center;}
        .contact-form{padding:26px 20px;}
        .topbar{justify-content:center;text-align:center;font-size:11px;}
      }
    </style></head><body>

    <div class="topbar"><span>🎓 Admissions Open 2026-27</span><span>📞 +91 93093 32775</span><span>🏆 30 Years of Excellence</span></div>

    <header class="nav">
      <div class="logo"><div class="logo-icon">🏫</div><div class="logo-text"><h1>Bright Future School</h1><p>Nurturing Young Minds Since 1995</p></div></div>
      <nav><a href="#">Home</a><a href="#">About</a><a href="#">Academics</a><a href="#">Gallery</a><a href="#">Contact</a></nav>
      <a href="#" class="cta-btn">🎒 Apply Now</a>
    </header>

    <section class="hero">
      <div class="hero-inner">
        <div>
          <span class="hero-badge">🎓 ADMISSIONS OPEN 2026-27</span>
          <h2>Nurturing <span>Young Minds</span></h2>
          <p class="hero-desc">Where every child discovers their potential. Quality education from KG to Class 12 with modern facilities, expert teachers, and holistic development.</p>
          <div class="hero-cta">
            <a href="#" class="btn btn-primary">🎒 Apply Now</a>
            <a href="#" class="btn btn-outline">📞 Visit Campus</a>
          </div>
          <div class="hero-features">
            <div class="hero-feature">100% Board Results</div>
            <div class="hero-feature">Modern Classrooms</div>
            <div class="hero-feature">Expert Teachers</div>
          </div>
        </div>
        <div class="hero-img">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" alt="School">
          <div class="float-badge"><div class="ic">🏆</div><div><h5>Best School 2025</h5><p>Mumbai Education Awards</p></div></div>
        </div>
      </div>
    </section>

    <div class="stats-bar">
      <div class="stats-inner">
        <div class="stat-item"><h3>30+</h3><p>Years of Excellence</p></div>
        <div class="stat-item"><h3>2000+</h3><p>Happy Students</p></div>
        <div class="stat-item"><h3>100+</h3><p>Expert Teachers</p></div>
        <div class="stat-item"><h3>100%</h3><p>Board Results</p></div>
      </div>
    </div>

    <section class="section">
      <div class="section-header">
        <span class="section-tag">Why Choose Us</span>
        <h2 class="section-title">Why <span>Bright Future</span>?</h2>
        <p class="section-desc">We provide holistic education that shapes not just minds, but personalities.</p>
      </div>
      <div class="features-grid">
        <div class="feature-card"><div class="ic">📚</div><h4>Expert Faculty</h4><p>Highly qualified and experienced teachers dedicated to student success.</p></div>
        <div class="feature-card"><div class="ic">🏆</div><h4>Top Results</h4><p>Consistent 100% board results with many students scoring 90%+.</p></div>
        <div class="feature-card"><div class="ic">⚽</div><h4>Sports Facilities</h4><p>Modern playground, sports equipment, and professional coaching.</p></div>
        <div class="feature-card"><div class="ic">💻</div><h4>Smart Classrooms</h4><p>Digital learning with smart boards and modern teaching aids.</p></div>
        <div class="feature-card"><div class="ic">🎨</div><h4>Arts & Culture</h4><p>Music, dance, drama, and art programs to nurture creativity.</p></div>
        <div class="feature-card"><div class="ic">🔬</div><h4>Science Labs</h4><p>Well-equipped physics, chemistry, and biology laboratories.</p></div>
      </div>
    </section>

    <section class="about-section">
      <div class="about-inner">
        <div class="about-img"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="School"></div>
        <div class="about-content">
          <span class="section-tag">About Our School</span>
          <h3>Three Decades of <span>Educational Excellence</span></h3>
          <p>Bright Future School has been shaping young minds since 1995. What started with 50 students has grown into one of Mumbai's most respected educational institutions.</p>
          <p>We believe every child is unique and gifted. Our approach focuses on discovering and nurturing each student's individual strengths, whether academic, artistic, or athletic.</p>
          <div class="about-features">
            <div class="about-feat">CBSE Affiliated</div>
            <div class="about-feat">Smart Classrooms</div>
            <div class="about-feat">Transport Available</div>
            <div class="about-feat">Safe Campus</div>
          </div>
        </div>
      </div>
    </section>

    <section class="gallery-section">
      <div class="gallery-inner">
        <div class="section-header">
          <span class="section-tag">Campus Life</span>
          <h2 class="section-title">Life at <span>Bright Future</span></h2>
          <p class="section-desc">A glimpse into our vibrant campus and activities.</p>
        </div>
        <div class="gallery-grid">
          <div class="gallery-item"><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80" alt="Classroom"></div>
          <div class="gallery-item"><img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=400&q=80" alt="Library"></div>
          <div class="gallery-item"><img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=400&q=80" alt="Sports"></div>
          <div class="gallery-item"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80" alt="Science Lab"></div>
          <div class="gallery-item"><img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80" alt="Art Class"></div>
          <div class="gallery-item"><img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=400&q=80" alt="Playground"></div>
          <div class="gallery-item"><img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80" alt="Music Room"></div>
          <div class="gallery-item"><img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=400&q=80" alt="Graduation"></div>
        </div>
      </div>
    </section>

    <section class="testimonial-section">
      <div class="testimonial-inner">
        <div class="section-header">
          <span class="section-tag" style="color:#fbbf24;">Parent & Student Voices</span>
          <h2 class="section-title" style="color:#fff;">What Parents <span style="color:#fbbf24;">Say</span></h2>
          <p class="section-desc" style="color:#cbd5e1;">Hear from the families who are part of our journey.</p>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"Bright Future School has been a blessing for our family. Both my children are thriving — academically and personally. The teachers genuinely care."</p><div class="author"><div class="av">RK</div><div><h5>Rajesh Kumar</h5><p>Parent</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"The holistic approach to education here is exceptional. My daughter has blossomed in ways I couldn't imagine — academically, socially, and creatively."</p><div class="author"><div class="av">SM</div><div><h5>Sunita Mehta</h5><p>Parent</p></div></div></div>
          <div class="testimonial-card"><div class="stars">★★★★★</div><p class="quote">"I'm a proud alumna of Bright Future. The values and education I received here shaped who I am today. My children now study here — full circle!"</p><div class="author"><div class="av">AP</div><div><h5>Anita Patel</h5><p>Alumna & Parent</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-info">
          <h3>Apply for <span>Admission</span></h3>
          <p>Admissions are open for the academic year 2026-27. Book a campus visit today.</p>
          <div class="contact-item"><div class="ic">📞</div><div><h5>Call</h5><p>+91 93093 32775</p></div></div>
          <div class="contact-item"><div class="ic">📧</div><div><h5>Email</h5><p>xarctech@gmail.com</p></div></div>
          <div class="contact-item"><div class="ic">📍</div><div><h5>School Address</h5><p>Bandra West, Mumbai - 400050</p></div></div>
          <div class="contact-item"><div class="ic">🕒</div><div><h5>Office Hours</h5><p>Mon–Sat: 8AM – 4PM</p></div></div>
        </div>
        <form class="contact-form" onsubmit="event.preventDefault();alert('Admission enquiry sent!');">
          <h4>Admission Enquiry</h4>
          <div class="form-group"><label>Parent Name</label><input type="text" placeholder="Your name" required></div>
          <div class="form-group"><label>Phone</label><input type="tel" placeholder="+91" required></div>
          <div class="form-group"><label>Child's Grade</label><select required><option>-- Select --</option><option>Nursery</option><option>KG</option><option>Class 1-5</option><option>Class 6-8</option><option>Class 9-10</option><option>Class 11-12</option></select></div>
          <div class="form-group"><label>Message (Optional)</label><textarea placeholder="Any questions or preferences?"></textarea></div>
          <button type="submit" class="btn btn-primary">🎒 Submit Enquiry</button>
        </form>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-top">
        <div><h4>🏫 Bright Future School</h4><p>Nurturing young minds since 1995. Providing quality, holistic education that shapes future leaders.</p></div>
        <div><h4>Quick Links</h4><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Academics</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Programs</h4><ul><li><a href="#">Pre-Primary</a></li><li><a href="#">Primary</a></li><li><a href="#">Middle School</a></li><li><a href="#">High School</a></li></ul></div>
        <div><h4>Contact</h4><p>Bandra, Mumbai</p><p>+91 93093 32775</p><p>xarctech@gmail.com</p></div>
      </div>
      <div class="footer-bottom">© 2026 Bright Future School. All rights reserved. | Designed by XARC</div>
    </footer>
    </body></html>
  `

};
