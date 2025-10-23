// Events Page JavaScript

// Sample events data
const eventsData = [
  {
    id: 1,
    title: "Seminario: Productividad y Desarrollo Sostenible",
    date: "2025-11-15",
    time: "09:00",
    location: "Auditorio Universidad de Chile",
    locationOnline: false,
    featured: true,
    image: "assets/images/posts/Stefan-Voigt-final.jpg",
    description: "Únete a nuestro panel de expertos para discutir los desafíos y oportunidades en el desarrollo de políticas productivas sostenibles. Analizaremos casos internacionales y propuestas para Chile.",
    speakers: ["Dr. Juan Escobar", "Dra. Elisa Durán Micco"],
    tags: ["Productividad", "Sostenibilidad"],
    registrationUrl: "#"
  },
  {
    id: 2,
    title: "Workshop: Metodologías de Evaluación de Impacto",
    date: "2025-12-01",
    time: "14:00",
    location: "Online (Zoom)",
    locationOnline: true,
    featured: false,
    image: "assets/images/posts/Workshop-rrss-v4.jpg",
    description: "Taller práctico sobre métodos cuantitativos para la evaluación de impacto de políticas públicas, con énfasis en métodos cuasi-experimentales.",
    speakers: ["Dr. Álvaro Canales"],
    tags: ["Metodología", "Evaluación"],
    registrationUrl: "#"
  },
  {
    id: 3,
    title: "Conferencia Anual MIPP 2025",
    date: "2025-12-10",
    time: "09:00",
    location: "Hotel Plaza San Francisco, Santiago",
    locationOnline: false,
    featured: false,
    image: "assets/images/posts/ebp72024060700000000001001_1-1.png",
    description: "Nuestra conferencia anual reúne a investigadores, policy makers y profesionales para compartir los últimos avances en investigación sobre políticas públicas productivas.",
    speakers: ["Equipo MIPP", "Invitados Internacionales"],
    tags: ["Conferencia", "Networking"],
    registrationUrl: "#"
  },
  {
    id: 4,
    title: "Lanzamiento Estudio: Mercado Laboral en Chile",
    date: "2025-10-05",
    time: "18:00",
    location: "Centro de Extensión PUC",
    locationOnline: false,
    featured: false,
    image: "assets/images/posts/Graficas-RRSS_1-1080px-1.png",
    description: "Presentación de nuestro nuevo estudio sobre dinámicas del mercado laboral chileno y recomendaciones de política pública.",
    speakers: ["Dr. Álvaro Canales", "Dra. Elisa Durán Micco"],
    tags: ["Mercado Laboral", "Lanzamiento"],
    registrationUrl: "#"
  },
  {
    id: 5,
    title: "Panel: Innovación y Competitividad Empresarial",
    date: "2025-09-20",
    time: "10:00",
    location: "Auditorio UAI",
    locationOnline: false,
    featured: false,
    image: "assets/images/posts/Diseno-sin-titulo-21.png",
    description: "Panel de discusión sobre políticas de innovación y su impacto en la competitividad de empresas chilenas.",
    speakers: ["Dr. Benjamín Villena", "Dr. Juan Escobar"],
    tags: ["Innovación", "Competitividad"],
    registrationUrl: "#"
  }
];

let currentFilter = 'all';

// Load events on page load
document.addEventListener('DOMContentLoaded', function() {
  loadFeaturedEvent();
  loadEvents(eventsData);
  setupEventFilters();
});

