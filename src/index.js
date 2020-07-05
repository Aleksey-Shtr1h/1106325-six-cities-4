import React from "react";
import ReactDOM from "react-dom";
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';

import {WrapperApp} from "./components/app/app.jsx";
import {cityReducer} from './store/city-reducer/city-reducer.js';

const store = createStore(
    cityReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
      <WrapperApp/>
    </Provider>,
    document.querySelector(`#root`)
);
