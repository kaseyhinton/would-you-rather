import React from 'react';
import { HMR } from '@pwa/preset-react';
import style from './index.css';

function Home() {
	return (
		<div className={ style.home }>
			<div className={ style.titles }>
				<h1>Would You Rather?</h1>
				<h3>A Game Of Choices</h3>
			</div>
		</div>
	);
}

export default HMR(Home, module);
