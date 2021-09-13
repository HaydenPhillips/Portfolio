import React, { useState } from 'react';
import { Fragment } from 'react';
import '../../../CSS/Pages/pages.css';

const ContactForm = () => {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
    if ((result.status = 'Message Sent')) {
      name.value = '';
      email.value = '';
      message.value = '';
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit} className='contact-form'>
        <h3 className='form-title'>Send me bits</h3>
        <input
          className='name'
          type='text'
          id='name'
          placeholder='Name'
          required
        />
        <input
          className='email'
          type='email'
          id='email'
          placeholder='Email'
          required
        />
        <textarea
          className='message'
          id='message'
          placeholder='Message'
          required
        />
        <button className='submit' type='submit'>
          {status}
        </button>
      </form>
    </Fragment>
  );
};

export default ContactForm;
