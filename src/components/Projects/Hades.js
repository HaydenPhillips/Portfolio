import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import '../../CSS/Hades/hades.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 40}px, ${y / 40}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 35 - 75}px, ${y / 35}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 35 - 5}px, ${y / 35 - 15}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 40 - 30}px, ${y / 40 - 18}px,0)`;

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
        class='card1'
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        class='card2'
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        class='card3'
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        class='card4'
        style={{ transform: props.xy.interpolate(trans4) }}
      />
    </div>
  );
}

export default Card;
