document.addEventListener("DOMContentLoaded", function () {

  // HEADER
  fetch("components/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });

  // FOOTER
  fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
  
  // FAQ ACCORDION

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });

});

