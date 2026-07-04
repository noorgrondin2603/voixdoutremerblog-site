document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    // Accessibilité clavier : Échap referme le menu et rend le focus au bouton
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });

    // Referme le menu si le focus quitte la navigation (clavier ou clic extérieur)
    document.addEventListener("focusout", function (e) {
      if (!links.classList.contains("open")) return;
      var nav = toggle.closest(".nav");
      if (nav && !nav.contains(e.relatedTarget)) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
