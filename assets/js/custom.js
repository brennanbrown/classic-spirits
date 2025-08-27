// https://github.com/jgthms/bulma/issues/238 thanks!
var navToggle = document.getElementById("nav-toggle");
if (navToggle) {
  navToggle.addEventListener("click", toggleNav);
}
function toggleNav() {
  let nav = document.getElementById("nav-menu");
  let className = nav.getAttribute("class");
  if (className == "nav-right nav-menu") {
    nav.className = "nav-right nav-menu is-active";
  } else {
    nav.className = "nav-right nav-menu";
  }
}

// for the random quote in the header
var quoteEl = document.getElementById("quote");
if (quoteEl) {
  let txtFile = new XMLHttpRequest();
  txtFile.open("GET", "/quotes.txt", true);
  txtFile.onreadystatechange = function () {
    if (txtFile.readyState === 4) {
      if (txtFile.status === 200) {
        var lines = txtFile.responseText.split("\n");
        var randLine = lines[Math.floor(Math.random() * lines.length)];
        quoteEl.innerHTML =
          randLine || "Intelligence is the ability to adapt to change."; // fallback quote
      }
    }
  };
  txtFile.send(null);
}

var searchInputEl = document.getElementById("search-text");
if (searchInputEl) {
  searchInputEl.addEventListener(
    "keydown",
    function (e) {
      // search
      if (e.keyCode == 13) {
        searchHandler();
      }
    },
    false
  );
}

function searchHandler() {
  let searchInput = document.getElementById("search-text");
  let text = searchInput.value;
  let site = document.URL;
  let domain = new URL(site);
  domain = domain.hostname;
  window.location.href =
    "https://www.google.com/search?q=site:" + domain + " " + text;
}

// Simple Calendar Renderer for Sidebar
(function renderSidebarCalendar() {
  var container = document.getElementById("sidebar-calendar");
  if (!container) return;

  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth(); // 0-based
  var firstDay = new Date(year, month, 1);
  var startDow = firstDay.getDay(); // 0=Sun
  var daysInMonth = new Date(year, month + 1, 0).getDate();

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var header = document.createElement("div");
  header.className = "cal-header";
  header.innerHTML =
    '<strong>' + monthNames[month] + " " + year + '</strong>';

  var grid = document.createElement("div");
  grid.className = "cal-grid";

  // Days of week
  for (var i = 0; i < 7; i++) {
    var d = document.createElement("div");
    d.className = "cal-cell dow";
    d.textContent = dow[i];
    grid.appendChild(d);
  }

  // Leading blanks
  for (var j = 0; j < startDow; j++) {
    var blank = document.createElement("div");
    blank.className = "cal-cell";
    grid.appendChild(blank);
  }

  // Dates
  for (var day = 1; day <= daysInMonth; day++) {
    var cell = document.createElement("div");
    cell.className = "cal-cell";
    cell.textContent = day;
    if (day === now.getDate()) {
      cell.classList.add("cal-today");
    }
    grid.appendChild(cell);
  }

  container.appendChild(header);
  container.appendChild(grid);
})();

// Add "Copy" buttons to code blocks
document.addEventListener('DOMContentLoaded', function () {
  var blocks = document.querySelectorAll('pre');
  blocks.forEach(function (pre) {
    if (pre.querySelector('.code-copy')) return;
    pre.classList.add('code-block');
    var btn = document.createElement('button');
    btn.className = 'code-copy';
    btn.type = 'button';
    btn.textContent = 'Copy';
    btn.addEventListener('click', function () {
      var text = pre.innerText.trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          var old = btn.textContent; btn.textContent = 'Copied!';
          setTimeout(function(){ btn.textContent = old; }, 1200);
        }).catch(function(){ btn.textContent = 'Error'; setTimeout(function(){ btn.textContent = 'Copy'; }, 1200); });
      } else {
        // Fallback
        var ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); btn.textContent = 'Copied!'; }
        catch(e){ btn.textContent = 'Error'; }
        document.body.removeChild(ta);
        setTimeout(function(){ btn.textContent = 'Copy'; }, 1200);
      }
    });
    pre.appendChild(btn);
  });
  
  // Theme toggle with persistence
  var body = document.body;
  var toggle = document.getElementById('theme-toggle');
  var toggleIcon = document.getElementById('theme-toggle-icon');
  function setIcon() {
    if (!toggleIcon) return;
    var dark = body.classList.contains('theme-dark');
    toggleIcon.textContent = dark ? '☀️' : '🌙';
  }
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') body.classList.add('theme-dark');
    if (saved === 'light') body.classList.remove('theme-dark');
  } catch (_) { /* ignore */ }
  setIcon();
  if (toggle) {
    toggle.addEventListener('click', function () {
      body.classList.toggle('theme-dark');
      setIcon();
      try {
        localStorage.setItem('theme', body.classList.contains('theme-dark') ? 'dark' : 'light');
      } catch (_) { /* ignore */ }
    });
  }

  // Simple image lightbox for images in the reading area
  function openLightbox(src, alt) {
    var backdrop = document.createElement('div');
    backdrop.className = 'lightbox-backdrop';
    var img = document.createElement('img');
    img.className = 'lightbox-img';
    img.src = src;
    img.alt = alt || '';
    var close = document.createElement('button');
    close.className = 'lightbox-close';
    close.textContent = '×';
    backdrop.appendChild(img);
    backdrop.appendChild(close);
    function closeLb(){ document.body.removeChild(backdrop); document.removeEventListener('keydown', onKey); }
    function onKey(e){ if (e.key === 'Escape') closeLb(); }
    backdrop.addEventListener('click', function(e){ if (e.target === backdrop || e.target === close) closeLb(); });
    document.addEventListener('keydown', onKey);
    document.body.appendChild(backdrop);
  }
  var imgs = document.querySelectorAll('.reading img');
  imgs.forEach(function (img) {
    // Skip if already link
    if (img.closest('a')) return;
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () { openLightbox(img.src, img.alt); });
  });
});
