/**
 * KINETIC_SYNTAX Developer Portfolio Engine
 * Author: Alex Rivera
 * Technology Stack: HTML5, CSS3, ES6 Vanilla JavaScript
 */

// --- STATIC DATABASE ---
const database = {
  personalInfo: {
    name: "Alex Rivera",
    title: "Senior Full-Stack Engineer",
    subtitle: "Especializado en arquitecturas escalables",
    bioShort: "Ingeniero de software especializado en el diseño de arquitecturas de sistemas resilientes, APIs de alta velocidad y experiencias frontend excepcionales. Enfocado en código limpio, modular y de alto rendimiento.",
    bioLong: [
      "Soy un ingeniero de software apasionado por resolver problemas complejos y construir soluciones que escalan. Con más de 5 años de trayectoria profesional, he diseñado soluciones que procesan miles de solicitudes por segundo, optimizando bases de datos y refinando interfaces interactivas para usuarios de todo el mundo.",
      "Creo fervientemente en que el software excelente no es solo el que funciona, sino el que es legible, mantenible y robusto ante fallos. Mi filosofía de diseño se apoya en el minimalismo suizo, tipografías monoespaciadas legibles y la automatización extrema de procesos de integración continua."
    ],
    socials: {
      github: "https://github.com/arivera-dev",
      linkedin: "https://linkedin.com/in/alex-rivera-dev",
      email: "alex.rivera@dev.io",
      location: "Madrid, España"
    }
  },
  skills: [
    // Languages
    { name: "TypeScript", category: "languages", proficiency: 95, icon: "code" },
    { name: "JavaScript (ES6)", category: "languages", proficiency: 95, icon: "code" },
    { name: "Go", category: "languages", proficiency: 80, icon: "terminal" },
    { name: "Python", category: "languages", proficiency: 75, icon: "terminal" },
    { name: "SQL (PostgreSQL)", category: "languages", proficiency: 88, icon: "database" },
    
    // Frontend
    { name: "React 19", category: "frontend", proficiency: 92, icon: "layers" },
    { name: "Next.js", category: "frontend", proficiency: 90, icon: "layers" },
    { name: "Tailwind CSS", category: "frontend", proficiency: 95, icon: "grid" },
    { name: "D3.js", category: "frontend", proficiency: 75, icon: "binary" },
    { name: "HTML5 & CSS3", category: "frontend", proficiency: 95, icon: "code" },

    // Backend & DB
    { name: "Node.js (Express)", category: "backend", proficiency: 90, icon: "server" },
    { name: "GraphQL & REST", category: "backend", proficiency: 88, icon: "refresh" },
    { name: "Redis", category: "backend", proficiency: 82, icon: "database" },
    { name: "Drizzle / Prisma", category: "backend", proficiency: 85, icon: "database" },

    // Tools & DevOps
    { name: "Docker", category: "tools", proficiency: 85, icon: "box" },
    { name: "Kubernetes", category: "tools", proficiency: 72, icon: "cloud" },
    { name: "GitHub Actions", category: "tools", proficiency: 88, icon: "git" },
    { name: "AWS (S3, EC2)", category: "tools", proficiency: 80, icon: "cloud" }
  ],
  projects: [
    {
      id: "dataviz-pro",
      title: "FinTrack Dashboard",
      category: "fullstack",
      featured: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      description: "Plataforma SaaS para la gestión financiera en tiempo real. Incluye un motor de agregación de cuentas bancarias de alta precisión, gráficos interactivos SVG de rendimiento diario y análisis predictivo de gastos futuros.",
      extendedDescription: "FinTrack es una solución robusta de análisis de datos financieros capaz de procesar múltiples fuentes bancarias sincronizadas de forma concurrente. La interfaz está construida pensando en analistas, ofreciendo zoom dinámico, filtros por rango temporal y exportación nativa a formatos estructurados. Optimizado para tiempos de carga menores a 0.8s.",
      tags: ["React", "Next.js", "D3.js", "PostgreSQL", "Redis"],
      codeUrl: "https://github.com/arivera-dev/fintrack-dashboard"
    },
    {
      id: "syntax-engine",
      title: "Pulse API Gateway",
      category: "backend",
      featured: true,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      description: "Middleware proxy reverso de alto rendimiento procesando +10,000 req/s con autenticación JWT distribuida, limitación de tasa dinámica y telemetría integrada.",
      extendedDescription: "Este proxy reverso actúa como una barrera de alto rendimiento para clústeres Kubernetes distribuidos. Diseñado en lenguaje Go para lograr la mínima latencia añadida, cuenta con rate-limiting distribuido gobernado por Redis y un sistema de cache de sesión criptográfica asimétrica.",
      tags: ["Go", "Redis", "gRPC", "Docker", "Kubernetes"],
      codeUrl: "https://github.com/arivera-dev/pulse-api-gateway"
    },
    {
      id: "nexus-storefront",
      title: "Nexus Commerce",
      category: "frontend",
      featured: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "Tienda online de comercio electrónico ultra-rápida. Enfocada en diseño minimalista, SEO técnico óptimo y soporte nativo sin conexión mediante Service Workers.",
      extendedDescription: "Una experiencia de e-commerce que roza la perfección en optimización de Core Web Vitals (puntuación de 100/100 en Lighthouse). Implementa carrito de compras reactivo local, sincronización silenciosa y pasarela de pago optimizada.",
      tags: ["React", "Tailwind CSS", "Vite", "TypeScript"],
      codeUrl: "https://github.com/arivera-dev/nexus-commerce"
    },
    {
      id: "cloudmesh",
      title: "CloudMesh Engine",
      category: "infrastructure",
      featured: false,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      description: "Infraestructura como Código (IaC) para el aprovisionamiento automatizado y securizado de clústeres multirregionales escalables de Kubernetes en entornos híbridos de nube.",
      extendedDescription: "CloudMesh define recetas modulares de Terraform con alta tolerancia a fallos. Integra monitorización robusta con Prometheus y Grafana, alertas instantáneas automatizadas y configuraciones Zero-Trust Network.",
      tags: ["Terraform", "AWS", "Prometheus", "Docker"],
      codeUrl: "https://github.com/arivera-dev/cloudmesh-infra"
    }
  ],
  timeline: [
    {
      id: "t1",
      role: "Senior Software Engineer",
      organization: "Core Security Labs",
      period: "2024 - Presente",
      type: "experience",
      description: "Lidero el diseño y desarrollo de pasarelas de seguridad cloud robustas, mejorando los tiempos de respuesta del API en un 35% y estableciendo flujos DevOps integrados para 12 microservicios críticos.",
      skillsAcquired: ["Go", "Kubernetes", "Redis", "Zero-Trust", "Docker"]
    },
    {
      id: "t2",
      role: "Full-Stack Developer",
      organization: "Tech Solutions Corp",
      period: "2021 - 2024",
      type: "experience",
      description: "Desarrollé paneles administrativos reactivos de datos masivos. Lideré la migración completa de un backend monolítico heredado hacia microservicios desacoplados basados en Node.js.",
      skillsAcquired: ["React", "Next.js", "TypeScript", "D3.js", "PostgreSQL"]
    },
    {
      id: "t3",
      role: "MSc Cloud Architecture",
      organization: "Advanced Technology Institute",
      period: "2023",
      type: "education",
      description: "Programa de posgrado intensivo enfocado en computación en la nube distribuida, patrones de diseño de sistemas de alta disponibilidad y gestión de orquestación de contenedores.",
      skillsAcquired: ["Kubernetes", "AWS", "IaC (Terraform)", "Seguridad Cloud"]
    },
    {
      id: "t4",
      role: "Graduado en Ingeniería de Software",
      organization: "Universidad Politécnica de Madrid",
      period: "2017 - 2021",
      type: "education",
      description: "Formación superior en fundamentos de la informática, algoritmos avanzados, paradigmas de programación (orientada a objetos y funcional), e ingeniería de requerimientos.",
      skillsAcquired: ["Algoritmia", "Estructura de Datos", "SQL", "Patrones de Diseño"]
    }
  ]
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileDrawer();
  renderSkills();
  renderProjects();
  renderTimeline();
  initSkillsSearchAndFilters();
  initProjectsFilters();
  initModals();
  initContactForm();
  initInboxSimulator();
  lucide.createIcons(); // Initialize CDNs Icons
});

