import { _getQuestions } from "../../_DATA";
import { apologize } from "./app";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const SET_QUESTIONS = "SET_QUESTIONS";

export const getQuestions = () => {
  return dispatch => {
    return _getQuestions().then(
      users => dispatch(setQuestions(users)),
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