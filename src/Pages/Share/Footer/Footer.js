import React from 'react';
import { AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";

import { BsFacebook, BsGithub, BsWhatsapp } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import img from '../../../assets/logo/FullLogo_NoBuffer.jpg';


const Footer = () => {
    return (
      <>
      <footer id='footers' class="footer p-10 bg-black text-white">
 

 <div>
 <a href="https://www.linkedin.com/in/sharifulislm/?fbclid=IwAR26GK7V66g2pHPsxf65JHItfEFwQuHoNv7Ndj9xHwXsijO8rY4WzmgrLHs" target="_blank" rel="noreferrer" style={{color:"white"}} className="btn logostyles btn-ghost normal-case text-xl">Shariful</a>
 <div class=" flex">
<a className='text-white text-3xl p-2 rounded' href="https://www.facebook.com/shariful.islam.fb" target="_blank" rel="noreferrer"> <span className='text-white text-3xl p-2 rounded'>  <BsFacebook ></BsFacebook></span>  </a>
   <a className='text-white text-3xl p-2 rounded' href="https://www.linkedin.com/in/sharifulislm/?fbclid=IwAR26GK7V66g2pHPsxf65JHItfEFwQuHoNv7Ndj9xHwXsijO8rY4WzmgrLHs" target="_blank" rel="noreferrer">  <span className='text-white text-3xl w-12 p-2 rounded'> <AiFillLinkedin></AiFillLinkedin> </span>  </a> 
     <a className='text-white text-3xl p-2 rounded' href="https://github.com/sharifulislm" target="_blank" rel="noreferrer"> <span className='text-white text-3xl w-12 p-2 rounded'>  <BsGithub ></BsGithub></span> </a>
 </div>
 </div> 
 <div className='text-left text-white'>
 <span class="footer-title text-white">Social</span> 
<ul className='text-white'>

<li ><Link className='text-white' to="/">sharif.hossain.p87@gmail.com</Link></li>
<li><Link className='text-white' to="/Service">+96551494820</Link></li>
<li><Link className='text-white' to="/AllReveiw">Kuwait ,Mahboula (BLOCK-1)</Link></li>
</ul>

 </div> 
 <div className=' '>
   <span class="footer-title text-white">Social</span> 
   <div class=" flex">
<a className='text-white text-3xl p-2 rounded' href="https://api.whatsapp.com/send?phone+96551494820" target="_blank" rel="noreferrer"> <span className='text-white text-3xl p-2 rounded'>  <BsWhatsapp></BsWhatsapp></span>  </a>
   <a className='text-white text-3xl p-2 rounded' href="mailto:sharif.hossain.p87@gmail.com " target="_blank" rel="noreferrer">  <span className='text-white text-3xl w-12 p-2 rounded'> <AiOutlineMail></AiOutlineMail> </span>  </a> 
   <a className='text-white text-3xl p-2 rounded' href="https://twitter.com/sharif26630" target="_blank" rel="noreferrer">  <span className='text-white text-3xl w-12 p-2 rounded'> <AiOutlineTwitter></AiOutlineTwitter> </span>  </a> 
 </div>
 </div>
 <div className='text-left'>
 <span class="footer-title text-white">Social</span> 
<ul className='invisible  md:visible '>
<li className='mb-2'><Link className='text-white' to="/">HOME</Link></li>
<li className='mb-2'><Link className='text-white' to="/Service">PROJECTS</Link></li>
<li className='mb-2'><Link className='text-white' to="/AllReveiw">BLOG</Link></li>
<li className='mb-2'><Link className='text-white' to="/ABOUT">ABOUT</Link></li>

</ul>

 </div> 
</footer>
      </>
    );
};

export default Footer;