import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import {ErrorNetwork} from '../error-network/error-network.jsx';

import {ActionCreatorApp} from '../../store/app-action/app-action.js';
import {AuthorizationStatus} from '../../store/user-reducer/user-reducer.js';
import {getError, getActiveError} from '../../store/user-reducer/user-selectors.js';
import {ActionCreatorUser} from '../../store/user-action/user-action.js';

import {AppRoute} from '../../constans.js';

import {propsTypeAll} from '../../propsType/propsType.js';

export const HeaderSite = ({type, children, userAuthData, error, onHideErrorBlock, activeError, authorizationStatus}) => {

  const userLogo = userAuthData[`avatar_url`] ? `url(https://htmlacademy-react-3.appspot.com/six-cities${userAuthData[`avatar_url`]})` : `url(../img/avatar.svg)`;

  let activeRouteLogin = AppRoute.LOGIN;

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    activeRouteLogin = AppRoute.FAVORITE;
  }

  return (
    <div className={`page page--gray ${type}`}>
      <header className="header">
        <div className="container">
          {(error !== null && type !== `page--main`) &&
            <ErrorNetwork
              err={error}
              onHideErrorBlock={onHideErrorBlock}
              activeError={activeError}
            />
          }
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link header__logo-link--active"
                to={AppRoute.MAIN}
              >
                <img
                  className="header__logo"
                  src="/img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={activeRouteLogin}
                  >
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={{backgroundImage: userLogo}}
                    >
                    </div>
                    <span
                      className="header__user-name user__name"
                    >
                      {userAuthData.email}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: getError(state),
    activeError: getActiveError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHideErrorBlock: bindActionCreators(ActionCreatorUser.hideErrorBlock, dispatch),
    onPageChange: bindActionCreators(ActionCreatorApp.actionPage, dispatch),
  };
};

export const WrapperHeaderSite = connect(mapStateToProps, mapDispatchToProps)(HeaderSite);

HeaderSite.propTypes = {
  type: propsTypeAll.string,
  children: propsTypeAll.children,
  userAuthData: propsTypeAll.userAuthData,
  error: propsTypeAll.numberAndNull,
  onHideErrorBlock: propsTypeAll.func,
  onPageChange: propsTypeAll.func,
  authorizationStatus: propsTypeAll.string,
  activeError: propsTypeAll.boolAndUndefined,
};
