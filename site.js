(() => {
  const body = document.body;
  const page = body.dataset.page || "Home";
  const root = "";
  const pageMap = {
    "":"HOME",
    "index":"HOME",
    "index.html":"HOME",
    "systems":"SYSTEMS",
    "systems.html":"SYSTEMS",
    "projects":"PROJECTS",
    "projects.html":"PROJECTS",
    "team":"TEAM",
    "team.html":"TEAM",
    "contact":"CONTACT",
    "contact.html":"CONTACT"
  };

  // Load V3 enhancement layer across every experience page.
  if (!document.querySelector('link[href="v3.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "v3.css";
    document.head.appendChild(link);
  }

  // Load the final stability layer after V3 so mobile containment wins the cascade.
  if (!document.querySelector('link[href="mobile-v6.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "mobile-v6.css";
    document.head.appendChild(link);
  }

  const logo = `${root}autominds-africa-logo.png`;

  function curtainMarkup(){
    return `<div id="page-curtain" aria-hidden="true"><div class="curtain-core"><div class="curtain-kicker">AUTOMINDS AFRICA / NAVIGATING</div><div class="curtain-title">OPENING <span>${page.toUpperCase()}</span></div></div></div>`;
  }
  body.insertAdjacentHTML("afterbegin", curtainMarkup());

  function resolvePageLabel(href, link){
    try {
      const url = new URL(href, window.location.href);
      const parts = url.pathname.split("/").filter(Boolean);
      const key = (parts.pop() || "index.html").toLowerCase();
      const clean = key.replace(/\.html$/i, "");
      return pageMap[key] || pageMap[clean] || link?.dataset.pageName || link?.textContent?.trim().toUpperCase() || "HOME";
    } catch (_) {
      return link?.dataset.pageName || link?.textContent?.trim().toUpperCase() || "HOME";
    }
  }

  const firstVisit = !sessionStorage.getItem("am-experience-seen");
  const arriving = sessionStorage.getItem("am-arriving");

  if(firstVisit){
    body.insertAdjacentHTML("afterbegin", `
      <div id="experience-loader" role="status" aria-live="polite">
        <div class="loader-core">
          <img src="${logo}" alt="AutoMinds Africa" />
          <div class="loader-kicker">AUTOMINDS AFRICA / SYSTEM BOOT</div>
          <div class="loader-message" id="loader-message">WORK SMARTER.<br><span>NOT HARDER.</span></div>
          <div class="loader-line"></div>
          <div class="loader-small">KAMPALA · UGANDA · AFRICA</div>
        </div>
      </div>`);
    const msg = document.querySelector("#loader-message");
    setTimeout(() => { if(msg) msg.innerHTML = `CHANGE <span>IS HERE.</span>`; }, 950);
    setTimeout(() => {
      document.querySelector("#experience-loader")?.classList.add("loader-hide");
      sessionStorage.setItem("am-experience-seen","1");
      setTimeout(() => document.querySelector("#experience-loader")?.remove(), 900);
    }, 1950);
  } else if(arriving){
    sessionStorage.removeItem("am-arriving");
    const curtain = document.querySelector("#page-curtain");
    const title = curtain?.querySelector(".curtain-title");
    if(title) title.innerHTML = `OPENING <span>${page.toUpperCase()}</span>`;
    curtain?.classList.add("show");
    setTimeout(() => { curtain?.classList.remove("show"); curtain?.classList.add("leave"); }, 420);
    setTimeout(() => curtain?.classList.remove("leave"), 1100);
  }

  // Internal page navigation with branded opening card.
  document.addEventListener("click", e => {
    const link = e.target.closest("a[data-page-link]");
    if(!link) return;
    if(e.metaKey || e.ctrlKey || e.shiftKey || link.target === "_blank") return;
    const href = link.getAttribute("href");
    if(!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
    const label = resolvePageLabel(href, link);
    e.preventDefault();
    const curtain = document.querySelector("#page-curtain");
    const title = curtain?.querySelector(".curtain-title");
    if(title) title.innerHTML = `OPENING <span>${label}</span>`;
    curtain?.classList.remove("leave");
    curtain?.classList.add("show");
    sessionStorage.setItem("am-arriving", label);
    setTimeout(() => { window.location.href = href; }, 500);
  });

  // Kampala clock.
  function updateClock(){
    const clock = document.querySelector("[data-kampala-clock]");
    if(!clock) return;
    const v = new Intl.DateTimeFormat("en-GB",{timeZone:"Africa/Kampala",hour:"2-digit",minute:"2-digit",hour12:false}).format(new Date());
    clock.textContent = `${v} EAT`;
  }
  updateClock(); setInterval(updateClock,30000);

  // Mobile navigation.
  const menu = document.querySelector(".exp-menu");
  const nav = document.querySelector(".exp-nav");
  menu?.addEventListener("click",()=>{
    const open = nav?.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(!!open));
  });

  // Replace the old human-evolution rail with the AutoMinds business-flight story.
  function upgradeEvolutionRails(){
    document.querySelectorAll(".evolution-rail").forEach(rail => {
      rail.className = "business-flight-rail";
      rail.innerHTML = `
        <div class="flight-half flight-before" aria-hidden="true">
          <div class="flight-scene-label"><b>BUSINESS BEFORE AUTOMINDS AFRICA</b><span>Manual work. Scattered tools. Repeated follow-up. Limited visibility.</span></div>
          <div class="storm-cloud c1"></div><div class="storm-cloud c2"></div><div class="storm-cloud c3"></div><div class="rain-field"></div><div class="flight-ground"></div>
        </div>
        <div class="flight-half flight-after" aria-hidden="true">
          <div class="flight-scene-label"><b>WITH AUTOMINDS AFRICA</b><span>Connected systems. Clear workflows. Better visibility. Growth with direction.</span></div>
          <div class="sun-ray"></div><div class="sun-orb"></div><div class="clear-cloud a"></div><div class="clear-cloud b"></div><div class="flight-ground"></div>
        </div>
        <div class="flight-divider" aria-hidden="true"></div>
        <div class="flight-plane" aria-label="Business journey from manual operations to growth with AutoMinds Africa">
          <svg viewBox="0 0 100 100" role="img" aria-hidden="true"><path d="M8 52 87 20c4-2 7 3 4 6L66 49l23 11c3 1 3 6 0 7L76 71 57 59 43 82c-2 4-8 2-7-3l5-27-29 7c-5 1-8-5-4-7Z"/><path class="plane-accent" d="M41 52 66 49l-9 10-14 23-7-3 5-27Z"/></svg>
        </div>
        <div class="flight-label-strip"><b>BUSINESS JOURNEY</b><span>MANUAL → SMART DIGITAL SOLUTIONS → CONNECTED → GROWING</span></div>`;
    });
  }
  upgradeEvolutionRails();

  // Visible naming update: position the company around Smart Digital Solutions.
  function refreshVisibleLanguage(){
    const autoTab = document.querySelector('[data-system="automation"] b');
    if(autoTab) autoTab.textContent = "Smart Digital Solutions";
    const filter = document.querySelector('[data-project-filter="automation"]');
    if(filter) filter.textContent = "SMART DIGITAL SOLUTIONS";

    document.querySelectorAll(".record h3").forEach(h => {
      if(h.textContent.trim() === "Google Workspace Automation") h.textContent = "Google Workspace Smart Digital Solutions";
    });
    document.querySelectorAll(".project-card2 h3").forEach(h => {
      if(h.textContent.trim() === "School Administration Automation") h.textContent = "School Administration Smart Digital Solutions";
    });
    document.querySelectorAll(".project-card-top span").forEach(s => {
      if(s.textContent.includes("AUTOMATION")) s.textContent = s.textContent.replace("AUTOMATION","SMART DIGITAL SOLUTIONS");
    });
  }
  refreshVisibleLanguage();

  // Premium footer on every page.
  function upgradeFooter(){
    const footer = document.querySelector(".exp-footer");
    if(!footer) return;
    footer.innerHTML = `
      <div class="exp-footer-v3">
        <section class="footer-v3-col footer-v3-brand">
          <img src="autominds-africa-logo.png" alt="AutoMinds Africa" />
          <h3>Work Smarter. Not Harder.</h3>
          <p>AI, Smart Digital Solutions, Smart Digital Business Cards, dashboards, websites and connected business systems built from Uganda for African organizations and individuals.</p>
        </section>
        <nav class="footer-v3-col" aria-label="Footer explore">
          <div class="footer-v3-title">EXPLORE</div>
          <div class="footer-v3-links"><a href="index.html" data-page-link>Home</a><a href="systems.html" data-page-link>Systems</a><a href="projects.html" data-page-link>Projects</a><a href="team.html" data-page-link>Team</a><a href="contact.html" data-page-link>Contact</a></div>
        </nav>
        <section class="footer-v3-col">
          <div class="footer-v3-title">SOLUTIONS</div>
          <div class="footer-v3-links"><span>AI Assistants</span><span>Smart Digital Solutions</span><span>Smart Digital Business Cards</span><span>CRM & Business OS</span><span>Dashboards & Reporting</span><span>Websites & Web Apps</span></div>
        </section>
        <section class="footer-v3-col footer-v3-contact">
          <div class="footer-v3-title">CONNECT</div>
          <a href="mailto:automindsafrica@gmail.com">automindsafrica@gmail.com</a>
          <a href="tel:+256783025667">+256 783 025 667</a>
          <a href="https://wa.me/256783025667" target="_blank" rel="noopener">WhatsApp ↗</a>
          <span>Kampala, Uganda</span>
          <a class="footer-v3-demo" href="https://autominds-social-links.netlify.app/" target="_blank" rel="noopener">VIEW SMART PROFILE DEMO ↗</a>
        </section>
      </div>
      <div class="exp-footer-bottom"><span>© 2026 AutoMinds Africa · Kampala, Uganda</span><span>WORK SMARTER. NOT HARDER.</span></div>`;
  }
  upgradeFooter();

  // Dedicated Smart Digital Business Cards feature experience on Projects.
  function insertSmartCardSpotlight(){
    if(page.toLowerCase() !== "projects" || document.querySelector(".smart-card-spotlight")) return;
    const anchor = document.querySelector(".business-flight-rail") || document.querySelector(".evolution-rail");
    if(!anchor) return;
    anchor.insertAdjacentHTML("afterend", `
      <section class="smart-card-spotlight" id="smart-cards">
        <div class="section-head2">
          <div>
            <p class="exp-eyebrow">SMART DIGITAL BUSINESS CARDS</p>
            <h2>A smarter identity for <span>individuals and businesses.</span></h2>
            <div class="smart-card-badge-row"><span>NFC + QR</span><span>LIVE PROFILE</span><span>PERSONAL DASHBOARD</span><span>BUSINESS DASHBOARD</span><span>PROFILE SWITCHERS</span></div>
          </div>
          <p>Each customized card opens an editable digital profile. Individuals manage their own identity. Businesses can manage multiple profiles, staff cards and brand consistency from a business dashboard.</p>
        </div>

        <div class="nfc-video-layout">
          <div class="nfc-video-shell">
            <video id="nfc-video" autoplay muted loop playsinline controls preload="metadata" aria-label="AutoMinds Africa Smart Digital Business Cards explainer">
              <source src="AMF-NFC%20LANDSCAPE%20(1).mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <div class="nfc-unmute-wrap" id="nfc-unmute-wrap">
              <div class="unmute-cue" id="unmute-cue"><span>VIDEO IS PLAYING MUTED</span><i>→</i></div>
              <button class="nfc-unmute" id="nfc-unmute" type="button" aria-pressed="false">🔊 UNMUTE</button>
            </div>
          </div>
          <aside class="nfc-video-meta">
            <div>
              <span class="video-code">LIVE / PRODUCT EXPLAINER</span>
              <h3>Tap once. Open a living digital identity.</h3>
              <p>Watch how our NFC cards connect a physical branded card to a digital profile that can keep changing after the card has already been printed.</p>
            </div>
            <a class="demo-link" href="https://autominds-social-links.netlify.app/" target="_blank" rel="noopener"><span>OPEN SMART PROFILE DEMO</span><b>↗</b></a>
          </aside>
        </div>

        <div class="smart-audience-grid">
          <article class="smart-audience-card"><span class="aud-code">01 / INDIVIDUAL</span><h3>Your profile. Your dashboard.</h3><p>Built for professionals, executives, consultants and creators who need one editable digital identity behind their customized card.</p><ul><li>Personal dashboard for only your profile</li><li>Contact, WhatsApp, email, website and social actions</li><li>Portfolio, services, booking, map and payment links</li><li>Profile switchers and custom features when required</li></ul></article>
          <article class="smart-audience-card"><span class="aud-code">02 / BUSINESS</span><h3>One dashboard. Multiple business identities.</h3><p>Businesses can operate a central dashboard for staff profiles and smart cards while keeping the brand and information easier to manage.</p><ul><li>Business-level dashboard</li><li>Multiple staff or business profiles</li><li>Profile switchers and centralized management</li><li>Custom integrations and advanced feature expansion</li></ul></article>
        </div>

        <div class="smart-pricing">
          <div class="price-block"><small>BASIC CUSTOMIZED CARD</small><strong>UGX 100,000</strong><span>Customized branding + Smart Digital Business Card</span></div>
          <div class="price-block"><small>MONTHLY SUBSCRIPTION</small><strong>UGX 20,000</strong><span>Active digital profile and ongoing access</span></div>
          <div class="price-note"><b>CUSTOM REQUIREMENTS</b><p>Business dashboards, multi-profile management, profile switchers, integrations and other advanced features are priced according to what the client needs.</p></div>
        </div>
      </section>`);
  }
  insertSmartCardSpotlight();

  function setupNfcVideo(){
    const video = document.querySelector("#nfc-video");
    const button = document.querySelector("#nfc-unmute");
    const wrap = document.querySelector("#nfc-unmute-wrap");
    if(!video || !button || !wrap) return;

    const sync = () => {
      const soundOn = !video.muted && video.volume > 0;
      wrap.classList.toggle("sound-on", soundOn);
      button.classList.toggle("is-on", soundOn);
      button.setAttribute("aria-pressed", String(soundOn));
      button.textContent = soundOn ? "🔇 MUTE" : "🔊 UNMUTE";
    };

    button.addEventListener("click", async () => {
      video.muted = !video.muted;
      if(!video.muted && video.volume === 0) video.volume = 1;
      try { await video.play(); } catch (_) {}
      sync();
    });
    video.addEventListener("volumechange", sync);
    video.addEventListener("play", sync);
    sync();
  }
  setupNfcVideo();

  function enhanceSmartCardProjectCard(){
    const card = [...document.querySelectorAll(".project-card2")].find(c => c.querySelector("h3")?.textContent.trim() === "Smart Digital Business Cards");
    if(!card) return;
    const p = card.querySelector("p");
    if(p) p.textContent = "Customized NFC + QR cards connected to editable profiles for individuals and multi-profile business dashboards for teams, with profile switching and flexible feature expansion.";
    const actions = card.querySelector(".project-actions");
    if(actions) actions.innerHTML = `<a href="https://autominds-social-links.netlify.app/" target="_blank" rel="noopener">LIVE DEMO ↗</a><a href="contact.html" data-page-link>DISCUSS SOLUTION</a>`;
  }
  enhanceSmartCardProjectCard();

  // Reveal system.
  const revealNodes = document.querySelectorAll(".section-head2,.record,.project-card2,.person2,.contact-panel,.project-feature,.project-list a,.smart-card-spotlight,.smart-audience-card");
  revealNodes.forEach(n=>n.classList.add("reveal2"));
  if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
    const io = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in");io.unobserve(entry.target)}}),{threshold:.1});
    revealNodes.forEach(n=>io.observe(n));
  } else revealNodes.forEach(n=>n.classList.add("in"));

  // Systems page interactive workspace.
  const systemData = {
    command:{code:"01 / COMMAND CENTER",title:"Business Operating System",desc:"One connected layer for leads, clients, projects, tasks, invoices, reporting and smart digital workflows.",nodes:[["LEAD IN","forms · WhatsApp","blue"],["CRM","clients · pipeline",""],["OPERATIONS","projects · tasks","navy"],["VISIBILITY","dashboards · reports","orange"]],note:"A reliable operating system turns scattered actions into visible next steps.",note2:"ROLE BASED · MOBILE READY · AUDITABLE"},
    ai:{code:"02 / AI WORKFLOW",title:"AI Customer Assistant",desc:"AI enters where repetitive communication needs speed, structure and a clear human handoff.",nodes:[["MESSAGE","WhatsApp · web","blue"],["AI AGENT","understand · answer","navy"],["ACTION","book · qualify · route","orange"],["CRM","capture · follow-up",""]],note:"AI handles the repeatable. People handle the important exceptions.",note2:"24/7 READY · HUMAN ESCALATION"},
    identity:{code:"03 / SMART IDENTITY",title:"NFC + QR Professional Profile",desc:"A physical card becomes the trigger for a digital identity that can keep evolving after print.",nodes:[["TAP","NFC","orange"],["SCAN","QR","blue"],["PROFILE","brand · details","navy"],["ACT","save · WhatsApp · book",""]],note:"One card. One profile. Update the information without replacing the identity.",note2:"INDIVIDUALS · BUSINESSES · TEAMS"},
    automation:{code:"04 / SMART DIGITAL SOLUTIONS",title:"Connected Smart Workflow Engine",desc:"Forms, Sheets, Docs, Gmail, Drive, Calendar and APIs move together around the actual process.",nodes:[["INPUT","form · email","blue"],["RULE","validate · route",""] ,["CONNECT","docs · alerts","navy"],["REPORT","status · export","orange"]],note:"Digitize the handoffs people repeat. Keep important human decisions visible.",note2:"GOOGLE WORKSPACE · APIs · DATA"},
    build:{code:"05 / BUILD LAB",title:"Websites + Web Applications",desc:"Interfaces designed around the operation behind them: service sites, portals, booking flows and internal tools.",nodes:[["DISCOVER","users · problem","blue"],["DESIGN","flow · interface",""] ,["BUILD","web · integration","navy"],["SHIP","test · deploy","orange"]],note:"Build less, connect better, maintain what matters.",note2:"MOBILE FIRST · SECURE · FAST"}
  };
  function renderSystem(key){
    const item=systemData[key], canvas=document.querySelector("#system-canvas2"); if(!item||!canvas)return;
    canvas.innerHTML=`<div class="page-code">${item.code}</div><h3>${item.title}</h3><p>${item.desc}</p><div class="sys-flow">${item.nodes.map((n,i)=>`${i?'<span class="sys-arrow">→</span>':''}<div class="sys-node ${n[2]}"><strong>${n[0]}</strong><small>${n[1]}</small></div>`).join("")}</div><div class="sys-note">${item.note}</div><div class="sys-note orange">${item.note2}</div>`;
  }
  document.querySelectorAll("[data-system]").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll("[data-system]").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderSystem(btn.dataset.system);
  }));
  if(document.querySelector("#system-canvas2")) renderSystem("command");

  // Projects filters.
  document.querySelectorAll("[data-project-filter]").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll("[data-project-filter]").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
    const f=btn.dataset.projectFilter;
    document.querySelectorAll(".project-card2").forEach(card=>card.classList.toggle("hidden",f!=="all" && card.dataset.category!==f));
  }));
})();
