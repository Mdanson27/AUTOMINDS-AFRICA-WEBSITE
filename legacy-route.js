(() => {
  const path = window.location.pathname.replace(/\/+$/, '').toLowerCase() || '/';
  const direct = {
    '/home': '/',
    '/systems': '/systems.html',
    '/projects': '/projects.html',
    '/team': '/team.html',
    '/contact': '/contact.html'
  };

  let target = direct[path];

  if (!target) {
    if (/smart[-_/ ]?(profile|digital|card)|business[-_/ ]?card|nfc|digital[-_/ ]?identity/.test(path)) {
      target = '/projects';
    } else if (/contact|consult|book[-_/ ]?(a|free)?[-_/ ]?(call|consultation|meeting)/.test(path)) {
      target = '/contact';
    } else if (/team|people|leadership|about[-_/ ]?us/.test(path)) {
      target = '/team';
    } else if (/ai|agent|automat|workspace|crm|dashboard|system|business|workflow|web[-_/ ]?app/.test(path)) {
      target = '/systems';
    } else {
      target = '/';
    }
  }

  // GitHub Pages project URLs need the repository prefix when no custom domain is in use.
  if (window.location.hostname.endsWith('.github.io')) {
    const repoPrefix = '/AUTOMINDS-AFRICA-WEBSITE';
    if (!target.startsWith(repoPrefix)) target = repoPrefix + target;
  }

  window.location.replace(target);
})();
