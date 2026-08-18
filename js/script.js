document.addEventListener("DOMContentLoaded", function () {

  /* ===================== */
  /* AJUSTE DINÂMICO DO TOPO FIXO */
  /* ===================== */
  function adjustTopPadding() {
    const top = document.querySelector(".site-top");
    if (top) {
      document.body.style.paddingTop = top.offsetHeight + "px";
    }
  }
  window.addEventListener("resize", adjustTopPadding);
  window.addEventListener("load", adjustTopPadding);

  /* ===================== */
  /* SCROLL REVEAL */
  /* ===================== */
  function initReveal() {
    const items = document.querySelectorAll(".reveal, .reveal-group");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(el => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    items.forEach(el => io.observe(el));
  }

  /* ===================== */
  /* HEADER (componente) */
  /* ===================== */
  fetch("components/header.html")
    .then(response => response.text())
    .then(data => {
      const header = document.getElementById("header");
      if (header) {
        header.innerHTML = data;
        adjustTopPadding();
      }
    });

  /* ===================== */
  /* FOOTER (componente) */
  /* ===================== */
  fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
      const footer = document.getElementById("footer");
      if (footer) { footer.innerHTML = data; }
    });

  /* ===================== */
  /* FAQ (componente) */
  /* ===================== */
  fetch("components/faq.html")
    .then(response => response.text())
    .then(data => {
      const faq = document.getElementById("faq");
      if (faq) { faq.innerHTML = data; }
    });

  /* ===================== */
  /* MENU HAMBÚRGUER (mobile) */
  /* ===================== */
  document.addEventListener("click", function (e) {
    const toggle = e.target.closest(".nav-toggle");
    if (toggle) {
      const hc = toggle.closest(".header-content");
      const open = hc.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      adjustTopPadding();
      return;
    }
    const menuLink = e.target.closest(".menu a");
    if (menuLink) {
      const hc = menuLink.closest(".header-content");
      if (hc && hc.classList.contains("open")) {
        hc.classList.remove("open");
        const t = hc.querySelector(".nav-toggle");
        if (t) { t.setAttribute("aria-expanded", "false"); t.setAttribute("aria-label", "Abrir menu"); }
        adjustTopPadding();
      }
    }
  });

  /* ===================== */
  /* FAQ ACORDEÃO */
  /* ===================== */
  function initFaqAria() {
    document.querySelectorAll(".faq-question").forEach(function (q) {
      if (!q.hasAttribute("aria-expanded")) {
        q.setAttribute("aria-expanded", q.closest(".faq-item")?.classList.contains("active") ? "true" : "false");
      }
    });
  }
  document.addEventListener("click", function (e) {
    const question = e.target.closest(".faq-question");
    if (!question) return;
    const item = question.closest(".faq-item");
    if (item) {
      const open = item.classList.toggle("active");
      question.setAttribute("aria-expanded", open ? "true" : "false");
    }
  });
  initFaqAria();
  setTimeout(initFaqAria, 400); /* cobre FAQ injetado via componente */

  /* ===================== */
  /* CONSENTIMENTO DE COOKIES (LGPD) + GA4 */
  /* ===================== */
  var GA4_ID = "G-R8YL1V66K3";
  var CONSENT_KEY = "pulsemd_cookie_consent";

  function loadGA4() {
    if (window.__ga4Loaded) return;
    window.__ga4Loaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID);
  }

  function initCookieConsent() {
    var choice = localStorage.getItem(CONSENT_KEY);
    if (choice === "granted") { loadGA4(); return; }
    if (choice === "denied") { return; }

    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Aviso de cookies");
    banner.innerHTML =
      '<p>Usamos cookies para entender como você usa o site e melhorar sua experiência. ' +
      'Consulte nossa <a href="politica-de-privacidade.html">Política de Privacidade</a>.</p>' +
      '<div class="cookie-actions">' +
      '<button type="button" class="btn-ghost cookie-reject">Rejeitar</button>' +
      '<button type="button" class="btn cookie-accept">Aceitar</button>' +
      "</div>";
    document.body.appendChild(banner);

    banner.querySelector(".cookie-accept").addEventListener("click", function () {
      localStorage.setItem(CONSENT_KEY, "granted");
      loadGA4();
      banner.remove();
    });
    banner.querySelector(".cookie-reject").addEventListener("click", function () {
      localStorage.setItem(CONSENT_KEY, "denied");
      banner.remove();
    });
  }

  /* start */
  initReveal();
  adjustTopPadding();
  initCookieConsent();
});
