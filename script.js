const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const orderForm = document.querySelector("#order-form");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    siteNav.classList.remove("is-open");
  }
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!orderForm.reportValidity()) return;

  const order = new FormData(orderForm);
  const message = [
    "Hello Nyumbani Errands, I'd like to place an order.",
    "",
    `My name: ${order.get("name")}`,
    `Country: ${order.get("country")}`,
    `Service: ${order.get("service")}`,
    `Urgency: ${order.get("urgency")}`,
    `Recipient: ${order.get("recipient")}`,
    `Recipient's phone: ${order.get("phone")}`,
    `Delivery area: ${order.get("area")}`,
    `What they need: ${order.get("details")}`,
    "",
    "Please send me an itemised quote. Thank you!"
  ].join("\n");

  const whatsappUrl = `https://wa.me/254742016981?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
