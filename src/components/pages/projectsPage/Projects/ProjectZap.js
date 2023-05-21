import React, { Fragment } from 'react'
import manage_finance_screen from '../../../../assets/images/zap_prototype/manage_finance_screen.svg'
import mobile_background from '../../../../assets/images/zap_prototype/mobile_background.svg'
import early_draft from '../../../../assets/images/zap_prototype/early_draft.svg'
import AnimationIn from './Mobile_prototype_animation'
import { useInView } from 'react-intersection-observer'

const ProjectZap = () => {
	const [prototypeRef, inView] = useInView({
		threshold: 0,
		rootMargin: '800px 0px -400px 0px'
	})

	return (
		<Fragment>
			<div className='grid-zap'>
				<div className='content-container'>
					<div className='col' id='mobile_background'>
						<img src={mobile_background} alt='account-app' />
					</div>
					<div className='col' id='manage-accounts'>
						<img src={manage_finance_screen} alt='account-app' />
					</div>
					<div className='col' id='early-draft'>
						<img src={early_draft} alt='account-app' />
					</div>
					<div className='col-3'>
						<div ref={prototypeRef} className='prototype_collection'>
							{inView ? <AnimationIn /> : <div className='empty'></div>}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default ProjectZap
