import React, { Fragment } from 'react';
import { Transition, Trail, animated } from 'react-spring/renderprops';
import { config } from 'react-spring';
import { useSpring } from 'react-spring';
import { useState } from 'react';

// import '../../../CSS/Pages/pages.css';

export class Slug extends React.PureComponent {
  render() {
    const {
      children,
      from = { opacity: 0, transform: 'translate3d(0, 100px, 0)' },
      to = { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
      ...rest
    } = this.props;
    const result = React.Children.map(children, (child) => (styles) => {
      const Component = animated[child.type] || animated(child.type);
      const props = {
        ...child.props,
        style: {
          willChange: 'opacity, transform',
          ...child.props.style,
          ...styles,
        },
      };
      return <Component {...props} />;
    });
    return (
      <Trail
        native
        {...rest}
        items={result}
        keys={result.map((_, i) => i)}
        from={from}
        to={to}
        children={(child) => child}
      />
    );
  }
}

export class Diagonal extends React.PureComponent {
  render() {
    const {
      children,
      from = { transform: 'translate3d(200px, 500px, 0)' },
      to = { transform: 'translate3d(0, 0px, 0)' },
      ...rest
    } = this.props;
    const result = React.Children.map(children, (child) => (styles) => {
      const Component = animated[child.type] || animated(child.type);
      const props = {
        ...child.props,
        style: {
          willChange: 'opacity, transform',
          ...child.props.style,
          ...styles,
        },
      };
      return <Component {...props} />;
    });
    return (
      <Trail
        native
        {...rest}
        items={result}
        keys={result.map((_, i) => i)}
        from={from}
        to={to}
        children={(child) => child}
      />
    );
  }
}

// const Dia = () => {

// }

// export function Dia() {
//   const [flip, set] = useState(false);
//   const props = useSpring({
//     from: { transform: 'translate3d(200px, 500px, 0)' },
//     to: { transform: 'translate3d(0, 0px, 0)' },
//     // reset: true,
//     // reverse: flip,
//     // delay: 200,
//     config: config.molasses,
//     onRest: () => set(!flip),
//   });

//   return <animated.h1 style={props}>children</animated.h1>;
// }

export function Dia({ children }) {
  const props = useSpring({
    to: { transform: 'translate3d(0,0,0)' },
    from: { transform: 'translate3d(200px, 500px, 0)' },
    config: { friction: 100 },
  });
  return <animated.div style={props}>{children}</animated.div>;
}

export class Fade extends React.PureComponent {
  render() {
    const {
      children,
      show,
      from = { opacity: 0 },
      enter = { opacity: 1 },
      leave = { opacity: 0 },
      ...rest
    } = this.props;

    const { type, props } = children;
    const Component = animated[type] || animated(type);
    const result = (styles) => {
      const newProps = {
        ...props,
        style: {
          willChange: 'opacity, transform',
          ...props.style,
          ...styles,
        },
      };
      return <Component {...newProps} />;
    };

    return (
      <Transition
        native
        items={show}
        {...rest}
        from={from}
        enter={enter}
        leave={leave}
        children={(show) => show && result}
      />
    );
  }
}

// import { Fragment } from 'react';
// import { useSpring, animated } from 'react-spring';

// export default function Astroid() {
//   const props = useSpring({
//     to: { transform: `translate3d(-200px, -200px, 0),` },
//     from: {
//       transform: `translate3d(${window.innerWidth}px, ${window.innerHeight}px,0)`,
//     },
//     config: {
//       mass: 60,
//       tension: 100,
//       friction: 300,
//       velocity: -5,
//     },
//   });

//   return (
//     <Fragment>
//       <animated.div style={props}>
//         <img src={asteroid} style={{width: '300px', height: '300px'}} />
//       </animated.div>
//     </Fragment>
//   );
// }

// export default Astroid;

export class FadeUp extends React.PureComponent {
  render() {
    const {
      children,
      show,
      from = { opacity: 0, transform: 'translate3d(0, 200px,0)' },
      enter = { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
      leave = { opacity: 0, transform: 'translate3d(0, -100px, 0)' },
      ...rest
    } = this.props;

    const { type, props } = children;
    const Component = animated[type] || animated(type);
    const result = (styles) => {
      const newProps = {
        ...props,
        style: { willChange: 'opacity, transform', ...props.style, ...styles },
      };
      return <Component {...newProps} />;
    };

    return (
      <Transition
        native
        items={show}
        {...rest}
        from={from}
        enter={enter}
        leave={leave}
        children={(show) => show && result}
      />
    );
  }
}