// --- NAVIGATION UTILITIES ---
function initNavbarScroll() {
  const header = document.querySelector(".header-nav");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Toggle solid background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scroll spy: Active navigation item highlighting
    let currentActive = "";
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentActive = section.getAttribute("id") || "";
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentActive}`) {
        link.classList.add("active");
      }
    });
  });
}

function initMobileDrawer() {
  const hamburger = document.querySelector(".hamburger");
  const drawer = document.querySelector(".mobile-drawer");
  const backdrop = document.querySelector(".mobile-drawer-backdrop");
  const closeBtn = document.querySelector(".drawer-close");
  const drawerLinks = document.querySelectorAll(".mobile-nav-link");

  function openDrawer() {
    drawer.classList.add("active");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", openDrawer);
  backdrop.addEventListener("click", closeDrawer);
  closeBtn.addEventListener("click", closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });
}

// --- RENDER FUNCTIONS ---

function renderSkills(filterCategory = "all", filterText = "") {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = database.skills.filter((skill) => {
    const matchesCategory = filterCategory === "all" || skill.category === filterCategory;
    const matchesText = skill.name.toLowerCase().includes(filterText.toLowerCase());
    return matchesCategory && matchesText;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="skills-empty">Ninguna habilidad coincide con el término de búsqueda.</div>`;
    return;
  }

  filtered.forEach((skill) => {
    const card = document.createElement("div");
    card.className = "skill-card fade-in";
    
    // Choose Lucide icon name according to category
    let iconName = "code";
    if (skill.icon === "terminal") iconName = "terminal";
    else if (skill.icon === "database") iconName = "database";
    else if (skill.icon === "layers") iconName = "layers";
    else if (skill.icon === "grid") iconName = "layout-grid";
    else if (skill.icon === "box") iconName = "box";
    else if (skill.icon === "cloud") iconName = "cloud";
    else if (skill.icon === "git") iconName = "git-branch";
    else if (skill.icon === "refresh") iconName = "refresh-cw";
    else if (skill.icon === "binary") iconName = "binary";

    card.innerHTML = `
      <div class="skill-top">
        <div class="skill-icon">
          <i data-lucide="${iconName}"></i>
        </div>
        <span class="skill-name">${skill.name}</span>
      </div>
      <div class="skill-progress-container">
        <div class="skill-progress-header">
          <span>Proficiency</span>
          <span>${skill.proficiency}%</span>
        </div>
        <div class="skill-bar-bg">
          <div class="skill-bar-fill" style="width: ${skill.proficiency}%"></div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  lucide.createIcons(); // Re-initialize icons inside dynamic HTML
}

function renderProjects(filterCategory = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = database.projects.filter((project) => {
    return filterCategory === "all" || project.category === filterCategory;
  });

  filtered.forEach((project) => {
    const card = document.createElement("article");
    card.className = `project-card fade-in ${project.featured ? 'featured' : ''}`;
    
    // Map tags
    const tagsHTML = project.tags.map(t => `<span class="tech-tag">${t}</span>`).join("");

    card.innerHTML = `
      <div class="project-img-wrapper">
        <img class="project-img" src="${project.image}" alt="${project.title}" referrerPolicy="no-referrer">
      </div>
      <div class="project-card-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-techs">
          ${tagsHTML}
        </div>
        <div class="project-actions">
          <button class="btn btn-primary btn-sm view-demo-btn" data-id="${project.id}">
            <i data-lucide="external-link" style="width:14px; height:14px;"></i> Demo
          </button>
          <button class="btn btn-accent-outline btn-sm view-details-btn" data-id="${project.id}">
            <i data-lucide="folder-open" style="width:14px; height:14px;"></i> Detalles
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  lucide.createIcons();
  bindProjectActionEvents();
}

function renderTimeline() {
  const container = document.getElementById("timeline-items-container");
  if (!container) return;

  container.innerHTML = "";

  database.timeline.forEach((item) => {
    const card = document.createElement("div");
    card.className = "timeline-item";

    const isExp = item.type === "experience";
    const nodeIcon = isExp ? "briefcase" : "graduation-cap";

    const skillsHTML = item.skillsAcquired.map(s => `<span class="timeline-skill-tag">${s}</span>`).join("");

    card.innerHTML = `
      <div class="timeline-node">
        <i data-lucide="${nodeIcon}"></i>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${item.role}</h3>
            <span class="timeline-org">${item.organization}</span>
          </div>
          <span class="timeline-period">${item.period}</span>
        </div>
        <p class="timeline-desc">${item.description}</p>
        <div class="timeline-skills">
          ${skillsHTML}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  lucide.createIcons();
}

// --- DYNAMIC SEARCH & FILTER CONTROLS ---

function initSkillsSearchAndFilters() {
  const searchInput = document.getElementById("skill-search");
  const tabs = document.querySelectorAll(".category-tab");

  let activeCat = "all";
  let activeSearch = "";

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearch = e.target.value;
      renderSkills(activeCat, activeSearch);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCat = tab.getAttribute("data-category");
      renderSkills(activeCat, activeSearch);
    });
  });
}

function initProjectsFilters() {
  const tabs = document.querySelectorAll(".project-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-category");
      renderProjects(category);
    });
  });
}

// --- MODALS SYSTEM ---

function initModals() {
  const modalOverlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close-btn");
  const cvBtn = document.getElementById("header-resume-cta");
  const drawerCvBtn = document.getElementById("drawer-resume-cta");
  const printBtn = document.getElementById("print-cv-btn");

  // Dynamic Elements for modal contents
  const projectDetailsContent = document.getElementById("project-modal-content");
  const cvContent = document.getElementById("cv-modal-content");
  const modalHeaderTitle = document.getElementById("modal-header-title");

  function openModal(type) {
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    if (type === "cv") {
      projectDetailsContent.style.display = "none";
      cvContent.style.display = "block";
      modalHeaderTitle.innerHTML = `<i data-lucide="file-text"></i> Curriculum Vitae`;
      printBtn.style.display = "inline-flex";
    } else {
      cvContent.style.display = "none";
      projectDetailsContent.style.display = "block";
      modalHeaderTitle.innerHTML = `<i data-lucide="folder-open"></i> Detalles de Proyecto`;
      printBtn.style.display = "none";
    }
    lucide.createIcons();
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  cvBtn.addEventListener("click", () => openModal("cv"));
  drawerCvBtn.addEventListener("click", () => {
    openModal("cv");
    // Close mobile drawer
    document.querySelector(".mobile-drawer").classList.remove("active");
    document.querySelector(".mobile-drawer-backdrop").classList.remove("active");
  });

  printBtn.addEventListener("click", () => {
    window.print();
  });

  // Global triggers inside window to open project modals
  window.openProjectModal = function(projectId) {
    const project = database.projects.find(p => p.id === projectId);
    if (!project) return;

    const tagsHTML = project.tags.map(t => `<span class="tech-tag">${t}</span>`).join("");

    projectDetailsContent.innerHTML = `
      <div class="project-modal-hero">
        <img class="project-modal-img" src="${project.image}" alt="${project.title}" referrerPolicy="no-referrer">
        <div class="project-modal-overlay"></div>
        <div class="project-modal-meta">
          <span class="project-modal-category">${project.category.toUpperCase()}</span>
          <h2 class="project-modal-title">${project.title}</h2>
        </div>
      </div>
      <div style="padding-top:20px;">
        <p class="project-modal-desc">${project.extendedDescription || project.description}</p>
        <div style="margin-top:20px;">
          <span class="project-modal-tech-label">Stack Tecnológico Utilizado</span>
          <div class="project-modal-techs">
            ${tagsHTML}
          </div>
        </div>
      </div>
    `;

    openModal("project");
  };
}

function bindProjectActionEvents() {
  document.querySelectorAll(".view-demo-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = btn.getAttribute("data-id");
      const project = database.projects.find(p => p.id === id);
      showToast("success", `Iniciando demostración para: ${project.title}. (Entorno de pruebas local)`);
    });
  });

  document.querySelectorAll(".view-details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      window.openProjectModal(id);
    });
  });
}

// --- CONTACT FORM & SIMULATED INBOX ---

function initContactForm() {
  const form = document.getElementById("contact-form");
  const btnAutofill = document.getElementById("btn-autofill-contact");

  if (!form) return;

  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorMsg = document.getElementById("error-message");

  // Autofill button click handler
  btnAutofill.addEventListener("click", () => {
    document.getElementById("name").value = "Elena Ramos";
    document.getElementById("email").value = "elena.ramos@talenttech.com";
    document.getElementById("message").value = "Hola Alex, vi tu portafolio Kinetic Syntax y me impresionó la precisión técnica y la arquitectura limpia de tus proyectos. Me gustaría agendar una breve llamada de 15 minutos para conversar sobre un puesto de Senior Engineer.";
    
    // Clear error tags on autofill
    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorMsg.innerHTML = "";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameVal = document.getElementById("name").value.trim();
    const emailVal = document.getElementById("email").value.trim();
    const msgVal = document.getElementById("message").value.trim();

    let isValid = true;

    // Validate Name
    if (!nameVal) {
      errorName.innerHTML = `<i data-lucide="alert-circle"></i> El nombre es obligatorio.`;
      isValid = false;
    } else {
      errorName.innerHTML = "";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) {
      errorEmail.innerHTML = `<i data-lucide="alert-circle"></i> El correo es obligatorio.`;
      isValid = false;
    } else if (!emailRegex.test(emailVal)) {
      errorEmail.innerHTML = `<i data-lucide="alert-circle"></i> Introduce un correo electrónico válido.`;
      isValid = false;
    } else {
      errorEmail.innerHTML = "";
    }

    // Validate Message
    if (!msgVal) {
      errorMsg.innerHTML = `<i data-lucide="alert-circle"></i> El mensaje es obligatorio.`;
      isValid = false;
    } else if (msgVal.length < 10) {
      errorMsg.innerHTML = `<i data-lucide="alert-circle"></i> El mensaje debe tener al menos 10 caracteres.`;
      isValid = false;
    } else {
      errorMsg.innerHTML = "";
    }

    lucide.createIcons();

    if (!isValid) return;

    // Submit state simulation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span style="display:inline-block; width:14px; height:14px; border:2px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation: spin 0.8s linear infinite; margin-right:6px; vertical-align:middle;"></span> Transmitiendo...`;

    setTimeout(() => {
      // Save submission to LocalStorage inbox simulation
      const submissions = JSON.parse(localStorage.getItem("kinetic_syntax_submissions") || "[]");
      const newSubmission = {
        id: Math.random().toString(36).substring(2, 9),
        name: nameVal,
        email: emailVal,
        message: msgVal,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' - ' + new Date().toLocaleDateString()
      };

      submissions.unshift(newSubmission);
      localStorage.setItem("kinetic_syntax_submissions", JSON.stringify(submissions));

      // Refresh inbox list
      loadInboxSimulator();

      // Reset form fields
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      showToast("success", "¡Mensaje transmitido con éxito! Se ha recibido en tu bandeja de simulación local.");
    }, 1200);
  });
}

// --- LOCAL STORAGE INBOX SIMULATOR ---

function initInboxSimulator() {
  const clearBtn = document.getElementById("clear-inbox");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      localStorage.removeItem("kinetic_syntax_submissions");
      loadInboxSimulator();
      showToast("success", "Bandeja de simulación vaciada.");
    });
  }
  loadInboxSimulator();
}

