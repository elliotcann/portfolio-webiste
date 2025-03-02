/**
 * Parallax and scroll animation effects
 */
document.addEventListener('DOMContentLoaded', function() {
  // Add the animate-on-scroll class to all card elements for animation
  const cardElements = document.querySelectorAll('.card-item, .resume-item, .portfolio-card');
  
  cardElements.forEach(card => {
    card.classList.add('animate-on-scroll');
  });
  
  // Function to handle scroll animations
  function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150; // Adjust this value to control when animations trigger
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  // Run once on page load to handle elements already in view
  handleScrollAnimations();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimations);
  
  // Create a parallax effect for fixed background
  function parallaxEffect() {
    const heroImg = document.querySelector('.hero img');
    if (heroImg) {
      const scrollPosition = window.pageYOffset;
      // Create subtle movement to enhance the fixed parallax effect
      heroImg.style.transform = `translateY(-${scrollPosition * 0.15}px)`;
    }
  }
  
  // Add scroll event listener for parallax effect
  window.addEventListener('scroll', parallaxEffect);
});
