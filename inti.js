document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const submenu = document.getElementById("submenu");
  
    menuToggle.addEventListener("click", function () {
      submenu.classList.toggle("show");
    });
  });
   