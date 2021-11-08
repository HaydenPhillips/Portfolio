import React from 'react'
import ContactForm from './ContactForm'
import earth from '../../../assets/icons/earth.svg'
import satellite from '../../../assets/images/LayeredScene/moon/satellite.svg'

const ContactPage = () => {
	return (
		<section className='contact-page'>
			<ContactForm />
			<div className='satellite'>
				<img src={satellite} alt='satellite' />
			</div>
			<div className='earth' alt='earth'>
				<img src={earth} alt='earth' />
			</div>
		</section>
	)
}

export default ContactPage
