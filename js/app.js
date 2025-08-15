// KingBull Insight Hub - Main Application JavaScript
// Pure JavaScript implementation for GitHub Pages static site

(function() {
  'use strict';
  
  // App State
  let activeSection = 'home';
  let selectedCase = null;
  let supplyMap = null;
  
  // DOM Elements
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const caseDetailContainer = document.getElementById('case-detail-container');
  const caseDetailContent = document.getElementById('case-detail-content');
  
  // Initialize app when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initCaseStudies();
    initScrollTracking();
    initMobileMenu();
    initHashRouting();
    initLazyLoading();
    
    // Handle initial hash
    handleHashChange();
  });
  
  // Hash routing for SPA behavior
  function initHashRouting() {
    window.addEventListener('hashchange', handleHashChange);
  }
  
  function handleHashChange() {
    const hash = window.location.hash.slice(1) || 'home';
    if (hash !== activeSection) {
      navigateToSection(hash);
    }
  }
  
  // Navigation functionality
  function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = this.getAttribute('href').slice(1);
        navigateToSection(targetSection);
        
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      });
    });
  }
  
  function navigateToSection(sectionId) {
    if (sectionId === activeSection) return;
    
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;
    
    // Update active section
    activeSection = sectionId;
    
    // Update URL hash
    if (window.location.hash.slice(1) !== sectionId) {
      window.history.pushState(null, null, '#' + sectionId);
    }
    
    // Update active nav states
    updateActiveNavState(sectionId);
    
    // Smooth scroll to section
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Initialize section-specific features
    initSectionFeatures(sectionId);
  }
  
  function updateActiveNavState(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const linkSection = link.getAttribute('href').slice(1);
      if (linkSection === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // Mobile menu functionality
  function initMobileMenu() {
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
      
      // Close mobile menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.add('hidden');
        }
      });
    }
  }
  
  // Scroll tracking for active section detection
  function initScrollTracking() {
    let ticking = false;
    
    function updateActiveSection() {
      const sections = ['home', 'case-studies', 'technical-library', 'factory-video', 'dealer-portal', 'supply-map', 'support', 'logistics', 'news', 'rd-cooperation'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              activeSection = section;
              updateActiveNavState(section);
              // Update URL hash without triggering scroll
              const newHash = '#' + section;
              if (window.location.hash !== newHash) {
                window.history.replaceState(null, null, newHash);
              }
            }
            break;
          }
        }
      }
      ticking = false;
    }
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    });
  }
  
  // Case Studies functionality
  function initCaseStudies() {
    const caseCards = document.querySelectorAll('.case-study-card');
    
    caseCards.forEach(card => {
      card.addEventListener('click', function() {
        const caseId = parseInt(this.getAttribute('data-case'));
        toggleCaseDetail(caseId);
      });
    });
  }
  
  function toggleCaseDetail(caseId) {
    if (selectedCase === caseId) {
      // Close current case
      selectedCase = null;
      caseDetailContainer.classList.add('hidden');
      
      // Remove selected states
      document.querySelectorAll('.case-study-card').forEach(card => {
        card.classList.remove('ring-2', 'ring-primary', 'shadow-xl');
      });
    } else {
      // Open new case
      selectedCase = caseId;
      showCaseDetail(caseId);
      
      // Update card states
      document.querySelectorAll('.case-study-card').forEach(card => {
        const cardId = parseInt(card.getAttribute('data-case'));
        if (cardId === caseId) {
          card.classList.add('ring-2', 'ring-primary', 'shadow-xl');
        } else {
          card.classList.remove('ring-2', 'ring-primary', 'shadow-xl');
        }
      });
    }
  }
  
  function showCaseDetail(caseId) {
    const caseData = window.caseStudiesData ? window.caseStudiesData.find(c => c.id === caseId) : null;
    
    if (!caseData) {
      console.error('Case study data not found for ID:', caseId);
      return;
    }
    
    const totalRevenue = parseFloat(caseData.feedCost.replace(' tỷ VNĐ', '')) + parseFloat(caseData.profit.replace(' tỷ VNĐ', ''));
    
    caseDetailContent.innerHTML = `
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Left: Details & Testimonial -->
        <div class="space-y-6">
          <div>
            <h3 class="text-2xl font-bold mb-4">${caseData.title}</h3>
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="space-y-3">
                ${caseData.details.slice(0, 3).map(detail => {
                  const [label, value] = detail.split(':');
                  return `<div class="text-sm">
                    <span class="text-muted-foreground">${label}:</span>
                    <span class="font-medium ml-2">${value}</span>
                  </div>`;
                }).join('')}
              </div>
              <div class="space-y-3">
                ${caseData.details.slice(3).map(detail => {
                  const [label, value] = detail.split(':');
                  return `<div class="text-sm">
                    <span class="text-muted-foreground">${label}:</span>
                    <span class="font-medium ml-2">${value}</span>
                  </div>`;
                }).join('')}
              </div>
            </div>
          </div>

          <div class="bg-primary-soft p-6 rounded-lg">
            <h4 class="font-semibold mb-3 text-primary">Lời chứng thực từ chủ trại</h4>
            <blockquote class="text-muted-foreground italic mb-3">
              "${caseData.testimonial}"
            </blockquote>
            <cite class="font-medium text-sm">- ${caseData.owner}</cite>
          </div>
        </div>

        <!-- Right: Financial Breakdown -->
        <div class="space-y-6">
          <div>
            <h4 class="text-xl font-semibold mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-profit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              Phân tích Tài chính Chi tiết
            </h4>
            
            <div class="space-y-4">
              <div class="p-4 bg-growth-soft rounded-lg">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-muted-foreground">Tổng doanh thu</span>
                  <span class="font-bold text-lg text-growth">
                    ${totalRevenue.toFixed(1)} tỷ VNĐ
                  </span>
                </div>
              </div>
              
              <div class="p-4 bg-muted rounded-lg">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-muted-foreground">Chi phí thức ăn</span>
                  <span class="font-medium">${caseData.feedCost}</span>
                </div>
              </div>
              
              <div class="p-4 bg-profit-soft rounded-lg">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm text-muted-foreground">Lợi nhuận ròng</span>
                  <span class="font-bold text-lg text-profit">${caseData.profit}</span>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-primary-soft rounded-lg">
                  <div class="text-2xl font-bold text-primary">${caseData.fcr}</div>
                  <div class="text-xs text-muted-foreground">Hệ số chuyển đổi thức ăn</div>
                </div>
                <div class="text-center p-4 bg-growth-soft rounded-lg">
                  <div class="text-2xl font-bold text-growth">${caseData.roi}</div>
                  <div class="text-xs text-muted-foreground">Tỷ suất lợi nhuận</div>
                </div>
              </div>
            </div>
          </div>

          <button class="w-full btn-primary px-4 py-3 rounded-lg text-white font-medium hover:bg-primary/90 transition-colors">
            <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            Tải báo cáo chi tiết (PDF)
          </button>
        </div>
      </div>
    `;
    
    caseDetailContainer.classList.remove('hidden');
    caseDetailContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  
  // Initialize section-specific features
  function initSectionFeatures(sectionId) {
    switch (sectionId) {
      case 'supply-map':
        if (!supplyMap) {
          initSupplyMap();
        }
        break;
      case 'logistics':
        initLogisticsCalculator();
        break;
      case 'rd-cooperation':
        initRDForm();
        break;
    }
  }
  
  // Supply Map with Leaflet
  function initSupplyMap() {
    // Only initialize if Leaflet is available and map container exists
    if (typeof L === 'undefined') {
      console.warn('Leaflet not loaded, skipping map initialization');
      return;
    }
    
    const mapContainer = document.getElementById('supply-map-container');
    if (!mapContainer) {
      console.warn('Map container not found');
      return;
    }
    
    try {
      supplyMap = L.map('supply-map-container').setView([10.0452, 105.7469], 6);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(supplyMap);
      
      // Add supply locations from data
      if (window.supplyLocationsData) {
        window.supplyLocationsData.forEach(location => {
          const marker = L.marker([location.lat, location.lng]).addTo(supplyMap);
          marker.bindPopup(`
            <div class="p-2">
              <h3 class="font-semibold text-primary">${location.name}</h3>
              <p class="text-sm text-muted-foreground">${location.type}</p>
              <div class="mt-2 text-xs">
                <div>Năng lực: ${location.capacity}</div>
                <div>Phủ sóng: ${location.coverage}</div>
                <div>Giao hàng: ${location.delivery}</div>
              </div>
            </div>
          `);
        });
      }
    } catch (error) {
      console.error('Failed to initialize map:', error);
    }
  }
  
  // Logistics Calculator
  function initLogisticsCalculator() {
    const form = document.getElementById('logistics-form');
    const resultsContainer = document.getElementById('logistics-results');
    
    if (form && resultsContainer) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateLogistics(new FormData(form), resultsContainer);
      });
    }
  }
  
  function calculateLogistics(formData, resultsContainer) {
    const quantity = parseFloat(formData.get('quantity')) || 0;
    const location = formData.get('location') || '';
    
    // Simple calculation logic
    const containersNeeded = Math.ceil(quantity / 25); // 25 tons per container
    const estimatedDays = location.includes('Cần Thơ') ? 1 : 
                         location.includes('HCM') ? 2 : 
                         location.includes('Hà Nội') ? 3 : 2;
    const estimatedCost = containersNeeded * 15000000; // 15M VND per container
    
    resultsContainer.innerHTML = `
      <div class="bg-card border border-border rounded-lg p-6 mt-6">
        <h4 class="text-xl font-semibold mb-4 text-primary">Kết quả Tính toán</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-primary-soft rounded-lg">
            <div class="text-2xl font-bold text-primary">${containersNeeded}</div>
            <div class="text-sm text-muted-foreground">Container cần thiết</div>
          </div>
          <div class="text-center p-4 bg-growth-soft rounded-lg">
            <div class="text-2xl font-bold text-growth">${estimatedDays}</div>
            <div class="text-sm text-muted-foreground">Ngày giao hàng</div>
          </div>
          <div class="text-center p-4 bg-profit-soft rounded-lg">
            <div class="text-2xl font-bold text-profit">${(estimatedCost / 1000000).toFixed(1)}M</div>
            <div class="text-sm text-muted-foreground">Chi phí vận chuyển (VNĐ)</div>
          </div>
        </div>
        <div class="mt-4 p-4 bg-muted rounded-lg">
          <h5 class="font-medium mb-2">Gợi ý tối ưu:</h5>
          <ul class="text-sm text-muted-foreground space-y-1">
            <li>• Kho xuất: ${location.includes('Cần Thơ') ? 'Nhà máy chính - Cần Thơ' : 'Kho phân phối gần nhất'}</li>
            <li>• Lộ trình: ${containersNeeded > 2 ? 'Chia thành 2 đợt giao hàng' : 'Giao hàng một lần'}</li>
            <li>• Tiết kiệm: ${quantity > 100 ? 'Đủ điều kiện giảm 5% phí vận chuyển' : 'Tăng số lượng để được giảm giá'}</li>
          </ul>
        </div>
      </div>
    `;
    
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  
  // R&D Cooperation Form
  function initRDForm() {
    const form = document.getElementById('rd-form');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleRDSubmission(new FormData(form));
      });
    }
  }
  
  function handleRDSubmission(formData) {
    // Simulate form submission
    const submitBtn = document.querySelector('#rd-form button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Đang gửi...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      submitBtn.textContent = 'Đã gửi thành công!';
      submitBtn.classList.remove('bg-primary');
      submitBtn.classList.add('bg-growth');
      
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'mt-4 p-4 bg-growth-soft border border-growth text-growth rounded-lg';
      successMsg.innerHTML = `
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="font-medium">Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong vòng 24 giờ.</span>
        </div>
      `;
      
      document.getElementById('rd-form').appendChild(successMsg);
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('bg-growth');
        submitBtn.classList.add('bg-primary');
        if (successMsg.parentNode) {
          successMsg.parentNode.removeChild(successMsg);
        }
      }, 3000);
    }, 1500);
  }
  
  // Lazy loading for images
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
  
  // Utility functions
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
  
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  // Export functions for global access if needed
  window.KingBullApp = {
    navigateToSection,
    toggleCaseDetail,
    initSupplyMap,
    calculateLogistics
  };
  
})();