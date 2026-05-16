/* ─── Supabase Setup ────────────────────────────────────────────────────── */
const SUPABASE_URL = 'https://ovhsnlrshedhcbkeocaj.supabase.co';   // ⬅️ your URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92aHNubHJzaGVkaGNia2VvY2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NjY2MjUsImV4cCI6MjA5NDQ0MjYyNX0.6WNw84mnPJ_ShBbC-PAU7STktl2jPgYE33ybotoRewA'; // ⬅️ your anon key
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


/* ─── Configuration (tokens) ────────────────────────────────────────────── */
const VALID_TOKENS = {
  'CAMP-2024-ALFA': { name: 'Student',   role: 'student' },
  'CAMP-2024-BETA': { name: 'Student',    role: 'student' },
  'CAMP-2024-GAMA': { name: 'Student',   role: 'student' },
  'CAMP-2024-DELT': { name: 'Student',   role: 'student' },
  'CAMP-2024-EPSL': { name: 'Student', role: 'student' },
  'ADMI-9999-ROOT': { name: 'Administrator',     role: 'admin'   },
  // special reusable tokens
  'DEVL-1234-ABCD': { name: 'Developer',   role: 'admin',   special: true },
  'STUD-5678-EFGH': { name: 'Test Student', role: 'student', special: true },
};

/* ─── Cafeterias ─────────────────────────────────────────────────────────── */
const CAFETERIAS = [
  { id: 1, name: 'Citrus',     icon: 'ti-salad'},
  { id: 2, name: 'Tasty Vine',   icon: 'ti-coffee'},
  { id: 3, name: 'Cresta',       icon: 'ti-bread'},
  { id: 4, name: 'T-Cuisine',  icon: 'ti-meat'},
  { id: 5, name: 'MariGold',        icon: 'ti-apple'},
  { id: 6, name: 'Eat & Play',    icon: 'ti-soup'},
  { id: 7, name: 'Tasty Delight',   icon: 'ti-tools-kitchen-2'},
  { id: 8, name: 'Your Choice Kitchen',  icon: 'ti-fish'},
];

/* ─── Default menu data (fallback) ──────────────────────────────────────── */
const DEFAULT_MENUS = {
  1: [
    { id:1, name:'Jollof Rice & Chicken', price:850,  available:true  },
    { id:2, name:'Fried Plantain (Dodo)', price:200,  available:true  },
    { id:3, name:'Moi Moi',               price:250,  available:false },
    { id:4, name:'Zobo Drink',            price:150,  available:true  },
  ],
  2: [
    { id:1, name:'Chicken Sandwich',      price:600,  available:true  },
    { id:2, name:'Garden Salad',          price:400,  available:true  },
    { id:3, name:'Meat Pie',              price:300,  available:true  },
    { id:4, name:'Bottled Water',         price:100,  available:true  },
  ],
  3: [
    { id:1, name:'Eba & Egusi Soup',      price:700,  available:true  },
    { id:2, name:'Puff Puff',             price:100,  available:true  },
    { id:3, name:'Chin Chin',             price:150,  available:false },
    { id:4, name:'Malt Drink',            price:200,  available:true  },
  ],
  4: [
    { id:1, name:'Grilled Beef Suya',     price:900,  available:true  },
    { id:2, name:'Shawarma',              price:1200, available:true  },
    { id:3, name:'Spring Rolls (4pcs)',   price:500,  available:false },
    { id:4, name:'Chilled Juice',         price:250,  available:true  },
  ],
  5: [
    { id:1, name:'Akara & Pap',           price:350,  available:true  },
    { id:2, name:'Bread & Egg',           price:300,  available:true  },
    { id:3, name:'Oatmeal',              price:250,  available:true  },
    { id:4, name:'Hot Tea',              price:150,  available:true  },
  ],
  6: [
    { id:1, name:'Amala & Ewedu',         price:650,  available:true  },
    { id:2, name:'Beans & Dodo',          price:500,  available:false },
    { id:3, name:'Buns',                  price:100,  available:true  },
    { id:4, name:'Kunu Drink',            price:150,  available:true  },
  ],
  7: [
    { id:1, name:'Rice & Stew',           price:700,  available:true  },
    { id:2, name:'Fried Chicken',         price:800,  available:true  },
    { id:3, name:'Coleslaw',              price:200,  available:true  },
    { id:4, name:'Chapman',               price:350,  available:true  },
  ],
  8: [
    { id:1, name:'Pepper Soup (Goat)',    price:1000, available:true  },
    { id:2, name:'Nkwobi',               price:900,  available:false },
    { id:3, name:'Fried Fish',            price:750,  available:true  },
    { id:4, name:'Palm Wine',             price:300,  available:true  },
  ],
};

