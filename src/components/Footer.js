import React from 'react';
import "../components/Footer.css";
import groot from "../Assets/groot.png";
let time= new Date();

const Footer = () => {
  return (
    <div>
        <p>Made By imGroot  <img src={groot} alt="groot" /></p>
       

        <p>copyrights © {time.getFullYear()}</p>
        
    </div>
  )
}

export default Footer;