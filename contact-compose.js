(() => {
  const form = document.querySelector('#gmail-compose-form');
  if (!form) return;

  const nameInput = form.querySelector('#gmail-name');
  const emailInput = form.querySelector('#gmail-email');
  const subjectInput = form.querySelector('#gmail-subject');
  const messageInput = form.querySelector('#gmail-message');
  const openButton = form.querySelector('#gmail-open');
  const readyNote = form.querySelector('#gmail-ready-note');
  const counter = form.querySelector('#gmail-message-count');

  const recipient = 'automindsafrica@gmail.com';

  function buildBody() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const lines = [];

    if (name) lines.push(`Name: ${name}`);
    if (email) lines.push(`Email: ${email}`);
    if (name || email) lines.push('');
    lines.push(message);
    lines.push('', '— Sent from the AutoMinds Africa website contact composer');

    return lines.join('\n');
  }

  function syncState() {
    const length = messageInput.value.trim().length;
    const ready = length >= 5;
    counter.textContent = `${messageInput.value.length} characters`;
    openButton.classList.toggle('ready', ready);
    openButton.disabled = !ready;
    openButton.setAttribute('aria-disabled', String(!ready));

    if (ready) {
      readyNote.textContent = 'Ready. Tap the green button and Gmail will open with your message already filled in.';
      readyNote.classList.add('ready');
    } else {
      readyNote.textContent = 'Write your message first. The Gmail button will turn green when it is ready.';
      readyNote.classList.remove('ready');
    }
  }

  messageInput.addEventListener('input', syncState);
  [nameInput, emailInput, subjectInput].forEach(input => input.addEventListener('input', syncState));

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (openButton.disabled) return;

    const subject = subjectInput.value.trim() || 'Website inquiry — AutoMinds Africa';
    const body = buildBody();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const newWindow = window.open(gmailUrl, '_blank', 'noopener');
    if (!newWindow) window.location.href = gmailUrl;
  });

  syncState();
})();
