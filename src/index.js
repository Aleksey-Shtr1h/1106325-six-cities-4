import React from "react";
import ReactDOM from "react-dom";
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

import {WrapperApp} from "./components/app/app.jsx";
import {cityReducer} from './store/city-reducer/city-reducer.js';

import {createAPI} from './api.js';
import {OperationData} from './store/data-reducer/data-reducer.js';
import {rootReducer} from './store/root-reducer.js';

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
};

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI();

const store = createStore(
    rootReducer,
    // cityReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.dispatch(OperationData.loadCitiesOffers());

setTimeout(() =>
  ReactDOM.render(
      <Provider store={store}>
        <WrapperApp/>
      </Provider>,
      document.querySelector(`#root`)
  ), 3000
)
