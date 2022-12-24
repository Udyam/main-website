/* eslint-disable prettier/prettier */
import React from 'react'
import "./footer.css"
import Main from "./images/Main.svg"
import ball from "./images/ball.png"
import fb from "./images/fb.png"
import google from "./images/google.png"
import linkedin from "./images/linkedin.png"
import ig from "./images/ig.png"
import twitter from "./images/twitter.png"
export default function Footer() {
  return(
   <div className='bg'>
       <div className='items'>
        <img src={ig} alt="" className='px' />
        <img src={ball} alt="" className='px'  />
        <img src={google} alt="" className='px' />
        <img src={linkedin} alt="" className='px' />
        <img src={fb} alt="" className='px'  />
        <img src={twitter} alt="" className='px'  />
    </div>
    <img src={Main} alt="" className='main' />
   </div>
  );
}
