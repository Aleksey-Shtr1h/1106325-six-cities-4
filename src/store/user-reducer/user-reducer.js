import {ActionTypeUser, ActionCreatorUser} from '../user-action/user-action.js';

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  email: `Sign in`,
};

export const OperationUser = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreatorUser.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreatorUser.getEmail(response.data.email));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreatorUser.requireAuthorization(AuthorizationStatus.AUTH));
      });
  },
};

export const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypeUser.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });

    case ActionTypeUser.GET_EMAIL:
      return Object.assign({}, state, {
        email: action.payload,
      });
  }

  return state;
};

