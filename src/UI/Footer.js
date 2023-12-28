import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';
function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia"> 
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
        <p>&copy; 2023 Akki Sengupta</p>
    </div>
  )
}

export default Footer