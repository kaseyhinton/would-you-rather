import { LOGIN_USER, APOLOGIZE } from "../actions/app";

const app = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.user
      };
    case APOLOGIZE:
      return {
        ...state,
        apologize: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default app;
