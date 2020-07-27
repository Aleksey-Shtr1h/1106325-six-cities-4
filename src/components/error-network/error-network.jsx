import React from 'react';
import {propsTypeAll} from "../../propsType/propsType.js";

const StatusError = {
  '200': {
    status: `401`,
    infoError: `Требуется авторизация`
  },

  '404': {
    status: `404`,
    infoError: `Требуется авторизация`
  },

  'any': {
    status: ``,
    infoError: `Попробуйте зайти позже`
  },

};

export const ErrorNetwork = ({err}) => {

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
    </section>
  );
};

ErrorNetwork.propTypes = {
  err: propsTypeAll.number,
};
