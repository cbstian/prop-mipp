// Investigators Page JavaScript

// Sample investigators data (in production, this would come from JSON files in /content/investigators/)
const investigatorsData = [
  {
    id: 1,
    name: "Dr. Juan Escobar",
    role: "Director",
    institution: "Universidad de Chile",
    photo: "assets/images/personas/Juan-Escobar-1x1-1.jpg",
    email: "juan.escobar@mipp.cl",
    website: "https://www.example.com/juan-escobar",
    areas: ["Productividad", "Innovación"],
    bio: "Doctor en Economía con más de 15 años de experiencia en investigación sobre políticas públicas para el desarrollo productivo. Ha asesorado a gobiernos de América Latina en temas de innovación y competitividad.",
    education: [
      "Ph.D. en Economía, Harvard University",
      "M.A. en Economía, Universidad de Chile",
      "Ingeniero Comercial, Universidad de Chile"
    ],
    publications: [
      "Escobar, J. (2023). 'Innovation Policy and Productivity Growth in Latin America'. Journal of Development Economics.",
      "Escobar, J. & Smith, J. (2022). 'Public R&D Investment and Private Innovation'. Economic Policy Review."
    ]
  },
  {
    id: 2,
    name: "Dra. Elisa Durán Micco",
    role: "Co-Directora",
    institution: "Pontificia Universidad Católica de Chile",
    photo: "assets/images/personas/ElisaDuranMicco-1.jpg",
    email: "elisa.duran@mipp.cl",
    website: "https://www.example.com/elisa-duran",
    areas: ["Mercado Laboral", "Innovación"],
    bio: "Especialista en economía laboral y políticas de empleo. Doctora en Economía, ha publicado extensamente sobre mercados laborales en países en desarrollo y el impacto de la tecnología en el empleo.",
    education: [
      "Ph.D. en Economía, MIT",
      "M.Sc. en Economía, London School of Economics",
      "Ingeniera Comercial, Pontificia Universidad Católica de Chile"
    ],
    publications: [
      "Durán, E. (2023). 'Labor Market Dynamics in the Digital Age'. Labor Economics Quarterly.",
      "Durán, E. et al. (2022). 'Skills Mismatch and Productivity'. Journal of Human Resources."
    ]
  },
  {
    id: 3,
    name: "Dr. Alvin Roth",
    role: "Investigador Principal",
    institution: "Stanford University",
    photo: "assets/images/personas/440px-Alvin_E._Roth_3_2012.jpg",
    email: "alvin.roth@mipp.cl",
    website: "https://www.example.com/alvin-roth",
    areas: ["Desarrollo Regional"],
    bio: "Premio Nobel de Economía 2012. Experto en teoría de juegos y diseño de mercados. Su investigación se centra en el diseño de instituciones y mecanismos de asignación eficientes.",
    education: [
      "Ph.D. en Operations Research, Stanford University",
      "M.S. en Operations Research, Stanford University",
      "B.S. en Operations Research, Columbia University"
    ],
    publications: [
      "Roth, A. (2023). 'Market Design and Public Policy'. American Economic Review.",
      "Roth, A. & Peranson, E. (2022). 'The Redesign of Matching Markets'. Journal of Political Economy."
    ]
  },
  {
    id: 4,
    name: "Dr. Álvaro Canales",
    role: "Investigador Adjunto",
    institution: "Universidad de Santiago de Chile",
    photo: "assets/images/personas/a-canales.jpg",
    email: "alvaro.canales@mipp.cl",
    website: "https://www.example.com/alvaro-canales",
    areas: ["Productividad", "Mercado Laboral"],
    bio: "Economista especializado en medición de productividad y análisis de mercados laborales. Ha trabajado como consultor para organismos internacionales incluyendo el Banco Mundial y la OCDE.",
    education: [
      "Ph.D. en Economía, University of California, Berkeley",
      "Magíster en Economía, ILADES-Georgetown University",
      "Ingeniero Comercial, Universidad de Santiago de Chile"
    ],
    publications: [
      "Canales, A. (2023). 'Measuring Total Factor Productivity in Small Economies'. Review of Economics and Statistics.",
      "Canales, A. & Williams, R. (2022). 'Labor Productivity and Wage Dynamics'. Industrial Relations."
    ]
  },
  {
    id: 5,
    name: "Dr. Benjamín Villena",
    role: "Investigador Joven",
    institution: "Universidad Adolfo Ibáñez",
    photo: "assets/images/personas/benjamin.jpg",
    email: "benjamin.villena@mipp.cl",
    website: "https://www.example.com/benjamin-villena",
    areas: ["Innovación"],
    bio: "Investigador emergente especializado en innovación empresarial y ecosistemas de emprendimiento. Su trabajo examina cómo las políticas públicas pueden fomentar la innovación en empresas de menor tamaño.",
    education: [
      "Ph.D. en Management, INSEAD",
      "Magíster en Innovación y Emprendimiento, Universidad Adolfo Ibáñez",
      "Ingeniero Civil Industrial, Universidad de Chile"
    ],
    publications: [
      "Villena, B. (2023). 'SME Innovation and Public Support Programs'. Research Policy.",
      "Villena, B. & Chen, L. (2023). 'Entrepreneurial Ecosystems in Latin America'. Entrepreneurship Theory and Practice."
    ]
  }
];

