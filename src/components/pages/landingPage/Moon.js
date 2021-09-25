import React, { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
// const trans1 = (x, y) => `translate3d(${x / 200}px, ${y / 200}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 80}px, ${y / 35}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 55}px, ${y / 35}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 40}px, ${y / 40}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 20}px, ${y / 20}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 10}px, ${y / 10}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 8}px, ${y / 8}px,0)`;
// const trans8 = (x, y) => `translate3d(${x / 5}px, ${y / 7}px,0)`;

function Moon() {
	const [props, set] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 300, friction: 100 },
	}));
	return (
		<Fragment>
			<div
				className='layers'
				onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
			>
				<animated.div
					className='stars-2'
					style={{ transform: props.xy.interpolate(trans2) }}
					alt='stars'
				/>
				<div className='moon-and-light'>
					<animated.div
						className='moonlight m-1'
						style={{ transform: props.xy.interpolate(trans5) }}
						alt='moonlight 1'
					/>
					<animated.div
						className='moonlight m-2'
						style={{ transform: props.xy.interpolate(trans5) }}
						alt='moonlight 2'
					/>
					<animated.div
						className='moonlight m-3'
						style={{ transform: props.xy.interpolate(trans5) }}
						alt='moonlight 3'
					/>
					<animated.div
						className='moonlight m-4'
						style={{ transform: props.xy.interpolate(trans5) }}
						alt='moonlight 4'
					/>
					<animated.div
						className='moon'
						style={{ transform: props.xy.interpolate(trans5) }}
						alt='moon'
					/>
				</div>

				<animated.div
					className='cloud c-1'
					style={{ transform: props.xy.interpolate(trans4) }}
					alt='cloud-1'
				/>
				<animated.div
					className='cloud c-2'
					style={{ transform: props.xy.interpolate(trans3) }}
					alt='cloud-2'
				/>

				<animated.div
					className='cloud c-3'
					style={{ transform: props.xy.interpolate(trans6) }}
					alt='cloud-3'
				></animated.div>
				<animated.div
					className='cloud c-4'
					style={{ transform: props.xy.interpolate(trans7) }}
					alt='cloud-4'
				/>
			</div>
		</Fragment>
	);
}

export default Moon;
