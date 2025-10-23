// Main JavaScript for MIPP website

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initStats();
  initSearch();
  initModals();
  initSmoothScroll();
  setActiveNavLink();
});

// Navigation Toggle
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        navToggle.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

// Animated Stats Counter
function initStats() {
  const stats = document.querySelectorAll('.stat__number');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stat = entry.target;
        const target = parseInt(stat.getAttribute('data-count'));
        animateCounter(stat, target);
        observer.unobserve(stat);
      }
    });
  }, observerOptions);
  
  stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const duration = 2000;
  const stepTime = duration / 50;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, stepTime);
}

// Global Search Functionality
function initSearch() {
  const searchInputs = document.querySelectorAll('.search-box__input');
  
  searchInputs.forEach(input => {
    let debounceTimer;
    input.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performSearch(e.target.value, e.target);
      }, 300);
    });
  });
}

function performSearch(query, inputElement) {
  const container = inputElement.closest('.search-container');
  if (!container) return;
  
  const items = container.querySelectorAll('[data-searchable]');
  const searchTerm = query.toLowerCase().trim();
  
  if (searchTerm === '') {
    items.forEach(item => item.style.display = '');
    updateSearchResults(container, items.length, items.length);
    return;
  }
  
  let visibleCount = 0;
  
  items.forEach(item => {
    const searchableText = item.getAttribute('data-searchable').toLowerCase();
    const matches = searchableText.includes(searchTerm);
    
    item.style.display = matches ? '' : 'none';
    if (matches) visibleCount++;
  });
  
  updateSearchResults(container, visibleCount, items.length);
}

function updateSearchResults(container, visible, total) {
  let resultsElement = container.querySelector('.search-results');
  
  if (!resultsElement) {
    resultsElement = document.createElement('div');
    resultsElement.className = 'search-results text-muted mt-md';
    container.appendChild(resultsElement);
  }
  
  if (visible === 0) {
    resultsElement.innerHTML = '<p class="empty-state__description">No se encontraron resultados.</p>';
  } else if (visible < total) {
    resultsElement.textContent = `Mostrando ${visible} de ${total} resultados`;
  } else {
    resultsElement.textContent = '';
  }
}

// Filter Functionality
function initFilters(filterButtons, items, dataAttribute = 'category') {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      items.forEach(item => {
        if (filterValue === 'all') {
          item.style.display = '';
        } else {
          const itemValue = item.getAttribute(`data-${dataAttribute}`);
          item.style.display = itemValue === filterValue ? '' : 'none';
        }
      });
    });
  });
}

// Modal Management
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const modalClosers = document.querySelectorAll('[data-modal-close]');
  
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal-target');
      openModal(modalId);
    });
  });
  
  modalClosers.forEach(closer => {
    closer.addEventListener('click', () => {
      const modal = closer.closest('.modal');
      closeModal(modal);
    });
  });
  
  // Close modal on backdrop click
  document.querySelectorAll('.modal__backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', () => {
      const modal = backdrop.closest('.modal');
      closeModal(modal);
    });
  });
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal.active');
      if (openModal) closeModal(openModal);
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modal) {
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Set Active Navigation Link
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkPath = new URL(link.href).pathname;
    
    if (currentPath === linkPath || (currentPath === '/' && linkPath === '/') || 
        (currentPath.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    }
  });
}

// Export CSV Functionality
function exportToCSV(data, filename = 'export.csv') {
  const csv = convertToCSV(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

function convertToCSV(data) {
  if (!data || data.length === 0) return '';
  
  const headers = Object.keys(data[0]);
  const csvRows = [];
  
  // Add headers
  csvRows.push(headers.join(','));
  
  // Add data rows
  for (const row of data) {
    const values = headers.map(header => {
      const value = row[header] || '';
      const escaped = ('' + value).replace(/"/g, '""');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(','));
  }
  
  return csvRows.join('\n');
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
}

// Make functions available globally
window.mippUtils = {
  exportToCSV,
  formatDate,
  openModal,
  closeModal,
  initFilters
};
