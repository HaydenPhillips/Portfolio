import '../../../CSS/Card/card-full.css';
import '../../../CSS/flickity.css';
import React, { Fragment } from 'react';
import { Slug } from '../../Animations.js';
import { Link } from 'react-router-dom';
import Flickity from 'react-flickity-component';
import begin from '../../../assets/images/project_screenshots/armani/armani_begin.jpg';
import intro from '../../../assets/images/project_screenshots/armani/armani_intro.jpg';
import product from '../../../assets/images/project_screenshots/armani/armani_product.jpg';
import selectPath from '../../../assets/images/project_screenshots/armani/armani_select_path.jpg';
import vtoSidebar from '../../../assets/images/project_screenshots/armani/armani_vto_sidebar.jpg';
import vto from '../../../assets/images/project_screenshots/armani/armani_vto.jpg';

const Armani = ({ onClose }) => {
	const flickityOptions = {
		wrapAround: true,
		contain: true,
		adaptiveHeight: true,
	};

	return (
		<Fragment>
			<div className='project-card'>
				<div className='title-bar'>
					<div className='title'>Armani</div>
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
								<img src={begin} alt='red-square' />
								<img src={intro} alt='moscow-door' />
								<img src={product} alt='pechory' />
								<img src={selectPath} alt='orphanage' />
								<img src={vtoSidebar} alt='timeline1' />
								<img src={vto} alt='timeline2' />
							</Flickity>
						</div>
					</div>
					<div className='left'>
						<Slug delay={400}>
							<div className='row'>
								<div className='details'>Details</div>
								<div className='small-title'>Overview</div>
								<div className='text'>Overview text</div>
							</div>
							<div className='row'>
								<div className='small-title'>Roles & Responsibilities</div>
								<div className='text'>
									- react development, phaser scene setting
									<br />- Coordinated all activities required to bring the
									product to market
								</div>
							</div>
							<div className='row'>
								<div className='small-title'>Tags</div>
								<div className='text'>
									+interactive-documentary +react +phaser
								</div>
							</div>
							<div className='row'>
								<div className='clickables'>
									<Link
										href='https://interactives.stuff.co.nz/2020/11/emma-search-for-birth-family-russia/'
										activeClassName='active'
									>
										<button className='button-1'>
											<div className='inner'>
												<div className='title'>view site</div>
											</div>
										</button>
									</Link>
								</div>
							</div>
						</Slug>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Armani;
