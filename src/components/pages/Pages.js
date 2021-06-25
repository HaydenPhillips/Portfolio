import React from 'react';
import { Fragment } from 'react';
import Projects from '../Projects/Projects';
import LandingPage from '../pages/landingPage/LandingPage';
import ContactPage from '../pages/contactPage/ContactPage';
import Development from '../pages/servicesPage/Development';
import Asteroid, {
  Asteroid1,
  Asteroid2,
  Asteroid3,
} from '../pages/servicesPage/Asteroid';
// import Asteroid2 from '../pages/servicesPage/Asteroid';
// import Asteroid3 from '../pages/servicesPage/Asteroid';
import Design from '../pages/servicesPage/Design';
import Strategy from '../pages/servicesPage/Strategy';
import '../../CSS/Pages/pages.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import stars from '../../assets/images/LayeredScene/moon/stars.svg';
// import satellite from '../../assets/images/LayeredScene/moon/satellite.svg';
// import { useSpring, animated } from 'react-spring';
// import { Slug } from '../Animations';
// import { Dia } from '../Animations';
// import ServicesPage from '../pages/servicesPage/ServicesPage';
import { useInView } from 'react-intersection-observer';

// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
// const trans2 = (x, y) => `translate3d(${x / 200}px, ${y / 200}px,0)`;

const Pages = () => {
  let parallax;

  const [ref, inView] = useInView({
    threshold: 0,
  });
  // const [props, set] = useSpring(() => ({
  //   xy: [0, 0],
  //   config: { mass: 10, tension: 300, friction: 100 },
  // }));

  return (
    <Fragment>
      {/* <ServicesPage></ServicesPage> */}
      <Parallax
        pages={4}
        ref={(ref) => (parallax = ref)}
        style={{
          display: 'grid',
          margin: 'auto',
          backgroundRepeat: 'repeat',
          backgroundColor: '#161b3a',
          width: '100%',
          height: '100%',
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={-0.2}
          style={{
            backgroundImage: `url(${stars})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '120%',
            opacity: '0.5',
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            backgroundImage: `url(${stars})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '200%',
          }}
        />
        <ParallaxLayer offset={0} speed={1}>
          <LandingPage></LandingPage>
        </ParallaxLayer>

        <div className='services-page'>
          <div inView={inView}>
            {/* <Development /> */}
            <ParallaxLayer offset={1.2} speed={1}>
              <div ref={ref}>
                <Design />
              </div>
            </ParallaxLayer>
            {inView ? <Asteroid1 /> : console.log(inView)}
            {inView ? <Asteroid2 /> : console.log(inView)}
            {inView ? <Asteroid3 /> : console.log(inView)}
          </div>
          <ParallaxLayer offset={1.2} speed={1.2}>
            <Strategy />
          </ParallaxLayer>
        </div>

        <ParallaxLayer offset={2} speed={0.3}>
          <div className='projects-page'>
            <Projects></Projects>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1}>
          <ContactPage></ContactPage>
        </ParallaxLayer>
      </Parallax>
      {/* <div className='test-astroid'> */}

      {/* </div> */}
    </Fragment>
  );
};

export default Pages;
