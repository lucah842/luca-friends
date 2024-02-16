document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
      // Check username and password
      if (username === "admin" && password === "Friends20!") {
        window.location.href = "3t89uut8tu34tu3tuttu.html"; // Redirect to welcome page
      } else {
        alert("Invalid Username or Password");
      }
    });
  });
  