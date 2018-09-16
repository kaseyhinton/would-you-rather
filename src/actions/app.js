export const LOGIN_USER = "LOGIN_USER";

export const loginUserAction = user => {
  return {
    type: LOGIN_USER,
    user
  };
};
