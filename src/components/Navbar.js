import React from 'react'

const Navbar = ({ handleClick, isActive }) => {
	return (
		<nav>
			<div className='navbar'>
				<button
					className={`nav-button ${isActive === 'landing' && 'active'}`}
					onClick={() => {
						handleClick('landing')
					}}
				>
					<div className='inner'>
						<h6>landing</h6>
					</div>
				</button>

				<button
					className={`nav-button ${isActive === 'projects' && 'active'}`}
					onClick={() => {
						handleClick('projects')
					}}
				>
					<div className='inner'>
						<h6>projects</h6>
					</div>
				</button>

				<button
					className={`nav-button ${isActive === 'experience' && 'active'}`}
					onClick={() => {
						handleClick('experience')
					}}
				>
					<div className='inner'>
						<h6>experience</h6>
					</div>
				</button>

				<button
					className={`nav-button ${isActive === 'contact' && 'active'}`}
					onClick={() => {
						handleClick('contact')
					}}
				>
					<div className='inner'>
						<h6>contact</h6>
					</div>
				</button>
			</div>
		</nav>
	)
}

export default Navbar
