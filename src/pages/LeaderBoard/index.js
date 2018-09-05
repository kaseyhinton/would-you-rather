import React from 'react';
import { HMR } from '@pwa/preset-react';
import style from './index.css';

function LeaderBoard(props) {
	return (
		<div className={ style.leaderboard }>
			<div className={ style.titles }>
				<h1>Leaderboard</h1>
				<h3>A Ranking Of Sorts</h3>
			</div>
		</div>
	);
}

export default HMR(LeaderBoard, module);
