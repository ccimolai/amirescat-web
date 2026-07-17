/* ========================================================
   AMIRESCAT — lógica de idioma, menú y render de investigadores
   ======================================================== */

const LANGS = ["ca", "es", "en"];
const DEFAULT_LANG = "ca";

function getLang() {
  const saved = localStorage.getItem("amirescat_lang");
  return LANGS.includes(saved) ? saved : DEFAULT_LANG;
}

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  localStorage.setItem("amirescat_lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.documentElement.setAttribute("lang", lang);
  const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

  // Texto de elementos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Botones de idioma activos
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Si esta página tiene el listado de investigadores, lo volvemos a pintar
  if (typeof renderResearchers === "function") {
    renderResearchers(lang);
  }
  // Si esta página tiene el listado de grupos de investigación, lo pintamos
  if (typeof renderTeams === "function") {
    renderTeams();
  }
}

function renderTeams() {
  const container = document.getElementById("teams-container");
  if (!container || typeof TEAMS === "undefined") return;
  container.innerHTML = TEAMS.map((t) => `<div class="team-chip">${t}</div>`).join("");
}

function renderResearchers(lang) {
  const container = document.getElementById("researchers-container");
  if (!container || typeof RESEARCHERS === "undefined") return;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

  container.innerHTML = "";
  let transversalHeadingAdded = false;
  RESEARCHERS.forEach((group) => {
    if (group.id.startsWith("eix-") && !transversalHeadingAdded) {
      const h = document.createElement("h2");
      h.style.color = "var(--granate-dark)";
      h.style.marginBottom = "24px";
      h.style.borderTop = "1px solid var(--linea)";
      h.style.paddingTop = "40px";
      h.textContent = dict["inv.transversals"];
      container.appendChild(h);
      transversalHeadingAdded = true;
    }
    const section = document.createElement("div");
    section.className = "challenge-group";

    const title = group.tagKey
      ? `${dict[group.titleKey] || group.titleKey}`
      : `${dict[group.titleKey] || group.titleKey}`;
    const tagHtml = group.tagKey ? `<span class="tag">${dict[group.tagKey]}</span>` : "";

    const peopleHtml = group.people
      .map((p) => {
        const bio = p.bio[lang] || p.bio[DEFAULT_LANG];
        return `
          <div class="person">
            <div class="name">${p.name}</div>
            <p>${bio}</p>
          </div>`;
      })
      .join("");

    section.innerHTML = `
      <h2>${tagHtml} ${title}</h2>
      <div class="people-grid">${peopleHtml}</div>
    `;
    container.appendChild(section);
  });
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

function initLangSwitch() {
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });
}

function markActiveNav() {
  const page = document.body.getAttribute("data-page");
  document.querySelectorAll(".nav-links a[data-page]").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("data-page") === page);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initLangSwitch();
  markActiveNav();
  applyLang(getLang());
});
