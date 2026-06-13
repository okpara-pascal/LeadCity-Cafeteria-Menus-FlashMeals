(function() {
/* ─── Supabase Setup ────────────────────────────────────────────────────── */
const SUPABASE_URL = 'https://ovhsnlrshedhcbkeocaj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92aHNubHJzaGVkaGNia2VvY2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4NjY2MjUsImV4cCI6MjA5NDQ0MjYyNX0.6WNw84mnPJ_ShBbC-PAU7STktl2jPgYE33ybotoRewA';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* ─── Configuration (tokens) ────────────────────────────────────────────── */
const VALID_TOKENS = {
  /*FlashMeals Members Access Tokens*/
'STUD-2026-LEAD-001': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-002': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-003': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-004': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-005': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-006': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-007': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-008': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-009': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-010': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-011': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-012': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-013': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-014': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-015': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-016': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-017': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-018': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-019': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-020': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-021': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-022': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-023': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-024': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-025': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-026': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-027': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-028': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-029': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-030': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-031': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-032': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-033': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-034': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-035': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-036': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-037': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-038': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-039': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-040': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-041': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-042': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-043': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-044': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-045': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-046': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-047': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-048': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-049': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-050': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-051': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-052': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-053': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-054': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-055': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-056': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-057': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-058': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-059': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-060': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-061': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-062': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-063': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-064': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-065': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-066': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-067': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-068': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-069': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-070': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-071': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-072': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-073': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-074': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-075': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-076': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-077': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-078': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-079': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-080': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-081': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-082': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-083': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-084': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-085': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-086': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-087': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-088': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-089': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-090': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-091': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-092': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-093': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-094': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-095': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-096': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-097': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-098': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-099': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-100': { name: 'Student', role: 'student' },
'STUD-2026-LEAD-101': { name: 'Student', role: 'student' },

  
  /*Your Choice Kitchen Admins*/
'ADMI-2026-MEAL-001': { name: 'Administrator', role: 'admin', caf: 8 },
'ADMI-2026-MEAL-002': { name: 'Administrator', role: 'admin', caf: 8 },
'ADMI-2026-MEAL-003': { name: 'Administrator', role: 'admin', caf: 8 },
'ADMI-2026-MEAL-004': { name: 'Administrator', role: 'admin', caf: 8 },
'ADMI-2026-MEAL-005': { name: 'Administrator', role: 'admin', caf: 8 },
'ADMI-2026-MEAL-006': { name: 'Administrator', role: 'admin', caf: 8 },
'ADMI-2026-MEAL-007': { name: 'Administrator', role: 'admin', caf: 8 },
'ADMI-2026-MEAL-008': { name: 'Administrator', role: 'admin', caf: 8 },
'ADMI-2026-MEAL-009': { name: 'Administrator', role: 'admin', caf: 8 },

  
  /*My Unique Specialized Access Tokens*/
'DEVL-1234-5678': { name: 'Developer',   role: 'admin',   special: true },
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
let menus = JSON.parse(JSON.stringify(DEFAULT_MENUS));
let currentUser  = null;
let isAdmin      = false;
let selectedCaf  = null;
let nextId       = 200;

const lastUpdated = {};
try {
  const savedTimes = localStorage.getItem('campus_lastUpdated');
  if (savedTimes) Object.assign(lastUpdated, JSON.parse(savedTimes));
} catch(e) {}

/* ─── Failsafe: Always show gate when revoked_session is set ──────────────── */
(function() {
  if (localStorage.getItem('revoked_session') === 'true') {
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('gate').style.display = 'flex';
      document.getElementById('app').style.display = 'none';
      document.getElementById('gate-normal').style.display = 'none';
      document.getElementById('gate-denied').style.display = '';
      document.getElementById('retry-btn').style.display = '';
    });
  }
})();

/* ─── Token formatting ───────────────────────────────────────────────────── */
function formatToken(val) {
  val = val.toUpperCase().replace(/[^A-Z0-9]/g, '');
  let out = '';
  for (let i = 0; i < val.length && i < 18; i++) {
    if (i === 4 || i === 8 || i === 12) out += '-';
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
      document.querySelector('#gate-denied p').textContent =
        'This token is not recognised. Please check spelling or contact FlashMeals for further assistance.';
      btn.classList.remove('loading');
      btn.textContent = 'Access menus';
    }, 1200);
    return;
  }

  // 1. Single‑use enforcement for normal tokens via Supabase
  if (!user.special) {
    try {
      const { data: existing } = await supabase
        .from('tokens')
        .select('revoked')
        .eq('token', val)
        .maybeSingle();

      if (existing) {
        if (existing.revoked === true) {
          document.getElementById('gate-normal').style.display = 'none';
          document.getElementById('gate-denied').style.display = '';
          document.querySelector('#gate-denied p').textContent =
            'This token has been revoked from our server. Please contact FlashMeals for further assistance.';
          btn.classList.remove('loading');
          btn.textContent = 'Access menus';
          return;
        } else {
          document.getElementById('gate-normal').style.display = 'none';
          document.getElementById('gate-denied').style.display = '';
          document.querySelector('#gate-denied p').textContent =
            'This token has already been claimed. Each token can only be used once.';
          btn.classList.remove('loading');
          btn.textContent = 'Access menus';
          return;
        }
      }

      async function finalizeTokenInsert(token) {
  try {
    await supabase.from('tokens').insert({ token: token, revoked: false });
  } catch (e) {
    console.warn('Failed to insert token into Supabase');
  }
  localStorage.setItem('token_used_' + token, 'true');
}
      
    } catch (e) {
      console.warn('Supabase offline, using local check');
      if (localStorage.getItem('token_used_' + val) === 'true') {
        document.getElementById('gate-normal').style.display = 'none';
        document.getElementById('gate-denied').style.display = '';
        document.querySelector('#gate-denied p').textContent =
          'This token has already been claimed.';
        btn.classList.remove('loading');
        btn.textContent = 'Access menus';
        return;
      }
    }
  }

  

  await new Promise(resolve => setTimeout(resolve, 1200));

  // 2. Load shared menus from Supabase
  menus = await loadMenusFromServer();

  let maxId = 0;
  Object.values(menus).forEach(arr => {
    arr.forEach(item => { if (item.id > maxId) maxId = item.id; });
  });
  nextId = maxId + 1;

  CAFETERIAS.forEach(c => {
    if (!menus[c.id]) menus[c.id] = [];
  });

  currentUser = user;
  localStorage.setItem('current_token', val);

  // 3. Sign‑out button visible only for special tokens
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.style.display = user.special ? '' : 'none';
  }

    document.getElementById('gate').style.display = 'none';
  document.getElementById('app').style.display = 'flex';
  document.getElementById('logged-as').textContent = user.name;
  btn.classList.remove('loading');
  btn.textContent = 'Access menus';

  // Auto‑select the worker's cafeteria if their token has a caf field
  if (user.caf && menus[user.caf]) {
    selectedCaf = user.caf;
    localStorage.setItem('selected_caf', user.caf);
    renderCafGrid();
    renderMenu(user.caf);
  } else {
    renderCafGrid();
  }

  // Show Terms & Conditions for first‑time students only (not admins, not special tokens)
    if (user.role === 'student' && !user.special && !localStorage.getItem('terms_agreed')) {
    document.getElementById('terms-modal').style.display = '';
  } else if (!user.special && !localStorage.getItem('token_used_' + val)) {
    // Returning student or non‑student — finalize token now
    finalizeTokenInsert(val);
  }
}
document.getElementById('retry-btn').addEventListener('click', function () {
  if (localStorage.getItem('revoked_session') === 'true') {
    localStorage.removeItem('current_token');
    localStorage.removeItem('selected_caf');
    localStorage.removeItem('revoked_session');
  }
  document.getElementById('gate-denied').style.display = 'none';
  document.getElementById('gate-normal').style.display = '';
  tokenInput.value = '';
  gateErr.textContent = '';
});

