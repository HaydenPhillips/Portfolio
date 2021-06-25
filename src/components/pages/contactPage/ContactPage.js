import React, { Fragment } from 'react';
import HadesAnimation from '../../Projects/HadesAnimation';
import '../../../CSS/Pages/pages.css';

const ContactPage = () => {
  return (
    <Fragment>
      <section className='contact-page'>
        <div className='hades-wrap'>
          <HadesAnimation></HadesAnimation>
        </div>
        <div className='contact-form'>
          {/* <h2 className='form-title'>i'm listening</h2> */}
          <input className='name' type='text' placeholder='Name'></input>
          <input className='email' type='text' placeholder='Email'></input>
          <textarea
            className='message'
            type='text'
            placeholder='Message'
            rows='3'
          ></textarea>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactPage;
