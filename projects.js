// Public URLs are confirmed by the owner. Private projects have no public link.
const projects = [
  {
    name: "Facturoide", slug: "facturoide",
    description: "Keep subscriptions and monthly bills in one place. A clearer view of what’s due and what you’re spending.",
    url: null, access: "Private",
    icon: '<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  },
  {
    name: "Better Sura", slug: "better-sura",
    description: "Find doctors and healthcare providers in Sura’s directory, with simple filters for city and specialty.",
    url: "https://better-sura.vercel.app/", access: "Public",
    icon: '<path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z"/>',
  },
  {
    name: "Cámara", slug: "camara",
    description: "A window into Medellín’s streets. Browse public traffic cameras in a grid or on a map before heading out.",
    url: "https://camaras-cc6weex16-edymerchks-projects.vercel.app/", access: "Public",
    icon: '<rect x="3" y="6" width="13" height="12" rx="3"/><path d="m16 10 5-3v10l-5-3"/><circle cx="8" cy="11" r="1"/>',
  },
  {
    name: "Nido", slug: "nido",
    description: "A shared space for the apartment hunt. Collect listings, compare the details, and decide together.",
    url: null, access: "Private",
    icon: '<path d="m3 11 9-8 9 8M5 10v10h14V10M9 20v-7h6v7"/>',
  },
  {
    name: "SideVista", slug: "sidevista",
    description: "Estimate which side of a flight offers better views of sunrise, sunset, landscapes, and cities.",
    url: "https://sidevista.edyhack.workers.dev/", access: "Public",
    icon: '<rect x="4" y="3" width="16" height="18" rx="5"/><path d="M4 12h16M8 16l8-8"/>',
  },
  {
    name: "Maybe", slug: "maybe",
    description: "Share trips with friends and find chances to travel together.",
    url: null, access: "Invite only",
    icon: '<path d="M4 18V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11M3 18h18M9 5V3h6v2M7 11h10M12 8v6"/>',
  },
  {
    name: "Portfolio Dashboard", slug: "portfolio-dashboard",
    description: "Review holdings, returns, and trading activity from local brokerage statements.",
    url: null, access: "Private",
    icon: '<path d="M4 20V4M4 20h16M7 16l4-4 3 2 5-7"/>',
  },
];

const container = document.querySelector("[data-projects]");
if (container) {
  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = `project project-${project.slug}`;
    const icon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${project.icon}</svg>`;
    card.innerHTML = `
      <span class="project-number" aria-hidden="true">0${index + 1}</span>
      <div class="project-art" aria-hidden="true"><span class="app-icon">${icon}</span></div>
      <div class="project-copy"><h3>${project.name}</h3><p class="project-description">${project.description}</p></div>
      <div class="project-action"></div>`;
    const action = card.querySelector(".project-action");
    if (project.access) {
      const status = document.createElement("span");
      status.className = "access-label";
      status.textContent = project.access;
      action.append(status);
    }
    if (project.url) {
      const link = document.createElement("a");
      link.className = "project-link";
      link.href = project.url;
      link.setAttribute("aria-label", `Visit ${project.name}`);
      link.innerHTML = '<span class="visit-label">Visit project</span><span class="arrow" aria-hidden="true">↗</span>';
      action.append(link);
    } else if (!project.access) {
      const pending = document.createElement("span");
      pending.className = "pending-link";
      pending.textContent = "Link coming soon";
      action.append(pending);
    }
    container.append(card);
  });
}
