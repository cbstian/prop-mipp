// Publications Page JavaScript

// Sample publications data
const publicationsData = [
  {
    id: 1,
    title: "Impacto de las Políticas de Innovación en Pymes Chilenas",
    authors: ["Rodríguez, P.", "González, M.", "Silva, A."],
    type: "Working Paper",
    year: 2025,
    journal: "MIPP Working Paper Series",
    areas: ["Innovación", "Productividad"],
    abstract: "Este estudio analiza el impacto de programas públicos de apoyo a la innovación en pequeñas y medianas empresas chilenas durante el período 2018-2023. Utilizando métodos cuasi-experimentales, encontramos que las empresas participantes exhiben un incremento significativo en inversión en I+D y adopción de nuevas tecnologías.",
    pdf: "#",
    doi: "10.1234/mipp.2025.001"
  },
  {
    id: 2,
    title: "Productividad y Desigualdad Regional en Chile: Un Análisis Empírico",
    authors: ["Silva, A.", "Martínez, L."],
    type: "Journal Article",
    year: 2025,
    journal: "Regional Studies",
    areas: ["Desarrollo Regional", "Productividad"],
    abstract: "Analizamos las diferencias de productividad entre regiones chilenas y sus determinantes. Nuestros resultados muestran que las brechas de productividad se explican principalmente por diferencias en capital humano, infraestructura y aglomeración económica.",
    pdf: "#",
    doi: "10.1080/00343404.2025.001"
  },
  {
    id: 3,
    title: "Recomendaciones para el Mercado Laboral Post-Pandemia",
    authors: ["Equipo MIPP"],
    type: "Policy Brief",
    year: 2024,
    journal: "MIPP Policy Briefs",
    areas: ["Mercado Laboral"],
    abstract: "Este policy brief presenta recomendaciones concretas para abordar los desafíos del mercado laboral chileno en el contexto post-COVID-19, incluyendo medidas para promover la empleabilidad, reducir la informalidad y mejorar la calidad del empleo.",
    pdf: "#",
    doi: ""
  },
  {
    id: 4,
    title: "Innovation Ecosystems in Latin America: The Chilean Case",
    authors: ["González, M.", "Fernández, R."],
    type: "Book Chapter",
    year: 2024,
    journal: "Innovation and Development in Latin America (Routledge)",
    areas: ["Innovación"],
    abstract: "Este capítulo examina el ecosistema de innovación chileno desde una perspectiva comparada, identificando fortalezas, debilidades y áreas de mejora en las políticas de innovación.",
    pdf: "#",
    doi: "10.4324/9781003001.ch5"
  },
  {
    id: 5,
    title: "Skills Mismatch and Labor Market Outcomes in Chile",
    authors: ["Vargas, C.", "Rodríguez, P."],
    type: "Journal Article",
    year: 2024,
    journal: "Labour Economics",
    areas: ["Mercado Laboral"],
    abstract: "Investigamos el desajuste de habilidades en el mercado laboral chileno y su impacto en resultados laborales. Encontramos que aproximadamente el 30% de los trabajadores está sobrecalificado o subcalificado para sus puestos, con efectos negativos en salarios y satisfacción laboral.",
    pdf: "#",
    doi: "10.1016/j.labeco.2024.001"
  },
  {
    id: 6,
    title: "Políticas de Desarrollo Regional: Lecciones Internacionales",
    authors: ["Martínez, L."],
    type: "Working Paper",
    year: 2024,
    journal: "MIPP Working Paper Series",
    areas: ["Desarrollo Regional"],
    abstract: "Revisamos experiencias internacionales de políticas de desarrollo regional y extraemos lecciones para el caso chileno, con énfasis en políticas de diversificación productiva y fortalecimiento institucional.",
    pdf: "#",
    doi: "10.1234/mipp.2024.015"
  },
  {
    id: 7,
    title: "Productivity Growth and Business Dynamics",
    authors: ["González, M.", "Silva, A."],
    type: "Journal Article",
    year: 2023,
    journal: "Journal of Economic Development",
    areas: ["Productividad"],
    abstract: "Analizamos la relación entre crecimiento de productividad y dinámica empresarial en Chile, examinando el rol de la entrada y salida de firmas, así como la reasignación de recursos entre empresas.",
    pdf: "#",
    doi: "10.1080/00220388.2023.001"
  },
  {
    id: 8,
    title: "Emprendimiento e Innovación: Barreras y Facilitadores",
    authors: ["Fernández, R.", "Silva, A."],
    type: "Working Paper",
    year: 2023,
    journal: "MIPP Working Paper Series",
    areas: ["Innovación"],
    abstract: "Identificamos las principales barreras y facilitadores del emprendimiento innovador en Chile mediante entrevistas en profundidad y análisis cuantitativo de datos de encuestas.",
    pdf: "#",
    doi: "10.1234/mipp.2023.022"
  },
  {
    id: 9,
    title: "Labor Market Flexibility and Employment Protection",
    authors: ["Rodríguez, P.", "Vargas, C."],
    type: "Journal Article",
    year: 2023,
    journal: "Industrial Relations Journal",
    areas: ["Mercado Laboral"],
    abstract: "Examinamos el trade-off entre flexibilidad laboral y protección del empleo, analizando reformas recientes en la legislación laboral chilena y su impacto en contratación y despidos.",
    pdf: "#",
    doi: "10.1111/irj.2023.001"
  },
  {
    id: 10,
    title: "Infraestructura y Desarrollo Productivo Regional",
    authors: ["Martínez, L.", "González, M."],
    type: "Policy Brief",
    year: 2023,
    journal: "MIPP Policy Briefs",
    areas: ["Desarrollo Regional", "Productividad"],
    abstract: "Analizamos el rol de la infraestructura en el desarrollo productivo regional y proponemos criterios para priorizar inversiones públicas en infraestructura con mayor impacto en productividad.",
    pdf: "#",
    doi: ""
  }
];

