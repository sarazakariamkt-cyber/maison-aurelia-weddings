const steps = Array.from(document.querySelectorAll(".step"));
const progressBar = document.querySelector("#progressBar");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("#weddingForm");
const formStatus = document.querySelector("#formStatus");
const header = document.querySelector(".site-header");
const heroImage = document.querySelector(".hero img");
const stepDots = Array.from(document.querySelectorAll(".step-dots span"));

let currentStep = 0;

window.dataLayer = window.dataLayer || [];
const leadsEndpoint = form?.dataset.leadsEndpoint || "";
const isConfiguredEndpoint =
  leadsEndpoint &&
  leadsEndpoint !== "PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

function trackEvent(event, payload = {}) {
  window.dataLayer.push({
    event,
    page_type: "luxury_wedding_landing",
    brand: "Maison Aurelia",
    ...payload,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, {
      page_type: "luxury_wedding_landing",
      brand: "Maison Aurelia",
      ...payload,
    });
  }
}

function buildLeadPayload(data) {
  return {
    submitted_at: new Date().toISOString(),
    brand: "Maison Aurelia",
    source: "landing_page",
    page_url: window.location.href,
    referrer: document.referrer || "",
    user_agent: navigator.userAgent,
    periodo: data.periodo || "",
    data: data.data || "",
    budget: data.budget || "",
    invitati: data.invitati || "",
    location: data.location || "",
    zona: data.zona || "",
    nome: data.nome || "",
    contatto: data.contatto || "",
    messaggio: data.messaggio || "",
  };
}

function buildLeadSummary(data) {
  return [
    `Periodo: ${data.periodo || "-"}`,
    `Data: ${data.data || "-"}`,
    `Budget: ${data.budget || "-"}`,
    `Invitati: ${data.invitati || "-"}`,
    `Location: ${data.location || "-"}`,
    `Zona: ${data.zona || "-"}`,
    `Nome: ${data.nome || "-"}`,
    `Contatto: ${data.contatto || "-"}`,
    `Messaggio: ${data.messaggio || "-"}`,
  ].join("\n");
}

function updateWizard() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
  stepDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentStep);
  });
  prevBtn.style.visibility = currentStep === 0 ? "hidden" : "visible";
  nextBtn.classList.toggle("hidden", currentStep === steps.length - 1);
  submitBtn.classList.toggle("hidden", currentStep !== steps.length - 1);
  formStatus.textContent = "";

  trackEvent("lead_form_step_view", {
    step_number: currentStep + 1,
    step_name: stepDots[currentStep]?.textContent || `Step ${currentStep + 1}`,
  });
}

function validateCurrentStep() {
  const fields = Array.from(steps[currentStep].querySelectorAll("input, select, textarea"));
  const requiredFields = fields.filter((field) => field.hasAttribute("required"));
  const invalidField = requiredFields.find((field) => !field.value.trim());

  if (invalidField) {
    invalidField.reportValidity();
    return false;
  }

  return true;
}

nextBtn.addEventListener("click", () => {
  if (!validateCurrentStep()) return;
  trackEvent("lead_form_step_complete", {
    step_number: currentStep + 1,
    step_name: stepDots[currentStep]?.textContent || `Step ${currentStep + 1}`,
  });
  currentStep = Math.min(currentStep + 1, steps.length - 1);
  updateWizard();
});

prevBtn.addEventListener("click", () => {
  currentStep = Math.max(currentStep - 1, 0);
  updateWizard();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!validateCurrentStep()) return;

  const data = Object.fromEntries(new FormData(form).entries());
  const payload = buildLeadPayload(data);
  const summary = buildLeadSummary(data);

  trackEvent("generate_lead", {
    form_name: "Wedding availability request",
    wedding_period: data.periodo || "",
    budget_range: data.budget || "",
    guest_count: data.invitati || "",
    location_status: data.location || "",
    destination_area: data.zona || "",
  });

  submitBtn.disabled = true;
  formStatus.textContent = "Perfetto, sto registrando la richiesta.";

  if (isConfiguredEndpoint) {
    try {
      await fetch(leadsEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
      window.location.href = "thank-you.html";
      return;
    } catch (error) {
      trackEvent("lead_sheet_submit_error", {
        form_name: "Wedding availability request",
        error_message: error.message || "Unknown error",
      });
      submitBtn.disabled = false;
      formStatus.textContent =
        "Non sono riuscita a salvare la richiesta nel foglio. Apro l'email come backup.";
    }
  }

  window.location.href = `mailto:info@example.com?subject=Richiesta Maison Aurelia&body=${encodeURIComponent(summary)}`;
  window.setTimeout(() => {
    window.location.href = "thank-you.html";
  }, 900);
});

document.querySelectorAll('a[href="#richiesta"]').forEach((link) => {
  link.addEventListener("click", () => {
    trackEvent("lead_cta_click", {
      cta_text: link.textContent.trim(),
      cta_destination: "#richiesta",
    });
  });
});

function animateCounter(element) {
  const target = Number(element.dataset.count || 0);
  let frame = 0;
  const frames = 42;

  const tick = () => {
    frame += 1;
    const progress = Math.min(frame / frames, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(target * eased);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  tick();
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("revealed");
      if (entry.target.classList.contains("italy-copy")) {
        document.querySelectorAll("[data-count]").forEach(animateCounter);
      }
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

function handleScroll() {
  const scrollY = window.scrollY;
  header.classList.toggle("scrolled", scrollY > 24);

  if (heroImage) {
    const offset = Math.min(scrollY * 0.055, 34);
    heroImage.style.transform = `scale(1.04) translateY(${offset}px)`;
  }
}

window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();
updateWizard();
