import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ open, children }) {
	if (!open) {
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
