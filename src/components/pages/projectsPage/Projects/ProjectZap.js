import React, { Fragment } from 'react'
import account_left from '../../../../assets/images/zap_prototype/account-45.svg'
import account_right from '../../../../assets/images/zap_prototype/account-45-right.svg'
import zap_logo from '../../../../assets/images/zap_prototype/zap_logo.png'
import AnimationIn from './Mobile_prototype_animation'
import { useInView } from 'react-intersection-observer'

const ProjectZap = () => {
	const [ref, inView] = useInView({
		threshold: 0,
		rootMargin: '800px 0px -400px 0px',
	})

	return (
		<Fragment>
			<div className='grid-zap'>
				<div className='grid-c3-even'>
					<div className='left'>
						<img src={account_left} alt='account-app' />
					</div>
					<div className='mid'>
						<img src={zap_logo} alt='zap-logo' />
						<h6>Payments made easy.</h6>
						<div className='arrow' />
					</div>
					<div className='right'>
						<img src={account_right} alt='account-app' />
					</div>
				</div>

				<div ref={ref} className='prototype_collection'>
					{inView ? <AnimationIn /> : <div className='empty'></div>}
				</div>
			</div>
		</Fragment>
	)
}

export default ProjectZap
