document.addEventListener("DOMContentLoaded", function () {

  /* ===================== */
  /* HEADER */
  /* ===================== */

  fetch("components/header.html")
    .then(response => response.text())
    .then(data => {

      const header = document.getElementById("header");

      if (header) {
        header.innerHTML = data;
      }

    });


  /* ===================== */
  /* FOOTER */
  /* ===================== */

  fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {

      const footer = document.getElementById("footer");

      if (footer) {
        footer.innerHTML = data;
      }

    });


  /* ===================== */
  /* FAQ COMPONENT */
  /* ===================== */

  fetch("components/faq.html")
    .then(response => response.text())
    .then(data => {

      const faq = document.getElementById("faq");

      if (faq) {
        faq.innerHTML = data;
      }

    });


  /* ===================== */
  /* FAQ ACCORDION */
  /* ===================== */

  document.addEventListener("click", function (e) {

    const question = e.target.closest(".faq-question");

    if (!question) return;

    const item = question.closest(".faq-item");

    if (item) {
      item.classList.toggle("active");
    }

  });

});
