import React from 'react';
import '../../../CSS/Pages/pages.css';

const AboutPage = () => {
	return (
		<section className='about-page'>
			<div className='page-wrap'>
				<h1>about</h1>
				<div className='section'>
					<h3 className='title'>recent</h3>
					<div className='details'>
						<p>
							I live in Wellington, New Zealand, and I am nearing my
							twenty-eighth solar orbit. For the past two years I've been
							working with Vanishing Point, an interactive story-telling studio.
							Typically my work days consist of building web-apps and
							wireframes, working with fellow designers and developers, and
							tending to my todo list one tick at a time.
						</p>
						<p>
							I am curious and open minded, so I often ask a lot of questions.
							This helps me to be a better problem solver as it gives rise to
							exploration and discovery of new possibilities.
						</p>

						<p>
							The intersection of creativity and logic is my favourite spot. I
							am always experimenting and perpetually learning.
						</p>
					</div>
				</div>
				<div className='section'>
					<h3 className='title'>education</h3>
					<div className='details'>
						<h5 className='subtitle'>Victoria University of Wellington</h5>
						<p>
							Bachelor of Science | Majoring in Computer Science | BSc | 2016 –
							2020
						</p>
						<h5 className='subtitle'>National University of Singapore</h5>
						<p>Software Engineering | Top ranked university in Asia | 2018</p>
						<h5 className='subtitle'>New Zealand Institute of Fashion</h5>
						<p>Diploma | Garment design | Pattern design | 2013 - 2014</p>
						<h5 className='subtitle'>Papers</h5>
						<p>
							Software: <br />
							Application Development, Software Development, Artificial
							Intelligence, Machine Learning, Database Systems Engineering, User
							Interface Design, Computer Graphics, Advanced Data Structures &
							Algorithms, Software Correctness, Safety Critical Systems, Systems
							Programming, Engineering Modelling & Design, Computer Networks,
							Compilers & Interpreters. <br /> <br />
							Business: <br />
							Blockchain Bootcamp, Project Management, Digital Innovation &
							Enterprise. <br /> <br />
							Mathematics: <br />
							Engineering Math with logic and stats. <br /> <br />
							Physics: <br />
							Intro to Physics, Physics for Electronics, Engineering Science.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
