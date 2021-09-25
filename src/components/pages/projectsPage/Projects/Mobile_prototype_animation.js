import React, { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';
import phone_main from '../../../../assets/images/zap_prototype/phone_main.png';
import phone_home_screen from '../../../../assets/images/zap_prototype/phone_home_screen.png';
import recipient_selected from '../../../../assets/images/zap_prototype/recipient_selected.png';
import contact_dropdown from '../../../../assets/images/zap_prototype/contact_dropdown.png';

const Mobile_prototype_animation = () => {
	const fade_downRight_main = useSpring({
		from: { opacity: 0, top: -200, left: -400 },
		to: { opacity: 1, top: 120, left: 0 },
		delay: 300,
		// config: { duration: 4000 }
	});

	const fade_upLeft_home = useSpring({
		from: { opacity: 0, top: 600, left: 300 },
		to: { opacity: 1, top: 374, left: -90 },
		delay: 500,
		// config: { duration: 500 }
	});

	const fade_downRight_select = useSpring({
		from: { opacity: 0, top: -200, left: 500 },
		to: { opacity: 1, top: -10, left: 815 },
		delay: 1000,
		// config: { duration: 1000 }
	});

	const fade_upLeft_dropdown = useSpring({
		from: { opacity: 0, top: 300, left: 900 },
		to: { opacity: 1, top: 130, left: 560 },
		delay: 800,
		// config: { duration: 1200 }
	});

	return (
		<Fragment>
			<div className='png'>
				<animated.img
					src={recipient_selected}
					id='recipient_selected'
					style={fade_downRight_select}
				/>
			</div>

			<div className='png'>
				<animated.img
					src={phone_main}
					id='phone_main'
					style={fade_downRight_main}
				/>
			</div>

			<div className='png'>
				<animated.img
					src={phone_home_screen}
					id='phone_home_screen'
					style={fade_upLeft_home}
				/>
			</div>

			<div className='png'>
				<animated.img
					src={contact_dropdown}
					id='contact_dropdown'
					style={fade_upLeft_dropdown}
				/>
			</div>
		</Fragment>
	);
};

export default Mobile_prototype_animation;
