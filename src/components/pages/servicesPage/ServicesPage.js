import React, { Fragment } from 'react'
import { useInView } from 'react-intersection-observer'
import { Asteroid1, Asteroid2, Asteroid3 } from './Asteroid'

const ServicesPage = () => {
	const [ref, inView] = useInView({
		threshold: 0,
		triggerOnce: true
	})

	return (
		<Fragment>
			<section className='services-page'>
				<div className='page-wrap'>
					<h1>Services</h1>
					<div className='service' id='development'>
						<h3 className='title'>development</h3>
						<div className='details'>
							<p>
								I aim to produce highly performant and secure software solutions
								with an emphasis on code readability and maintainability. I have
								been programming for five years, three of which have been in the web
								space, both front-end and back-end. Making use of my experience with
								modern software tools, I am able to design and develop full stack
								web applications, from conception to launch.
							</p>
							<h1 className='subtitle'>programming tools & language</h1>
							<div className='detail-item'>
								<h5 className='sub-subtitle'>JavaScript & React</h5>
								<p>
									The majority of the code I write is in JavaScript (ES6+) using
									the React library, hooks in particular.
								</p>
							</div>
							<div className='detail-item'>
								<h5 className='sub-subtitle'>CSS</h5>
								<p>
									I style components using SCSS, a CSS pre-processor, that reduces
									code repetition, and promotes cleaner, more maintainable code.
								</p>
							</div>
							<div className='detail-item'>
								<h5 className='sub-subtitle'>Java</h5>
								<p>
									My foundations of programming started with Java. Predominantly
									use throughout university.
								</p>
							</div>
							<div className='detail-item'>
								<h5 className='sub-subtitle'>jQuery</h5>
								<p>
									Working with the DOM directly means it's easy to use and
									reasonable effective for basic websites, however, I prefer to
									use tools that utilise state management in a virtual DOM in most
									cases.
								</p>
							</div>
							<div className='detail-item'>
								<h5 className='sub-subtitle'>Python</h5>
								<p>
									Implemented four machine learning programs, a basic data file
									reader, and small command line games.
								</p>
							</div>
							<div className='detail-item'>
								<h5 className='sub-subtitle'>Web animation</h5>
								<p>
									Experience with React-Spring and Gsap. Exposure to threeJS and
									Phaser.
								</p>
							</div>
							<div className='detail-item'>
								<h5 className='sub-subtitle'>General</h5>
								<p>
									Well versed in git version control, VisualStudio-code IDE,
									Chrome DevTools, bash, cmd
								</p>
							</div>

							<h1 className='subtitle' ref={ref}>
								application stacks
							</h1>
							<div className='detail-item'>
								<h5 className='sub-subtitle'>
									Jamstack / Modern static site generator
								</h5>
								<p>Gatsby, React, GraphQL with Strapi headless CMS</p>
							</div>
							<div className='detail-item'>
								<h5 className='sub-subtitle'>Single Page Application</h5>
								<p>Mongodb, Express, React, and Node (MERN stack).</p>
							</div>
						</div>
					</div>
					<div className='service' id='design'>
						<h3 className='title'>design</h3>
						<div className='details'>
							<p>
								Purposeful, refined and user focused. Visual interactions with
								intention.
							</p>
							<div className='detail-item'>
								<h1 className='subtitle'>wireframing</h1>
								<p>
									When building wireframes, I focus on building intuitive
									navigational structure, prioritisation of content, and arranging
									elements in a manner that’s clear and effective.
								</p>
							</div>
							<div className='detail-item'>
								<h1 className='subtitle'>user interface design & prototyping</h1>
								<p>
									I have experience creating user and system flow diagrams that
									visually map the step by step experience of the user as well as
									the system logic at play. I also have exposure to personas and
									usability testing methodology. For fast and effective user
									demonstrations and validation, I tend towards Figma or Xd's
									prototyping functionality.
								</p>
							</div>
						</div>
					</div>
				</div>

				{inView && <Asteroid1 />}
				{inView && <Asteroid2 />}
				{inView && <Asteroid3 />}
			</section>
		</Fragment>
	)
}

export default ServicesPage
