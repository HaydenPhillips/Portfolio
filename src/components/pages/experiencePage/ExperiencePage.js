import React from 'react'

const ExperiencePage = () => {
	return (
		<section className='experience-page'>
			<div className='page-wrap'>
				<div className='exp-hero'>
					<h3 className='title'>
						web
						<br /> development
						<br /> design,
						<br /> & recreation
					</h3>
					<div className='details'>
						<div className='text-item'>
							<p>
								For the past three years I have been designing and developing
								fullstack web applications, through employment and now
								freelance. I have worked with a range of digital studios,
								designers, and clients to create outstanding products for the
								web.
							</p>
						</div>
						<div className='text-item'>
							<p>
								In my spare time, I mess around playing basketball, table
								tennis, and chess. I'm always exploring new terrains with a
								camera in hand, and friends by side. I 'm a curious and open
								minded individual, so I often ask a lot of questions. This helps
								me become a better problem solver as it gives rise to
								exploration and discovery of new possibilities.
							</p>
						</div>
						<div className='text-item'>
							<p>
								The intersection of creativity and logic is the space I wish to
								play, always experimenting, always learning.
							</p>
						</div>
					</div>
				</div>

				<div className='exp-hero'>
					<h3 className='title'>
						software
						<br /> tools
					</h3>
					<div className='details'>
						<div className='text-item'>
							<h4 className='subtitle'>React</h4>
							<p>
								React is my preferred frontend library for building
								user-interfaces. I use Hooks in particular as it provides better
								flexibility in extracting, testing, and reusing code.
							</p>
						</div>
						<div className='text-item'>
							<h4 className='subtitle'>Gatsby</h4>
							<p>
								Gatsby is a frontend framework and modern static site generator.
								I use it for creating fast, secure, and scalable websites.
							</p>
						</div>
						<div className='text-item'>
							<h4 className='subtitle'>Vue & Nuxt</h4>
							<p>
								Vue is a frontend JavaScript framework for building user
								interfaces and single-page applications. Nuxt offers better SEO
								improvement with its server-side rendering feature, faster
								development with auto-generic routing.
							</p>
						</div>
						<div className='text-item'>
							<h4 className='subtitle'>Strapi</h4>
							<p>
								Strapi is an open-source, Node.js based, Headless CMS that saves
								developers a lot of development time while giving them the
								freedom to use their favorite tools and frameworks.
							</p>
						</div>
						<div className='text-item'>
							<h4 className='subtitle'>GraphQL</h4>
							<p>
								GraphQL is designed to make APIs fast, flexible, and
								developer-friendly. As an alternative to REST, GraphQL lets
								developers construct requests that pull data from multiple data
								sources in a single API call
							</p>
						</div>
						<div className='text-item'>
							<h4 className='subtitle'>JQuery</h4>
							<p>
								Working with the DOM directly means it's easy to use and
								reasonable effective for basic websites.
							</p>
						</div>
					</div>
				</div>
				<div className='exp-hero'>
					<h3 className='title'>languages</h3>
					<div className='details'>
						<div className='text-item'>
							<h4 className='subtitle'>css</h4>
							<p>
								I style components using a pre-processor call scss. It reduces
								code repetition, and promotes cleaner, more maintainable code.
							</p>
						</div>
						<div className='text-item'>
							<h4 className='subtitle'>JavaScript</h4>
							<p>
								Most of the code I write is some variation of JavaScript. When
								its vanilla js, I utilise version ES6 and above.
							</p>
						</div>
						<div className='text-item'>
							<h4 className='subtitle'>Java</h4>
							<p>
								My foundations of programming started with Java. Predominantly
								use throughout university.
							</p>
						</div>
						<div className='text-item'>
							<h4 className='subtitle'>Python</h4>
							<p>
								Implemented four machine learning programs, a basic data file
								reader, and small command line games.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ExperiencePage
