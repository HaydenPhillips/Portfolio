import React, { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 100}px, ${y / 40}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 80}px, ${y / 35}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 55}px, ${y / 35}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 45}px, ${y / 40}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 25}px, ${y / 20}px,0)`;
// const trans6 = (x, y) => `translate3d(${x / 15}px, ${y / 20}px,0)`;

function LayeredPhotoMouseAnimation() {
	const [props, set] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 300, friction: 100 },
	}));
	return (
		<Fragment>
			<div class='container'>
				<animated.div
					class='sky'
					style={{ transform: props.xy.interpolate(trans1) }}
					alt='sky'
				/>
				<animated.div
					class='roofs'
					style={{ transform: props.xy.interpolate(trans2) }}
					alt='roofs'
				/>
				<animated.div
					className='ferriswheel'
					style={{ transform: props.xy.interpolate(trans3) }}
					alt='ferriswheel'
				>
					{/* <div className='plus'>+</div> */}
				</animated.div>
				<animated.div
					className='bush'
					style={{ transform: props.xy.interpolate(trans4) }}
					alt='bush'
				/>

				<animated.div
					class='building'
					style={{ transform: props.xy.interpolate(trans5) }}
					alt='building'
				/>
			</div>
			<div
				className='full-screen-mouse-move'
				onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
			></div>
		</Fragment>
	);
}

export default LayeredPhotoMouseAnimation;
