import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'Raj_3945',
      'template_gy2b66g',
      form.current,
      'vFkR3fKB61Fl8LaGS'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert('Something went wrong. Try again!');
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Let’s Get in Touch</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        
        <div className="form-group">
          <label htmlFor="user_name">Your Name *</label>
          <input type="text" id="user_name" name="user_name" placeholder="Your Name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="user_email">Your Email *</label>
          <input type="email" id="user_email" name="user_email" placeholder="Your Email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="user_phone">Phone Number</label>
          <input type="tel" id="user_phone" name="user_phone" placeholder="Your Phone Number" />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject / Title *</label>
          <input type="text" id="subject" name="subject" placeholder="Subject / Title" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea id="address" name="address" placeholder="Your Address" rows="3"></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="inquiry_type">Type of Inquiry *</label>
          <select id="inquiry_type" name="inquiry_type" defaultValue="" required>
            <option value="" disabled>Choose one</option>
            <option value="general">General Question</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea id="message" name="message" placeholder="Your Message" required rows="6"></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
