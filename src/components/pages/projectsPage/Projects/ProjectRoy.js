import React, { Fragment } from 'react'
import ReactPlayer from 'react-player'
import swinging_tag from '../../../../assets/videos/project_roy/swinging_tag.mp4'
import eva_st from '../../../../assets/videos/project_roy/eva_st.mp4'
import gif1 from '../../../../assets/images/project_roy/knolling_SS_navy_small.jpg'
import SS_front_blue from '../../../../assets/images/project_roy/SS_front_blue.jpg'
import pyramid from '../../../../assets/images/project_roy/pyramid_blue_small.jpg'
import roy_logo_white from '../../../../assets/images/project_roy/logo_tree_white_small.png'
import care_instructions from '../../../../assets/images/project_roy/care_instructions.jpg'
import LS_navy_background from '../../../../assets/images/project_roy/LS_navy_background.jpg'
import chiffon_macro from '../../../../assets/images/project_roy/chiffon_macro.jpg'
import falling_leaves from '../../../../assets/images/project_roy/falling_leaves.png'
import leaves_back from '../../../../assets/images/project_roy/leaves_layer.png'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
// import wheel_1 from "../assets/videos/project_roy/sewing_motor_wheel_motion.mp4";
// import wheel_2 from "../assets/videos/project_roy/overlocker_wheel_motion.mp4";
// import wheel_3 from "../assets/videos/project_roy/overlocker_motor_wheel_motion.mp4";
// import package_insert from "../assets/videos/project_roy/package_insert.mp4";
// import five_swingtag from "../assets/images/project_roy/five_swingtag.jpg";
// import gif2 from "../assets/images/project_roy/knolling_SS_white_small.jpg";
// import roy_logo from "../assets/images/project_roy/logo_tree.jpg";
// import roy_logo_white from "../assets/images/project_roy/logo_tree_white.png";
// import machine_attachments from '../assets/images/project_roy/machine_attachments.jpg';
// import LSR_1 from "../assets/images/project_roy/LSR_1.jpg";
// import LSR_2 from "../assets/images/project_roy/LSR_2.jpg";
// import LSR_3 from "../assets/images/project_roy/LSR_3.jpg";
// import LSR_4 from "../assets/images/project_roy/LSR_4.jpg";
// import LSR_5 from "../assets/images/project_roy/LSR_5.jpg";
// import LSR_6 from "../assets/images/project_roy/LSR_6.jpg";
// import ParallaxTest from './ParallaxTest';

