import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.css';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className={ style.nav }>
				<ul className={ style.links }>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/leaderboard">Leaderboard</Link></li>					
					<li><Link to="/profile">Profile</Link></li>
				</ul>
			</nav>
		);
	}
}
