document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initFadeInAnimations();
  initActiveNavHighlight();
  initContactForm();
});

/*  Mobile nav toggle */
function initNavToggle() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-active");

    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !isExpanded);
  });
}

/*  Fade-in animation on scroll */
function initFadeInAnimations() {
  const fadeInElements = document.querySelectorAll(".fade-in");
  if (!fadeInElements.length) return;

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInElements.forEach((element) => observer.observe(element));
}

/*  Active nav link highlight */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinksList = document.querySelectorAll(".nav-links a");

  if (!sections.length || !navLinksList.length) return;

  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - section.clientHeight / 3) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (window.scrollY < 300) {
      currentSectionId = "hero";
    }

    navLinksList.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(`#${currentSectionId}`)) {
        link.classList.add("active");
      }
    });
  });
}

/*  Contact form (mailto link) */
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const subject = `Message from ${name} via BrewCrew Club Website`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:brewcrewclub.in@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    contactForm.reset();
  });
}
