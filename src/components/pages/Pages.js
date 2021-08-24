import React from 'react';
import { Fragment } from 'react';
import Projects from '../Projects/Projects';
import LandingPage from '../pages/landingPage/LandingPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import ContactPage from '../pages/contactPage/ContactPage';
import ServicesPage from '../pages/servicesPage/ServicesPage';
import '../../CSS/Pages/pages.css';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import stars from '../../assets/images/LayeredScene/moon/stars.svg';
// import { useInView } from 'react-intersection-observer';

const Pages = () => {
	let parallax;

	// const [ref, inView] = useInView({
	//   threshold: 0,
	// });

	return (
		<Fragment>
			<Parallax
				pages={4}
				ref={(ref) => (parallax = ref)}
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
				<ParallaxLayer offset={0} speed={1}>
					<LandingPage></LandingPage>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0.5}>
					<AboutPage></AboutPage>
				</ParallaxLayer>

				{/* <div className='in-view' inView={inView}>
          <div className='ref' ref={ref}> */}
				<ParallaxLayer offset={2.3} speed={0}>
					<ServicesPage />
				</ParallaxLayer>
				{/* </div>
        </div> */}

				<ParallaxLayer offset={3} speed={0.3}>
					<div className='projects-page'>
						<Projects></Projects>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={4} speed={1}>
					<ContactPage></ContactPage>
				</ParallaxLayer>
			</Parallax>
		</Fragment>
	);
};

export default Pages;
