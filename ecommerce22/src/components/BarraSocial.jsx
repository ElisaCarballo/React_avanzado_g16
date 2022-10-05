import React from 'react'
import facebook from '../assets/Barraimg/facebook.png'
import instagram from '../assets/Barraimg/instagram.png'
import GitHub from '../assets/Barraimg/GitHub.png'
import linkedin from '../assets/Barraimg/linkedin.png'
import medium from '../assets/Barraimg/medium.png'
import '../assets/Barra.css'

const BarraSocial =_ =>{

  return (
      <div class="social-bar">
        <img src={facebook} alt="Facebook" href="https://www.facebook.com/" class="icon icon-facebook"/>
        <img src={instagram} alt="instagram" href="https://instagram.com/" class="icon icon-instagram"/>
        <img src={GitHub} alt="github" href="https://github.com/" class="icon icon-github"/>
        <img src={linkedin} alt="linkedin" href="https://linkedin.com/" class="icon icon-linkedin"/>
        <img src={medium} alt="medium" href="https://medium.com/" class="icon icon-medium"/>
      </div>
  )
};

export default BarraSocial;
