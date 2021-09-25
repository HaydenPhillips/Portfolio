import React, { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 40}px, ${y / 40}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 35 - 75}px, ${y / 35}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 35 - 5}px, ${y / 35 - 15}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 40 - 30}px, ${y / 40 - 18}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 25 - 15}px, ${y / 20 - 10}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 25 - 65}px, ${y / 20 - 0}px,0)`;

function HadesAnimation() {
	const [props, set] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 300, friction: 100 },
	}));
	return (
		<Fragment>
			<div className='container'>
				<animated.div
					className='head'
					style={{ transform: props.xy.interpolate(trans1) }}
					alt='head'
				/>
				<animated.div
					className='left-eye'
					style={{ transform: props.xy.interpolate(trans2) }}
					alt='left-eye'
				/>
				<animated.div
					className='left-eyeball'
					style={{ transform: props.xy.interpolate(trans6) }}
					alt='left-eyeball'
				>
					<div className='plus'>+</div>
				</animated.div>
				<animated.div
					className='right-eyeball'
					style={{ transform: props.xy.interpolate(trans5) }}
					alt='right-eyeball'
				/>

				<animated.div
					className='right-eye'
					style={{ transform: props.xy.interpolate(trans3) }}
					alt='right-eye'
				/>
				<animated.div
					className='eyebrow'
					style={{ transform: props.xy.interpolate(trans4) }}
					alt='eyebrow'
				/>
			</div>
			<div
				className='full-screen-mouse-move'
				onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
			></div>
		</Fragment>
	);
}

export default HadesAnimation;
