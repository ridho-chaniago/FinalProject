function showSection(sectionId) {
  document.getElementById("main-section").classList.add("hidden");
  document.getElementById("login-section").classList.remove("active");
  document.getElementById("signup-section").classList.remove("active");
  document.getElementById(sectionId).classList.remove("hidden");
  document.getElementById(sectionId).classList.add("active");
}

function validateLoginForm(event) {
  event.preventDefault();
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;
  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return false;
  }
  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");
  if (username === storedUsername && password === storedPassword) {
    window.location.href = "home.html";
  } else {
    alert("Incorrect username or password.");
    return false;
  }
  return true;
}

function validateSignupForm(event) {
  event.preventDefault();
  var username = document.getElementById("signup-username").value;
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  var confirmPassword = document.getElementById(
    "signup-confirm-password"
  ).value;
  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill out all fields.");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  window.location.href = "home.html";
  return true;
}

// notes notes
//  ini style pembuatan login form dan onboarding formku, kalau mau diedit sehingga lebih bagus monggo dipersilahkan

//  Script ini kubuat getdata dari localStorage, jadi signup dulu, lalu akan ke halaman selanjutnya.
