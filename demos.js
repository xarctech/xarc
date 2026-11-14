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
