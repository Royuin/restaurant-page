(() => {
  'use strict';
  document.getElementById('content');
  const t = document.getElementById('content'),
    e = document.createElement('nav');
  t.appendChild(e);
  const n = document.createElement('h1');
  (n.textContent = 'Roku Sunset'), e.appendChild(n);
  const o = document.createElement('button');
  (o.textContent = 'Home'), e.appendChild(o);
  const c = document.createElement('button');
  (c.textContent = 'Menu'), e.appendChild(c);
  const d = document.createElement('button');
  (d.textContent = 'Contact'), e.appendChild(d);
})();
