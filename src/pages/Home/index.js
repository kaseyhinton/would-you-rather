import React from 'react';
import { HMR } from '@pwa/preset-react';
import style from './index.css';
import { getQuestions } from "../../actions/questions";
import { getUsers } from "../../actions/users";
import { store } from '../../store';

class Home extends React.Component {

	componentWillMount() {
		store.dispatch(getQuestions());
		store.dispatch(getUsers());
	}

	render() {
		return (
		<div className={ style.home }>
			<div className={ style.titles }>
				<h1>Would You Rather?</h1>
				<h3>A Game Of Choices</h3>
			</div>
		</div>
	);
	}
}

export default HMR(Home, module);
