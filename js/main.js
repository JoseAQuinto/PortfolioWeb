/*
  Lightweight bootstrap.
  It prepares accessibility and translation hooks before loading portfolio.js,
  where the main site logic and editable bilingual content live.
*/

const skillTranslationKeys = [
  "skillEventPlanning", "skillEventCoordination", "skillLogistics", "skillVendor", "skillBudget", "skillTime",
  "skillGuest", "skillCommunication", "skillTeamwork", "skillProblem", "skillIntercultural", "skillHospitality",
  "skillCreativity", "skillDetail", "skillOffice", "skillSocial", "skillCanva", "skillPresentation"
];

document.querySelectorAll(".skill-group li").forEach((item, index) => {
  item.dataset.i18n = skillTranslationKeys[index];
});

const mobileNavigation = document.querySelector("#nav-panel");
function syncMobileNavigationAccessibility() {
  mobileNavigation.inert = window.innerWidth <= 1050 && !mobileNavigation.classList.contains("is-open");
}

const navigationObserver = new MutationObserver(syncMobileNavigationAccessibility);
navigationObserver.observe(mobileNavigation, { attributes: true, attributeFilter: ["class"] });
window.addEventListener("resize", syncMobileNavigationAccessibility);
syncMobileNavigationAccessibility();

const portfolioScript = document.createElement("script");
portfolioScript.src = "js/portfolio.js";
portfolioScript.async = false;
document.head.appendChild(portfolioScript);
