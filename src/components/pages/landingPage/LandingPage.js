import React, { Fragment } from 'react';
import LayeredPhotoMouseAnimation from './LayeredPhotoMouseAnimation';
import WaterAnimation from '../../WaterAnimation';
import Moon from './Moon';
import { Slug } from '../../Animations';

const LandingPage = () => {
  return (
    <Fragment>
      <section className='landing-page'>
        <div className='moon-scene'>
          <Moon />
        </div>
        <div className='hero'>
          <div className='water-svg'>
            <WaterAnimation />
          </div>
          <Slug delay={1400}>
            <h3 className='hero-title'>
              Have an idea you want launched into digital space?
            </h3>
            <p className='description'>
              I'm a software developer building exceptional screen based
              experiences, specialising in fullstack web applications.
            </p>
            {/* <h4 className='hero-title'>Hayden Phillips</h4> */}
          </Slug>
        </div>
      </section>
    </Fragment>
  );
};

export default LandingPage;
