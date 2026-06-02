const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".nav a");
const routedControls = document.querySelectorAll("[data-screen]");
const screens = document.querySelectorAll(".app-screen");
const steps = document.querySelectorAll(".step");
const panels = document.querySelectorAll(".wizard-panel");
const prevStep = document.querySelector("#prevStep");
const nextStep = document.querySelector("#nextStep");
const homeServiceRoutes = ["lookup", "services", "support", "payment"];

let currentStep = 0;

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
});

function showScreen(screenName) {
  if (screenName === "home") {
    document.body.classList.remove("app-mode");
    screens.forEach((screen) => screen.classList.remove("is-active"));
  } else {
    document.body.classList.add("app-mode");
    screens.forEach((screen) => {
      screen.classList.toggle("is-active", screen.dataset.page === screenName);
    });
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.screen === screenName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setStep(index) {
  currentStep = Math.max(0, Math.min(index, panels.length - 1));
  steps.forEach((step, stepIndex) => {
    step.classList.toggle("is-active", stepIndex === currentStep);
  });
  panels.forEach((panel, panelIndex) => {
    panel.classList.toggle("is-active", panelIndex === currentStep);
  });
}

routedControls.forEach((control) => {
  control.addEventListener("click", (event) => {
    event.preventDefault();
    showScreen(control.dataset.screen);
  });
});

document.querySelectorAll(".service-card .service-button").forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    showScreen(homeServiceRoutes[index] || "services");
  });
});

steps.forEach((step) => {
  step.addEventListener("click", () => {
    setStep(Number(step.dataset.step));
  });
});

prevStep?.addEventListener("click", () => setStep(currentStep - 1));
nextStep?.addEventListener("click", () => setStep(currentStep + 1));
