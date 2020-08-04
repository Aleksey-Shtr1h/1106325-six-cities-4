import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {WrapperApp} from './components/app/app.jsx';

import {createAPI} from './api.js';
import {OperationData} from './store/data-reducer/data-reducer.js';
import {ActionCreatorUser} from './store/user-action/user-action.js';
import {OperationUser, AuthorizationStatus} from './store/user-reducer/user-reducer.js';

import {rootReducer} from './store/root-reducer.js';

const init = () => {
  const onUnauthorized = () => {
    store.dispatch(ActionCreatorUser.requireAuthorization(AuthorizationStatus.NO_AUTH));
  };

  const api = createAPI(onUnauthorized);

  const store = createStore(
      rootReducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(OperationUser.checkAuth())
  .then(() => {
    store.dispatch(OperationData.loadCitiesOffers());
  })
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <WrapperApp/>
        </Provider>,
        document.querySelector(`#root`)
    );
  });
};

init();
