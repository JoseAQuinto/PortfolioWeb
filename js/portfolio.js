/*
  Portfolio interactions and translations.
  EDIT HERE: update text in both `en` and `es` to keep the site bilingual.
*/

const translations = {
  en: {
    skip: "Skip to content", name: "Your Name", menu: "Open menu",
    navHome: "Home", navAbout: "About", navExperience: "Experience", navProjects: "Projects", navSkills: "Skills", navLanguages: "Languages", navContact: "Contact", downloadCv: "Download CV",
    heroEyebrow: "Event Management Graduate · International Profile",
    heroTitle: "Thoughtful events.<br><em>Lasting experiences.</em>",
    heroIntro: "I bring structure, creativity and an international perspective to every experience—turning ideas into well-coordinated moments that connect people.",
    viewExperience: "View my experience", contactMe: "Contact me", factOne: "Event Management", factOneSub: "Graduate", factTwo: "International", factTwoSub: "Mindset", factThreeSub: "Professional level", factFour: "2 years", factFourSub: "London experience", available: "Available for international opportunities", discover: "Discover",
    aboutEyebrow: "01 · About me", aboutTitle: "Organised by nature,<br><em>inspired by people.</em>", aboutLead: "With a university background in Event Management, I am motivated by the challenge of creating experiences where every detail feels effortless to the guest.", aboutBody: "My approach combines coordination, logistics and thoughtful communication. Two years living and working in London strengthened my independence, cultural awareness and ability to respond calmly when plans change. I now want to build my career in an international events team where ideas, people and precise execution come together.", role: "Event Management & Coordination",
    experienceEyebrow: "02 · Experience", experienceTitle: "International experience,<br><em>transferable strengths.</em>", experienceIntro: "Professional skills are built wherever responsibility, people and planning meet.", londonPeriod: "Two-year experience", internationalExperience: "International experience", londonRole: "Private Childcare & Family Support", londonBody: "Managed daily routines and changing priorities for an international family, communicating confidently in English and taking ownership of a trusted, people-focused role.", londonSkill1: "Daily schedule and activity planning", londonSkill2: "Calm resolution of unexpected situations", londonSkill3: "Coordination of small family activities and celebrations", londonSkill4: "Cross-cultural communication and adaptability", londonSkill5: "High standards of responsibility and discretion", addDates: "Add dates", addLocation: "City / Country", editableExperience: "Editable experience", addRole: "Add internship, volunteering or role", addRoleBody: "Describe the context, responsibilities and measurable contribution to the team or event.",
    educationEyebrow: "03 · Education", educationTitle: "A foundation in<br><em>Event Management.</em>", degreePeriod: "Add study dates", degreeCity: "Add city", degreeName: "University Degree in Event Management", degreeSchool: "[Add university or education centre]", subject1: "Event production", subject2: "Protocol", subject3: "Communication", subject4: "Hospitality", subject5: "Marketing", subject6: "Project management", additionalTraining: "Additional training", additionalTrainingBody: "[Add certifications, courses, academic projects or specialist training here.]",
    projectsEyebrow: "04 · Selected projects", projectsTitle: "Ideas ready to become<br><em>real experiences.</em>", projectsIntro: "Concept examples showing the type of work this portfolio can feature. Replace them with real academic or professional projects.", conceptLabel: "Editable concept", viewProject: "View project", projectCorporateType: "Corporate event", projectCorporateTitle: "Leadership Meeting", projectConferenceType: "International conference", projectConferenceTitle: "Ideas Without Borders", projectWeddingType: "Wedding planning", projectWeddingTitle: "Mediterranean Celebration", projectFestivalType: "Cultural festival", projectFestivalTitle: "City in Motion", projectBrandType: "Brand experience", projectBrandTitle: "The Sensory Room", projectCharityType: "Charity event", projectCharityTitle: "An Evening with Purpose",
    skillsEyebrow: "05 · Skills", skillsTitle: "The skills behind a<br><em>seamless experience.</em>", skillsPlan: "Planning & production", skillsPeople: "People & communication", skillsCreative: "Creative & digital",
    skillEventPlanning: "Event planning", skillEventCoordination: "Event coordination", skillLogistics: "Logistics", skillVendor: "Vendor coordination", skillBudget: "Budget support", skillTime: "Time management", skillGuest: "Guest management", skillCommunication: "Communication", skillTeamwork: "Teamwork", skillProblem: "Problem solving", skillIntercultural: "Intercultural communication", skillHospitality: "Hospitality", skillCreativity: "Creativity", skillDetail: "Attention to detail", skillOffice: "Microsoft Office", skillSocial: "Social media", skillCanva: "Canva", skillPresentation: "Presentation design",
    languagesEyebrow: "06 · Languages", languagesTitle: "Ready to connect<br><em>across cultures.</em>", languagesBody: "Two years of daily life and work in London turned English into a practical professional tool—not just a qualification.", english: "English", englishDetail: "Professional working proficiency · London experience", spanish: "Spanish", catalan: "Catalan", native: "Native language", nativeShort: "Native",
    valuesEyebrow: "How I work", value1: "Detail-oriented", value2: "International mindset", value3: "Calm under pressure", value4: "Creative planning", value5: "People-focused", value6: "Reliable execution",
    testimonialsEyebrow: "07 · Testimonials", testimonialsTitle: "Kind words,<br><em>coming soon.</em>", testimonialText: "“Replace this text with a short, verified recommendation from a lecturer, internship supervisor, colleague or family you worked with.”", testimonialName: "[Add real name]", testimonialRole: "[Add role and relationship]",
    contactEyebrow: "08 · Contact", contactTitle: "Let’s create memorable<br><em>experiences together.</em>", contactIntro: "I am open to roles in agencies, corporate events, hotels, conferences, festivals, hospitality and international production teams.", email: "Email", phone: "Phone", location: "Location", locationValue: "[City / Region, Spain]", mobility: "Mobility", mobilityValue: "Available to travel and relocate internationally", otherPortfolio: "Other portfolio ↗", formName: "Name", formNamePlaceholder: "Your name", formEmail: "Email", formCompany: "Company", formCompanyPlaceholder: "Company or organisation", formMessage: "Message", formMessagePlaceholder: "Tell me about the role or project", sendMessage: "Send message", formRequired: "Please complete this field.", formEmailInvalid: "Enter a valid email address.", formOpeningEmail: "Your email app is opening. If it does not, write to your.email@example.com.",
    rights: "All rights reserved.", backTop: "Back to top", modalObjective: "Objective", modalRole: "Role / responsibilities", modalGuests: "Guests", modalOutcome: "Outcome", moreInfo: "More information", closeModal: "Close project details"
  },
  es: {
    skip: "Saltar al contenido", name: "Tu Nombre", menu: "Abrir menú",
    navHome: "Inicio", navAbout: "Sobre mí", navExperience: "Experiencia", navProjects: "Proyectos", navSkills: "Competencias", navLanguages: "Idiomas", navContact: "Contacto", downloadCv: "Descargar CV",
    heroEyebrow: "Graduada en Organización de Eventos · Perfil internacional",
    heroTitle: "Eventos cuidados.<br><em>Experiencias que perduran.</em>",
    heroIntro: "Aporto estructura, creatividad y una perspectiva internacional a cada experiencia, convirtiendo ideas en momentos bien coordinados que conectan a las personas.",
    viewExperience: "Ver mi experiencia", contactMe: "Contacta conmigo", factOne: "Organización de eventos", factOneSub: "Titulación universitaria", factTwo: "Internacional", factTwoSub: "Mentalidad", factThreeSub: "Nivel profesional", factFour: "2 años", factFourSub: "Experiencia en Londres", available: "Disponible para oportunidades internacionales", discover: "Descubrir",
    aboutEyebrow: "01 · Sobre mí", aboutTitle: "Organizada por naturaleza,<br><em>inspirada por las personas.</em>", aboutLead: "Con formación universitaria en Organización de Eventos, me motiva el reto de crear experiencias en las que cada detalle resulte natural para el invitado.", aboutBody: "Mi enfoque combina coordinación, logística y una comunicación cuidada. Dos años viviendo y trabajando en Londres reforzaron mi autonomía, sensibilidad cultural y capacidad para responder con calma cuando los planes cambian. Ahora quiero desarrollar mi carrera en un equipo internacional de eventos donde confluyan las ideas, las personas y una ejecución precisa.", role: "Organización y Coordinación de Eventos",
    experienceEyebrow: "02 · Experiencia", experienceTitle: "Experiencia internacional,<br><em>competencias transferibles.</em>", experienceIntro: "Las competencias profesionales se construyen allí donde se unen la responsabilidad, las personas y la planificación.", londonPeriod: "Experiencia de dos años", internationalExperience: "Experiencia internacional", londonRole: "Cuidado infantil privado y apoyo familiar", londonBody: "Gestioné rutinas diarias y prioridades cambiantes para una familia internacional, comunicándome con seguridad en inglés y asumiendo un puesto de confianza centrado en las personas.", londonSkill1: "Planificación diaria de horarios y actividades", londonSkill2: "Resolución serena de situaciones imprevistas", londonSkill3: "Coordinación de pequeñas actividades y celebraciones familiares", londonSkill4: "Comunicación intercultural y adaptabilidad", londonSkill5: "Alto nivel de responsabilidad y discreción", addDates: "Añadir fechas", addLocation: "Ciudad / País", editableExperience: "Experiencia editable", addRole: "Añadir prácticas, voluntariado o puesto", addRoleBody: "Describe el contexto, las responsabilidades y la contribución medible al equipo o al evento.",
    educationEyebrow: "03 · Formación", educationTitle: "Una base sólida en<br><em>Organización de Eventos.</em>", degreePeriod: "Añadir fechas de estudios", degreeCity: "Añadir ciudad", degreeName: "Grado Universitario en Organización de Eventos", degreeSchool: "[Añadir universidad o centro educativo]", subject1: "Producción de eventos", subject2: "Protocolo", subject3: "Comunicación", subject4: "Hospitality", subject5: "Marketing", subject6: "Gestión de proyectos", additionalTraining: "Formación adicional", additionalTrainingBody: "[Añadir certificaciones, cursos, proyectos académicos o formación especializada.]",
    projectsEyebrow: "04 · Proyectos seleccionados", projectsTitle: "Ideas preparadas para convertirse en<br><em>experiencias reales.</em>", projectsIntro: "Ejemplos conceptuales del tipo de trabajo que puede mostrar este portfolio. Sustitúyelos por proyectos académicos o profesionales reales.", conceptLabel: "Concepto editable", viewProject: "Ver proyecto", projectCorporateType: "Evento corporativo", projectCorporateTitle: "Encuentro de Liderazgo", projectConferenceType: "Congreso internacional", projectConferenceTitle: "Ideas Sin Fronteras", projectWeddingType: "Organización de bodas", projectWeddingTitle: "Celebración Mediterránea", projectFestivalType: "Festival cultural", projectFestivalTitle: "Ciudad en Movimiento", projectBrandType: "Experiencia de marca", projectBrandTitle: "La Sala Sensorial", projectCharityType: "Evento benéfico", projectCharityTitle: "Una Noche con Propósito",
    skillsEyebrow: "05 · Competencias", skillsTitle: "Las competencias detrás de una<br><em>experiencia impecable.</em>", skillsPlan: "Planificación y producción", skillsPeople: "Personas y comunicación", skillsCreative: "Creatividad y entorno digital",
    skillEventPlanning: "Planificación de eventos", skillEventCoordination: "Coordinación de eventos", skillLogistics: "Logística", skillVendor: "Coordinación de proveedores", skillBudget: "Apoyo en presupuestos", skillTime: "Gestión del tiempo", skillGuest: "Atención a invitados", skillCommunication: "Comunicación", skillTeamwork: "Trabajo en equipo", skillProblem: "Resolución de problemas", skillIntercultural: "Comunicación intercultural", skillHospitality: "Hospitality", skillCreativity: "Creatividad", skillDetail: "Atención al detalle", skillOffice: "Microsoft Office", skillSocial: "Redes sociales", skillCanva: "Canva", skillPresentation: "Diseño de presentaciones",
    languagesEyebrow: "06 · Idiomas", languagesTitle: "Preparada para conectar<br><em>entre culturas.</em>", languagesBody: "Dos años de vida y trabajo diario en Londres convirtieron el inglés en una herramienta profesional práctica, no solo en una titulación.", english: "Inglés", englishDetail: "Competencia profesional · Experiencia en Londres", spanish: "Español", catalan: "Catalán", native: "Lengua nativa", nativeShort: "Nativo",
    valuesEyebrow: "Cómo trabajo", value1: "Atención al detalle", value2: "Mentalidad internacional", value3: "Calma bajo presión", value4: "Planificación creativa", value5: "Enfoque en las personas", value6: "Ejecución fiable",
    testimonialsEyebrow: "07 · Testimonios", testimonialsTitle: "Buenas palabras,<br><em>muy pronto.</em>", testimonialText: "«Sustituye este texto por una recomendación breve y verificada de un docente, supervisor de prácticas, compañero o familia con la que hayas trabajado.»", testimonialName: "[Añadir nombre real]", testimonialRole: "[Añadir cargo y relación]",
    contactEyebrow: "08 · Contacto", contactTitle: "Creemos juntos experiencias<br><em>memorables.</em>", contactIntro: "Estoy abierta a puestos en agencias, eventos corporativos, hoteles, congresos, festivales, hospitality y equipos de producción internacional.", email: "Correo", phone: "Teléfono", location: "Ubicación", locationValue: "[Ciudad / Región, España]", mobility: "Movilidad", mobilityValue: "Disponible para viajar y trasladarme internacionalmente", otherPortfolio: "Otro portfolio ↗", formName: "Nombre", formNamePlaceholder: "Tu nombre", formEmail: "Correo", formCompany: "Empresa", formCompanyPlaceholder: "Empresa u organización", formMessage: "Mensaje", formMessagePlaceholder: "Cuéntame sobre el puesto o proyecto", sendMessage: "Enviar mensaje", formRequired: "Completa este campo.", formEmailInvalid: "Introduce un correo válido.", formOpeningEmail: "Se está abriendo tu aplicación de correo. Si no lo hace, escribe a your.email@example.com.",
    rights: "Todos los derechos reservados.", backTop: "Volver arriba", modalObjective: "Objetivo", modalRole: "Funciones / responsabilidades", modalGuests: "Asistentes", modalOutcome: "Resultado", moreInfo: "Más información", closeModal: "Cerrar detalles del proyecto"
  }
};

