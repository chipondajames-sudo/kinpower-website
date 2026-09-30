const menuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector("#primary-navigation");
const menuLabel = menuButton?.querySelector(".sr-only");

function setMenuOpen(isOpen) {
  menuButton?.setAttribute("aria-expanded", String(isOpen));
  menu?.classList.toggle("is-open", isOpen);
  if (menuLabel) menuLabel.textContent = isOpen ? "Close navigation" : "Open navigation";
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

menu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});