// Load featured event
function loadFeaturedEvent() {
  const featuredEvent = eventsData.find(event => event.featured);
  const container = document.getElementById('featured-event');
  
  if (!featuredEvent) {
    container.style.display = 'none';
    return;
  }
  
  const eventDate = new Date(featuredEvent.date);
  const formattedDate = eventDate.toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  container.innerHTML = `
    <div class="featured-event">
      <div class="featured-event-content">
        <div class="featured-event-info">
          <span class="tag tag-primary" style="margin-bottom: var(--spacing-sm);">Evento Destacado</span>
          <h2>${featuredEvent.title}</h2>
          <div class="featured-event-meta">
            <div>
              <strong>📅 Fecha:</strong> ${formattedDate}
            </div>
            <div>
              <strong>⏰ Hora:</strong> ${featuredEvent.time} hrs
            </div>
            <div>
              <strong>📍 Lugar:</strong> ${featuredEvent.location}
            </div>
            ${featuredEvent.speakers.length > 0 ? `
            <div>
              <strong>🎤 Speakers:</strong> ${featuredEvent.speakers.join(', ')}
            </div>
            ` : ''}
          </div>
          <p class="featured-event-description">${featuredEvent.description}</p>
          <a href="${featuredEvent.registrationUrl}" class="btn btn-primary btn-lg">Registrarse</a>
        </div>
        <div>
          <img src="${featuredEvent.image}" 
               alt="${featuredEvent.title}" 
               class="featured-event-image"
               onerror="this.src='assets/images/placeholder-event.jpg'"
               loading="lazy">
        </div>
      </div>
    </div>
  `;
}

// Load and display events
function loadEvents(events) {
  const list = document.getElementById('events-list');
  const noEvents = document.getElementById('no-events');
  
  // Filter out featured event from main list
  const filteredEvents = events.filter(event => !event.featured);
  
  // Apply current filter
  const displayEvents = filterEventsByStatus(filteredEvents, currentFilter);
  
  if (displayEvents.length === 0) {
    list.innerHTML = '';
    noEvents.style.display = 'block';
    return;
  }
  
  noEvents.style.display = 'none';
  list.innerHTML = '';
  
  displayEvents.forEach(event => {
    const card = createEventCard(event);
    list.appendChild(card);
  });
}

// Create event card element
function createEventCard(event) {
  const card = document.createElement('article');
  const isPast = isEventPast(event.date);
  card.className = `event-card ${isPast ? 'past' : ''}`;
  
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('es-ES', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
  
  card.innerHTML = `
    <img src="${event.image}" 
         alt="${event.title}" 
         class="event-image"
         onerror="this.src='assets/images/placeholder-event.jpg'"
         loading="lazy">
    <div class="event-content">
      <div class="event-date">${formattedDate}</div>
      <h3 class="event-title">${event.title}</h3>
      <div class="event-meta">
        <div>⏰ ${event.time} hrs</div>
        <div>📍 ${event.location}</div>
      </div>
      <p class="event-description">${truncateText(event.description, 120)}</p>
      <div class="event-footer">
        <div class="event-tags">
          ${event.tags.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        ${!isPast ? `<a href="${event.registrationUrl}" class="btn btn-sm btn-primary">Registrarse</a>` : 
                    `<span class="tag" style="background-color: var(--color-gray-dark); color: white;">Finalizado</span>`}
      </div>
    </div>
  `;
  
  // Add JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "startDate": `${event.date}T${event.time}`,
    "location": event.locationOnline ? {
      "@type": "VirtualLocation",
      "url": event.registrationUrl
    } : {
      "@type": "Place",
      "name": event.location,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CL"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "MIPP",
      "url": "https://mipp.cl"
    },
    "eventStatus": isPast ? "https://schema.org/EventScheduled" : "https://schema.org/EventScheduled",
    "eventAttendanceMode": event.locationOnline ? 
      "https://schema.org/OnlineEventAttendanceMode" : 
      "https://schema.org/OfflineEventAttendanceMode"
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLd);
  card.appendChild(script);
  
  return card;
}

// Setup event filters
function setupEventFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      currentFilter = this.dataset.filter;
      loadEvents(eventsData);
    });
  });
}

// Filter events by status
function filterEventsByStatus(events, filter) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  switch(filter) {
    case 'upcoming':
      return events.filter(event => new Date(event.date) >= today);
    case 'past':
      return events.filter(event => new Date(event.date) < today);
    default:
      return events;
  }
}

// Check if event is past
function isEventPast(dateString) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(dateString);
  return eventDate < today;
}

// Truncate text helper
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
}
