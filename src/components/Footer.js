import React from 'react';
import "../components/Footer.css"
let time= new Date();

const Footer = () => {
  return (
    <div>

        <p>copyrights © {time.getFullYear()}</p>
    </div>
  )
}

export default Footer;