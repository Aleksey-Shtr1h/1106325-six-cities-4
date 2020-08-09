import {AuthorizationStatus, reducerUser} from './user-reducer.js';
import {ActionTypeUser, ActionCreatorUser} from '../user-action/user-action.js';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducerUser(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    host: {email: `Sign In`},
    error: null,
    activeError: false,
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducerUser({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionTypeUser.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducerUser({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionTypeUser.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });

  expect(reducerUser({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionTypeUser.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducerUser({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionTypeUser.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Reducer should change auth data`, () => {
  expect(reducerUser({
    host: {email: `test`},
  }, {
    type: ActionTypeUser.GET_HOST_DATA,
    payload: {email: `test`},
  })).toEqual({
    host: {email: `test`},
  });
});

it(`Reducer should get error status`, () => {
  expect(reducerUser({
    error: 1,
  }, {
    type: ActionTypeUser.GET_ERROR,
    payload: 1,
  })).toEqual({
    error: 1,
  });
});

it(`Reducer should replace error number with null`, () => {
  expect(reducerUser({
    activeError: false,
  }, {
    type: ActionTypeUser.HIDE_ERROR_BLOCK,
    payload: false,
  })).toEqual({
    activeError: false,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreatorUser.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionTypeUser.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreatorUser.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionTypeUser.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });
});
