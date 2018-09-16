import { _getUsers } from "../../_DATA";
import { apologize } from "./app";

export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";

export const getUsers = () => {
  return dispatch => {
    return _getUsers().then(
      users => dispatch(setUsers(users)),
      error => dispatch(apologize(error))
    );
  };
};

export const setUsers = users => {
  return {
    type: SET_USERS,
    users
  };
};
