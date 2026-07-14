// Twist Academy Nepalgunj - Script Controls

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation on Scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Burger Menu Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navList = document.getElementById('nav-list');

  if (mobileMenu && navList) {
    mobileMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      navList.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // If it's a dropdown toggle on mobile, don't close right away, expand instead
        if (window.innerWidth <= 768 && link.closest('.has-dropdown')) {
          const parent = link.closest('.has-dropdown');
          parent.classList.toggle('active');
          return;
        }
        mobileMenu.classList.remove('active');
        navList.classList.remove('active');
      });
    });
  }

  // 3. Contact Form Submission
  const enrollmentForm = document.getElementById('enrollment-form');
  if (enrollmentForm) {
    enrollmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const course = document.getElementById('course-select').value;
      
      // Simple validation check
      if (name && email && phone && course) {
        alert(`Thank you, ${name}! Your registration inquiry for the "${course}" program has been received. Our admissions officer in Nepalgunj will contact you shortly via email (${email}) or phone (${phone}).`);
        enrollmentForm.reset();
      } else {
        alert('Please fill out all required fields.');
      }
    });
  }
});

// 4. Testimonials Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function setTestimonial(index) {
  if (slides.length === 0 || dots.length === 0) return;
  
  // Hide current slide and inactive dot
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  
  // Show new slide
  currentSlide = index;
  slides[currentSlide].add('active');
  dots[currentSlide].add('active');
}

// Fallback logic for manual toggle index matching
window.setTestimonial = function(index) {
  if (slides.length === 0 || dots.length === 0) return;
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
};

// Auto slide intervals
if (slides.length > 0) {
  setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    window.setTestimonial(nextSlide);
  }, 6000);
}
