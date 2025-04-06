function toggleForms() {
  document.getElementById('login-section').classList.toggle('hidden');
  document.getElementById('signup-section').classList.toggle('hidden');
}

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/"; // or any dashboard page
      });
    }
  });
}
