import { SET_QUESTIONS, ADD_QUESTION } from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      };
    case ADD_QUESTION:
      return {
        ...state,
        questions: {
          ...state.questions,
          question: action.question
        }
      }
    default:
      return state;
  }
};

export default questions;
