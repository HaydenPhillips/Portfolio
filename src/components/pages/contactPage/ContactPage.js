import React, { Fragment } from 'react';
import ContactForm from './ContactForm';
// import HadesAnimation from '../../Projects/HadesAnimation';
import '../../../CSS/Pages/pages.css';
import earth from '../../../assets/icons/earth.svg';
import satellite from '../../../assets/images/LayeredScene/moon/satellite.svg';

const ContactPage = () => {
  return (
    <Fragment>
      <section className='contact-page'>
        {/* <div className='hades-wrap'>
          <HadesAnimation></HadesAnimation>
        </div> */}

        <ContactForm />

        <div className='satellite'>
          <img src={satellite} alt='satellite' />
        </div>
        <div className='earth' alt='earth'>
          <img src={earth} alt='earth' />
        </div>
      </section>
    </Fragment>
  );
};

export default ContactPage;
