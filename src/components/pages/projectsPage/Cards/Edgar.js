import React, { Fragment } from 'react'
import { Slug } from '../../../Animations.js'
import { Link } from 'react-router-dom'
import Flickity from 'react-flickity-component'
import kindness from '../../../../assets/images/project_screenshots/edgar/kindness.jpg'
import tickets from '../../../../assets/images/project_screenshots/edgar/tickets.jpg'
import gallery from '../../../../assets/images/project_screenshots/edgar/gallery.jpg'

export default function Edgar({ onClose }) {
	const flickityOptions = {
		wrapAround: true,
		contain: true,
		adaptiveHeight: true
	}

	return (
		<Fragment>
			<div className='project-card'>
				<div className='title-bar'>
					<div className='title'>Edgar's Mission</div>
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
								<img src={kindness} alt='edgar-home' />
								<img src={tickets} alt='book-tickets' />
								<img src={gallery} alt='gallery' />
							</Flickity>
						</div>
					</div>
					<div className='left'>
						<Slug delay={400}>
							<div className='row'>
								<div className='details'>Details</div>
								<div className='text'>
									Edgar’s Mission is a not for profit sanctuary for rescued farmed
									animals that seeks to create a humane and just world for humans
									and non-humans. Home to over 400 rescued animals in Victoria,
									Australia.
								</div>
							</div>
							<div className='row'>
								<div className='small-title'>Roles & Responsibilities</div>
								<div className='text'>
									I contributed to the build of this site using JavaScript,
									JQuery, php, html, css, and Wordpress. I engaged with overseas
									clients and designers via video meetings as well as working
									tight knit with in-house devs at Vanishing Point .
								</div>
							</div>
							<div className='row'>
								<div className='small-title'>Tags</div>
								<div className='text'>
									+animal-sanctuary +jquery +php +word-press +scss
								</div>
							</div>
							<div className='row'>
								<div className='clickables'>
									<Link
										to={{
											pathname: 'http://edgarsmission.kinsta.cloud/'
										}}
										target='_blank'
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
	)
}
