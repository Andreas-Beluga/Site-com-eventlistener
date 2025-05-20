
document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginForm = document.getElementById("login-form");
    const statusMessage = document.getElementById("status-message");
  
    // Mouseout
    loginForm.addEventListener("mouseout", () => {
      loginForm.style.backgroundColor = "#f0f0f0";
    });
  
    // Keyup
    emailInput.addEventListener("keyup", () => {
      statusMessage.textContent = `Email field updated: ${emailInput.value}`;
    });
  
    // Keydown
    passwordInput.addEventListener("keydown", () => {
      statusMessage.textContent = "Typing in password field...";
    });
  
    // Input
    emailInput.addEventListener("input", () => {
      emailInput.style.backgroundColor = emailInput.value ? "#e0ffe0" : "#ffe0e0";
    });
  
    // Change
    emailInput.addEventListener("change", () => {
      statusMessage.textContent = "Email input value finalized.";
    });
  
    // Submit
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      statusMessage.textContent = "Form submitted successfully!";
      loginForm.reset();
      emailInput.style.backgroundColor = "#ffffff";
    });
  
    // Focus
    emailInput.addEventListener("focus", () => {
      emailInput.style.borderColor = "#008000";
    });
  
    // Blur
    passwordInput.addEventListener("blur", () => {
      passwordInput.style.borderColor = "#ff0000";
    });
  
    // Load
    window.addEventListener("load", () => {
      statusMessage.textContent = "Page loaded successfully!";
    });
  
    // Resize
    window.addEventListener("resize", () => {
      statusMessage.textContent = `Window resized to ${window.innerWidth} x ${window.innerHeight}`;
    });
  });
  