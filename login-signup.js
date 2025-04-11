import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://itunvctborbeigkokedh.supabase.co'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY' // keep this private for production
const supabase = createClient(supabaseUrl, supabaseKey)

// Reference separate message elements
const loginMessage = document.getElementById("loginMessage")
const signupMessage = document.getElementById("signupMessage")

// Sign Up
document.getElementById("signupBtn").addEventListener("click", async (e) => {
  e.preventDefault()

  const email = document.getElementById("signupEmail").value
  const password = document.getElementById("signupPassword").value

  const { error } = await supabase.auth.signUp({ email, password })

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

  loginMessage.textContent = error
    ? `Login Error: ${error.message}`
    : "Login successful!"
})

