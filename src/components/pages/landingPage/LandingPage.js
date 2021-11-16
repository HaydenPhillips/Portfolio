import React from 'react'
import Moon from './Moon'
import { Slug } from '../../Animations'

const LandingPage = () => {
	return (
		<section className='landing-page'>
			<div className='moon-scene'>
				<Moon />
			</div>
			<div className='hero'>
				<Slug delay={200}>
					<h1>hello</h1>
				</Slug>
				<Slug delay={1000}>
					<h3 className='hero-title'>welcome to my digital space.</h3>
				</Slug>
				<Slug delay={1200}>
					<p className='description'>
						My name is hayden. I'm a web developer with a background in software
						engineering, design, and entrepreneurship.
					</p>
				</Slug>
			</div>
		</section>
	)
}

export default LandingPage