/* ─── Sign‑out ───────────────────────────────────────────────────────────── */
document.getElementById('logout-btn').addEventListener('click', function () {
  localStorage.removeItem('current_token');
  localStorage.removeItem('selected_caf');
  localStorage.removeItem('revoked_session');
  
  selectedCaf = null;
  isAdmin = false;
  currentUser = null;
  tokenInput.value = '';
  document.getElementById('menu-area').innerHTML = '';
  
  updateModeBtn();
  
  document.getElementById('app').style.display = 'none';
  document.getElementById('gate').style.display = 'flex';
  document.getElementById('gate-normal').style.display = '';
  document.getElementById('gate-denied').style.display = 'none';
});

/* ─── Menu loading from Supabase ─────────────────────────────────────────── */
async function loadMenusFromServer() {
  try {
    const { data, error } = await supabase.from('menus').select('id, data');
    if (error) throw error;
    if (data && data.length > 0) {
      const loaded = {};
      data.forEach(row => { loaded[row.id] = row.data; });
      CAFETERIAS.forEach(c => {
        if (!loaded[c.id]) loaded[c.id] = [];
      });
      return loaded;
    }
  } catch (e) {
    console.warn('Could not load menus from Supabase, using local copy');
  }
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

  // ══════════ T&C CHECK — MUST RUN FIRST ══════════
  if (user.role === 'student' && !user.special && !localStorage.getItem('terms_agreed')) {
    // Clear any leftover revoked_session flag
    localStorage.removeItem('revoked_session');
    localStorage.removeItem('current_token');
    localStorage.removeItem('selected_caf');
    // Show normal gate
    document.getElementById('gate').style.display = 'flex';
    document.getElementById('app').style.display = 'none';
    document.getElementById('gate-normal').style.display = '';
    document.getElementById('gate-denied').style.display = 'none';
    return;
  }

  // ══════════ REVOCATION CHECK ══════════
  if (!user.special) {
    try {
      const { data, error } = await supabase
        .from('tokens')
        .select('revoked')
        .eq('token', savedToken)
        .maybeSingle();

      if (error) throw error;

      if (!data || data.revoked === true) {
        document.getElementById('gate').style.display = 'flex';
        document.getElementById('app').style.display = 'none';
        document.getElementById('gate-normal').style.display = 'none';
        document.getElementById('gate-denied').style.display = '';
        document.querySelector('#gate-denied p').textContent =
          'Access token for this device has been revoked from the server. Please contact FlashMeals for further assistance.';
        document.getElementById('retry-btn').style.display = '';
        localStorage.setItem('revoked_session', 'true');
        return;
      }
    } catch (e) {
      console.warn('Token validation offline, continuing with cached session');
    }
  }

  // ══════════ NORMAL LOAD ══════════
  // (rest of your existing DOMContentLoaded code stays here)
  try {
    const saved = localStorage.getItem('campus_menus');
    menus = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_MENUS));
  } catch (e) {
    menus = JSON.parse(JSON.stringify(DEFAULT_MENUS));
  }
  // ... keep everything else the same ...
});

  let maxId = 0;
  Object.values(menus).forEach(arr => {
    if (Array.isArray(arr)) {
      arr.forEach(item => { if (item.id > maxId) maxId = item.id; });
      arr.sort((a, b) => a.id - b.id);
    }
  });
  nextId = maxId + 1;

  document.getElementById('gate').style.display = 'none';
  document.getElementById('app').style.display = 'flex';
  document.getElementById('logged-as').textContent = user.name;

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.style.display = user.special ? '' : 'none';
  }

    renderCafGrid();

  // Check for the worker's assigned cafeteria first, then fall back to last selected
  const savedCaf = localStorage.getItem('selected_caf');
  const lastCaf = (user.caf) ? user.caf : savedCaf;
  
  if (lastCaf && menus[lastCaf] && Array.isArray(menus[lastCaf])) {
    selectedCaf = +lastCaf;
    localStorage.setItem('selected_caf', lastCaf);
    renderCafGrid();
    renderMenu(selectedCaf);
  } else if (CAFETERIAS.length > 0) {
    selectedCaf = CAFETERIAS[0].id;
    if (!menus[selectedCaf]) menus[selectedCaf] = [];
    renderCafGrid();
    renderMenu(selectedCaf);
  }

  // Background sync with Supabase (menus)
  try {
    const freshMenus = await loadMenusFromServer();
    if (freshMenus && typeof freshMenus === 'object') {
      menus = freshMenus;
      CAFETERIAS.forEach(c => {
        if (!menus[c.id] || !Array.isArray(menus[c.id])) {
          menus[c.id] = [];
        }
      });
      localStorage.setItem('campus_menus', JSON.stringify(menus));
      if (selectedCaf !== null) {
        renderCafGrid();
        renderMenu(selectedCaf);
      }
    }
  } catch (e) {
    console.warn('Background menu update failed, using cached data');
  }

  // 5. Timestamps (per‑cafeteria "Last updated X min ago")
  try {
    const { data: times } = await supabase.from('last_updated').select('*');
    if (times) {
      times.forEach(row => {
        lastUpdated[row.caf_id] = new Date(row.updated_at).getTime();
      });
      localStorage.setItem('campus_lastUpdated', JSON.stringify(lastUpdated));
      if (selectedCaf !== null) {
        renderMenu(selectedCaf);
      }
    }
  } catch (e) {
    console.warn('Could not load timestamps');
  }

  // Refresh button
  const refreshBtn = document.getElementById('refresh-btn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', function () {
      location.reload();
    });
  }
});

