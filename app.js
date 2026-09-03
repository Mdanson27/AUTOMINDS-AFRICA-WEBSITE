const workspacePanels = {
  command: {
    label: "COMMAND CENTER",
    status: "BENCH · LIVE",
    title: "One operating layer for the work that matters.",
    intro: "A connected view of leads, clients, projects, tasks, invoices, reports and automations.",
    markup: `
      <div class="flow-title"><span>COMMAND CENTER</span><h3>Business Operating System</h3><p>Bring the moving parts of a growing organization into one reliable workflow.</p></div>
      <div class="flow-node blue" style="left:8%;top:39%"><strong>LEAD IN</strong><small>forms · WhatsApp</small></div>
      <div class="flow-node" style="left:31%;top:39%"><strong>CRM</strong><small>clients · pipeline</small></div>
      <div class="flow-node navy" style="left:54%;top:39%"><strong>OPERATIONS</strong><small>projects · tasks</small></div>
      <div class="flow-node orange" style="left:78%;top:39%"><strong>VISIBILITY</strong><small>dashboard · reports</small></div>
      <div class="flow-line" style="left:21%;top:44%;width:9%"></div>
      <div class="flow-line" style="left:44%;top:44%;width:9%"></div>
      <div class="flow-line" style="left:67%;top:44%;width:10%"></div>
      <div class="sticky blue" style="left:16%;top:69%">One source of truth beats five disconnected spreadsheets.</div>
      <div class="sticky orange" style="right:9%;top:67%">Automation should make the workflow easier to trust — not harder to understand.</div>
      <span class="micro-badge" style="left:7%;bottom:7%">ROLE BASED</span><span class="micro-badge" style="left:20%;bottom:7%">MOBILE READY</span><span class="micro-badge" style="left:35%;bottom:7%">AUDITABLE</span>
    `
  },
  ai: {
    label: "AI WORKFLOW",
    status: "AGENTS · ACTIVE",
    title: "AI that enters the workflow at the right point.",
    intro: "Assistants for customer support, lead capture, qualification, booking, routing and team handoff.",
    markup: `
      <div class="flow-title"><span>AI WORKFLOW</span><h3>Customer Assistant Loop</h3><p>Keep response speed high while making human escalation explicit.</p></div>
      <div class="flow-node round blue" style="left:8%;top:38%"><strong>MESSAGE</strong><small>WhatsApp</small></div>
      <div class="flow-node navy" style="left:29%;top:40%"><strong>AI AGENT</strong><small>understand · answer</small></div>
      <div class="flow-node" style="left:53%;top:26%"><strong>RESOLVE</strong><small>FAQ · booking</small></div>
      <div class="flow-node orange" style="left:53%;top:55%"><strong>HAND OFF</strong><small>human team</small></div>
      <div class="flow-node green" style="left:78%;top:40%"><strong>CRM UPDATE</strong><small>capture · follow-up</small></div>
      <div class="flow-line" style="left:18%;top:46%;width:10%"></div><div class="flow-line" style="left:42%;top:43%;width:10%;transform:rotate(-12deg)"></div><div class="flow-line" style="left:42%;top:47%;width:10%;transform:rotate(13deg)"></div><div class="flow-line" style="left:66%;top:43%;width:11%;transform:rotate(12deg)"></div><div class="flow-line" style="left:66%;top:61%;width:11%;transform:rotate(-13deg)"></div>
      <div class="sticky white" style="left:27%;top:70%">AI handles the repeatable. People handle the important exceptions.</div>
      <span class="micro-badge" style="right:7%;bottom:7%">24/7 READY</span><span class="micro-badge" style="right:21%;bottom:7%">ESCALATION PATH</span>
    `
  },
  identity: {
    label: "SMART IDENTITY",
    status: "NFC · QR",
    title: "Turn every introduction into an action-ready connection.",
    intro: "Tap, scan, save, message, book, pay, view services and keep the profile updateable.",
    markup: `
      <div class="flow-title"><span>SMART IDENTITY</span><h3>NFC + QR Professional Profile</h3><p>A physical card becomes the trigger for a digital, editable business identity.</p></div>
      <div class="flow-node orange round" style="left:8%;top:38%"><strong>TAP</strong><small>NFC</small></div>
      <div class="flow-node blue round" style="left:27%;top:38%"><strong>SCAN</strong><small>QR</small></div>
      <div class="flow-node navy" style="left:48%;top:39%"><strong>PROFILE</strong><small>brand · details</small></div>
      <div class="flow-node" style="left:72%;top:24%"><strong>SAVE</strong><small>contact</small></div>
      <div class="flow-node" style="left:72%;top:42%"><strong>ACT</strong><small>call · WhatsApp</small></div>
      <div class="flow-node" style="left:72%;top:60%"><strong>EXPLORE</strong><small>services · portfolio</small></div>
      <div class="flow-line" style="left:18%;top:46%;width:8%"></div><div class="flow-line" style="left:37%;top:46%;width:10%"></div><div class="flow-line" style="left:61%;top:43%;width:10%;transform:rotate(-14deg)"></div><div class="flow-line" style="left:61%;top:46%;width:10%"></div><div class="flow-line" style="left:61%;top:49%;width:10%;transform:rotate(14deg)"></div>
      <div class="sticky blue" style="left:17%;top:71%">One card. One profile. Update the information without replacing the identity.</div>
      <span class="micro-badge" style="right:8%;bottom:7%">EXECUTIVES</span><span class="micro-badge" style="right:21%;bottom:7%">TEAMS</span><span class="micro-badge" style="right:30%;bottom:7%">EVENTS</span>
    `
  },
  build: {
    label: "BUILD LAB",
    status: "WEB · SYSTEMS",
    title: "Design the interface around the operation behind it.",
    intro: "Websites, portals, booking flows and internal tools that connect presentation to action.",
    markup: `
      <div class="flow-title"><span>BUILD LAB</span><h3>From workflow to shipped system</h3><p>Start with the problem, reuse what is dependable, then create only what the workflow actually needs.</p></div>
      <div class="flow-node" style="left:7%;top:38%"><strong>BRIEF</strong><small>problem · users</small></div>
      <div class="flow-node blue" style="left:26%;top:38%"><strong>MAP</strong><small>roles · data</small></div>
      <div class="flow-node" style="left:45%;top:38%"><strong>REUSE?</strong><small>patterns · tools</small></div>
      <div class="flow-node navy" style="left:64%;top:25%"><strong>INTEGRATE</strong><small>known system</small></div>
      <div class="flow-node orange" style="left:64%;top:55%"><strong>BUILD</strong><small>new capability</small></div>
      <div class="flow-node green" style="left:83%;top:38%"><strong>SHIP</strong><small>test · deploy</small></div>
      <div class="flow-line" style="left:19%;top:44%;width:6%"></div><div class="flow-line" style="left:38%;top:44%;width:6%"></div><div class="flow-line" style="left:57%;top:42%;width:6%;transform:rotate(-15deg)"></div><div class="flow-line" style="left:57%;top:47%;width:6%;transform:rotate(15deg)"></div><div class="flow-line" style="left:76%;top:35%;width:6%;transform:rotate(15deg)"></div><div class="flow-line" style="left:76%;top:61%;width:6%;transform:rotate(-15deg)"></div>
      <div class="sticky orange" style="left:13%;top:69%">Build less, connect better, maintain what matters.</div>
    `
  },
  growth: {
    label: "GROWTH SYSTEMS",
    status: "CRM · DATA",
    title: "Make follow-up visible before opportunities disappear.",
    intro: "Capture leads, assign next actions, track pipeline health and turn activity into management visibility.",
    markup: `
      <div class="flow-title"><span>GROWTH SYSTEMS</span><h3>Lead → Client → Relationship</h3><p>Give sales, marketing and management one shared view of what needs action next.</p></div>
      <div class="flow-node blue" style="left:7%;top:39%"><strong>CAPTURE</strong><small>web · referral</small></div>
      <div class="flow-node" style="left:27%;top:39%"><strong>QUALIFY</strong><small>fit · need</small></div>
      <div class="flow-node navy" style="left:47%;top:39%"><strong>PIPELINE</strong><small>owner · stage</small></div>
      <div class="flow-node orange" style="left:67%;top:39%"><strong>FOLLOW UP</strong><small>task · reminder</small></div>
      <div class="flow-node green" style="left:84%;top:39%"><strong>REPORT</strong><small>visibility</small></div>
      <div class="flow-line" style="left:19%;top:44%;width:7%"></div><div class="flow-line" style="left:39%;top:44%;width:7%"></div><div class="flow-line" style="left:59%;top:44%;width:7%"></div><div class="flow-line" style="left:79%;top:44%;width:4%"></div>
      <div class="sticky blue" style="left:24%;top:70%">A pipeline is useful only when every record points to a next action.</div>
      <span class="micro-badge" style="right:7%;bottom:7%">SALES</span><span class="micro-badge" style="right:16%;bottom:7%">MARKETING</span><span class="micro-badge" style="right:29%;bottom:7%">LEADERSHIP</span>
    `
  }
};

