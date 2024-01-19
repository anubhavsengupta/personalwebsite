import React from 'react'
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div class="footer_container">
          <div class="logo"> <p>. </p></div>
            <a href="mailto:anubhavakki2016@gmail.com">
            <i class="fa-solid fa-envelope fa-2x"></i>
              </a>
            <a href="https://github.com/anubhavsengupta"><i class="fab fa-github fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/akki-sengupta-a41888213/?originalSubdomain=ca"><i class="fab fa-linkedin-in fa-2x"></i></a>
            <p>Akki Sengupta © 2024.</p>
          </div>
      </footer>
    </div>
  )
}

export default Footer