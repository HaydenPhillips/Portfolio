import React, { useState } from 'react';
import { Fragment, useRef } from 'react';
import Projects from '../Projects/Projects';
import LandingPage from '../pages/landingPage/LandingPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import ContactPage from '../pages/contactPage/ContactPage';
import ServicesPage from '../pages/servicesPage/ServicesPage';
import '../../CSS/Pages/pages.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import stars from '../../assets/images/LayeredScene/moon/stars.svg';
import Navbar from '../Navbar';
import { InView } from 'react-intersection-observer';

const Pages = () => {
	const [isActive, setIsActive] = useState('');
	const pageRef = useRef(null);

	function handleClick(section) {
		if (section === 'about') {
			pageRef.current.scrollTo(1);
		} else if (section === 'services') {
			pageRef.current.scrollTo(3);
		} else if (section === 'projects') {
			pageRef.current.scrollTo(5.3);
		} else if (section === 'contact') {
			pageRef.current.scrollTo(7);
		}
	}

	return (
		<Fragment>
			<Navbar handleClick={handleClick} isActive={isActive} />
			<Parallax
				pages={8}
				ref={pageRef}
				style={{
					display: 'grid',
					margin: 'auto',
					backgroundRepeat: 'repeat',
					backgroundColor: '#161b3a',
					width: '100%',
					height: '100%',
				}}
			>
				<ParallaxLayer
					offset={0}
					speed={-0.2}
					style={{
						backgroundImage: `url(${stars})`,
						backgroundRepeat: 'repeat',
						backgroundSize: 'cover',
						width: 'unset',
						height: '120%',
						opacity: '0.5',
						left: '-500px',
					}}
					id='stars-120'
				/>
				<ParallaxLayer
					offset={0}
					speed={0.2}
					style={{
						backgroundImage: `url(${stars})`,
						backgroundRepeat: 'repeat',
						backgroundSize: 'cover',
						width: 'unset',
						height: '200%',
						left: '-500px',
					}}
					id='stars-200'
				/>
				<div className='page-grid'>
					<div id='landing'>
						<ParallaxLayer offset={0} speed={1}>
							<LandingPage></LandingPage>
						</ParallaxLayer>
					</div>

					<ParallaxLayer offset={1} speed={0.6}>
						<InView
							onChange={(inView) => inView && setIsActive('about')}
							id='about'
						>
							<AboutPage></AboutPage>
						</InView>
					</ParallaxLayer>

					<ParallaxLayer offset={3} speed={0.6}>
						<InView
							onChange={(inView) => inView && setIsActive('services')}
							id='services'
						>
							<ServicesPage />
						</InView>
					</ParallaxLayer>

					<ParallaxLayer offset={5.5} speed={0.6} className='modal-bg-actions'>
						<InView
							onChange={(inView) => inView && setIsActive('projects')}
							id='projects'
						>
							<div className='projects-page'>
								<Projects></Projects>
							</div>
						</InView>
					</ParallaxLayer>

					<ParallaxLayer offset={7} speed={1}>
						<InView
							onChange={(inView) => inView && setIsActive('contact')}
							id='contact'
						>
							<ContactPage></ContactPage>
						</InView>
					</ParallaxLayer>
				</div>
			</Parallax>
		</Fragment>
	);
};

export default Pages;
