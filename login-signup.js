import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://itunvctborbeigkokedh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dW52Y3Rib3JiZWlna29rZWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNTMwNjgsImV4cCI6MjA1OTYyOTA2OH0.7_ozWg8nKlHPr5bRNrHHHvCmBNaMAt97QCvSCNJuWcg' // keep this private for production
const supabase = createClient(supabaseUrl, supabaseKey)

// Reference separate message elements
const loginMessage = document.getElementById("loginMessage")
const signupMessage = document.getElementById("signupMessage")

// Sign Up
document.getElementById("signupBtn").addEventListener("click", async (e) => {
  e.preventDefault()

  const email = document.getElementById("signupEmail").value
  const password = document.getElementById("signupPassword").value

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: 'https://ur-writer.netlify.app/login-signup'  // 👈 redirect after confirmation
    }
  });

  signupMessage.textContent = error
    ? `Signup Error: ${error.message}`
    : "Signup successful! Check your email for confirmation."
})

// Login
document.getElementById("loginBtn").addEventListener("click", async (e) => {
  e.preventDefault()

  const email = document.getElementById("loginEmail").value
  const password = document.getElementById("loginPassword").value

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  const loginMessage = document.getElementById("loginMessage");
  if (error) {
    loginMessage.textContent = `Login Error: ${error.message}`;
  } else {
    loginMessage.textContent = "Login successful!";
    // Redirect to homepage
    window.location.href = "https://ur-writer.netlify.app/";
  }
});

