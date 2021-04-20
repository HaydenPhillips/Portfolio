import '../CSS/Card/card-full.css';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Roy from './Cards/Roy';
import Zap from './Cards/Zap';
import Action from './Cards/Action';
import Education from './Cards/Education';
import About from './Cards/About';
import Planter from './Cards/Planter';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 50,
  1,
];

const trans = (x, y, s) =>
  `perspective(10000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const CardFull = ({ componentName, onClose }) => {
  const component = (cn) => {
    switch (cn) {
      case 'Roy':
        return <Roy onClose={onClose} />;
      case 'About':
        return <About onClose={onClose} />;
      case 'Zap':
        return <Zap onClose={onClose} />;
      case 'Education':
        return <Education onClose={onClose} />;
      case 'Action':
        return <Action onClose={onClose} />;
      case 'Planter':
        return <Planter onClose={onClose} />;
      default:
        return null;
    }
  };

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 50, friction: 60, clamp: true },
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {component(componentName)}
    </animated.div>
  );
};

export default CardFull;
