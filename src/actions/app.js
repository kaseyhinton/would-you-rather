export const LOGIN_USER = "LOGIN_USER";
export const APOLOGIZE = "APOLOGIZE";

export const loginUserAction = user => {
  return {
    type: LOGIN_USER,
    user
  };
};

export const apologize = error => {
    return {
      type: APOLOGIZE,
      error
    };
  };