// KingBull Insight Hub - Static JavaScript

// Case study data
const caseStudyData = {
  1: {
    title: 'Trang trại Cá Tra - An Giang',
    testimonial: 'Sử dụng thức ăn KingBull, FCR của tôi giảm từ 1.4 xuống 1.18, lợi nhuận tăng 35% so với vụ trước.',
    owner: 'Anh Nguyễn Văn Minh',
    fcr: '1.18',
    roi: '44.3%',
    cost: '18.5 tỷ VNĐ',
    profit: '8.2 tỷ VNĐ',
    revenue: '26.7 tỷ VNĐ',
    details: [
      'Mật độ nuôi: 45 con/m²',
      'Thời gian nuôi: 240 ngày',
      'Tỷ lệ sống: 92%',
      'Trọng lượng thu hoạch: 1.2kg/con',
      'Giá bán: 22.500 VNĐ/kg'
    ]
  },
  2: {
    title: 'Trang trại Cá Basa - Đồng Tháp',
    testimonial: 'KingBull không chỉ giúp cá tăng trọng nhanh mà còn giảm thiểu bệnh tật, chi phí thuốc giảm 60%.',
    owner: 'Chị Trần Thị Lan',
    fcr: '1.15',
    roi: '51.5%',
    cost: '13.2 tỷ VNĐ',
    profit: '6.8 tỷ VNĐ',
    revenue: '20.0 tỷ VNĐ',
    details: [
      'Mật độ nuôi: 40 con/m²',
      'Thời gian nuôi: 210 ngày',
      'Tỷ lệ sống: 94%',
      'Trọng lượng thu hoạch: 1.1kg/con',
      'Giá bán: 23.000 VNĐ/kg'
    ]
  },
  3: {
    title: 'Trang trại Cá Điêu Hồng - Cần Thơ',
    testimonial: 'Với KingBull, cá phát triển đều, màu sắc đẹp, giá bán cao hơn 15% so với thị trường.',
    owner: 'Ông Lê Văn Thành',
    fcr: '1.22',
    roi: '54.2%',
    cost: '16.8 tỷ VNĐ',
    profit: '9.1 tỷ VNĐ',
    revenue: '25.9 tỷ VNĐ',
    details: [
      'Mật độ nuôi: 35 con/m²',
      'Thời gian nuôi: 300 ngày',
      'Tỷ lệ sống: 89%',
      'Trọng lượng thu hoạch: 1.8kg/con',
      'Giá bán: 32.000 VNĐ/kg'
    ]
  }
};

// Current active section
let currentSection = 'home';

// Mobile menu state
let mobileMenuOpen = false;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeScrollSpy();
  initializeAnimations();
});

// Scroll to section function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  // Close mobile menu if open
  if (mobileMenuOpen) {
    toggleMobileMenu();
  }
  
  // Update active nav
  updateActiveNav(sectionId);
}

// Toggle mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBtn = document.getElementById('mobile-menu-btn');
  
  mobileMenuOpen = !mobileMenuOpen;
  
  if (mobileMenuOpen) {
    mobileMenu.classList.remove('hidden');
    menuBtn.innerHTML = '✕';
  } else {
    mobileMenu.classList.add('hidden');
    menuBtn.innerHTML = '☰';
  }
}

// Update active navigation
function updateActiveNav(sectionId) {
  currentSection = sectionId;
  
  // Update desktop nav
  const desktopNavBtns = document.querySelectorAll('#desktop-nav button');
  desktopNavBtns.forEach(btn => {
    btn.classList.remove('nav-btn-active');
    btn.classList.add('nav-btn');
  });
  
  // Find and activate current section button
  desktopNavBtns.forEach(btn => {
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(sectionId)) {
      btn.classList.add('nav-btn-active');
      btn.classList.remove('nav-btn');
    }
  });
}

// Initialize scroll spy
function initializeScrollSpy() {
  const sections = ['home', 'case-studies', 'technical-library', 'factory-video', 'dealer-portal', 'supply-map', 'support'];
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset + 100;
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          updateActiveNav(sectionId);
          break;
        }
      }
    }
  });
}

// Initialize animations
function initializeAnimations() {
  // Animate cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all interactive cards
  const cards = document.querySelectorAll('.interactive-card');
  cards.forEach(card => {
    observer.observe(card);
  });
}

// Toggle case study details
function toggleCaseStudy(caseId) {
  const detailsDiv = document.getElementById('case-study-details');
  const data = caseStudyData[caseId];
  
  if (!data) return;
  
  // Check if already showing this case
  const currentTitle = document.getElementById('detail-title');
  if (currentTitle && currentTitle.textContent === data.title) {
    detailsDiv.classList.add('hidden');
    return;
  }
  
  // Populate details
  document.getElementById('detail-title').textContent = data.title;
  document.getElementById('detail-testimonial').textContent = `"${data.testimonial}"`;
  document.getElementById('detail-owner').textContent = `- ${data.owner}`;
  document.getElementById('detail-fcr').textContent = data.fcr;
  document.getElementById('detail-roi').textContent = data.roi;
  document.getElementById('detail-cost').textContent = data.cost;
  document.getElementById('detail-profit').textContent = data.profit;
  document.getElementById('detail-revenue').textContent = data.revenue;
  
  // Populate specifications
  const specsDiv = document.getElementById('detail-specs');
  specsDiv.innerHTML = '';
  
  const leftSpecs = data.details.slice(0, 3);
  const rightSpecs = data.details.slice(3);
  
  const leftDiv = document.createElement('div');
  leftDiv.className = 'space-y-3';
  leftSpecs.forEach(spec => {
    const specDiv = document.createElement('div');
    specDiv.className = 'text-sm';
    const [label, value] = spec.split(': ');
    specDiv.innerHTML = `
      <span class="text-muted-foreground">${label}:</span>
      <span class="font-medium ml-2">${value}</span>
    `;
    leftDiv.appendChild(specDiv);
  });
  
  const rightDiv = document.createElement('div');
  rightDiv.className = 'space-y-3';
  rightSpecs.forEach(spec => {
    const specDiv = document.createElement('div');
    specDiv.className = 'text-sm';
    const [label, value] = spec.split(': ');
    specDiv.innerHTML = `
      <span class="text-muted-foreground">${label}:</span>
      <span class="font-medium ml-2">${value}</span>
    `;
    rightDiv.appendChild(specDiv);
  });
  
  specsDiv.appendChild(leftDiv);
  specsDiv.appendChild(rightDiv);
  
  // Show details
  detailsDiv.classList.remove('hidden');
  
  // Scroll to details
  setTimeout(() => {
    detailsDiv.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, 100);
}

// Utility functions for smooth interactions
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

// Performance optimization
const debouncedScrollHandler = debounce(() => {
  // Handle scroll events here if needed
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// Handle window resize
window.addEventListener('resize', function() {
  // Close mobile menu on resize to desktop
  if (window.innerWidth >= 1024 && mobileMenuOpen) {
    toggleMobileMenu();
  }
});

// Prevent FOUC (Flash of Unstyled Content)
document.documentElement.style.visibility = 'visible';