/* [Stand: 2026-10-22 | Deckung: Rechnung] */
/* mailto-Ziel entsteht erst bei Interaktion (Hover, Fokus, Klick); bis dahin href="#".
   Ohne JS: Adresse bleibt per CSS lesbar, der Klick öffnet kein Mailprogramm. */
document.querySelectorAll('a.mail').forEach(a => {
  const arm = () => { a.href = 'mailto:' + a.dataset.user + '@' + a.dataset.domain; };
  ['pointerenter', 'focus', 'click'].forEach(type => a.addEventListener(type, arm));
});
