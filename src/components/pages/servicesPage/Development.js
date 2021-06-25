import React, { Fragment } from 'react';
import '../../../CSS/Pages/pages.css';
import { Diagonal } from '../../Animations';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';

let winW = window.innerWidth;
let winH = window.innerHeight;

const Development = () => {
  return (
    <Fragment>
      <animated.div style={props}>
        <div className='service'>
          <h2 className='service-title'>Delevopment</h2>
          <div className='service-decription'>
            I create bespoke web-apps that are fast, secure, responsive, and
            built using best practices and modern tech stacks.
          </div>
        </div>
      </animated.div>
    </Fragment>
  );
};

export default Development;

// const props = useSpring({
//   to: [
//     { transform: `translate3d(${winW / 2}, ${winH / 2},0)` },
//     // { delay: `500` },
//     // { transform: `translate3d(${winW / 2.1}, ${winH / 1.9},0)` },
//     // { transform: `translate3d(${winW / 2.1}, ${winH / 2.1},0)` },
//     // { transform: `translate3d(${winW / 2.1}, ${winH / 1.9},0)` },
//     { transform: `translate3d(-200px, -200px,0),` },
//   ],
//   from: {
//     transform: `translate3d(${window.innerWidth}px, ${window.innerHeight}px,0)`,
//   },
//   config: {
//     mass: 30,
//     tension: 300,
//     friction: 100,
//     easing: easings.easeExpInOut,
//     duration: 3000,
//   },
// });