/* ─── State ──────────────────────────────────────────────────────────────── */
let menus = JSON.parse(JSON.stringify(DEFAULT_MENUS)); // will be overwritten on load
let currentUser  = null;
let isAdmin      = false;
let selectedCaf  = null;
let nextId       = 200;

const lastUpdated = {};
try {
  const savedTimes = localStorage.getItem('campus_lastUpdated');
  if (savedTimes) Object.assign(lastUpdated, JSON.parse(savedTimes));
} catch(e) {}

/* ─── Token formatting ───────────────────────────────────────────────────── */
function formatToken(val) {
  val = val.toUpperCase().replace(/[^A-Z0-9]/g, '');
  let out = '';
  for (let i = 0; i < val.length && i < 12; i++) {
    if (i === 4 || i === 8) out += '-';
    out += val[i];
  }
  return out;
}

/* ─── Gate logic ─────────────────────────────────────────────────────────── */
const tokenInput = document.getElementById('token-input');
const gateErr    = document.getElementById('gate-err');

tokenInput.addEventListener('input', function () {
  this.value = formatToken(this.value);
  gateErr.textContent = '';
});
tokenInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') tryEnter();
});
document.getElementById('enter-btn').addEventListener('click', tryEnter);

async function tryEnter() {
  const val = tokenInput.value.trim();
  if (!val) {
    gateErr.textContent = 'Please enter your invite token.';
    return;
  }

  const btn = document.getElementById('enter-btn');
  btn.classList.add('loading');
  btn.textContent = 'Verifying...';
  gateErr.textContent = '';

  const user = VALID_TOKENS[val];
  if (!user) {
    setTimeout(() => {
      document.getElementById('gate-normal').style.display = 'none';
      document.getElementById('gate-denied').style.display = '';
      btn.classList.remove('loading');
      btn.textContent = 'Access menus';
    }, 1200);
    return;
  }

  // 1) Check server-side token usage (Supabase)
  try {
    const { data: existing } = await supabase
      .from('tokens')
      .select('token')
      .eq('token', val)
      .maybeSingle();

    if (existing) {
      // Token already used globally
      document.getElementById('gate-normal').style.display = 'none';
      document.getElementById('gate-denied').style.display = '';
      document.querySelector('#gate-denied p').textContent =
        'This token has already been claimed. Each token can only be used once.';
      btn.classList.remove('loading');
      btn.textContent = 'Access menus';
      return;
    }

    // Not used yet – insert it (unless special)
    if (!user.special) {
      await supabase.from('tokens').insert({ token: val });
    }
  } catch (e) {
    // Supabase unreachable – fall back to local check
    console.warn('Supabase offline, using local check');
    if (!user.special && localStorage.getItem('token_used_' + val) === 'true') {
      document.getElementById('gate-normal').style.display = 'none';
      document.getElementById('gate-denied').style.display = '';
      document.querySelector('#gate-denied p').textContent =
        'This token has already been claimed.';
      btn.classList.remove('loading');
      btn.textContent = 'Access menus';
      return;
    }
    // if offline, we still allow login (or you can block it – your choice)
  }

  // 2) Local mark (as backup)
  if (!user.special) {
    localStorage.setItem('token_used_' + val, 'true');
  }

  // 3) Complete login
  setTimeout(() => {
    currentUser = user;
    localStorage.setItem('current_token', val);

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.style.display = user.special ? '' : 'none';
    }

    document.getElementById('gate').style.display = 'none';
    document.getElementById('app').style.display = 'flex';
    document.getElementById('logged-as').textContent = user.name;
    btn.classList.remove('loading');
    btn.textContent = 'Access menus';
    renderCafGrid();
  }, 1200);
}

