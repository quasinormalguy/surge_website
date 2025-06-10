// assets/js/cv-modal.js

document.addEventListener("DOMContentLoaded", function() {
    // Get modal element
    var modal = document.getElementById("cv-modal");
    // Get open modal button
    var btn = document.getElementById("cv-link");
    // Get close button
    var span = document.getElementById("close-cv");
  
    // Listen for open click
    btn.onclick = function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      modal.style.display = "block";
    }
  
    // Listen for close click
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // Listen for outside click
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });