import React, { useState } from 'react'

const ContactFormSpringload = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [colour, setColour] = useState('white')
	const [animals, setAnimals] = useState({
		bear: false,
		tiger: false,
		snake: false,
		donkey: false,
		tigerType: ''
	})

	const handleInputCheckbox = (e) => {
		setAnimals({ ...animals, [e.target.name]: e.target.checked })
	}
	const handleInputText = (e) => {
		setAnimals({ ...animals, [e.target.name]: e.target.value })
	}
	const handleInputEmail = (e) => {
		setEmail(e.target.value)
	}
	const handleInputPassword = (e) => {
		setPassword(e.target.value)
	}
	const handleSubmit = (e) => {
		alert(
			'Form Data: \n' +
				'Email: ' +
				email +
				'\n' +
				'Colour: ' +
				colour +
				'\n' +
				'Bear: ' +
				animals.bear +
				'\n' +
				'Tiger: ' +
				animals.tiger +
				'\n' +
				'Snake: ' +
				animals.snake +
				'\n' +
				'Donkey: ' +
				animals.donkey +
				'\n' +
				'Tiger Type: ' +
				animals.tigerType
		)
		resetFormValues()
		e.preventDefault()
	}
	const resetFormValues = () => {
		setAnimals({
			...animals,
			bear: false,
			tiger: false,
			snake: false,
			donkey: false,
			tigerType: ''
		})
		setColour('white')
		setEmail('')
		setPassword('')
	}

	return (
		<form onSubmit={handleSubmit} className='contact-form-springload'>
			<div className='form-field'>
				<label htmlFor='email'>Your email</label>
				<input
					className='email'
					type='email'
					id='email'
					value={email}
					onChange={handleInputEmail}
					required
					style={{ border: `${colour} solid 2px` }}
				/>
			</div>
			<div className='form-field'>
				<label htmlFor='password'>Your password</label>
				<input
					className='password'
					type='password'
					id='password'
					value={password}
					onChange={handleInputPassword}
					required
					minLength='9'
					style={{ border: `${colour} solid 2px` }}
				/>
			</div>

			<div className='form-field'>
				<label>Select colour</label>
				<div className='picker'>
					<div className='radio'>
						<input
							type='radio'
							value='blue'
							name='colour'
							onChange={() => setColour('blue')}
						/>
						<label htmlFor='colour'>Blue</label>
					</div>
					<div className='radio'>
						<input
							type='radio'
							value='green'
							name='colour'
							onChange={() => setColour('green')}
						/>
						<label htmlFor='colour'>Green</label>
					</div>
					<div className='radio'>
						<input
							type='radio'
							value='red'
							name='colour'
							onChange={() => setColour('red')}
						/>
						<label htmlFor='colour'>Red</label>
					</div>
					<div className='radio'>
						<input
							type='radio'
							value='black'
							name='colour'
							onChange={() => setColour('black')}
						/>
						<label htmlFor='colour'>Black</label>
					</div>
					<div className='radio'>
						<input
							type='radio'
							value='brown'
							name='colour'
							onChange={() => setColour('brown')}
						/>
						<label htmlFor='colour'>Brown</label>
					</div>
				</div>
			</div>
			<div className='form-field'>
				<label>Select animal</label>
				<div className='picker'>
					<div className='checkbox'>
						<input
							type='checkbox'
							value={animals.bear}
							name='bear'
							onChange={handleInputCheckbox}
						/>
						<label htmlFor='bear'>Bear</label>
					</div>
					<div className='checkbox'>
						<input
							type='checkbox'
							value={animals.tiger}
							name='tiger'
							onChange={handleInputCheckbox}
						/>
						<label htmlFor='tiger'>Tiger</label>
					</div>
					<div className='checkbox'>
						<input
							type='checkbox'
							value={animals.snake}
							name='snake'
							onChange={handleInputCheckbox}
						/>
						<label htmlFor='snake'>Snake</label>
					</div>
					<div className='checkbox'>
						<input
							type='checkbox'
							value={animals.donkey}
							name='donkey'
							onChange={handleInputCheckbox}
						/>
						<label htmlFor='donkey'>Donkey</label>
					</div>
				</div>
			</div>
			<div>
				<div
					className='form-field'
					style={{
						visibility: animals.tiger ? 'visible' : 'hidden'
					}}
				>
					<label htmlFor='tigerType'>Type of tiger</label>
					<input
						name='tigerType'
						type='text'
						value={animals.tigerType}
						onChange={handleInputText}
						required={animals.tiger}
						style={{
							border: `${colour} solid 2px`
						}}
					/>
				</div>
			</div>
			<button className='submit' type='submit'>
				Submit
			</button>
		</form>
	)
}

export default ContactFormSpringload
