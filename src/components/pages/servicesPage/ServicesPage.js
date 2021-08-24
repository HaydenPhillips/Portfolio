import React, { Fragment } from 'react';
import '../../../CSS/Pages/pages.css';
import Dev from '../servicesPage/Development';
import Des from '../servicesPage/Design';
import Strategy from '../servicesPage/Strategy';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { useInView } from 'react-intersection-observer';
import { Asteroid1, Asteroid2, Asteroid3 } from './Asteroid';

const ServicesPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  let isInMotion = false;
  return (
    <Fragment>
      <section className='services-page' ref={ref}>
        <ParallaxLayer offset={0.7} speed={1.2}>
          <Dev />
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={1}>
          <Des />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.8}>
          <Strategy />
        </ParallaxLayer>

        {inView ? <Asteroid1 /> : console.log(inView)}
        {inView ? <Asteroid2 /> : console.log(inView)}
        {inView ? <Asteroid3 /> : console.log(inView)}
      </section>
    </Fragment>
  );
};

export default ServicesPage;
