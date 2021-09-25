import CardFull from './CardFull';
import Modal from '../../../Modal';
import React, { useState, useRef, Fragment } from 'react';
import { useSpring, animated } from '@react-spring/web';

const calc = (x, y, rect) => [
	-(y - rect.top - rect.height / 2) / 10,
	(x - rect.left - rect.width / 2) / 10,
	1.1,
];
const trans = (x, y, s) =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function PlayfulCard({ componentName, name, tags, color }) {
	const ref = useRef(null);

	const [xys, set] = useState([0, 0, 1]);

	const config = {
		mass: 1,
		tension: 280,
		friction: 100,
		clamp: false,
		precision: 0.01,
		velocity: 0,
		easing: (t) => t,
	};

	const onClose = () => {
		setIsOpen(false);
	};
	const [isOpen, setIsOpen] = useState(false);
	const props = useSpring({ xys, config });

	return (
		<Fragment>
			<div className='card-wrap'>
				<div className=' card-main' ref={ref}>
					<animated.div
						className='playful-card'
						style={{ transform: props.xys.to(trans), backgroundImage: color }}
						onMouseLeave={() => set([0, 0, 1])}
						onMouseMove={(e) => {
							const rect = ref.current.getBoundingClientRect();
							set(calc(e.clientX, e.clientY, rect));
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
				</div>
			</div>
			<Modal open={isOpen}>
				<CardFull componentName={componentName} onClose={onClose} />
			</Modal>
		</Fragment>
	);
}
