import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    subject: '',
    address: '',
    inquiry_type: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.user_name.trim()) newErrors.user_name = 'Name is required';

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!emailPattern.test(formData.user_email)) {
      newErrors.user_email = 'Invalid email address';
    }

    // Phone validation (optional but must be valid if entered)
    if (formData.user_phone) {
      const phonePattern = /^\d{10}$/;
      if (!phonePattern.test(formData.user_phone)) {
        newErrors.user_phone = 'Phone must be 10 digits';
      }
    }

    // Subject validation
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';

    // Inquiry type
    if (!formData.inquiry_type) newErrors.inquiry_type = 'Please select an inquiry type';

    // Message validation
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs.sendForm(
      'Raj_3945',
      'template_gy2b66g',
      form.current,
      'vFkR3fKB61Fl8LaGS'
    )
      .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          subject: '',
          address: '',
          inquiry_type: '',
          message: ''
        });
        setErrors({});
      }, (error) => {
        alert('Something went wrong. Try again!');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Let’s Get in Touch</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="user_name">Your Name *</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          {errors.user_name && <small className="error">{errors.user_name}</small>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="user_email">Your Email *</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          {errors.user_email && <small className="error">{errors.user_email}</small>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="user_phone">Phone Number</label>
          <input
            type="tel"
            id="user_phone"
            name="user_phone"
            value={formData.user_phone}
            onChange={handleChange}
            maxLength="10"
          />
          {errors.user_phone && <small className="error">{errors.user_phone}</small>}
        </div>

        {/* Subject */}
        <div className="form-group">
          <label htmlFor="subject">Subject / Title *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <small className="error">{errors.subject}</small>}
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* Inquiry Type */}
        <div className="form-group">
          <label htmlFor="inquiry_type">Type of Inquiry *</label>
          <select
            id="inquiry_type"
            name="inquiry_type"
            value={formData.inquiry_type}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Choose one</option>
            <option value="general">General Question</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          {errors.inquiry_type && <small className="error">{errors.inquiry_type}</small>}
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <small className="error">{errors.message}</small>}
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
