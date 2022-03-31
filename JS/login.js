function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["user-pw"].value;

    if (username.length < 4 || username.length > 20) {
      alert("Username must contain 8-20 characters");
      return false;
    }
    if (password.length < 4 || password.length > 20) {
      alert("Password must contain 8-20 characters");
      return false;
    }
  }