document.getElementById('retry-btn').addEventListener('click', function () {
  document.getElementById('gate-denied').style.display = 'none';
  document.getElementById('gate-normal').style.display = '';
  tokenInput.value = '';
  gateErr.textContent = '';
});

/* ─── Sign‑out (only for special tokens) ─────────────────────────────────── */
document.getElementById('logout-btn').addEventListener('click', function () {
  localStorage.removeItem('current_token');
  localStorage.removeItem('selected_caf');
  document.getElementById('app').style.display = 'none';
  document.getElementById('gate').style.display = 'flex';
  document.getElementById('gate-denied').style.display = 'none';
  document.getElementById('gate-normal').style.display = '';
  tokenInput.value = '';
  selectedCaf = null;
  isAdmin = false;
  document.getElementById('menu-area').innerHTML = '';
  updateModeBtn();
  this.style.display = 'none';
});

/* ─── Menu loading from Supabase ─────────────────────────────────────────── */
async function loadMenusFromServer() {
  try {
    const { data, error } = await supabase.from('menus').select('id, data');
    if (error) throw error;
    if (data && data.length > 0) {
      const loaded = {};
      data.forEach(row => { loaded[row.id] = row.data; });
      return loaded;
    }
  } catch (e) {
    console.warn('Could not load menus from Supabase, using local copy');
  }
  // Fallback to local storage or defaults
  try {
    const saved = localStorage.getItem('campus_menus');
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_MENUS));
  } catch (e) {
    return JSON.parse(JSON.stringify(DEFAULT_MENUS));
  }
}

async function saveMenuToServer(cafId, items) {
  try {
    await supabase.from('menus').upsert({ id: cafId, data: items });
    // Also update local storage for offline fallback
    localStorage.setItem('campus_menus', JSON.stringify(menus));
  } catch (e) {
    console.warn('Failed to save menu to Supabase, saved locally only');
  }
}

/* ─── Auto‑login on page load ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  const savedToken = localStorage.getItem('current_token');
  if (!savedToken || !VALID_TOKENS[savedToken]) return;

  const user = VALID_TOKENS[savedToken];
  currentUser = user;

  // Load menus from Supabase (central source)
  menus = await loadMenusFromServer();

  document.getElementById('gate').style.display = 'none';
  document.getElementById('app').style.display = 'flex';
  document.getElementById('logged-as').textContent = user.name;

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.style.display = user.special ? '' : 'none';
  }

  renderCafGrid();

  // Restore last selected cafeteria
  const lastCaf = localStorage.getItem('selected_caf');
  if (lastCaf && menus[lastCaf]) {
    selectedCaf = +lastCaf;
    renderCafGrid();
    renderMenu(selectedCaf);
  }
});

/* ─── Admin mode toggle ──────────────────────────────────────────────────── */
document.getElementById('mode-toggle').addEventListener('click', function () {
  if (currentUser && currentUser.role !== 'admin') {
    alert('Admin mode requires an administrator token.');
    return;
  }
  isAdmin = !isAdmin;
  updateModeBtn();
  if (selectedCaf !== null) renderMenu(selectedCaf);
});

function updateModeBtn() {
  const btn = document.getElementById('mode-toggle');
  if (isAdmin) {
    btn.textContent = 'Admin mode';
    btn.classList.add('active');
  } else {
    btn.textContent = 'View mode';
    btn.classList.remove('active');
  }
}

