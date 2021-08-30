import React from 'react';
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

const Pages = () => {
	const ref = useRef(null);

	function handleClick(section) {
		console.log('section: ', section);
		if (section === 'about') {
			ref.current.scrollTo(1);
		} else if (section === 'services') {
			ref.current.scrollTo(2);
		} else if (section === 'projects') {
			ref.current.scrollTo(3);
		} else if (section === 'contact') {
			ref.current.scrollTo(4);
		}
	}

	return (
		<Fragment>
			<Navbar handleClick={handleClick} />
			<Parallax
				pages={5}
				ref={ref}
				style={{
					display: 'grid',
					margin: 'auto',
					backgroundRepeat: 'repeat',
					backgroundColor: '#161b3a',
					width: '100%',
					height: '100%',
					minHeight: '1100px',
				}}
			>
				<ParallaxLayer
					offset={0}
					speed={-0.2}
					style={{
						backgroundImage: `url(${stars})`,
						backgroundRepeat: 'repeat',
						backgroundSize: 'cover',
						width: '100%',
						height: '120%',
						opacity: '0.5',
					}}
				/>
				<ParallaxLayer
					offset={0}
					speed={0.2}
					style={{
						backgroundImage: `url(${stars})`,
						backgroundRepeat: 'repeat',
						backgroundSize: 'cover',
						width: '100%',
						height: '200%',
					}}
				/>
				<div className='page-grid'>
					<div id='landing'>
						<ParallaxLayer offset={0} speed={1}>
							<LandingPage></LandingPage>
						</ParallaxLayer>
					</div>

					<div id='about'>
						<ParallaxLayer offset={1} speed={0.6} style={{ height: '120vh' }}>
							<AboutPage></AboutPage>
						</ParallaxLayer>
					</div>

					<div id='services'>
						<ParallaxLayer offset={2} speed={0.6}>
							<ServicesPage />
						</ParallaxLayer>
					</div>

					<div id='projects'>
						<ParallaxLayer offset={3} speed={0.6}>
							<div className='projects-page'>
								<Projects></Projects>
							</div>
						</ParallaxLayer>
					</div>

					<div id='contact'>
						<ParallaxLayer offset={4} speed={1}>
							<ContactPage></ContactPage>
						</ParallaxLayer>
					</div>
				</div>
			</Parallax>
		</Fragment>
	);
};

export default Pages;