let filteredPublications = [...publicationsData];

// Load publications on page load
document.addEventListener('DOMContentLoaded', function() {
  loadPublications(publicationsData);
  setupPublicationFilters();
  updateResultsCount(publicationsData.length);
});

// Load and display publications
function loadPublications(publications) {
  const list = document.getElementById('publications-list');
  const noResults = document.getElementById('no-results');
  
  if (publications.length === 0) {
    list.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  list.innerHTML = '';
  
  publications.forEach(publication => {
    const item = createPublicationItem(publication);
    list.appendChild(item);
  });
  
  filteredPublications = publications;
}

// Create publication item element
function createPublicationItem(pub) {
  const item = document.createElement('article');
  item.className = 'publication-item';
  
  const doiLink = pub.doi ? `<a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener">DOI</a>` : '';
  
  item.innerHTML = `
    <div class="publication-header">
      <div>
        <span class="tag publication-type">${pub.type}</span>
      </div>
    </div>
    <h2 class="publication-title">${pub.title}</h2>
    <div class="publication-authors">${pub.authors.join(', ')}</div>
    <div class="publication-meta">
      <strong>Publicación:</strong> ${pub.journal} (${pub.year})
    </div>
    <p class="publication-abstract">${pub.abstract}</p>
    <div class="publication-footer">
      <div class="publication-tags">
        ${pub.areas.map(area => `<span class="tag">${area}</span>`).join('')}
      </div>
      <div class="publication-links">
        <a href="${pub.pdf}" target="_blank" rel="noopener">PDF</a>
        ${doiLink}
      </div>
    </div>
  `;
  
  return item;
}

// Setup filters
function setupPublicationFilters() {
  const typeFilter = document.getElementById('type-filter');
  const yearFilter = document.getElementById('year-filter');
  const areaFilter = document.getElementById('area-filter');
  const searchInput = document.getElementById('search-publications');
  const resetButton = document.getElementById('reset-filters');
  const exportButton = document.getElementById('export-csv');
  
  typeFilter.addEventListener('change', filterPublications);
  yearFilter.addEventListener('change', filterPublications);
  areaFilter.addEventListener('change', filterPublications);
  searchInput.addEventListener('input', debounce(filterPublications, 300));
  
  resetButton.addEventListener('click', resetFilters);
  exportButton.addEventListener('click', exportPublicationsToCSV);
}

// Filter publications based on criteria
function filterPublications() {
  const typeFilter = document.getElementById('type-filter').value;
  const yearFilter = document.getElementById('year-filter').value;
  const areaFilter = document.getElementById('area-filter').value;
  const searchQuery = document.getElementById('search-publications').value.toLowerCase();
  
  const filtered = publicationsData.filter(pub => {
    const matchesType = !typeFilter || pub.type === typeFilter;
    const matchesYear = !yearFilter || pub.year.toString() === yearFilter;
    const matchesArea = !areaFilter || pub.areas.includes(areaFilter);
    const matchesSearch = !searchQuery || 
      pub.title.toLowerCase().includes(searchQuery) ||
      pub.authors.some(author => author.toLowerCase().includes(searchQuery)) ||
      pub.abstract.toLowerCase().includes(searchQuery) ||
      pub.areas.some(area => area.toLowerCase().includes(searchQuery));
    
    return matchesType && matchesYear && matchesArea && matchesSearch;
  });
  
  loadPublications(filtered);
  updateResultsCount(filtered.length);
}

// Reset all filters
function resetFilters() {
  document.getElementById('type-filter').value = '';
  document.getElementById('year-filter').value = '';
  document.getElementById('area-filter').value = '';
  document.getElementById('search-publications').value = '';
  
  loadPublications(publicationsData);
  updateResultsCount(publicationsData.length);
}

// Update results count display
function updateResultsCount(count) {
  document.getElementById('count-display').textContent = count;
}

// Export publications to CSV
function exportPublicationsToCSV() {
  const data = filteredPublications.map(pub => ({
    Título: pub.title,
    Autores: pub.authors.join('; '),
    Tipo: pub.type,
    Año: pub.year,
    Publicación: pub.journal,
    Áreas: pub.areas.join('; '),
    DOI: pub.doi
  }));
  
  exportToCSV(data, `mipp-publicaciones-${new Date().toISOString().split('T')[0]}.csv`);
}
