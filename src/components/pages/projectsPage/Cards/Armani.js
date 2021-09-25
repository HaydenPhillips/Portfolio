import '../../../../CSS/Card/card-full.css';
import '../../../../CSS/flickity.css';
import React, { Fragment } from 'react';
import { Slug } from '../../../Animations.js';
import Flickity from 'react-flickity-component';
import begin from '../../../../assets/images/project_screenshots/armani/armani_begin.jpg';
import intro from '../../../../assets/images/project_screenshots/armani/armani_intro.jpg';
import product from '../../../../assets/images/project_screenshots/armani/armani_product.jpg';
import selectPath from '../../../../assets/images/project_screenshots/armani/armani_select_path.jpg';
import vtoSidebar from '../../../../assets/images/project_screenshots/armani/armani_vto_sidebar.jpg';
import vto from '../../../../assets/images/project_screenshots/armani/armani_vto.jpg';

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
					<div className='title'>Giorgio Armani Digital Event</div>
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
								<div className='text'>
									<p>This project was a virtual Launch Event</p>
									<p>
										We worked with Moving Image & Content and DotDot to create a
										digital event site for Giorgio Armani’s Lip Power lipstick.
										The event was attended by their VIP community on National
										Lipstick Day.
									</p>
									<p>
										Attendees tuned into a live event complete with ASMR videos,
										a live make up tutorial, an AR lipstick try on experience, a
										dance film, and an a guest speaker panel.
									</p>
									<p>
										Attendees could make decisions during the event to go down
										different pathways of content based on thematic prompts.
									</p>
								</div>
							</div>
							<div className='row'>
								<div className='small-title'>Roles & Responsibilities</div>
								<div className='text'>
									- react development
									<br />
									- live chat set-up
									<br />
									- Modiface augmented reality integration
									<br />
								</div>
							</div>
							<div className='row'></div>
							<div className='row'>
								<div className='small-title'>Tags</div>
								<div className='text'>
									+interactive-event +product-release +react +modi-face
									+augmented-reality
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
