(function () {
  var root = document.documentElement;
  var nav = document.getElementById("site-nav");
  var toggle = document.getElementById("nav-toggle");
  var themeButton = document.getElementById("theme-toggle");
  var year = document.getElementById("year");
  var stored = localStorage.getItem("theme");

  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  function labelTheme() {
    var current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    themeButton.textContent = current === "light" ? "Dark" : "Light";
    themeButton.setAttribute("aria-pressed", current === "light" ? "true" : "false");
  }

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (themeButton) {
    labelTheme();
    themeButton.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      labelTheme();
    });
  }
})();
