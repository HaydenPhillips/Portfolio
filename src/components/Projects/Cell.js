import '../../CSS/Projects/projects.css';
import React, { Fragment, useState } from 'react';
import CardFull from './CardFull';
import Modal from '../Modal';
import { useSpring, animated } from 'react-spring';

export default function Cell({ componentName, name, tags, color }) {
  const calc = (x, y) => {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const s = winW > 2000 || winH > 1200 ? 20 : 10;
    if (x > winW * 0.66) {
      return [-(y - winH / 2) / s, (x - winW * 0.33 - winW / 2) / s, 1];
    } else if (x < winW * 0.33) {
      return [-(y - winH / 2) / s, (x + winW * 0.33 - winW / 2) / s, 1];
    } else {
      return [-(y - winH / 2) / s, (x - winW / 2) / s, 1];
    }
  };
  const trans = (x, y, s) =>
    `perspective(5000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [isOpen, setIsOpen] = useState(false);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 20, tension: 300, friction: 200, clamp: true },
  }));

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <animated.div
        className='cell'
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
          backgroundImage: color,
        }}
        onClick={() => setIsOpen(true)}
      >
        <div className='cell-content'>
          <div className='name-hash'>
            <div className='cell-name'>{name}</div>
            <div className='cell-tags'>{tags}</div>
          </div>
        </div>
      </animated.div>

      <Modal open={isOpen}>
        <CardFull componentName={componentName} onClose={onClose} />
      </Modal>
    </Fragment>
  );
}
