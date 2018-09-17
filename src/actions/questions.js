import { _getQuestions, _saveQuestion } from "../../_DATA";
import { apologize } from "./app";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SET_QUESTIONS = "SET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export const addQuestionAsync = question => {
  return dispatch => {
    return _addQuestion().then(
      question => dispatch(_saveQuestion(question)),
      error => dispatch(apologize(error))
    );
  };
}

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  }
}

export const getQuestions = () => {
  return dispatch => {
    return _getQuestions().then(
      questions => dispatch(setQuestions(questions)),
      error => dispatch(apologize(error))
    );
  };
};

export const setQuestions = questions => {
  return {
    type: SET_QUESTIONS,
    questions
  };
};