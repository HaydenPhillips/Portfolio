import React from 'react';
import { useSpring, animated } from 'react-spring';
import asteroid from '../../../assets/icons/asteroid.svg';
import * as easings from 'd3-ease';

let winW = window.innerWidth;
let winH = window.innerHeight;

export const Asteroid1 = () => {
  const props = useSpring({
    to: {
      transform: `translate3d(-300px, 800px, 0) scale(1)`,
    },
    from: {
      transform: `translate3d(${winW * 1.7}px, ${winH * 1.8}px,0) scale(3)`,
    },
    config: {
      mass: 40,
      tension: 70,
      friction: 200,
      duration: 8000,
      easing: easings.easeQuadOut,
    },
  });

  return (
    <animated.div style={props}>
      <img src={asteroid} style={{ width: '200px', height: '200px' }} />
    </animated.div>
  );
};

export const Asteroid2 = () => {
  const props = useSpring({
    to: {
      transform: `translate3d(-400px, 200px, 0) scale(0.8)`,
    },
    from: {
      transform: `translate3d(${winW * 1.3}px, ${winH * 1.6}px,0) scale(2)`,
    },
    config: {
      mass: 40,
      tension: 70,
      friction: 250,
      duration: 10000,
      easing: easings.easeQuadOut,
    },
  });

  return (
    <animated.div style={props}>
      <img src={asteroid} style={{ width: '200px', height: '200px' }} />
    </animated.div>
  );
};

export const Asteroid3 = () => {
  const props = useSpring({
    to: {
      transform: `translate3d(-300px, 400px, 0) scale(0.3)`,
    },
    from: {
      transform: `translate3d(${winW * 1.5}px, ${winH * 1.8}px,0) scale(1.5)`,
    },
    config: {
      mass: 40,
      tension: 70,
      friction: 200,
      duration: 10500,
      easing: easings.easeQuadOut,
    },
  });

  return (
    <animated.div style={props}>
      <img src={asteroid} style={{ width: '200px', height: '200px' }} />
    </animated.div>
  );
};
