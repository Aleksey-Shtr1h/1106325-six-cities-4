import {NameSpace} from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getUserAuthEmail = (state) => {
  return state[NAME_SPACE].email;
};

export const getError = (state) => {
  return state[NAME_SPACE].error;
};
