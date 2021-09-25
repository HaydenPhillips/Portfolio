import React, { Fragment } from 'react';
import account_left from '../../../../assets/images/zap_prototype/account-45.svg';
import account_right from '../../../../assets/images/zap_prototype/account-45-right.svg';
import zap_logo from '../../../../assets/images/zap_prototype/zap_logo.png';
import AnimationIn from './Mobile_prototype_animation';
import { useInView } from 'react-intersection-observer';
import '../../../../CSS/Zap/ProjectZap.css';

const ProjectZap = () => {
	const [ref, inView] = useInView({
		threshold: 0,
		rootMargin: '800px 0px -400px 0px',
	});

	return (
		<Fragment>
			<div className='grid-zap'>
				<div className='grid-c3-even'>
					<div className='left'>
						<img src={account_left} alt='account-app' />
					</div>
					<div className='mid'>
						<img src={zap_logo} alt='zap-logo' />
						<div className='text-con'>
							<h5>Payments made easy, the way it should be.</h5>
							<br />
							<p>
								Send and receive money with anyone, donate to an important
								cause, or tip professionals. Just enter a ZapTag, phone number,
								or scan their QR code to pay.
							</p>
							<p>
								Did you pay for a group birthday gift or vacation with plans to
								have everyone pay you back later? Remind your friends who owes
								what with Zap and send money requests at any time. You can also
								pay your friends back if they request you.
							</p>
						</div>
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
	);
};

export default ProjectZap;