const projectData = {
  smart: {
    tag: "DIGITAL IDENTITY / LIVE OFFERING",
    status: "● CLIENT READY",
    title: "Smart Digital Business Cards",
    description: "NFC and QR profiles that turn a physical card into a living business identity.",
    points: ["Tap + QR fallback", "Save contact + WhatsApp", "Services, portfolio + booking", "Profile can evolve after print"]
  },
  ai: {
    tag: "AI AGENTS / CUSTOMER EXPERIENCE",
    status: "● DEMO READY",
    title: "AI WhatsApp Assistants",
    description: "Business-trained assistants that answer, capture, route and escalate without losing the human handoff.",
    points: ["FAQ + lead capture", "Bookings + orders", "Escalation paths", "CRM-ready structured data"]
  },
  crm: {
    tag: "BUSINESS SYSTEMS / OPERATIONS",
    status: "● BUILD SYSTEM",
    title: "CRM & Operations Systems",
    description: "Custom operating layers that connect clients, projects, tasks, invoices, teams, reporting and notifications.",
    points: ["Role-based access", "Pipeline + follow-up", "Projects + tasks", "Invoices + reports"]
  },
  edu: {
    tag: "EDUCATION / AUTOMATION",
    status: "● CLIENT READY CONCEPT",
    title: "School & Administration Automation",
    description: "Digital workflows for admissions, records, expenses, stock, reporting and document generation.",
    points: ["Admissions workflows", "Google Workspace integration", "Records + reporting", "Document automation"]
  },
  loyalty: {
    tag: "CUSTOMER RETENTION / PLATFORM",
    status: "● PROTOTYPE",
    title: "Loyalty Platforms",
    description: "Structured points, customer profiles, rewards and dashboards that make repeat relationships visible.",
    points: ["Customer profiles", "Points + rewards", "Activity history", "Owner dashboard"]
  }
};

