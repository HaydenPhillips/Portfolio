import React, { Fragment, useState } from 'react'
import ContactForm from './ContactForm'
import ContactFormSpringload from './ContactFormSpringload'
import earth from '../../../assets/icons/earth.svg'
import satellite from '../../../assets/images/LayeredScene/moon/satellite.svg'

const ContactPage = () => {
	const [isSpringloadShowing, setIsSpringloadShowing] = useState(false)

	return (
		<Fragment>
			<section className='contact-page'>
				{isSpringloadShowing ? <ContactFormSpringload /> : <ContactForm />}

				<button
					className='springload-test'
					onClick={() => setIsSpringloadShowing(!isSpringloadShowing)}
				>
					{isSpringloadShowing
						? 'Back to original form'
						: 'Springload Code Test'}
				</button>
				<div className='satellite'>
					<img src={satellite} alt='satellite' />
				</div>
				<div className='earth' alt='earth'>
					<img src={earth} alt='earth' />
				</div>
			</section>
		</Fragment>
	)
}

export default ContactPage
