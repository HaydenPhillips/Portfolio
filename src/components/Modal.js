import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ open, children }) {
	if (open) {
		console.log('open: ', open);
	} else {
		console.log('close: ', open);
		return null;
	}

	return ReactDOM.createPortal(
		<Fragment>
			<div className='modal-background'>
				<div className='modal-container'>{children}</div>
			</div>
		</Fragment>,
		document.getElementById('portal')
	);
}