const terminalCommands = {
  help: ["ok", "commands: products · team · projects · contact · about · smartcards · ai · clear"],
  products: ["ok", "AI Agents / Business OS / Smart Digital Cards / Automation / Dashboards / Web Apps / CRM"],
  team: ["ok", "09 people: Danson · Hussein · Patrick · Osbert · Edward · Gladys · Timothy · Mitchel · Chris"],
  projects: ["ok", "Smart Cards · AI WhatsApp Assistants · CRM & Operations · School Automation · Dashboards · Loyalty Platforms"],
  contact: ["ok", "automindsafrica@gmail.com · +256 783 025 667 · Kampala, Uganda"],
  about: ["ok", "AutoMinds Africa — founded 18 July 2025 in Kampala. Built from Uganda for African organizations."],
  smartcards: ["ok", "NFC + QR → branded profile → save contact / WhatsApp / website / services / booking / payment actions"],
  ai: ["ok", "AI agents for FAQs, bookings, lead capture, orders, routing and human escalation."],
};

function renderWorkspace(key = "command") {
  const panel = workspacePanels[key];
  const canvas = document.querySelector("#workspace-canvas");
  if (!canvas || !panel) return;
  canvas.innerHTML = panel.markup;
  document.querySelector("#crumb-label").textContent = panel.label;
  document.querySelector("#bench-status").textContent = panel.status;
}

