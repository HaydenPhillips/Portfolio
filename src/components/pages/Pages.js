import React from 'react';
import { Fragment } from 'react';
import Projects from '../Projects/Projects';
import LandingPage from '../pages/landingPage/LandingPage';
import ContactPage from '../pages/contactPage/ContactPage';
import '../../CSS/Pages/pages.css';

const Pages = () => {
  return (
    <Fragment>
      <LandingPage></LandingPage>
      <Projects></Projects>
      <ContactPage></ContactPage>
    </Fragment>
  );
};

export default Pages;
