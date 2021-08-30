import React, { Fragment } from 'react';
// import LayeredPhotoMouseAnimation from './LayeredPhotoMouseAnimation';
import WaterAnimation from '../../WaterAnimation';
import Moon from './Moon';
import { Slug } from '../../Animations';

const LandingPage = () => {
	return (
		<Fragment>
			<section className='landing-page'>
				<div className='moon-scene'>
					<Moon />
				</div>
				<div className='hero'>
					<div className='water-svg'>
						<WaterAnimation />
					</div>
					<Slug delay={1400}>
						<h3 className='hero-title'>
							welcome to my digital space, my name is hayden
						</h3>
						<p className='description'>
							I'm a fullstack web developer, with a background in software
							engineering, design, and entrepreneurship.
						</p>
					</Slug>
				</div>
			</section>
		</Fragment>
	);
};

export default LandingPage;
