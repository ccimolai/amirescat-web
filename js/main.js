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

function stripTitleForSorting(name) {
  // Quita "Dr. " / "Dra. " del principio para poder ordenar por el nombre real
  return name.replace(/^(Dr\.|Dra\.)\s+/i, "");
}

function renderResearchers(lang) {
  const container = document.getElementById("researchers-container");
  if (!container || typeof RESEARCHERS === "undefined") return;

  // Aplanamos todos los grupos en una única lista de personas
  let allPeople = [];
  RESEARCHERS.forEach((group) => {
    group.people.forEach((p) => allPeople.push(p));
  });

  // Orden alfabético por el nombre (ignorando "Dr./Dra." y acentos)
  allPeople.sort((a, b) =>
    stripTitleForSorting(a.name).localeCompare(stripTitleForSorting(b.name), "ca", { sensitivity: "base" })
  );

  const peopleHtml = allPeople
    .map((p) => {
      const bio = p.bio[lang] || p.bio[DEFAULT_LANG];
      const roleHtml = p.role ? `<span class="lider">${p.role[lang] || p.role[DEFAULT_LANG]}</span><br>` : "";
      return `
        <div class="person">
          <div class="name">${p.name}</div>
          ${roleHtml}
          <p>${bio}</p>
        </div>`;
    })
    .join("");

  container.innerHTML = `<div class="people-grid">${peopleHtml}</div>`;
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
