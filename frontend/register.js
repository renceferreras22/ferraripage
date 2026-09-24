// Change this to your Render backend URL after deployment.
const API_URL = "http://localhost:5000";

const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  message.textContent = "Creating account...";

  try {
    const response = await fetch(`${API_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    message.textContent = data.message;

    if (response.ok) {
      registerForm.reset();
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    }
  } catch (error) {
    message.textContent = "Cannot connect to the server.";
  }
});
