/* ═══════════════════════════════════════════════════
   NEXT WEB — script.js
   Handles: Language Toggle, Theme Toggle, LocalStorage,
            Mobile Menu, Scroll effects
═══════════════════════════════════════════════════ */

// ── TRANSLATIONS ────────────────────────────────────
const TRANSLATIONS = {
  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      portfolio: "أعمالنا",
      contact: "تواصل معنا",
      lang_btn: "EN",
      theme_btn_dark: "🌙 ليلي",
      theme_btn_light: "☀️ نهاري",
    },
    hero: {
      badge: "وكالة رقمية متكاملة 🚀",
      h1a: "نبني المستقبل",
      h1b: "الرقمي",
      sub: "نصمّم مواقع احترافية، تطبيقات ذكية، وهويات بصرية قوية تجعل علامتك التجارية تتصدّر المشهد.",
      cta1: "ابدأ مشروعك",
      cta2: "اكتشف أعمالنا",
      s1n: "50+", s1l: "مشروع منجز",
      s2n: "98%", s2l: "رضا العملاء",
      s3n: "5×",  s3l: "نمو متوسط",
    },
    why: {
      tag: "لماذا نحن؟",
      h: "نبيع نتائج.. ليس تصاميم",
      sub: "كل مشروع نبنيه مدروس بعناية لتحقيق أقصى عائد على استثمارك.",
      items: [
        { i: "⚡", t: "سرعة التسليم", d: "نلتزم بالمواعيد دائماً دون التنازل عن الجودة." },
        { i: "📈", t: "نتائج قابلة للقياس", d: "نتتبع الأداء ونقدم تقارير شهرية واضحة." },
        { i: "🎯", t: "استراتيجية مخصصة", d: "كل مشروع يبدأ بفهم عميق لأهداف عملك." },
        { i: "🛡️", t: "دعم مستمر", d: "نحن شريكك على المدى البعيد، ليس مجرد منفذ." },
      ],
    },
    
    services_preview: {
      tag: "خدماتنا",
      h: "حلول رقمية شاملة",
      sub: "من الفكرة إلى الإطلاق — نغطي كل ما تحتاجه",
      items: [
        { i: "💻", t: "تطوير المواقع", d: "مواقع سريعة واحترافية تحوّل الزوار إلى عملاء." },
        { i: "📱", t: "تطبيقات الجوال", d: "تطبيقات iOS وAndroid بتجربة مستخدم استثنائية." },
        { i: "🎨", t: "الهوية البصرية", d: "شعارات وهويات بصرية قوية تبقى في الأذهان." },
        { i: "📢", t: "التسويق الرقمي", d: "حملات مدروسة تضاعف مبيعاتك وتوسّع نطاق وصولك." },
      ],
    },
    cta_section: {
      h: "هل أنت مستعد لتحويل فكرتك إلى واقع؟",
      sub: "استشارة مجانية — بدون أي التزام.",
      btn: "ابدأ مشروعك الآن ✦",
    },
    services_page: {
      tag: "خدماتنا",
      h: "حلول رقمية متكاملة",
      sub: "من الفكرة إلى الإطلاق — نغطّي كل ما تحتاجه.",
      items: [
        { i: "💻", t: "تطوير المواقع", d: "نبني مواقع احترافية سريعة وقابلة للتوسّع تحوّل الزوار إلى عملاء حقيقيين.", f: ["مواقع الشركات", "المتاجر الإلكترونية", "صفحات الهبوط", "لوحات التحكم"] },
        { i: "📱", t: "تطبيقات الجوال", d: "تطبيقات iOS وAndroid بتجربة مستخدم استثنائية وأداء عالي.", f: ["تصميم UI/UX", "تطبيقات iOS", "تطبيقات Android", "تطبيقات هجينة"] },
        { i: "🎨", t: "الهوية البصرية", d: "هوية بصرية قوية تعكس قيم علامتك التجارية وتبقى في الذاكرة.", f: ["شعار احترافي", "دليل الهوية", "تصميم المطبوعات", "الحضور الرقمي"] },
        { i: "📢", t: "التسويق الرقمي", d: "حملات إعلانية مدروسة تضاعف مبيعاتك وتوسّع نطاق وصولك.", f: ["إعلانات ميتا", "إعلانات جوجل", "إدارة السوشيال ميديا", "تحسين محركات البحث"] },
        { i: "🛒", t: "المتاجر الإلكترونية", d: "نبني متاجر احترافية بتجربة تسوّق سلسة وآمنة تزيد مبيعاتك.", f: ["واجهة متجر مخصصة", "بوابات دفع آمنة", "إدارة المخزون", "تقارير المبيعات"] },
        { i: "🔧", t: "الدعم والصيانة", d: "دعم فني مستمر وصيانة دورية لضمان عمل موقعك بأفضل أداء.", f: ["تحديثات الأمان", "نسخ احتياطية", "مراقبة الأداء", "دعم فني 24/7"] },
      ],
      cta: "احصل على عرض سعر مجاني ✦",
    },
    
    portfolio_page: {
      tag: "أعمالنا",
      h: "مشاريع نفخر بها",
      sub: "نتائج حقيقية لعملاء حقيقيين.",
      items: [
        { e: "🛒", bg: "linear-gradient(135deg,#0f0c29,#302b63)", t: "متجر رونق", ty: "تجارة إلكترونية", tags: ["React", "Stripe"], d: "زيادة المبيعات بنسبة 340% خلال 3 أشهر من الإطلاق.", r: "↑340% مبيعات" },
        { e: "🏥", bg: "linear-gradient(135deg,#093028,#237a57)", t: "عيادة ميدكير", ty: "موقع شركة", tags: ["WordPress", "SEO"], d: "تضاعف الحجوزات الإلكترونية ثلاث مرات بعد إعادة التصميم.", r: "↑3x حجوزات" },
        { e: "🏨", bg: "linear-gradient(135deg,#1a0533,#4a1070)", t: "فندق لوكس", ty: "ضيافة", tags: ["Next.js", "CMS"], d: "ارتفاع إيرادات الحجز المباشر بنسبة 220%.", r: "↑220% إيرادات" },
        { e: "📱", bg: "linear-gradient(135deg,#0a1628,#1e3a6e)", t: "تطبيق فين تك", ty: "تطبيق موبايل", tags: ["React Native", "API"], d: "50,000 مستخدم في الشهر الأول من الإطلاق.", r: "50K مستخدم" },
        { e: "🍕", bg: "linear-gradient(135deg,#2d0a0a,#7a1a1a)", t: "مطعم بيتزالاند", ty: "موقع مطعم", tags: ["HTML", "CSS"], d: "زيادة الطلبات الإلكترونية بنسبة 180% خلال شهرين.", r: "↑180% طلبات" },
        { e: "📚", bg: "linear-gradient(135deg,#0a2d1a,#1a5c38)", t: "منصة تعليمية", ty: "منصة تعليم", tags: ["Vue.js", "Node.js"], d: "10,000 طالب مسجّل خلال الأسبوع الأول.", r: "10K طالب" },
      ],
    },
    contact_page: {
      tag: "تواصل معنا",
      h: "دعنا نبني شيئاً استثنائياً معاً",
      sub: "أخبرنا عن مشروعك وسنتواصل معك خلال 24 ساعة.",
      items: [
        { i: "💬", l: "واتساب", v: "+963 933020008" },
        { i: "✉️", l: "البريد الإلكتروني", v: "hello@nextweb.sy" },
        { i: "📍", l: "الموقع", v: " سوريا - دمشق - تنظيم كفرسوسة" },
        { i: "⏰", l: "وقت الاستجابة", v: "خلال 24 ساعة" },
      ],
      fn: "اسمك الكريم", fe: "بريدك الإلكتروني",
      fs: "اختر الخدمة", fs_opts: ["تطوير موقع", "تطبيق موبايل", "هوية بصرية", "تسويق رقمي", "متجر إلكتروني"],
      fb: "الميزانية التقريبية", fb_opts: ["أقل من $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+"],
      fm: "أخبرنا عن مشروعك...",
      fcta: "أرسل الرسالة ✦",
      fwa: "أو تواصل عبر واتساب",
      toast_ok: "✅ تم الإرسال! سنتواصل معك قريباً 🎉",
      toast_err: "⚠️ يرجى ملء الاسم والبريد الإلكتروني.",
    },
    footer: {
      desc: "نبني المستقبل الرقمي — مواقع، تطبيقات، وهويات بصرية تحقق نتائج قابلة للقياس.",
      pages: "الصفحات", services2: "الخدمات", contact2: "تواصل",
      rights: "© 2025 نيكست ويب. جميع الحقوق محفوظة.",
    },
    wa_float: "تواصل عبر واتساب",
  },

  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      lang_btn: "AR",
      theme_btn_dark: "🌙 Dark",
      theme_btn_light: "☀️ Light",
    },
    hero: {
      badge: "Full-Stack Digital Agency 🚀",
      h1a: "We Build the",
      h1b: "Digital Future",
      sub: "We craft high-performance websites, smart apps, and powerful brand identities that put your business at the top.",
      cta1: "Start Your Project",
      cta2: "View Our Work",
      s1n: "50+", s1l: "Projects Delivered",
      s2n: "98%", s2l: "Client Satisfaction",
      s3n: "5×",  s3l: "Avg. Growth",
    },
    why: {
      tag: "Why Us?",
      h: "We Sell Results — Not Just Designs",
      sub: "Every project we build is strategically crafted to maximize your return on investment.",
      items: [
        { i: "⚡", t: "Fast Delivery", d: "We always meet deadlines without compromising quality." },
        { i: "📈", t: "Measurable Results", d: "We track performance and deliver clear monthly reports." },
        { i: "🎯", t: "Custom Strategy", d: "Every project starts with a deep understanding of your goals." },
        { i: "🛡️", t: "Ongoing Support", d: "We're your long-term partner — not just an executor." },
      ],
    },
    services_preview: {
      tag: "Our Services",
      h: "Complete Digital Solutions",
      sub: "From concept to launch — we cover everything you need.",
      items: [
        { i: "💻", t: "Web Development", d: "Fast, professional websites that convert visitors into customers." },
        { i: "📱", t: "Mobile Apps", d: "iOS & Android apps with exceptional user experience." },
        { i: "🎨", t: "Brand Identity", d: "Powerful visual identities that stay memorable." },
        { i: "📢", t: "Digital Marketing", d: "Strategic campaigns that multiply your sales and reach." },
      ],
    },
    cta_section: {
      h: "Ready to Transform Your Idea Into Reality?",
      sub: "Free consultation — no strings attached.",
      btn: "Start Your Project ✦",
    },
    services_page: {
      tag: "Our Services",
      h: "Complete Digital Solutions",
      sub: "From concept to launch — we cover everything you need.",
      items: [
        { i: "💻", t: "Web Development", d: "We build fast, professional, and scalable websites that convert visitors into real customers.", f: ["Business Websites", "E-commerce Stores", "Landing Pages", "Admin Dashboards"] },
        { i: "📱", t: "Mobile Apps", d: "iOS & Android apps with exceptional user experience and high performance.", f: ["UI/UX Design", "iOS Apps", "Android Apps", "Cross-platform Apps"] },
        { i: "🎨", t: "Brand Identity", d: "A powerful visual identity that reflects your brand values and stays memorable.", f: ["Professional Logo", "Brand Guidelines", "Print Design", "Digital Presence"] },
        { i: "📢", t: "Digital Marketing", d: "Strategic ad campaigns that multiply your sales and expand your reach.", f: ["Meta Ads", "Google Ads", "Social Media Management", "SEO Optimization"] },
        { i: "🛒", t: "E-commerce Stores", d: "We build professional stores with smooth, secure shopping experiences that boost sales.", f: ["Custom Store UI", "Secure Payment Gateways", "Inventory Management", "Sales Reports"] },
        { i: "🔧", t: "Support & Maintenance", d: "Continuous technical support and periodic maintenance to keep your site performing at its best.", f: ["Security Updates", "Backups", "Performance Monitoring", "24/7 Support"] },
      ],
      cta: "Get a Free Quote ✦",
    },
    portfolio_page: {
      tag: "Our Work",
      h: "Projects We're Proud Of",
      sub: "Real results for real clients.",
      items: [
        { e: "🛒", bg: "linear-gradient(135deg,#0f0c29,#302b63)", t: "Ronaq Store", ty: "E-commerce", tags: ["React", "Stripe"], d: "Sales increased by 340% within 3 months of launch.", r: "↑340% Sales" },
        { e: "🏥", bg: "linear-gradient(135deg,#093028,#237a57)", t: "MediCare Clinic", ty: "Business Website", tags: ["WordPress", "SEO"], d: "Online bookings tripled after the redesign.", r: "↑3x Bookings" },
        { e: "🏨", bg: "linear-gradient(135deg,#1a0533,#4a1070)", t: "LuxStay Hotel", ty: "Hospitality", tags: ["Next.js", "CMS"], d: "Direct booking revenue increased by 220%.", r: "↑220% Revenue" },
        { e: "📱", bg: "linear-gradient(135deg,#0a1628,#1e3a6e)", t: "FinTech App", ty: "Mobile App", tags: ["React Native", "API"], d: "50,000 users in the first month of launch.", r: "50K Users" },
        { e: "🍕", bg: "linear-gradient(135deg,#2d0a0a,#7a1a1a)", t: "PizzaLand", ty: "Restaurant Website", tags: ["HTML", "CSS"], d: "Online orders increased by 180% in two months.", r: "↑180% Orders" },
        { e: "📚", bg: "linear-gradient(135deg,#0a2d1a,#1a5c38)", t: "EduPlatform", ty: "Education Platform", tags: ["Vue.js", "Node.js"], d: "10,000 students enrolled in the first week.", r: "10K Students" },
      ],
    },
    contact_page: {
      tag: "Contact Us",
      h: "Let's Build Something Extraordinary",
      sub: "Tell us about your project and we'll get back to you within 24 hours.",
      items: [
        { i: "💬", l: "WhatsApp", v: "+963 933020008" },
        { i: "✉️", l: "Email", v: "hello@nextweb.sy" },
        { i: "📍", l: "Location", v: "Syria – Damascus – Kafr Souseh District" },
        { i: "⏰", l: "Response Time", v: "Within 24 hours" },
      ],
      fn: "Your Name", fe: "Your Email",
      fs: "Select a Service", fs_opts: ["Web Development", "Mobile App", "Brand Identity", "Digital Marketing", "E-commerce"],
      fb: "Approximate Budget", fb_opts: ["Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+"],
      fm: "Tell us about your project...",
      fcta: "Send Message ✦",
      fwa: "Or Chat on WhatsApp",
      toast_ok: "✅ Sent! We'll reach out soon 🎉",
      toast_err: "⚠️ Please fill in your name and email.",
    },
    footer: {
      desc: "We build the digital future — websites, apps, and brand identities that deliver measurable results.",
      pages: "Pages", services2: "Services", contact2: "Contact",
      rights: "© 2025 Next Web. All rights reserved.",
    },
    wa_float: "WhatsApp Us",
  },
};

