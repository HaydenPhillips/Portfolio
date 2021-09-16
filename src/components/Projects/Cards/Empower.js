import '../../../CSS/Card/card-full.css';
import '../../../CSS/flickity.css';
import React, { Fragment } from 'react';
import { Slug } from '../../Animations.js';
import Flickity from 'react-flickity-component';
import menuScroll from '../../../assets/images/project_screenshots/empower/menu_scroll.jpg';
import ourValues from '../../../assets/images/project_screenshots/empower/our_value.jpg';
import videoJS from '../../../assets/images/project_screenshots/empower/video.jpg';

const Empower = ({ onClose }) => {
	const flickityOptions = {
		wrapAround: true,
		contain: true,
		adaptiveHeight: true,
	};

	return (
		<Fragment>
			<div className='project-card'>
				<div className='title-bar'>
					<div className='title'>Empower</div>
					<div className='close'>
						<button className='button-1' onClick={onClose}>
							<div className='inner'>
								<i className='material-icons'>close</i>
							</div>
						</button>
					</div>
				</div>
				<div className='card-split' id='slider'>
					<div className='right'>
						<div className='image-slider'>
							<Flickity options={flickityOptions}>
								<img src={menuScroll} alt='menu-scroll' />
								<img src={ourValues} alt='our-values' />
								<img src={videoJS} alt='video-js' />
							</Flickity>
						</div>
					</div>
					<div className='left'>
						<Slug delay={400}>
							<div className='row'>
								<div className='details'>Details</div>
								<div className='small-title'>Overview</div>
								<div className='text'>
									Empower is an advertising and marketing agency headquartered
									in Cincinnati, Ohio.
								</div>
							</div>
							<div className='row'>
								<div className='small-title'>Roles & Responsibilities</div>
								<div className='text'>
									- Website development including animations, card sliders, and
									a custom video player. <br />- Built using JQuery, HTML, CSS,
									flickity, and video.js.
								</div>
							</div>
							<div className='row'>
								<div className='small-title'>Tags</div>
								<div className='text'>+marketing-agency +scss +video-js</div>
							</div>
							<div className='row'>
								<div className='clickables'>
									<a
										href='https://www.empowermm.com/'
										target='_blank'
										activeClassName='active'
									>
										<button className='button-1'>
											<div className='inner'>
												<div className='title'>view site</div>
											</div>
										</button>
									</a>
								</div>
							</div>
						</Slug>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Empower;
