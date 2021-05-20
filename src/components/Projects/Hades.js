import React from 'react';
// import ReactDOM from "react-dom";
import { useSpring, animated } from 'react-spring';
import '../../CSS/Hades/hades.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 40}px, ${y / 40}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 35 - 75}px, ${y / 35}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 35 - 5}px, ${y / 35 - 15}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 40 - 30}px, ${y / 40 - 18}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 25 - 15}px, ${y / 20 - 10}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 25 - 65}px, ${y / 20 - 0}px,0)`;

// const Hades = () => {
//   return (
//     <Fragment>
//       <div className='hades'></div>
//     </Fragment>
//   );
// };

function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 300, friction: 100 },
  }));
  return (
    <div
      class='container'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        class='head'
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        class='left-eye'
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      {/* <animated.div className='left-eyeball' /> */}
      <animated.div
        className='left-eyeball rotate'
        style={{ transform: props.xy.interpolate(trans6) }}
      >
        +
      </animated.div>
      <animated.div
        className='right-eyeball'
        style={{ transform: props.xy.interpolate(trans5) }}
      />

      <animated.div
        class='right-eye'
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        class='eyebrow'
        style={{ transform: props.xy.interpolate(trans4) }}
      />
    </div>
  );
}

export default Card;