const ProjectRoy = () => {
	let parallax

	return (
		<Fragment>
			<div className='roy-project'>
				<Parallax
					pages={6}
					ref={(ref) => (parallax = ref)}
					style={{
						display: 'grid',
						margin: 'auto'
					}}
				>
					<ParallaxLayer
						offset={1}
						speed={-0.3}
						style={{
							backgroundImage: `url(${leaves_back})`,
							backgroundRepeat: 'repeat-y',
							backgroundSize: 'contain',
							height: '100%'
						}}
					/>

					<ParallaxLayer
						offset={1}
						speed={-0.1}
						style={{
							backgroundImage: `url(${falling_leaves})`,
							backgroundRepeat: 'repeat-y',
							backgroundSize: 'contain',
							height: '100%'
						}}
					/>
					<div className='wrapper'>
						<ParallaxLayer
							onClick={() => parallax.scrollTo(1)}
							offset={0}
							speed={-0.2}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<ReactPlayer
								volume={0}
								className='player'
								url={eva_st}
								playing={true}
								loop={true}
								width='100%'
								height='auto'
								playbackRate={2}
							/>
						</ParallaxLayer>

						<ParallaxLayer
							onClick={() => parallax.scrollTo(2)}
							offset={1.1}
							speed={0.5}
							style={{ backgroundColor: 'transparent' }}
						/>

						<ParallaxLayer
							onClick={() => parallax.scrollTo(3)}
							offset={2.1}
							speed={0.5}
							style={{ backgroundColor: 'lightgrey' }}
						/>

						<ParallaxLayer
							onClick={() => parallax.scrollTo(5)}
							offset={3}
							speed={0.5}
							style={{
								backgroundPosition: 'center',
								backgroundColor: 'rgb(244, 244, 244)'
							}}
						/>
						<ParallaxLayer
							onClick={() => parallax.scrollTo(5)}
							offset={3}
							speed={0.5}
							style={{
								backgroundImage: `url(${LS_navy_background})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundColor: 'rgb(247, 247, 247)',
								width: '110%',
								marginLeft: '-15%'
							}}
						/>

						<ParallaxLayer
							offset={4.2}
							speed={0.5}
							style={{
								backgroundImage: `url(${chiffon_macro})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center'
							}}
						/>

						<div className='pad'>
							<ParallaxLayer
								offset={0.0}
								speed={1}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<div className='title'>
									<h1>ROY APPAREL</h1>
								</div>
							</ParallaxLayer>

							<ParallaxLayer
								offset={0.1}
								speed={0.8}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<div className='sub-title'>
									<p>Designed & Manufactured in New Zealand</p>
								</div>
							</ParallaxLayer>
							<ParallaxLayer
								offset={0.3}
								speed={0.3}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<img src={roy_logo_white} className='logo-small' alt='roy_logo' />
							</ParallaxLayer>

							<ParallaxLayer
								offset={1}
								speed={0.7}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-start'
								}}
							>
								<img className='image' src={SS_front_blue} alt='' />
							</ParallaxLayer>
							<ParallaxLayer
								offset={1}
								speed={1}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<img className='image' src={pyramid} alt='' />
							</ParallaxLayer>
							<ParallaxLayer
								offset={1}
								speed={0.6}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-end'
								}}
							>
								<img className='image' src={gif1} alt='' />
							</ParallaxLayer>

							<ParallaxLayer
								offset={2.05}
								speed={0.8}
								style={{
									display: 'flex',
									alignItems: 'center',
									marginLeft: '5%'
								}}
							>
								<ReactPlayer
									volume={0}
									url={swinging_tag}
									playing={true}
									loop={true}
									width='60%'
									height='auto'
								/>
							</ParallaxLayer>

							<ParallaxLayer
								offset={2}
								speed={0.6}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-end',
									justifyItems: 'flex-end',
									marginRight: '5%'
								}}
							>
								<div className='text-30'>
									<p>
										The essence of Roy is to convey creative ideas that
										correlate with an individual via purposeful design.
										From concept to customer, we strive to produce the highest
										of quality through all forms of expression.
									</p>
								</div>
							</ParallaxLayer>

							<ParallaxLayer
								offset={2.2}
								speed={1.2}
								style={{
									display: 'flex',
									alignItems: 'center'
								}}
							>
								<img
									className='care'
									src={care_instructions}
									alt='care_instructions'
								/>
							</ParallaxLayer>

							<div className='aline-center'>
								<ParallaxLayer
									offset={3.1}
									speed={1}
									style={{
										position: 'static',
										display: 'flex',
										alignItems: 'center',
										height: 'auto'
									}}
								>
									<div className='header'>
										<h1>
											NAVY LS
											<br /> REVERSIBLE
										</h1>
									</div>
								</ParallaxLayer>
								<ParallaxLayer
									offset={3.1}
									speed={0.8}
									style={{
										position: 'static',
										display: 'flex',
										alignItems: 'center',
										height: 'auto'
									}}
								>
									<div className='text-50'>
										<p>
											A completely reversible shirt designed with wearability
											and functionality in mind. Crafted by masters of the
											trade, using complex construction methods with precise
											symmetry. This provides an easy care shirt that is
											resistant to creasing, fast drying, while maintaining a
											soft lightweight feel.
										</p>
									</div>
								</ParallaxLayer>
							</div>

							<ParallaxLayer
								offset={4}
								speed={0.8}
								style={{
									position: 'static',
									display: 'flex',
									alignContent: 'center',
									height: 'auto'
								}}
							>
								<div className='text'>
									<p>
										The weave of the fabric is key to its many benefits, the
										highly twisted polyester yarn gives the material a slight
										spring, that aids in making the shirt very resistent to
										creasing. The naturally hydrophobic qualities of polyester
										means it is resistent to water, resulting in a very fast
										drying shirt.
									</p>
								</div>
							</ParallaxLayer>
						</div>
					</div>
				</Parallax>
			</div>
		</Fragment>
	)
}

export default ProjectRoy
