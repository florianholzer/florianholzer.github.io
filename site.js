/* [Stand: 2026-10-22 | Deckung: Rechnung] */
/* E-Mail-Links: mailto-Ziel entsteht erst bei Interaktion (Hover, Fokus, Klick), bis dahin href="#".
   Klick kopiert die Adresse zusätzlich in die Zwischenablage (nur in sicherem Kontext, d. h. HTTPS).
   Jahreszahl: ersetzt den statischen Wert in .year.
   Ohne JS: Adresse per CSS lesbar, kein Mailprogramm, Jahr statisch. */
document.querySelectorAll('a.mail').forEach(a => {
  const address = () => a.dataset.user + '@' + a.dataset.domain;
  const arm = () => { a.href = 'mailto:' + address(); };
  ['pointerenter', 'focus', 'click'].forEach(type => a.addEventListener(type, arm));
  a.addEventListener('click', () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(address()).then(() => {
      a.classList.add('copied');
      setTimeout(() => a.classList.remove('copied'), 2000);
    }, () => {});
  });
});

document.querySelectorAll('.year').forEach(el => { el.textContent = new Date().getFullYear(); });
