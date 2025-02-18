document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(
    ".navbar-collapse .nav-item,.dropdown-menu .dropdown-item "
  );
  var navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Close all dropdowns
      document.querySelectorAll(".dropdown-menu.show").forEach(function (menu) {
        menu.classList.remove("show");
      });

      // Close navbar collapse (for mobile)
      if (navbarCollapse.classList.contains("show")) {
        var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });

  // Handle dropdown toggle manually for nested submenus
  document
    .querySelectorAll(".dropdown-submenu > a")
    .forEach(function (submenu) {
      submenu.addEventListener("click", function (e) {
        e.preventDefault();
        var submenuMenu = this.nextElementSibling;
        submenuMenu.classList.toggle("show");
      });
    });
});