/* REPLACE: sample project concepts below with real, verifiable project data. */
const projectData = {
  en: {
    corporate: { type: "Corporate event · Editable concept", title: "Leadership Meeting", description: "A calm, premium off-site concept designed to help an international leadership team align, connect and make decisions.", objective: "Create a focused two-day programme with space for strategic sessions and informal networking.", role: "Run of show, venue research, guest journey, supplier brief and on-site coordination plan.", guests: "[Add real figure]", outcome: "[Add verified result or academic assessment]", image: "assets/images/project-corporate.svg" },
    conference: { type: "International conference · Editable concept", title: "Ideas Without Borders", description: "A bilingual conference concept connecting young professionals with speakers from the international events industry.", objective: "Make specialist knowledge accessible through talks, workshops and meaningful networking.", role: "Programme structure, speaker support, registration flow, signage and hospitality planning.", guests: "[Add real figure]", outcome: "[Add verified result or academic assessment]", image: "assets/images/project-conference.svg" },
    wedding: { type: "Wedding planning · Editable concept", title: "Mediterranean Celebration", description: "An intimate destination wedding concept built around warm hospitality, local materials and a relaxed guest experience.", objective: "Coordinate a coherent celebration for guests travelling from several countries.", role: "Moodboard, supplier schedule, ceremony timeline, seating plan and guest communication concept.", guests: "[Add real figure]", outcome: "[Add verified result or academic assessment]", image: "assets/images/project-wedding.svg" },
    festival: { type: "Cultural festival · Editable concept", title: "City in Motion", description: "A one-day urban culture programme combining performance, food, workshops and community participation.", objective: "Bring different audiences together through an accessible cultural experience.", role: "Site flow, activity schedule, volunteer briefing, accessibility review and contingency planning.", guests: "[Add real figure]", outcome: "[Add verified result or academic assessment]", image: "assets/images/project-festival.svg" },
    brand: { type: "Brand experience · Editable concept", title: "The Sensory Room", description: "A small-format product launch that invites guests to discover a brand through texture, sound, taste and personal storytelling.", objective: "Turn product values into a memorable, shareable guest journey.", role: "Experience mapping, touchpoint ideas, invitation flow, content moments and supplier coordination.", guests: "[Add real figure]", outcome: "[Add verified result or academic assessment]", image: "assets/images/project-brand.svg" },
    charity: { type: "Charity event · Editable concept", title: "An Evening with Purpose", description: "An elegant fundraising dinner concept balancing emotional storytelling, smooth service and donor engagement.", objective: "Build trust in the cause and encourage meaningful participation throughout the evening.", role: "Guest journey, stage timings, auction flow, hospitality notes and post-event follow-up plan.", guests: "[Add real figure]", outcome: "[Add verified result or academic assessment]", image: "assets/images/project-charity.svg" }
  },
  es: {
    corporate: { type: "Evento corporativo · Concepto editable", title: "Encuentro de Liderazgo", description: "Concepto de encuentro premium diseñado para que un equipo directivo internacional se alinee, conecte y tome decisiones.", objective: "Crear un programa de dos días con sesiones estratégicas y espacios de networking informal.", role: "Escaleta, búsqueda de espacios, experiencia del invitado, briefing de proveedores y plan de coordinación in situ.", guests: "[Añadir cifra real]", outcome: "[Añadir resultado verificado o evaluación académica]", image: "assets/images/project-corporate.svg" },
    conference: { type: "Congreso internacional · Concepto editable", title: "Ideas Sin Fronteras", description: "Concepto de congreso bilingüe que conecta a jóvenes profesionales con ponentes del sector internacional de eventos.", objective: "Acercar conocimiento especializado mediante ponencias, talleres y networking de valor.", role: "Estructura del programa, apoyo a ponentes, registro, señalética y planificación de hospitality.", guests: "[Añadir cifra real]", outcome: "[Añadir resultado verificado o evaluación académica]", image: "assets/images/project-conference.svg" },
    wedding: { type: "Organización de bodas · Concepto editable", title: "Celebración Mediterránea", description: "Concepto de boda de destino íntima basado en una hospitalidad cálida, materiales locales y una experiencia relajada.", objective: "Coordinar una celebración coherente para invitados procedentes de varios países.", role: "Moodboard, calendario de proveedores, ceremonia, distribución de mesas y comunicación con invitados.", guests: "[Añadir cifra real]", outcome: "[Añadir resultado verificado o evaluación académica]", image: "assets/images/project-wedding.svg" },
    festival: { type: "Festival cultural · Concepto editable", title: "Ciudad en Movimiento", description: "Programa de cultura urbana de un día con espectáculos, gastronomía, talleres y participación comunitaria.", objective: "Reunir a públicos diferentes mediante una experiencia cultural accesible.", role: "Flujos del recinto, horarios, briefing de voluntariado, accesibilidad y plan de contingencias.", guests: "[Añadir cifra real]", outcome: "[Añadir resultado verificado o evaluación académica]", image: "assets/images/project-festival.svg" },
    brand: { type: "Experiencia de marca · Concepto editable", title: "La Sala Sensorial", description: "Lanzamiento de producto en formato reducido que invita a descubrir una marca mediante textura, sonido, sabor y relato.", objective: "Convertir los valores de producto en un recorrido memorable y compartible.", role: "Mapa de experiencia, puntos de contacto, invitaciones, momentos de contenido y coordinación de proveedores.", guests: "[Añadir cifra real]", outcome: "[Añadir resultado verificado o evaluación académica]", image: "assets/images/project-brand.svg" },
    charity: { type: "Evento benéfico · Concepto editable", title: "Una Noche con Propósito", description: "Concepto de cena de recaudación que equilibra relato emocional, servicio fluido y participación de donantes.", objective: "Generar confianza en la causa y fomentar una participación significativa durante la velada.", role: "Recorrido del invitado, tiempos de escenario, subasta, hospitality y seguimiento posterior.", guests: "[Añadir cifra real]", outcome: "[Añadir resultado verificado o evaluación académica]", image: "assets/images/project-charity.svg" }
  }
};

