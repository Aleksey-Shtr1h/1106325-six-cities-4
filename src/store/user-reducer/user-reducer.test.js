import {AuthorizationStatus, reducerUser} from './user-reducer.js';
import {ActionTypeUser, ActionCreatorUser} from '../user-action/user-action.js';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducerUser(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    email: `Sign in`,
    error: null,
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

it(`Reducer should change auth email`, () => {
  expect(reducerUser({
    email: `test`,
  }, {
    type: ActionTypeUser.GET_EMAIL,
    payload: `test_2`,
  })).toEqual({
    email: `test_2`,
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
    error: 1,
  }, {
    type: ActionTypeUser.HIDE_ERROR_BLOCK,
    payload: null,
  })).toEqual({
    error: null,
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
