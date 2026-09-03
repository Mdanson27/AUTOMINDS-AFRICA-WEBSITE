(() => {
  const body = document.body;
  const page = body.dataset.page || "Home";
  const root = "";
  const pageMap = {
    "index.html":"HOME",
    "systems.html":"SYSTEMS",
    "projects.html":"PROJECTS",
    "team.html":"TEAM",
    "contact.html":"CONTACT"
  };

  const logo = `${root}autominds-africa-logo.png`;

  function curtainMarkup(){
    return `<div id="page-curtain" aria-hidden="true"><div class="curtain-core"><div class="curtain-kicker">AUTOMINDS AFRICA / NAVIGATING</div><div class="curtain-title">OPENING <span>${page.toUpperCase()}</span></div></div></div>`;
  }
  body.insertAdjacentHTML("afterbegin", curtainMarkup());

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
    curtain?.classList.add("show");
    setTimeout(() => { curtain?.classList.remove("show"); curtain?.classList.add("leave"); }, 420);
    setTimeout(() => curtain?.classList.remove("leave"), 1100);
  }

  // Internal page navigation with branded opening card
  document.addEventListener("click", e => {
    const link = e.target.closest("a[data-page-link]");
    if(!link) return;
    if(e.metaKey || e.ctrlKey || e.shiftKey || link.target === "_blank") return;
    const href = link.getAttribute("href");
    if(!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
    const file = href.split("#")[0] || "index.html";
    const label = pageMap[file] || link.dataset.pageName || "PAGE";
    e.preventDefault();
    const curtain = document.querySelector("#page-curtain");
    const title = curtain?.querySelector(".curtain-title");
    if(title) title.innerHTML = `OPENING <span>${label}</span>`;
    curtain?.classList.remove("leave");
    curtain?.classList.add("show");
    sessionStorage.setItem("am-arriving", label);
    setTimeout(() => { window.location.href = href; }, 500);
  });

  // Kampala clock
  function updateClock(){
    const clock = document.querySelector("[data-kampala-clock]");
    if(!clock) return;
    const v = new Intl.DateTimeFormat("en-GB",{timeZone:"Africa/Kampala",hour:"2-digit",minute:"2-digit",hour12:false}).format(new Date());
    clock.textContent = `${v} EAT`;
  }
  updateClock(); setInterval(updateClock,30000);

  // Mobile navigation
  const menu = document.querySelector(".exp-menu");
  const nav = document.querySelector(".exp-nav");
  menu?.addEventListener("click",()=>{
    const open = nav?.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(!!open));
  });

  // Progressive human evolution rail: crawl -> toddler -> child -> teen -> adult
  const figures = [
    `<svg viewBox="0 0 100 100" aria-label="Crawling baby"><circle cx="30" cy="51" r="9" fill="#ff7900"/><path d="M38 56c10 1 16 5 21 12l12 2M47 61 35 73M59 67l-2 12M35 73l-12 2" fill="none" stroke="#145cff" stroke-width="7" stroke-linecap="round"/><circle cx="72" cy="72" r="4" fill="#06182d"/></svg>`,
    `<svg viewBox="0 0 100 100" aria-label="Toddler"><circle cx="50" cy="24" r="10" fill="#ff7900"/><path d="M50 35v28M50 45 36 56M50 46l15 7M50 62 40 83M50 62l12 20" fill="none" stroke="#145cff" stroke-width="7" stroke-linecap="round"/></svg>`,
    `<svg viewBox="0 0 100 100" aria-label="Child walking"><circle cx="48" cy="20" r="9" fill="#ff7900"/><path d="M48 31 51 59M50 42 33 50M50 42l17 4M51 59 35 79M51 59l18 16" fill="none" stroke="#145cff" stroke-width="7" stroke-linecap="round"/></svg>`,
    `<svg viewBox="0 0 100 100" aria-label="Teenager"><circle cx="48" cy="17" r="8" fill="#ff7900"/><path d="M48 27 51 58M50 38 33 46M50 38l18 7M51 58 36 82M51 58l20 21" fill="none" stroke="#0a2442" stroke-width="7" stroke-linecap="round"/></svg>`,
    `<svg viewBox="0 0 100 100" aria-label="Adult"><circle cx="48" cy="15" r="8" fill="#ff7900"/><path d="M48 25 50 57M50 35 31 47M50 35l20 5M50 57 33 85M50 57l23 24" fill="none" stroke="#06182d" stroke-width="8" stroke-linecap="round"/><path d="M45 30h12" stroke="#145cff" stroke-width="3"/></svg>`
  ];
  const stage = document.querySelector(".evolution-stage");
  if(stage){
    let phase = 0;
    stage.innerHTML = figures[0];
    setInterval(()=>{ phase=(phase+1)%figures.length; stage.innerHTML=figures[phase]; },2200);
  }

  // Reveal system
  const revealNodes = document.querySelectorAll(".section-head2,.record,.project-card2,.person2,.contact-panel,.project-feature,.project-list a");
  revealNodes.forEach(n=>n.classList.add("reveal2"));
  if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
    const io = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in");io.unobserve(entry.target)}}),{threshold:.1});
    revealNodes.forEach(n=>io.observe(n));
  } else revealNodes.forEach(n=>n.classList.add("in"));

  // Systems page interactive workspace
  const systemData = {
    command:{code:"01 / COMMAND CENTER",title:"Business Operating System",desc:"One connected layer for leads, clients, projects, tasks, invoices, reporting and automations.",nodes:[["LEAD IN","forms · WhatsApp","blue"],["CRM","clients · pipeline",""],["OPERATIONS","projects · tasks","navy"],["VISIBILITY","dashboards · reports","orange"]],note:"A reliable operating system turns scattered actions into visible next steps.",note2:"ROLE BASED · MOBILE READY · AUDITABLE"},
    ai:{code:"02 / AI WORKFLOW",title:"AI Customer Assistant",desc:"AI enters where repetitive communication needs speed, structure and a clear human handoff.",nodes:[["MESSAGE","WhatsApp · web","blue"],["AI AGENT","understand · answer","navy"],["ACTION","book · qualify · route","orange"],["CRM","capture · follow-up",""]],note:"AI handles the repeatable. People handle the important exceptions.",note2:"24/7 READY · HUMAN ESCALATION"},
    identity:{code:"03 / SMART IDENTITY",title:"NFC + QR Professional Profile",desc:"A physical card becomes the trigger for a digital identity that can keep evolving after print.",nodes:[["TAP","NFC","orange"],["SCAN","QR","blue"],["PROFILE","brand · details","navy"],["ACT","save · WhatsApp · book",""]],note:"One card. One profile. Update the information without replacing the identity.",note2:"EXECUTIVES · TEAMS · EVENTS"},
    automation:{code:"04 / AUTOMATION",title:"Connected Workflow Engine",desc:"Forms, Sheets, Docs, Gmail, Drive, Calendar and APIs move together around the actual process.",nodes:[["INPUT","form · email","blue"],["RULE","validate · route",""] ,["AUTOMATE","docs · alerts","navy"],["REPORT","status · export","orange"]],note:"Automate the handoffs people repeat. Keep human decisions visible.",note2:"GOOGLE WORKSPACE · APIs · DATA"},
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

  // Projects filters
  document.querySelectorAll("[data-project-filter]").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll("[data-project-filter]").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
    const f=btn.dataset.projectFilter;
    document.querySelectorAll(".project-card2").forEach(card=>card.classList.toggle("hidden",f!=="all" && card.dataset.category!==f));
  }));
})();