// Current filter state
let currentRoleFilter = '';
let currentInstitutionFilter = '';
let currentSearchQuery = '';

// Load investigators on page load
document.addEventListener('DOMContentLoaded', function() {
  loadInvestigators(investigatorsData);
  setupFilters();
});

// Load and display investigators
function loadInvestigators(investigators) {
  const grid = document.getElementById('investigators-grid');
  const noResults = document.getElementById('no-results');
  
  if (investigators.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  grid.innerHTML = '';
  
  investigators.forEach(investigator => {
    const card = createInvestigatorCard(investigator);
    grid.appendChild(card);
  });
}

// Create investigator card element
function createInvestigatorCard(investigator) {
  const card = document.createElement('div');
  card.className = 'investigator-card';
  card.onclick = () => openInvestigatorModal(investigator);
  
  card.innerHTML = `
    <img src="${investigator.photo}" 
         alt="${investigator.name}" 
         class="investigator-photo"
         onerror="this.src='assets/images/placeholder-person.jpg'"
         loading="lazy">
    <div class="investigator-info">
      <h3 class="investigator-name">${investigator.name}</h3>
      <div class="investigator-role">${investigator.role}</div>
      <div class="investigator-institution">${investigator.institution}</div>
      <div class="investigator-areas">
        ${investigator.areas.map(area => `<span class="tag">${area}</span>`).join('')}
      </div>
    </div>
  `;
  
  return card;
}

// Open investigator modal with details
function openInvestigatorModal(investigator) {
  const modal = document.getElementById('investigator-modal');
  const content = document.getElementById('modal-investigator-content');
  
  content.innerHTML = `
    <div class="modal-investigator-header">
      <img src="${investigator.photo}" 
           alt="${investigator.name}" 
           class="modal-investigator-photo"
           onerror="this.src='assets/images/placeholder-person.jpg'">
      <div class="modal-investigator-details">
        <h2>${investigator.name}</h2>
        <div class="modal-investigator-meta">
          <p><strong>Rol:</strong> ${investigator.role}</p>
          <p><strong>Institución:</strong> ${investigator.institution}</p>
          <p><strong>Email:</strong> <a href="mailto:${investigator.email}">${investigator.email}</a></p>
        </div>
        <div class="investigator-areas">
          ${investigator.areas.map(area => `<span class="tag tag-primary">${area}</span>`).join('')}
        </div>
        <div class="investigator-links">
          ${investigator.website ? `<a href="${investigator.website}" target="_blank" rel="noopener">Sitio Web</a>` : ''}
          <a href="mailto:${investigator.email}">Contactar</a>
        </div>
      </div>
    </div>
    
    <div class="modal-section">
      <h3>Biografía</h3>
      <p>${investigator.bio}</p>
    </div>
    
    <div class="modal-section">
      <h3>Formación Académica</h3>
      <ul>
        ${investigator.education.map(edu => `<li>${edu}</li>`).join('')}
      </ul>
    </div>
    
    <div class="modal-section">
      <h3>Publicaciones Destacadas</h3>
      <ul class="publications-list">
        ${investigator.publications.map(pub => `
          <li>
            <div class="publication-title">${pub.title}</div>
            <div class="publication-meta">${pub.journal}, ${pub.year}</div>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
  
  openModal('investigator-modal');
}

// Setup filters
function setupFilters() {
  const roleFilter = document.getElementById('role-filter');
  const institutionFilter = document.getElementById('institution-filter');
  const searchInput = document.getElementById('search-investigators');
  
  roleFilter.addEventListener('change', filterInvestigators);
  institutionFilter.addEventListener('change', filterInvestigators);
  searchInput.addEventListener('input', debounce(filterInvestigators, 300));
}

// Filter investigators based on criteria
function filterInvestigators() {
  const roleFilter = document.getElementById('role-filter').value.toLowerCase();
  const institutionFilter = document.getElementById('institution-filter').value.toLowerCase();
  const searchQuery = document.getElementById('search-investigators').value.toLowerCase();
  
  const filtered = investigatorsData.filter(investigator => {
    const matchesRole = !roleFilter || investigator.role.toLowerCase() === roleFilter;
    const matchesInstitution = !institutionFilter || investigator.institution.toLowerCase() === institutionFilter;
    const matchesSearch = !searchQuery || 
      investigator.name.toLowerCase().includes(searchQuery) ||
      investigator.areas.some(area => area.toLowerCase().includes(searchQuery));
    
    return matchesRole && matchesInstitution && matchesSearch;
  });
  
  loadInvestigators(filtered);
}
