import React, { useState } from 'react';
import validateEmail from '../utils/helpers';
import '../styles/Contact.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === 'name') {
        setName(value);
      } else if (name === 'email') {
        setEmail(value);
      } else if (name === 'message') {
        setMessage(value);
      }
    };
  
    const handleInputBlur = (e) => {
      const { name } = e.target;
      if (name === 'name') {
        setNameTouched(true);
      } else if (name === 'email') {
        setEmailTouched(true);
      } else if (name === 'message') {
        setMessageTouched(true);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !email || !message) {
        alert('Please fill in all fields');
      } else if (!validateEmail(email)) {
        alert('Please enter a valid email');
      } else {
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
        setNameTouched(false);
        setEmailTouched(false);
        setMessageTouched(false);
      }
    };
  
    return (
      <div className='container'>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {nameTouched && !name && <span className="error">Name is required</span>}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {emailTouched && !email && <span className="error">Email is required</span>}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {messageTouched && !message && <span className="error">Message is required</span>}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }