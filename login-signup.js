//Login and SignUp EventHandler
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

    const supabaseUrl = 'https://itunvctborbeigkokedh.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dW52Y3Rib3JiZWlna29rZWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNTMwNjgsImV4cCI6MjA1OTYyOTA2OH0.7_ozWg8nKlHPr5bRNrHHHvCmBNaMAt97QCvSCNJuWcg' // replace with your anon key
    const supabase = createClient(supabaseUrl, supabaseKey)

    const message = document.getElementById("message")

    document.getElementById("signupBtn").addEventListener("click", async () => {
      const email = document.getElementById("signupEmail").value
      const password = document.getElementById("signupPassword").value

      const { error } = await supabase.auth.signUp({ email, password })
      message.textContent = error
        ? `Signup Error: ${error.message}`
        : "Signup successful! Check your email for confirmation."
    });

    document.getElementById("loginBtn").addEventListener("click", async () => {
      const email = document.getElementById("loginEmail").value
      const password = document.getElementById("loginPassword").value

      const { error } = await supabase.auth.signInWithPassword({ email, password })
      message.textContent = error
        ? `Login Error: ${error.message}`
        : "Login successful!"
    });

