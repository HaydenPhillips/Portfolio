import React from 'react';

const Navbar = ({ handleClick, isActive }) => {
	return (
		<nav>
			<div className='navbar'>
				<button
					className={`nav-button ${isActive === 'about' && 'active'}`}
					onClick={() => {
						handleClick('about');
					}}
				>
					<div className='inner'>
						<h6>about</h6>
					</div>
				</button>

				<button
					className={`nav-button ${isActive === 'services' && 'active'}`}
					onClick={() => {
						handleClick('services');
					}}
				>
					<div className='inner'>
						<h6>services</h6>
					</div>
				</button>

				<button
					className={`nav-button ${isActive === 'projects' && 'active'}`}
					onClick={() => {
						handleClick('projects');
					}}
				>
					<div className='inner'>
						<h6>projects</h6>
					</div>
				</button>

				<button
					className={`nav-button ${isActive === 'contact' && 'active'}`}
					onClick={() => {
						handleClick('contact');
					}}
				>
					<div className='inner'>
						<h6>contact</h6>
					</div>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
