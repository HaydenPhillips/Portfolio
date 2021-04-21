import React, { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';

const Fade = (props) => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <Fragment>
      <animated.div style={fade}>
        <p>{props.tagline}</p>
      </animated.div>
    </Fragment>
  );
};

export default Fade;
