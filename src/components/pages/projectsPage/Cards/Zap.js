import React, { Fragment } from 'react'
import { Slug } from '../../../Animations'
import { Link } from 'react-router-dom'

export default function Zap({ onClose }) {
	return (
		<Fragment>
			<div className='project-card'>
				<div className='title-bar'>
					<div className='title'>Zap</div>
					<div className='close'>
						<button className='button-1' onClick={onClose}>
							<div className='inner'>
								<i className='material-icons'>close</i>
							</div>
						</button>
					</div>
				</div>
				<div className='card-split'>
					<div className='left'>
						<Slug delay={400}>
							<div className='details'>Details</div>
							<div className='row'>
								<div className='small-title'>Overview</div>
								<div className='text'>
									Zap is a way to send and receive payments seamlessly. It
									allows the ability to split payments between friends, and
									eliminates delay.
								</div>
							</div>
							<div className='row'>
								<div className='small-title'>Roles & Responsibilities</div>
								<div className='text'>
									A mobile application prototype built by myself and two others,
									Liam Malone and Chris Corbett, in 2020. Leveraging similar
									services like Venmo and The-Cash-App, I was able to refined
									and develope from pre-existing apps to create an effective Ui.
									This prototype was pieced together using figma. The
									presentation displayed on this website was done so using
									React. --Work in progress.--
								</div>
							</div>
							<div className='row'>
								<div className='small-title'>Tags</div>
								<div className='text'>
									+prototyping +figma +ui +ux +mobile-appication
								</div>
							</div>
						</Slug>
					</div>
					<div className='right'>
						<div className='image'>
							<div alt='zap-preview' className='image-preview zapPreview' />
						</div>
						<div className='clickables'>
							<Link to={'/projectzap'} target='_blank' activeClassName='active'>
								<button className='button-1'>
									<div className='inner'>
										<div className='title'>view project</div>
									</div>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
