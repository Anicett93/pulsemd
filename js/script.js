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
  document.addEventListener("click", function (e) {
    const question = e.target.closest(".faq-question");
    if (!question) return;
    const item = question.closest(".faq-item");
    if (item) { item.classList.toggle("active"); }
  });

  /* start */
  initReveal();
  adjustTopPadding();
});
