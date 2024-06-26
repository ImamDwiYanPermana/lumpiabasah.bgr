// Script JavaScript dapat ditambahkan untuk interaksi tambahan, seperti dropdown menu atau animasi lainnya
// Contoh sederhana untuk dropdown menu
const navItems = document.querySelectorAll(".nav-link");

navItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)"; // Contoh animasi sederhana saat hover
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

document.getElementById("mobile-menu").addEventListener("click", function () {
  this.classList.toggle("is-active");
  document.querySelector(".nav-links").classList.toggle("active");
});
