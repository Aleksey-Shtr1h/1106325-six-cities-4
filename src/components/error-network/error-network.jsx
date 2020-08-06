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

export const ErrorNetwork = ({err, onHideErrorBlock, activeError}) => {

  const error = err in StatusError ? StatusError[err] : StatusError.any;

  return (
    <React.Fragment>
      {activeError ?

        <section className="error-network">
          <div className="error-network__container">
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
              className="error-network__btn"
              type="button"
              onClick={() => onHideErrorBlock(activeError)}
            >
              Скрыть
            </button>
          </div>
        </section> :

        <section className="error-network-hide">
          <div className="error-network-hide__container">
            <button
              className="error-network-hide__btn"
              type="button"
              onClick={() => onHideErrorBlock(activeError)}
            >
              {error.infoError}
            </button>
          </div>
        </section>
      }
    </React.Fragment>
  );
};

ErrorNetwork.propTypes = {
  err: propsTypeAll.numberAndNullAndString,
  onHideErrorBlock: propsTypeAll.func,
  activeError: propsTypeAll.bool,
};
