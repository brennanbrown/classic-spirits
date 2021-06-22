// https://github.com/jgthms/bulma/issues/238 thanks!
document.getElementById("nav-toggle").addEventListener("click", toggleNav);
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
let txtFile = new XMLHttpRequest();
txtFile.open("GET", "/quotes.txt", true);
txtFile.onreadystatechange = function () {
  if (txtFile.readyState === 4) {
    if (txtFile.status === 200) {
      allText = txtFile.responseText;
      lines = txtFile.responseText.split("\n");
      randLine = lines[Math.floor(Math.random() * lines.length + 1)];
      document.getElementById("quote").innerHTML =
        randLine || "Intelligence is the ability to adapt to change."; // fallback quote
    }
  }
};
txtFile.send(null);

document.getElementById("search-text").addEventListener(
  "keydown",
  function (e) {
    // search
    if (e.keyCode == 13) {
      searchHandler();
    }
  },
  false
);

function searchHandler() {
  let searchInput = document.getElementById("search-text");
  let text = searchInput.value;
  let site = document.URL;
  let domain = new URL(site);
  domain = domain.hostname;
  window.location.href =
    "https://www.google.com/search?q=site:" + domain + " " + text;
}
