import React from 'react'
import { Link } from 'react-router-dom'
import { Slug } from '../../../Animations.js'
import Flickity from 'react-flickity-component'
import chihachevo from '../../../../assets/images/project_screenshots/emma/emma_vp_chihachevo.jpg'
import door from '../../../../assets/images/project_screenshots/emma/emma_vp_door.jpg'
import orphanage from '../../../../assets/images/project_screenshots/emma/emma_vp_orphanage.jpg'
import pechory from '../../../../assets/images/project_screenshots/emma/emma_vp_pechory.jpg'
import redSquare from '../../../../assets/images/project_screenshots/emma/emma_vp_red_square.jpg'
import timeline1 from '../../../../assets/images/project_screenshots/emma/emma_vp_timeline_1.jpg'
import timeline2 from '../../../../assets/images/project_screenshots/emma/emma_vp_timeline_2.jpg'
import vologda1 from '../../../../assets/images/project_screenshots/emma/emma_vp_vologda_1.jpg'
import vologda2 from '../../../../assets/images/project_screenshots/emma/emma_vp_vologda_2.jpg'

export default function Emma({ onClose }) {
	const flickityOptions = {
		wrapAround: true,
		contain: true,
		adaptiveHeight: true
	}

	return (
		<div className='project-card'>
			<div className='title-bar'>
				<div className='title'>Emma</div>
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
							<img src={redSquare} alt='red-square' />
							<img src={door} alt='moscow-door' />
							<img src={pechory} alt='pechory' />
							<img src={orphanage} alt='orphanage' />
							<img src={timeline1} alt='timeline1' />
							<img src={timeline2} alt='timeline2' />
							<img src={vologda1} alt='valogda1' />
							<img src={vologda2} alt='valogda2' />
							<img src={chihachevo} alt='chihachevo' />
						</Flickity>
					</div>
				</div>
				<div className='left'>
					<Slug delay={400}>
						<div className='row'>
							<div className='details'>Details</div>
							<div className='small-title'>Overview</div>
							<div className='text'>
								Emma was adopted to New Zealand from Russia in the 1990s. This is
								her story of rejection, acceptance, fear and hope.
							</div>
						</div>
						<div className='row'>
							<div className='small-title'>Roles & Responsibilities</div>
							<div className='text'>
								- react development
								<br />
								- creating layered scenes with Phaser
								<br />
								- character movement logic
								<br />- component styling
							</div>
						</div>
						<div className='row'>
							<div className='small-title'>Tags</div>
							<div className='text'>+interactive-documentary +react +phaser</div>
						</div>
						<div className='row'>
							<div className='clickables'>
								<Link
									to={{
										pathname:
											'https://interactives.stuff.co.nz/2020/11/emma-search-for-birth-family-russia/'
									}}
									target='_blank'
									activeClassName='active'
								>
									<button className='button-1'>
										<div className='inner'>
											<div className='title'>View Site</div>
										</div>
									</button>
								</Link>
							</div>
						</div>
					</Slug>
				</div>
			</div>
		</div>
	)
}