/* ─── Cafeteria grid ─────────────────────────────────────────────────────── */
function renderCafGrid() {
  const grid = document.getElementById('caf-grid');
  grid.innerHTML = '';
  CAFETERIAS.forEach(c => {
    const items = menus[c.id] || [];
    const avail = items.filter(i => i.available).length;
    const card  = document.createElement('div');
    card.className = 'caf-card' + (selectedCaf === c.id ? ' active' : '');
    card.innerHTML = `
      <div class="caf-icon"><i class="ti ${c.icon}" aria-hidden="true"></i></div>
      <div class="caf-name">${c.name}</div>
      <div class="caf-meta">
        <span class="dot" style="background:${avail > 0 ? '#3B6D11' : '#888780'}"></span>
        ${items.length} items &middot  ${avail} available 
      </div>`;
    card.addEventListener('click', () => selectCaf(c.id));
    grid.appendChild(card);
  });
}

function selectCaf(id) {
  selectedCaf = id;
  localStorage.setItem('selected_caf', id);
  renderCafGrid();
  renderMenu(id);
}

/* ─── Menu table ─────────────────────────────────────────────────────────── */
function renderMenu(cafId) {
  const caf   = CAFETERIAS.find(c => c.id === cafId);
  const items = menus[cafId] || [];
  const area  = document.getElementById('menu-area');

  const lastStr = lastUpdated[cafId]
    ? `<div class="menu-last-updated">Last updated ${timeAgo(lastUpdated[cafId])}</div>`
    : '';
 
  let rows = items.map(item => {
    if (isAdmin) {
      return `<tr>
        <td class="col-name">
          <input class="edit-name" value="${escHtml(item.name)}"
                 data-cid="${cafId}" data-iid="${item.id}" data-field="name"/>
        </td>

        <td class="col-price">
          ₦<input class="edit-price" type="number" min="0" value="${item.price}"
                  data-cid="${cafId}" data-iid="${item.id}" data-field="price"/>
        </td>

        <td class="col-status">
  <div class="toggle-wrapper">
    <label class="toggle" aria-label="Toggle availability">
      <input type="checkbox" class="avail-toggle" ${item.available ? 'checked' : ''}
             data-cid="${cafId}" data-iid="${item.id}"/>
      <span class="slider"></span>
    </label>
    <span class="avail-label">${item.available ? 'Available' : 'Unavailable'}</span>
  </div>
</td>

        <td class="col-action">
          <button class="del-btn" data-cid="${cafId}" data-iid="${item.id}">
            <i class="ti ti-trash" aria-hidden="true"></i> Remove
          </button>
        </td>
      </tr>`;
    } else {
      return `<tr>
        <td class="col-name">${escHtml(item.name)}</td>
        <td class="col-price"><span class="price-val">₦${item.price.toLocaleString()}</span></td>
        <td class="col-status">
          <span class="status-pill ${item.available ? 'avail' : 'unavail'}">
            <span class="dot" style="background:${item.available ? '#3B6D11' : '#888780'}"></span>
            ${item.available ? 'Available' : 'Unavailable'}
          </span>
        </td>
        <td class="col-action"></td>
      </tr>`;
    }
  }).join('');
 
  if (!rows) {
    rows = `<tr><td colspan="4">
      <div class="empty-state">
        <i class="ti ti-inbox" aria-hidden="true"></i>
        No items yet${isAdmin ? ' — add one above' : ''}
      </div>
    </td></tr>`;
  }
 
  area.innerHTML = `
    <div class="menu-panel">
      <div class="menu-header">
        <div class="menu-header-left">
          <i class="ti ${caf.icon}" style="font-size:20px;color:var(--accent)" aria-hidden="true"></i>
          <div>
            <div class="menu-title">${caf.name}</div>
            <div class="menu-count">${items.length} items &middot; ${items.filter(i=>i.available).length} available</div>
            ${lastStr}
          </div>
        </div>
        ${isAdmin ? `<button class="add-btn" id="open-add">
          <i class="ti ti-plus" aria-hidden="true"></i> Add item
        </button>` : ''}
      </div>
      <table class="menu-table" aria-label="${caf.name} menu">
        <thead>
          <tr>
            <th class="col-name">Item</th>
            <th class="col-price">Price</th>
            <th class="col-status">Status</th>
            <th class="col-action"></th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
 
  /* Wire up admin controls */
  if (isAdmin) {
    area.querySelectorAll('.avail-toggle').forEach(el => {
      el.addEventListener('change', function () {
        const item = findItem(+this.dataset.cid, +this.dataset.iid);
        if (item) {
          item.available = this.checked;
          const lbl = this.closest('td').querySelector('.avail-label');
          if (lbl) lbl.textContent = item.available ? 'Available' : 'Unavailable';
          lastUpdated[+this.dataset.cid] = Date.now();
          saveLastUpdated();
          // Save whole cafeteria to Supabase
          saveMenuToServer(+this.dataset.cid, menus[+this.dataset.cid]);
          renderCafGrid();
        }
      });
    });
 
    area.querySelectorAll('.del-btn').forEach(el => {
      el.addEventListener('click', function () {
        const cid = +this.dataset.cid, iid = +this.dataset.iid;
        menus[cid] = menus[cid].filter(i => i.id !== iid);
        lastUpdated[cid] = Date.now();
        saveLastUpdated();
        saveMenuToServer(cid, menus[cid]);
        renderMenu(cid);
        renderCafGrid();
      });
    });
 
    area.querySelectorAll('.edit-name').forEach(el => {
      el.addEventListener('change', function () {
        const item = findItem(+this.dataset.cid, +this.dataset.iid);
        if (item) {
          item.name = this.value;
          lastUpdated[+this.dataset.cid] = Date.now();
          saveLastUpdated();
          saveMenuToServer(+this.dataset.cid, menus[+this.dataset.cid]);
        }
      });
    });
 
    area.querySelectorAll('.edit-price').forEach(el => {
      el.addEventListener('change', function () {
        const item = findItem(+this.dataset.cid, +this.dataset.iid);
        if (item) {
          item.price = Math.max(0, +this.value);
          lastUpdated[+this.dataset.cid] = Date.now();
          saveLastUpdated();
          saveMenuToServer(+this.dataset.cid, menus[+this.dataset.cid]);
        }
      });
    });
 
    const openAdd = document.getElementById('open-add');
    if (openAdd) {
      openAdd.addEventListener('click', () => {
        document.getElementById('new-name').value  = '';
        document.getElementById('new-price').value = '';
        document.getElementById('add-modal').style.display = '';
        document.getElementById('new-name').focus();
      });
    }
  }
}
 
/* ─── Modal ──────────────────────────────────────────────────────────────── */
document.getElementById('cancel-add').addEventListener('click', closeModal);
document.getElementById('add-modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
 
function closeModal() {
  document.getElementById('add-modal').style.display = 'none';
}
 
document.getElementById('confirm-add').addEventListener('click', () => {
  const name  = document.getElementById('new-name').value.trim();
  const price = +document.getElementById('new-price').value;
  if (!name)  { document.getElementById('new-name').focus();  return; }
  if (!price) { document.getElementById('new-price').focus(); return; }
  menus[selectedCaf].push({ id: nextId++, name, price, available: true });
  lastUpdated[selectedCaf] = Date.now();
  saveLastUpdated();
  saveMenuToServer(selectedCaf, menus[selectedCaf]);
  closeModal();
  renderMenu(selectedCaf);
  renderCafGrid();
});
 
document.getElementById('new-price').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') document.getElementById('confirm-add').click();
});
 
/* ─── Helpers ────────────────────────────────────────────────────────────── */
function findItem(cafId, itemId) {
  return (menus[cafId] || []).find(i => i.id === itemId) || null;
}
 
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function saveLastUpdated() {
  localStorage.setItem('campus_lastUpdated', JSON.stringify(lastUpdated));
}

function timeAgo(ts) {
  const sec = Math.floor((Date.now() - ts) / 1000);
  if (sec < 60) return 'just now';
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min} min ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} hr ago`;
  const days = Math.floor(hr / 24);
  return `${days} day${days > 1 ? 's' : ''} ago`;
}
