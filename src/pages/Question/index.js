import React from 'react';
import { HMR } from '@pwa/preset-react';
import style from './index.css';
import { connect } from "react-redux";
import Poll from '../../components/Poll';

function Question(props) {
	const {question} = props;
	console.log(props);
	const answered = props.users.filter(user => user.id === props.userId)[0].answers[question.id];
	console.log(answered);
		return (
			<div className={ style.leaderboard }>
				<div className={ style.titles }>
					<Poll
					answered={Boolean(answered)}
					chose={answered}
					key={question.id}
					userId={props.userId}
					users={props.users}
					question={question}
					/> 
				</div>
			</div>
		);
}

const mapStateToProps = (state, props) => {
	console.log();
	return {
		question: Object.values(state.questions.questions || {}).filter(question => question.id === props.match.params.question_id)[0],
		users: Object.values(state.users.users || {}),
		userId: state.app.user
  };
}

export default HMR(connect(mapStateToProps)(Question), module);