/* ─── Admin mode toggle ──────────────────────────────────────────────────── */
document.getElementById('mode-toggle').addEventListener('click', function () {
  const activeEl = document.activeElement;
  if (activeEl && (activeEl.classList.contains('edit-name') || activeEl.classList.contains('edit-price'))) {
    activeEl.blur();
  }

  setTimeout(() => {
    if (currentUser && currentUser.role !== 'admin') {
      alert('Admin mode requires an administrator token.');
      return;
    }
    isAdmin = !isAdmin;
    updateModeBtn();
    if (selectedCaf !== null) renderMenu(selectedCaf);
  }, 0);
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
        <td class="col-drag" style="cursor:grab;text-align:center;padding-top:14px">
          <i class="ti ti-grip-vertical" style="color:var(--text-secondary);font-size:16px"></i>
        </td>
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
            ${isAdmin ? '<th class="col-drag"></th>' : ''}
            <th class="col-name">Item</th>
            <th class="col-price">Price</th>
            <th class="col-status">Status</th>
            <th class="col-action"></th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
 
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
          saveMenuToServer(+this.dataset.cid, menus[+this.dataset.cid]);
          renderCafGrid();
        }
      });
    });

      // Enable drag‑and‑drop reordering (admin only)
  if (isAdmin) {
    const tbody = area.querySelector('tbody');
    if (tbody) {
      new Sortable(tbody, {
        handle: '.col-drag',   // only the grip icon triggers drag
        animation: 150,
        onEnd: function () {
          // Read the new order from the DOM
          const newOrder = [];
          tbody.querySelectorAll('tr').forEach(row => {
            const nameInput = row.querySelector('.edit-name');
            if (nameInput) {
              const itemId = +nameInput.dataset.iid;
              const item = menus[cafId].find(i => i.id === itemId);
              if (item) newOrder.push(item);
            }
          });
          // Update the menus array and save
          menus[cafId] = newOrder;
          lastUpdated[cafId] = Date.now();
          saveLastUpdated();
          saveMenuToServer(cafId, menus[cafId]);
          renderCafGrid();
        }
      });
    }
  }
 
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
  if (!menus[selectedCaf]) menus[selectedCaf] = [];
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
  if (typeof supabase !== 'undefined') {
    const token = localStorage.getItem('current_token') || 'unknown';
    Object.entries(lastUpdated).forEach(([cafId, ts]) => {
      supabase.from('last_updated').upsert({
        caf_id: parseInt(cafId),
        updated_at: new Date(ts).toISOString(),
        updated_by: token
      }).then(({ error }) => {
        if (error) console.warn('Failed to sync timestamp', error);
      });
    });
  }
}

