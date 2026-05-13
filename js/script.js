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

});
