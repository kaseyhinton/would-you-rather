import { SET_QUESTIONS } from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        questions: action.questions
      };
    default:
      return state;
  }
};

export default questions;