function saveMenus() {
  localStorage.setItem('campus_menus', JSON.stringify(menus));
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

/* ─── Periodic token re‑validation ───────────────────────────────────────── */
async function validateSession() {
  if (document.getElementById('gate').style.display !== 'none') return;
  
  const token = localStorage.getItem('current_token');
  if (!token) return;

  if (VALID_TOKENS[token] && VALID_TOKENS[token].special) return;
  
  try {
    const { data } = await supabase
      .from('tokens')
      .select('revoked')
      .eq('token', token)
      .maybeSingle();

    if (!data) {
      document.getElementById('app').style.display = 'none';
      document.getElementById('gate').style.display = 'flex';
      document.getElementById('gate-normal').style.display = 'none';
      document.getElementById('gate-denied').style.display = '';
      document.querySelector('#gate-denied p').textContent =
        'Your access token has been mistakenly deleted from our server. Please try logging in again or contact FlashMeals for assistance.';
      document.getElementById('retry-btn').style.display = '';
      localStorage.setItem('revoked_session', 'true');
      currentUser = null;
      isAdmin = false;
      selectedCaf = null;
      return;
    }

    if (data.revoked === true) {
      document.getElementById('app').style.display = 'none';
      document.getElementById('gate').style.display = 'flex';
      document.getElementById('gate-normal').style.display = 'none';
      document.getElementById('gate-denied').style.display = '';
      document.querySelector('#gate-denied p').textContent =
        'Access token for this device has been revoked from the server. Please contact FlashMeals for a new access token.';
      document.getElementById('retry-btn').style.display = '';
      localStorage.setItem('revoked_session', 'true');
      currentUser = null;
      isAdmin = false;
      selectedCaf = null;
    }
  } catch (e) {
    console.warn('Re‑validation failed (offline?), skipping.');
  }
}

setInterval(validateSession, 30000);

/* ─── Terms & Conditions handlers ────────────────────────────────────────── */
document.getElementById('terms-agree').addEventListener('click', async function () {
  localStorage.setItem('terms_agreed', 'true');
  document.getElementById('terms-modal').style.display = 'none';
  
  // Now finalize the token in Supabase
  const token = localStorage.getItem('current_token');
  if (token && currentUser && !currentUser.special) {
    await finalizeTokenInsert(token);
  }
});

document.getElementById('terms-decline').addEventListener('click', function () {
  // Don't remove the token or sign out — just show alert and keep T&C open
  alert('You must accept the Terms & Conditions to use this platform.');
});

})();