function loadInboxSimulator() {
  const container = document.getElementById("inbox-messages");
  const countBadge = document.getElementById("inbox-count-badge");
  
  if (!container) return;

  const submissions = JSON.parse(localStorage.getItem("kinetic_syntax_submissions") || "[]");
  
  // Set count badge
  if (countBadge) {
    countBadge.innerText = submissions.length;
  }

  if (submissions.length === 0) {
    container.innerHTML = `<div class="inbox-empty">Bandeja de entrada local vacía</div>`;
    return;
  }

  container.innerHTML = submissions.map((msg) => `
    <div class="inbox-msg fade-in">
      <div class="inbox-msg-meta">
        <strong>${escapeHtml(msg.name)} &lt;${escapeHtml(msg.email)}&gt;</strong>
        <span>${msg.timestamp}</span>
      </div>
      <div class="inbox-msg-text">${escapeHtml(msg.message)}</div>
    </div>
  `).join("");
}

// --- TOAST ALERTS NOTIFICATIONS ---

function showToast(type, text) {
  const toastContainer = document.getElementById("toast-container");
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  const iconName = type === "success" ? "check-circle" : "alert-circle";

  toast.innerHTML = `
    <div class="toast-icon">
      <i data-lucide="${iconName}"></i>
    </div>
    <div class="toast-text">${text}</div>
  `;

  toastContainer.appendChild(toast);
  lucide.createIcons();

  // Slide-in animation trigger
  setTimeout(() => {
    toast.classList.add("active");
  }, 10);

  // Auto destruction
  setTimeout(() => {
    toast.classList.remove("active");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
}

// Escape helper to prevent HTML injection inside browser simulator inbox
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