function renderProject(key = "smart") {
  const item = projectData[key];
  const preview = document.querySelector("#project-preview");
  if (!preview || !item) return;
  preview.innerHTML = `
    <div class="project-panel">
      <div class="project-panel-head"><span>${item.tag}</span><b>${item.status}</b></div>
      <div class="project-panel-body">
        <div class="project-visual" aria-hidden="true"><div class="screen"></div><div class="orbit"></div></div>
        <div class="project-copy"><h3>${item.title}</h3><p>${item.description}</p><ul>${item.points.map(point => `<li>↳ ${point}</li>`).join("")}</ul></div>
      </div>
      <div class="project-panel-foot"><span>AUTOMINDS AFRICA / SYSTEM PREVIEW</span><span>WORK SMARTER · GROW FASTER</span></div>
    </div>`;
}

function writeTerminal(type, text) {
  const output = document.querySelector("#terminal-output");
  if (!output) return;
  const row = document.createElement("p");
  row.innerHTML = `<span>${type === "ok" ? "result" : type}</span> <b class="${type}">${text}</b>`;
  output.appendChild(row);
  output.scrollTop = output.scrollHeight;
}

function runCommand(raw) {
  const command = raw.trim().toLowerCase();
  if (!command) return;
  const output = document.querySelector("#terminal-output");
  const userRow = document.createElement("p");
  userRow.innerHTML = `<span>guest</span> ${command.replace(/[<>]/g, "")}`;
  output.appendChild(userRow);

  if (command === "clear") {
    output.innerHTML = `<p><span>system</span> AutoMinds Africa OS ready.</p><p><span>hint</span> Type <b>help</b> to explore the company.</p>`;
    return;
  }

  const result = terminalCommands[command];
  if (result) writeTerminal(result[0], result[1]);
  else writeTerminal("warn", `Unknown command: ${command}. Try help.`);
}

function updateClock() {
  const clock = document.querySelector("#clock");
  if (!clock) return;
  const formatter = new Intl.DateTimeFormat("en-UG", {timeZone:"Africa/Kampala", hour:"2-digit", minute:"2-digit", hour12:false});
  clock.textContent = `${formatter.format(new Date())} EAT`;
}

function initReveal() {
  const nodes = document.querySelectorAll(".section-heading, .capability-records article, .team-table article, .principle-grid > *, .process-map article");
  nodes.forEach(node => node.classList.add("reveal-item"));
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach(node => node.classList.add("revealed"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  nodes.forEach(node => observer.observe(node));
}

renderWorkspace();
renderProject();
updateClock();
setInterval(updateClock, 30000);
initReveal();

document.querySelectorAll(".workspace-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".workspace-tab").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderWorkspace(button.dataset.panel);
  });
});

document.querySelectorAll(".project-select").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".project-select").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProject(button.dataset.project);
  });
});

document.querySelector("#terminal-form")?.addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector("#terminal-input");
  runCommand(input.value);
  input.value = "";
  input.focus();
});

document.querySelectorAll(".terminal-shortcuts button").forEach(button => {
  button.addEventListener("click", () => runCommand(button.dataset.command));
});

const menuButton = document.querySelector(".menu-button");
const topnav = document.querySelector(".topnav");
menuButton?.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(open));
});
topnav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  document.body.classList.remove("menu-open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

window.addEventListener("pointermove", event => {
  const glow = document.querySelector(".cursor-glow");
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

window.addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", window.scrollY > 40);
}, {passive:true});
