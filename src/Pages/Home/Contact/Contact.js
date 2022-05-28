import React from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_w5ckfr1', 'template_4sllcq9', e.target, 'HmDKt3gAaokdpNhzA')
          .then((result) => {
              console.log(result.text);
              toast('Successfully sent your email')
          }, (error) => {
              console.log(error.text);
              toast('Failed your email Try again')
              
          });
          e.target.reset();
      };
    

    return (
        <div  className="hero min-h-screen text-black">
  <div className="hero-overlay bg-white"></div>
  <div className="hero-content text-center  text-neutral-content">

   <form className='frombox' onSubmit={sendEmail} >
   <div  className='text-center mb-12 '>
      <h3 className='text-xl font-bold uppercase text-black' >Contact us  </h3>
            {/* <h2 className='text-4xl text-black'> Services We Provide</h2> */}
      </div>
   <input className="border-2 text-black'" type="text" placeholder="name" name='name' className="input w-full max-w-xs w-full max-w-xs  mb-5" />
   <input type="email" placeholder="email" name='email' className="input w-full max-w-xs w-full max-w-xs mb-5" />
   <textarea type="text" placeholder="message" name='message' className="input w-full max-w-xs w-full max-w-xs h-32 mb-5  " />

<br></br>
<input className='btn mb-6 w-full max-w-xs' type="submit" value='Send'/>
   </form>


  </div>
</div>
    );
};

export default Contact;