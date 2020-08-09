import {NameSpace} from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getUserAuthData = (state) => {
  return state[NAME_SPACE].host;
};

export const getError = (state) => {
  return state[NAME_SPACE].error;
};

export const getActiveError = (state) => {
  return state[NAME_SPACE].activeError;
};
