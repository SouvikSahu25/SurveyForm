// JavaScript code for form validation
function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var error = "";
    
    // Name validation
    if (name == "") {
      error += "Name is required\n";
    }
    
    // Age validation
    if (age == "") {
      error += "Age is required\n";
    } else if (isNaN(age)) {
      error += "Age must be a number\n";
    }
    
    // Gender validation
    if (gender == "") {
      error += "Gender is required\n";
    }
    
    // Email validation
    if (email == "") {
      error += "Email is required\n";
    } else if (!validateEmail(email)) {
      error += "Invalid email address\n";
    }
    
    // Display error message or submit form
    if (error != "") {
      alert(error);
      return false;
    } else {
      return true;
    }
  }
  
  // Email validation function
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
