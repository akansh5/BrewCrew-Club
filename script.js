document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
      navToggle.classList.toggle("is-active");
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);
    });
  }

  const fadeInElements = document.querySelectorAll(".fade-in");
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
  fadeInElements.forEach((element) => {
    observer.observe(element);
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinksList = document.querySelectorAll(".nav-links a");
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

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
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

  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const heroAnimationContainer = document.querySelector(
    ".hero-animation-container"
  );
  if (heroAnimationContainer) {
    const iconCount = 15;
    const colorPalette = ["#B8860B", "#D2B48C", "#A0522D", "#C0C0C0"];
    const coffeeCupSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>`;

    for (let i = 0; i < iconCount; i++) {
      const icon = document.createElement("div");
      icon.classList.add("floating-icon");
      icon.innerHTML = coffeeCupSvg;

      const size = Math.random() * 20 + 10;
      icon.style.width = `${size}px`;
      icon.style.height = `${size}px`;
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = `${Math.random() * 100}%`;
      icon.style.animationDuration = `${Math.random() * 15 + 15}s`;
      icon.style.animationDelay = `${Math.random() * 5}s`;
      icon.style.color =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];

      heroAnimationContainer.appendChild(icon);
    }
  }

  const footerAnimationContainer = document.querySelector(
    ".footer-animation-container"
  );
  if (footerAnimationContainer) {
    const iconCount = 20;
    const colorPalette = [
      "rgba(184, 134, 11, 0.15)",
      "rgba(210, 180, 140, 0.15)",
      "rgba(160, 82, 45, 0.15)",
      "rgba(255, 255, 255, 0.15)",
    ];
    const coffeeCupSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>`;

    for (let i = 0; i < iconCount; i++) {
      const icon = document.createElement("div");
      icon.classList.add("floating-icon");
      icon.innerHTML = coffeeCupSvg;

      const size = Math.random() * 20 + 10;
      icon.style.width = `${size}px`;
      icon.style.height = `${size}px`;
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = `${Math.random() * 100}%`;
      icon.style.animationDuration = `${Math.random() * 20 + 15}s`;
      icon.style.animationDelay = `${Math.random() * 10}s`;
      icon.style.color =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];

      footerAnimationContainer.appendChild(icon);
    }
  }
});
