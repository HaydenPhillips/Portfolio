import '../../../../CSS/Card/card-full.css';
import React, { Fragment } from 'react';
import { Slug } from '../../../Animations.js';
import { Link } from 'react-router-dom';

export default function Roy({ onClose }) {
	return (
		<Fragment>
			<div className='project-card'>
				<div className='title-bar'>
					<div className='title'>Roy Apparel</div>
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
									Roy Apparel is a menswear brand that was owned and operated by
									myself between 2014 & 2017 in Wellington NZ. Good times were
									had, many lessons learnt, quality garments and digital content
									was made.
								</div>
							</div>
							<div className='row'>
								<div className='small-title'>Roles & Responsibilities</div>
								<div className='text'>
									- Design and manufacture clothing from concept to final
									product
									<br />
									- Produce digital content e.g. product photography,
									videography, animations, lookbooks
									<br />
									- Coordinated all activities required to bring the product to
									market
									<br />- Generated sales through online and boutique clothing
									stores across the nation.
								</div>
							</div>
							<div className='row'>
								<div className='small-title'>Tags</div>
								<div className='text'>
									+product-design +graphic-design +clothing +photography
									+videography
								</div>
							</div>
						</Slug>
					</div>
					<div className='right'>
						<div className='image'>
							<div alt='roy-preview' className='image-preview royPreview' />
						</div>
						<div className='clickables'>
							<Link to={'/ProjectRoy'} target='_blank' activeClassName='active'>
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
	);
}
