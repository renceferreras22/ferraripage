// Change this to your Render backend URL after deployment.
const API_URL = "http://localhost:5000";

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  message.textContent = "Logging in...";

  try {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      message.textContent = data.message;
      return;
    }

    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } catch (error) {
    message.textContent = "Cannot connect to the server.";
  }
});
