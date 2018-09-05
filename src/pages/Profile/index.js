import React from 'react';
import { HMR } from '@pwa/preset-react';
import style from './index.css';

function Profile() {
	return (
		<div className={ style.profile }>
			<div className={ style.titles }>
				<h1>Profile</h1>
				<h3>A Master Of Choice</h3>
			</div>
		</div>
	);
}

export default HMR(Profile, module);
