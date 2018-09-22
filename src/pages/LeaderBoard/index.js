import React from 'react';
import { HMR } from '@pwa/preset-react';
import style from './index.css';
import { connect } from "react-redux";
import LeaderboardItem from '../../components/LeaderboardItem';

function LeaderBoard(props) {
	return (
		<div className={ style.leaderboard }>
			<div className={ style.titles }>
				<h1>Leaderboard</h1>
				<h3>A Ranking Of Sorts</h3>
				{
					props.users && props.users.map(user => <LeaderboardItem key={user.id} user={user} />)
				}
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
	  users: Object.values(state.users.users || {}).map(user => {
		return{
			...user,
			score: Object.values(user.questions).length + Object.values(user.answers).length
		}
		}).sort((a,b) => b.score - a.score)
	};
  };

export default HMR(connect(mapStateToProps)(LeaderBoard), module);
