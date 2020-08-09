import {ActionTypeUser, ActionCreatorUser} from '../user-action/user-action.js';
import {ActionCreatorApp} from '../app-action/app-action.js';

import {PageApp} from '../../constans.js';

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  host: {email: `Sign In`},
  error: null,
  activeError: false,
};

export const OperationUser = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreatorUser.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreatorUser.getHostData(response.data));
        dispatch(ActionCreatorUser.getError({status: null}));
      })
      .catch((err) => {
        dispatch(ActionCreatorUser.getError(err.request));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreatorUser.getHostData(response.data));
        dispatch(ActionCreatorUser.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreatorApp.actionPage(PageApp.MAIN));
        dispatch(ActionCreatorUser.getError({status: null}));
      })
      .catch((err) => {
        dispatch(ActionCreatorUser.getError(err.request));
      });
  },
};

export const reducerUser = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeUser.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });

    case ActionTypeUser.GET_HOST_DATA:
      return Object.assign({}, state, {
        host: action.payload,
      });

    case ActionTypeUser.GET_ERROR:
      return Object.assign({}, state, {
        error: action.payload,
      });

    case ActionTypeUser.HIDE_ERROR_BLOCK:
      return Object.assign({}, state, {
        activeError: action.payload,
      });
  }

  return state;
};

