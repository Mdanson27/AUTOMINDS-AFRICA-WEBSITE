(() => {
  try {
    const url = new URL(window.location.href);
    const removable = [];
    for (const key of url.searchParams.keys()) {
      const lower = key.toLowerCase();
      if (lower.startsWith('utm_') || ['gclid','fbclid','msclkid','dclid'].includes(lower)) removable.push(key);
    }
    if (!removable.length) return;
    removable.forEach(key => url.searchParams.delete(key));
    const query = url.searchParams.toString();
    const cleanUrl = url.pathname + (query ? '?' + query : '') + url.hash;
    window.history.replaceState(window.history.state, '', cleanUrl);
  } catch (_) {}
})();