// ── STATE ────────────────────────────────────────────
let currentLang  = localStorage.getItem("nw_lang")  || "ar";
let currentTheme = localStorage.getItem("nw_theme") || "light";

// ── APPLY THEME ──────────────────────────────────────
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  currentTheme = theme;
  localStorage.setItem("nw_theme", theme);
  // Update all theme-toggle buttons
  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    const t = TRANSLATIONS[currentLang];
    btn.textContent = theme === "dark" ? t.nav.theme_btn_light : t.nav.theme_btn_dark;
  });
}

// ── APPLY LANGUAGE ───────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("nw_lang", lang);
  document.documentElement.lang = lang;
  document.body.dir = TRANSLATIONS[lang].dir;

  // Update lang-toggle buttons
  document.querySelectorAll(".lang-toggle-btn").forEach(btn => {
    btn.textContent = TRANSLATIONS[lang].nav.lang_btn;
  });
  // Update theme button text
  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    const t = TRANSLATIONS[lang];
    btn.textContent = currentTheme === "dark" ? t.nav.theme_btn_light : t.nav.theme_btn_dark;
  });

  // Re-render dynamic content based on current page
  const page = document.body.dataset.page;
  if (page) renderPageContent(page, lang);

  // Update nav active state labels (static nav links already have data-key)
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.dataset.i18n.split(".");
    let val = TRANSLATIONS[lang];
    keys.forEach(k => { if (val) val = val[k]; });
    if (val !== undefined) el.textContent = val;
  });
}

