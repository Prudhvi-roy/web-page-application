// Smooth Scroll Functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
  
  // Contact Form Validation and Submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Basic Validation
    if (!name || !email || !message) {
      document.getElementById('form-status').textContent = 'Please fill in all fields!';
      document.getElementById('form-status').style.color = 'red';
      return;
    }
  
    // Simulate form submission
    // In a real-world scenario, you'd send the data to a server
    document.getElementById('form-status').textContent = 'Your message has been sent successfully!';
    document.getElementById('form-status').style.color = 'green';
  
    // Reset form after submission
    document.getElementById('contact-form').reset();
  });
  
  // Optional: Scroll to top of the page when the page loads
  window.addEventListener('load', function() {
    window.scrollTo(0, 0); // Scroll to top on page load
  });
  