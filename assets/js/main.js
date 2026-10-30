/**
 * PERSONAL PORTFOLIO - JAVASCRIPT CONTROLLER
 * Author: B.Tech Information Technology Student
 * Features: Typewriter effect, Mobile navigation, Project filters,
 *           Quick View Modal, Skill progress animation, Form validation & Toast,
 *           Scroll progress & Back to top button.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. TYPEWRITER EFFECT IN HERO ---
  const typingElement = document.querySelector('.hero-typing-text');
  if (typingElement) {
    const roles = [
      'B.Tech IT Student (2nd Year)',
      'Aspiring Full Stack Developer',
      'Creative Problem Solver',
      'Open Source & Tech Enthusiast'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 90;
    const deleteSpeed = 45;
    const pauseTime = 1800;

    function typeEffect() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let timeout = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentRole.length) {
        timeout = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeout = 400;
      }

      setTimeout(typeEffect, timeout);
    }

    typeEffect();
  }

  // --- 2. STICKY NAVBAR & ACTIVE NAV LINK HIGHLIGHT ---
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const progressBar = document.querySelector('.scroll-progress-bar');
  const backToTopBtn = document.querySelector('.back-to-top');
  const progressCircle = document.querySelector('.progress-ring-circle');
  const circleCircumference = 2 * Math.PI * 23; // r=23 => ~144.5

  if (progressCircle) {
    progressCircle.style.strokeDasharray = `${circleCircumference} ${circleCircumference}`;
    progressCircle.style.strokeDashoffset = circleCircumference;
  }

  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    // Sticky navbar style
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    if (progressBar) {
      progressBar.style.width = `${scrollPercentage}%`;
    }

    // Back to top button visibility & circular progress
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }

      if (progressCircle) {
        const offset = circleCircumference - (scrollPercentage / 100) * circleCircumference;
        progressCircle.style.strokeDashoffset = offset;
      }
    }

    // Active Section Link Detection
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 3. MOBILE NAVIGATION HAMBURGER MENU ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  }

  // --- 4. SCROLL REVEAL ANIMATIONS (IntersectionObserver) ---
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('active'));
  }

  // --- 5. SKILL PROGRESS BAR ANIMATION ---
  const skillCards = document.querySelectorAll('.skill-card');
  if ('IntersectionObserver' in window) {
    const skillObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.skill-progress-fill');
            if (fill) {
              const targetWidth = fill.getAttribute('data-target-width') || '80%';
              fill.style.width = targetWidth;
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    skillCards.forEach((card) => skillObserver.observe(card));
  } else {
    skillCards.forEach((card) => {
      const fill = card.querySelector('.skill-progress-fill');
      if (fill) fill.style.width = fill.getAttribute('data-target-width') || '80%';
    });
  }

  // --- 6. SKILLS CATEGORY FILTERING ---
  const skillFilters = document.querySelectorAll('.skills-filter-btn');
  if (skillFilters.length > 0) {
    skillFilters.forEach((btn) => {
      btn.addEventListener('click', () => {
        skillFilters.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        skillCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 20);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // --- 7. PROJECTS FILTERING ---
  const projectFilters = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (projectFilters.length > 0) {
    projectFilters.forEach((btn) => {
      btn.addEventListener('click', () => {
        projectFilters.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filterCategory = btn.getAttribute('data-filter');

        projectCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');
          if (filterCategory === 'all' || cardCategory === filterCategory) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 20);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // --- 8. PROJECT DATA & QUICK VIEW MODAL ---
  const projectDetails = {
    'gallery': {
      title: 'Image Gallery Web Application',
      category: 'Web Application',
      image: 'assets/images/project-gallery.jpg',
      description: 'An interactive, fully responsive photography gallery designed with category-based filtering, instant dynamic search, and an accessible fullscreen lightbox preview modal.',
      features: [
        'Multi-category filtering (Nature, Urban, Astrophotography, Minimal)',
        'Fluid lightbox modal with keyboard navigation (Esc, Arrow Left/Right)',
        'Dynamic search indexing photo titles, tags, and authors',
        'Optimized responsive grid layout with smooth image hover zooms',
        'Pure Vanilla JavaScript architecture with zero heavy library overhead'
      ],
      techStack: ['HTML5', 'CSS Grid', 'JavaScript (ES6+)', 'Lightbox API', 'CSS Glassmorphism'],
      liveDemoUrl: '#',
      githubUrl: 'https://github.com/yourusername/image-gallery'
    },
    'calculator': {
      title: 'Modern Interactive Calculator',
      category: 'Web Application',
      image: 'assets/images/project-calculator.jpg',
      description: 'A futuristic dark-mode calculator web app featuring mathematical arithmetic, live computation history tape, keyboard entry support, and responsive glassmorphic keys.',
      features: [
        'Complete arithmetic, percentages, square roots, and parentheses evaluation',
        'Live history tape tracking previous equations with recall capability',
        'Full keyboard shortcut binding (Enter, Backspace, Numpad, Escape)',
        'Local storage persistence for computation history',
        'Auditory/visual haptic keypress feedback and smooth animations'
      ],
      techStack: ['HTML5', 'CSS3 Variables', 'Vanilla JavaScript', 'LocalStorage API', 'Audio API'],
      liveDemoUrl: '#',
      githubUrl: 'https://github.com/yourusername/modern-calculator'
    },
    'phone-optimizer': {
      title: 'AI Personal Phone Optimizer',
      category: 'Concept & Prototype',
      image: 'assets/images/project-phone-optimizer.jpg',
      description: 'A conceptual system utility dashboard and interactive telemetry prototype that models intelligent smartphone background resource management, thermal throttling, and battery longevity optimization.',
      features: [
        'Real-time animated telemetry graphs simulating CPU thermal loads',
        'Dynamic RAM usage gauges with instant simulated "RAM Boost" optimization',
        'Intelligent battery health analytics and power cycle estimation',
        'Cyberpunk neon dark UI built with custom CSS animations and Canvas',
        'Demonstrates clean system telemetry architecture and UI dashboard design'
      ],
      techStack: ['JavaScript', 'HTML5 Canvas', 'CSS Animations', 'System Telemetry UI', 'Data Viz'],
      liveDemoUrl: '#',
      githubUrl: 'https://github.com/yourusername/ai-phone-optimizer'
    },
    'portfolio': {
      title: 'Modern Developer Portfolio Website',
      category: 'Web Application',
      image: 'assets/images/project-portfolio.jpg',
      description: 'A modern, high-performance personal portfolio website built from scratch using clean vanilla HTML, CSS, and JavaScript. Designed specifically for an Information Technology student to highlight projects, technical skills, and resume credentials.',
      features: [
        'Modern dark aesthetic with purple/cyan gradients and glassmorphism',
        'Dynamic typewriter subtitle effect and scroll progress indicator',
        'Interactive project modals and skill category filtering',
        'Mobile hamburger drawer menu and accessible semantic structure',
        'Optimized for zero external framework bloat and instant load times'
      ],
      techStack: ['HTML5', 'CSS3 Flexbox/Grid', 'Vanilla JavaScript', 'Web Animations', 'Responsive UI'],
      liveDemoUrl: '#',
      githubUrl: 'https://github.com/yourusername/developer-portfolio'
    }
  };

  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalImage = document.getElementById('modalImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalLiveDemo = document.getElementById('modalLiveDemo');
  const modalGithub = document.getElementById('modalGithub');

  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data || !modalOverlay) return;

    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;

    // Populate features
    modalFeatures.innerHTML = '';
    data.features.forEach((feat) => {
      const li = document.createElement('li');
      li.textContent = feat;
      modalFeatures.appendChild(li);
    });

    // Populate tech stack
    modalTechStack.innerHTML = '';
    data.techStack.forEach((tech) => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = tech;
      modalTechStack.appendChild(span);
    });

    // Actions
    modalLiveDemo.href = data.liveDemoUrl;
    modalGithub.href = data.githubUrl;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind project cards and view buttons
  document.querySelectorAll('[data-project-id]').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      // If clicking github code directly, don't open modal
      if (e.target.closest('.btn-github')) return;
      e.preventDefault();
      const id = trigger.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // --- 9. CONTACT FORM VALIDATION & INTERACTIVE TOAST ---
  const contactForm = document.getElementById('contactForm');
  const toastContainer = document.getElementById('toastContainer');

  function showToast(title, message, type = 'success') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-icon">✓</div>
      <div class="toast-msg">
        <h6>${title}</h6>
        <p>${message}</p>
      </div>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const subjectInput = document.getElementById('contactSubject');
      const messageInput = document.getElementById('contactMessage');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      // Helper function for validation
      function validateField(input, condition) {
        const group = input.closest('.form-group');
        if (!condition) {
          group.classList.add('has-error');
          isValid = false;
        } else {
          group.classList.remove('has-error');
        }
      }

      validateField(nameInput, nameInput.value.trim().length >= 2);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      validateField(emailInput, emailRegex.test(emailInput.value.trim()));
      validateField(subjectInput, subjectInput.value.trim().length >= 3);
      validateField(messageInput, messageInput.value.trim().length >= 8);

      if (isValid) {
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg style="animation: spin 1s linear infinite; width: 18px; height: 18px; display: inline-block;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path>
          </svg>
          <span>Sending Message...</span>
        `;

        // Simulate network submission
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          showToast(
            'Message Sent Successfully!',
            `Thank you ${nameInput.value.trim()}, I have received your message and will reply soon.`
          );
          contactForm.reset();
        }, 1200);
      }
    });

    // Remove error class on user input
    ['contactName', 'contactEmail', 'contactSubject', 'contactMessage'].forEach((id) => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', () => {
          input.closest('.form-group').classList.remove('has-error');
        });
      }
    });
  }

  // --- 10. SMOOTH SCROLL FOR IN-PAGE ANCHOR LINKS ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- 11. DYNAMIC FOOTER YEAR ---
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
