import React from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	display: flex;
	gap: 20px;
	width: calc(100% - 40px);
	padding: 15px 20px;
	align-items: center;
	justify-content: flex-end;
	justify-items: flex-end;
	background-color: #323c7a66;
	box-shadow: black 4px 0 10px;
	z-index: 1;
`

const Button = styled.button`
	display: flex;
	align-items: center;
	padding: 5px 5px;
	font-size: 24px;
	border-radius: 30px;
	color: #cccedd;
	background-color: transparent;
	transition: all 0.2s ease;
	box-shadow: -2px -2px 6px #727ec9, 2px 2px 6px #00000080;
	cursor: pointer;

	.inner {
		padding: 10px 20px;
		border-radius: 30px;
		&:active {
			box-shadow: inset -2px -2px 5px #727ec9, inset 2px 2px 5px #00000080;
		}
	}

	&:hover {
		color: #e4e5ee;
		box-shadow: -2px -2px 3px #727ec9, 2px 2px 3px #00000080;
	}
	&.active {
		color: white;
		box-shadow: -2px -2px 3px #727ec9, 2px 2px 3px #00000080;
		background-color: #1f265260;
		.inner {
			h6 {
				font-weight: 600;
			}
		}
	}
`

const Navbar = ({ handleClick, isActive }) => {
	return (
		<Navigation>
			<Button
				className={`${isActive === 'landing' && 'active'}`}
				onClick={() => {
					handleClick('landing')
				}}
			>
				<div className='inner'>
					<h6>landing</h6>
				</div>
			</Button>

			<Button
				className={`nav-button ${isActive === 'projects' && 'active'}`}
				onClick={() => {
					handleClick('projects')
				}}
			>
				<div className='inner'>
					<h6>projects</h6>
				</div>
			</Button>

			<Button
				className={`nav-button ${isActive === 'experience' && 'active'}`}
				onClick={() => {
					handleClick('experience')
				}}
			>
				<div className='inner'>
					<h6>experience</h6>
				</div>
			</Button>

			<Button
				className={`nav-button ${isActive === 'contact' && 'active'}`}
				onClick={() => {
					handleClick('contact')
				}}
			>
				<div className='inner'>
					<h6>contact</h6>
				</div>
			</Button>
		</Navigation>
	)
}

export default Navbar
