import React from 'react';
import {propsTypeAll} from '../../propsType/propsType.js';

const StatusError = {
  '400': {
    status: `400`,
    infoError: `Введите корректные данные`,
  },

  '401': {
    status: `401`,
    infoError: `Требуется авторизация`,
  },

  '404': {
    status: `404`,
    infoError: `Требуется авторизация`,
  },

  'any': {
    status: ``,
    infoError: `Произошла ошибка`,
  },

};

export const ErrorNetwork = ({err, onHideErrorBlock}) => {

  const error = err in StatusError ? StatusError[err] : StatusError.any;

  return (
    <section className="error-network">

      <p className="error-network__text">
        Произошла ошибка
      </p>

      <p className="error-network__status">
        {error.status}
      </p>

      <p className="error-network__infoError">
        {error.infoError}
      </p>

      <button
        type="button"
        onClick={() => onHideErrorBlock()}
      >
        Скрыть
      </button>
    </section>
  );
};

ErrorNetwork.propTypes = {
  err: propsTypeAll.numberAndNullAndString,
  onHideErrorBlock: propsTypeAll.func,
};
