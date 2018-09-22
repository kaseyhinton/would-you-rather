import React from 'react';
import { HMR } from '@pwa/preset-react';
import style from './index.css';

function NoMatch() {
	return (
		<div className={ style.noMatch }>
			<div className={ style.titles }>
				<h1>404</h1>
				<h3>Whoops, we couldn't find the page you are looking for.</h3>
			</div>
		</div>
	);
}

export default HMR(NoMatch, module);