const root = document.documentElement;
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const languageButtons = document.querySelectorAll(".language-button");
const modal = document.querySelector("#project-modal");
const modalClose = modal.querySelector(".modal-close");
const contactForm = document.querySelector(".contact-form");
let currentLanguage = "en";
let lastFocusedElement = null;

function setLanguage(language) {
  if (!translations[language]) return;
  currentLanguage = language;
  root.lang = language;
  document.title = language === "en"
    ? "Event Management Portfolio | International Event Coordinator"
    : "Portfolio de Organización de Eventos | Perfil Internacional";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = translations[language][element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = translations[language][element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });

  menuButton.querySelector(".sr-only").textContent = translations[language].menu;
  modalClose.setAttribute("aria-label", translations[language].closeModal);
  languageButtons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try { localStorage.setItem("portfolio-language", language); } catch (_) { /* file privacy modes may block storage */ }
}

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navPanel.classList.remove("is-open");
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navPanel.classList.toggle("is-open", !open);
});

document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("click", (event) => {
  if (!navPanel.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
window.addEventListener("resize", () => { if (window.innerWidth > 1050) closeMenu(); });

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));

function fillModal(projectId) {
  const project = projectData[currentLanguage][projectId];
  if (!project) return;
  modal.querySelector("#modal-type").textContent = project.type;
  modal.querySelector("#modal-title").textContent = project.title;
  modal.querySelector("#modal-description").textContent = project.description;
  modal.querySelector("#modal-objective").textContent = project.objective;
  modal.querySelector("#modal-role").textContent = project.role;
  modal.querySelector("#modal-guests").textContent = project.guests;
  modal.querySelector("#modal-outcome").textContent = project.outcome;
  modal.querySelector("#modal-image").src = project.image;
  modal.querySelector("#modal-image").alt = project.title;
  modal.querySelector("#modal-link").href = "#contact"; // REPLACE with a real project URL when available.
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.querySelector(".project-open").addEventListener("click", () => {
    lastFocusedElement = document.activeElement;
    fillModal(card.dataset.project);
    modal.showModal();
    document.body.classList.add("modal-open");
    modalClose.focus();
  });
});

