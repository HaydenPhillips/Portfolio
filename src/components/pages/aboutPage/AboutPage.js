import React from 'react';
import '../../../CSS/Pages/pages.css';

const AboutPage = () => {
	return (
		<section className='about-page'>
			<div className='page-wrap'>
				<h1>Know thy creator.</h1>
				<div className='section'>
					<h3 className='title'>about</h3>
					<div className='details'>
						<h1 className='subtitle'>this website</h1>
						<p>
							Consider it something inbetween a portfolio and resume, with the
							intention to reveal where I may bring value to your
							team/organisation. It show-cases a few projects I have worked on,
							and dips into my professional background and abilities.
						</p>

						<h1 className='subtitle'>me in one minute</h1>
						<p>
							I live in Wellington, New Zealand. I am a full-stack web
							developer. For the past two years I have been working freelance
							with an interactive digital studio, Vanishing Point. Typically, my
							days consist of collaborating with fellow developers and designers
							to build cool products for the web. My responsibilities range from
							project planning, to liaising with clients, to writing complex
							code.
						</p>
						<p>
							In my spare time, I mess around playing basketball, table tennis,
							and chess. I'm always exploring new terrains with camera in hand,
							and friends by side. I am curious and open minded, so I often ask
							a lot of questions. This helps me become a better problem solver
							as it gives rise to exploration and discovery of new
							possibilities.
						</p>
						<p>
							The intersection of creativity and logic is the space I wish to
							play, perpetually experimenting and learning.
						</p>

						<h1 className='subtitle'>education</h1>
						<div className='detail-item'>
							<h5 className='sub-subtitle'>
								Victoria University of Wellington
							</h5>
							<p>
								Bachelor of Science | Majoring in Computer Science | BSc | 2016
								– 2020
							</p>
						</div>
						<div className='detail-item'>
							<h5 className='sub-subtitle'>National University of Singapore</h5>
							<p>Software Engineering | Top ranked university in Asia | 2018</p>
						</div>
						<div className='detail-item'>
							<h5 className='sub-subtitle'>New Zealand Institute of Fashion</h5>
							<p>Diploma | Garment design | Pattern design | 2013 - 2014</p>
						</div>

						<h1 className='subtitle'>papers</h1>

						<div className='detail-item'>
							<h5 className='sub-subtitle'>Software</h5>
							<p>
								Application Development, Software Development, Artificial
								Intelligence, Machine Learning, Database Systems Engineering,
								User Interface Design, Computer Graphics, Advanced Data
								Structures & Algorithms, Software Correctness, Safety Critical
								Systems, Systems Programming, Engineering Modelling & Design,
								Computer Networks, Compilers & Interpreters.
							</p>
							<h5 className='sub-subtitle'>Business</h5>
							<p>
								Blockchain Bootcamp, Project Management, Digital Innovation &
								Enterprise.
							</p>
							<h5 className='sub-subtitle'>Mathematics</h5>

							<p>Engineering Math with logic and stats.</p>
							<h5 className='sub-subtitle'>Physics</h5>
							<p>
								Intro to Physics, Physics for Electronics, Engineering Science.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
