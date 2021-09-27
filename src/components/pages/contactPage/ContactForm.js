import React, { useState } from 'react'
import { Fragment } from 'react'

const ContactForm = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [isFormSubmitted, setIsFormSubmitted] = useState(false)

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact-form', ...formState }),
		})
			.then(() => {
				alert('Message successfully sent.')
				setIsFormSubmitted(true)
				resetFormValues()
			})
			.catch((error) => alert(error))

		e.preventDefault()
		console.log('formState: ', formState)
	}

	const resetFormValues = () => {
		setFormState({
			name: '',
			email: '',
			message: '',
		})
	}

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&')
	}

	return (
		<Fragment>
			<form
				onSubmit={handleSubmit}
				className='contact-form'
				name='contact-form'
				method='post'
				data-netlify='true'
				data-netlify-honeypot='bot-field'
			>
				<input type='hidden' name='bot-field' />
				<input type='hidden' name='form-name' value='contact-form' />
				<div className='form-field'>
					<label htmlFor='name'>
						<h6>Your name</h6>
					</label>
					<input
						type='text'
						id='name'
						name='name'
						onChange={handleChange}
						value={formState.name}
						required
					/>
				</div>
				<div className='form-field'>
					<label htmlFor='email'>
						<h6>Your email</h6>
					</label>
					<input
						type='email'
						id='email'
						name='email'
						onChange={handleChange}
						value={formState.email}
						required
					/>
				</div>
				<div className='form-field'>
					<label htmlFor='message'>
						<h6>Your message</h6>
					</label>
					<textarea
						type='text'
						id='message'
						name='message'
						onChange={handleChange}
						value={formState.message}
						rows='5'
						required
					/>
				</div>
				{isFormSubmitted ? (
					<button type='submit' disabled>
						<h6>Message Sent</h6>
					</button>
				) : (
					<button type='submit'>
						<h6>Send</h6>
					</button>
				)}
			</form>
		</Fragment>
	)
}

export default ContactForm
