import '../../CSS/Card/card-full.css';
import React from 'react';
import Roy from './Cards/Roy';
import Zap from './Cards/Zap';
import Action from './Cards/Action';
import Education from './Cards/Education';
import About from './Cards/About';
import Planter from './Cards/Planter';
import Hades from './Cards/Hades';
import Emma from './Cards/Emma';
import Armani from './Cards/Armani';
import Edgar from './Cards/Edgar';

const CardFull = ({ componentName, onClose }) => {
	const component = (cn) => {
		switch (cn) {
			case 'Roy':
				return <Roy onClose={onClose} />;
			case 'About':
				return <About onClose={onClose} />;
			case 'Zap':
				return <Zap onClose={onClose} />;
			case 'Education':
				return <Education onClose={onClose} />;
			case 'Action':
				return <Action onClose={onClose} />;
			case 'Planter':
				return <Planter onClose={onClose} />;
			case 'Hades':
				return <Hades onClose={onClose} />;
			case 'Emma':
				return <Emma onClose={onClose} />;
			case 'Armani':
				return <Armani onClose={onClose} />;
			case 'Edgar':
				return <Edgar onClose={onClose} />;
			default:
				return null;
		}
	};

	return <div>{component(componentName)}</div>;
};

export default CardFull;