// ── RENDER PAGE CONTENT ──────────────────────────────
function renderPageContent(page, lang) {
  const t = TRANSLATIONS[lang];
  const container = document.getElementById("dynamic-content");
  if (!container) return;

  if (page === "index") renderHome(container, t, lang);
  else if (page === "services") renderServices(container, t, lang);
  else if (page === "portfolio") renderPortfolio(container, t, lang);
  else if (page === "contact") renderContact(container, t, lang);

  // Update WA float label
  const waFloat = document.getElementById("wa-float");
  if (waFloat) waFloat.querySelector(".wa-label").textContent = t.wa_float;
}

// ── RENDER HOME ──────────────────────────────────────
function renderHome(el, t, lang) {
  const h = t.hero, w = t.why, sp = t.services_preview, cta = t.cta_section;
  el.innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-grid-bg"></div>
      <div class="container">
        <div class="hero-content">
          <div class="tag-pill anim-fade">${h.badge}</div>
          <h1 class="anim-fade anim-d1">${h.h1a}<br/><span class="gold-text">${h.h1b}</span></h1>
          <p class="anim-fade anim-d2">${h.sub}</p>
          <div class="hero-btns anim-fade anim-d3">
            <a href="contact.html" class="btn btn-gold">${h.cta1} ✦</a>
            <a href="portfolio.html" class="btn btn-outline">${h.cta2}</a>
          </div>
          <div class="hero-stats anim-fade anim-d4">
            ${[[h.s1n,h.s1l],[h.s2n,h.s2l],[h.s3n,h.s3l]].map(([n,l]) => `
              <div class="h-stat"><h3>${n}</h3><p>${l}</p></div>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- WHY US -->
    <section class="why-section">
      <div class="container">
        <div class="section-header fi">
          <div class="tag-pill">${w.tag}</div>
          <h2>${w.h}</h2>
          <p>${w.sub}</p>
        </div>
        <div class="why-grid">
          ${w.items.map((item,i) => `
            <div class="why-card fi fi-d${i%4+1}">
              <div class="why-icon">${item.i}</div>
              <h3>${item.t}</h3>
              <p>${item.d}</p>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- SERVICES PREVIEW -->
    <section class="services-section alt-bg">
      <div class="container">
        <div class="section-header fi">
          <div class="tag-pill">${sp.tag}</div>
          <h2>${sp.h}</h2>
          <p>${sp.sub}</p>
        </div>
        <div class="services-grid">
          ${sp.items.map((s,i) => `
            <div class="svc-card fi fi-d${i%4+1}">
              <div class="svc-icon">${s.i}</div>
              <h3>${s.t}</h3>
              <p>${s.d}</p>
            </div>`).join("")}
        </div>
        <div class="center-btn fi">
          <a href="services.html" class="btn btn-outline">${lang==="ar"?"عرض جميع الخدمات →":"View All Services →"}</a>
        </div>
      </div>
    </section>
  <section class="portfolio-section">
      <div class="container">
        <div class="section-header">
          <div class="tag-pill">${lang==="ar"?"أعمالنا":"Our Work"}</div>
          <h2>${lang==="ar"?"بعض أعمالنا":"Some of Our Work"}</h2>
        </div>

        <div class="portfolio-grid">
          ${t.portfolio_page.items.slice(0,3).map(item => `
            <div class="port-card">
              <div class="port-thumb" style="background:${item.bg}">
                <span>${item.e}</span>
              </div>
              <div class="port-body">
                <h3>${item.t}</h3>
                <p>${item.d}</p>
              </div>
            </div>
          `).join("")}
        </div>

        <div style="text-align:center;margin-top:20px;">
          <a href="portfolio.html" class="btn btn-outline">
            ${lang==="ar"?"عرض كل الأعمال":"View All Work"}
          </a>
        </div>
      </div>
    </section>
    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-wrap fi">
          <h2>${cta.h}</h2>
          <p>${cta.sub}</p>
          <a href="contact.html" class="btn btn-gold btn-lg">${cta.btn}</a>
        </div>
      </div>
    </section>
  `;
  initFadeObserver();
}

// ── RENDER SERVICES ──────────────────────────────────
function renderServices(el, t, lang) {
  const s = t.services_page;
  el.innerHTML = `
    <section class="inner-page-hero">
      <div class="container">
        <div class="section-header fi">
          <div class="tag-pill">${s.tag}</div>
          <h1>${s.h}</h1>
          <p>${s.sub}</p>
        </div>
      </div>
    </section>
    <section class="services-full">
      <div class="container">
        <div class="services-grid-full">
          ${s.items.map((item,i) => `
            <div class="svc-card-full fi fi-d${i%3+1}">
              <div class="svc-icon-lg">${item.i}</div>
              <h3>${item.t}</h3>
              <p>${item.d}</p>
              <ul class="svc-features">
                ${item.f.map(f => `<li><span class="check">✦</span> ${f}</li>`).join("")}
              </ul>
            </div>`).join("")}
        </div>
        <div class="center-btn fi">
          <a href="contact.html" class="btn btn-gold btn-lg">${s.cta}</a>
        </div>
      </div>
    </section>
  `;
  initFadeObserver();
}

// ── RENDER PORTFOLIO ─────────────────────────────────
function renderPortfolio(el, t, lang) {
  const p = t.portfolio_page;
  el.innerHTML = `
    <section class="inner-page-hero">
      <div class="container">
        <div class="section-header fi">
          <div class="tag-pill">${p.tag}</div>
          <h1>${p.h}</h1>
          <p>${p.sub}</p>
        </div>
      </div>
    </section>
    <section class="portfolio-full">
      <div class="container">
        <div class="portfolio-grid">
          ${p.items.map((item,i) => `
            <div class="port-card fi fi-d${i%3+1}">
              <div class="port-thumb" style="background:${item.bg}">
                <span class="port-emoji">${item.e}</span>
                <div class="port-result">${item.r}</div>
              </div>
              <div class="port-body">
                <div class="port-type">${item.ty}</div>
                <div class="port-tags">
                  ${item.tags.map(tag => `<span class="port-tag">${tag}</span>`).join("")}
                </div>
                <h3>${item.t}</h3>
                <p>${item.d}</p>
                <a href="#" class="port-link">${lang==="ar"?"عرض المشروع →":"View Project →"}</a>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>
  `;
  initFadeObserver();
}

// ── RENDER CONTACT ───────────────────────────────────
function renderContact(el, t, lang) {
  const c = t.contact_page;
  el.innerHTML = `
    <section class="inner-page-hero">
      <div class="container">
        <div class="section-header fi">
          <div class="tag-pill">${c.tag}</div>
          <h1>${c.h}</h1>
          <p>${c.sub}</p>
        </div>
      </div>
    </section>
    <section class="contact-section">
      <div class="container">
        <div class="contact-wrap">
          <!-- Info -->
          <div class="contact-info fi">
            <div class="contact-items">
              ${c.items.map(it => `
                <div class="citem">
                  <div class="citem-icon">${it.i}</div>
                  <div>
                    <div class="citem-label">${it.l}</div>
                    <div class="citem-val">${it.v}</div>
                  </div>
                </div>`).join("")}
            </div>
          </div>
          <!-- Form -->
          <div class="cform fi fi-d2">
            <h3>${lang==="ar"?"أرسل لنا رسالة":"Send Us a Message"}</h3>
            <div class="frow">
              <div class="fgroup">
                <label>${c.fn}</label>
                <input id="f-name" type="text" placeholder="${c.fn}" />
              </div>
              <div class="fgroup">
                <label>${c.fe}</label>
                <input id="f-email" type="email" placeholder="${c.fe}" />
              </div>
            </div>
            <div class="frow">
              <div class="fgroup">
                <label>${c.fs}</label>
                <select id="f-service">
                  <option value="">${c.fs}</option>
                  ${c.fs_opts.map(o => `<option>${o}</option>`).join("")}
                </select>
              </div>
              <div class="fgroup">
                <label>${c.fb}</label>
                <select id="f-budget">
                  <option value="">${c.fb}</option>
                  ${c.fb_opts.map(o => `<option>${o}</option>`).join("")}
                </select>
              </div>
            </div>
            <div class="fgroup">
              <label>${lang==="ar"?"تفاصيل المشروع":"Project Details"}</label>
              <textarea id="f-msg" rows="5" placeholder="${c.fm}"></textarea>
            </div>
            <button class="btn btn-gold btn-full" id="submit-btn">${c.fcta}</button>
            <a href="https://wa.me/963933020008" class="btn btn-wa btn-full">${c.fwa} 💬</a>
          </div>
        </div>
      </div>
    </section>
  `;
  initFadeObserver();

  // Form submit
  document.getElementById("submit-btn").addEventListener("click", () => {
    const name  = document.getElementById("f-name").value.trim();
    const email = document.getElementById("f-email").value.trim();
    if (!name || !email) { showToast(c.toast_err, "error"); return; }
    showToast(c.toast_ok, "success");
    ["f-name","f-email","f-service","f-budget","f-msg"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });
  });
}

// ── TOAST ────────────────────────────────────────────
function showToast(msg, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("toast-show"), 10);
  setTimeout(() => {
    toast.classList.remove("toast-show");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ── FADE-IN OBSERVER ─────────────────────────────────
function initFadeObserver() {
  const els = document.querySelectorAll(".fi, .anim-fade");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("vis"); });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

// ── NAVBAR SCROLL ────────────────────────────────────
function initNavbarScroll() {
  const nav = document.getElementById("main-nav");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });
}

// ── MOBILE MENU ──────────────────────────────────────
function initMobileMenu() {
  const btn  = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    btn.classList.toggle("active");
  });
  // Close on link click
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.classList.remove("active");
    });
  });
}

// ── INIT ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved preferences
  applyTheme(currentTheme);
  applyLang(currentLang);

  // Wire lang toggle buttons
  document.querySelectorAll(".lang-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      applyLang(currentLang === "ar" ? "en" : "ar");
    });
  });

  // Wire theme toggle buttons
  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  });

  initNavbarScroll();
  initMobileMenu();
  initFadeObserver();
});
