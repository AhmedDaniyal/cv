
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vzgv3it', 'template_wla95wa', form.current, 'Fcr0OPbtj8HiToCx5')
    e.target.reset()
      
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>daniyalahm15@outlook.com</h5>
            <a href='mailto:daniyalahm15@outlook.com' target='_blank'> Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Daniyal Ahmed</h5>
            <a href='https://m.me/daniyal.ahmed.73744' target='_blank'> Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href='https://api.whatsapp.com/send?phone=923155555899' target='_blank'> Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
           <input type="text" name='name' placeholder='Your Name' required/>
           <input type="email"name='email'placeholder='Your Email' required />
           <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact