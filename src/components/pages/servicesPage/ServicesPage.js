import React, { Fragment } from 'react';
import '../../../CSS/Pages/pages.css';
// import Dev from '../servicesPage/Development';
// import Des from '../servicesPage/Design';
// import Strategy from '../servicesPage/Strategy';
// import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { useInView } from 'react-intersection-observer';
import { Asteroid1, Asteroid2, Asteroid3 } from './Asteroid';

const ServicesPage = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	return (
		<Fragment>
			<section className='services-page' ref={ref}>
				<div className='services-wrap'>
					<h1>services</h1>
					<div className='service' id='development'>
						<h3 className='title'>development</h3>
						<div className='details'>
							<p>
								Making use of my experience with modern software tools, I build
								fullstack web applications. I aim to produce highly performant
								and secure solutions, without hindering code readability or
								maintainability.
							</p>
							<h5 className='subtitle'>languages</h5>
							<p>
								JavaScript: Vanilla, React, React-Spring, Node, Express, JQuery,
								Grunt, Material-UI, GSAP, p5, Processing, Flickity, Phaser,
								Three.js, Video.js <br />
								CSS: SASS (scss), Materialize, Bootstrap, pure
							</p>
							<h5 className='subtitle'>web app stacks</h5>
							<p>
								Static Site Generator (SSG): Gatsby, React, GraphQL with Strapi
								headless CMS <br />
								Single Page Application (SPA): Mongodb, Express, React, and Node
								(MERN stack).
							</p>
							<h5 className='subtitle'>tools</h5>
							<p>
								VisualStudio-code editor
								<br />
								GitHub and GitLab version control
								<br />
								Chrome DevTools <br />
								JavaScript ES6 and above
							</p>
						</div>
					</div>
					<div className='service' id='design'>
						<h3 className='title'>design</h3>
						<div className='details'>
							<p>
								Purposeful, refined and user focused. Visual interactions with
								intention.
							</p>
							<h5 className='subtitle'>wireframing</h5>
							<p>
								The art of wireframing is not in the details. Rather, wireframes
								serve as the foundation of a website or app’s visual design. The
								main focus is the prioritisation of content, arranging elements
								on a page in a manner that’s clear to the target audience. I
								have experience with both Adobe Xd and Figma.
							</p>
							<h5 className='subtitle'>Prototyping</h5>
							<p>
								A prototype should represent the necessary parts of an app as
								close to the final product as possible. From here you can
								demonstrate and validate, with real users, using real devices,
								the complete functionality of the design by adding events,
								animations, variables and advanced interactions. Thankfully I
								know modern css like the back of my hand, so I am able to
								swiftly create complex interactions.
							</p>
						</div>
					</div>
				</div>

				{inView && <Asteroid1 />}
				{inView && <Asteroid2 />}
				{inView && <Asteroid3 />}
			</section>
		</Fragment>
	);
};

export default ServicesPage;

{
	/* <ParallaxLayer offset={0.7} speed={1.2}>
					<Dev />
				</ParallaxLayer>
				<ParallaxLayer offset={0.6} speed={1}>
					<Des />
				</ParallaxLayer>
				<ParallaxLayer offset={0.5} speed={0.8}>
					<Strategy />
				</ParallaxLayer> */
}