function closeModal() {
  if (!modal.open) return;
  modal.close();
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  const bounds = modal.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) closeModal();
});
modal.addEventListener("close", () => document.body.classList.remove("modal-open"));

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach((element) => element.style.setProperty("--delay", `${element.dataset.delay || 0}ms`));

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
}

const sectionLinks = [...document.querySelectorAll(".nav-links a")];
const observedSections = sectionLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    sectionLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-25% 0px -60%", threshold: [0.01, 0.25, 0.6] });
  observedSections.forEach((section) => sectionObserver.observe(section));
}

window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 20), { passive: true });
document.querySelector("#current-year").textContent = new Date().getFullYear();

function showFieldError(field, message) {
  field.classList.toggle("is-invalid", Boolean(message));
  field.setAttribute("aria-invalid", String(Boolean(message)));
  const error = field.parentElement.querySelector(".field-error");
  if (error) error.textContent = message;
}

contactForm.addEventListener("submit", (event) => {
  const requiredFields = contactForm.querySelectorAll("[required]");
  let valid = true;
  requiredFields.forEach((field) => {
    let message = "";
    if (!field.value.trim()) message = translations[currentLanguage].formRequired;
    else if (field.type === "email" && !field.validity.valid) message = translations[currentLanguage].formEmailInvalid;
    showFieldError(field, message);
    if (message) valid = false;
  });
  if (!valid) {
    event.preventDefault();
    contactForm.querySelector(".is-invalid")?.focus();
    return;
  }

  const isNetlify = window.location.hostname.endsWith("netlify.app");
  if (!isNetlify) {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`Portfolio contact — ${data.get("name")}${data.get("company") ? ` · ${data.get("company")}` : ""}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
    contactForm.querySelector(".form-status").textContent = translations[currentLanguage].formOpeningEmail;
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`; // REPLACE email address.
  }
});

contactForm.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => { if (field.classList.contains("is-invalid")) showFieldError(field, ""); });
});

let storedLanguage = "en";
try { storedLanguage = localStorage.getItem("portfolio-language") || "en"; } catch (_) { /* no-op */ }
setLanguage(storedLanguage);
