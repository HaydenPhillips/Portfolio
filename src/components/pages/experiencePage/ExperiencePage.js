import React from 'react'

const ExperiencePage = () => {
	return (
		<section className='experience-page'>
			<div className='page-wrap'>
				<div className='experience-block'>
					<h3 className='title'>
						web
						<br /> development,
						<br /> design,
						<br /> & recreation
					</h3>
					<div className='line' />
					<ul className='details gap-increase'>
						<li className='text-item'>
							<p>
								I have been designing and developing web applications for the
								past three years. Working freelance for the most part, with a
								stint at NZs largest tech shop, ANZ. Throughout this time I have
								collaborated with a range of clients, digital studios,
								designers, and developers to create outstanding products for the
								web. My aim is to deliver beautiful, accessible, and robust
								screen based interfaces, helping to improve the experience of
								the user.
							</p>
						</li>
						<li className='text-item'>
							<p>
								For fun, I play sports- mainly basketball with a bit of
								badminton, squash, summer volleyball, and table tennis. I mess
								around with a few video games like Tekken and GTA, but my
								favourite game of all is chess. To scratch my creative itch I
								make clothing, which was my bread and butter prior to my career
								in software. I'm always exploring new terrains with a camera in
								hand, and friends by side. I'm a curious and open minded
								individual, so I often ask a lot of questions. This helps me
								become a better problem solver as it gives rise to exploration
								and discovery of new possibilities.
							</p>
						</li>
						<li className='text-item'>
							<p>
								The intersection of creativity and logic is the space I wish to
								play, always experimenting, always learning.
							</p>
						</li>
					</ul>
				</div>

				<div className='experience-block'>
					<h3 className='title'>
						Familiar
						<br /> software
						<br /> tools
					</h3>
					<div className='line' />
					<ul className='details'>
						<li className='text-item'>
							<h4 className='subtitle'>React</h4>
							<p>(hooks)</p>
						</li>
						<li className='text-item'>
							<h4 className='subtitle'>Gatsby</h4>
						</li>
						<li className='text-item'>
							<h4 className='subtitle'>Vue & Nuxt</h4>
						</li>
						<li className='text-item'>
							<h4 className='subtitle'>Strapi</h4>
							<p>(headless CMS)</p>
						</li>
						<li className='text-item'>
							<h4 className='subtitle'>Rest APIs & GraphQL</h4>
						</li>
						<li className='text-item'>
							<h4 className='subtitle'>React-Spring & GSAP</h4>
						</li>
						<li className='text-item'>
							<h4 className='subtitle'>JQuery</h4>
						</li>
						<li className='text-item'>
							<h4 className='subtitle'>Figma & Xd</h4>
						</li>
						<li className='text-item'>
							<h4 className='subtitle'>Photoshop & Lightroom</h4>
						</li>
					</ul>
				</div>
				<div className='experience-block'>
					<h3 className='title'>languages</h3>
					<div className='line' />
					<ul className='details'>
						<li className='text-item'>
							<h4 className='subtitle'>CSS</h4>
							<p>(SCSS)</p>
						</li>
						<li className='text-item'>
							<h4 className='subtitle'>JavaScript</h4>
							<p>(ES6+)</p>
						</li>
						<li className='text-item'>
							<h4 className='subtitle'>Java</h4>
						</li>
						<li className='text-item'>
							<h4 className='subtitle'>Python</h4>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default ExperiencePage
