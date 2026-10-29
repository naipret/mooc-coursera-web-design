document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileNav();
  initProjectFilter();
});

function initThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (!themeToggleBtn) return;

  const storageKey = "portfolio-theme-preference";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem(storageKey);

  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  applyTheme(initialTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const isDark = theme === "dark";
    themeToggleBtn.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme",
    );
    themeToggleBtn.setAttribute(
      "title",
      isDark ? "Switch to light theme" : "Switch to dark theme",
    );
    themeToggleBtn.textContent = isDark ? "Light" : "Dark";
  }
}

function initMobileNav() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (!navToggle || !navMenu) return;

  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    toggleMenu(!isExpanded);
  });

  document.addEventListener("click", (event) => {
    if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
      if (navToggle.getAttribute("aria-expanded") === "true") {
        toggleMenu(false);
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      navToggle.getAttribute("aria-expanded") === "true"
    ) {
      toggleMenu(false);
      navToggle.focus();
    }
  });

  function toggleMenu(open) {
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu",
    );
    if (open) {
      navMenu.classList.add("is-open");
    } else {
      navMenu.classList.remove("is-open");
    }
  }
}

function initProjectFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");
  const liveStatus = document.getElementById("filter-status");

  if (!filterButtons.length || !projectItems.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedCategory = btn.getAttribute("data-filter");

      filterButtons.forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");

      let visibleCount = 0;
      projectItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        const match =
          selectedCategory === "all" || itemCategory === selectedCategory;

        if (match) {
          item.removeAttribute("hidden");
          visibleCount++;
        } else {
          item.setAttribute("hidden", "");
        }
      });

      if (liveStatus) {
        liveStatus.textContent = `Showing ${visibleCount} project${visibleCount === 1 ? "" : "s"} for category ${btn.textContent.trim()}.`;
      }
    });
  });
}
