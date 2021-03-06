import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../../_DATA";
import { apologize } from "./app";
import { getUsers } from "./users";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SET_QUESTIONS = "SET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const answerQuestionAsync = answerDto => {
  return dispatch => {
    return _saveQuestionAnswer(answerDto).then(
      result => {
        dispatch(getQuestions());
        dispatch(getUsers());
      },
      error => dispatch(apologize(error))
    );
  };
};

export const addQuestionAsync = question => {
  return dispatch => {
    return _saveQuestion(question).then(
      result => dispatch(addQuestion(result)),
      error => dispatch(apologize(error))
    );
  };
};

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  };
};

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
