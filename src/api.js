// import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";

// import {ErrorNetwork} from './components/error-network/error-network.jsx';

import {store} from './index.js';
import {ActionCreatorUser} from './store/user-action/user-action.js';

const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации - это особый случай и важно дать понять приложению, что запрос был неудачным.
      throw err;
    }

    store.dispatch(ActionCreatorUser.getError(response));

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
