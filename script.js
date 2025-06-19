 function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
$("#togglePassword").click(function () {
  const input = $("#password");
  const type = input.attr("type") === "password" ? "text" : "password";
  input.attr("type", type);
  $(this).text(type === "password" ? "Show" : "Hide");
});
  $("#submit").click(function (event) {
    event.preventDefault(); 

    let errors = [];
    let email = $("#email").val().trim();
    let phone = $("#pno").val().trim();
    let password = $("#password").val();
    let confirmPassword = $("#confirm-password").val();
 
    if (!isEmail(email)) {
      errors.push("Invalid email address.");
    }
    if (!/^\d{10}$/.test(phone)) {
      errors.push("Phone number must be 10 digits.");
    }
    
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[\W_]/.test(password)
    ) {
      errors.push(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
    }
    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }

   
    if (errors.length > 0) {
      $('#message').html(errors.map(e => `<div class="error">${e}</div>`).join(""));
    } 
    else {
      $('#message').html(`<div class="success">Form submitted successfully!</div>`);
      
    }
  });