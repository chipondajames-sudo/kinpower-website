const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector("#contact-form");
const requirementInput = document.querySelector("#requirement");
const formStatus = document.querySelector("#form-status");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-category]").forEach((link) => {
  link.addEventListener("click", () => {
    requirementInput.value = `I would like to discuss ${link.dataset.category}.`;
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Thanks — your enquiry is ready to send. We’ll be in touch soon.";
  contactForm.reset();
});
