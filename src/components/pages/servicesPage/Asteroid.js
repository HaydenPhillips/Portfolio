import React from 'react'
import { useSpring, animated } from 'react-spring'
import asteroid from '../../../assets/icons/asteroid.svg'
// import * as easings from 'd3-ease';

let winW = window.innerWidth
let winH = window.innerHeight

export const Asteroid1 = () => {
	const props = useSpring({
		to: {
			transform: `translate3d(-${winW}px, 1000px, 0) scale(1)`
		},
		from: {
			transform: `translate3d(${winW * 1}px, -${winH}px,0) scale(3)`
		},
		config: {
			mass: 40,
			tension: 80,
			friction: 200,
			duration: 7000
			// easing: easings.easeQuadOut,
		}
	})

	return (
		<animated.div style={props}>
			<img
				src={asteroid}
				alt='asteroid'
				style={{
					width: '200px',
					height: '200px',
					position: 'absolute',
					transform: 'rotate(300deg)'
				}}
			/>
		</animated.div>
	)
}

export const Asteroid2 = () => {
	const props = useSpring({
		to: {
			transform: `translate3d(-${winW}px, 1000px, 0) scale(0.8)`
		},
		from: {
			transform: `translate3d(${winW}px, -${winH * 0.6}px,0) scale(2)`
		},
		config: {
			mass: 40,
			tension: 70,
			friction: 200,
			duration: 8100
			// easing: easings.easeQuadOut,
		}
	})

	return (
		<animated.div style={props}>
			<img
				src={asteroid}
				alt='asteroid'
				style={{
					width: '200px',
					height: '200px',
					position: 'absolute',
					transform: 'rotate(300deg)'
				}}
			/>
		</animated.div>
	)
}

export const Asteroid3 = () => {
	const props = useSpring({
		to: {
			transform: `translate3d(-${winW}px, 1000px, 0) scale(0.3)`
		},
		from: {
			transform: `translate3d(${winW}px, -${winH}px,0) scale(1.5)`
		},
		config: {
			mass: 40,
			tension: 50,
			friction: 220,
			duration: 9000
			// easing: easings.easeQuadOut,
		}
	})

	return (
		<animated.div style={props}>
			<img
				src={asteroid}
				alt='asteroid'
				style={{
					width: '200px',
					height: '200px',
					transform: 'rotate(300deg)'
				}}
			/>
		</animated.div>
	)
}
