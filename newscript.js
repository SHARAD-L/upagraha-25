// Initialize AOS
AOS.init({
    duration: 400,
    once: true,
    offset: 100,
  })
  
  // Add smooth reveal for timeline items
  document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item")
  
    const revealItem = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
          observer.unobserve(entry.target)
        }
      })
    }
  
    const timelineObserver = new IntersectionObserver(revealItem, {
      root: null,
      threshold: 0.1,
    })
  
    timelineItems.forEach((item) => {
      timelineObserver.observe(item)
    })
  })
  
// Navigation
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.style.transform = 'translateY(-100%)';
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    mobileMenu.classList.toggle('active');
    
    const spans = menuBtn.getElementsByTagName('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}
  
  // Countdown Timer
  function updateCountdown() {
    const eventDate = new Date("February 22, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
  
    if (distance < 0) {
      document.getElementById("countdown").textContent = "Event has started!";
      return;
    }
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }
  
  // Ensure DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(updateCountdown, 1000);
    updateCountdown();
  });

  // Form Handling
  const registerForm = document.querySelector(".register-form")
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Get form data
      const formData = {
        teamName: document.getElementById("teamName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        college: document.getElementById("college").value,
      }
  
      // Here you would typically send the data to a server
      console.log("Registration submitted:", formData)
  
      // Show success message
      alert("Registration successful! We will contact you soon.")
  
      // Reset form
      registerForm.reset()
    })
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerOffset = 70
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })
  
  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero")
    const scrolled = window.pageYOffset
    hero.style.backgroundPosition = `center ${scrolled * 0.5}px`
  })
  
  // Navbar background change on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(18, 18, 18, 0.95)"
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)"
    } else {
      navbar.style.background = "rgba(18, 18, 18, 0.95)"
      navbar.style.boxShadow = "none"
    }
  })
  
  // Add hover effect for timeline content
  document.querySelectorAll(".timeline-content").forEach((content) => {
    content.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
    })
  
    content.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
  
  
